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
import {
    SimpleTableComponent,
    TableColumn,
} from '../../ui/simple-table.component';
import { TranslatePipe } from '../../ui/translate.pipe';

@Component({
    selector: 'bulk-item-list',
    template: `
        <div
            class="flex max-h-[65vh] max-w-[80vw] flex-wrap overflow-auto px-4 text-sm"
        >
            <simple-table
                [style.min-width]="
                    12.5 * (fields().length + (show_start_modules() ? 1 : 0)) +
                    'rem'
                "
                [data]="list()"
                [columns]="columns()"
            ></simple-table>
        </div>
        @if (show_start_modules()) {
            <label class="mx-4 mt-4 flex items-center space-x-2 text-sm">
                <input
                    type="checkbox"
                    [ngModel]="all_start_modules"
                    (ngModelChange)="setAllStartModules($event)"
                />
                <span>Start all modules for all systems</span>
            </label>
        }
        <div class="flex items-center justify-end space-x-4 p-4">
            <button
                btn
                matRipple
                class="inverse w-36"
                (click)="previous.emit()"
            >
                {{ 'COMMON.BACK' | translate }}
            </button>
            <button btn matRipple class="w-36" (click)="next.emit()">
                {{ 'COMMON.SAVE_ITEMS' | translate }}
            </button>
        </div>
        <ng-template #input let-row="row" let-name="name" let-id="key">
            <input class="p-4" [placeholder]="name" [(ngModel)]="row[id]" />
        </ng-template>
        <ng-template #start let-row="row">
            <label
                class="flex w-full items-center justify-center p-4"
                (click)="$event.stopPropagation()"
            >
                <input type="checkbox" [(ngModel)]="row['start_modules']" />
            </label>
        </ng-template>
    `,
    styles: [``],
    imports: [
        FormsModule,
        MatRippleModule,
        SimpleTableComponent,
        TranslatePipe,
    ],
})
export class ListComponent {
    /** List of bulk items to add */
    public readonly list = model<HashMap<unknown>[]>([]);
    /** List of fields available for building new item */
    public readonly fields = input<Identity[]>([]);
    /** Whether to show system bulk add options */
    public readonly show_start_modules = input(false);
    /** Emitter user want to return to next step in flow */
    public readonly next = output<void>();
    /** Emitter user want to return to previous step in flow */
    public readonly previous = output<void>();
    private readonly _input_tmpl = viewChild<TemplateRef<unknown>>('input');
    private readonly _start_tmpl = viewChild<TemplateRef<unknown>>('start');

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
}
