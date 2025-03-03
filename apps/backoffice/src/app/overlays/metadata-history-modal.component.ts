import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { listMetadataHistory, PlaceMetadata } from '@placeos/ts-client';

@Component({
    selector: 'metadata-history-modal',
    template: `
        <div
            class="flex h-screen w-screen flex-col overflow-hidden bg-base-100"
        >
            <div
                class="m-4 flex items-center justify-between rounded bg-base-200 px-4 py-2"
            >
                <h3 class="text-xl font-medium">
                    {{ 'COMMON.METADATA_HISTORY' | translate }}
                </h3>
                <button icon matRipple mat-dialog-close>
                    <app-icon>close</app-icon>
                </button>
            </div>
            <main class="flex flex-1 flex-col pb-4">
                <div class="mb-2 flex items-center space-x-2 px-4">
                    <div
                        class="relative h-14 min-w-48 rounded border border-base-300 px-4 py-2"
                    >
                        <div
                            class="absolute left-4 top-0 -translate-y-1/2 rounded bg-base-100 px-2 py-1 text-xs"
                        >
                            {{ 'COMMON.METADATA_OWNER' | translate }}
                        </div>
                        <div class="truncate">
                            {{ parent_name || id }}
                        </div>
                        <div class="text-xs opacity-30" *ngIf="parent_name">
                            {{ id }}
                        </div>
                    </div>
                    <div
                        class="relative flex h-14 min-w-48 items-center rounded border border-base-300 px-4 py-2"
                    >
                        <div
                            class="absolute left-4 top-0 -translate-y-1/2 rounded bg-base-100 px-2 py-1 text-xs"
                        >
                            {{ 'COMMON.METADATA_KEY' | translate }}
                        </div>
                        <div class="truncate font-mono text-lg">
                            {{ name }}
                        </div>
                    </div>
                </div>
                <div
                    class="mb-2 flex items-center justify-between space-x-2 px-4"
                >
                    <mat-form-field appearance="outline" class="w-[20rem]">
                        <mat-select
                            [(ngModel)]="first"
                            placeholder="Select metadata version"
                        >
                            <mat-option
                                *ngFor="let item of history"
                                [value]="item"
                                (click)="select(0, item)"
                                class="leading-tight"
                            >
                                <div class="">
                                    {{ item.updated_at | date: 'mediumDate' }},
                                    {{ item.updated_at | date: 'shortTime' }}
                                </div>
                                <div class="truncate text-xs opacity-30">
                                    {{ item.description }}
                                </div>
                            </mat-option>
                        </mat-select>
                        <mat-hint *ngIf="first" class="truncate">{{
                            first.description
                        }}</mat-hint>
                    </mat-form-field>
                    <mat-form-field appearance="outline" class="w-[20rem]">
                        <mat-select
                            [(ngModel)]="second"
                            placeholder="Compare with"
                        >
                            @for (item of history; track item.updated_at) {
                                <mat-option
                                    *ngIf="item !== first"
                                    [value]="item"
                                    (click)="select(1, item)"
                                    class="leading-tight"
                                >
                                    <div class="">
                                        {{
                                            item.updated_at
                                                | date: 'mediumDate'
                                        }},
                                        {{
                                            item.updated_at | date: 'shortTime'
                                        }}
                                    </div>
                                    <div class="truncate text-xs opacity-30">
                                        {{ item.description }}
                                    </div>
                                </mat-option>
                            }
                        </mat-select>
                        <mat-hint *ngIf="second" class="truncate">{{
                            second.description
                        }}</mat-hint>
                    </mat-form-field>
                </div>
                <div class="relative w-full flex-1 px-4">
                    <diff-viewer
                        *ngIf="first_details || second_details"
                        [modified]="second_details || ''"
                        [original]="first_details || ''"
                    ></diff-viewer>
                    <div
                        *ngIf="!(first_details && second_details)"
                        class="flex h-full w-full items-center justify-center rounded-lg bg-base-200 opacity-40"
                    >
                        Select 2 versions of the metadata to get started
                    </div>
                </div>
            </main>
        </div>
    `,
    styles: [``],
})
export class MetadataHistoryModalComponent implements OnInit {
    public readonly id = this._data.id;
    public readonly parent_name = this._data.parent_name;
    public readonly name = this._data.name;

    public history: PlaceMetadata[] = [];

    public first = null;
    public second = null;
    public first_details = '';
    public second_details = '';

    constructor(
        @Inject(MAT_DIALOG_DATA)
        private _data: { id: string; parent_name: string; name: string },
    ) {}

    public async ngOnInit() {
        const history = await listMetadataHistory(this._data.id, {
            name: this._data.name,
            limit: 5000,
        }).toPromise();
        this.history = history;
    }

    public select(idx: 0 | 1, item: PlaceMetadata) {
        if (idx === 0) {
            this.first_details = JSON.stringify(item.details, undefined, 4);
            if (this.first === this.second) {
                this.second = null;
                this.second_details = '';
            }
        } else {
            this.second_details = JSON.stringify(item.details, undefined, 4);
        }
    }
}
