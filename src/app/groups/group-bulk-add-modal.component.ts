import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, computed, inject, resource, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogCloseDirective } from '../ui/controls/dialog';
import { FormFieldComponent } from '../ui/controls/form-field.component';
import { SpinnerComponent } from '../ui/controls/spinner.component';
import { TabsComponent } from '../ui/controls/tabs.component';
import { DialogTitleDirective } from '../ui/dialog-title.directive';
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
    /** Initial permissions for the added items */
    permissions?: number;
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
            <h2
                appDialogTitle
                class="truncate px-2 text-lg font-medium sm:text-xl"
            >
                {{ title | translate }}
            </h2>
            <button
                icon
                ripple
                appDialogClose
                [attr.aria-label]="'COMMON.CLOSE' | translate"
            >
                <icon>close</icon>
            </button>
        </header>
        @if (show_permissions) {
            <app-tabs
                class="border-base-200 shrink-0 border-b"
                [labels]="[
                    'GROUPS.TAB_USERS' | translate,
                    'GROUPS.FIELD_PERMISSIONS' | translate,
                ]"
                [(selectedIndex)]="tab"
            />
        }
        <main
            class="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4 py-2"
        >
            @if (!show_permissions || tab() === 0) {
                <app-form-field class="no-subscript">
                    <input
                        name="group-bulk-add-search"
                        [placeholder]="placeholder | translate"
                        [ngModel]="search()"
                        (ngModelChange)="search.set($event)"
                    />
                    <div class="prefix" prefix>
                        <icon class="relative -left-0.5 text-2xl">search</icon>
                    </div>
                    @if (loading()) {
                        <div class="suffix" suffix>
                            <app-spinner diameter="16" />
                        </div>
                    }
                </app-form-field>
                <section
                    class="border-base-200 min-h-0 flex-1 overflow-auto rounded border sm:h-[45vh] sm:flex-none"
                >
                    @if (list_items().length) {
                        @for (item of list_items(); track item.id) {
                            <button
                                ripple
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
                ripple
                class="inverse bg-base-100 flex-1"
                appDialogClose
            >
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                ripple
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
        DialogCloseDirective,
        SpinnerComponent,
        FormFieldComponent,
        DialogTitleDirective,
        FormsModule,
        IconComponent,
        TabsComponent,
        SettingsToggleComponent,
        TranslatePipe,
    ],
})
export class GroupBulkAddModalComponent<T extends GroupBulkAddItem> {
    private _dialog_ref =
        inject<DialogRef<GroupBulkAddResult<T>, GroupBulkAddModalComponent<T>>>(
            DialogRef,
        );
    private _data = inject<GroupBulkAddModalData<T>>(DIALOG_DATA);

    public readonly selected = signal<T[]>([]);
    public readonly search = signal('');
    public readonly loading = signal(false);
    public readonly permissions = signal(this._data.permissions ?? 0);
    public readonly tab = signal(0);
    public readonly title = this._data.title;
    public readonly placeholder = this._data.placeholder;
    public readonly empty_message = this._data.empty_message;
    public readonly query_fn = this._data.query_fn;
    public readonly show_permissions = !!this._data.show_permissions;
    public readonly permission_flags = GROUP_PERMISSION_FLAGS;
    public readonly hasPermission = hasGroupPermission;
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
