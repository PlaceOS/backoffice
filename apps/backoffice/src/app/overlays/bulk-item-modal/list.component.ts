import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    TemplateRef,
    ViewChild,
} from '@angular/core';

import { HashMap, Identity } from 'apps/backoffice/src/app/common/types';
import { TableColumn } from '../../ui/simple-table.component';

@Component({
    selector: 'bulk-item-list',
    template: `
        <div
            class="flex max-h-[65vh] max-w-[80vw] flex-wrap overflow-auto px-4 text-sm"
        >
            <simple-table
                [style.min-width]="12 * fields.length + 'rem'"
                [data]="list"
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
    standalone: false
})
export class ListComponent implements OnChanges {
    /** List of bulk items to add */
    @Input() public list: HashMap<any>;
    /** List of fields available for building new item */
    @Input() public fields: Identity[] = [];
    /** Emitter user want to return to next step in flow */
    @Output() public next = new EventEmitter<void>();
    /** Emitter user want to return to previous step in flow */
    @Output() public previous = new EventEmitter<void>();
    /** List of column ids to show on table */
    public columns: TableColumn[] = [];

    @ViewChild('input', { static: true }) private _input_tmpl: TemplateRef<any>;

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.fields && this.fields) {
            this.columns = this.fields.map(
                (i) =>
                    ({
                        key: i.id,
                        name: i.name.toUpperCase(),
                        content: this._input_tmpl,
                        sortable: true,
                    }) as TableColumn,
            );
        }
    }
}
