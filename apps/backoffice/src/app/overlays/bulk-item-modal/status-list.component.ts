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
        <div class="flex flex-col items-center px-4 pb-4">
            <div class="info" *ngIf="!done">
                {{ 'COMMON.BULK_UPLOADING' | translate }}
            </div>
            <div
                *ngFor="let item of list; let i = index"
                class="flex items-center p-2 rounded border border-base-200 w-[24rem]"
            >
                <div class="name flex-1 px-2">{{ item.name }}</div>
                <div class="status">
                    <div
                        *ngIf="status[i] !== 'loading'"
                        class="h-8 w-8 rounded-full shadow text-2xl flex items-center justify-center"
                        [class.bg-error]="status[i] !== 'done'"
                        [class.text-error-content]="status[i] !== 'done'"
                        [class.bg-success]="status[i] === 'done'"
                        [class.text-success-content]="status[i] === 'done'"
                        [matTooltip]="status[i]"
                    >
                        <app-icon>
                            {{ status[i] === 'done' ? 'done' : 'close' }}
                        </app-icon>
                    </div>
                    <mat-spinner
                        *ngIf="status[i] === 'loading'"
                        diameter="24"
                    ></mat-spinner>
                </div>
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
                        console.log('Error:', err);
                        this.status[index] = `Error: ${err.status || err} ${
                            err.statusText || err
                        }`;
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
