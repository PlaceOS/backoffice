import {
    Component,
    OnChanges,
    OnInit,
    SimpleChanges,
    input,
    model,
    output,
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HashMap, Identity } from '../../common/types';
import { TranslatePipe } from '../../ui/translate.pipe';

@Component({
    selector: 'bulk-item-match-fields',
    template: `
        <div
            class="-mt-2 flex max-h-[65vh] max-w-[80vw] flex-wrap overflow-auto px-2"
        >
            @for (field of field_list(); track field.id) {
                <div class="m-2 flex min-w-[40%] flex-1 flex-col">
                    <label class="uppercase" [for]="field.id">{{
                        field.id
                    }}</label>
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select
                            [name]="'' + field.id"
                            [(ngModel)]="field_mapping[field.id]"
                            placeholder="Select field"
                        >
                            @for (type of source_fields; track type.id) {
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
    imports: [
        TranslatePipe,
        MatRippleModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
    ],
})
export class MatchFieldsComponent implements OnChanges, OnInit {
    /** List of bulk items to add */
    public readonly list = input<HashMap<unknown>[]>(undefined);
    /** List of fields available for building new item */
    public readonly field_list = input<Identity[]>([]);
    /** User selected mappings for field mappings */
    public readonly mappings = model<Record<string, string>>({});
    /** Emitter for mapped changes to list */
    public readonly mapping_done = output<HashMap<unknown>[]>();
    /** Emitter user want to return to previous step in flow */
    public readonly previous = output<void>();
    /** Emitter for changes to user selected field mappings */
    public readonly new_mappings = output<Record<string, string>>();
    /** List of fields available to be selected */
    public source_fields: Identity[] = [];
    /** Mapping of raw data fields ids to item fields ids */
    public field_mapping: HashMap<string> = {};

    public ngOnInit() {
        const mappings = this.mappings();
        if (mappings) {
            this.field_mapping = {
                ...this.field_mapping,
                ...mappings,
            };
        }
    }

    public ngOnChanges(changes: SimpleChanges) {
        const mappings = this.mappings();
        const list = this.list();
        if (changes.list && list && list.length) {
            this.source_fields = Object.keys(list[0]).map((i) => ({
                id: i.toLowerCase().split(' ').join('_'),
                name: i.split('_').join(' '),
            }));
            this.source_fields.forEach((field) => {
                if (this.field_list().find((i) => i.id === field.id)) {
                    this.field_mapping[`${field.id}`] = `${field.id}`;
                }
            });
            if (mappings) {
                this.field_mapping = {
                    ...this.field_mapping,
                    ...mappings,
                };
            }
        }
        if (changes.mappings && mappings) {
            this.field_mapping = { ...this.field_mapping, ...mappings };
        }
    }

    /** Generated the mapped list of items and emit them */
    public saveMapping(): void {
        const mapped_list = this.list().map((item) => {
            const mapped_item: Record<string, unknown> = {};
            for (const field of this.field_list()) {
                const id = `${field.id}`;
                mapped_item[id] = item[this.field_mapping[id]];
            }
            return mapped_item;
        });
        this.mappings.set({ ...this.field_mapping });
        this.new_mappings.emit(this.mappings());
        this.mapping_done.emit(mapped_list);
    }
}
