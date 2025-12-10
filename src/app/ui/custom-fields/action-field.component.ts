import { Component, input, output } from '@angular/core';
import { IconComponent } from '../icon.component';

@Component({
    selector: 'an-action-field',
    template: `
        <button
            class="hover:border-base-content flex items-center rounded-sm border border-gray-200 px-4 py-2.5"
            [attr.disabled]="disabled()"
            form-field
            (click)="performAction()"
            (keydown.enter)="performAction()"
        >
            <div placeholder class="w-0 flex-1 truncate">
                <ng-content></ng-content>
            </div>
            <icon class="-mr-2 text-2xl">
                arrow_drop_{{ show_tooltip ? 'up' : 'down' }}
            </icon>
        </button>
    `,
    styles: [
        `
            :host > div:hover {
                box-shadow: inset 0 0 0 1px currentColor;
            }
        `,
    ],
    imports: [IconComponent],
})
export class ActionFieldComponent {
    /** Name of the field */
    public readonly name = input<string>(undefined);
    /** Whether form field is disabled */
    public readonly disabled = input<boolean>(undefined);
    /** Emitter for user interaction events */
    public readonly performedAction = output();
    /** Whether to show tooltip */
    public show_tooltip = false;

    /**
     * Emit that the user has performed an action on the field
     */
    public performAction() {
        this.show_tooltip = !this.show_tooltip;
        this.performedAction.emit();
    }
}
