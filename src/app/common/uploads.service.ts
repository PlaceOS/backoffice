import { Service, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { UploadDetails, UploadPermissions, uploadFile } from './uploads';

@Service()
export class UploadsService {
    private _dialog = inject(MatDialog);

    private _upload_list = signal<UploadDetails[]>([]);

    public readonly upload_list = this._upload_list.asReadonly();

    constructor() {
        if (localStorage) {
            this._upload_list.set(
                JSON.parse(localStorage.getItem('BACKOFFICE.uploads') || '[]'),
            );
        }
    }

    public clearList() {
        const in_progress_list = this._upload_list().filter(
            (file) => file.progress < 100 && !file.error,
        );
        this._upload_list.set(in_progress_list);
    }

    /**
     * Asks the user for upload permissions, then uploads the file.
     * Rejects when the user cancels the permissions modal.
     */
    public async uploadFileWithPermissions(file: File) {
        const { UploadPermissionsModalComponent } = await import(
            '../ui/upload-permissions-modal.component'
        );
        const ref = this._dialog.open(UploadPermissionsModalComponent, {
            data: { file },
        });
        const details = await lastValueFrom(ref.afterClosed(), {
            defaultValue: null,
        });
        if (!details) throw new Error('Upload cancelled');
        return this.uploadFile(
            details.file,
            details.is_public,
            details.permissions,
        );
    }

    public uploadFile(
        file: File,
        is_public = true,
        permissions: UploadPermissions = 'none',
    ) {
        return new Promise<number>((resolve) => {
            let resolved = false;
            const update_fn = (details: UploadDetails) => {
                if (!resolved) {
                    resolve(details.id);
                    resolved = true;
                }
                this._upload_list.set([
                    ...this._upload_list().filter((_) => _.id !== details.id),
                    details,
                ]);
            };
            uploadFile(file, is_public, permissions).subscribe(
                update_fn,
                update_fn,
                () => this._updateUploadHistory(),
            );
        });
    }

    private _updateUploadHistory() {
        const done_list = this._upload_list().filter(
            (file) => file.progress >= 100,
        );
        done_list.forEach((i) => delete i.upload);
        if (localStorage) {
            localStorage.setItem(
                'BACKOFFICE.uploads',
                JSON.stringify(done_list),
            );
        }
    }
}
