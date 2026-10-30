import { DragDropModule } from '@angular/cdk/drag-drop';
import {
    CdkVirtualScrollViewport,
    ScrollingModule,
} from '@angular/cdk/scrolling';
import { NgTemplateOutlet } from '@angular/common';
import {
    afterNextRender,
    ChangeDetectionStrategy,
    Component,
    computed,
    DestroyRef,
    effect,
    ElementRef,
    inject,
    Injector,
    input,
    output,
    Signal,
    signal,
    TemplateRef,
    untracked,
    viewChild,
} from '@angular/core';
import { Subscribable } from '../common/signals';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

export interface TableColumn {
    key: string;
    name: string;
    /** Show the name only to screen readers, e.g. for a column of buttons */
    hide_name?: boolean;
    sortable?: boolean;
    sort_fn?: (a: unknown, b: unknown) => number;
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
            [attr.aria-rowcount]="
                virtual_enabled() ? data_view().length + 1 : null
            "
            [class.virtual-table]="virtual_enabled()"
            class="border-base-200 grid overflow-visible border text-left"
            [style.gridTemplateColumns]="column_template()"
            cdkDropList
            (cdkDropListDropped)="
                ondrop.emit([$event.previousIndex, $event.currentIndex])
            "
        >
            <div
                role="row"
                class="contents"
                [attr.aria-rowindex]="virtual_enabled() ? 1 : null"
            >
                @if (can_reorder()) {
                    <div
                        role="columnheader"
                        class="border-base-200 bg-base-300 sticky top-0 z-10 flex min-h-full items-center justify-between border-r px-2"
                        [style.gridArea]="gridSquare(1, 1)"
                    >
                        <span class="sr-only">
                            {{ 'COMMON.MOVE_ROW' | translate }}
                        </span>
                    </div>
                }
                @for (
                    column of active_columns();
                    track column.key;
                    let i = $index
                ) {
                    @let sorted = sort()?.key === column.key;
                    @let can_sort_column =
                        can_sort() && column.sortable !== false;
                    <div
                        header
                        role="columnheader"
                        [id]="'column-' + column.key"
                        class="border-base-200 bg-base-300 sticky top-0 z-10 flex min-h-full"
                        [style.gridArea]="
                            gridSquare(1, 1 + i + (can_reorder() ? 1 : 0))
                        "
                        [attr.aria-sort]="
                            sorted
                                ? sort().reverse
                                    ? 'descending'
                                    : 'ascending'
                                : null
                        "
                        [class.active]="sorted"
                        [class.border-r]="i !== active_columns().length - 1"
                        [class.width]="column.size"
                    >
                        @if (can_sort_column) {
                            <button
                                type="button"
                                matRipple
                                class="flex w-full items-center justify-between p-4 text-left"
                                (click)="setSort(column.key)"
                            >
                                <span
                                    class="font-medium"
                                    [class.sr-only]="column.hide_name"
                                >
                                    {{ column.name || column.key }}
                                </span>
                                <icon class="text-[1.25em]">
                                    {{
                                        sorted && sort()?.reverse
                                            ? 'arrow_upward'
                                            : 'arrow_downward'
                                    }}
                                </icon>
                            </button>
                        } @else {
                            <span
                                class="flex items-center p-4 font-medium"
                                [class.sr-only]="column.hide_name"
                            >
                                {{ column.name || column.key }}
                            </span>
                        }
                    </div>
                }
            </div>
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
                    row of data_view();
                    track row['id'] || $index;
                    let i = $index
                ) {
                    @if (can_reorder()) {
                        <div
                            role="row"
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
                                role="cell"
                                class="border-base-200 z-0 flex min-h-full items-center justify-center border-r px-2"
                                [style.gridArea]="gridSquare(2 + i, 1)"
                                [class.border-b]="i !== data_length() - 1"
                                [style.background]="color()[i]"
                            >
                                <button
                                    icon
                                    matRipple
                                    class="h-full w-full rounded-none"
                                    [attr.aria-label]="
                                        'COMMON.MOVE_ROW' | translate
                                    "
                                    aria-keyshortcuts="ArrowUp ArrowDown"
                                    [attr.data-reorder]="i"
                                    cdkDragHandle
                                    (keydown.arrowup)="moveRow(i, -1, $event)"
                                    (keydown.arrowdown)="moveRow(i, 1, $event)"
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
                        <div role="row" class="contents">
                            <ng-container
                                *ngTemplateOutlet="
                                    row_template;
                                    context: { row: row, index: i }
                                "
                            />
                        </div>
                    }
                }
            }
            @if (!data_view().length) {
                <div role="row" class="contents">
                    <div
                        role="cell"
                        [style.gridArea]="2 + '/1/' + 2 + '/' + -1"
                        class="flex items-center justify-center p-4 opacity-30"
                    >
                        {{ empty_message() }}
                    </div>
                </div>
            }
        </div>
        <ng-template #row_template let-row="row" let-i="index">
            @for (column of active_columns(); track column; let j = $index) {
                <div
                    role="cell"
                    class="border-base-200 relative z-0 flex min-h-full items-center justify-between"
                    [style.gridArea]="
                        gridSquare(
                            virtual_enabled() ? 1 : 2 + i,
                            1 + j + (can_reorder() ? 1 : 0)
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
            [header]:hover icon,
            [header] button:focus-visible icon {
                opacity: 0.3;
            }
            [header].active icon {
                opacity: 1;
            }
        `,
    ],
    imports: [
        ScrollingModule,
        DragDropModule,
        IconComponent,
        NgTemplateOutlet,
        TranslatePipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleTableComponent<T = Record<string, unknown>> {
    public readonly data = input<TableData<T>>(undefined);
    public readonly columns = input<TableColumn[]>([]);
    public readonly sortable = input(false);
    public readonly can_reorder = input(false);
    /** Fixed row height in pixels. Zero keeps the standard table layout. */
    public readonly virtual_row_height = input(0);
    public readonly virtual_enabled = computed(
        () => this.virtual_row_height() > 0 && !this.can_reorder(),
    );
    private readonly _viewport = viewChild(CdkVirtualScrollViewport);
    public readonly trackRow = (index: number, row: T) => row['id'] ?? index;
    public readonly color = input<Record<number, string>>({});
    public readonly empty_message = input('No data to list');

    public readonly enter_row = output<number>();
    public readonly ondrop = output<[number, number]>();

    public readonly active_columns = computed(() =>
        this.columns().filter((_) => _.show !== false),
    );
    public readonly sort = signal<{ key: string; reverse: boolean } | null>(
        null,
    );

    // Internal signal to hold the actual data array
    private readonly _data = signal<T[]>([]);

    // Computed data view with sorting. Returned as is when there is no sort.
    public readonly data_view = computed(() => {
        let data = this._data();
        const current_sort = this.sort();

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
    public readonly column_count = computed(() => this.active_columns().length);

    // Computed data length
    public readonly data_length = computed(() => this._data().length);

    public template(column: TableColumn) {
        return column.content as TemplateRef<unknown>;
    }

    private readonly _el = inject<ElementRef<HTMLElement>>(ElementRef);
    private _hover_row = -1;
    /** Keyboard move waiting for the parent to update the data */
    private _pending_move: { index: number; row: string } | null = null;

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
        // After a keyboard move, focus the handle of the moved row. Skip it if
        // the move did not happen (e.g. the user cancelled it), or if the user
        // has moved focus out of the table since.
        const injector = inject(Injector);
        effect(() => {
            const rows = this.data_view();
            const move = this._pending_move;
            if (!move) return;
            this._pending_move = null;
            if (JSON.stringify(rows[move.index]) !== move.row) return;
            afterNextRender(
                () => {
                    const active = document.activeElement;
                    if (active && active !== document.body) {
                        if (!el.contains(active)) return;
                    }
                    el.querySelector<HTMLElement>(
                        `[data-reorder="${move.index}"]`,
                    )?.focus();
                },
                { injector },
            );
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

        // A new sort changes which row sits at each index, so go back to the top
        effect(() => {
            this.sort();
            untracked(() => this._viewport()?.scrollToIndex(0));
        });
    }

    // Computed column template
    public readonly column_template = computed(() => {
        let template = this.active_columns()
            .map(
                (_) =>
                    _.size ||
                    (this.virtual_enabled() ? 'minmax(0, 1fr)' : 'auto'),
            )
            .join(' ');
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

    /** Move a row up or down with the keyboard, like a drag and drop */
    public moveRow(index: number, offset: 1 | -1, event: Event) {
        event.preventDefault();
        const target = index + offset;
        if (target < 0 || target >= this.data_length()) return;
        this._pending_move = {
            index: target,
            row: JSON.stringify(this.data_view()[index]),
        };
        this.ondrop.emit([index, target]);
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
