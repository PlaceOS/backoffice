import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadInfo } from './upload-library.component';

@Component({
    selector: 'view-upload-modal',
    template: `
        <header
            class="flex items-center justify-between border-b border-base-300 p-2"
        >
            <h1 class="px-2">View Upload - {{ name }}</h1>
            <button icon matRipple mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="bg-base-200">
            <div
                class="flex h-[65vh] max-h-[65vh] w-[80vw] max-w-[80vw] items-center justify-center"
            >
                <img
                    *ngIf="type === 'image'"
                    class="h-full w-full object-contain object-center"
                    auth
                    [source]="resource"
                />
                <video
                    *ngIf="type === 'video'"
                    class="h-full w-full object-contain object-center"
                    auth
                    [source]="resource"
                    autoplay
                    controls
                ></video>
            </div>
        </main>
    `,
    styles: [``],
})
export class ViewUploadModalComponent {
    public readonly resource = `/api/engine/v2/uploads/${this._data.upload.id}/url`;
    public readonly type = this._data.upload.mime_type.split('/')[0];
    public readonly name = this._data.upload.file_name;

    constructor(
        @Inject(MAT_DIALOG_DATA)
        private _data: {
            upload: UploadInfo;
        },
    ) {}
}
