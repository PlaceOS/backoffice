import {
    Component,
    Input,
    SimpleChanges,
    OnChanges,
    Output,
    EventEmitter,
} from '@angular/core';

import { Identity, HashMap } from 'apps/backoffice/src/app/common/types';

@Component({
    selector: 'bulk-item-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
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
    public field_ids: string[] = [];

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.fields && this.fields) {
            this.field_ids = this.fields.map((i) => `${i.id}`);
        }
    }
}
