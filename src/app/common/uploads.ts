import {
    humanReadableByteCount,
    initUploads,
    uploadFile as uploadNewFile,
} from '@placeos/cloud-uploads';
import { token } from '@placeos/ts-client';

import { randomInt } from './general';
import { SubscriptionLike } from './signals';

import * as blobUtil from 'blob-util';

/** Token last passed to the upload service */
let upload_token = '';

/**
 * Initialise the upload service with the current PlaceOS token.
 * Call before each upload. The upload library has no token setter, so it is
 * initialised again only when the token has changed since the last call.
 */
export function syncUploadToken() {
    const current_token = token();
    if (!current_token || current_token === upload_token) return;
    upload_token = current_token;
    initUploads({
        auto_start: true,
        token: current_token,
        endpoint: '/api/engine/v2/uploads',
        worker_url: 'assets/md5_worker.js',
    });
}

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

export interface UploadStream {
    subscribe(
        next: (details: UploadDetails) => void,
        error?: (details: UploadDetails) => void,
        complete?: () => void,
    ): SubscriptionLike;
}

/**
 * Upload the given file to the cloud
 * @param file File to upload
 */
export function uploadFile(
    file: File,
    is_public = true,
    permissions: UploadPermissions = 'none',
): UploadStream {
    return {
        subscribe(next, error, complete) {
            let cancelled = false;
            let state_subscription: SubscriptionLike | null = null;
            const fileReader = new FileReader();
            fileReader.addEventListener(
                'loadend',
                async (e: ProgressEvent<FileReader>) => {
                    if (cancelled) return;
                    const arrayBuffer = e.target.result;
                    const _blob = blobUtil.arrayBufferToBlob(
                        arrayBuffer as ArrayBuffer,
                        file.type,
                    );
                    syncUploadToken();
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
                    state_subscription = upload.state.subscribe((state) => {
                        if (cancelled) return;
                        upload_details.progress = state.progress;
                        upload_details.link = uploadURL(upload.id);
                        next(upload_details);
                        if (state.status === 'FAILED') {
                            error?.({
                                ...upload_details,
                                error: 'Upload failed',
                            });
                            state_subscription?.unsubscribe();
                        }
                        if (state.status === 'COMPLETED') {
                            complete?.();
                            state_subscription?.unsubscribe();
                        }
                    });
                    next(upload_details);
                },
            );
            fileReader.readAsArrayBuffer(file);
            return {
                unsubscribe: () => {
                    cancelled = true;
                    state_subscription?.unsubscribe();
                },
            };
        },
    };
}
