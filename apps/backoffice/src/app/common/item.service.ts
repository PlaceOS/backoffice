import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { PlaceResource } from '@placeos/ts-client';
import { BehaviorSubject, lastValueFrom, of } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

import {
    EncryptionLevel,
    PlaceSettings,
    QueryResponse,
    querySettings,
} from '@placeos/ts-client';
import { HotkeysService } from '../common/hotkeys.service';
import { SettingsService } from '../common/settings.service';
import { DialogEvent, HashMap, Identity } from '../common/types';
import { BulkItemModalComponent } from '../overlays/bulk-item-modal/bulk-item-modal.component';
import {
    CONFIRM_METADATA,
    ConfirmModalComponent,
    ConfirmModalData,
} from '../overlays/confirm-modal.component';
import {
    DuplicateModalComponent,
    DuplicateModalData,
} from '../overlays/duplicate-modal.component';
import { ItemCreateUpdateModalComponent } from '../overlays/item-modal.component';
import { BackofficeUsersService } from '../users/users.service';
import { ACTIONS, ItemActions } from './actions';
import { AsyncHandler } from './async-handler.class';
import { log } from './general';
import { i18n } from './locale.service';
import { notifyError, notifySuccess } from './notifications';

export type ResourceType =
    | 'domains'
    | 'drivers'
    | 'modules'
    | 'repositories'
    | 'systems'
    | 'triggers'
    | 'users'
    | 'zones'
    | 'admin';

@Injectable({
    providedIn: 'root',
})
export class ActiveItemService extends AsyncHandler {
    private _router = inject(Router);
    private _settings = inject(SettingsService);
    private _hotkey = inject(HotkeysService);
    private _dialog = inject(MatDialog);
    private _user = inject(BackofficeUsersService);

    /** Whether active item is loading */
    private _loading = new BehaviorSubject<boolean>(false);
    /** Whether item list should show on mobile */
    private _show_options = new BehaviorSubject<boolean>(false);
    /** Whether item list should show on mobile */
    private _search = new BehaviorSubject<string>('');
    /** Currently active item */
    private _active_item = new BehaviorSubject<PlaceResource>(null);
    /** Currently active item */
    private _next_query = new BehaviorSubject<() => QueryResponse<any>>(null);
    /** List of items for the current type */
    private _list = new BehaviorSubject<any[]>([]);
    /** Whether item list is loading */
    private _loading_list = new BehaviorSubject<boolean>(false);
    /** Whether active item is loading */
    private _name = new BehaviorSubject<string>(null);
    /** Type of the active item */
    private _type: ResourceType;
    /** Number of items */
    private _count = new BehaviorSubject<number>(0);

    public readonly count = this._count.asObservable();

    public get total() {
        return this._count.getValue();
    }
    /** Observable for item loading state */
    public readonly loading = this._loading.asObservable();
    /** Observable for item loading state */
    public readonly loading_list = this._loading_list.asObservable();
    /** Observable for list of items */
    public readonly list = this._list.asObservable();
    /** Observable for active item */
    public readonly active_item$ = this._active_item.asObservable();
    /** Observable for active item */
    public readonly item = this._active_item
        .asObservable()
        .pipe(
            distinctUntilChanged(
                (a, b) => a?.id === b?.id && a?.updated_at === b?.updated_at,
            ),
        );
    /** Observable for list of items */
    public readonly list_items = () => this._list.getValue();
    /** Observable for whether the item list should show on mobile */
    public readonly show_options = this._show_options.asObservable();

    /** Available API actions for the active type */
    public get actions(): ItemActions<any> {
        return ACTIONS[this._type];
    }

    public get active_item() {
        return this._active_item.getValue();
    }

    public get type() {
        return this._type;
    }

    public moreItems() {
        this.updateList();
    }

    public setSearch(str: string) {
        this._search.next(str);
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
        this._search.subscribe((str) => {
            this._loading_list.next(true);
            if (str || this._next_query.getValue()) {
                this._next_query.next(null);
                this._list.next([]);
                this.updateList();
            }
        });
        setTimeout(() => this.updateType(), 300);
    }

