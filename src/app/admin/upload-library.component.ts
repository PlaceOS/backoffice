import { Clipboard } from '@angular/cdk/clipboard';

import { Dialog } from '@angular/cdk/dialog';
import {
    Component,
    computed,
    effect,
    inject,
    resource,
    signal,
    untracked,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type Upload, uploads } from '@placeos/ts-client';
import { orThrow, orThrowPage } from '@placeos/ts-client/compat';
import { AsyncHandler } from '../common/async-handler.class';
import { readError } from '../common/errors';
import { escapeHtml } from '../common/general';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { authority, setAuthCookie } from '../common/placeos';
import { UploadsService } from '../common/uploads.service';
import { confirmAndRun } from '../overlays/confirm-modal.component';
import { FormFieldComponent } from '../ui/controls/form-field.component';
import { ProgressBarComponent } from '../ui/controls/progress-bar.component';
import { TooltipDirective } from '../ui/controls/tooltip.directive';
import { IconComponent } from '../ui/icon.component';
import { DateFromPipe } from '../ui/pipes/date-from.pipe';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { AdminDataService } from './admin-data.service';
import { ViewUploadModalComponent } from './view-upload-modal.component';

function getMimeType(filename: string): string {
    // Mapping of file extensions to MIME types
    const mimeTypes = {
        txt: 'text/plain',
        html: 'text/html',
        htm: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
        json: 'application/json',
        xml: 'application/xml',
        pdf: 'application/pdf',
        csv: 'text/csv',
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        png: 'image/png',
        gif: 'image/gif',
        bmp: 'image/bmp',
        webp: 'image/webp',
        svg: 'image/svg+xml',
        avif: 'image/avif',
        mp3: 'audio/mpeg',
        wav: 'audio/wav',
        mp4: 'video/mp4',
        avi: 'video/x-msvideo',
        mov: 'video/quicktime',
        zip: 'application/zip',
        rar: 'application/x-rar-compressed',
        '7z': 'application/x-7z-compressed',
        // Add more mappings as needed
    };

    // Extract the file extension
    const extension = `${filename}`.split('.').pop().toLowerCase();

    // Return the MIME type or a default value
    return mimeTypes[extension] || 'application/octet-stream';
}

/** An upload, with the MIME type from its file name */
export interface UploadInfo extends Upload {
    mime_type: string;
}

/** Interval between upload progress checks */
const UPLOAD_POLL_MS = 250;
/** Stop checking upload progress after one hour */
const MAX_UPLOAD_POLLS = (60 * 60 * 1000) / UPLOAD_POLL_MS;

/** Wait after an upload finishes before the list loads again */
const UPLOAD_RELOAD_MS = 1000;

