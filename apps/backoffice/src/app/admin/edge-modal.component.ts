import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { addEdge, PlaceEdge, updateEdge } from '@placeos/ts-client';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent } from '../common/types';

export interface EdgeModalData {
    edge: PlaceEdge;
}

@Component({
    selector: 'edge-modal',
    template: `
        <header>
            <h3>{{ edge ? 'Edit' : 'New' }} Edge</h3>
            <div class="flex-1"></div>
            <button *ngIf="!loading" btn icon mat-dialog-close>
                <app-icon className="backoffice-cross"></app-icon>
            </button>
        </header>
        <main
            [formGroup]="form"
            *ngIf="!loading && form; else load_state"
            class="overflow-auto p-4"
        >
            <div class="flex flex-col flex-1">
                <label>Name<span>*</span>:</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        formControlName="name"
                        placeholder="Edge Name"
                    />
                    <mat-error>A edge name is required</mat-error>
                </mat-form-field>
            </div>
            <div class="flex flex-col flex-1">
                <label>Description:</label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        formControlName="description"
                        placeholder="Edge description..."
                    ></textarea>
                </mat-form-field>
            </div>
        </main>
        <footer
            *ngIf="!loading"
            class="p-2 border-t border-base-200 flex justify-center"
        >
            <button btn class="w-32" (click)="save()">Save</button>
        </footer>
        <ng-template #load_state>
            <main class="flex flex-col p-8 items-center justify-center">
                <mat-spinner class="mb-4" [diameter]="48"></mat-spinner>
                <p>Saving edge...</p>
            </main>
        </ng-template>
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
        if (!new_edge) return notifyError('Error adding new edge.');
        edge.id
            ? notifySuccess('Successfully updated edge.')
            : notifySuccess(
                  'Successfully added new edge. Please make sure to save the API key as you will not be able to view it again in the future.'
              );
        this._dialog_ref.close(new_edge);
    }
}
