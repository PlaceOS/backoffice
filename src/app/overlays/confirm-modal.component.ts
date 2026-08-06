import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    computed,
    inject,
    signal,
} from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';

import { Clipboard } from '@angular/cdk/clipboard';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { lastValueFrom } from 'rxjs';
import { AsyncHandler } from '../common/async-handler.class';
import { i18n } from '../common/locale.service';
import { notifyInfo } from '../common/notifications';
import { waitForEvent } from '../common/signals';
import { ApplicationIcon, DialogEvent } from '../common/types';
import { IconComponent } from '../ui/icon.component';
import { TranslatePipe } from '../ui/translate.pipe';

/** Breakdown of what enabling a `ConfirmModalOption` would do */
export interface ConfirmModalOptionDetails {
    /** Lines describing the scope the option was resolved over */
    scope?: string[];
    /** Lines describing what will additionally be removed */
    summary?: string[];
    /** Lines describing what will deliberately be left alone */
    warnings?: string[];
}

/** Opt-in toggle offered alongside the confirmation */
export interface ConfirmModalOption {
    /** Identifier the selection is reported under */
    id: string;
    /** Label displayed beside the checkbox */
    label: string;
    /** Explanatory text displayed under the checkbox */
    description?: string;
    /** Whether the option starts enabled. Defaults to `false` */
    enabled?: boolean;
    /**
     * Resolves a breakdown of the option's effect. Run the first time the
     * option is enabled so the cost is only paid when the user asks for it.
     * Confirmation is blocked until it settles.
     */
    details?: () => Promise<ConfirmModalOptionDetails>;
}

/** Options selected on confirmation, keyed by `ConfirmModalOption.id` */
export type ConfirmModalSelection = Record<string, boolean>;

/** A resource listed in the post-action receipt */
export interface ConfirmModalResultItem {
    /** Short type label, e.g. "System" */
    type: string;
    /** Resource id, so the removal can be traced afterwards */
    id: string;
    /** Resource name at the time it was removed */
    name: string;
}

/**
 * Replaces the modal body once the action has run, so the user gets a receipt
 * of what actually happened rather than a transient notification.
 */
export interface ConfirmModalResult {
    /** Heading above the list */
    title: string;
    /** Resources that were removed */
    items: ConfirmModalResultItem[];
    /** Resources that could not be removed */
    failed?: ConfirmModalResultItem[];
    /** Resources never attempted, because an earlier step failed */
    skipped?: ConfirmModalResultItem[];
    /** Explanatory line under the list */
    note?: string;
}

export interface ConfirmModalData {
    /** Title of the modal */
    title: string;
    /** Contents of the modal */
    content: string;
    /** Contents of the modal */
    extra?: [string, string];
    /** Opt-in toggles offered alongside the confirmation */
    options?: ConfirmModalOption[];
    /** Text displaed on the confirmation button */
    confirm_text?: string;
    /** Text displaed on the confirmation button */
    cancel_text?: string;
    /** Icon to display on the modal */
    icon: ApplicationIcon;
    /** Delay before closing the modal */
    close_delay?: number;
}

/**
 * Renders a receipt as tab separated rows, for pasting into a ticket or
 * spreadsheet. Failed rows are marked so a partial run is not mistaken for a
 * complete one.
 */
/**
 * Readable text for whatever an option's `details()` rejected with.
 *
 * ts-client throws the raw `Response` for any non-OK status, and interpolating
 * that yields "[object Response]" — which is what the user would otherwise be
 * shown as the reason they cannot continue.
 */
export function describeError(error: unknown): string {
    if (!error) return 'Unknown error';
    if (typeof error === 'string') return error;
    if (typeof Response !== 'undefined' && error instanceof Response) {
        return `${error.status} ${error.statusText || 'request failed'}`.trim();
    }
    const message = (error as Error)?.message;
    if (message) return message;
    const status = (error as { status?: number; statusText?: string })?.status;
    if (status) {
        return `${status} ${
            (error as { statusText?: string }).statusText || 'request failed'
        }`.trim();
    }
    return 'Unknown error';
}

export function receiptToTsv(result: ConfirmModalResult): string {
    const rows = [
        ...result.items.map((item) => [item.type, item.name, item.id]),
        ...(result.failed || []).map((item) => [
            item.type,
            item.name,
            item.id,
            'FAILED',
        ]),
        ...(result.skipped || []).map((item) => [
            item.type,
            item.name,
            item.id,
            'SKIPPED',
        ]),
    ];
    return rows.map((row) => row.join('\t')).join('\n');
}

