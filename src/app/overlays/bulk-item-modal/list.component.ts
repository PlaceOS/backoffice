import {
    Component,
    OnChanges,
    SimpleChanges,
    TemplateRef,
    input,
    model,
    output,
    viewChild,
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { HashMap, Identity } from '../../common/types';
import {
    SimpleTableComponent,
    TableColumn,
} from '../../ui/simple-table.component';
import { TranslatePipe } from '../../ui/translate.pipe';

@Component({
    selector: 'bulk-item-list',
    template: `
        <div
            class="flex max-h-[65vh] max-w-[80vw] flex-wrap overflow-auto px-4 text-sm"
        >
            <simple-table
                [style.min-width]="12 * fields().length + 'rem'"
                [data]="list()"
                [columns]="columns"
            ></simple-table>
        </div>
        <div class="flex items-center justify-end space-x-4 p-4">
            <button
                btn
                matRipple
                class="inverse w-36"
                (click)="previous.emit()"
            >
                {{ 'COMMON.BACK' | translate }}
            </button>
            <button btn matRipple class="w-36" (click)="next.emit()">
                {{ 'COMMON.SAVE_ITEMS' | translate }}
            </button>
        </div>
        <ng-template #input let-row="row" let-name="name" let-id="key">
            <input class="p-4" [placeholder]="name" [(ngModel)]="row[id]" />
        </ng-template>
    `,
    styles: [``],
    imports: [
        FormsModule,
        MatRippleModule,
        SimpleTableComponent,
        TranslatePipe,
    ],
})
export class ListComponent implements OnChanges {
    /** List of bulk items to add */
    public readonly list = model<HashMap<unknown>[]>([]);
    /** List of fields available for building new item */
    public readonly fields = input<Identity[]>([]);
    /** Emitter user want to return to next step in flow */
    public readonly next = output<void>();
    /** Emitter user want to return to previous step in flow */
    public readonly previous = output<void>();
    /** List of column ids to show on table */
    public columns: TableColumn[] = [];

    private readonly _input_tmpl = viewChild<TemplateRef<unknown>>('input');

    public ngOnChanges(changes: SimpleChanges) {
        const fields = this.fields();
        if (changes.fields && fields) {
            this.columns = fields.map(
                (i) =>
                    ({
                        key: i.id,
                        name: i.name.toUpperCase(),
                        content: this._input_tmpl(),
                        sortable: true,
                    }) as TableColumn,
            );
        }
    }
}
