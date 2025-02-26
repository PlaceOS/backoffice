import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { listMetadataHistory, PlaceMetadata } from '@placeos/ts-client';

@Component({
    selector: 'metadata-history-modal',
    template: `
        <div
            class="w-screen h-screen bg-base-100 flex flex-col overflow-hidden"
        >
            <div
                class="flex items-center justify-between m-4 rounded bg-base-200 px-4 py-2"
            >
                <h3 class="text-xl font-medium">
                    {{ 'COMMON.METADATA_HISTORY' | translate }}
                </h3>
                <button icon matRipple mat-dialog-close>
                    <app-icon>close</app-icon>
                </button>
            </div>
            <main class="flex flex-col flex-1 pb-4">
                <div class="flex items-center space-x-2 mb-2 px-4">
                    <div
                        class="relative px-4 py-2 rounded border border-base-300 min-w-48 h-14"
                    >
                        <div
                            class="absolute top-0 left-4 -translate-y-1/2 bg-base-100 rounded text-xs px-2 py-1"
                        >
                            {{ 'COMMON.METADATA_OWNER' | translate }}
                        </div>
                        <div class="truncate">
                            {{ parent_name || id }}
                        </div>
                        <div class="opacity-30 text-xs" *ngIf="parent_name">
                            {{ id }}
                        </div>
                    </div>
                    <div
                        class="relative px-4 py-2 rounded border border-base-300 min-w-48 h-14 flex items-center"
                    >
                        <div
                            class="absolute top-0 left-4 -translate-y-1/2 bg-base-100 rounded text-xs px-2 py-1"
                        >
                            {{ 'COMMON.METADATA_KEY' | translate }}
                        </div>
                        <div class="truncate font-mono text-lg">
                            {{ name }}
                        </div>
                    </div>
                </div>
                <div
                    class="flex items-center justify-between space-x-2 mb-2 px-4"
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
                                <div class="text-xs opacity-30 truncate">
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
                                    {{ item.updated_at | date: 'mediumDate' }},
                                    {{ item.updated_at | date: 'shortTime' }}
                                </div>
                                <div class="text-xs opacity-30 truncate">
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
                <div class="relative flex-1 w-full px-4">
                    <diff-viewer
                        *ngIf="first_details || second_details"
                        [modified]="second_details || ''"
                        [original]="first_details || ''"
                    ></diff-viewer>
                    <div
                        *ngIf="!(first_details && second_details)"
                        class="h-full w-full bg-base-200 flex items-center justify-center rounded-lg opacity-40"
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
        private _data: { id: string; parent_name: string; name: string }
    ) {}

    public async ngOnInit() {
        console.log('Details:', this._data);
        const history = await listMetadataHistory(this._data.id, {
            name: this._data.name,
            limit: 5000,
        }).toPromise();
        this.history = history;
        console.log('History:', history);
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
