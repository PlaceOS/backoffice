import { DialogRef } from '@angular/cdk/dialog';
import { Directive, inject, input } from '@angular/core';

/**
 * Close the dialog that the element is in on click.
 * The value of `appDialogClose` is the result of the dialog.
 * A bare attribute closes it with an empty string.
 */
@Directive({
    selector: '[appDialogClose]',
    host: {
        '[attr.type]': 'type()',
        '(click)': 'close()',
    },
})
export class DialogCloseDirective<R = unknown> {
    private readonly _ref = inject<DialogRef<R>>(DialogRef, {
        optional: true,
    });

    /** Result of the dialog */
    public readonly result = input<R>(undefined, {
        alias: 'appDialogClose',
    });
    public readonly type = input<'button' | 'submit' | 'reset'>('button');

    public close() {
        this._ref?.close(this.result());
    }
}
