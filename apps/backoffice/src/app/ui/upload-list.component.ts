import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { copyToClipboard } from 'apps/backoffice/src/app/common/general';
import { notifyInfo } from 'apps/backoffice/src/app/common/notifications';
import { SettingsService } from 'apps/backoffice/src/app/common/settings.service';
import { UploadDetails } from '../common/uploads';
import { UploadsService } from '../common/uploads.service';

@Component({
    selector: 'app-upload-list',
    template: `
        <div
            *ngIf="show"
            upload-list
            class="pointer-events-auto absolute bottom-2 left-2 overflow-hidden rounded border border-base-300 bg-base-100 text-sm text-base-content shadow"
        >
            <div class="flex items-center bg-base-200 text-base-content">
                <div class="flex-1 px-4">
                    {{ 'COMMON.UPLOADS' | translate }}({{
                        (uploads | async)?.length || '0'
                    }})
                </div>
                <button
                    btn
                    icon
                    (click)="clearList()"
                    [matTooltip]="'COMMON.CLEAR_UPLOADS' | translate"
                >
                    <app-icon>clear_all</app-icon>
                </button>
                <button btn icon (click)="show = false">
                    <app-icon>delete</app-icon>
                </button>
            </div>
            <div list class="max-h-[65vh] overflow-auto">
                <ul *ngIf="(uploads | async)?.length; else no_uploads">
                    <li
                        upload-file
                        *ngFor="let item of uploads | async"
                        class="my-1 h-12 hover:bg-base-200"
                        [class.error]="item.error"
                    >
                        <div
                            class="flex items-center space-x-2 p-2"
                            [title]="item.name"
                        >
                            <div class="w-1/2 flex-1">{{ item.name }}</div>
                            <a
                                btn
                                *ngIf="item.progress >= 100 && item.link"
                                (click)="copyLink(item)"
                            >
                                {{ 'COMMON.LINK' | translate }}
                            </a>
                            <button
                                btn
                                *ngIf="item.error"
                                (click)="retry(item)"
                            >
                                {{ 'COMMON.RETRY' | translate }}
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
                                class="rounded-full bg-success text-base-100"
                            >
                                done
                            </app-icon>
                            <app-icon
                                *ngIf="item.error"
                                class="rounded-full bg-error text-base-100"
                                [matTooltip]="item.error"
                            >
                                close
                            </app-icon>
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
            class="fixed inset-0 bg-base-content bg-opacity-60"
            dropzone
            (dragend)="show_overlay = false"
            (dragleave)="show_overlay = false"
            (drop)="handleFileEvent($event)"
            *ngIf="show_overlay"
        >
            <div
                class="pointer-events-none absolute bottom-0 left-1/2 flex -translate-x-1/2 transform flex-col items-center p-4"
            >
                <app-icon class="mb-4 animate-bounce text-7xl text-base-100">
                    cloud_upload
                </app-icon>
                <div class="rounded bg-base-100 p-4 text-base-content shadow">
                    {{ 'COMMON.DROP_UPLOAD_MSG' | translate }}
                </div>
            </div>
            <input
                class="pointer-events-auto absolute inset-0 z-[9999] w-full opacity-0"
                type="file"
                multiple
                (change)="handleFileEvent($event)"
            />
        </div>
        <ng-template #no_uploads>
            <div
                class="m-auto flex w-full flex-col items-center space-y-4 p-8 opacity-30"
            >
                <app-icon class="text-4xl">cloud_off</app-icon>
                <p>{{ 'COMMON.NO_UPLOADS' | translate }}</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                position: absolute;
                pointer-events: none;
                z-index: 999;
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
    standalone: false
})
export class UploadListComponent extends AsyncHandler implements OnInit {
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
        private _dialog: MatDialog,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'show',
            this._settings
                .listen('show_upload_manager')
                .subscribe((show) => (this.show = show)),
        );
        this.subscription(
            'on_dialog_open',
            this._dialog.afterOpened.subscribe(() => {
                this._settings.post('disable_uploads', true);
            }),
        );
        this.subscription(
            'on_dialog_closed',
            this._dialog.afterAllClosed.subscribe(() => {
                this._settings.post('disable_uploads', false);
            }),
        );
    }

    public onEnter(e) {
        this.show_overlay = e?.dataTransfer?.types.includes('Files');
    }

    public hideOverlay() {
        this.timeout('hide_overlay', () => (this.show_overlay = false));
    }

    public clearList() {
        this._uploads.clearList();
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
                        this._uploads.uploadFileWithPermissions(files[i]);
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
