import { Directive, inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

let next_id = 0;

/**
 * Use the element as the accessible name of the dialog it is in.
 * Put it on the dialog heading. It does the same as `mat-dialog-title`
 * without the Material title styles. Outside a dialog it does nothing.
 */
@Directive({
    selector: '[appDialogTitle]',
    host: { '[id]': 'id' },
})
export class DialogTitleDirective implements OnInit, OnDestroy {
    public readonly id = `app-dialog-title-${next_id++}`;
    private readonly _container = inject(MatDialogRef, { optional: true })
        ?._containerInstance;

    // Deferred like MatDialogTitle, so the dialog's host binding does not
    // change while it is being checked
    public ngOnInit() {
        Promise.resolve().then(() =>
            this._container?._addAriaLabelledBy(this.id),
        );
    }

    public ngOnDestroy() {
        Promise.resolve().then(() =>
            this._container?._removeAriaLabelledBy(this.id),
        );
    }
}
