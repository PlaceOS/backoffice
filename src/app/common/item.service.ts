import { Service, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
    type Domain,
    Settings,
    settings as settings_v7,
    users,
} from '@placeos/ts-client';
import { orThrow, orThrowPage } from '@placeos/ts-client/compat';
import { HotkeysService } from '../common/hotkeys.service';
import { SettingsService } from '../common/settings.service';
import {
    DialogEvent,
    FormModalComponent,
    HashMap,
    Identity,
    PlaceResource,
    QueryResponse,
    staticPage,
} from '../common/types';
// Modals load on demand to keep them out of the first page load
import { Dialog } from '@angular/cdk/dialog';
import { AdminDataService } from '../admin/admin-data.service';
import type {
    ConfirmModalComponent,
    ConfirmModalData,
} from '../overlays/confirm-modal.component';
import { BackofficeUsersService } from '../users/users.service';
import { ACTIONS, ItemActions, ItemTypes } from './actions';
import { AsyncHandler } from './async-handler.class';
import {
    CascadeOutcome,
    CascadePlan,
    CascadeResource,
    runCascade,
} from './cascade-delete';
import { describeError } from './errors';
import { escapeHtml, log } from './general';
import { i18n } from './locale.service';
import { notifyError, notifySuccess } from './notifications';
import { newItem, settingsLevels, withEmptyLists } from './placeos';
import { waitForEvent, waitForSignalValue } from './signals';
import {
    canAccessSection,
    canUseSupportAction,
    hasSupportRole,
    hasSupportSubsystem,
    isSubsystemUser,
    selectSupportGroup,
    selected_support_group_id,
} from './support-access';

/** Id the "also delete associated resources" toggle is reported under */
const CASCADE_OPTION = 'cascade';

/** Turns removed resources into the receipt rows the confirm modal renders. */
const receiptItems = (resources: CascadeResource[]) =>
    resources.map((resource) => ({
        type: i18n(`CASCADE.TYPE_${resource.type.toUpperCase()}`),
        id: resource.id,
        name: resource.name,
    }));

/** Types a copy would lose data for. Trigger actions and conditions are getters that a copy drops. */
const NO_COPY_TYPES = ['triggers'];
/** Types with unique fields that a duplicate cannot change, e.g. user email */
const NO_DUPLICATE_TYPES = [
    'users',
    'domains',
    'repositories',
    ...NO_COPY_TYPES,
];

/** `AdminDataService` key of the domain that filters the user list */
export const USER_DOMAIN_KEY = 'users';

/**
 * Search text for a list query. Each item must have all of `tags` and match
 * `search`. The item sidebar and the item picker use it.
 */
export function tagQuery(search: string, tags: readonly string[]) {
    const text = search.trim();
    if (!tags.length) return text;
    const tag_query = `tags:(${tags.map((_) => `+${_.trim()}`).join(' AND ')})`;
    return text ? `${tag_query} AND (+${text})` : tag_query;
}

/** Resource types whose items carry settings */
const SETTINGS_TYPES = new Set<ResourceType>([
    'drivers',
    'modules',
    'systems',
    'zones',
]);

/** Settings of each encryption level. `setItem` adds them to items of `SETTINGS_TYPES` */
export interface ItemSettings {
    settings?: Settings[];
}

