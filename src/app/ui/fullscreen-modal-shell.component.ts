import {
    Component,
    DestroyRef,
    ElementRef,
    inject,
    input,
    output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { filter, merge } from 'rxjs';
import { i18n } from '../common/locale.service';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import { DialogTitleDirective } from './dialog-title.directive';
import { IconComponent } from './icon.component';
import { LoadingLabelDirective } from './loading-label.directive';
import { TranslatePipe } from './translate.pipe';

/** Events in the form that may change a value */
const EDIT_EVENTS = ['input', 'change', 'click', 'keydown'];
/** Keys that move around the form without changing it */
const NAVIGATION_KEYS = new Set([
    'Tab',
    'Escape',
    'Shift',
    'Control',
    'Alt',
    'Meta',
]);

@Component({
    selector: 'fullscreen-modal-shell,[fs-modal-shell]',
    template: `
        <div
            class="bg-base-200 flex h-screen w-screen flex-col items-center overflow-auto"
        >
            <div
                class="border-base-300 bg-base-100 fixed top-0 mx-auto h-screen w-160 max-w-full border-x"
            ></div>
            <header
                class="border-base-100 bg-base-200 sticky top-0 z-10 mx-auto my-2 flex w-156 max-w-full items-center justify-between rounded-sm border px-4 py-2"
            >
                <h2 appDialogTitle class="text-xl font-medium">
                    {{ heading() }}
                </h2>
                @if (!loading()) {
                    <button
                        icon
                        matRipple
                        [attr.aria-label]="'COMMON.CLOSE' | translate"
                        (click)="close()"
                    >
                        <icon>close</icon>
                    </button>
                }
            </header>
            <main
                class="z-0 mx-auto flex min-h-1/2 w-156 max-w-full flex-1 flex-col p-2"
            >
                <ng-content />
                @if (!loading() && !hide_confirm()) {
                    <div class="min-h-16 w-full"></div>
                }
            </main>
            @if (!loading() && !hide_confirm()) {
                <footer
                    class="border-base-100 bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-156 max-w-full -translate-x-1/2 items-center justify-end rounded-sm border px-4 py-2"
                >
                    <button
                        btn
                        matRipple
                        class="w-32 pr-0"
                        [disabled]="disable_confirm()"
                        (click)="save.emit()"
                    >
                        <div class="flex items-center space-x-2">
                            <div>
                                {{
                                    confirm_text() ||
                                        ('COMMON.SAVE' | translate)
                                }}
                            </div>
                            <div class="flex-1"></div>
                            @if (!confirm_text()) {
                                <div class="keycap">S</div>
                            }
                        </div>
                    </button>
                </footer>
            }
            @if (loading()) {
                <div
                    class="bg-base-100/80 fixed inset-0 z-20 flex flex-col items-center justify-center space-y-2 p-12"
                >
                    <mat-spinner [diameter]="32" />
                    <p class="text-center">{{ loading() }}</p>
                </div>
            }
        </div>
    `,
    imports: [
        LoadingLabelDirective,
        DialogTitleDirective,
        MatProgressSpinnerModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
    ],
})
export class FullscreenModalShellComponent {
    private _dialog_ref = inject(MatDialogRef, { optional: true });
    private _dialog = inject(MatDialog);
    private _confirming = false;

    /** Set once the user edits a field, so closing asks before it drops them */
    public touched = false;

    /**
     * Whether a form event may have changed a value. Selects, chips and +/-
     * counters change values without input events, so clicks on buttons or
     * selects and non-navigation keys count as edits too.
     */
    private _isEdit(event: Event) {
        const target = event.target as Element | null;
        if (!target?.closest?.('main')) return false;
        if (event instanceof KeyboardEvent) {
            return !NAVIGATION_KEYS.has(event.key);
        }
        if (event.type === 'click') {
            return !!target.closest('button, [role="combobox"]');
        }
        return true;
    }

    /** Text shown over the form while it saves. Closing is blocked meanwhile */
    public readonly loading = input('');
    public readonly heading = input('Fullscreen Modal');
    public readonly confirm_text = input('');
    public readonly hide_confirm = input(false);
    /** Disable the save button, e.g. until required choices are made */
    public readonly disable_confirm = input(false);
    public readonly save = output();

    constructor() {
        // Capture phase, as Material stops some events (e.g. chip remove)
        const host: HTMLElement = inject(ElementRef).nativeElement;
        const mark = (event: Event) => {
            if (this._isEdit(event)) this.touched = true;
        };
        for (const type of EDIT_EVENTS) {
            host.addEventListener(type, mark, true);
        }
        inject(DestroyRef).onDestroy(() => {
            for (const type of EDIT_EVENTS) {
                host.removeEventListener(type, mark, true);
            }
        });
        const ref = this._dialog_ref;
        if (!ref) return;
        // The shell owns closing so Escape and backdrop clicks can be guarded
        ref.disableClose = true;
        merge(
            ref.backdropClick(),
            ref.keydownEvents().pipe(filter((e) => e.key === 'Escape')),
        )
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.close());
    }

    /** Close the modal, asking first if there are unsaved changes */
    public async close() {
        if (!this._dialog_ref || this.loading() || this._confirming) return;
        if (this.touched) {
            this._confirming = true;
            const details = await openConfirmModal(
                {
                    title: i18n('COMMON.DISCARD_CHANGES'),
                    content: i18n('COMMON.DISCARD_CHANGES_MSG'),
                    icon: { type: 'icon', content: 'edit_off' },
                    confirm_text: i18n('COMMON.DISCARD'),
                },
                this._dialog,
            );
            this._confirming = false;
            if (details.reason !== 'done') return;
            details.close();
        }
        this._dialog_ref.close();
    }
}
