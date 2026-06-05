import { Component, computed, inject, resource, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IconComponent } from '../ui/icon.component';
import { TranslatePipe } from '../ui/translate.pipe';

export interface GroupBulkAddItem {
    id: string;
    name: string;
    email?: string;
    description?: string;
    notes?: string;
}

export interface GroupBulkAddModalData<T extends GroupBulkAddItem> {
    title: string;
    placeholder: string;
    empty_message: string;
    query_fn: (query: string) => Promise<T[]>;
    exclude?: (item: T, search: string) => boolean;
}

@Component({
    selector: 'group-bulk-add-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-[calc(100%-1rem)] min-w-[24rem] items-center justify-between rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">{{ title | translate }}</h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="flex w-xl max-w-[85vw] flex-col gap-4 p-4">
            <mat-form-field appearance="outline" class="no-subscript">
                <input
                    matInput
                    name="group-bulk-add-search"
                    [placeholder]="placeholder | translate"
                    [ngModel]="search()"
                    (ngModelChange)="search.set($event)"
                />
                <div class="prefix" matPrefix>
                    <icon class="relative -left-0.5 text-2xl">search</icon>
                </div>
                @if (loading()) {
                    <div class="suffix" matSuffix>
                        <mat-spinner diameter="16"></mat-spinner>
                    </div>
                }
            </mat-form-field>
            <section
                class="border-base-200 max-h-[45vh] overflow-auto rounded border"
            >
                @if (list_items().length) {
                    @for (item of list_items(); track item.id) {
                        <button
                            matRipple
                            class="border-base-200 hover:bg-base-200 flex w-full items-center gap-3 border-b px-3 py-2 text-left last:border-b-0"
                            [class.bg-base-200]="isSelected(item.id)"
                            (click)="toggleItem(item)"
                        >
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded border"
                                [class.bg-info]="isSelected(item.id)"
                                [class.border-info]="isSelected(item.id)"
                                [class.text-info-content]="isSelected(item.id)"
                            >
                                @if (isSelected(item.id)) {
                                    <icon class="text-lg">done</icon>
                                }
                            </div>
                            <div class="min-w-0 flex-1">
                                <div class="truncate text-sm">
                                    {{ item.name || item.id }}
                                </div>
                                <div class="truncate text-xs opacity-50">
                                    {{
                                        item.email ||
                                            item.description ||
                                            item.id
                                    }}
                                </div>
                            </div>
                        </button>
                    }
                } @else {
                    <div
                        class="flex min-h-40 items-center justify-center p-6 text-sm opacity-40"
                    >
                        {{ empty_message | translate }}
                    </div>
                }
            </section>
        </main>
        <footer
            class="bg-base-200 sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
        >
            <button
                btn
                matRipple
                class="inverse bg-base-100 flex-1"
                mat-dialog-close
            >
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                matRipple
                class="flex-1"
                [disabled]="!selected().length"
                (click)="save()"
            >
                <icon class="mr-2">playlist_add</icon>
                {{
                    'GROUPS.BULK_ADD_SELECTED'
                        | translate: { count: selected().length }
                }}
            </button>
        </footer>
    `,
    styles: [``],
    imports: [
        FormsModule,
        IconComponent,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        TranslatePipe,
    ],
})
export class GroupBulkAddModalComponent<T extends GroupBulkAddItem> {
    private _dialog_ref =
        inject<MatDialogRef<GroupBulkAddModalComponent<T>, T[]>>(MatDialogRef);
    private _data = inject<GroupBulkAddModalData<T>>(MAT_DIALOG_DATA);

    public readonly selected = signal<T[]>([]);
    public readonly search = signal('');
    public readonly loading = signal(false);
    public readonly title = this._data.title;
    public readonly placeholder = this._data.placeholder;
    public readonly empty_message = this._data.empty_message;
    public readonly query_fn = this._data.query_fn;
    public readonly selected_count = computed(() => this.selected().length);
    private readonly _items = resource({
        params: () => this.search().trim(),
        loader: async ({ params }) => {
            this.loading.set(true);
            try {
                const items = await this.query_fn(params).catch(() => []);
                const search = params.toLowerCase();
                return items.filter((item) => !this.exclude_fn(item, search));
            } finally {
                this.loading.set(false);
            }
        },
    });
    public readonly items = computed(() => this._items.value() || []);
    public readonly list_items = computed(() => {
        const selected = this.selected();
        const selected_ids = new Set(selected.map((_) => _.id));
        return [
            ...selected,
            ...this.items().filter((_) => !selected_ids.has(_.id)),
        ];
    });

    public readonly exclude_fn = (item: T, search: string) =>
        !!this._data.exclude?.(item, search);

    public isSelected(id: string) {
        return !!this.selected().find((_) => _.id === id);
    }

    public toggleItem(item: T) {
        if (!item?.id) return;
        if (this.isSelected(item.id)) {
            this.selected.set(this.selected().filter((_) => _.id !== item.id));
        } else {
            this.selected.set([...this.selected(), item]);
        }
    }

    public save() {
        this._dialog_ref.close(this.selected());
    }
}
