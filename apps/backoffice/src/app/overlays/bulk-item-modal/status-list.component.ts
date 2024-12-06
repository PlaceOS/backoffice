import {
    Component,
    Input,
    Output,
    EventEmitter,
    SimpleChanges,
    OnChanges,
} from '@angular/core';
import { PlaceResource } from '@placeos/ts-client/dist/esm/resources/resource';
import { Observable } from 'rxjs';

import { HashMap } from 'apps/backoffice/src/app/common/types';

@Component({
    selector: 'bulk-item-status-list',
    template: `
        <div class="info" *ngIf="!done">{{ 'COMMON.BULK_UPLOADING' }}</div>
        <div *ngFor="let item of list; let i = index" class="item">
            <div class="name">{{ item.name }}</div>
            <div class="status">
                <app-icon *ngIf="status[i] !== 'loading'" [class]="status[i]">
                    {{ status[i] === 'done' ? 'done' : 'close' }}
                </app-icon>
                <mat-spinner
                    *ngIf="status[i] === 'loading'"
                    diameter="24"
                ></mat-spinner>
            </div>
        </div>
    `,
    styles: [``],
})
export class StatusListComponent implements OnChanges {
    /** List of bulk items to add */
    @Input() public list: HashMap<any>[] = [];
    /** Method to save changes to items in the list */
    @Input() public save: (item: HashMap) => Observable<PlaceResource>;
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
                this.status[index] = 'loading';
                const saved_item = await this.save({ ...item, id: '' })
                    .toPromise()
                    .catch((err) => {
                        this.status[index] = `Error: ${err.message || err}`;
                        console.error(this.status[index]);
                        // notifyError(this.status[index]);
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
        } catch (e) {
            console.error(e);
        }
    }
}
