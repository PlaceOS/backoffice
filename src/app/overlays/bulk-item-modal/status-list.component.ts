import {
    Component,
    OnChanges,
    SimpleChanges,
    input,
    output,
} from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PlaceResource } from '@placeos/ts-client';
import { Observable } from 'rxjs';
import { IconComponent } from '../../ui/icon.component';
import { TranslatePipe } from '../../ui/translate.pipe';

@Component({
    selector: 'bulk-item-status-list',
    template: `
        <div class="flex flex-col items-center px-4 pb-4">
            @if (!done) {
                <div class="info">
                    {{ 'COMMON.BULK_UPLOADING' | translate }}
                </div>
            }
            @for (item of list(); track item.id; let i = $index) {
                <div
                    class="border-base-200 flex w-[24rem] items-center rounded-sm border p-2"
                >
                    <div class="flex flex-1 flex-col justify-center px-2">
                        <div class="name flex-1">{{ item.name }}</div>
                        @if (status[i] && status[i] !== 'done') {
                            <div class="text-error text-xs">
                                {{ status[i] }}
                            </div>
                        }
                    </div>
                    <div class="status">
                        @if (status[i] !== 'loading') {
                            <div
                                class="flex h-8 w-8 items-center justify-center rounded-full text-2xl shadow-sm"
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
                                <icon>
                                    {{
                                        status[i] === 'done' ? 'done' : 'close'
                                    }}
                                </icon>
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
    imports: [
        MatProgressSpinnerModule,
        IconComponent,
        MatTooltipModule,
        TranslatePipe,
    ],
})
export class StatusListComponent implements OnChanges {
    /** List of bulk items to add */
    public readonly list = input<Record<string, unknown>[]>([]);
    /** Method to save changes to items in the list */
    public readonly save =
        input<(item: Record<string, unknown>) => Observable<PlaceResource>>(
            undefined,
        );
    /** Emitter for completion status of the item upload */
    public readonly done = output<Record<string, unknown>[]>();
    /** Status of each of the items to be created */
    public status: Record<string, string> = {};

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.list && this.list()) {
            this.saveItems();
        }
    }

    public async saveItems() {
        try {
            const list = [];
            let index = 0;
            for (const item of this.list()) {
                this.status[index] = 'loading';
                const saved_item = await this.save()({ ...item, id: '' })
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
