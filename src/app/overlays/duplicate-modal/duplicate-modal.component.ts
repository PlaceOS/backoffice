import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { HashMap, DialogEvent } from 'src/app/shared/utilities/types.utilities';
import { ApplicationService } from 'src/app/services/app.service';
import { Observable } from 'rxjs';

export interface DuplicateModalData {
    item: HashMap;
    save: <T>(_:T) => Observable<T>
}

@Component({
    selector: 'app-duplicate-modal',
    templateUrl: './duplicate-modal.component.html',
    styleUrls: ['./duplicate-modal.component.scss'],
})
export class DuplicateModalComponent {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Number of times to duplicate the given item */
    public times: number = 1;
    /** Number of times to duplicate the given item */
    public status: HashMap<string> = {};
    /** Whether request is loading */
    public loading: boolean = false;
    /** Temporary array for generating UI elements */
    public temp: any[];
    /** Whether duplication has completed */
    public done: boolean = false;

    /** Item selected to be duplicated */
    public get item() {
        return this._data.item;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: DuplicateModalData,
        private _dialog_ref: MatDialogRef<DuplicateModalComponent>,
        private _service: ApplicationService
    ) {}

    /**
     * Create the specified number of duplicate items
     */
    public async duplicate() {
        this.loading = true;
        const ItemConstructor: any = this.item.constructor;
        const item = this._data.item;
        const list = [];
        this.temp = new Array(this.times).fill(0);
        for (let i = 0; i < this.times; i++) {
            const new_item = new ItemConstructor({
                ...item,
                id: '',
                name: `${item.name} (${i + 1})`,
            });
            this.status[i] = 'loading';
            const saved_item = await this._data.save(new_item).toPromise().catch((err) => {
                this.status[i] = `Error: ${err.message || err}`;
                this._service.notifyError(this.status[i]);
            });
            list.push(saved_item);
            if (this.status[i] === 'loading') {
                this.status[i] = 'done';
            }
        }
        const clean_list = list.filter((item) => !!item);
        this.event.emit({ reason: 'done', metadata: clean_list } as DialogEvent);
        this.done = true;
        setTimeout(() => this._dialog_ref.close(), 5000);
    }
}
