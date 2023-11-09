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
    templateUrl: './select-item-modal.component.html',
    styleUrls: ['./select-item-modal.component.scss'],
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
