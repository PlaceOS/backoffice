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

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { lastValueFrom } from 'rxjs';
import { AsyncHandler } from '../common/async-handler.class';
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
            <h2 class="px-2 text-xl font-medium">{{ title }}</h2>
        </header>
        @if (!loading()) {
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
        @if (!loading()) {
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
                    [disabled]="resolving()"
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

    /** Loading state */
    public readonly loading = signal('');
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

    /** Whether any option is still resolving its breakdown */
    public readonly resolving = computed(() =>
        Object.values(this._resolving()).some((value) => value),
    );

    public readonly isSelected = (id: string) => !!this._selected()[id];
    public readonly isLoadingDetails = (id: string) => !!this._resolving()[id];
    public readonly detailsFor = (id: string) => this._details()[id];
    public readonly detailsError = (id: string) => this._errors()[id];

    /** Enable or disable an option, resolving its breakdown on first enable */
    public toggleOption(option: ConfirmModalOption, enabled: boolean) {
        this._selected.update((state) => ({ ...state, [option.id]: enabled }));
        if (!enabled || !option.details || this._details()[option.id]) return;
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
                    [option.id]: `${
                        (error as Error)?.message || error || 'Unknown error'
                    }`,
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
        if (this._data.close_delay) {
            this.timeout(
                'close',
                () => this._dialog_ref.close(),
                this._data.close_delay,
            );
        }
    }

    /** User confirmation of the content of the modal */
    public onConfirm() {
        if (this.resolving()) return;
        // Only carry metadata when options were offered, so existing callers
        // keep seeing the exact event they always have.
        this.event.emit(
            this.options.length
                ? { reason: 'done', metadata: { options: this._selected() } }
                : { reason: 'done' },
        );
    }
}
