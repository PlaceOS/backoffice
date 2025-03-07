import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { DialogEvent } from 'apps/backoffice/src/app/common/types';
import { Observable } from 'rxjs';

export interface SelectItemModalData<T = any> {
    service_name: string;
    query_fn: (_: string) => Observable<T[]>;
}

@Component({
    selector: 'select-item-modal',
    template: `
        <div
            class="mx-2 mt-2 flex items-center justify-between rounded bg-base-200 px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'COMMON.ITEM_ADD' | translate: { item: name } }}
            </h3>
            <button btn icon mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </div>
        <main
            *ngIf="!loading; else load_state"
            class="h-[65vh] w-[32rem] max-w-[calc(100vw-2rem)] px-2 pt-2"
        >
            <item-search-field
                class="block h-full"
                [query_fn]="query_fn"
                [exclude]="filter_fn"
                [(ngModel)]="item"
                [display_list]="true"
            ></item-search-field>
        </main>
        <footer
            *ngIf="!loading"
            class="flex justify-end border-t border-base-200 px-4 py-2"
        >
            <button
                btn
                matRipple
                type="submit"
                (click)="submit()"
                [disabled]="!item"
            >
                {{ 'COMMON.ITEM_ADD_SELECTED' | translate }}
            </button>
        </footer>
        <ng-template #load_state>
            <main class="info-block">
                <div class="icon">
                    <mat-spinner diameter="32"></mat-spinner>
                </div>
                <div class="text">
                    {{ 'COMMON.PROCESSING_REQUEST' | translate }}
                </div>
            </main>
        </ng-template>
    `,
    styles: [``],
    standalone: false
})
export class SelectItemModalComponent extends AsyncHandler {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether the item is being editing */
    public edit: boolean;
    /** Item to edit */
    public item: any;
    /** Whether the item request is being processed */
    public loading: boolean;

    public readonly filter_fn = () => false;

    constructor(@Inject(MAT_DIALOG_DATA) private _data: SelectItemModalData) {
        super();
    }

    public get query_fn(): (_: any) => Observable<any[]> {
        return this._data.query_fn;
    }

    public get name(): string {
        return this._data.service_name;
    }

    public submit() {
        this.loading = true;
        this.event.emit({ reason: 'action', metadata: this.item });
    }
}
