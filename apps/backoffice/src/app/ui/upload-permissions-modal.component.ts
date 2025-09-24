import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { UploadPermissions } from '../common/uploads';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'upload-permissions-modal',
    template: `
        <header>
            <h2>
                {{ 'COMMON.UPLOAD_FILE' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
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
            @if (!is_public) {
                <div class="flex flex-col space-y-2">
                    <label> {{ 'COMMON.PERMISSIONS' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select [(ngModel)]="permissions">
                            <mat-option value="none">
                                {{ 'COMMON.NONE' | translate }}</mat-option
                            >
                            <mat-option value="support">
                                {{
                                    'COMMON.USER_SUPPORT' | translate
                                }}</mat-option
                            >
                            <mat-option value="admin">
                                {{
                                    'COMMON.USER_ADMIN' | translate
                                }}</mat-option
                            >
                        </mat-select>
                    </mat-form-field>
                </div>
            }
        </main>
        <footer
            class="flex items-center justify-end space-x-2 border-t border-base-200 px-4 py-2"
        >
            <button btn matRipple class="inverse w-32" mat-dialog-close>
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                matRipple
                class="w-32"
                [mat-dialog-close]="{
                    file,
                    is_public: is_public(),
                    permissions: permissions(),
                }"
            >
                {{ 'COMMON.UPLOAD' | translate }}
            </button>
        </footer>
    `,
    styles: [``],
    imports: [
        MatDialogModule,
        TranslatePipe,
        MatRippleModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        MatCheckboxModule,
        IconComponent,
    ],
})
export class UploadPermissionsModalComponent {
    private _dialog_ref =
        inject<MatDialogRef<UploadPermissionsModalComponent>>(MatDialogRef);
    private _data = inject<{
        file: File;
    }>(MAT_DIALOG_DATA);

    /** File to upload */
    public readonly file: File = this._data.file;
    /** Whether file should be public */
    public readonly is_public = signal(true);
    /** Permissions for file */
    public readonly permissions = signal<UploadPermissions>('none');
    public readonly close = () => this._dialog_ref.close();
}