    /** Update the active item */
    public async setItem(id: string) {
        if (
            (!this.active_item || this.active_item.id !== id) &&
            id.length > 2
        ) {
            const url = this._router.url.split('/');
            this._type = url[1] as any;
            if (!this.type)
                return this.timeout('setItem', () => this.setItem(id));
            this._loading.next(true);
            this._active_item.next(null);
            const item = await this.actions
                .show(id)
                .toPromise()
                .catch(() => notifyError(`Error loading ${id}`));
            this._active_item.next(item);
            const name = this._type[0].toUpperCase() + this._type.slice(1);
            this._name.next(name);
            this._settings.title = name;
            this._show_options.next(false);
            this.updateSettings();
            this._loading.next(false);
        }
    }

    public toggleOptions() {
        this._show_options.next(!this._show_options.getValue());
    }

    public create(item?: any, copy: boolean = false) {
        if (!this._user.current().sys_admin) return;
        item = item || this._active_item.getValue();
        const actions =
            Object.values(ACTIONS).find(
                (v) => item instanceof v.itemConstructor,
            ) || this.actions;
        return this.edit(
            copy
                ? new actions.itemConstructor({
                      ...item,
                      id: '',
                      name: `${item.name} (1)`,
                  })
                : new actions.itemConstructor(),
        );
    }

    public bulkAdd() {
        if (!this._user.current().sys_admin) return;
        const actions = this.actions;
        this._settings.post('disable_uploads', true);
        const ref = this._dialog.open(BulkItemModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
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

    public async edit<T extends PlaceResource = any>(
        item?: T,
        options: HashMap = {},
    ) {
        if (!this._user.current().sys_admin) return;
        item = item || (this._active_item.getValue() as any);
        if (item) {
            return new Promise<T>(async (resolve) => {
                const actions =
                    Object.values(ACTIONS).find(
                        (v) => item instanceof v.itemConstructor,
                    ) || this.actions;
                if (item.id) {
                    item = await actions.show(item.id).toPromise();
                }
                const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
                    data: {
                        item: new actions.itemConstructor({ ...item }),
                        name: actions.name,
                        save: actions.save,
                        ...options,
                    },
                });
                ref.componentInstance.event
                    .pipe(filter((e) => e.reason === 'done'))
                    .subscribe((event) => {
                        resolve(event.metadata.item);
                        this.replaceItem(event.metadata.item);
                        if (
                            event.metadata.item instanceof
                            this.actions.itemConstructor
                        ) {
                            this._router.navigate([
                                `/${this._type}`,
                                event.metadata.item.id,
                                'about',
                            ]);
                        }
                    });
            });
        }
    }

    public async delete() {
        if (!this._user.current().sys_admin) return;
        const item = this._active_item.getValue();
        if (item) {
            const ref = this._dialog.open<
                ConfirmModalComponent,
                ConfirmModalData
            >(ConfirmModalComponent, {
                ...CONFIRM_METADATA,
                data: {
                    title: i18n(`${this.actions.name}.DELETE`),
                    content: i18n(`${this.actions.name}.DELETE_MSG`, {
                        name: (item as any).display_name || item.name,
                    }),
                    extra: this.actions.delete_extra
                        ? await this.actions.delete_extra(item)
                        : null,
                    icon: { type: 'icon', content: 'delete' },
                },
            });
            ref.componentInstance.event
                .pipe(filter((e) => e.reason === 'done'))
                .subscribe((event: DialogEvent) => {
                    ref.componentInstance.loading.set(
                        i18n(`${this.actions.name}.DELETE_LOADING`),
                    );
                    this.actions.remove(item).subscribe(
                        () => {
                            notifySuccess(
                                i18n(`${this.actions.name}.DELETE_SUCCESS`, {
                                    name: item.name,
                                }),
                            );
                            this._active_item.next(null);
                            this.removeItem(item);
                            this._router.navigate([
                                `/${this._type}`,
                                '-',
                                'about',
                            ]);
                            ref.close();
                        },
                        (err) => {
                            ref.componentInstance.loading.set('');
                            notifyError(
                                i18n(`${this.actions.name}.DELETE_ERROR`, {
                                    error: JSON.stringify(
                                        err.response || err.message || err,
                                    ),
                                }),
                            );
                        },
                    );
                });
        }
    }

