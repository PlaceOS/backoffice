import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { addEdge, PlaceEdge, updateEdge } from '@placeos/ts-client';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent } from '../common/types';
import { i18n } from '../common/translate';

export interface EdgeModalData {
    edge: PlaceEdge;
}

@Component({
    selector: 'edge-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (edge ? 'ADMIN.EDGE_EDIT' : 'ADMIN.EDGE_NEW') | translate
            "
            [loading]="loading"
            (save)="save()"
        >
            <form [formGroup]="form" class="overflow-auto p-4">
                <div class="flex flex-col flex-1">
                    <label>
                        {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            formControlName="name"
                            [placeholder]="
                                'ADMIN.EDGE_NAME_PLACEHOLDER' | translate
                            "
                        />
                        <mat-error>{{
                            'ADMIN.EDGE_NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col flex-1">
                    <label>{{ 'COMMON.FIELD_DESCRIPTION' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            formControlName="description"
                            [placeholder]="
                                'ADMIN.EDGE_DESCRIPTION_PLACEHOLDER' | translate
                            "
                        ></textarea>
                    </mat-form-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [
        `
            main {
                width: 32rem;
                max-width: calc(100vw - 5rem);
                max-height: 65vh;
            }
        `,
    ],
})
export class EdgeModalComponent {
    @Output() public readonly event = new EventEmitter<DialogEvent>();

    public readonly edge = this._data.edge;

    public form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl(''),
    });

    public loading = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: EdgeModalData,
        private _dialog_ref: MatDialogRef<EdgeModalComponent>
    ) {}

    public ngOnInit() {
        this.form.patchValue(this.edge);
    }

    public async save() {
        this.form.markAllAsTouched();
        if (!this.form.valid) return;
        this._dialog_ref.disableClose = true;
        this.loading = true;
        const edge = { ...this.edge, ...this.form.value };
        const method = edge.id ? updateEdge(edge.id, edge) : addEdge(edge);
        const new_edge = await method.toPromise().catch((_) => null);
        this.loading = false;
        this._dialog_ref.disableClose = false;
        if (!new_edge) return notifyError(i18n('ADMIN.EDGE_ERROR'));
        edge.id
            ? notifySuccess(i18n('ADMIN.EDGE_NEW_SUCCESS'))
            : notifySuccess(i18n('ADMIN.EDGE_EDIT_SUCCESS'));
        this._dialog_ref.close(new_edge);
    }
}
