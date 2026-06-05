import { Component, inject, OnInit, output, signal } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { addEdge, PlaceEdge, updateEdge } from '@placeos/ts-client';
import { lastValueFrom } from '../common/general';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent } from '../common/types';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { TranslatePipe } from '../ui/translate.pipe';

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
            [loading]="loading()"
            (save)="save()"
        >
            <form [formGroup]="form">
                <div class="flex flex-1 flex-col">
                    <label for="edge-name">
                        {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            id="edge-name"
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
                <div class="flex flex-1 flex-col">
                    <label for="edge-description">{{
                        'COMMON.FIELD_DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            id="edge-description"
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
    imports: [
        FullscreenModalShellComponent,
        MatFormFieldModule,
        MatInputModule,
        TranslatePipe,
        ReactiveFormsModule,
    ],
})
export class EdgeModalComponent implements OnInit {
    private _data = inject<EdgeModalData>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<EdgeModalComponent>>(MatDialogRef);

    public readonly event = output<DialogEvent>();

    public readonly edge = this._data.edge;

    public form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl(''),
    });

    public readonly loading = signal('');

    public ngOnInit() {
        this.form.patchValue(this.edge);
    }

    public async save() {
        this.form.markAllAsTouched();
        if (!this.form.valid) return;
        this._dialog_ref.disableClose = true;
        this.loading.set('Saving edge node...');
        const edge = { ...this.edge, ...this.form.value };
        const method = edge.id ? updateEdge(edge.id, edge) : addEdge(edge);
        const new_edge = await lastValueFrom(method).catch(() => null);
        this.loading.set('');
        this._dialog_ref.disableClose = false;
        if (!new_edge) return notifyError(i18n('ADMIN.EDGE_ERROR'));
        if (edge.id) {
            notifySuccess(i18n('ADMIN.EDGE_NEW_SUCCESS'));
        } else {
            notifySuccess(i18n('ADMIN.EDGE_EDIT_SUCCESS'));
        }
        this._dialog_ref.close(new_edge);
    }
}
