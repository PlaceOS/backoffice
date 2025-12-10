import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { AuthenticatedImageDirective } from '../ui/authenticated-image.directive';
import { IconComponent } from '../ui/icon.component';
import { UploadInfo } from './upload-library.component';

@Component({
    selector: 'view-upload-modal',
    template: `
        <header
            class="border-base-100 bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border px-4 py-2"
        >
            <h2 class="text-xl font-medium">View Upload</h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="px-2 pb-2">
            <div
                class="border-base-200 relative flex h-[65vh] max-h-[65vh] w-[80vw] max-w-[80vw] items-center justify-center overflow-hidden rounded-xl border"
            >
                @if (type === 'image') {
                    <img
                        class="h-full w-full object-contain object-center"
                        auth
                        [source]="resource"
                        alt="Uploaded content preview"
                    />
                }
                @if (type === 'video') {
                    <video
                        class="h-full w-full object-contain object-center"
                        auth
                        [source]="resource"
                        autoplay
                        controls
                    ></video>
                }
                <div
                    class="border-base-200 bg-base-100 absolute top-2 left-2 max-w-[calc(100%-1rem)] rounded-full border px-2 py-1 font-mono text-sm"
                >
                    {{ name }}
                </div>
            </div>
        </main>
    `,
    styles: [``],
    imports: [
        MatDialogModule,
        AuthenticatedImageDirective,
        IconComponent,
        MatRippleModule,
    ],
})
export class ViewUploadModalComponent {
    private _data = inject<{
        upload: UploadInfo;
    }>(MAT_DIALOG_DATA);

    public readonly resource = `/api/engine/v2/uploads/${this._data.upload.id}/url`;
    public readonly type = this._data.upload.mime_type.split('/')[0];
    public readonly name = this._data.upload.file_name;
}
