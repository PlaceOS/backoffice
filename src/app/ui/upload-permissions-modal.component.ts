import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UploadPermissions } from '../common/uploads';
import { IconComponent } from './icon.component';
import { SettingsToggleComponent } from './settings-toggle.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'upload-permissions-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex w-[24rem] max-w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'COMMON.UPLOAD_FILE' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="min-w-[20rem] px-4">
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
            @if (!is_public()) {
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
            <div class="pb-4">
                <settings-toggle [(ngModel)]="is_public">{{
                    'COMMON.PUBLIC' | translate
                }}</settings-toggle>
            </div>
        </main>
        <footer
            class="border-base-200 flex items-center justify-end space-x-2 border-t px-4 py-2"
        >
            <button btn matRipple class="inverse w-32 flex-1" mat-dialog-close>
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                matRipple
                class="w-32 flex-1"
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
        MatInputModule,
        MatSelectModule,
        FormsModule,
        IconComponent,
        SettingsToggleComponent,
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
    public readonly is_public = signal(false);
    /** Permissions for file */
    public readonly permissions = signal<UploadPermissions>('none');
    public readonly close = () => this._dialog_ref.close();
}
