import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { listMetadataHistory, PlaceMetadata } from '@placeos/ts-client';
import { DiffViewerComponent } from '../ui/diff-viewer.component';
import { IconComponent } from '../ui/icon.component';
import { TranslatePipe } from '../ui/translate.pipe';

@Component({
    selector: 'metadata-history-modal',
    template: `
        <div
            class="bg-base-100 flex h-screen w-screen flex-col overflow-hidden"
        >
            <div
                class="bg-base-200 m-4 flex items-center justify-between rounded-sm px-4 py-2"
            >
                <h3 class="text-xl font-medium">
                    {{ 'COMMON.METADATA_HISTORY' | translate }}
                </h3>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </div>
            <main class="flex flex-1 flex-col pb-4">
                <div class="mb-2 flex items-center space-x-2 px-4">
                    <div
                        class="border-base-300 relative h-14 min-w-48 rounded-sm border px-4 py-2"
                    >
                        <div
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 text-xs"
                        >
                            {{ 'COMMON.METADATA_OWNER' | translate }}
                        </div>
                        <div class="truncate">
                            {{ parent_name || id }}
                        </div>
                        @if (parent_name) {
                            <div class="text-xs opacity-30">
                                {{ id }}
                            </div>
                        }
                    </div>
                    <div
                        class="border-base-300 relative flex h-14 min-w-48 items-center rounded-sm border px-4 py-2"
                    >
                        <div
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 text-xs"
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
                            @for (item of history; track item.updated_at) {
                                <mat-option
                                    [value]="item"
                                    (click)="select(0, item)"
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
                        @if (first) {
                            <mat-hint class="truncate">{{
                                first.description
                            }}</mat-hint>
                        }
                    </mat-form-field>
                    <mat-form-field appearance="outline" class="w-[20rem]">
                        <mat-select
                            [(ngModel)]="second"
                            placeholder="Compare with"
                        >
                            @for (item of history; track item.updated_at) {
                                @if (item !== first) {
                                    <mat-option
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
                                                item.updated_at
                                                    | date: 'shortTime'
                                            }}
                                        </div>
                                        <div
                                            class="truncate text-xs opacity-30"
                                        >
                                            {{ item.description }}
                                        </div>
                                    </mat-option>
                                }
                            }
                        </mat-select>
                        @if (second) {
                            <mat-hint class="truncate">{{
                                second.description
                            }}</mat-hint>
                        }
                    </mat-form-field>
                </div>
                <div class="relative w-full flex-1 px-4">
                    @if (first_details || second_details) {
                        <diff-viewer
                            [modified]="second_details || ''"
                            [original]="first_details || ''"
                        ></diff-viewer>
                    }
                    @if (!(first_details && second_details)) {
                        <div
                            class="bg-base-200 flex h-full w-full items-center justify-center rounded-lg opacity-40"
                        >
                            Select 2 versions of the metadata to get started
                        </div>
                    }
                </div>
            </main>
        </div>
    `,
    styles: [``],
    imports: [
        MatDialogModule,
        DiffViewerComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        TranslatePipe,
        IconComponent,
        DatePipe,
    ],
})
export class MetadataHistoryModalComponent implements OnInit {
    private _data = inject<{
        id: string;
        parent_name: string;
        name: string;
    }>(MAT_DIALOG_DATA);

    public readonly id = this._data.id;
    public readonly parent_name = this._data.parent_name;
    public readonly name = this._data.name;

    public history: PlaceMetadata[] = [];

    public first = null;
    public second = null;
    public first_details = '';
    public second_details = '';

    public async ngOnInit() {
        const history = await listMetadataHistory(this._data.id, {
            name: this._data.name,
            limit: 5000,
        });
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
