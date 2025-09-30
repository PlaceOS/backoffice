import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {
    Component,
    OnChanges,
    SimpleChanges,
    TemplateRef,
    input,
    model,
    output,
    signal,
} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncHandler } from '../common/async-handler.class';
import { nextValueFrom } from '../common/general';
import { IconComponent } from './icon.component';

export interface TableColumn {
    key: string;
    name: string;
    sortable?: boolean;
    filterable?: boolean;
    content?: string | TemplateRef<any> | Component;
    size?: string;
    show?: boolean;
}

@Component({
    selector: 'simple-table',
    template: `
        <div
            role="table"
            class="grid overflow-visible border border-base-200"
            [style.gridTemplateColumns]="column_template"
            (click)="onclick.emit(0)"
            cdkDropList
            (cdkDropListDropped)="
                ondrop.emit([$event.previousIndex, $event.currentIndex])
            "
        >
            @if (can_reorder()) {
                <div
                    class="sticky top-0 z-10 flex min-h-full items-center justify-between border-r border-base-200 bg-base-300 px-2"
                    [style.gridArea]="gridSquare(1, 1)"
                ></div>
            }
            @if (selectable()) {
                <div
                    class="sticky top-0 z-10 flex min-h-full items-center justify-between border-r border-base-200 bg-base-300 px-2"
                    [style.gridArea]="
                        gridSquare(1, 1 + (can_reorder() ? 1 : 0))
                    "
                >
                    <mat-checkbox
                        [checked]="
                            selected().length === (data$ | async)?.length
                        "
                        [indeterminate]="
                            selected().length > 0 &&
                            selected().length < (data$ | async)?.length
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
                    class="sticky top-0 z-10 flex min-h-full items-center justify-between border-base-200 bg-base-300 p-4"
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
                        !can_sort || column.sortable === false
                    "
                    (click)="setSort(column.key)"
                    [class.active]="sort?.key === column.key"
                    [class.border-r]="i !== active_columns.length - 1"
                    [class.width]="column.size"
                >
                    <div class="font-medium">
                        {{ column.name || column.key }}
                    </div>
                    @if (can_sort && column.sortable !== false) {
                        <icon class="text-[1.25em]">
                            {{
                                sort?.key === column.key && sort?.reverse
                                    ? 'arrow_upward'
                                    : 'arrow_downward'
                            }}
                        </icon>
                    }
                </button>
            }
            @for (
                row of (data$ | async) || [];
                track row.id || $index;
                let i = $index
            ) {
                @if (can_reorder()) {
                    <div
                        class="grid"
                        cdkDrag
                        [style.gridArea]="i + 2 + '/1/' + (i + 2) + '/' + -1"
                        [style.gridTemplateColumns]="column_template"
                    >
                        <div
                            *cdkDragPlaceholder
                            class="h-16 w-full border-2 border-dashed border-base-300 bg-base-200"
                            [style.gridArea]="
                                i + 2 + '/1/' + (i + 2) + '/' + column_count
                            "
                        ></div>
                        <div
                            class="z-0 flex min-h-full items-center justify-center border-r border-base-200 px-2"
                            [style.gridArea]="gridSquare(2 + i, 1)"
                            [class.border-b]="i !== (data$ | async)?.length - 1"
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
            @if (!(data$ | async)?.length) {
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
                    class="z-0 flex min-h-full items-center justify-between border-r border-base-200 px-2"
                    [style.gridArea]="
                        gridSquare(2 + i, 1 + (can_reorder() ? 1 : 0))
                    "
                    [class.border-b]="i !== (data$ | async)?.length - 1"
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
                    class="relative z-0 flex min-h-full items-center justify-between border-base-200"
                    [style.gridArea]="
                        gridSquare(
                            2 + i,
                            1 +
                                j +
                                (selectable() ? 1 : 0) +
                                (can_reorder() ? 1 : 0)
                        )
                    "
                    [class.border-b]="i !== (data$ | async)?.length - 1"
                    [class.border-r]="j !== active_columns.length - 1"
                    [class.width]="column.size"
                    (mouseenter)="enter_row.emit(i)"
                    (touchstart)="enter_row.emit(i)"
                    [style.background]="color()[i]"
                >
                    @switch (columnType(column)) {
                        @default {
                            <div class="p-4">
                                {{ row[column.key] }}
                                @if (row[column.key] == null) {
                                    <span class="opacity-30"> N/A </span>
                                }
                            </div>
                        }
                        @case ('template') {
                            <ng-container
                                *ngTemplateOutlet="
                                    column.content;
                                    context: {
                                        first: i === 0,
                                        last:
                                            i === (data$ | async)?.length - 1 ||
                                            i === (data$ | async)?.length - 1,
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
export class SimpleTableComponent<T extends {} = any>
    extends AsyncHandler
    implements OnChanges
{
    public readonly data = input<T[] | Observable<T[]>>(undefined);
    public readonly columns = input<TableColumn[]>([]);
    public readonly selectable = input(false);
    public readonly filter = input<string>('');
    public readonly sortable = input(false);
    public readonly can_reorder = input(false);
    public readonly selected = model<number[]>([]);
    public readonly page_size = input(-1);
    public readonly color = input<Record<number, string>>({});
    public readonly empty_message = input('No data to list');
    public readonly selectedChange = output<number[]>();
    public readonly enter_row = output<number>();
    public readonly onclick = output<number>();
    public readonly oncontext = output<number>();
    public readonly ondrop = output<[number, number]>();

    public readonly page = signal(0);
    public readonly active_columns = signal<TableColumn[]>([]);

    private _data$ = new BehaviorSubject<T[]>([]);
    private _filter$ = new BehaviorSubject<string>('');
    private _sort$ = new BehaviorSubject<{ key: string; reverse: boolean }>(
        null,
    );

    public data$: Observable<T[]> = combineLatest([
        this._data$,
        this._filter$,
        this._sort$,
    ]).pipe(
        map(([data, filter, sort]) => {
            data = [...(data || [])];
            if (filter) {
                data = data.filter((_) =>
                    Object.values(_).some((i) =>
                        JSON.stringify(i)
                            .toLowerCase()
                            .includes(filter.toLowerCase()),
                    ),
                );
            }
            if (sort && data.length) {
                const type = data[0][sort.key];
                if (type === 'number') {
                    data = data.sort((a, b) => {
                        const result = a[sort.key] - b[sort.key];
                        return sort.reverse ? -result : result;
                    });
                } else {
                    data = data.sort((a, b) => {
                        const a_value = JSON.stringify(a[sort.key]);
                        const b_value = JSON.stringify(b[sort.key]);
                        const result = a_value.localeCompare(b_value);
                        return sort.reverse ? -result : result;
                    });
                }
            }
            this.selected.set([]);
            this.page.set(0);
            return data;
        }),
    );

    public get can_sort() {
        return !this.can_reorder() && this.sortable();
    }

    public get sort() {
        return this._sort$.getValue();
    }

    public get column_count() {
        return (
            this.active_columns.length +
            (this.selectable() ? 1 : 0) +
            (this.can_reorder() ? 1 : 0)
        );
    }

    public get column_template() {
        let template = this.active_columns()
            .map((_) => _.size || 'auto')
            .join(' ');
        template = this.selectable() ? `3.5rem ${template}` : template;
        template = this.can_reorder() ? `3.5rem ${template}` : template;
        return template;
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.filter) {
            this._filter$.next(this.filter());
        }
        if (changes.columns) {
            this.active_columns.set(
                this.columns().filter((_) => _.show !== false),
            );
        }
        if (changes.data) {
            const data = this.data();
            if (data instanceof Array) {
                this._data$.next(data);
            } else {
                this.subscription(
                    'data',
                    data.subscribe((_) => this._data$.next(_)),
                );
            }
        }
    }

    public columnType(column: TableColumn) {
        return column.content instanceof TemplateRef ? 'template' : 'raw';
    }

    public gridSquare(row: number, column: number) {
        return `${row} / ${column} / ${row + 1} / ${column + 1}`;
    }

    public select(index: number, state: boolean) {
        if (state) this.selected().push(index);
        else this.selected.set(this.selected().filter((i) => i !== index));
    }

    public async selectAll(state: boolean) {
        const list = await nextValueFrom(this.data$);
        if (state) this.selected.set(list.map((_, i) => i));
        else this.selected.set([]);
    }

    public setSort(key: string) {
        const sort = this._sort$.getValue();
        if (!sort || sort.key !== key) {
            this._sort$.next({ key, reverse: false });
        } else if (!sort.reverse) {
            this._sort$.next({ key, reverse: true });
        } else {
            this._sort$.next(null);
        }
    }
}
