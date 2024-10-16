import { Component } from '@angular/core';
import {
    apiKey,
    authority,
    PlaceDomain,
    query,
    queryDomains,
    remove,
    token,
} from '@placeos/ts-client';
import {
    catchError,
    filter,
    map,
    shareReplay,
    startWith,
    switchMap,
    take,
} from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { downloadFile, openConfirmModal } from '../common/general';
import { MatDialog } from '@angular/material/dialog';
import { ViewUploadModalComponent } from './view-upload-modal.component';
import { notifyError } from '../common/notifications';

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
        <div class="flex flex-col h-full w-full">
            <div class="flex items-center justify-between space-x-2 my-4">
                <div class="text-2xl">Uploads Library</div>
                <div class="flex items-center space-x-2">
                    <mat-form-field
                        class="no-subscript w-56"
                        appearance="outline"
                    >
                        <mat-select
                            name="type"
                            [ngModel]="domain | async"
                            (ngModelChange)="domain.next($event)"
                            placeholder="Select Domain..."
                        >
                            <mat-option
                                *ngFor="let domain of domain_list | async"
                                [value]="domain"
                            >
                                {{ domain.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        class="h-12 w-32"
                        [disabled]="true"
                        (click)="uploadFile()"
                    >
                        Upload File
                    </button>
                </div>
            </div>
            <div class="flex-1 w-full h-1/2 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="sticky left-0 w-full"
                    [class.opacity-0]="!(loading | async)"
                ></mat-progress-bar>
                <simple-table
                    class="min-w-[64rem] block text-sm mb-4"
                    [data]="uploads_list"
                    [columns]="[
                        {
                            key: 'file_name',
                            name: 'Name',
                            content: name_template
                        },
                        {
                            key: 'mime_type',
                            name: 'File Type',
                            content: type_template
                        },
                        {
                            key: 'file_size',
                            name: 'Size',
                            content: size_template,
                            size: '7rem'
                        },
                        {
                            key: 'created_at',
                            name: 'Created',
                            content: from_template,
                            size: '8rem'
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            sortable: false,
                            size: '8.75rem'
                        }
                    ]"
                    [sortable]="true"
                    empty_message="No uploads for selected domain"
                ></simple-table>
            </div>
            <ng-template #from_template let-data="data">
                <div class="p-4">
                    {{ +data * 1000 | dateFrom }}
                </div>
            </ng-template>
            <ng-template #name_template let-data="data">
                <div
                    class="p-4 mono text-xs break-words max-w-[calc(50vw-16rem)]"
                >
                    {{ data }}
                </div>
            </ng-template>
            <ng-template #type_template let-data="data">
                <div class="p-4 mono text-xs">
                    {{ data }}
                </div>
            </ng-template>
            <ng-template #size_template let-data="data">
                <div class="p-4 mono text-xs w-full text-right">
                    {{ sizeOf(data) }}
                </div>
            </ng-template>
            <ng-template #actions_template let-row="row">
                <div
                    class="flex items-center justify-end space-x-2 w-full px-2"
                >
                    <button
                        icon
                        matRipple
                        (click)="downloadUpload(row)"
                        matTooltip="Download Upload"
                    >
                        <app-icon>download</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        (click)="viewUpload(row)"
                        [disabled]="
                            !row.mime_type.includes('image') &&
                            !row.mime_type.includes('video')
                        "
                        matTooltip="View Upload"
                    >
                        <app-icon>visibility</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        (click)="removeUpload(row)"
                        matTooltip="Remove Upload"
                        class="text-error"
                    >
                        <app-icon>delete</app-icon>
                    </button>
                </div>
            </ng-template>
        </div>
    `,
    styles: [``],
})
export class UploadLibraryComponent {
    public readonly loading = new BehaviorSubject<boolean>(false);
    public readonly domain = new BehaviorSubject<PlaceDomain>(null);

    public readonly domain_list = queryDomains({ limit: 100 }).pipe(
        map((r) => r.data),
        shareReplay(1)
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
            }).pipe(catchError((_) => of({ data: [] })))
        ),
        map((r) =>
            r.data.map((_) => ({ ..._, mime_type: getMimeType(_.file_name) }))
        ),
        startWith([]),
        shareReplay(1)
    );

    constructor(private _dialog: MatDialog) {}

    public async ngOnInit() {
        const domain = authority();
        const domain_list = await this.domain_list.pipe(take(1)).toPromise();
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

    public uploadFile() {}

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
                `Unable to downloading upload. Error: ${
                    result.statusText || result.status
                }`
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
                title: 'Remove upload',
                content: `<p>Are you sure you want remove the upload "${upload.file_name}"?</p><p>The upload will be deleted <strong>immediately</strong>.</p>`,
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog
        );
        if (result?.reason !== 'done') return;
        result.loading('Removing upload...');
        await remove({
            id: upload.id,
            query_params: {},
            path: 'uploads',
        }).toPromise();
        result.close();
    }
}
