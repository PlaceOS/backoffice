import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlaceStorage, saveStorage } from './storage.fn';
import { notifyError, notifySuccess } from '../../common/notifications';

@Component({
    selector: 'storage-provider-modal',
    template: `
        <header>
            <h2>{{ storage?.id ? 'Edit' : 'New' }} Storage Provider</h2>
            <button btn icon matRipple mat-dialog-close>
                <app-icon className="backoffice-close"></app-icon>
            </button>
        </header>
        <form [formGroup]="form" class="max-h-[65vh] overflow-auto px-4 py-2">
            <!-- <div class="flex flex-col ">
                <label for="storage-type">Storage Type</label>
                <mat-form-field appearance="outline">
                    <mat-select
                        name="storage-type"
                        formControlName="storage_type"
                        placeholder="None"
                    >
                        <mat-option value="s3">Amazon S3</mat-option>
                    </mat-select>
                </mat-form-field>
            </div> -->
            <div class="flex space-x-2">
                <div class="flex-1 flex flex-col ">
                    <label for="bucket-name">Bucket Name</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="bucket-name"
                            formControlName="bucket_name"
                            placeholder="Bucket Name"
                        />
                        <mat-error>Bucket Name is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex-1 flex flex-col ">
                    <label for="region">Region</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="region"
                            formControlName="region"
                            placeholder="Region"
                        />
                        <mat-error>Region is required</mat-error>
                    </mat-form-field>
                </div>
            </div>
            <div class="flex space-x-2">
                <div class="flex-1 flex flex-col">
                    <label for="access-key">Access Key</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="access-key"
                            formControlName="access_key"
                            placeholder="Access Key"
                        />
                        <mat-error>Access Key is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex-1 flex flex-col">
                    <label for="access-secret">Access Secret</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="access-secret"
                            formControlName="access_secret"
                            placeholder="Access Secret"
                        />
                        <mat-error>Access Secret is required</mat-error>
                    </mat-form-field>
                </div>
            </div>
            <div class="flex flex-col">
                <label for="endpoint">Endpoint</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="endpoint"
                        formControlName="endpoint"
                        placeholder="Endpoint"
                    />
                </mat-form-field>
            </div>
            <div class="flex flex-col">
                <label for="extensions">Allowed File Extensions</label>
                <mat-form-field appearance="outline">
                    <mat-select
                        name="extensions"
                        formControlName="ext_filter"
                        placeholder="Allow all File Extensions"
                        [multiple]="true"
                    >
                        <mat-option
                            *ngFor="let ext of ALLOWED_FILE_EXTENSIONS"
                            [value]="ext"
                        >
                            {{ ext }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="flex flex-col ">
                <label for="mime-types">Allowed File MIME types</label>
                <mat-form-field appearance="outline">
                    <mat-select
                        name="mime-types"
                        formControlName="mime_filter"
                        placeholder="Allow all MIME Types"
                        [multiple]="true"
                    >
                        <mat-option
                            *ngFor="let mime of ALLOWED_MIME_TYPES"
                            [value]="mime"
                        >
                            {{ mime }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
        </form>
        <footer
            class="flex items-center justify-end space-x-2 px-4 py-2 border-t border-gray-200"
            *ngIf="!loading"
        >
            <button btn matRipple mat-dialog-close class="inverse w-32">
                Cancel
            </button>
            <button btn matRipple class="w-32" (click)="save()">Save</button>
        </footer>
    `,
    styles: [``],
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
        access_secret: new FormControl(this._data.item?.access_secret || '', [
            Validators.required,
        ]),
        endpoint: new FormControl(this._data.item?.endpoint || ''),
        ext_filter: new FormControl(this._data.item?.ext_filter || []),
        mime_filter: new FormControl(this._data.item?.mime_filter || []),
    });
    public loading = false;

    constructor(
        @Inject(MAT_DIALOG_DATA)
        private _data: { item?: PlaceStorage; domain?: string },
        private _dialog_ref: MatDialogRef<StorageProviderModalComponent>
    ) {}

    public async save() {
        this.form.markAllAsTouched();
        if (this.form.invalid) return;
        this.loading = true;
        this._dialog_ref.disableClose = true;
        await saveStorage(this.form.value as PlaceStorage)
            .toPromise()
            .catch((e) => {
                notifyError('Failed to save Storage Provider.');
                this.loading = false;
                this._dialog_ref.disableClose = false;
                throw e;
            });
        this.loading = false;
        this._dialog_ref.disableClose = false;
        notifySuccess('Successfully saved Storage Provider.');
        this._dialog_ref.close();
    }
}