@Component({
    selector: 'upload-library',
    template: `
        <div class="flex h-full w-full flex-col">
            <!-- On a phone the search and upload go below the title -->
            <div
                class="mt-4 mb-4 flex flex-wrap items-center justify-between gap-2 px-4"
            >
                <div class="text-2xl">
                    {{ 'ADMIN.UPLOADS_LIB_HEADER' | translate }}
                </div>
                <div class="flex min-w-0 items-center gap-2">
                    <app-form-field class="no-subscript w-[20rem] max-w-full">
                        <icon prefix class="relative -left-1 text-2xl">
                            search
                        </icon>
                        <input
                            placeholder="Search for file..."
                            aria-label="Search for file"
                            [(ngModel)]="search_term"
                        />
                    </app-form-field>
                    <button
                        icon
                        default
                        ripple
                        class="relative text-xl"
                        [appTooltip]="'COMMON.UPLOAD_FILE' | translate"
                        [attr.aria-label]="'COMMON.UPLOAD_FILE' | translate"
                        (click)="upload_file.click()"
                    >
                        <icon>upload</icon>
                    </button>
                    <input
                        #upload_file
                        hidden
                        type="file"
                        multiple
                        (change)="handleFileEvent($event)"
                    />
                </div>
            </div>
            <div class="flex h-1/2 min-h-0 w-full flex-1 flex-col px-4 pb-4">
                <app-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="!loading()"
                />
                @if (uploads_list().length > 0) {
                    <simple-table
                        class="block min-h-0 w-full min-w-240 flex-1 text-sm"
                        [virtual_row_height]="48"
                        [data]="uploads_list()"
                        [columns]="[
                            {
                                key: 'file_name',
                                name: 'COMMON.FIELD_NAME' | translate,
                                content: name_template,
                            },
                            {
                                key: 'mime_type',
                                name:
                                    'ADMIN.UPLOADS_LIB_FIELD_TYPE' | translate,
                                content: type_template,
                                size: '10rem',
                            },
                            {
                                key: 'file_size',
                                name:
                                    'ADMIN.UPLOADS_LIB_FIELD_SIZE' | translate,
                                content: size_template,
                                size: '7rem',
                            },
                            {
                                key: 'created_at',
                                name: 'COMMON.CREATED_AT' | translate,
                                content: date_template,
                                size: '8rem',
                            },
                            {
                                key: 'actions',
                                name: 'COMMON.ACTIONS' | translate,
                                hide_name: true,
                                sortable: false,
                                content: actions_template,
                                size: '11.5rem',
                            },
                        ]"
                        [sortable]="true"
                        [(sort)]="sort"
                    />
                } @else {
                    <div
                        class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl p-16"
                    >
                        <icon class="text-8xl opacity-30">file_upload</icon>
                        <p class="opacity-30">
                            {{ 'ADMIN.UPLOADS_LIB_LIST_EMPTY' | translate }}
                        </p>
                    </div>
                }
            </div>
        </div>
        <ng-template #name_template let-upload="row">
            <div class="flex h-full w-full items-center p-4 text-xs">
                <div
                    class="mono w-px flex-1 truncate"
                    [appTooltip]="upload.file_name"
                >
                    {{ upload.file_name }}
                </div>
            </div>
        </ng-template>
        <ng-template #type_template let-upload="row">
            <div class="mono truncate p-4 text-xs">{{ upload.mime_type }}</div>
        </ng-template>
        <ng-template #size_template let-upload="row">
            <div class="mono w-full p-4 text-right text-xs">
                {{ sizeOf(upload.file_size) }}
            </div>
        </ng-template>
        <ng-template #date_template let-upload="row">
            <div class="p-4">{{ +upload.created_at * 1000 | dateFrom }}</div>
        </ng-template>
        <ng-template #actions_template let-upload="row">
            <div class="flex w-full items-center justify-end space-x-2 px-2">
                <button
                    icon
                    default
                    ripple
                    (click)="downloadUpload(upload)"
                    [appTooltip]="'ADMIN.UPLOADS_LIB_DOWNLOAD' | translate"
                >
                    <icon>download</icon>
                </button>
                <button
                    icon
                    default
                    ripple
                    (click)="copyLink(upload)"
                    [appTooltip]="'ADMIN.UPLOADS_LIB_COPY' | translate"
                >
                    <icon>content_copy</icon>
                </button>
                <button
                    icon
                    default
                    ripple
                    (click)="viewUpload(upload)"
                    [disabled]="
                        !upload.mime_type.includes('image') &&
                        !upload.mime_type.includes('video')
                    "
                    [appTooltip]="'ADMIN.UPLOADS_LIB_VIEW' | translate"
                >
                    <icon>visibility</icon>
                </button>
                <button
                    icon
                    default
                    error
                    ripple
                    (click)="removeUpload(upload)"
                    [appTooltip]="'ADMIN.UPLOADS_LIB_REMOVE' | translate"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `,
    imports: [
        ProgressBarComponent,
        TooltipDirective,
        FormFieldComponent,
        IconComponent,
        SimpleTableComponent,
        TranslatePipe,
        FormsModule,
        DateFromPipe,
    ],
})
export class UploadLibraryComponent extends AsyncHandler {
    private _dialog = inject(Dialog);
    private _clipboard = inject(Clipboard);
    private _uploads = inject(UploadsService);
    private _admin_data = inject(AdminDataService);

    public readonly search_term = this._admin_data.filter(
        'upload-library:search',
    );
    /**
     * The server lists only the uploads of the domain of the host. It refuses
     * the storage of another domain, also for a sys admin, so there is no
     * domain picker.
     */
    public readonly domain = computed(() => authority());
    public readonly refresh = signal(0);
    public readonly loading = signal(false);
    /** Table sort, kept when the user leaves the page */
    public readonly sort = this._admin_data.sort('upload-library:uploads');

    private _completed_seen = this._uploads.completed_count();
    /**
     * Load the list again a moment after uploads finish, also a retry from
     * the upload list. One load covers the uploads that finish together.
     */
    private readonly _reload_on_upload = effect(() => {
        const completed = this._uploads.completed_count();
        untracked(() => {
            if (completed > this._completed_seen) {
                this.timeout(
                    'reload',
                    () => this.refresh.update((_) => _ + 1),
                    UPLOAD_RELOAD_MS,
                );
            }
            this._completed_seen = completed;
        });
    });

