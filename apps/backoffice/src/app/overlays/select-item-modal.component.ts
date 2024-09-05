import { Component, Output, EventEmitter, Inject } from '@angular/core';
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
            class="flex items-center justify-between px-4 border-b border-base-200"
        >
            <h3 class="text-lg font-medium py-4">Add {{ name }}</h3>
            <button btn icon mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </div>
        <main
            *ngIf="!loading; else load_state"
            class="p-4 w-[32rem] max-w-[calc(100vw-2rem)]"
        >
            <item-search-field
                [query_fn]="query_fn"
                [(ngModel)]="item"
                [display_list]="true"
            ></item-search-field>
        </main>
        <footer
            *ngIf="!loading"
            class="flex justify-end px-4 py-2 border-t border-base-200"
        >
            <button
                btn
                matRipple
                type="submit"
                (click)="submit()"
                [disabled]="!item"
            >
                Add Selected
            </button>
        </footer>
        <ng-template #load_state>
            <main class="info-block">
                <div class="icon">
                    <mat-spinner diameter="32"></mat-spinner>
                </div>
                <div class="text">Processing request...</div>
            </main>
        </ng-template>
    `,
    styles: [``],
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
