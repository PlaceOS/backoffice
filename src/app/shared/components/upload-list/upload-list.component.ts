import { Component, OnInit } from '@angular/core';
import { UploadManager } from '@acaprojects/ngx-uploads';

import { BaseDirective } from '../../globals/base.directive';

import * as blobUtil from 'blob-util';
import { ApplicationService } from 'src/app/services/app.service';

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
        this._service.set('show_upload_manager', false);
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
            console.log('Target:', event, element.files);
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

    private uploadFile(file: File) {
        console.log('Upload File:', file.name);
        const fileReader = new FileReader();
        fileReader.addEventListener('loadend', (e: any) => {
            const arrayBuffer = e.target.result;
            const blob = blobUtil.arrayBufferToBlob(arrayBuffer, file.type);
            this._upload_manager.upload([blob], { file_name: file.name });
            const upload = this._upload_manager.uploads[this._upload_manager.uploads.length - 1];
            const upload_details: UploadDetails = {
                name: file.name,
                progress: 0,
                link: '',
                formatted_size: this.humanReadableByteCount(file.size),
                size: file.size,
            };
            this.interval(`upload-${file.name}`, () => {
                /* istanbul ignore else */
                if (upload.complete || upload.error) {
                    /* istanbul ignore else */
                    if (upload.access_url && upload.complete) {
                        upload_details.link = upload.access_url;
                        upload_details.progress = 100;
                        this.updateUploadHistory();
                    }
                    this.clearInterval(`upload-${file.name}`);
                } else {
                    upload_details.progress = upload.progress;
                }
            });
            this.uploads.push(upload_details);
        });
        fileReader.readAsArrayBuffer(file);
    }

    private updateUploadHistory() {
        const done_list = this.uploads.filter((file) => file.progress >= 100);
        if (localStorage) {
            localStorage.setItem('BACKOFFICE.uploads', JSON.stringify(done_list));
        }
    }
}
