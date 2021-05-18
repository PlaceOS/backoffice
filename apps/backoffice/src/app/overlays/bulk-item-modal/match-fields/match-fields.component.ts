import {
    Component,
    Input,
    SimpleChanges,
    EventEmitter,
    Output,
} from '@angular/core';

import { HashMap, Identity } from 'apps/backoffice/src/app/common/types';

@Component({
    selector: 'bulk-item-match-fields',
    templateUrl: './match-fields.component.html',
    styleUrls: ['./match-fields.component.scss'],
})
export class MatchFieldsComponent {
    /** List of bulk items to add */
    @Input() public list: HashMap<any>[];
    /** List of fields available for building new item */
    @Input() public field_list: Identity[] = [];
    /** Emitter for mapped changes to list */
    @Output() public mapping_done = new EventEmitter<HashMap<any>[]>();
    /** Emitter user want to return to previous step in flow */
    @Output() public previous = new EventEmitter<void>();
    /** List of fields available to be selected */
    public source_fields: Identity[] = [];
    /** Mapping of raw data fields ids to item fields ids */
    public field_mapping: HashMap<string> = {};

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.list && this.list && this.list.length) {
            this.source_fields = Object.keys(this.list[0]).map((i) => ({
                id: i.toLowerCase().split(' ').join('_'),
                name: i.split('_').join(' '),
            }));
            this.source_fields.forEach((field) => {
                if (this.field_list.find((i) => i.id === field.id)) {
                    this.field_mapping[`${field.id}`] = `${field.id}`;
                }
            });
        }
    }

    /** Generated the mapped list of items and emit them */
    public saveMapping(): void {
        const mapped_list = this.list.map((item) => {
            const mapped_item: any = {};
            for (const field of this.field_list) {
                const id = `${field.id}`;
                mapped_item[id] = item[this.field_mapping[id]];
            }
            return mapped_item;
        });
        this.mapping_done.emit(mapped_list);
    }
}
