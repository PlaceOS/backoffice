import { Service, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { PlaceResource } from '@placeos/ts-client';

import {
    PlaceSettings,
    QueryResponse,
    querySettings,
} from '@placeos/ts-client';
import { HotkeysService } from '../common/hotkeys.service';
import { SettingsService } from '../common/settings.service';
import {
    DialogEvent,
    FormModalComponent,
    HashMap,
    Identity,
} from '../common/types';
import { BulkItemModalComponent } from '../overlays/bulk-item-modal/bulk-item-modal.component';
import {
    CONFIRM_METADATA,
    ConfirmModalComponent,
    ConfirmModalData,
} from '../overlays/confirm-modal.component';
import { DuplicateModalComponent } from '../overlays/duplicate-modal.component';
import { BackofficeUsersService } from '../users/users.service';
import { ACTIONS, ItemActions } from './actions';
import { AsyncHandler } from './async-handler.class';
import { CascadePlan, runCascade } from './cascade-delete';
import { log } from './general';
import { i18n } from './locale.service';
import { notifyError, notifySuccess } from './notifications';
import { waitForEvent } from './signals';

/** Id the "also delete associated resources" toggle is reported under */
const CASCADE_OPTION = 'cascade';

export type ResourceType =
    | 'domains'
    | 'drivers'
    | 'groups'
    | 'modules'
    | 'repositories'
    | 'systems'
    | 'triggers'
    | 'users'
    | 'zones'
    | 'admin';

@Service()
export class ActiveItemService extends AsyncHandler {
    private _router = inject(Router);
    private _settings = inject(SettingsService);
    private _hotkey = inject(HotkeysService);
    private _dialog = inject(MatDialog);
    private _user = inject(BackofficeUsersService);

    /** Whether active item is loading */
    private _loading = signal(false);
    /** Whether item list should show on mobile */
    private _show_options = signal(false);
    /** Whether item list should show on mobile */
    private _search = signal('');
    /** Currently active item */
    private _active_item = signal<PlaceResource>(null);
    /** Currently active item */
    private _next_query = signal<() => QueryResponse<unknown>>(null);
    /** List of items for the current type */
    private _list = signal<unknown[]>([]);
    /** Whether item list is loading */
    private _loading_list = signal(false);
    /** Whether active item is loading */
    private _name = signal<string>(null);
    /** Type of the active item */
    private _type: ResourceType;
    /** Number of items */
    private _count = signal(0);

    public readonly count = this._count.asReadonly();

    public get total() {
        return this._count();
    }
    /** Signal for item loading state */
    public readonly loading = this._loading.asReadonly();
    /** Signal for item list loading state */
    public readonly loading_list = this._loading_list.asReadonly();
    /** Signal for list of items */
    public readonly list = this._list.asReadonly();
    /** Signal for active item */
    public readonly active_item$ = this._active_item.asReadonly();
    /** Signal for active item */
    public readonly item = this._active_item.asReadonly();
    /** Signal for list of items */
    public readonly list_items = () => this._list();
    /** Signal for whether the item list should show on mobile */
    public readonly show_options = this._show_options.asReadonly();

    /** Available API actions for the active type */
    public get actions(): ItemActions<unknown> {
        return ACTIONS[this._type];
    }

    public get active_item() {
        return this._active_item();
    }

    public get type() {
        return this._type;
    }

    public moreItems() {
        this.updateList();
    }

    public setSearch(str: string) {
        this._search.set(str);
        this._loading_list.set(true);
        this._next_query.set(null);
        this._list.set([]);
        this.updateList();
    }

    constructor() {
        super();
        this._router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.updateType();
            }
        });
        this._hotkey.listen(['KeyN'], () => this.create());
        this._hotkey.listen(['KeyE'], () => this.edit());
        setTimeout(() => this.updateType(), 300);
    }

    /** Update the active item */
    public async setItem(id: string) {
        if (
            (!this.active_item || this.active_item.id !== id) &&
            id.length > 2
        ) {
            const url = this._router.url.split('/');
            this._type = url[1] as ResourceType;
            if (!this.type)
                return this.timeout('setItem', () => this.setItem(id));
            this._loading.set(true);
            this._active_item.set(null);
            const item = await this.actions
                .show(id)
                .catch(() => notifyError(`Error loading ${id}`));
            this._active_item.set(item as PlaceResource);
            const name = this._type[0].toUpperCase() + this._type.slice(1);
            this._name.set(name);
            this._settings.title = name;
            this._show_options.set(false);
            this.updateSettings();
            this._loading.set(false);
        }
    }

    public toggleOptions() {
        this._show_options.set(!this._show_options());
    }

    public create(item?: PlaceResource, copy = false) {
        if (!this._user.current().sys_admin) return;
        item = item || this._active_item();
        const actions =
            Object.values(ACTIONS).find(
                (v) => item instanceof v.itemConstructor,
            ) || this.actions;
        return this.edit(
            copy
                ? (new actions.itemConstructor({
                      ...item,
                      id: '',
                      name: `${item.name} (1)`,
                  }) as PlaceResource)
                : (new actions.itemConstructor() as PlaceResource),
        );
    }

    public bulkAdd() {
        if (!this._user.current().sys_admin) return;
        const actions = this.actions;
        this._settings.post('disable_uploads', true);
        const ref = this._dialog.open(BulkItemModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: '100vh',
            maxWidth: '100vw',
            data: {
                constr: actions.itemConstructor,
                name: this.type,
                save: actions.save,
            },
        });
        ref.afterClosed().subscribe(() =>
            this._settings.post('disable_uploads', false),
        );
    }

    public async edit<T extends PlaceResource = PlaceResource>(
        item?: T,
        options: HashMap = {},
    ) {
        if (!this._user.current().sys_admin) return;
        item = item || (this._active_item() as T);
        if (item) {
            const actions =
                Object.values(ACTIONS).find(
                    (v) => item instanceof v.itemConstructor,
                ) || this.actions;
            // The active item was already fully loaded by `setItem`; only
            // reload items passed in from lists (partial `fields` queries)
            if (item.id && item !== this._active_item()) {
                item = (await actions.show(item.id)) as T;
            }
            return new Promise<T>((resolve) => {
                const ref = this._dialog.open(actions.modalComponent, {
                    data: {
                        item: new actions.itemConstructor({ ...item }),
                        ...options,
                    },
                });
                waitForEvent(
                    (ref.componentInstance as unknown as FormModalComponent)
                        .event,
                    (e: DialogEvent) => e.reason === 'done',
                ).then((event: DialogEvent<{ item: T }>) => {
                    resolve(event.metadata.item);
                    this.replaceItem(
                        event.metadata.item as unknown as Identity,
                    );
                    if (
                        event.metadata.item instanceof
                        this.actions.itemConstructor
                    ) {
                        this._router.navigate([
                            `/${this._type}`,
                            (event.metadata.item as unknown as Identity).id,
                            'about',
                        ]);
                    }
                });
            });
        }
    }

    public async delete() {
        if (!this._user.current().sys_admin) return;
        const item = this._active_item();
        if (!item) return;
        const actions = this.actions;
        const cascade = actions.cascade;
        // Resolved lazily, only if the user enables the option — a cascade
        // plan walks the whole zone subtree, which is not free.
        let plan: CascadePlan | null = null;
        const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                ...CONFIRM_METADATA,
                data: {
                    title: i18n(`${actions.name}.DELETE`),
                    content: i18n(`${actions.name}.DELETE_MSG`, {
                        name:
                            (item as PlaceResource & { display_name?: string })
                                .display_name || item.name,
                    }),
                    extra: actions.delete_extra
                        ? await actions.delete_extra(item)
                        : null,
                    options: cascade
                        ? [
                              {
                                  id: CASCADE_OPTION,
                                  label: i18n(cascade.label),
                                  description: i18n(cascade.description),
                                  details: async () => {
                                      plan = await cascade.plan(item);
                                      const { scope, summary, warnings } =
                                          plan;
                                      return { scope, summary, warnings };
                                  },
                              },
                          ]
                        : undefined,
                    icon: { type: 'icon', content: 'delete' },
                },
            },
        );
        waitForEvent(
            ref.componentInstance.event,
            (e: DialogEvent) => e.reason === 'done',
        ).then(async (event: DialogEvent<{ options?: HashMap<boolean> }>) => {
            ref.componentInstance.loading.set(
                i18n(`${actions.name}.DELETE_LOADING`),
            );
            if (event.metadata?.options?.[CASCADE_OPTION] && plan) {
                const outcome = await runCascade(plan, (message) =>
                    ref.componentInstance.loading.set(message),
                );
                if (outcome.failures.length) {
                    ref.componentInstance.loading.set('');
                    return notifyError(
                        i18n(
                            'CASCADE.FAILED',
                            {
                                count: outcome.failures.length,
                                error:
                                    (outcome.failures[0].error as Error)
                                        ?.message || outcome.failures[0].label,
                            },
                            outcome.failures.length,
                        ),
                    );
                }
                if (outcome.removed) {
                    notifySuccess(
                        i18n(
                            'CASCADE.SUCCESS',
                            { count: outcome.removed },
                            outcome.removed,
                        ),
                    );
                }
                ref.componentInstance.loading.set(
                    i18n(`${actions.name}.DELETE_LOADING`),
                );
            }
            await actions
                .remove(item)
                .then(() => {
                    notifySuccess(
                        i18n(`${actions.name}.DELETE_SUCCESS`, {
                            name: item.name,
                        }),
                    );
                    this._active_item.set(null);
                    this.removeItem(item);
                    this._router.navigate([`/${this._type}`, '-', 'about']);
                    ref.close();
                })
                .catch((err) => {
                    ref.componentInstance.loading.set('');
                    notifyError(
                        i18n(`${actions.name}.DELETE_ERROR`, {
                            error: JSON.stringify(
                                err.response || err.message || err,
                            ),
                        }),
                    );
                });
        });
    }

    public duplicate() {
        if (!this._user.current().sys_admin) return;
        const item = this._active_item();
        if (item) {
            const ref = this._dialog.open(DuplicateModalComponent, {
                data: {
                    item: item as PlaceResource,
                    save: this.actions.save,
                },
            });
            ref.componentInstance.event.subscribe((e: DialogEvent) => {
                if (e.reason === 'done') {
                    this._active_item.set(e.metadata[0] as PlaceResource);
                    this.replaceItem(e.metadata[0] as unknown as Identity);
                }
            });
        }
    }

    public replaceItem(item: Identity | PlaceResource) {
        if (
            item?.id &&
            (!this.active_item || this.active_item.id === item.id)
        ) {
            this._active_item.set(item as PlaceResource);
            const list = this._list().filter(
                (i) => (i as Identity).id !== item.id,
            );
            list.push(item);
            list.sort((a, b) =>
                (a as Identity).name?.localeCompare((b as Identity).name),
            );
            this.updateSettings();
            this._list.set(list);
        }
    }

    public removeItem(item: unknown) {
        if ((item as Identity).id) {
            const list = this._list().filter(
                (i) => (i as Identity).id !== (item as Identity).id,
            );
            list.sort((a, b) =>
                (a as Identity).name?.localeCompare((b as Identity).name),
            );
            this._count.set(this._count() - 1);
            this._list.set(list);
        }
    }

    private async updateType() {
        const url = this._router.url.split('/');
        const old_type = this._type;
        this._type = url[1] as ResourceType;
        if (old_type !== this._type) {
            log('Service', `Item type set to ${this._type}`);
            this._next_query.set(null);
            this._active_item.set(null);
            this._search.set('');
            const name = this._type[0]?.toUpperCase() + this._type.slice(1);
            this._name.set(name);
            this._settings.title = name;
            this._show_options.set(true);
            this.updateList();
        }
        if (this._type !== 'admin' && url[2]) {
            await this.setItem(url[2]);
        }
        if (this._type === 'admin') {
            this._active_item.set({ name: 'PlaceOS Admin' } as PlaceResource);
        }
    }

    private updateList() {
        const type = this._type;
        const search = this._search();
        this.timeout(
            'update',
            async () => {
                if (!this.actions) return;
                this._loading_list.set(true);
                let next = this._next_query();
                if (!next) {
                    next = () => this.actions.query(this._search());
                    this._list.set([]);
                }
                const resp = await next().catch((err) => {
                    log('Service', `Error loading ${type} list.`, [err], 'warn');
                    return null;
                });
                if (!resp) {
                    if (type === this._type) {
                        this._next_query.set(null);
                        this._loading_list.set(false);
                        notifyError(`Error loading ${type} list.`);
                    }
                    return;
                }
                if (type === this._type) {
                    this._next_query.set(
                        resp.next ||
                            (() =>
                                Promise.resolve({
                                    data: [],
                                    total: resp.total,
                                    next: null,
                                })),
                    );
                    this._count.set(resp.total);
                    const list = this._list().filter(
                        (i) =>
                            !resp.data.find(
                                (item) =>
                                    (item as Identity).id ===
                                    (i as Identity).id,
                            ),
                    );
                    const new_list = list.concat(resp.data);
                    new_list.sort((a, b) =>
                        (a as Identity).name?.localeCompare(
                            (b as Identity).name,
                        ),
                    );
                    this._list.set(new_list);
                    this._loading_list.set(false);
                }
            },
            search ? 300 : 10,
        );
    }

    private async updateSettings() {
        const item = this.active_item;
        if (item && (item as PlaceResource & { settings?: unknown }).settings) {
            let settings = (await querySettings({ parent_id: item.id })).data;
            // Remove duplicate encryption_level
            settings = new Array(5).fill(0).map(
                (_, idx) =>
                    settings.find((_) => _.encryption_level === idx) ||
                    new PlaceSettings({
                        encryption_level: idx,
                    }),
            );

            settings.sort((a, b) => a.encryption_level - b.encryption_level);
            if (this.actions?.itemConstructor) {
                this._active_item.set(
                    new this.actions.itemConstructor({
                        ...item,
                        settings,
                    }) as PlaceResource,
                );
            }
        }
    }
}
