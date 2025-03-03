import { Component, Inject } from '@angular/core';
import { UploadPermissions } from '../common/uploads';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'upload-permissions-modal',
    template: `
        <header>
            <h2>
                {{ 'COMMON.UPLOAD_FILE' | translate }}
            </h2>
            <button btn icon mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="min-w-[20rem] p-4">
            <div class="flex flex-col space-y-2">
                <label> {{ 'COMMON.FILENAME' | translate }}</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        [ngModel]="file.name"
                        disabled="true"
                        [placeholder]="'COMMON.FILENAME' | translate"
                    />
                </mat-form-field>
            </div>
            <div class="pb-4">
                <mat-checkbox [(ngModel)]="is_public">
                    {{ 'COMMON.PUBLIC' | translate }}</mat-checkbox
                >
            </div>
            <div class="flex flex-col space-y-2" *ngIf="!is_public">
                <label> {{ 'COMMON.PERMISSIONS' | translate }}</label>
                <mat-form-field appearance="outline">
                    <mat-select [(ngModel)]="permissions">
                        <mat-option value="none">
                            {{ 'COMMON.NONE' | translate }}</mat-option
                        >
                        <mat-option value="support">
                            {{ 'COMMON.USER_SUPPORT' | translate }}</mat-option
                        >
                        <mat-option value="admin">
                            {{ 'COMMON.USER_ADMIN' | translate }}</mat-option
                        >
                    </mat-select>
                </mat-form-field>
            </div>
        </main>
        <footer
            class="flex items-center justify-end space-x-2 border-t border-base-200 px-4 py-2"
        >
            <button btn class="inverse w-32" mat-dialog-close>
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                class="w-32"
                [mat-dialog-close]="{ file, is_public, permissions }"
            >
                {{ 'COMMON.UPLOAD' | translate }}
            </button>
        </footer>
    `,
    styles: [``],
})
export class UploadPermissionsModalComponent {
    /** File to upload */
    public readonly file: File = this._data.file;
    /** Whether file should be public */
    public is_public: boolean = true;
    /** Permissions for file */
    public permissions: UploadPermissions = 'none';

    constructor(
        private _dialog_ref: MatDialogRef<UploadPermissionsModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: { file: File },
    ) {
        this.file = this._data.file;
    }

    public close() {
        this._dialog_ref.close();
    }
}
