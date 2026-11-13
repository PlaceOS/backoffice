import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UploadPermissions } from '../common/uploads';
import { DialogCloseDirective } from './controls/dialog';
import { FormFieldComponent } from './controls/form-field.component';
import { OptionComponent } from './controls/option.component';
import { SelectComponent } from './controls/select.component';
import { DialogTitleDirective } from './dialog-title.directive';
import { IconComponent } from './icon.component';
import { SettingsToggleComponent } from './settings-toggle.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'upload-permissions-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex w-[24rem] max-w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none p-2"
        >
            <h2 appDialogTitle class="px-2 text-xl font-medium">
                {{ 'COMMON.UPLOAD_FILE' | translate }}
            </h2>
            <button
                icon
                ripple
                appDialogClose
                [attr.aria-label]="'COMMON.CLOSE' | translate"
            >
                <icon>close</icon>
            </button>
        </header>
        <main class="min-w-[20rem] px-4">
            <div class="flex flex-col space-y-2">
                <label for="filename">{{
                    'COMMON.FILENAME' | translate
                }}</label>
                <app-form-field>
                    <input
                        id="filename"
                        [ngModel]="file.name"
                        disabled="true"
                        [placeholder]="'COMMON.FILENAME' | translate"
                    />
                </app-form-field>
            </div>
            @if (!is_public()) {
                <div class="flex flex-col space-y-2">
                    <label for="permissions">{{
                        'COMMON.PERMISSIONS' | translate
                    }}</label>
                    <app-form-field>
                        <app-select id="permissions" [(ngModel)]="permissions">
                            <app-option value="none">
                                {{ 'COMMON.NONE' | translate }}</app-option
                            >
                            <app-option value="support">
                                {{
                                    'COMMON.USER_SUPPORT' | translate
                                }}</app-option
                            >
                            <app-option value="admin">
                                {{
                                    'COMMON.USER_ADMIN' | translate
                                }}</app-option
                            >
                        </app-select>
                    </app-form-field>
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
            <button btn ripple class="inverse w-32 flex-1" appDialogClose>
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                ripple
                class="w-32 flex-1"
                [appDialogClose]="{
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
        DialogCloseDirective,
        OptionComponent,
        SelectComponent,
        FormFieldComponent,
        DialogTitleDirective,
        TranslatePipe,
        FormsModule,
        IconComponent,
        SettingsToggleComponent,
    ],
})
export class UploadPermissionsModalComponent {
    private _dialog_ref =
        inject<DialogRef<unknown, UploadPermissionsModalComponent>>(DialogRef);
    private _data = inject<{
        file: File;
    }>(DIALOG_DATA);

    /** File to upload */
    public readonly file: File = this._data.file;
    /** Whether file should be public */
    public readonly is_public = signal(false);
    /** Permissions for file */
    public readonly permissions = signal<UploadPermissions>('none');
    public readonly close = () => this._dialog_ref.close();
}
