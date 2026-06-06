import { Clipboard } from '@angular/cdk/clipboard';
import { ScrollingModule } from '@angular/cdk/scrolling';

import {
    Component,
    computed,
    inject,
    OnInit,
    resource,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { apiKey, cleanObject, query, remove, token } from '@placeos/ts-client';
import { AsyncHandler } from '../common/async-handler.class';
import { i18n } from '../common/locale.service';
import {
    notifyError,
    notifyInfo,
    notifySuccess,
} from '../common/notifications';
import { UploadsService } from '../common/uploads.service';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import { IconComponent } from '../ui/icon.component';
import { DateFromPipe } from '../ui/pipes/date-from.pipe';
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
            <div
                class="mt-4 mb-2 flex items-center justify-between space-x-2 px-4"
            >
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
                            [(ngModel)]="domain"
                            [placeholder]="'ADMIN.SELECT_DOMAIN' | translate"
                        >
                            @for (domain of domain_list(); track domain.id) {
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
            <div class="mb-4 flex items-center justify-end space-x-2 px-4">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-[20rem] max-w-full"
                >
                    <icon matPrefix class="relative -left-1 text-2xl"
                        >search</icon
                    >
                    <input
                        matInput
                        placeholder="Search for file..."
                        [(ngModel)]="search_term"
                    />
                </mat-form-field>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="sticky left-0 w-full"
                    [class.opacity-0]="!loading()"
                />
                @if (uploads_list()?.length > 0) {
                    <div
                        role="table"
                        class="mb-4 block min-w-240 overflow-hidden text-sm"
                    >
                        <div
                            header
                            class="divide-base-100 border-base-300 bg-base-200 grid min-w-full grid-cols-5 divide-x border"
                            [style.grid-template-columns]="
                                'auto 10rem 7rem 8rem 11.5rem'
                            "
                        >
                            <button
                                class="flex items-center justify-between p-2"
                                (click)="sortBy('file_name')"
                                [class.active]="sorted_by()[0] === 'file_name'"
                            >
                                <div class="p-2">
                                    {{ 'COMMON.FIELD_NAME' | translate }}
                                </div>
                                <icon class="text-xl">{{
                                    sorted_by()[1]
                                        ? 'arrow_downward'
                                        : 'arrow_upward'
                                }}</icon>
                            </button>
                            <button
                                class="flex items-center justify-between p-2"
                                (click)="sortBy('mime_type')"
                                [class.active]="sorted_by()[0] === 'mime_type'"
                            >
                                <div class="p-2">
                                    {{
                                        'ADMIN.UPLOADS_LIB_FIELD_TYPE'
                                            | translate
                                    }}
                                </div>
                                <icon class="text-xl">{{
                                    sorted_by()[1]
                                        ? 'arrow_downward'
                                        : 'arrow_upward'
                                }}</icon>
                            </button>
                            <button
                                class="flex items-center justify-between p-2"
                                (click)="sortBy('file_size')"
                                [class.active]="sorted_by()[0] === 'file_size'"
                            >
                                <div class="p-2">
                                    {{
                                        'ADMIN.UPLOADS_LIB_FIELD_SIZE'
                                            | translate
                                    }}
                                </div>
                                <icon class="text-xl">{{
                                    sorted_by()[1]
                                        ? 'arrow_downward'
                                        : 'arrow_upward'
                                }}</icon>
                            </button>
                            <button
                                class="flex items-center justify-between p-2"
                                (click)="sortBy('created_at')"
                                [class.active]="sorted_by()[0] === 'created_at'"
                            >
                                <div class="p-2">
                                    {{ 'COMMON.CREATED_AT' | translate }}
                                </div>
                                <icon class="text-xl">{{
                                    sorted_by()[1]
                                        ? 'arrow_downward'
                                        : 'arrow_upward'
                                }}</icon>
                            </button>
                            <div class="p-4"></div>
                        </div>
                        <cdk-virtual-scroll-viewport
                            itemSize="48"
                            class="min-h-[calc(100vh-13.25rem)]"
                        >
                            <div
                                *cdkVirtualFor="let upload of sorted_uploads()"
                                class="divide-base-300 border-base-300 grid h-12 min-w-full grid-cols-5 divide-x overflow-hidden border-x border-b"
                                [style.grid-template-columns]="
                                    'auto 10rem 7rem 8rem 11.5rem'
                                "
                            >
                                <div
                                    class="flex h-full items-center p-4 text-xs"
                                >
                                    <div
                                        class="mono w-px flex-1 truncate"
                                        [matTooltip]="upload.file_name"
                                    >
                                        {{ upload.file_name }}
                                    </div>
                                </div>
                                <div
                                    class="mono flex h-full items-center truncate p-4 text-xs"
                                >
                                    {{ upload.mime_type }}
                                </div>
                                <div
                                    class="mono flex h-full w-full items-center justify-end p-4 text-xs"
                                >
                                    {{ sizeOf(upload.file_size) }}
                                </div>
                                <div class="flex h-full items-center p-4">
                                    {{ +upload.created_at * 1000 | dateFrom }}
                                </div>
                                <div
                                    class="flex w-full items-center justify-end space-x-2 px-2"
                                >
                                    <button
                                        icon
                                        default
                                        matRipple
                                        (click)="downloadUpload(upload)"
                                        [matTooltip]="
                                            'ADMIN.UPLOADS_LIB_DOWNLOAD'
                                                | translate
                                        "
                                    >
                                        <icon>download</icon>
                                    </button>
                                    <button
                                        icon
                                        default
                                        matRipple
                                        (click)="copyLink(upload)"
                                        [matTooltip]="
                                            'ADMIN.UPLOADS_LIB_COPY' | translate
                                        "
                                    >
                                        <icon>content_copy</icon>
                                    </button>
                                    <button
                                        icon
                                        default
                                        matRipple
                                        (click)="viewUpload(upload)"
                                        [disabled]="
                                            !upload.mime_type.includes(
                                                'image'
                                            ) &&
                                            !upload.mime_type.includes('video')
                                        "
                                        [matTooltip]="
                                            'ADMIN.UPLOADS_LIB_VIEW' | translate
                                        "
                                    >
                                        <icon>visibility</icon>
                                    </button>
                                    <button
                                        icon
                                        default
                                        error
                                        matRipple
                                        (click)="removeUpload(upload)"
                                        [matTooltip]="
                                            'ADMIN.UPLOADS_LIB_REMOVE'
                                                | translate
                                        "
                                    >
                                        <icon>delete</icon>
                                    </button>
                                </div>
                            </div>
                        </cdk-virtual-scroll-viewport>
                    </div>
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
    `,
    styles: [
        `
            [header] icon {
                opacity: 0;
            }
            [header] button.active icon {
                opacity: 1;
            }
            [header] button:hover icon {
                opacity: 0.3;
            }
        `,
    ],
    imports: [
        IconComponent,
        ScrollingModule,
        TranslatePipe,
        MatRippleModule,
        MatTooltipModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        DateFromPipe,
    ],
})
export class UploadLibraryComponent extends AsyncHandler implements OnInit {
    private _dialog = inject(MatDialog);
    private _clipboard = inject(Clipboard);
    private _uploads = inject(UploadsService);
    private _admin_data = inject(AdminDataService);

    public readonly search_term = this._admin_data.filter(
        'upload-library:search',
    );
    public readonly domain = this._admin_data.selectedDomain('upload-library');
    public readonly refresh = signal(0);
    public readonly loading = signal(false);
    public readonly sorted_by = this._admin_data.sort('upload-library:uploads');
    public readonly sorted_uploads = computed(() => {
        const [field, asc] = this.sorted_by();
        if (!field) return this.uploads_list();
        return [...this.uploads_list()].sort((a, b) => {
            if (!field) return 0;
            const value_a = a[field];
            const value_b = b[field];
            const is_number = typeof value_a === 'number';
            let result = 0;
            if (is_number) result = value_a - value_b;
            else result = `${value_a}`.localeCompare(`${value_b}`);
            return result * (asc ? 1 : -1);
        });
    });

    public readonly domain_list = this._admin_data.domain_list;

    private readonly _uploads_list = resource({
        params: () => ({
            domain: this.domain(),
            search: this.search_term(),
            refresh: this.refresh(),
        }),
        loader: async ({ params }) => {
            const { domain, search } = params;
            if (!domain) return [] as UploadInfo[];
            const response = await query<UploadInfo>({
                path: 'uploads',
                query_params: cleanObject(
                    {
                        limit: 1000,
                        file_search: search,
                        authority_id: domain.id,
                    },
                    [null, '', undefined],
                ),
            }).catch(() => ({ data: [] as UploadInfo[] }));
            return response.data
                .map((_) => ({ ..._, mime_type: getMimeType(_.file_name) }))
                .sort((a, b) => a.file_name.localeCompare(b.file_name));
        },
    });

    public readonly uploads_list = computed(
        () => this._uploads_list.value() || [],
    );

    public async ngOnInit() {
        await this._admin_data.selectDefaultDomain('upload-library');
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

    public sortBy(new_field: string) {
        this._admin_data.sortBy('upload-library:uploads', new_field);
    }

    public copyLink(upload: UploadInfo) {
        this._clipboard.copy(
            `${location.protocol}//${location.host}/api/engine/v2/uploads/${upload.id}/url`,
        );
        notifyInfo(`Copied upload URL to clipboard.`);
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
                            this._uploads.uploadFileWithPermissions(files[i]),
                        );
                    }
                    const id_list = await Promise.all(uploads);
                    const checkUploads = () => {
                        const list = this._uploads.upload_list();
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
                                notifySuccess('Succesfully uploaded files.');
                            }
                            this.clearTimeout('upload_list');
                        } else {
                            this.timeout('upload_list', checkUploads, 250);
                        }
                    };
                    checkUploads();
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
        });
        result.close();
        this.refresh.update((value) => value + 1);
    }
}
