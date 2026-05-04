import {
    Component,
    TemplateRef,
    computed,
    input,
    model,
    output,
    viewChild,
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { HashMap, Identity } from '../../common/types';
import { IconComponent } from '../../ui/icon.component';
import {
    SimpleTableComponent,
    TableColumn,
} from '../../ui/simple-table.component';
import { TranslatePipe } from '../../ui/translate.pipe';

@Component({
    selector: 'bulk-item-list',
    template: `
        <div
            class="bg-base-100 border-base-200 mb-4 grid gap-3 rounded-sm border p-4 text-sm md:grid-cols-3"
        >
            <div>
                <div class="text-base-content/60 tracking-wide uppercase">
                    Rows ready
                </div>
                <div class="text-lg font-medium">{{ list().length }}</div>
            </div>
            <div>
                <div class="text-base-content/60 tracking-wide uppercase">
                    Validation
                </div>
                @if (validation_errors().length) {
                    <div class="text-error text-lg font-medium">
                        {{ validation_errors().length }} issue(s)
                    </div>
                } @else {
                    <div class="text-success text-lg font-medium">
                        Ready to save
                    </div>
                }
            </div>
            <div>
                <div class="text-base-content/60 tracking-wide uppercase">
                    Duplicate check
                </div>
                @if (duplicate_warnings().length) {
                    <div class="text-warning text-lg font-medium">
                        {{ duplicate_warnings().length }} warning(s)
                    </div>
                } @else {
                    <div class="text-lg font-medium">No duplicates</div>
                }
            </div>
        </div>
        @if (validation_errors().length || duplicate_warnings().length) {
            <div class="mb-4 grid gap-2 text-sm md:grid-cols-2">
                @if (validation_errors().length) {
                    <div
                        class="border-error/40 bg-error/10 rounded-sm border p-3"
                    >
                        <div class="text-error mb-1 font-medium">
                            Fix before saving
                        </div>
                        @for (
                            error of validation_errors().slice(0, 4);
                            track error
                        ) {
                            <div>{{ error }}</div>
                        }
                    </div>
                }
                @if (duplicate_warnings().length) {
                    <div
                        class="border-warning/40 bg-warning/10 rounded-sm border p-3"
                    >
                        <div class="text-warning mb-1 font-medium">
                            Review duplicates
                        </div>
                        @for (
                            warning of duplicate_warnings().slice(0, 4);
                            track warning
                        ) {
                            <div>{{ warning }}</div>
                        }
                    </div>
                }
            </div>
        }
        <div class="flex max-w-full flex-wrap text-sm">
            <simple-table
                [style.min-width]="
                    12.5 *
                        (fields().length + (show_start_modules() ? 1 : 0) + 1) +
                    'rem'
                "
                [data]="list()"
                [columns]="columns()"
            ></simple-table>
        </div>
        @if (show_start_modules()) {
            <label class="mt-4 flex items-center space-x-2 text-sm">
                <input
                    type="checkbox"
                    [ngModel]="all_start_modules"
                    (ngModelChange)="setAllStartModules($event)"
                />
                <span>Start all modules for all systems</span>
            </label>
        }
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
            <button
                btn
                matRipple
                class="w-36"
                [disabled]="!canSave()"
                (click)="save()"
            >
                {{ 'COMMON.SAVE_ITEMS' | translate }}
            </button>
        </div>
        <ng-template
            #input
            let-row="row"
            let-name="name"
            let-id="key"
            let-index="index"
        >
            <input
                class="w-full border-l-2 border-transparent bg-transparent p-4 outline-none"
                [class.border-error]="isMissing(row, id)"
                [placeholder]="name"
                [ngModel]="row[id]"
                (ngModelChange)="updateItem(index, id, $event)"
            />
        </ng-template>
        <ng-template #start let-row="row" let-index="index">
            <label class="flex w-full items-center justify-center p-4">
                <input
                    type="checkbox"
                    [ngModel]="row['start_modules']"
                    (click)="$event.stopPropagation()"
                    (ngModelChange)="updateItem(index, 'start_modules', $event)"
                />
            </label>
        </ng-template>
        <ng-template #actions let-index="index">
            <button
                icon
                matRipple
                class="text-error mx-auto"
                title="Remove row"
                (click)="removeItem(index); $event.stopPropagation()"
            >
                <icon>delete</icon>
            </button>
        </ng-template>
    `,
    styles: [``],
    imports: [
        FormsModule,
        MatRippleModule,
        SimpleTableComponent,
        IconComponent,
        TranslatePipe,
    ],
})
export class ListComponent {
    /** List of bulk items to add */
    public readonly list = model<HashMap<unknown>[]>([]);
    /** List of fields available for building new item */
    public readonly fields = input<Identity[]>([]);
    /** Fields required before items can be saved */
    public readonly required_fields = input<string[]>([]);
    /** Validation errors to show for the reviewed list */
    public readonly validation_errors = input<string[]>([]);
    /** Duplicate warnings to show for the reviewed list */
    public readonly duplicate_warnings = input<string[]>([]);
    /** Whether to show system bulk add options */
    public readonly show_start_modules = input(false);
    /** Emitter user want to return to next step in flow */
    public readonly next = output<void>();
    /** Emitter user want to return to previous step in flow */
    public readonly previous = output<void>();
    private readonly _input_tmpl = viewChild<TemplateRef<unknown>>('input');
    private readonly _start_tmpl = viewChild<TemplateRef<unknown>>('start');
    private readonly _actions_tmpl = viewChild<TemplateRef<unknown>>('actions');

    /** List of column ids to show on table */
    public readonly columns = computed<TableColumn[]>(() => {
        const columns = this.fields().map(
            (i) =>
                ({
                    key: i.id,
                    name: i.name.toUpperCase(),
                    content: this._input_tmpl(),
                    sortable: true,
                }) as TableColumn,
        );
        if (this.show_start_modules()) {
            columns.unshift({
                key: 'start_modules',
                name: 'START MODULES',
                content: this._start_tmpl(),
                sortable: false,
                size: '6.5rem',
            });
        }
        columns.push({
            key: '_actions',
            name: ' ',
            content: this._actions_tmpl(),
            sortable: false,
            size: '4rem',
        });
        return columns;
    });

    public get all_start_modules(): boolean {
        const list = this.list();
        return list.length > 0 && list.every((item) => !!item.start_modules);
    }

    public setAllStartModules(value: boolean) {
        this.list.set(
            this.list().map((item) => ({
                ...item,
                start_modules: value,
            })),
        );
    }

    public updateItem(index: number, field: string, value: unknown) {
        this.list.set(
            this.list().map((item, item_index) =>
                item_index === index ? { ...item, [field]: value } : item,
            ),
        );
    }

    public removeItem(index: number) {
        this.list.set(
            this.list().filter((_, item_index) => item_index !== index),
        );
    }

    public isMissing(row: HashMap<unknown>, field: string): boolean {
        const value = row[field];
        return (
            this.required_fields().includes(field) &&
            (value === undefined || value === null || value === '')
        );
    }

    public canSave(): boolean {
        return this.list().length > 0 && this.validation_errors().length === 0;
    }

    public save() {
        if (this.canSave()) {
            this.next.emit();
        }
    }
}
