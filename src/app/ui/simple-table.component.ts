import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {
    Component,
    TemplateRef,
    computed,
    effect,
    input,
    linkedSignal,
    output,
    signal,
} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Observable } from 'rxjs';
import { IconComponent } from './icon.component';

export interface TableColumn {
    key: string;
    name: string;
    sortable?: boolean;
    sort_fn?: (a: unknown, b: unknown) => number;
    filterable?: boolean;
    content?: string | TemplateRef<unknown> | Component;
    size?: string;
    show?: boolean;
}

@Component({
    selector: 'simple-table',
    template: `
        <button
            role="table"
            class="border-base-200 grid overflow-visible border text-left"
            [style.gridTemplateColumns]="column_template()"
            (click)="onclick.emit(0)"
            cdkDropList
            (cdkDropListDropped)="
                ondrop.emit([$event.previousIndex, $event.currentIndex])
            "
        >
            @if (can_reorder()) {
                <div
                    class="border-base-200 bg-base-300 sticky top-0 z-10 flex min-h-full items-center justify-between border-r px-2"
                    [style.gridArea]="gridSquare(1, 1)"
                ></div>
            }
            @if (selectable()) {
                <div
                    class="border-base-200 bg-base-300 sticky top-0 z-10 flex min-h-full items-center justify-between border-r px-2"
                    [style.gridArea]="
                        gridSquare(1, 1 + (can_reorder() ? 1 : 0))
                    "
                >
                    <mat-checkbox
                        [checked]="selected().length === data_length()"
                        [indeterminate]="
                            selected().length > 0 &&
                            selected().length < data_length()
                        "
                        (change)="selectAll($event.checked)"
                    ></mat-checkbox>
                </div>
            }
            @for (
                column of active_columns();
                track column.key;
                let i = $index
            ) {
                <button
                    header
                    matRipple
                    [id]="'column-' + column.key"
                    class="border-base-200 bg-base-300 sticky top-0 z-10 flex min-h-full items-center justify-between p-4"
                    [style.gridArea]="
                        gridSquare(
                            1,
                            1 +
                                i +
                                (selectable() ? 1 : 0) +
                                (can_reorder() ? 1 : 0)
                        )
                    "
                    [class.pointer-events-none]="
                        !can_sort() || column.sortable === false
                    "
                    (click)="setSort(column.key)"
                    [class.active]="sort()?.key === column.key"
                    [class.border-r]="i !== active_columns().length - 1"
                    [class.width]="column.size"
                >
                    <div class="font-medium">
                        {{ column.name || column.key }}
                    </div>
                    @if (can_sort() && column.sortable !== false) {
                        <icon class="text-[1.25em]">
                            {{
                                sort()?.key === column.key && sort()?.reverse
                                    ? 'arrow_upward'
                                    : 'arrow_downward'
                            }}
                        </icon>
                    }
                </button>
            }
            @for (
                row of paginated_data();
                track row['id'] || $index;
                let i = $index
            ) {
                @if (can_reorder()) {
                    <div
                        class="grid"
                        cdkDrag
                        [style.gridArea]="i + 2 + '/1/' + (i + 2) + '/' + -1"
                        [style.gridTemplateColumns]="column_template()"
                    >
                        <div
                            *cdkDragPlaceholder
                            class="border-base-300 bg-base-200 h-16 w-full border-2 border-dashed"
                            [style.gridArea]="
                                i + 2 + '/1/' + (i + 2) + '/' + column_count()
                            "
                        ></div>
                        <div
                            class="border-base-200 z-0 flex min-h-full items-center justify-center border-r px-2"
                            [style.gridArea]="gridSquare(2 + i, 1)"
                            [class.border-b]="i !== data_length() - 1"
                            [style.background]="color()[i]"
                        >
                            <button
                                icon
                                matRipple
                                class="h-full w-full rounded-none"
                                cdkDragHandle
                            >
                                <icon class="text-2xl">unfold_more</icon>
                            </button>
                        </div>
                        <ng-container
                            *ngTemplateOutlet="
                                row_template;
                                context: { row: row, index: i }
                            "
                        ></ng-container>
                    </div>
                } @else {
                    <ng-container
                        *ngTemplateOutlet="
                            row_template;
                            context: { row: row, index: i }
                        "
                    ></ng-container>
                }
            }
            @if (!paginated_data()?.length) {
                <div
                    [style.gridArea]="2 + '/1/' + 2 + '/' + -1"
                    class="flex items-center justify-center p-4 opacity-30"
                >
                    {{ empty_message() }}
                </div>
            }
            <!-- TODO: Add pagination -->
        </button>
        <ng-template #row_template let-row="row" let-i="index">
            @if (selectable()) {
                <div
                    class="border-base-200 z-0 flex min-h-full items-center justify-between border-r px-2"
                    [style.gridArea]="
                        gridSquare(2 + i, 1 + (can_reorder() ? 1 : 0))
                    "
                    [class.border-b]="i !== data_length() - 1"
                    [style.background]="color()[i]"
                    (mouseenter)="enter_row.emit(i)"
                    (touchstart)="enter_row.emit(i)"
                >
                    <mat-checkbox
                        [checked]="selected().includes(i)"
                        (change)="select(i, $event.checked)"
                    ></mat-checkbox>
                </div>
            }
            @for (column of active_columns(); track column; let j = $index) {
                <div
                    class="border-base-200 relative z-0 flex min-h-full items-center justify-between"
                    [style.gridArea]="
                        gridSquare(
                            2 + i,
                            1 +
                                j +
                                (selectable() ? 1 : 0) +
                                (can_reorder() ? 1 : 0)
                        )
                    "
                    [class.border-b]="i !== data_length() - 1"
                    [class.border-r]="j !== active_columns().length - 1"
                    [class.width]="column.size"
                    (mouseenter)="enter_row.emit(i)"
                    (touchstart)="enter_row.emit(i)"
                    [style.background]="color()[i]"
                >
                    @switch (columnType(column)) {
                        @default {
                            <div class="p-4">
                                {{ row[column.key] }}
                                @if (
                                    row[column.key] === null ||
                                    row[column.key] === undefined
                                ) {
                                    <span class="opacity-30"> N/A </span>
                                }
                            </div>
                        }
                        @case ('template') {
                            <ng-container
                                *ngTemplateOutlet="
                                    template(column);
                                    context: {
                                        first: i === 0,
                                        last: i === data_length() - 1,
                                        index: i,
                                        data: row[column.key],
                                        row: row,
                                        key: column.key,
                                        name: column.name || column.key,
                                    }
                                "
                            ></ng-container>
                        }
                    }
                </div>
            }
        </ng-template>
    `,
    styles: [
        `
            :host,
            :host > button {
                min-width: 100%;
                overflow: hidden;
            }

            [header] icon {
                opacity: 0;
            }
            [header]:hover icon {
                opacity: 0.3;
            }
            [header]:hover.pointer-events-none icon {
                opacity: 0;
            }
            [header].active icon {
                opacity: 1;
            }
        `,
    ],
    imports: [CommonModule, MatCheckboxModule, DragDropModule, IconComponent],
})
export class SimpleTableComponent<T = Record<string, unknown>> {
    // eslint-disable-next-line @angular-eslint/no-input-rename
    public readonly selectedInput = input<number[]>([], { alias: 'selected' });
    public readonly selected = linkedSignal(this.selectedInput);

