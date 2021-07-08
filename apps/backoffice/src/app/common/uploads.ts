import { UploadManager, Upload } from '@acaprojects/ngx-uploads';
import { Observable } from 'rxjs';

import * as blobUtil from 'blob-util';
import { HashMap } from './types';
import { randomInt } from './general';

let _upload_manager: UploadManager = null;
let _timers: HashMap = {}

export interface UploadDetails {
    /** Unique ID for the upload */
    id: number;
    /** Name of the file uploaded */
    name: string;
    /** Progress of the file upload */
    progress: number;
    /** Link to the uploaded file */
    link: string;
    /** Formatted file size */
    formatted_size: string;
    /** Size of the file being uploaded */
    size: number;
    /** Error with upload request */
    error?: string;
    /** Upload object associated with the file */
    upload: Upload;
}

export function setUploadService(service: UploadManager) {
    _upload_manager = service;
}

export function humanReadableByteCount(bytes: number, si: boolean = false) {
    const unit = si ? 1000.0 : 1024.0;

    if (bytes < unit) {
        return bytes + (si ? ' iB' : ' B');
    }

    const exp = Math.floor(Math.log(bytes) / Math.log(unit));
    const pre = (si ? 'kMGTPE' : 'KMGTPE').charAt(exp - 1) + (si ? 'iB' : 'B');

    return (bytes / Math.pow(unit, exp)).toFixed(1) + ' ' + pre;
}

/**
 * Upload the given file to the cloud
 * @param file File to upload
 */
export function uploadFile(file: File): Observable<UploadDetails> {
    if (!(_upload_manager instanceof UploadManager)) {
        throw Error('No service setup for uploads');
    }
    return new Observable((observer) => {
        const fileReader = new FileReader();
        fileReader.addEventListener('loadend', (e: any) => {
            const arrayBuffer = e.target.result;
            const blob = blobUtil.arrayBufferToBlob(arrayBuffer, file.type);
            const upload_list = _upload_manager.upload([blob], { file_name: file.name });
            const upload = upload_list[0];
            const upload_details: UploadDetails = {
                id: randomInt(9999_9999_9999),
                name: file.name,
                progress: 0,
                link: '',
                formatted_size: humanReadableByteCount(file.size),
                size: file.size,
                upload,
            };
            upload.promise.then(
                (state) => {
                    if (state.access_url) {
                        upload_details.link = upload.access_url;
                        upload_details.progress = 100;
                    }
                    clearInterval(_timers[`upload-${file.name}`]);
                    observer.next(upload_details);
                    observer.complete();
                },
                (err) => {
                    upload_details.error = err.message || err;
                    clearInterval(_timers[`upload-${file.name}`]);
                    observer.error(upload_details);
                }
            );
            _timers[`upload-${file.name}`] = setInterval(() => {
                if (!upload.uploading && upload.error) {
                    upload_details.error = upload.error;
                    clearInterval(_timers[`upload-${file.name}`]);
                }
                upload_details.progress = upload.progress;
                observer.next(upload_details);
            }, 150);
            observer.next(upload_details);
        });
        fileReader.readAsArrayBuffer(file);
    });
}
