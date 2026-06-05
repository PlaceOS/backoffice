import { Component, inject, signal } from '@angular/core';
import { form, FormField, required, submit } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { lastValueFrom } from '../../common/general';
import { i18n } from '../../common/locale.service';
import { notifyError, notifySuccess } from '../../common/notifications';
import { FullscreenModalShellComponent } from '../../ui/fullscreen-modal-shell.component';
import { SettingsToggleComponent } from '../../ui/settings-toggle.component';
import { TranslatePipe } from '../../ui/translate.pipe';
import { PlaceStorage, saveStorage } from './storage.fn';

@Component({
    selector: 'storage-provider-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (storage?.id ? 'ADMIN.STORAGE_EDIT' : 'ADMIN.STORAGE_NEW')
                    | translate
            "
            [loading]="loading()"
            (save)="save()"
        >
            <form class="w-full">
                <div class="flex flex-col">
                    <label for="storage-type">Storage Type</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.storage_type"
                            placeholder="None"
                        >
                            <mat-option value="s3">Amazon S3</mat-option>
                            <mat-option value="azure"
                                >Microsoft Azure</mat-option
                            >
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex space-x-2">
                    <div class="flex flex-1 flex-col">
                        <label for="bucket-name">{{
                            'ADMIN.STORAGE_BUCKET_NAME_LABEL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [formField]="form.bucket_name"
                                [placeholder]="
                                    'ADMIN.STORAGE_BUCKET_NAME_LABEL'
                                        | translate
                                "
                            />
                            <mat-error>{{
                                'ADMIN.STORAGE_BUCKET_NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-1 flex-col">
                        <label for="region">{{
                            'ADMIN.STORAGE_REGION_LABEL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [formField]="form.region"
                                [placeholder]="
                                    'ADMIN.STORAGE_REGION_LABEL' | translate
                                "
                            />
                            <mat-error>{{
                                'ADMIN.STORAGE_REGION_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="flex flex-1 flex-col">
                        <label for="access-key">{{
                            'ADMIN.STORAGE_ACCESS_KEY_LABEL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [formField]="form.access_key"
                                [placeholder]="
                                    'ADMIN.STORAGE_ACCESS_KEY_LABEL' | translate
                                "
                            />
                            <mat-error>{{
                                'ADMIN.STORAGE_ACCESS_KEY_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-1 flex-col">
                        <label for="access-secret">{{
                            'ADMIN.STORAGE_SECRET_LABEL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [formField]="form.access_secret"
                                [placeholder]="
                                    'ADMIN.STORAGE_SECRET_LABEL' | translate
                                "
                            />
                            <mat-error>{{
                                'ADMIN.STORAGE_ACCESS_KEY_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="endpoint">{{
                        'ADMIN.STORAGE_ENDPOINT_LABEL' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [formField]="form.endpoint"
                            [placeholder]="
                                'ADMIN.STORAGE_ENDPOINT_LABEL' | translate
                            "
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="extensions">{{
                        'ADMIN.STORAGE_ALLOWED_EXTENSIONS_LABEL' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.ext_filter"
                            [placeholder]="
                                'ADMIN.STORAGE_ALLOW_ALL_EXTENSIONS' | translate
                            "
                            [multiple]="true"
                        >
                            @for (ext of ALLOWED_FILE_EXTENSIONS; track ext) {
                                <mat-option [value]="ext">
                                    {{ ext }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="mime-types">{{
                        'ADMIN.STORAGE_ALLOWED_MIME_LABEL' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.mime_filter"
                            [placeholder]="
                                'ADMIN.STORAGE_ALLOW_ALL_MIME' | translate
                            "
                            [multiple]="true"
                        >
                            @for (mime of ALLOWED_MIME_TYPES; track mime) {
                                <mat-option [value]="mime">
                                    {{ mime }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
                <settings-toggle [formField]="form.is_default">{{
                    'ADMIN.STORAGE_IS_DEFAULT_LABEL' | translate
                }}</settings-toggle>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        SettingsToggleComponent,
        TranslatePipe,
        MatFormFieldModule,
        MatSelectModule,
        FormField,
        MatInputModule,
    ],
})
export class StorageProviderModalComponent {
    private _data = inject<{ item?: PlaceStorage; domain?: string }>(
        MAT_DIALOG_DATA,
    );
    private _dialog_ref = inject(MatDialogRef<StorageProviderModalComponent>);

    public readonly ALLOWED_FILE_EXTENSIONS = [
        'png',
        'webp',
        'bmp',
        'jpg',
        'jpeg',
        'gif',
        'svg',
        'txt',
        'csv',
        'tsv',
        'pdf',
        'tif',
        'tiff',
        'mp3',
        'ogg',
        'rar',
        'zip',
        'mp4',
        'webm',
    ].sort((a, b) => a.localeCompare(b));

    public readonly ALLOWED_MIME_TYPES = [
        'image/png',
        'image/webp',
        'image/bmp',
        'image/jpeg',
        'image/gif',
        'image/svg+xml',
        'text/plain',
        'text/csv',
        'application/pdf',
        'image/tiff',
        'audio/mpeg',
        'audio/ogg',
        'application/vnd.rar',
        'application/zip',
        'video/mp4',
        'video/webm',
    ].sort((a, b) => a.localeCompare(b));
    public readonly storage = this._data.item;
    public readonly formModel = signal({
        id: this._data.item?.id || '',
        authority_id: this._data.domain || '',
        storage_type: this._data.item?.storage_type || 's3',
        bucket_name: this._data.item?.bucket_name || '',
        region: this._data.item?.region || '',
        access_key: this._data.item?.access_key || '',
        access_secret: '',
        endpoint: this._data.item?.endpoint || '',
        ext_filter: [...(this._data.item?.ext_filter || [])],
        mime_filter: [...(this._data.item?.mime_filter || [])],
        is_default: this._data.item?.is_default || false,
    });
    public readonly form = form(this.formModel, (path) => {
        required(path.storage_type);
        required(path.bucket_name);
        required(path.region);
        required(path.access_key);
        required(path.access_secret, {
            when: () => !this._data.item?.id,
        });
    });
    public readonly loading = signal('');

    public async save() {
        await submit(this.form, async () => undefined);
        if (this.form().invalid()) return;
        this.loading.set('Saving storage provider...');
        this._dialog_ref.disableClose = true;
        const details = { ...this.formModel() } as PlaceStorage;
        if (details.id && !details.access_secret) {
            delete (details as PlaceStorage & { access_secret?: unknown })
                .access_secret;
        }
        await lastValueFrom(saveStorage(details)).catch((e) => {
            notifyError(i18n('ADMIN.STORAGE_SAVE_ERROR'));
            this.loading.set('');
            this._dialog_ref.disableClose = false;
            throw e;
        });
        this.loading.set('');
        this._dialog_ref.disableClose = false;
        notifySuccess(i18n('ADMIN.STORAGE_SAVE_SUCCESS'));
        this._dialog_ref.close();
    }
}