    private readonly _uploads_list = resource({
        params: () => ({
            domain: this.domain(),
            search: this.search_term(),
            refresh: this.refresh(),
        }),
        loader: async ({ params, abortSignal }) => {
            const { domain, search } = params;
            if (!domain) return [] as UploadInfo[];
            const response = await uploads
                .query(
                    { limit: 1000, file_search: search || null },
                    { signal: abortSignal },
                )
                .then(orThrowPage)
                .catch(async (err) => {
                    if (!abortSignal.aborted)
                        notifyError(
                            `Failed to load uploads. Error: ${await readError(err)}`,
                        );
                    return { data: [] as readonly Upload[] };
                });
            return response.data
                .map(
                    (_): UploadInfo => ({
                        ..._,
                        mime_type: getMimeType(_.file_name),
                    }),
                )
                .sort((a, b) => a.file_name.localeCompare(b.file_name));
        },
    });

    public readonly uploads_list = computed(
        () => this._uploads_list.value() || [],
    );

    public sizeOf(bytes: number) {
        const sizes = [' B', 'KB', 'MB', 'GB', 'TB', 'PB'];
        if (bytes === 0) return '0 B';
        const order = Math.log(bytes) / Math.log(1024);
        const level = Math.floor(order);
        const divisor = Math.pow(1024, level);
        const short_bytes = Math.floor((bytes / divisor) * 100) / 100;
        return `${short_bytes} ${sizes[level]}`;
    }

    public copyLink(upload: UploadInfo) {
        this._clipboard.copy(
            `${location.protocol}//${location.host}/api/engine/v2/uploads/${upload.id}/url`,
        );
        notifySuccess(`Copied upload URL to clipboard.`);
    }

    /** Upload the image to the cloud */
    public handleFileEvent(event: Event) {
        this.timeout('file_event', async () => {
            const element: HTMLInputElement = event.target as HTMLInputElement;
            /* istanbul ignore else */
            if (element?.files) {
                const files: FileList = element.files;
                /* istanbul ignore else */
                if (files.length) {
                    const uploads = [];
                    for (let i = 0; i < files.length; i++) {
                        uploads.push(
                            // A cancelled upload needs no feedback
                            this._uploads
                                .uploadFileWithPermissions(files[i])
                                .catch(() => null),
                        );
                    }
                    // Cancelled uploads resolve to null, so drop them
                    const id_list = (await Promise.all(uploads)).filter(
                        (_): _ is number => _ != null,
                    );
                    if (!id_list.length) return;
                    this.loading.set(true);
                    let polls = 0;
                    const checkUploads = () => {
                        polls += 1;
                        const list = this._uploads.upload_list();
                        let success = 0;
                        let failed = 0;
                        for (const id of id_list) {
                            const upload = list.find((_) => _.id === id);
                            if (!upload) continue;

                            if (upload.error) failed += 1;
                            else if (upload.progress >= 100) success += 1;
                        }
                        const finished = success + failed >= id_list.length;
                        if (finished || polls >= MAX_UPLOAD_POLLS) {
                            if (failed) {
                                notifyError('Failed to upload files.');
                            } else if (success && finished) {
                                notifySuccess('Successfully uploaded files.');
                            }
                            this.clearTimeout('upload_list');
                            this.loading.set(false);
                        } else {
                            this.timeout(
                                'upload_list',
                                checkUploads,
                                UPLOAD_POLL_MS,
                            );
                        }
                    };
                    checkUploads();
                }
            }
        });
    }

    public async downloadUpload(upload: UploadInfo) {
        if (!(await setAuthCookie('/api/engine/v2/uploads'))) {
            return notifyError(
                i18n('ADMIN.UPLOADS_LIB_DOWNLOAD_ERROR', { error: 401 }),
            );
        }
        const url = `/api/engine/v2/uploads/${upload.id}/url`;
        const result = await fetch(url);
        if (!result.ok) {
            return notifyError(
                i18n('ADMIN.UPLOADS_LIB_DOWNLOAD_ERROR', {
                    error: result.statusText || result.status,
                }),
            );
        }
        const data = await result.blob();

        const file_url = URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = file_url;
        link.download = upload.file_name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(file_url);
    }

    public viewUpload(upload: UploadInfo) {
        this._dialog.open(ViewUploadModalComponent, {
            data: { upload },
        });
    }

    public async removeUpload(upload: UploadInfo) {
        const removed = await confirmAndRun(
            this._dialog,
            {
                title: i18n('ADMIN.UPLOADS_LIB_REMOVE'),
                content: i18n('ADMIN.UPLOADS_LIB_REMOVE_MSG', {
                    filename: escapeHtml(upload.file_name),
                }),
                icon: { type: 'icon', content: 'delete' },
            },
            {
                loading: i18n('ADMIN.UPLOADS_LIB_REMOVE_LOADING'),
                action: () => uploads.destroy({ id: upload.id }).then(orThrow),
                error: (reason) => `Failed to remove upload. Error: ${reason}`,
            },
        );
        if (removed) this.refresh.update((value) => value + 1);
    }
}
