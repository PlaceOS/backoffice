import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
    Component,
    DestroyRef,
    effect,
    inject,
    TemplateRef,
    untracked,
    viewChild,
    ViewContainerRef,
} from '@angular/core';
import { dismissToast, Toast, toasts } from '../../common/notifications';

/**
 * Shows the toasts made with `notify()` and its variants.
 * Put it once in the root component.
 *
 * The toasts are in a CDK overlay pane, so they show above open dialogs and
 * are not hidden from assistive tech while a modal is open. Screen readers
 * get each message from the live announcer; errors interrupt at once.
 */
@Component({
    selector: 'app-toast-outlet',
    template: `
        <ng-template #panel>
            <div class="toast-stack">
                @for (toast of list(); track toast.id) {
                    <div
                        class="toast"
                        [class]="toast.type"
                        animate.leave="toast-leave"
                    >
                        <span class="toast-message">{{ toast.message }}</span>
                        @if (toast.action) {
                            <button type="button" (click)="act(toast)">
                                {{ toast.action }}
                            </button>
                        }
                    </div>
                }
            </div>
        </ng-template>
    `,
})
export class ToastOutletComponent {
    private readonly _overlay = inject(Overlay);
    private readonly _announcer = inject(LiveAnnouncer);
    private readonly _panel = viewChild.required('panel', {
        read: TemplateRef,
    });
    private readonly _overlay_ref = this._overlay.create({
        positionStrategy: this._overlay
            .position()
            .global()
            .centerHorizontally()
            .bottom('0'),
        panelClass: 'toast-pane',
    });
    /** Id of the newest toast shown so far */
    private _last_id = -1;

    public readonly list = toasts;

    constructor() {
        const view_container = inject(ViewContainerRef);
        effect(() => {
            const list = this.list();
            const newest = list[list.length - 1];
            if (!newest) {
                this._overlay_ref.detach();
                return;
            }
            if (newest.id === this._last_id) return;
            this._last_id = newest.id;
            // Attach again so the pane moves above dialogs opened since
            if (this._overlay_ref.hasAttached()) this._overlay_ref.detach();
            this._overlay_ref.attach(
                new TemplatePortal(this._panel(), view_container),
            );
            untracked(() =>
                this._announcer.announce(
                    newest.message,
                    newest.type === 'error' ? 'assertive' : 'polite',
                ),
            );
        });
        inject(DestroyRef).onDestroy(() => this._overlay_ref.dispose());
    }

    public act(toast: Toast) {
        toast.on_action();
        dismissToast(toast.id);
    }
}
