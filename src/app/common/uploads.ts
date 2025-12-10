import {
    humanReadableByteCount,
    uploadFile as uploadNewFile,
} from '@placeos/cloud-uploads';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

import { randomInt } from './general';

import * as blobUtil from 'blob-util';

function uploadURL(id: string) {
    return `${location.origin}/api/engine/v2/uploads/${encodeURIComponent(
        id,
    )}/url`;
}

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
    upload: Awaited<ReturnType<typeof uploadNewFile>>;
}

export type UploadPermissions = 'none' | 'support' | 'admin';

/**
 * Upload the given file to the cloud
 * @param file File to upload
 */
export function uploadFile(
    file: File,
    is_public = true,
    permissions: UploadPermissions = 'none',
): Observable<UploadDetails> {
    return new Observable((observer) => {
        const fileReader = new FileReader();
        fileReader.addEventListener('loadend', async (e: ProgressEvent<FileReader>) => {
            const arrayBuffer = e.target.result;
            const _blob = blobUtil.arrayBufferToBlob(arrayBuffer as ArrayBuffer, file.type);
            const upload = await uploadNewFile(file, {
                permissions,
                public: is_public,
            } as Record<string, unknown>);
            const upload_details: UploadDetails = {
                id: randomInt(9999_9999_9999),
                name: file.name,
                progress: 0,
                link: uploadURL(upload.id),
                formatted_size: humanReadableByteCount(file.size),
                size: file.size,
                upload: upload,
            };
            upload.state
                .pipe(takeWhile((_) => _.status !== 'COMPLETED', true))
                .subscribe((state) => {
                    upload_details.progress = state.progress;
                    upload_details.link = uploadURL(upload.id);
                    observer.next(upload_details);
                    if (state.status === 'FAILED')
                        observer.error({
                            ...upload_details,
                            error: 'Upload failed',
                        });
                    if (state.status === 'COMPLETED') observer.complete();
                });
            observer.next(upload_details);
        });
        fileReader.readAsArrayBuffer(file);
    });
}
