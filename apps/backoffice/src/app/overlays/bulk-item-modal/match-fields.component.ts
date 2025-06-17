import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';

import { HashMap, Identity } from 'apps/backoffice/src/app/common/types';

@Component({
    selector: 'bulk-item-match-fields',
    template: `
        <div
            class="-mt-2 flex max-h-[65vh] max-w-[80vw] flex-wrap overflow-auto px-2"
        >
            @for (field of field_list; track field) {
                <div class="m-2 flex min-w-[40%] flex-1 flex-col">
                    <label class="uppercase" [for]="field.id">{{
                        field.id
                    }}</label>
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select
                            [name]="field.id"
                            [(ngModel)]="field_mapping[field.id]"
                            placeholder="Select field"
                        >
                            @for (type of source_fields; track type) {
                                <mat-option [value]="type.id">
                                    {{ type.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
            }
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
            <button btn matRipple class="w-36" (click)="saveMapping()">
                {{ 'COMMON.CONTINUE' | translate }}
            </button>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class MatchFieldsComponent implements OnChanges, OnInit {
    /** List of bulk items to add */
    @Input() public list: HashMap<any>[];
    /** List of fields available for building new item */
    @Input() public field_list: Identity[] = [];
    /** User selected mappings for field mappings */
    @Input() public mappings: Record<string, string> = {};
    /** Emitter for mapped changes to list */
    @Output() public mapping_done = new EventEmitter<HashMap<any>[]>();
    /** Emitter user want to return to previous step in flow */
    @Output() public previous = new EventEmitter<void>();
    /** Emitter for changes to user selected field mappings */
    @Output() public new_mappings = new EventEmitter<Record<string, string>>();
    /** List of fields available to be selected */
    public source_fields: Identity[] = [];
    /** Mapping of raw data fields ids to item fields ids */
    public field_mapping: HashMap<string> = {};

    public ngOnInit() {
        if (this.mappings) {
            this.field_mapping = {
                ...this.field_mapping,
                ...this.mappings,
            };
        }
    }

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
            if (this.mappings) {
                this.field_mapping = {
                    ...this.field_mapping,
                    ...this.mappings,
                };
            }
        }
        if (changes.mappings && this.mappings) {
            this.field_mapping = { ...this.field_mapping, ...this.mappings };
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
        this.mappings = { ...this.field_mapping };
        this.new_mappings.emit(this.mappings);
        this.mapping_done.emit(mapped_list);
    }
}
