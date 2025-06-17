import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { i18n } from '../../common/locale.service';
import { notifyError, notifySuccess } from '../../common/notifications';
import { PlaceStorage, saveStorage } from './storage.fn';

@Component({
    selector: 'storage-provider-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (storage?.id ? 'ADMIN.STORAGE_EDIT' : 'ADMIN.STORAGE_NEW')
                    | translate
            "
            [loading]="loading"
            (save)="save()"
        >
            <form [formGroup]="form" class="w-full">
                <div class="flex flex-col">
                    <label for="storage-type">Storage Type</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            name="storage-type"
                            formControlName="storage_type"
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
                                name="bucket-name"
                                formControlName="bucket_name"
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
                                name="region"
                                formControlName="region"
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
                                name="access-key"
                                formControlName="access_key"
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
                                name="access-secret"
                                formControlName="access_secret"
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
                            name="endpoint"
                            formControlName="endpoint"
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
                            name="extensions"
                            formControlName="ext_filter"
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
                            name="mime-types"
                            formControlName="mime_filter"
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
                <settings-toggle formControlName="is_default">{{
                    'ADMIN.STORAGE_IS_DEFAULT_LABEL' | translate
                }}</settings-toggle>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    standalone: false,
})
export class StorageProviderModalComponent {
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
    public readonly form = new FormGroup({
        id: new FormControl(this._data.item?.id || ''),
        authority_id: new FormControl(this._data.domain || ''),
        storage_type: new FormControl(this._data.item?.storage_type || 's3', [
            Validators.required,
        ]),
        bucket_name: new FormControl(this._data.item?.bucket_name || '', [
            Validators.required,
        ]),
        region: new FormControl(this._data.item?.region || '', [
            Validators.required,
        ]),
        access_key: new FormControl(this._data.item?.access_key || '', [
            Validators.required,
        ]),
        access_secret: new FormControl('', [Validators.required]),
        endpoint: new FormControl(this._data.item?.endpoint || ''),
        ext_filter: new FormControl(this._data.item?.ext_filter || []),
        mime_filter: new FormControl(this._data.item?.mime_filter || []),
        is_default: new FormControl(this._data.item?.is_default || false),
    });
    public loading = false;

    constructor(
        @Inject(MAT_DIALOG_DATA)
        private _data: { item?: PlaceStorage; domain?: string },
        private _dialog_ref: MatDialogRef<StorageProviderModalComponent>,
    ) {}

    public async save() {
        this.form.markAllAsTouched();
        if (this.form.invalid) return;
        this.loading = true;
        this._dialog_ref.disableClose = true;

        await saveStorage(this.form.value as PlaceStorage)
            .toPromise()
            .catch((e) => {
                notifyError(i18n('ADMIN.STORAGE_SAVE_ERROR'));
                this.loading = false;
                this._dialog_ref.disableClose = false;
                throw e;
            });
        this.loading = false;
        this._dialog_ref.disableClose = false;
        notifySuccess(i18n('ADMIN.STORAGE_SAVE_SUCCESS'));
        this._dialog_ref.close();
    }
}
