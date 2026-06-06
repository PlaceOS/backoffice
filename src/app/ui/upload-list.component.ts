import { DecimalPipe } from '@angular/common';
import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsyncHandler } from '../common/async-handler.class';
import { copyToClipboard } from '../common/general';
import { notifyInfo } from '../common/notifications';
import { SettingsService } from '../common/settings.service';
import { UploadDetails } from '../common/uploads';
import { UploadsService } from '../common/uploads.service';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'app-upload-list',
    template: `
        @if (show()) {
            <div
                upload-list
                class="border-base-300 bg-base-100 text-base-content pointer-events-auto absolute bottom-2 left-2 overflow-hidden rounded-sm border text-sm shadow-sm"
            >
                <div
                    class="bg-base-200 text-base-content flex items-center gap-2 p-2"
                >
                    <div class="px-2 text-lg font-medium">
                        {{ 'COMMON.UPLOADS' | translate }}
                    </div>
                    <div
                        class="mono border-base-100 bg-base-300 rounded-full border px-2 py-1 text-xs"
                    >
                        {{ uploads().length || '0' }}
                    </div>
                    <div class="flex-1"></div>
                    <button
                        icon
                        default
                        matRipple
                        (click)="clearList()"
                        [matTooltip]="'COMMON.CLEAR_UPLOADS' | translate"
                    >
                        <icon>clear_all</icon>
                    </button>
                    <button icon matRipple (click)="show.set(false)">
                        <icon>close</icon>
                    </button>
                </div>
                <div list class="max-h-[65vh] overflow-auto">
                    @if (uploads().length) {
                        <ul>
                            @for (item of uploads(); track item.id) {
                                <li
                                    upload-file
                                    class="hover:bg-base-200 relative my-1 flex h-12 items-center space-x-2 px-2"
                                    [class.error]="item.error"
                                    [title]="item.name"
                                >
                                    <div class="w-1/2 flex-1 truncate pl-2">
                                        {{ item.name }}
                                    </div>
                                    <div
                                        class="size mr-2 w-20 text-right font-mono text-sm"
                                    >
                                        {{ item.formatted_size }}
                                    </div>
                                    @if (item.progress < 100 && !item.error) {
                                        <div class="progress font-mono">
                                            {{
                                                item.progress | number: '1.1-1'
                                            }}%
                                        </div>
                                    }
                                    @if (item.progress >= 100 && !item.error) {
                                        <icon
                                            class="bg-success text-base-100 rounded-full text-xl"
                                        >
                                            done
                                        </icon>
                                    }
                                    @if (item.error) {
                                        <icon
                                            class="bg-error text-base-100 rounded-full text-xl"
                                            [matTooltip]="item.error"
                                        >
                                            close
                                        </icon>
                                    }
                                    @if (item.progress >= 100 && item.link) {
                                        <button
                                            icon
                                            default
                                            matRipple
                                            [matTooltip]="
                                                'COMMON.COPY_LINK' | translate
                                            "
                                            matTooltipPosition="right"
                                            (click)="copyLink(item)"
                                        >
                                            <icon class="text-2xl"
                                                >content_copy</icon
                                            >
                                        </button>
                                    }
                                    @if (item.error) {
                                        <button
                                            icon
                                            default
                                            matRipple
                                            matTooltipPosition="right"
                                            [matTooltip]="
                                                'COMMON.RETRY' | translate
                                            "
                                            (click)="retry(item)"
                                        >
                                            <icon class="text-2xl"
                                                >refresh</icon
                                            >
                                        </button>
                                    }
                                    @if (item.progress < 100 && !item.error) {
                                        <mat-progress-bar
                                            class="absolute inset-x-0 bottom-0 mx-0!"
                                            mode="determinate"
                                            [value]="item.progress"
                                        ></mat-progress-bar>
                                    }
                                </li>
                            }
                        </ul>
                    } @else {
                        <div
                            class="m-auto flex w-full flex-col items-center space-y-4 p-8 opacity-30"
                        >
                            <icon class="text-4xl">cloud_off</icon>
                            <p>{{ 'COMMON.NO_UPLOADS' | translate }}</p>
                        </div>
                    }
                </div>
            </div>
        }
        <div
            class="fixed inset-0"
            (document:dragenter)="onEnter($event)"
            (drop)="hideOverlay()"
        ></div>
        @if (show_overlay()) {
            <div
                class="fixed inset-0"
                dropzone
                (dragend)="show_overlay.set(false)"
                (dragleave)="show_overlay.set(false)"
                (drop)="handleFileEvent($event)"
            >
                <div
                    class="bg-base-content absolute inset-0 z-0 opacity-60"
                ></div>
                <div
                    class="pointer-events-none absolute bottom-0 left-1/2 flex -translate-x-1/2 transform flex-col items-center p-4"
                >
                    <icon class="text-base-100 mb-4 animate-bounce text-7xl">
                        cloud_upload
                    </icon>
                    <div
                        class="bg-base-100 text-base-content rounded-sm p-4 shadow-sm"
                    >
                        {{ 'COMMON.DROP_UPLOAD_MSG' | translate }}
                    </div>
                </div>
                <input
                    class="pointer-events-auto absolute inset-0 z-9999 w-full opacity-0"
                    type="file"
                    multiple
                    (change)="handleFileEvent($event)"
                />
            </div>
        }
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
    imports: [
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatProgressBarModule,
        MatTooltipModule,
        DecimalPipe,
    ],
})
export class UploadListComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);
    private _uploads = inject(UploadsService);
    private _dialog = inject(MatDialog);

    /** Whether upload list should be displayed */
    public readonly show = signal(false);
    /** Whether drop details overlay should be shown */
    public readonly show_overlay = signal(false);
    /** Whether normal cloud uploads should ignore file drag/drop events */
    public readonly disabled = signal(false);
    /** List of uploads */
    public readonly uploads = this._uploads.upload_list;
    private readonly _show_upload_manager = this._settings.listen<boolean>(
        'show_upload_manager',
    );
    private readonly _disable_uploads =
        this._settings.listen<boolean>('disable_uploads');

    constructor() {
        super();
        effect(() => this.show.set(!!this._show_upload_manager()));
        effect(() => {
            const disabled = !!this._disable_uploads();
            this.disabled.set(disabled);
            if (disabled) this.show_overlay.set(false);
        });
    }

    public ngOnInit() {
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

    public onEnter(e: unknown) {
        if (this.disabled()) {
            this.show_overlay.set(false);
            return;
        }
        this.show_overlay.set(
            (
                (e as Record<string, unknown>)?.dataTransfer as {
                    types: string[];
                }
            )?.types.includes('Files'),
        );
    }

    public hideOverlay() {
        this.timeout('hide_overlay', () => this.show_overlay.set(false));
    }

    public clearList() {
        this._uploads.clearList();
    }

    /** Upload the image to the cloud */
    public handleFileEvent(event: unknown) {
        if (this.disabled()) {
            this.show_overlay.set(false);
            return;
        }
        this.clearTimeout('hide_overlay');
        this.timeout('file_event', () => {
            this.show_overlay.set(false);
            const element: HTMLInputElement = (event as Record<string, unknown>)
                .target as HTMLInputElement;
            /* istanbul ignore else */
            if (element?.files) {
                const files: FileList = element.files;
                /* istanbul ignore else */
                if (files.length) {
                    this.show.set(true);
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
