import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from '@angular/core';
import { PlaceResource } from '@placeos/ts-client';
import { Observable } from 'rxjs';

@Component({
    selector: 'bulk-item-status-list',
    template: `
        <div class="flex flex-col items-center px-4 pb-4">
            @if (!done) {
                <div class="info">
                    {{ 'COMMON.BULK_UPLOADING' | translate }}
                </div>
            }
            @for (item of list; track item.id; let i = $index) {
                <div
                    class="flex w-[24rem] items-center rounded border border-base-200 p-2"
                >
                    <div class="flex flex-1 flex-col justify-center px-2">
                        <div class="name flex-1">{{ item.name }}</div>
                        @if (status[i] && status[i] !== 'done') {
                            <div class="text-xs text-error">
                                {{ status[i] }}
                            </div>
                        }
                    </div>
                    <div class="status">
                        @if (status[i] !== 'loading') {
                            <div
                                class="flex h-8 w-8 items-center justify-center rounded-full text-2xl shadow"
                                [class.bg-error]="status[i] !== 'done'"
                                [class.text-error-content]="
                                    status[i] !== 'done'
                                "
                                [class.bg-success]="status[i] === 'done'"
                                [class.text-success-content]="
                                    status[i] === 'done'
                                "
                                [matTooltip]="status[i]"
                            >
                                <app-icon>
                                    {{
                                        status[i] === 'done' ? 'done' : 'close'
                                    }}
                                </app-icon>
                            </div>
                        }
                        @if (status[i] === 'loading') {
                            <mat-spinner diameter="24"></mat-spinner>
                        }
                    </div>
                </div>
            }
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class StatusListComponent implements OnChanges {
    /** List of bulk items to add */
    @Input() public list: Record<string, any>[] = [];
    /** Method to save changes to items in the list */
    @Input() public save: (
        item: Record<string, any>,
    ) => Observable<PlaceResource>;
    /** Emitter for completion status of the item upload */
    @Output() public done = new EventEmitter<Record<string, any>[]>();
    /** Status of each of the items to be created */
    public status: Record<string, string> = {};

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