/** The active item of section `K`, with the settings that `setItem` adds */
export type ActiveItem<K extends keyof ItemTypes> = ItemTypes[K] & ItemSettings;

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
    private _dialog = inject(Dialog);
    private _user = inject(BackofficeUsersService);
    private _admin_data = inject(AdminDataService);

    /** Whether active item is loading */
    private _loading = signal(false);
    /** Whether item list should show on mobile */
    private _show_options = signal(false);
    /** Whether item list should show on mobile */
    private _search = signal('');
    private _include_deleted = signal(false);
    private _list_version = 0;
    public readonly include_deleted = this._include_deleted.asReadonly();
    /** Currently active item */
    private _active_item = signal<PlaceResource & ItemSettings>(null);
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
    private _scope_version = 0;
    /** Id of the latest `setItem` call, so stale responses are dropped */
    private _item_request = 0;
    /** Cancels the item load in flight. A new load or section replaces it */
    private _item_abort: AbortController | null = null;
    /** Cancels the list query in flight and its next pages. A new query replaces it */
    private _list_abort: AbortController | null = null;
    /** Id of the latest settings refresh, so stale responses are dropped */
    private _settings_request = 0;
    private _items_changed = signal(0);
    private _settings_error = signal(false);

    /** Whether the settings of the active item failed to load */
    public readonly settings_error = this._settings_error.asReadonly();
    private _settings_retrying = signal(false);
    /** Id of the item that `setItem` loads now */
    private _loading_item_id = '';
    /** Settings levels that saved while their item loaded, by level */
    private _unapplied_settings = new Map<number, Settings>();
    /** Whether a settings retry runs */
    public readonly settings_retrying = this._settings_retrying.asReadonly();

    public readonly count = this._count.asReadonly();
    /**
     * Changes after any item is saved, duplicated, bulk added or removed, so
     * views that cache data derived from many items know to reload it
     */
    public readonly items_changed = this._items_changed.asReadonly();

    public get total() {
        return this._count();
    }
    /** Signal for item loading state */
    public readonly loading = this._loading.asReadonly();
    /** Signal for item list loading state */
    public readonly loading_list = this._loading_list.asReadonly();
    private _list_failed = signal(false);
    /** Whether the last page request failed. Load-more can then try it again at once. */
    public readonly list_failed = this._list_failed.asReadonly();
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

    /**
     * The active item, when the active section is `type`. `null` for other
     * sections. Use it in place of `instanceof` checks of the 6.x classes.
     */
    public activeOf<K extends keyof ItemTypes>(type: K): ActiveItem<K> | null {
        const item = this._active_item();
        // `updateType` clears the item when the section changes, so an item of the section has its type
        return this._type === type && item
            ? (item as unknown as ActiveItem<K>)
            : null;
    }

    public get type() {
        return this._type;
    }

    /** Whether the active item can be copied, or duplicated without edits */
    public canCopy(duplicate = false) {
        const blocked = duplicate ? NO_DUPLICATE_TYPES : NO_COPY_TYPES;
        return this.canMutate(2) && !blocked.includes(this._type);
    }

    public canMutate(permission: number) {
        if (this._user.current()?.sys_admin) return true;
        return (
            ['systems', 'modules', 'zones', 'users'].includes(this.type) &&
            isSubsystemUser() &&
            canUseSupportAction(permission)
        );
    }

    public switchGroup(id: string) {
        if (id === selected_support_group_id() || !selectSupportGroup(id))
            return;
        this._scope_version++;
        this._item_abort?.abort();
        this._list_abort?.abort();
        this._active_item.set(null);
        this._next_query.set(null);
        this._list.set([]);
        this._count.set(0);
        this._search.set('');
        this._loading.set(false);
        this._loading_list.set(false);
        const section = canAccessSection(this.type)
            ? this.type
            : ['systems', 'modules', 'zones', 'users'].find(canAccessSection);
        this._router.navigate(['/', section || 'systems', '-']);
        if (section === this.type) this.updateList();
    }

    /** Load the next page. One page request runs at a time. */
    public moreItems() {
        if (this._loading_list()) return;
        this.updateList();
    }

    public setIncludeDeleted(include: boolean) {
        if (this.type !== 'users' || include === this._include_deleted())
            return;
        this._include_deleted.set(include);
        this.setSearch(this._search());
    }

    /** Show only the users of `domain` in the list. `null` or `{}` shows all users */
    public setUserDomain(domain: Domain | null) {
        this._admin_data.setDomain(USER_DOMAIN_KEY, domain);
        if (this.type === 'users') this.setSearch(this._search());
    }

    public setSearch(str: string) {
        this._list_version++;
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
        // A modifier stops speech input and stray key presses from firing them
        this._hotkey.listen(['Alt', 'Shift', 'KeyN'], () => this.create());
        this._hotkey.listen(['Alt', 'Shift', 'KeyE'], () => this.edit());
        setTimeout(() => this.updateType(), 300);
    }

    /** Update the active item */
    public async setItem(id: string) {
        const request = ++this._item_request;
        const user = await waitForSignalValue(
            this._user.user,
            (user) => !!user,
        ).catch(() => null);
        // A newer selection came while this one waited for the user
        if (!user || request !== this._item_request) return;
        if (!hasSupportRole() && !hasSupportSubsystem()) return;
        // The `-` placeholder selects no item. Close the open one. The new
        // request id above makes a load in flight drop its response.
        if (id.length <= 2) {
            this._active_item.set(null);
            this._settings_error.set(false);
            this._loading.set(false);
            return;
        }
        const scope_version = this._scope_version;
        if (!this.active_item || this.active_item.id !== id) {
            this._type = (this._urlSegments()[0] ?? '') as ResourceType;
            if (!this.type)
                return this.timeout('setItem', () => this.setItem(id));
            this._item_abort?.abort();
            const { signal } = (this._item_abort = new AbortController());
            this._loading.set(true);
            this._active_item.set(null);
            this._settings_error.set(false);
            // A settings read or retry for the item that closes must not
            // change the next one, also if it is the same item again
            this._settings_request++;
            // Saves for another item that loaded before do not apply here
            this._loading_item_id = id;
            this._unapplied_settings.clear();
            const actions = this.actions;
            // Load settings alongside the item and set it once, as state
            // services reload everything each time the item changes. Lists
            // that the server left out get `[]`, as in 6.x
            const [item, settings] = await Promise.all([
                actions
                    .show(id, signal)
                    .then((loaded) => withEmptyLists(actions.schema, loaded))
                    .catch(() => {
                        if (!signal.aborted) notifyError(`Error loading ${id}`);
                    }),
                SETTINGS_TYPES.has(this._type)
                    ? this.loadSettings(id, signal)
                    : null,
            ]);
            if (
                signal.aborted ||
                scope_version !== this._scope_version ||
                request !== this._item_request
            )
                return;
            // A settings save can end while the item loads, for example the
            // first settings of a new driver. Show it on the loaded item.
            if (settings) {
                for (const [level, saved] of this._unapplied_settings)
                    settings[level] = saved;
            }
            this._unapplied_settings.clear();
            this._loading_item_id = '';
            this._active_item.set(
                (item && settings
                    ? { ...(item as PlaceResource), settings }
                    : item) as PlaceResource,
            );
            this._settings_error.set(
                !!item && !settings && SETTINGS_TYPES.has(this._type),
            );
            const name = this._type[0].toUpperCase() + this._type.slice(1);
            this._name.set(name);
            this._settings.title = name;
            this._show_options.set(false);
            this._loading.set(false);
        }
    }

    public toggleOptions() {
        this._show_options.set(!this._show_options());
    }

    public create(item?: PlaceResource, copy = false) {
        if (!(copy ? this.canCopy() : this.canMutate(2))) return;
        item = item || this._active_item();
        const actions = this.actions;
        return this.edit(
            copy
                ? { ...item, id: '', name: `${item.name} (1)` }
                : (newItem(actions.schema) as PlaceResource),
        );
    }

    public async bulkAdd() {
        if (!this.canMutate(2)) return;
        const actions = this.actions;
        const { BulkItemModalComponent } = await import(
            '../overlays/bulk-item-modal/bulk-item-modal.component'
        );
        this._settings.post('disable_uploads', true);
        const ref = this._dialog.open(BulkItemModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: '100vh',
            maxWidth: '100vw',
            data: {
                schema: actions.schema,
                name: this.type,
                save: actions.save,
            },
        });
        ref.closed.subscribe(() => {
            this._settings.post('disable_uploads', false);
            this._items_changed.update((count) => count + 1);
            // Query the list again from its first page, so new items show
            this.setSearch(this._search());
        });
    }

    /**
     * Open the form of an item and save it.
     * @param item Item to edit. Defaults to the active item
     * @param options Extra data for the form
     * @param type Type of `item` when it is not the type of the section,
     * such as a module on the system page
     */
    public async edit<T extends PlaceResource = PlaceResource>(
        item?: T,
        options: HashMap = {},
        type: keyof ItemTypes = this._type as keyof ItemTypes,
    ) {
        if (!this.canMutate((item || this.active_item)?.id ? 4 : 2)) return;
        item = item || (this._active_item() as T);
        if (item) {
            // The section or the support group can change before the form closes
            const section = this._type;
            const scope_version = this._scope_version;
            const actions: ItemActions<unknown> = ACTIONS[type];
            // The active item was already fully loaded by `setItem`; only
            // reload items passed in from lists (partial `fields` queries)
            if (item.id && item !== this._active_item()) {
                item = (await actions.show(item.id)) as T;
            }
            const component = await actions.loadModal();
            return new Promise<T>((resolve) => {
                const ref = this._dialog.open(component, {
                    data: {
                        item: { ...item },
                        ...options,
                    },
                });
                waitForEvent(
                    (ref.componentInstance as unknown as FormModalComponent)
                        .event,
                    (e: DialogEvent) => e.reason === 'done',
                ).then((event: DialogEvent<{ item: T }>) => {
                    resolve(event.metadata.item);
                    const saved = event.metadata.item as unknown as Identity;
                    // Show the item only in the section of its type, if that section still shows
                    if (
                        type !== section ||
                        this._type !== section ||
                        this._scope_version !== scope_version
                    ) {
                        this._items_changed.update((count) => count + 1);
                        return;
                    }
                    this.replaceItem(saved);
                    this._router.navigate([`/${section}`, saved.id, 'about']);
                });
            });
        }
    }

    public async delete(force_removal = false) {
        if (force_removal && this.type !== 'users') return;
        if (!this.canMutate(8)) return;
        const item = this._active_item();
        if (!item) return;
        const actions = this.actions;
        const cascade = this._user.current()?.sys_admin
            ? actions.cascade
            : undefined;
        // Resolved lazily, only if the user enables the option — a cascade
        // plan walks the whole zone subtree, which is not free.
        let plan: CascadePlan | null = null;
        const { CONFIRM_METADATA, ConfirmModalComponent } = await import(
            '../overlays/confirm-modal.component'
        );
        const ref = this._dialog.open<
            unknown,
            ConfirmModalData,
            ConfirmModalComponent
        >(ConfirmModalComponent, {
            ...CONFIRM_METADATA,
            data: {
                title: i18n(
                    force_removal
                        ? 'USERS.FORCE_DELETE'
                        : `${actions.name}.DELETE`,
                ),
                content: i18n(
                    force_removal
                        ? 'USERS.FORCE_DELETE_MSG'
                        : `${actions.name}.DELETE_MSG`,
                    {
                        name: escapeHtml(
                            (
                                item as PlaceResource & {
                                    display_name?: string;
                                }
                            ).display_name || item.name,
                        ),
                    },
                ),
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
                                  const { scope, summary, warnings } = plan;
                                  return { scope, summary, warnings };
                              },
                          },
                      ]
                    : undefined,
                icon: { type: 'icon', content: 'delete' },
                destructive: true,
            },
        });
        waitForEvent(
            ref.componentInstance.event,
            (e: DialogEvent) => e.reason === 'done',
        )
            .then(
                async (event: DialogEvent<{ options?: HashMap<boolean> }>) => {
                    ref.componentInstance?.loading.set(
                        i18n(`${actions.name}.DELETE_LOADING`),
                    );
                    let outcome: CascadeOutcome | null = null;
                    const cascade_selected =
                        !!event.metadata?.options?.[CASCADE_OPTION];
                    if (cascade_selected && !plan) {
                        // The breakdown never resolved, so there is nothing to run.
                        // Falling through here would delete the item on its own and
                        // orphan everything the cascade existed to take with it. The
                        // modal blocks this too; this is the second line of defence.
                        ref.componentInstance?.loading.set('');
                        return notifyError(i18n('CASCADE.PLAN_UNAVAILABLE'));
                    }
                    if (cascade_selected && plan) {
                        // Each step is its own request, so a large cascade runs for
                        // tens of seconds with only a spinner on screen — the footer
                        // is hidden while loading, which leaves Escape and the
                        // backdrop as the only things to press. Dismissing mid-run
                        // would not stop the deletes: they go on with no progress
                        // shown and no receipt of what went.
                        ref.componentInstance?.disableClose();
                        outcome = await runCascade(plan, (message) =>
                            ref.componentInstance?.loading.set(message),
                        );
                        ref.componentInstance?.enableClose();
                        if (outcome.failures.length) {
                            // Something is still referencing the item, so leave it in
                            // place and show what did and did not go.
                            ref.componentInstance?.loading.set('');
                            ref.componentInstance?.result.set({
                                title: i18n('CASCADE.RECEIPT_PARTIAL_TITLE'),
                                items: receiptItems(outcome.removed),
                                failed: receiptItems(
                                    outcome.failures.map((_) => _.resource),
                                ),
                                skipped: receiptItems(outcome.skipped),
                                note: i18n('CASCADE.RECEIPT_PARTIAL_NOTE', {
                                    name: item.name,
                                }),
                            });
                            return notifyError(
                                i18n(
                                    'CASCADE.FAILED',
                                    {
                                        count: outcome.failures.length,
                                        // The status is what tells an admin
                                        // why an irreversible run stopped.
                                        // ts-client rejects with a raw
                                        // Response, which has no `.message`,
                                        // so the old fallback printed the
                                        // resource name as if it were the
                                        // reason — and the receipt already
                                        // names the resource anyway.
                                        error: describeError(
                                            outcome.failures[0].error,
                                        ),
                                    },
                                    outcome.failures.length,
                                ),
                            );
                        }
                        ref.componentInstance?.loading.set(
                            i18n(`${actions.name}.DELETE_LOADING`),
                        );
                    }
                    await (
                        force_removal
                            ? users
                                  .destroy({ id: item.id, force_removal: true })
                                  .then(orThrow)
                            : actions.remove(item)
                    )
                        .then(() => {
                            this._active_item.set(null);
                            this.removeItem(item);
                            this._router.navigate([
                                `/${this._type}`,
                                '-',
                                'about',
                            ]);
                            if (outcome) {
                                // A cascade removed more than the item itself, so show
                                // the receipt rather than closing on a notification.
                                ref.componentInstance?.result.set({
                                    title: i18n('CASCADE.RECEIPT_TITLE'),
                                    items: receiptItems([
                                        ...outcome.removed,
                                        {
                                            type: cascade.resource_type,
                                            id: `${item.id}`,
                                            name: item.name,
                                        },
                                    ]),
                                    note: i18n('CASCADE.RECEIPT_NOTE'),
                                });
                                return;
                            }
                            notifySuccess(
                                i18n(`${actions.name}.DELETE_SUCCESS`, {
                                    name: item.name,
                                }),
                            );
                            ref.close();
                        })
                        .catch((err) => {
                            ref.componentInstance?.loading.set('');
                            if (outcome?.removed.length) {
                                // The cascade succeeded and only the item itself
                                // failed. Its removals are irreversible and this
                                // receipt is the only record of them, so show it
                                // rather than closing on a toast that reads as though
                                // nothing happened.
                                ref.componentInstance?.result.set({
                                    title: i18n(
                                        'CASCADE.RECEIPT_PARTIAL_TITLE',
                                    ),
                                    items: receiptItems(outcome.removed),
                                    failed: receiptItems([
                                        {
                                            type: cascade.resource_type,
                                            id: `${item.id}`,
                                            name: item.name,
                                        },
                                    ]),
                                    note: i18n('CASCADE.RECEIPT_PARTIAL_NOTE', {
                                        name: item.name,
                                    }),
                                });
                            } else {
                                // The confirm handler has run once, so its
                                // button would do nothing. Close, and the
                                // user can start the delete again.
                                ref.close();
                            }
                            notifyError(
                                i18n(`${actions.name}.DELETE_ERROR`, {
                                    error: describeError(err),
                                }),
                            );
                        });
                },
            )
            .catch((err: unknown) => {
                // Nothing above may fail silently. This chain runs an irreversible
                // operation, and an unhandled rejection here would leave the user
                // with a spinner and no idea whether anything happened.
                log(
                    'ITEM',
                    'Delete flow failed',
                    [describeError(err)],
                    'error',
                );
                ref.componentInstance?.loading.set('');
                notifyError(
                    i18n(`${actions.name}.DELETE_ERROR`, {
                        error: describeError(err),
                    }),
                );
            });
    }

    public async duplicate() {
        if (!this.canCopy(true)) return;
        const item = this._active_item();
        if (item) {
            const { DuplicateModalComponent } = await import(
                '../overlays/duplicate-modal.component'
            );
            const ref = this._dialog.open(DuplicateModalComponent, {
                data: {
                    item: item as PlaceResource,
                    save: this.actions.save,
                },
            });
            ref.componentInstance.event.subscribe((e: DialogEvent) => {
                if (e.reason === 'done' && e.metadata?.[0]) {
                    // Clear first so the copy is shown with its own settings
                    const copy = e.metadata[0] as unknown as Identity;
                    this._active_item.set(null);
                    this.replaceItem(copy);
                    this._router.navigate([`/${this._type}`, copy.id, 'about']);
                }
            });
        }
    }

    /**
     * Show a saved item in place of the active one with the same id, or as
     * the active item when there is none.
     */
    public replaceItem(item: Identity | PlaceResource) {
        this._items_changed.update((count) => count + 1);
        const current = this.active_item;
        if (!item?.id || (current && current.id !== item.id)) return;
        // As `setItem`, give `[]` for lists that the server left out
        const schema = this.actions?.schema;
        if (schema) item = withEmptyLists(schema, item);
        // Save responses have blank settings, so show the loaded ones until
        // the refresh below confirms them
        this._active_item.set(
            (current?.settings
                ? { ...item, settings: current.settings }
                : item) as PlaceResource,
        );
        const list = this._list().filter((i) => (i as Identity).id !== item.id);
        if (this._inListScope(item)) list.push(item);
        list.sort((a, b) =>
            (a as Identity).name?.localeCompare((b as Identity).name),
        );
        this._list.set(list);
        if (SETTINGS_TYPES.has(this._type)) this.refreshSettings(`${item.id}`);
    }

    /** Whether a saved item belongs in the current list, which a filter can limit */
    private _inListScope(item: Identity | PlaceResource) {
        if (this._type !== 'users') return true;
        const domain_id =
            this._admin_data.selectedDomain(USER_DOMAIN_KEY)()?.id;
        const authority_id = 'authority_id' in item ? item.authority_id : null;
        return !domain_id || !authority_id || authority_id === domain_id;
    }

    public removeItem(item: unknown) {
        this._items_changed.update((count) => count + 1);
        if ((item as Identity).id) {
            const list = this._list().filter(
                (i) => (i as Identity).id !== (item as Identity).id,
            );
            list.sort((a, b) =>
                (a as Identity).name?.localeCompare((b as Identity).name),
            );
            // A user outside the domain filter is not in the count
            if (this._inListScope(item as Identity))
                this._count.set(this._count() - 1);
            this._list.set(list);
        }
    }

    /** Path segments of the current route, without query params or fragment */
    private _urlSegments(): string[] {
        const tree = this._router.parseUrl(this._router.url);
        return tree.root.children['primary']?.segments.map((_) => _.path) ?? [];
    }

    private async updateType() {
        const url = this._urlSegments();
        const old_type = this._type;
        this._type = (url[0] ?? '') as ResourceType;
        if (old_type !== this._type) {
            // The item of the old section must not load into the new one
            this._item_abort?.abort();
            this._loading.set(false);
            this._include_deleted.set(false);
            this._list_version++;
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
        if (this._type !== 'admin' && url[1]) {
            await this.setItem(url[1]);
        }
        if (this._type === 'admin') {
            this._active_item.set({ name: 'PlaceOS Admin' } as PlaceResource);
        }
    }

    /**
     * Load the next page of the list, or the first page when the list was
     * reset. A first page cancels the query in flight, as its results are
     * no longer shown.
     */
    private updateList() {
        if (!this._next_query()) this._list_abort?.abort();
        const type = this._type;
        const search = this._search();
        const list_version = this._list_version;
        const scope_version = this._scope_version;
        this.timeout(
            'update',
            async () => {
                if (!this.actions) return;
                const user = await waitForSignalValue(
                    this._user.user,
                    (user) => !!user,
                ).catch(() => null);
                if (!user) {
                    this._loading_list.set(false);
                    return;
                }
                if (
                    list_version !== this._list_version ||
                    type !== this._type ||
                    scope_version !== this._scope_version ||
                    (!hasSupportRole() && !hasSupportSubsystem())
                )
                    return;
                if (!canAccessSection(type)) {
                    this._loading_list.set(false);
                    return;
                }
                this._loading_list.set(true);
                let next = this._next_query();
                if (!next) {
                    this._list_abort?.abort();
                    this._list_abort = new AbortController();
                    // Next pages use the signal of the first page
                    const { signal } = this._list_abort;
                    next = () =>
                        this.actions.query(
                            search,
                            type === 'users'
                                ? {
                                      include_deleted: this._include_deleted(),
                                      authority_id:
                                          this._admin_data.selectedDomain(
                                              USER_DOMAIN_KEY,
                                          )()?.id || undefined,
                                      signal,
                                  }
                                : { signal },
                        );
                    this._list.set([]);
                }
                const signal = this._list_abort?.signal;
                // `next()` gives `null` when the offset does not move forward
                const resp = await (
                    next() ??
                    Promise.resolve({
                        ...staticPage<unknown>([]),
                        total: this._count(),
                    })
                ).catch((err) => {
                    if (!signal?.aborted)
                        log(
                            'Service',
                            `Error loading ${type} list.`,
                            [err],
                            'warn',
                        );
                    return null;
                });
                if (
                    signal?.aborted ||
                    scope_version !== this._scope_version ||
                    list_version !== this._list_version
                )
                    return;
                if (!resp) {
                    // Keep the rows and the page cursor, so that load-more
                    // requests the failed page again
                    if (type === this._type) {
                        this._loading_list.set(false);
                        this._list_failed.set(true);
                        notifyError(`Error loading ${type} list.`);
                    }
                    return;
                }
                if (type === this._type) {
                    this._list_failed.set(false);
                    this._next_query.set(
                        resp.next ||
                            (() =>
                                Promise.resolve({
                                    ...staticPage<unknown>([]),
                                    total: resp.total,
                                })),
                    );
                    this._count.set(resp.total);
                    const incoming = new Set(
                        resp.data.map((item) => (item as Identity).id),
                    );
                    const list = this._list().filter(
                        (i) => !incoming.has((i as Identity).id),
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

    /**
     * Reload the active item's settings. Sets the item again only when they
     * changed, as state services reload everything each time it is set.
     */
    /** Resolves `true` when the settings of item `id` loaded and show */
    private async refreshSettings(id: string): Promise<boolean> {
        const request = ++this._settings_request;
        const settings = await this.loadSettings(id);
        const active = this.active_item;
        if (request !== this._settings_request || active?.id !== id)
            return false;
        if (!settings) {
            // Keep the settings that show. Show the error only when there are none
            if (!active.settings) this._settings_error.set(true);
            return false;
        }
        this._settings_error.set(false);
        // Masked levels have a blank settings_string, so also compare the
        // save time and keys
        const unchanged = settings.every((level, idx) => {
            const shown = active.settings?.[idx];
            return (
                level.id === shown?.id &&
                level.updated_at === shown?.updated_at &&
                level.settings_string === shown?.settings_string &&
                `${level.keys}` === `${shown?.keys}`
            );
        });
        if (!unchanged) this._active_item.set({ ...active, settings });
        return true;
    }

    /**
     * Load the settings again. The error stays until they load, so its Retry
     * button stays, with its focus, while the request runs.
     */
    public async retrySettings(): Promise<boolean> {
        const id = this.active_item?.id;
        if (!id || !SETTINGS_TYPES.has(this._type) || this._settings_retrying())
            return false;
        this._settings_retrying.set(true);
        // `false` when another item opened while it ran
        return this.refreshSettings(`${id}`).finally(() =>
            this._settings_retrying.set(false),
        );
    }

    /**
     * Show a saved settings level on the active item, when the item is its
     * parent. A settings form that opens later, such as after a tab change,
     * then shows it. Only this level changes, so a save that ends late
     * cannot undo a newer save of another level.
     */
    public updateSettings(level: number, saved: Settings) {
        const active = this.active_item;
        if (!saved.parent_id) return;
        if (active?.id !== saved.parent_id) {
            // Its item can be loading now. Then `setItem` applies it.
            if (saved.parent_id === this._loading_item_id)
                this._unapplied_settings.set(level, saved);
            return;
        }
        // A read that started before the save has the old value. Drop it.
        this._settings_request++;
        // Without loaded settings there are no other levels to keep, so load
        // them all, with the saved level
        if (!active.settings?.length) {
            this.refreshSettings(`${active.id}`);
            return;
        }
        const settings = [...active.settings];
        settings[level] = saved;
        this._active_item.set({ ...active, settings });
    }

    /**
     * Settings of each encryption level for the item, with a blank entry for
     * missing levels. Resolves `null` if they cannot be loaded.
     * @param signal Cancels the request
     */
    private async loadSettings(id: string, signal?: AbortSignal) {
        const response = await settings_v7
            .query({ parent_id: [id] }, { signal })
            .then(orThrowPage)
            .catch(() => null);
        return response ? settingsLevels(response.data) : null;
    }
}