export const CONFIRM_METADATA = {
    height: 'auto',
};

export interface ConfirmRepsonse {
    reason: 'done' | '' | null;
    metadata?: { options?: ConfirmModalSelection };
    loading: (_: string) => void;
    close: () => void;
}

export async function openConfirmModal(
    data: ConfirmModalData,
    dialog: MatDialog,
): Promise<ConfirmRepsonse> {
    const ref = dialog.open<ConfirmModalComponent, ConfirmModalData>(
        ConfirmModalComponent,
        {
            ...CONFIRM_METADATA,
            data,
        },
    );
    return {
        ...(await Promise.race([
            waitForEvent(
                ref.componentInstance.event,
                (_: DialogEvent) => _.reason === 'done',
            ),
            lastValueFrom(ref.afterClosed()),
        ])),
        loading: (s) => ref.componentInstance.loading.set(s),
        close: () => ref.close(),
    };
}

@Component({
    selector: 'confirm-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-[calc(100%-1rem)] min-w-[20rem] items-center rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ result() ? result().title : title }}
            </h2>
        </header>
        @if (result(); as receipt) {
            <main
                result
                class="flex w-md max-w-[85vw] flex-col space-y-3 p-4 sm:h-auto"
            >
                @if (receipt.items.length) {
                    <ul
                        result-items
                        class="divide-base-200 border-base-200 max-h-80 divide-y overflow-auto rounded-sm border"
                    >
                        @for (item of receipt.items; track item.id) {
                            <li class="flex items-center space-x-2 px-3 py-2">
                                <span
                                    class="bg-base-200 shrink-0 rounded-xl px-2 py-1 text-xs uppercase"
                                >
                                    {{ item.type }}
                                </span>
                                <span class="flex-1 truncate text-sm">
                                    {{ item.name }}
                                </span>
                                <button
                                    class="mono shrink-0 text-xs opacity-70 hover:opacity-100"
                                    [attr.data-id]="item.id"
                                    (click)="copyId(item.id)"
                                >
                                    {{ item.id }}
                                </button>
                            </li>
                        }
                    </ul>
                }
                @if (receipt.failed?.length) {
                    <div
                        result-failed
                        class="border-error/40 bg-error/10 space-y-1 rounded-sm border p-2"
                    >
                        <p class="text-xs font-medium">
                            {{ 'CASCADE.RECEIPT_FAILED' | translate }}
                        </p>
                        @for (item of receipt.failed; track item.id) {
                            <p class="text-xs">
                                {{ item.type }} — {{ item.name }}
                                <span class="mono opacity-70">
                                    {{ item.id }}
                                </span>
                            </p>
                        }
                    </div>
                }
                @if (receipt.skipped?.length) {
                    <div
                        result-skipped
                        class="border-base-300 bg-base-200 space-y-1 rounded-sm border p-2"
                    >
                        <p class="text-xs font-medium">
                            {{ 'CASCADE.RECEIPT_SKIPPED' | translate }}
                        </p>
                        @for (item of receipt.skipped; track item.id) {
                            <p class="text-xs">
                                {{ item.type }} — {{ item.name }}
                                <span class="mono opacity-70">
                                    {{ item.id }}
                                </span>
                            </p>
                        }
                    </div>
                }
                @if (receipt.note) {
                    <p class="text-xs opacity-70">{{ receipt.note }}</p>
                }
                <button btn matRipple class="w-full" (click)="copyAll()">
                    {{ 'CASCADE.RECEIPT_COPY' | translate }}
                </button>
            </main>
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex items-center justify-center rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    name="close"
                    class="flex-1"
                    mat-dialog-close
                >
                    {{ 'COMMON.CLOSE' | translate }}
                </button>
            </footer>
        } @else if (!loading()) {
            <main
                class="flex w-md max-w-[85vw] flex-col items-center space-y-4 p-4 sm:h-auto"
            >
                <icon [icon]="icon" class="text-5xl" />
                <p content class="text-center" [innerHTML]="content"></p>
                <p
                    extra
                    [class]="'text-' + extra[0] + ' text-center text-sm'"
                    [innerHTML]="extra[1]"
                ></p>
                @for (option of options; track option.id) {
                    <div
                        confirm-option
                        class="border-base-200 bg-base-200/40 w-full space-y-2 rounded-sm border p-3"
                        [attr.data-option]="option.id"
                    >
                        <mat-checkbox
                            [name]="option.id"
                            [checked]="isSelected(option.id)"
                            (change)="toggleOption(option, $event.checked)"
                        >
                            {{ option.label }}
                        </mat-checkbox>
                        @if (option.description) {
                            <p class="pl-8 text-xs opacity-70">
                                {{ option.description }}
                            </p>
                        }
                        @if (isSelected(option.id)) {
                            <div class="pl-8 text-sm">
                                @if (isLoadingDetails(option.id)) {
                                    <div
                                        details-loading
                                        class="flex items-center space-x-2 opacity-60"
                                    >
                                        <mat-spinner diameter="16" />
                                        <span>
                                            {{
                                                'CASCADE.RESOLVING' | translate
                                            }}
                                        </span>
                                    </div>
                                } @else if (detailsError(option.id)) {
                                    <p class="text-error text-xs">
                                        {{ detailsError(option.id) }}
                                    </p>
                                } @else if (detailsFor(option.id); as detail) {
                                    @for (line of detail.scope; track line) {
                                        <p class="text-xs opacity-70">
                                            {{ line }}
                                        </p>
                                    }
                                    @if (detail.summary?.length) {
                                        <ul
                                            details-summary
                                            class="list-disc pl-4"
                                        >
                                            @for (
                                                line of detail.summary;
                                                track line
                                            ) {
                                                <li>{{ line }}</li>
                                            }
                                        </ul>
                                    } @else {
                                        <p
                                            details-empty
                                            class="text-xs opacity-60"
                                        >
                                            {{ 'CASCADE.NOTHING' | translate }}
                                        </p>
                                    }
                                    @for (line of detail.warnings; track line) {
                                        <!-- The warn colour is a yellow that
                                             only reads on a dark background,
                                             so it tints the block rather than
                                             the text. -->
                                        <p
                                            details-warning
                                            class="border-warning bg-warning/10 mt-2 rounded-sm border-l-2 py-1 pr-1 pl-2 text-xs"
                                        >
                                            {{ line }}
                                        </p>
                                    }
                                }
                            </div>
                        }
                    </div>
                }
            </main>
        } @else {
            <main loading>
                <div
                    class="flex h-48 w-full flex-col items-center justify-center space-y-4 p-12"
                >
                    <mat-spinner diameter="32" />
                    <p>{{ loading() }}</p>
                </div>
            </main>
        }
        @if (!loading() && !result()) {
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse bg-base-100 flex-1"
                    mat-dialog-close
                >
                    {{ cancel_text | translate }}
                </button>
                <button
                    btn
                    matRipple
                    name="accept"
                    class="flex-1"
                    [disabled]="resolving() || blocked()"
                    (click)="onConfirm()"
                >
                    {{ confirm_text | translate }}
                </button>
            </footer>
        }
    `,
    styles: [``],
    imports: [
        MatProgressSpinnerModule,
        MatCheckboxModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatDialogModule,
    ],
})
export class ConfirmModalComponent extends AsyncHandler implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<ConfirmModalComponent>>(MatDialogRef);
    private _data = inject<ConfirmModalData>(MAT_DIALOG_DATA);
    private _clipboard = inject(Clipboard);

    /** Loading state */
    public readonly loading = signal('');
    /**
     * Receipt of what the action removed. While set the modal shows the list
     * instead of the confirmation, so the user can read (and copy) the ids
     * rather than watch a notification disappear.
     */
    public readonly result = signal<ConfirmModalResult | null>(null);
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Title of the confirm modal */
    public readonly title: string = this._data.title || 'COMMON.CONFIRM';
    /** Body of the confirm modal */
    public readonly content: string = this._data.content || 'Are you sure?';
    /** Body of the confirm modal */
    public readonly extra: [string, string] = this._data.extra || ['', ''];
    /** Display text on the confirm button */
    public readonly confirm_text: string =
        this._data.confirm_text || 'COMMON.ACCEPT';
    /** Display text on the cancel button */
    public readonly cancel_text: string =
        this._data.cancel_text || 'COMMON.CANCEL';
    /** Display icon properties */
    public readonly icon: ApplicationIcon = this._data.icon || {
        class: 'material-symbols-rounded',
        content: 'done',
    };
    /** Opt-in toggles offered alongside the confirmation */
    public readonly options: ConfirmModalOption[] = this._data.options || [];

    /** Currently enabled options, keyed by option id */
    private readonly _selected = signal<ConfirmModalSelection>(
        Object.fromEntries(
            (this._data.options || []).map((option) => [
                option.id,
                !!option.enabled,
            ]),
        ),
    );
    /** Resolved breakdowns, keyed by option id */
    private readonly _details = signal<
        Record<string, ConfirmModalOptionDetails>
    >({});
    /** Options currently resolving their breakdown */
    private readonly _resolving = signal<Record<string, boolean>>({});
    /** Failures from resolving a breakdown, keyed by option id */
    private readonly _errors = signal<Record<string, string>>({});

    /**
     * Whether a *selected* option is still resolving its breakdown. Scoped to
     * the selection on purpose: unticking an option whose lookup is still in
     * flight must release the confirm button rather than hold it until a
     * request nobody is waiting on finally settles.
     */
    public readonly resolving = computed(() =>
        this.options.some(
            (option) =>
                this._selected()[option.id] && this._resolving()[option.id],
        ),
    );

    /**
     * Whether confirmation has to be withheld because a selected option has no
     * usable breakdown. An option that offers `details` is promising to say
     * what it will do; if that resolution failed there is nothing to act on,
     * and confirming would run whatever the caller does *without* the option —
     * which for a cascade delete means removing the parent and orphaning
     * everything the cascade was there to take with it.
     */
    public readonly blocked = computed(() =>
        this.options.some(
            (option) =>
                !!option.details &&
                this._selected()[option.id] &&
                !this._resolving()[option.id] &&
                !this._details()[option.id],
        ),
    );

    public readonly isSelected = (id: string) => !!this._selected()[id];
    public readonly isLoadingDetails = (id: string) => !!this._resolving()[id];
    public readonly detailsFor = (id: string) => this._details()[id];
    public readonly detailsError = (id: string) => this._errors()[id];

    /** Enable or disable an option, resolving its breakdown on first enable */
    public toggleOption(option: ConfirmModalOption, enabled: boolean) {
        this._selected.update((state) => ({ ...state, [option.id]: enabled }));
        if (!enabled) return;
        this._resolveDetails(option);
    }

    /** Resolves an option's breakdown, once */
    private _resolveDetails(option: ConfirmModalOption) {
        if (!option.details || this._details()[option.id]) return;
        // Already in flight. Without this, unticking and re-ticking starts a
        // second resolution, and whichever settles last wins — so a stale
        // rejection can overwrite a good breakdown, or vice versa.
        if (this._resolving()[option.id]) return;
        this._errors.update((state) => ({ ...state, [option.id]: '' }));
        this._resolving.update((state) => ({ ...state, [option.id]: true }));
        option
            .details()
            .then((details) =>
                this._details.update((state) => ({
                    ...state,
                    [option.id]: details,
                })),
            )
            .catch((error) =>
                this._errors.update((state) => ({
                    ...state,
                    [option.id]: describeError(error),
                })),
            )
            .finally(() =>
                this._resolving.update((state) => ({
                    ...state,
                    [option.id]: false,
                })),
            );
    }
    /** Prevent user from closing the modal */
    public readonly disableClose = () => (this._dialog_ref.disableClose = true);
    /** Allow the user to close the modal */
    public readonly enableClose = () => (this._dialog_ref.disableClose = false);

    public ngOnInit() {
        // An option that starts enabled has never been toggled, so nothing has
        // asked it for a breakdown. Without this it would count as selected
        // with no details and hold the confirm button disabled for good.
        for (const option of this.options) {
            if (this._selected()[option.id]) this._resolveDetails(option);
        }
        if (this._data.close_delay) {
            this.timeout(
                'close',
                () => this._dialog_ref.close(),
                this._data.close_delay,
            );
        }
    }

    /** Copy a single resource id to the clipboard */
    public copyId(id: string) {
        this._clipboard.copy(id);
        notifyInfo(i18n('COMMON.COPIED_ID'));
    }

    /** Copy the whole receipt as TSV, for pasting into a ticket */
    public copyAll() {
        const receipt = this.result();
        if (!receipt) return;
        const count =
            receipt.items.length +
            (receipt.failed || []).length +
            (receipt.skipped || []).length;
        this._clipboard.copy(receiptToTsv(receipt));
        notifyInfo(i18n('CASCADE.RECEIPT_COPIED', { count }, count));
    }

    /** User confirmation of the content of the modal */
    public onConfirm() {
        if (this.resolving() || this.blocked()) return;
        // Only carry metadata when options were offered, so existing callers
        // keep seeing the exact event they always have.
        this.event.emit(
            this.options.length
                ? { reason: 'done', metadata: { options: this._selected() } }
                : { reason: 'done' },
        );
    }
}
