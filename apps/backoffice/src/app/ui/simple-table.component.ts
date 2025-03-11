import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
    TemplateRef,
} from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncHandler } from '../common/async-handler.class';
import { nextValueFrom } from '../common/general';

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
            (click)="active_row >= 0 ? onclick.emit(active_row) : null"
            (touchend)="active_row = -1"
            (mouseleave)="active_row = -1"
            cdkDropList
            (cdkDropListDropped)="
                ondrop.emit([$event.previousIndex, $event.currentIndex])
            "
        >
            <div
                *ngIf="can_reorder"
                class="sticky top-0 z-10 flex min-h-full items-center justify-between border-r border-base-200 bg-base-300 px-2"
                [style.gridArea]="gridSquare(1, 1)"
            ></div>
            <div
                *ngIf="selectable"
                class="sticky top-0 z-10 flex min-h-full items-center justify-between border-r border-base-200 bg-base-300 px-2"
                [style.gridArea]="gridSquare(1, 1 + (can_reorder ? 1 : 0))"
            >
                <mat-checkbox
                    [checked]="selected.length === (data$ | async)?.length"
                    [indeterminate]="
                        selected.length > 0 &&
                        selected.length < (data$ | async)?.length
                    "
                    (change)="selectAll($event.checked)"
                ></mat-checkbox>
            </div>
            <button
                header
                matRipple
                *ngFor="let column of active_columns; let i = index"
                [id]="'column-' + column.key"
                class="sticky top-0 z-10 flex min-h-full items-center justify-between border-base-200 bg-base-300 p-4"
                [style.gridArea]="
                    gridSquare(
                        1,
                        1 + i + (selectable ? 1 : 0) + (can_reorder ? 1 : 0)
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
                <div class="font-medium">{{ column.name || column.key }}</div>
                <app-icon
                    class="text-[1.25em]"
                    *ngIf="can_sort && column.sortable !== false"
                >
                    {{
                        sort?.key === column.key && sort?.reverse
                            ? 'arrow_upward'
                            : 'arrow_downward'
                    }}
                </app-icon>
            </button>
            <ng-container
                *ngFor="let row of (data$ | async) || []; let i = index"
            >
                @if (can_reorder) {
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
                            [style.background]="color[i]"
                        >
                            <button
                                icon
                                matRipple
                                class="h-full w-full rounded-none"
                                cdkDragHandle
                            >
                                <app-icon class="text-2xl"
                                    >unfold_more</app-icon
                                >
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
            </ng-container>
            <div
                *ngIf="!(data$ | async)?.length"
                [style.gridArea]="2 + '/1/' + 2 + '/' + -1"
                class="flex items-center justify-center p-4 opacity-30"
            >
                {{ empty_message }}
            </div>
            <!-- TODO: Add pagination -->
        </div>
        <ng-template #row_template let-row="row" let-i="index">
            <div
                *ngIf="selectable"
                class="z-0 flex min-h-full items-center justify-between border-r border-base-200 px-2"
                [style.gridArea]="gridSquare(2 + i, 1 + (can_reorder ? 1 : 0))"
                [class.border-b]="i !== (data$ | async)?.length - 1"
                [style.background]="color[i]"
                (mouseenter)="active_row = i"
                (touchstart)="active_row = i"
            >
                <mat-checkbox
                    [checked]="selected.includes(i)"
                    (change)="select(i, $event.checked)"
                ></mat-checkbox>
            </div>
            <div
                *ngFor="let column of active_columns; let j = index"
                class="relative z-0 flex min-h-full items-center justify-between border-base-200"
                [style.gridArea]="
                    gridSquare(
                        2 + i,
                        1 + j + (selectable ? 1 : 0) + (can_reorder ? 1 : 0)
                    )
                "
                [class.border-b]="i !== (data$ | async)?.length - 1"
                [class.border-r]="j !== active_columns.length - 1"
                [class.width]="column.size"
                (mouseenter)="active_row = i"
                (touchstart)="active_row = i"
                [style.background]="color[i]"
            >
                <ng-container [ngSwitch]="columnType(column)">
                    <div class="p-4" *ngSwitchDefault>
                        {{ row[column.key] }}
                        <span
                            *ngIf="row[column.key] == null"
                            class="opacity-30"
                        >
                            N/A
                        </span>
                    </div>
                    <ng-container *ngSwitchCase="'template'">
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
                    </ng-container>
                </ng-container>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host,
            :host > button {
                min-width: 100%;
                overflow: hidden;
            }

            [header] app-icon {
                opacity: 0;
            }
            [header]:hover app-icon {
                opacity: 0.3;
            }
            [header]:hover.pointer-events-none app-icon {
                opacity: 0;
            }
            [header].active app-icon {
                opacity: 1;
            }
        `,
    ],
    standalone: false,
})
export class SimpleTableComponent<T extends {} = any> extends AsyncHandler {
    @Input() public data: T[] | Observable<T[]>;
    @Input() public columns: TableColumn[] = [];
    @Input() public selectable = false;
    @Input() public filter: string = '';
    @Input() public sortable = false;
    @Input() public can_reorder = false;
    @Input() public selected: number[] = [];
    @Input() public page_size = -1;
    @Input() public color: Record<number, string> = {};
    @Input() public empty_message = 'No data to list';
    @Output() public selectedChange = new EventEmitter<number[]>();
    @Output() public onclick = new EventEmitter<number>();
    @Output() public oncontext = new EventEmitter<number>();
    @Output() public ondrop = new EventEmitter<[number, number]>();

    public page = 0;
    public active_row = -1;
    public active_columns = [];

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
            this.selected = [];
            this.page = 0;
            return data;
        }),
    );

    public get can_sort() {
        return !this.can_reorder && this.sortable;
    }

    public get sort() {
        return this._sort$.getValue();
    }

    public get column_count() {
        return (
            this.active_columns.length +
            (this.selectable ? 1 : 0) +
            (this.can_reorder ? 1 : 0)
        );
    }

    public get column_template() {
        let template = this.active_columns
            .map((_) => _.size || 'auto')
            .join(' ');
        template = this.selectable ? `3.5rem ${template}` : template;
        template = this.can_reorder ? `3.5rem ${template}` : template;
        return template;
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.filter) {
            this._filter$.next(this.filter);
        }
        if (changes.columns) {
            this.active_columns = this.columns.filter((_) => _.show !== false);
        }
        if (changes.data) {
            if (this.data instanceof Array) {
                this._data$.next(this.data);
            } else {
                this.subscription(
                    'data',
                    this.data.subscribe((_) => this._data$.next(_)),
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
        if (state) this.selected.push(index);
        else this.selected = this.selected.filter((i) => i !== index);
    }

    public async selectAll(state: boolean) {
        const list = await nextValueFrom(this.data$);
        if (state) this.selected = list.map((_, i) => i);
        else this.selected = [];
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
