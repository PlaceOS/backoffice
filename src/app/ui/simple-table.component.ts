import { DragDropModule } from '@angular/cdk/drag-drop';
import {
    CdkVirtualScrollViewport,
    ScrollingModule,
} from '@angular/cdk/scrolling';
import { NgTemplateOutlet } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    Signal,
    TemplateRef,
    computed,
    effect,
    inject,
    input,
    linkedSignal,
    output,
    signal,
    untracked,
    viewChild,
} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Subscribable } from '../common/signals';
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

type TableData<T> = T[] | Signal<T[]> | Subscribable<T[]>;

/** Shared collator for the default sort. Same order as `localeCompare`. */
const COLLATOR = new Intl.Collator();

/** Text key for the default sort of non-number values */
function sortKey(value: unknown): string {
    return typeof value === 'string' ? value : (JSON.stringify(value) ?? '');
}

@Component({
    selector: 'simple-table',
    template: `
        <div
            role="table"
            [class.virtual-table]="virtual_enabled()"
            class="border-base-200 grid overflow-visible border text-left"
            [style.gridTemplateColumns]="column_template()"
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
                    />
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
            @if (virtual_enabled()) {
                <cdk-virtual-scroll-viewport
                    [itemSize]="virtual_row_height()"
                    [minBufferPx]="virtual_row_height() * 4"
                    [maxBufferPx]="virtual_row_height() * 8"
                    style="grid-column: 1 / -1; min-height: 0; height: 100%"
                >
                    <div
                        *cdkVirtualFor="
                            let row of data_view();
                            let i = index;
                            trackBy: trackRow
                        "
                        role="row"
                        class="grid overflow-hidden"
                        [style.height.px]="virtual_row_height()"
                        [style.gridTemplateColumns]="column_template()"
                        [attr.aria-rowindex]="i + 2"
                    >
                        <ng-container
                            *ngTemplateOutlet="
                                row_template;
                                context: { row, index: i }
                            "
                        />
                    </div>
                </cdk-virtual-scroll-viewport>
            } @else {
                @for (
                    row of paginated_data();
                    track row['id'] || $index;
                    let i = $index
                ) {
                    @if (can_reorder()) {
                        <div
                            class="grid"
                            cdkDrag
                            [style.gridArea]="
                                i + 2 + '/1/' + (i + 2) + '/' + -1
                            "
                            [style.gridTemplateColumns]="column_template()"
                        >
                            <div
                                *cdkDragPlaceholder
                                class="border-base-300 bg-base-200 h-16 w-full border-2 border-dashed"
                                [style.gridArea]="
                                    i +
                                    2 +
                                    '/1/' +
                                    (i + 2) +
                                    '/' +
                                    column_count()
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
                                    aria-label="Drag to reorder"
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
                            />
                        </div>
                    } @else {
                        <ng-container
                            *ngTemplateOutlet="
                                row_template;
                                context: { row: row, index: i }
                            "
                        />
                    }
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
        </div>
        <ng-template #row_template let-row="row" let-i="index">
            @if (selectable()) {
                <div
                    class="border-base-200 z-0 flex min-h-full items-center justify-between border-r px-2"
                    [style.gridArea]="
                        gridSquare(
                            virtual_enabled() ? 1 : 2 + i,
                            1 + (can_reorder() ? 1 : 0)
                        )
                    "
                    [class.border-b]="i !== data_length() - 1"
                    [style.background]="color()[i]"
                    [attr.data-row]="i"
                >
                    <mat-checkbox
                        [checked]="selected().includes(i)"
                        (change)="select(i, $event.checked)"
                    />
                </div>
            }
            @for (column of active_columns(); track column; let j = $index) {
                <div
                    class="border-base-200 relative z-0 flex min-h-full items-center justify-between"
                    [style.gridArea]="
                        gridSquare(
                            virtual_enabled() ? 1 : 2 + i,
                            1 +
                                j +
                                (selectable() ? 1 : 0) +
                                (can_reorder() ? 1 : 0)
                        )
                    "
                    [class.border-b]="i !== data_length() - 1"
                    [class.border-r]="j !== active_columns().length - 1"
                    [class.width]="column.size"
                    [attr.data-row]="i"
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
                            />
                        }
                    }
                </div>
            }
        </ng-template>
    `,
    styles: [
        `
            :host,
            :host > [role='table'] {
                min-width: 100%;
                overflow: hidden;
            }

            :host:has(.virtual-table) {
                display: block;
                height: 100%;
                min-height: 0;
            }
            .virtual-table {
                height: 100%;
                width: 100%;
                grid-template-rows: auto minmax(0, 1fr);
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
    imports: [
        ScrollingModule,
        MatCheckboxModule,
        DragDropModule,
        IconComponent,
        NgTemplateOutlet,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleTableComponent<T = Record<string, unknown>> {
    // eslint-disable-next-line @angular-eslint/no-input-rename
    public readonly selectedInput = input<number[]>([], { alias: 'selected' });
    public readonly selected = linkedSignal(this.selectedInput);

    public readonly data = input<TableData<T>>(undefined);
    public readonly columns = input<TableColumn[]>([]);
    public readonly selectable = input(false);
    public readonly filter = input<string>('');
    public readonly sortable = input(false);
    public readonly can_reorder = input(false);
    public readonly page_size = input(0);
    /** Fixed row height in pixels. Zero keeps the standard table layout. */
    public readonly virtual_row_height = input(0);
    public readonly virtual_enabled = computed(
        () => this.virtual_row_height() > 0 && !this.can_reorder(),
    );
    private readonly _viewport = viewChild(CdkVirtualScrollViewport);
    public readonly trackRow = (index: number, row: T) => row['id'] ?? index;
    public readonly color = input<Record<number, string>>({});
    public readonly empty_message = input('No data to list');
    public readonly filter_on = input<string[]>([]);

    public readonly selectedChange = output<number[]>();
    public readonly enter_row = output<number>();
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
        // Returned as is when there is no filter and no sort
        let data = this._data();
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
            const { key, reverse } = current_sort;
            const direction = reverse ? -1 : 1;
            const sort_fn = this.column(key)?.sort_fn;
            if (sort_fn) {
                data = [...data].sort(
                    (a, b) => direction * sort_fn(a[key], b[key]),
                );
            } else if (typeof data[0][key] === 'number') {
                data = [...data].sort((a, b) => direction * (a[key] - b[key]));
            } else {
                // Build each text key once, not once per comparison
                const keyed = data.map((row) => ({
                    row,
                    sort_key: sortKey(row[key]),
                }));
                keyed.sort(
                    (a, b) =>
                        direction * COLLATOR.compare(a.sort_key, b.sort_key),
                );
                data = keyed.map((item) => item.row);
            }
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

    private readonly _el = inject<ElementRef<HTMLElement>>(ElementRef);
    private _hover_row = -1;

    constructor() {
        // One native listener for row hover. Template listeners on each cell
        // would schedule an app tick per event; this emits only on a new row.
        const el = this._el.nativeElement;
        const onEnter = (event: Event) => {
            const cell = (event.target as Element).closest?.('[data-row]');
            const row = cell ? +cell.getAttribute('data-row') : -1;
            if (
                row < 0 ||
                (event.type === 'mouseover' && row === this._hover_row)
            )
                return;
            this._hover_row = row;
            this.enter_row.emit(row);
        };
        const onLeave = () => (this._hover_row = -1);
        el.addEventListener('mouseover', onEnter);
        el.addEventListener('touchstart', onEnter, { passive: true });
        el.addEventListener('mouseleave', onLeave);
        inject(DestroyRef).onDestroy(() => {
            el.removeEventListener('mouseover', onEnter);
            el.removeEventListener('touchstart', onEnter);
            el.removeEventListener('mouseleave', onLeave);
        });
        // Flex layouts can gain their final height after the viewport is created.
        effect((onCleanup) => {
            const viewport = this._viewport();
            if (!viewport || typeof ResizeObserver === 'undefined') return;
            const observer = new ResizeObserver(() =>
                viewport.checkViewportSize(),
            );
            observer.observe(viewport.elementRef.nativeElement);
            onCleanup(() => observer.disconnect());
        });
        // Handle signal, subscribable, or array data input.
        effect((onCleanup) => {
            const data = this.data();
            if (Array.isArray(data)) {
                this._data.set(data);
            } else if (typeof data === 'function') {
                this._data.set(data() || []);
            } else if (
                data &&
                typeof data === 'object' &&
                'subscribe' in data
            ) {
                const sub = data.subscribe((value) => {
                    this._data.set(value || []);
                });
                onCleanup(() => {
                    if (typeof sub === 'function') {
                        sub();
                    } else {
                        sub.unsubscribe();
                    }
                });
            } else {
                this._data.set([]);
            }
        });

        // Update active columns when columns input changes
        effect(() => {
            this.active_columns.set(
                this.columns().filter((_) => _.show !== false),
            );
        });

        // A new filter or sort changes which row sits at each index,
        // so clear the selection and go back to the top.
        effect(() => {
            this.filter();
            this.sort();
            untracked(() => {
                this.selected.set([]);
                this.page.set(0);
                this._viewport()?.scrollToIndex(0);
            });
        });

        // New data (e.g. a poll) keeps the selection and page where possible
        effect(() => {
            const count = this.data_view().length;
            const page_size_value = this.page_size();
            untracked(() => {
                const selected = this.selected();
                if (selected.some((i) => i >= count)) {
                    this.selected.set(selected.filter((i) => i < count));
                }
                if (!page_size_value) return;
                const pages = Math.ceil(count / page_size_value);
                this.total_count.set(count);
                this.total_pages.set(pages);
                if (this.page() >= pages) this.page.set(Math.max(pages - 1, 0));
            });
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
            .map(
                (_) =>
                    _.size ||
                    (this.virtual_enabled() ? 'minmax(0, 1fr)' : 'auto'),
            )
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
