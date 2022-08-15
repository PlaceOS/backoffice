import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UploadDetails, uploadFile } from './uploads';

@Injectable({
    providedIn: 'root',
})
export class UploadsService {
    private _upload_list = new BehaviorSubject<UploadDetails[]>([]);

    public readonly upload_list = this._upload_list.asObservable();

    constructor() {
        if (localStorage) {
            this._upload_list.next(
                JSON.parse(localStorage.getItem('BACKOFFICE.uploads') || '[]')
            );
        }
    }

    public uploadFile(file: File) {
        return new Promise<number>((resolve) => {
            let resolved = false;
            const update_fn = (details) =>{
                if (!resolved) {
                    resolve(details.id);
                    resolved = true;
                }
                this._upload_list.next([
                    ...this._upload_list
                        .getValue()
                        .filter((_) => _.id !== details.id),
                    details,
                ]);
            }
            uploadFile(file).subscribe(update_fn, update_fn, () =>{
                this._updateUploadHistory();
            });
        });
    }

    private _updateUploadHistory() {
        const done_list = this._upload_list
            .getValue()
            .filter((file) => file.progress >= 100);
        done_list.forEach((i) => delete i.upload);
        if (localStorage) {
            localStorage.setItem(
                'BACKOFFICE.uploads',
                JSON.stringify(done_list)
            );
        }
    }
}
