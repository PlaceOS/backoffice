import { Component, OnInit } from '@angular/core';
import { UploadManager, Upload } from '@acaprojects/ngx-uploads';

import { BaseDirective } from '../../globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { copyToClipboard } from '../../utilities/general.utilities';

import * as blobUtil from 'blob-util';

export interface UploadDetails {
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

@Component({
    selector: 'app-upload-list',
    templateUrl: './upload-list.component.html',
    styleUrls: ['./upload-list.component.scss'],
})
export class UploadListComponent extends BaseDirective implements OnInit {
    /** Whether upload list should be displayed */
    public show: boolean = false;
    /** Whether drop details overlay should be shown */
    public show_overlay: boolean = false;
    /** List of uploads */
    public uploads: UploadDetails[] = [];

    constructor(private _upload_manager: UploadManager, private _service: ApplicationService) {
        super();
    }

    public ngOnInit() {
        if (localStorage) {
            this.uploads = JSON.parse(localStorage.getItem('BACKOFFICE.uploads') || '[]');
        }
        this.subscription(
            'show',
            this._service.listen('show_upload_manager').subscribe((show) => (this.show = show))
        );
    }

    public humanReadableByteCount(bytes: number, si: boolean = false) {
        const unit = si ? 1000.0 : 1024.0;

        if (bytes < unit) {
            return bytes + (si ? ' iB' : ' B');
        }

        const exp = Math.floor(Math.log(bytes) / Math.log(unit));
        const pre = (si ? 'kMGTPE' : 'KMGTPE').charAt(exp - 1) + (si ? 'iB' : 'B');

        return (bytes / Math.pow(unit, exp)).toFixed(1) + ' ' + pre;
    }

    /** Upload the image to the cloud */
    public handleFileEvent(event: DragEvent) {
        this.timeout('file_event', () => {
            this.show_overlay = false;
            const element: HTMLInputElement = event.target as any;
            /* istanbul ignore else */
            if (element?.files) {
                const files: FileList = element.files;
                /* istanbul ignore else */
                if (files.length) {
                    this.show = true;
                    for (let i = 0; i < files.length; i++) {
                        this.uploadFile(files[i]);
                    }
                }
            }
        });
    }

    /**
     * Copy the uploaded access URL to the clipboard
     * @param details Details of the successful upload
     */
    public copyLink(details: UploadDetails) {
        copyToClipboard(details.link);
        this._service.notifyInfo(`Copied link for file ${details.name} to clipboard.`);
    }

    /**
     * Retry a failed upload
     * @param details Details of the failed upload
     */
    public retry(details: UploadDetails) {
        if (details.error) {
            details.error = null;
            details.upload.resume();
            this.interval(`upload-${details.name}`, () => {
                if (!details.upload.uploading && details.upload.error) {
                    details.error = details.upload.error;
                    this.clearInterval(`upload-${details.name}`);
                }
                details.progress = details.upload.progress
            });
        }
    }

    /**
     * Upload the given file to the cloud
     * @param file File to upload
     */
    private uploadFile(file: File) {
        const fileReader = new FileReader();
        fileReader.addEventListener('loadend', (e: any) => {
            const arrayBuffer = e.target.result;
            const blob = blobUtil.arrayBufferToBlob(arrayBuffer, file.type);
            const upload_list = this._upload_manager.upload([blob], { file_name: file.name });
            const upload = upload_list[0];
            const upload_details: UploadDetails = {
                name: file.name,
                progress: 0,
                link: '',
                formatted_size: this.humanReadableByteCount(file.size),
                size: file.size,
                upload
            };
            upload.promise.then((state) => {
                if (state.access_url) {
                    upload_details.link = upload.access_url;
                    upload_details.progress = 100;
                    this.updateUploadHistory();
                }
                this.updateUploadHistory();
                this.clearInterval(`upload-${file.name}`);
            }, (err) => {
                upload_details.error = err.message || err;
                this.clearInterval(`upload-${file.name}`);
            });
            this.interval(`upload-${file.name}`, () => {
                if (!upload.uploading && upload.error) {
                    upload_details.error = upload.error;
                    this.clearInterval(`upload-${file.name}`);
                }
                upload_details.progress = upload.progress
            });
            this.uploads.push(upload_details);
        });
        fileReader.readAsArrayBuffer(file);
    }

    /**
     * Store changes to the list of successful uploads
     */
    private updateUploadHistory() {
        const done_list = this.uploads.filter((file) => file.progress >= 100);
        done_list.forEach(i => delete i.upload);
        console.log('Done List:', done_list, this.uploads);
        if (localStorage) {
            localStorage.setItem('BACKOFFICE.uploads', JSON.stringify(done_list));
        }
    }
}
