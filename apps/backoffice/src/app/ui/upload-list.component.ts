import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseClass } from 'apps/backoffice/src/app/common/base.class';
import { copyToClipboard } from 'apps/backoffice/src/app/common/general';
import { notifyInfo } from 'apps/backoffice/src/app/common/notifications';
import { SettingsService } from 'apps/backoffice/src/app/common/settings.service';
import { UploadDetails, uploadFile } from '../common/uploads';
import { UploadsService } from '../common/uploads.service';

@Component({
    selector: 'app-upload-list',
    template: `
        <div
            *ngIf="show"
            upload-list
            class="absolute bottom-2 left-2 rounded overflow-hidden bg-white border border-gray-200 text-sm text-black shadow pointer-events-auto"
        >
            <div class="flex items-center bg-gray-700 text-white">
                <div class="flex-1 px-4">
                    Uploads({{ (uploads | async)?.length || '0' }})
                </div>
                <button mat-icon-button (click)="show = false">
                    <app-icon className="backoffice-cross"></app-icon>
                </button>
            </div>
            <div list class="overflow-auto max-h-[65vh]">
                <ul *ngIf="(uploads | async)?.length; else no_uploads">
                    <li
                        upload-file
                        *ngFor="let item of uploads | async"
                        class="my-1 h-12 hover:bg-gray-200"
                        [class.error]="item.error"
                    >
                        <div class="flex items-center p-2" [title]="item.name">
                            <div class="flex-1 w-1/2">{{ item.name }}</div>
                            <a
                                mat-button
                                *ngIf="item.progress >= 100 && item.link"
                                (click)="copyLink(item)"
                                i18n="@@uploadLink"
                            >
                                Link
                            </a>
                            <button
                                mat-button
                                *ngIf="item.error"
                                (click)="retry(item)"
                                i18n="@@uploadRetry"
                            >
                                Retry
                            </button>
                            <div class="size mr-2">
                                {{ item.formatted_size }}
                            </div>
                            <div
                                class="progress"
                                *ngIf="item.progress < 100 && !item.error"
                            >
                                {{ item.progress }}%
                            </div>
                            <app-icon
                                *ngIf="item.progress >= 100 && !item.error"
                                className="backoffice-check"
                                class="bg-success text-white rounded-full"
                            ></app-icon>
                            <app-icon
                                *ngIf="item.error"
                                className="backoffice-cross"
                                class="bg-error text-white rounded-full"
                                [matTooltip]="item.error"
                            ></app-icon>
                        </div>
                        <mat-progress-bar
                            *ngIf="item.progress < 100 && !item.error"
                            mode="determinate"
                            [value]="item.progress"
                        ></mat-progress-bar>
                    </li>
                </ul>
            </div>
        </div>
        <div
            class="absolute inset-0"
            *ngIf="enabled"
            (document:dragenter)="onEnter($event)"
            (drop)="hideOverlay()"
        ></div>
        <div
            class="fixed inset-0 bg-black bg-opacity-60"
            dropzone
            (dragend)="show_overlay = false"
            (dragleave)="show_overlay = false"
            (drop)="handleFileEvent($event)"
            *ngIf="show_overlay"
        >
            <div
                class="absolute bottom-0 p-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center pointer-events-none"
            >
                <app-icon
                    class="animate-bounce mb-4 text-7xl text-white"
                    className="backoffice-upload-to-cloud"
                ></app-icon>
                <div class="bg-white rounded p-4 text-black shadow">
                    Drop files to upload them to the cloud
                </div>
            </div>
            <input
                class="absolute inset-0 opacity-0 z-50 w-full"
                type="file"
                multiple
                (change)="handleFileEvent($event)"
            />
        </div>
        <ng-template #no_uploads>
            <div class="w-full flex flex-col items-center m-auto p-8">
                <app-icon className="backoffice-cross"></app-icon>
                <p>No uploads to show</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                position: absolute;
                pointer-events: none;
                z-index: 9999;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }

            [upload-list] {
                width: 32rem;
                max-width: calc(100vw - 2rem);
            }
        `,
    ],
})
export class UploadListComponent extends BaseClass implements OnInit {
    /** Whether upload list should be displayed */
    public show: boolean = false;
    /** Whether drop details overlay should be shown */
    public show_overlay: boolean = false;
    /** List of uploads */
    public readonly uploads = this._uploads.upload_list;

    public get enabled() {
        return !this._settings.value('disable_uploads');
    }

    constructor(
        private _settings: SettingsService,
        private _uploads: UploadsService,
        private _dialog: MatDialog
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'show',
            this._settings
                .listen('show_upload_manager')
                .subscribe((show) => (this.show = show))
        );
        this.subscription(
            'on_dialog_open',
            this._dialog.afterOpened.subscribe(() => {
                this._settings.post('disable_uploads', true);
            })
        );
        this.subscription(
            'on_dialog_closed',
            this._dialog.afterAllClosed.subscribe(() => {
                this._settings.post('disable_uploads', false);
            })
        );
    }

    public onEnter(e) {
        this.show_overlay = e?.dataTransfer?.types.includes('Files');
    }

    public hideOverlay() {
        this.timeout('hide_overlay', () => (this.show_overlay = false));
    }

    /** Upload the image to the cloud */
    public handleFileEvent(event: DragEvent) {
        this.clearTimeout('hide_overlay');
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
                        this._uploads.uploadFile(files[i]);
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
        notifyInfo(`Copied link for file ${details.name} to clipboard.`);
    }

    /**
     * Retry a failed upload
     * @param details Details of the failed upload
     */
    public retry(details: UploadDetails) {
        if (details.error) {
            details.error = null;
            details.upload.resume();
        }
    }
}
