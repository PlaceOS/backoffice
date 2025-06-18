import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    apiKey,
    authority,
    PlaceDomain,
    query,
    queryDomains,
    remove,
    token,
} from '@placeos/ts-client';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    startWith,
    switchMap,
} from 'rxjs/operators';
import { AsyncHandler } from '../common/async-handler.class';
import { nextValueFrom, openConfirmModal } from '../common/general';
import { i18n } from '../common/locale.service';
import {
    notifyError,
    notifyInfo,
    notifySuccess,
} from '../common/notifications';
import { UploadsService } from '../common/uploads.service';
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

export interface UploadInfo {
    id: string;
    file_name: string;
    file_size: number;
    mime_type: string;
    created_at: number;
    permissions: string;
    public: boolean;
    uploaded_by: string;
    uploaded_email: number;
}

@Component({
    selector: 'upload-library',
    template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2">
                <div class="text-2xl">
                    {{ 'ADMIN.UPLOADS_LIB_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <mat-form-field
                        class="no-subscript w-56"
                        appearance="outline"
                    >
                        <mat-select
                            name="type"
                            [ngModel]="domain | async"
                            (ngModelChange)="domain.next($event)"
                            [placeholder]="'ADMIN.SELECT_DOMAIN' | translate"
                        >
                            @for (
                                domain of domain_list | async;
                                track domain.id
                            ) {
                                <mat-option [value]="domain">
                                    {{ domain.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <button btn matRipple class="relative h-12 w-32">
                        <input
                            class="pointer-events-auto absolute inset-0 w-full opacity-0"
                            type="file"
                            multiple
                            (change)="handleFileEvent($event)"
                        />
                        {{ 'COMMON.UPLOAD_FILE' | translate }}
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="sticky left-0 w-full"
                    [class.opacity-0]="!(loading | async)"
                ></mat-progress-bar>
                <simple-table
                    class="mb-4 block min-w-[68rem] text-sm"
                    [data]="uploads_list"
                    [columns]="[
                        {
                            key: 'file_name',
                            name: 'COMMON.FIELD_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'mime_type',
                            name: 'ADMIN.UPLOADS_LIB_FIELD_TYPE' | translate,
                            content: type_template,
                            size: '14rem',
                        },
                        {
                            key: 'file_size',
                            name: 'ADMIN.UPLOADS_LIB_FIELD_SIZE' | translate,
                            content: size_template,
                            size: '7rem',
                        },
                        {
                            key: 'created_at',
                            name: 'COMMON.CREATED_AT' | translate,
                            content: from_template,
                            size: '8rem',
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            sortable: false,
                            size: '11rem',
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'ADMIN.UPLOADS_LIB_LIST_EMPTY' | translate"
                ></simple-table>
            </div>
            <ng-template #from_template let-data="data">
                <div class="p-4">
                    {{ +data * 1000 | dateFrom }}
                </div>
            </ng-template>
            <ng-template #name_template let-data="data">
                <div class="mono max-w-[24rem] break-words p-4 text-xs">
                    {{ data }}
                </div>
            </ng-template>
            <ng-template #type_template let-data="data">
                <div class="mono p-4 text-xs">
                    {{ data }}
                </div>
            </ng-template>
            <ng-template #size_template let-data="data">
                <div class="mono w-full p-4 text-right text-xs">
                    {{ sizeOf(data) }}
                </div>
            </ng-template>
            <ng-template #actions_template let-row="row">
                <div
                    class="flex w-full items-center justify-end space-x-2 px-2"
                >
                    <button
                        icon
                        matRipple
                        (click)="downloadUpload(row)"
                        [matTooltip]="'ADMIN.UPLOADS_LIB_DOWNLOAD' | translate"
                    >
                        <app-icon>download</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        (click)="copyLink(row)"
                        [matTooltip]="'ADMIN.UPLOADS_LIB_COPY' | translate"
                    >
                        <app-icon>content_copy</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        (click)="viewUpload(row)"
                        [disabled]="
                            !row.mime_type.includes('image') &&
                            !row.mime_type.includes('video')
                        "
                        [matTooltip]="'ADMIN.UPLOADS_LIB_VIEW' | translate"
                    >
                        <app-icon>visibility</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        (click)="removeUpload(row)"
                        [matTooltip]="'ADMIN.UPLOADS_LIB_REMOVE' | translate"
                        class="text-error"
                    >
                        <app-icon>delete</app-icon>
                    </button>
                </div>
            </ng-template>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class UploadLibraryComponent extends AsyncHandler implements OnInit {
    private _dialog = inject(MatDialog);
    private _clipboard = inject(Clipboard);
    private _uploads = inject(UploadsService);

    public readonly loading = new BehaviorSubject<boolean>(false);
    public readonly domain = new BehaviorSubject<PlaceDomain>(null);

    public readonly domain_list = queryDomains({ limit: 100 }).pipe(
        map((r) => r.data),
        shareReplay(1),
    );

    public readonly uploads_list: Observable<UploadInfo[]> = this.domain.pipe(
        filter((_) => !!_),
        switchMap((domain) =>
            query<any>({
                path: 'uploads',
                query_params: {
                    limit: 1000,
                    authority_id: domain.id,
                },
            }).pipe(catchError((_) => of({ data: [] }))),
        ),
        map((r) =>
            r.data
                .map((_) => ({ ..._, mime_type: getMimeType(_.file_name) }))
                .sort((a, b) => a.file_name.localeCompare(b.file_name)),
        ),
        startWith([]),
        shareReplay(1),
    );

    public async ngOnInit() {
        const domain = authority();
        const domain_list = await nextValueFrom(this.domain_list);
        if (!domain_list?.length) return;
        const match = domain_list.find((d) => d.id === domain.id);
        if (match) this.domain.next(match);
    }

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
        notifyInfo(`Copied upload URL to clipboard.`);
    }

    /** Upload the image to the cloud */
    public handleFileEvent(event: DragEvent) {
        this.timeout('file_event', async () => {
            const element: HTMLInputElement = event.target as any;
            /* istanbul ignore else */
            if (element?.files) {
                const files: FileList = element.files;
                /* istanbul ignore else */
                if (files.length) {
                    const uploads = [];
                    for (let i = 0; i < files.length; i++) {
                        uploads.push(
                            this._uploads.uploadFileWithPermissions(files[i]),
                        );
                    }
                    const id_list = await Promise.all(uploads);
                    this.subscription(
                        'upload_list',
                        this._uploads.upload_list.subscribe((list) => {
                            let success = 0;
                            let failed = 0;
                            for (const id of id_list) {
                                const upload = list.find((_) => _.id === id);
                                if (!upload) continue;

                                if (upload.error) failed += 1;
                                else if (upload.progress >= 100) success += 1;
                            }
                            if (success + failed >= id_list.length) {
                                if (failed) {
                                    notifyError('Failed to upload files.');
                                } else if (success) {
                                    notifySuccess(
                                        'Succesfully uploaded files.',
                                    );
                                }
                                this.unsub('upload_list');
                            }
                        }),
                    );
                }
            }
        });
    }

    public async downloadUpload(upload: UploadInfo) {
        const tkn = token();
        document.cookie = `${
            tkn === 'x-api-key'
                ? 'api-key=' + encodeURIComponent(apiKey())
                : 'bearer_token=' + encodeURIComponent(tkn)
        };max-age=60;path=/api/engine/v2/uploads;samesite=strict;${
            location.protocol === 'https:' ? 'secure;' : ''
        }`;
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
        const result = await openConfirmModal(
            {
                title: i18n('ADMIN.UPLOADS_LIB_REMOVE'),
                content: i18n('ADMIN.UPLOADS_LIB_REMOVE_MSG', {
                    filename: upload.file_name,
                }),
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (result?.reason !== 'done') return;
        result.loading(i18n('ADMIN.UPLOADS_LIB_REMOVE_LOADING'));
        await remove({
            id: upload.id,
            query_params: {},
            path: 'uploads',
        }).toPromise();
        result.close();
        this.domain.next(this.domain.getValue());
    }
}
