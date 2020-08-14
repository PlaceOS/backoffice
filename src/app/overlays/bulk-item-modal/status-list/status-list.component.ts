import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

import { HashMap } from 'src/app/shared/utilities/types.utilities';

@Component({
    selector: 'bulk-item-status-list',
    templateUrl: './status-list.component.html',
    styleUrls: ['./status-list.component.scss'],
})
export class StatusListComponent implements OnChanges {
    /** List of bulk items to add */
    @Input() public list: HashMap<any>[] = [];
    /** Emitter for completion status of the item upload */
    @Output() public done = new EventEmitter<HashMap<any>[]>();
    /** Status of each of the items to be created */
    public status: HashMap<string> = {};

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.list && this.list) {
            this.saveItems();
        }
    }

    public async saveItems() {
        try {
        const list = [];
        let index = 0;
        for (const item of this.list) {
            item.storePendingChange('id', '');
            this.status[index] = 'loading';
            const saved_item = await item.save().catch((err) => {
                this.status[index] = `Error: ${err.message || err}`;
                console.error(this.status[index])
                // this._service.notifyError(this.status[index]);
            });
            list.push(saved_item);
            if (this.status[index] === 'loading') {
                this.status[index] = 'done';
            }
            index++;
        }
        const clean_list = list.filter((item) => !!item);
        if (clean_list.length > 0) {
            this.done.emit(clean_list);
        }
        } catch (e) { console.error(e); }
    }
}
