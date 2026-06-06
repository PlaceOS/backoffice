import { Service, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { UploadPermissionsModalComponent } from '../ui/upload-permissions-modal.component';
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

    public uploadFileWithPermissions(file: File) {
        return new Promise<number>((resolve, reject) => {
            const ref = this._dialog.open(UploadPermissionsModalComponent, {
                data: { file },
            });
            lastValueFrom(ref.afterClosed()).then(async (details) => {
                if (details) {
                    const id = await this.uploadFile(
                        details.file,
                        details.is_public,
                        details.permissions,
                    ).catch((e) => {
                        reject(e);
                        throw e;
                    });
                    resolve(id);
                } else reject();
            });
        });
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
