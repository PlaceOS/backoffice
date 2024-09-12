import { Component } from '@angular/core';
import { PlaceDomain, queryDomains } from '@placeos/ts-client';
import { map, shareReplay } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UploadDetails } from '../common/uploads';

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
                    class="min-w-[64rem] block text-sm"
                    [data]="uploads_list"
                    [columns]="[
                        { key: 'name', name: 'Name' },
                        {
                            key: 'mime_type',
                            name: 'File Type',
                            content: type_template,
                            size: '12rem'
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
                            size: '12rem'
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
            <ng-template #type_template let-data="data">
                <div class="p-4 mono text-sm">{{ data }}</div>
            </ng-template>
            <ng-template #size_template let-data="data">
                <div class="p-4 mono text-sm w-full text-right">
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

    public readonly uploads_list: Observable<UploadDetails[]> = of([]);

    public sizeOf(bytes: number) {
        const sizes = [' B', 'KB', 'MB', 'GB', 'TB', 'PB'];
        if (bytes === 0) return '0 B';
        const order = Math.log(bytes) / Math.log(1024);
        const level = Math.floor(order);
        const divisor = Math.pow(1024, level);
        const short_bytes = Math.floor((bytes / divisor) * 100) / 100;
        console.log('Size of:', bytes, short_bytes, divisor, level);
        return `${short_bytes} ${sizes[level]}`;
    }

    public uploadFile() {}

    public downloadUpload(upload: UploadDetails) {}

    public viewUpload(upload: UploadDetails) {}

    public removeUpload(upload: UploadDetails) {}
}
