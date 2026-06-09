import {
    Component,
    input,
    model,
    OnChanges,
    OnInit,
    output,
    signal,
    SimpleChanges,
    WritableSignal,
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
            class="bg-base-100 border-base-200 mb-4 grid gap-3 rounded-sm border p-4 text-sm md:grid-cols-3"
        >
            <div>
                <div class="text-base-content/60 tracking-wide uppercase">
                    Rows found
                </div>
                <div class="text-lg font-medium">{{ list()?.length || 0 }}</div>
            </div>
            <div>
                <div class="text-base-content/60 tracking-wide uppercase">
                    Source columns
                </div>
                <div class="text-lg font-medium">
                    {{ source_fields().length }}
                </div>
            </div>
            <div>
                <div class="text-base-content/60 tracking-wide uppercase">
                    Matched fields
                </div>
                <div class="text-lg font-medium">
                    {{ mappedFieldCount() }} / {{ field_list().length }}
                </div>
            </div>
        </div>
        <div class="-mx-2 flex max-w-full flex-wrap px-2">
            @for (field of field_list(); track field.id) {
                <div class="m-2 flex min-w-[18rem] flex-1 flex-col">
                    <label
                        class="mb-1 flex items-center justify-between text-xs tracking-wide uppercase"
                        [for]="field.id"
                    >
                        <span>{{ field.id }}</span>
                        @if (isRequired(field.id)) {
                            <span class="text-error">Required</span>
                        }
                    </label>
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select
                            [name]="'' + field.id"
                            [ngModel]="field_mapping()[field.id]"
                            (ngModelChange)="setFieldMapping(field.id, $event)"
                            placeholder="Skip field"
                        >
                            <mat-option value="">Skip field</mat-option>
                            @for (type of source_fields(); track type.id) {
                                <mat-option [value]="type.id">
                                    {{ type.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
            }
        </div>
        <div class="text-base-content/60 px-2 pt-2 text-xs">
            Required fields can be mapped here or filled in during review.
        </div>
        <div
            class="bg-base-100 border-base-200 fixed right-0 bottom-0 left-0 z-20 flex items-center justify-end space-x-4 border-t px-4 py-4 shadow-lg"
        >
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
    /** Fields required before items can be created */
    public readonly required_fields = input<string[]>([]);
    /** User selected mappings for field mappings */
    public readonly mappings = model<Record<string, string>>({});
    /** Emitter for mapped changes to list */
    public readonly mapping_done = output<HashMap<unknown>[]>();
    /** Emitter user want to return to previous step in flow */
    public readonly previous = output<void>();
    /** Emitter for changes to user selected field mappings */
    public readonly new_mappings = output<Record<string, string>>();
    /** List of fields available to be selected */
    public readonly source_fields: WritableSignal<Identity[]> = signal([]);
    /** Mapping of raw data fields ids to item fields ids */
    public readonly field_mapping = signal<HashMap<string>>({});

    public ngOnInit() {
        const mappings = this.mappings();
        if (mappings) {
            this.field_mapping.set({
                ...this.field_mapping(),
                ...mappings,
            });
        }
    }

    public ngOnChanges(changes: SimpleChanges) {
        const mappings = this.mappings();
        const list = this.list();
        if (changes.list && list && list.length) {
            this.source_fields.set(
                Object.keys(list[0]).map((i) => ({
                    id: i,
                    name: i.split('_').join(' '),
                })),
            );
            this.source_fields().forEach((field) => {
                const field_id = this.normaliseFieldId(field.id);
                if (this.field_list().find((i) => i.id === field_id)) {
                    this.setFieldMapping(field_id, `${field.id}`);
                }
            });
            if (mappings) {
                this.field_mapping.set({
                    ...this.field_mapping(),
                    ...mappings,
                });
            }
        }
        if (changes.mappings && mappings) {
            this.field_mapping.set({ ...this.field_mapping(), ...mappings });
        }
    }

    /** Generated the mapped list of items and emit them */
    public saveMapping(): void {
        const mapped_list = this.list().map((item) => {
            const mapped_item: Record<string, unknown> = {};
            for (const field of this.field_list()) {
                const id = `${field.id}`;
                mapped_item[id] = item[this.field_mapping()[id]];
            }
            return mapped_item;
        });
        this.mappings.set({ ...this.field_mapping() });
        this.new_mappings.emit(this.mappings());
        this.mapping_done.emit(mapped_list);
    }

    public setFieldMapping(field_id: string | number, value: string): void {
        this.field_mapping.update((mapping) => ({
            ...mapping,
            [field_id]: value,
        }));
    }

    public mappedFieldCount(): number {
        return this.field_list().filter(
            (field) => !!this.field_mapping[field.id],
        ).length;
    }

    public isRequired(field: unknown): boolean {
        return this.required_fields().includes(`${field}`);
    }

    private normaliseFieldId(field: unknown): string {
        return `${field}`.toLowerCase().split(' ').join('_');
    }
}