    public readonly data = input<T[] | Observable<T[]>>(undefined);
    public readonly columns = input<TableColumn[]>([]);
    public readonly selectable = input(false);
    public readonly filter = input<string>('');
    public readonly sortable = input(false);
    public readonly can_reorder = input(false);
    public readonly page_size = input(0);
    public readonly color = input<Record<number, string>>({});
    public readonly empty_message = input('No data to list');
    public readonly filter_on = input<string[]>([]);

    public readonly selectedChange = output<number[]>();
    public readonly enter_row = output<number>();
    public readonly onclick = output<number>();
    public readonly oncontext = output<number>();
    public readonly ondrop = output<[number, number]>();

    public readonly page = signal(0);
    public readonly total_count = signal(0);
    public readonly total_pages = signal(0);
    public readonly active_columns = signal<TableColumn[]>([]);
    public readonly sort = signal<{ key: string; reverse: boolean } | null>(
        null,
    );

    // Internal signal to hold the actual data array
    private readonly _data = signal<T[]>([]);

    // Computed data view with filtering and sorting
    public readonly data_view = computed(() => {
        let data = [...this._data()];
        const filter_str = this.filter()?.toLowerCase();
        const current_sort = this.sort();

        // Apply filter
        if (filter_str) {
            data = data.filter((v) => {
                const filter_on = this.filter_on();
                const keys = filter_on.length ? filter_on : Object.keys(v);
                return keys.some((key) => {
                    const value = v[key];
                    const cmp_str = `${JSON.stringify(value)}`.toLowerCase();
                    return cmp_str.includes(filter_str);
                });
            });
        }

        // Apply sort
        if (current_sort && data.length) {
            const type = typeof data[0][current_sort.key];
            const default_fn =
                type === 'number'
                    ? (a, b) => a - b
                    : (a, b) => {
                          const a_value = JSON.stringify(a);
                          const b_value = JSON.stringify(b);
                          return a_value?.localeCompare(b_value);
                      };
            data = data.sort((a, b) => {
                const sort_fn =
                    this.column(current_sort.key)?.sort_fn || default_fn;
                const result = sort_fn(
                    a[current_sort.key],
                    b[current_sort.key],
                );
                return current_sort.reverse ? -result : result;
            });
        }

        return data;
    });