    public duplicate() {
        if (!this._user.current().sys_admin) return;
        const item = this._active_item.getValue();
        if (item) {
            const ref = this._dialog.open<
                DuplicateModalComponent,
                DuplicateModalData
            >(DuplicateModalComponent, {
                data: { item, save: this.actions.save as any },
            });
            ref.componentInstance.event.subscribe((e: DialogEvent) => {
                if (e.reason === 'done') {
                    this._active_item.next(e.metadata[0]);
                    this.replaceItem(e.metadata[0]);
                }
            });
        }
    }

    public replaceItem(item: Identity) {
        if (
            item?.id &&
            (!this.active_item || this.active_item.id === item.id)
        ) {
            this._active_item.next(item as any);
            const list = this._list.getValue().filter((i) => i.id !== item.id);
            list.push(item);
            list.sort((a, b) => a.name?.localeCompare(b.name));
            this.updateSettings();
            this._list.next(list);
        }
    }

    public removeItem(item: any) {
        if (item.id) {
            const list = this._list.getValue().filter((i) => i.id !== item.id);
            list.sort((a, b) => a.name?.localeCompare(b.name));
            this._count.next(this._count.getValue() - 1);
            this._list.next(list);
        }
    }

    private async updateType() {
        const url = this._router.url.split('/');
        const old_type = this._type;
        this._type = url[1] as any;
        if (old_type !== this._type) {
            log('Service', `Item type set to ${this._type}`);
            this._next_query.next(null);
            this._active_item.next(null);
            this._search.next('');
            const name = this._type[0]?.toUpperCase() + this._type.slice(1);
            this._name.next(name);
            this._settings.title = name;
            this._show_options.next(true);
            this.updateList();
        }
        if (this._type !== 'admin' && url[2]) {
            await this.setItem(url[2]);
        }
        if (this._type === 'admin') {
            this._active_item.next({ name: 'PlaceOS Admin' } as any);
        }
    }

    private updateList() {
        const type = this._type;
        const search = this._search.getValue();
        this.timeout(
            'update',
            async () => {
                if (!this.actions) return;
                this._loading_list.next(true);
                let next = this._next_query.getValue();
                if (!next) {
                    next = () => this.actions.query(this._search.getValue());
                    this._list.next([]);
                }
                const resp = await next().toPromise();
                if (type === this._type) {
                    this._next_query.next(
                        resp.next ||
                            (() =>
                                of({
                                    data: [],
                                    total: resp.total,
                                    next: null,
                                })),
                    );
                    this._count.next(resp.total);
                    const list = this._list
                        .getValue()
                        .filter(
                            (i) => !resp.data.find((item) => item.id === i.id),
                        );
                    const new_list = list.concat(resp.data);
                    new_list.sort((a, b) => a.name?.localeCompare(b.name));
                    this._list.next(new_list);
                    this._loading_list.next(false);
                }
            },
            search ? 300 : 10,
        );
    }

    private async updateSettings() {
        const item = this.active_item;
        if (item && (item as any).settings) {
            const settings = await lastValueFrom(
                querySettings({ parent_id: item.id }).pipe(
                    map((resp) => resp.data),
                ),
            );
            for (const level in EncryptionLevel) {
                if (isNaN(Number(level))) continue;
                if (
                    !settings.find((s) => s.encryption_level === Number(level))
                ) {
                    settings.push(
                        new PlaceSettings({
                            encryption_level: Number(level),
                        }),
                    );
                }
            }
            settings.sort((a, b) => a.encryption_level - b.encryption_level);
            this._active_item.next(
                new this.actions.itemConstructor({ ...item, settings }),
            );
        }
    }
}
