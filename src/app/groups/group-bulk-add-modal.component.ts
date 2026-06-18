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
import { MatTabsModule } from '@angular/material/tabs';
import { IconComponent } from '../ui/icon.component';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';
import {
    GROUP_PERMISSION_FLAGS,
    hasGroupPermission,
    setGroupPermission,
} from './group-permissions';

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
    show_permissions?: boolean;
}

export interface GroupBulkAddResult<T extends GroupBulkAddItem> {
    items: T[];
    permissions: number;
}

@Component({
    selector: 'group-bulk-add-modal',
    template: `
        <header
            class="bg-base-200 m-2 flex h-14 shrink-0 items-center justify-between gap-2 rounded-sm border-none p-2"
        >
            <h2 class="truncate px-2 text-lg font-medium sm:text-xl">
                {{ title | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        @if (show_permissions) {
            <mat-tab-group
                class="border-base-200 shrink-0 border-b"
                [selectedIndex]="tab()"
                (selectedIndexChange)="tab.set($event)"
            >
                <mat-tab [label]="'GROUPS.TAB_USERS' | translate" />
                <mat-tab [label]="'GROUPS.FIELD_PERMISSIONS' | translate" />
            </mat-tab-group>
        }
        <main class="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4 py-2">
            @if (!show_permissions || tab() === 0) {
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
                            <mat-spinner diameter="16" />
                        </div>
                    }
                </mat-form-field>
                <section
                    class="border-base-200 min-h-0 flex-1 overflow-auto rounded border sm:h-[45vh] sm:flex-none"
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
                                    [class.text-info-content]="
                                        isSelected(item.id)
                                    "
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
                            class="flex h-full min-h-40 items-center justify-center p-6 text-sm opacity-40"
                        >
                            {{ empty_message | translate }}
                        </div>
                    }
                </section>
            }
            @if (show_permissions && tab() === 1) {
                <div class="flex flex-col gap-2">
                    <div class="text-xs font-medium uppercase opacity-50">
                        {{ 'GROUPS.USERS_BULK_PERMISSIONS' | translate }}
                    </div>
                    <section
                        class="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2"
                    >
                        @for (
                            permission of permission_flags;
                            track permission.key
                        ) {
                            <settings-toggle
                                [ngModel]="
                                    hasPermission(
                                        permissions(),
                                        permission.value
                                    )
                                "
                                (ngModelChange)="
                                    setPermission(permission.value, $event)
                                "
                            >
                                {{ permission.label | translate }}
                            </settings-toggle>
                        }
                    </section>
                </div>
            }
        </main>
        <footer
            class="bg-base-200 m-2 flex shrink-0 items-center justify-center gap-2 rounded-sm border-none p-2"
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
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                width: 32rem;
                max-width: calc(100vw - 1rem);
                max-height: calc(100vh - 2em);
                overflow: hidden;
            }

            @media (max-width: 640px) {
                :host {
                    width: 100%;
                    height: 100%;
                    max-width: 100%;
                    max-height: 100%;
                }
            }
        `,
    ],
    imports: [
        FormsModule,
        IconComponent,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatTabsModule,
        SettingsToggleComponent,
        TranslatePipe,
    ],
})
export class GroupBulkAddModalComponent<T extends GroupBulkAddItem> {
    private _dialog_ref =
        inject<MatDialogRef<GroupBulkAddModalComponent<T>, GroupBulkAddResult<T>>>(
            MatDialogRef,
        );
    private _data = inject<GroupBulkAddModalData<T>>(MAT_DIALOG_DATA);

    public readonly selected = signal<T[]>([]);
    public readonly search = signal('');
    public readonly loading = signal(false);
    public readonly permissions = signal(0);
    public readonly tab = signal(0);
    public readonly title = this._data.title;
    public readonly placeholder = this._data.placeholder;
    public readonly empty_message = this._data.empty_message;
    public readonly query_fn = this._data.query_fn;
    public readonly show_permissions = !!this._data.show_permissions;
    public readonly permission_flags = GROUP_PERMISSION_FLAGS;
    public readonly hasPermission = hasGroupPermission;
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

    public setPermission(permission: number, enabled: boolean) {
        this.permissions.set(
            setGroupPermission(this.permissions(), permission, enabled),
        );
    }

    public save() {
        this._dialog_ref.close({
            items: this.selected(),
            permissions: this.permissions(),
        });
    }
}