    // Computed column count
    public readonly column_count = computed(() => {
        return this.active_columns().length + (this.selectable() ? 1 : 0);
    });

    // Computed data length
    public readonly data_length = computed(() => this._data().length);

    public template(column: TableColumn) {
        return column.content as TemplateRef<unknown>;
    }

    constructor() {
        // Handle Observable vs array data input
        effect((onCleanup) => {
            const data = this.data();
            if (data instanceof Observable) {
                const sub = data.subscribe((value) => {
                    this._data.set(value || []);
                });
                onCleanup(() => sub.unsubscribe());
            } else {
                this._data.set(data || []);
            }
        });

        // Update active columns when columns input changes
        effect(() => {
            this.active_columns.set(
                this.columns().filter((_) => _.show !== false),
            );
        });

        // Reset page and update pagination info when data view changes
        effect(() => {
            const data = this.data_view();
            const page_size_value = this.page_size();

            this.selected.set([]);
            this.page.set(0);

            if (page_size_value) {
                this.total_count.set(data.length);
                this.total_pages.set(Math.ceil(data.length / page_size_value));
            }
        });
    }

    // Paginated data view
    public readonly paginated_data = computed(() => {
        const data = this.data_view();
        const page_size_value = this.page_size();
        if (!page_size_value) return data;

        const start = this.page() * page_size_value;
        const end = (this.page() + 1) * page_size_value;
        return data.slice(start, end);
    });

    // Computed column template
    public readonly column_template = computed(() => {
        let template = this.active_columns()
            .map((_) => _.size || 'auto')
            .join(' ');
        template = this.selectable() ? `3.5rem ${template}` : template;
        template = this.can_reorder() ? `3.5rem ${template}` : template;
        return template;
    });

    public readonly can_sort = computed(
        () => !this.can_reorder() && this.sortable(),
    );

    public column(key: string) {
        return this.active_columns().find((_) => _.key === key);
    }

    public columnType(column: TableColumn) {
        return column.content instanceof TemplateRef ? 'template' : 'raw';
    }

    public gridSquare(row: number, column: number) {
        return `${row} / ${column} / ${row + 1} / ${column + 1}`;
    }

    public select(index: number, state: boolean) {
        const current_selected = this.selected();
        if (state) {
            this.selected.set([...current_selected, index]);
        } else {
            this.selected.set(current_selected.filter((i) => i !== index));
        }
    }

    public selectAll(state: boolean) {
        const list = this.data_view();
        this.selected.set(state ? list.map((_item, i) => i) : []);
    }

    public setSort(key: string) {
        const current_sort = this.sort();
        if (!current_sort || current_sort.key !== key) {
            this.sort.set({ key, reverse: false });
        } else if (!current_sort.reverse) {
            this.sort.set({ key, reverse: true });
        } else {
            this.sort.set(null);
        }
    }
}
