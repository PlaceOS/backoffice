import { Component, input, output } from '@angular/core';

@Component({
    selector: 'an-action-field',
    template: `
        <div
            class="border-gray-200 flex items-center rounded border px-4 py-2.5 hover:border-base-content"
            role="button"
            [attr.disabled]="disabled()"
            form-field
            tabindex="0"
            (keydown.enter)="performAction()"
        >
            <div
                placeholder
                class="w-0 flex-1 truncate"
                (click)="performAction()"
            >
                <ng-content></ng-content>
            </div>
            <app-icon class="-mr-2 text-2xl" (click)="performAction()">
                arrow_drop_{{ show_tooltip ? 'up' : 'down' }}
            </app-icon>
        </div>
    `,
    styles: [
        `
            :host > div:hover {
                box-shadow: inset 0 0 0 1px currentColor;
            }
        `,
    ],
    standalone: false,
})
export class ActionFieldComponent {
    /** Name of the field */
    public readonly name = input<string>(undefined);
    /** Whether form field is disabled */
    public readonly disabled = input<boolean>(undefined);
    /** Emitter for user interaction events */
    public readonly on_action = output({ alias: 'onAction' });
    /** Whether to show tooltip */
    public show_tooltip = false;

    /**
     * Emit that the user has performed an action on the field
     */
    public performAction() {
        this.show_tooltip = !this.show_tooltip;
        this.on_action.emit();
    }
}
