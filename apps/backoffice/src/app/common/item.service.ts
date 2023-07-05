import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, of } from 'rxjs';
import { filter, map, distinctUntilChanged } from 'rxjs/operators';
import { PlaceResource } from '@placeos/ts-client/dist/esm/resources/resource';

import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from '../overlays/confirm-modal.component';
import { ItemActions, ACTIONS } from './actions';
import { SettingsService } from '../common/settings.service';
import { HotkeysService } from '../common/hotkeys.service';
import { ItemCreateUpdateModalComponent } from '../overlays/item-modal/item-modal.component';
import { notifySuccess, notifyError } from './notifications';
import {
    DialogEvent,
    HashMap,
    Identity,
} from 'apps/backoffice/src/app/common/types';
import {
    DuplicateModalComponent,
    DuplicateModalData,
} from '../overlays/duplicate-modal/duplicate-modal.component';
import { QueryResponse } from '@placeos/ts-client/dist/esm/resources/functions';
import { log } from './general';
import { AsyncHandler } from './base.class';
import {
    EncryptionLevel,
    PlaceSettings,
    querySettings,
} from '@placeos/ts-client';
import { BackofficeUsersService } from '../users/users.service';
import { BulkItemModalComponent } from '../overlays/bulk-item-modal/bulk-item-modal.component';

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
                (a, b) => a?.id === b?.id && a?.updated_at === b?.updated_at
            )
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

    constructor(
        private _router: Router,
        private _settings: SettingsService,
        private _hotkey: HotkeysService,
        private _dialog: MatDialog,
        private _user: BackofficeUsersService
    ) {
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
                (v) => item instanceof v.itemConstructor
            ) || this.actions;
        return this.edit(
            copy
                ? new actions.itemConstructor({
                      ...item,
                      id: '',
                      name: `${item.name} (1)`,
                  })
                : new actions.itemConstructor()
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
            this._settings.post('disable_uploads', false)
        );
    }

    public async edit<T extends PlaceResource = any>(
        item?: T,
        options: HashMap = {}
    ) {
        if (!this._user.current().sys_admin) return;
        item = item || (this._active_item.getValue() as any);
        if (item) {
            return new Promise<T>(async (resolve) => {
                const actions =
                    Object.values(ACTIONS).find(
                        (v) => item instanceof v.itemConstructor
                    ) || this.actions;
                if (item.id) {
                    item = await actions.show(item.id).toPromise();
                }
                const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
                    height: 'auto',
                    width: 'auto',
                    maxHeight: 'calc(100vh - 2em)',
                    maxWidth: 'calc(100vw - 2em)',
                    data: {
                        item: new actions.itemConstructor({ ...item }),
                        name: actions.singular,
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
                    title: `Delete ${this.actions.singular}`,
                    content: this.actions.delete_message.replace(
                        '{{ name }}',
                        (item as any).display_name || item.name
                    ),
                    extra: this.actions.delete_extra
                        ? await this.actions.delete_extra(item)
                        : null,
                    icon: { type: 'icon', class: 'backoffice-trash' },
                },
            });
            ref.componentInstance.event
                .pipe(filter((e) => e.reason === 'done'))
                .subscribe((event: DialogEvent) => {
                    ref.componentInstance.loading = `Deleting ${this.actions.singular}...`;
                    this.actions.remove(item).subscribe(
                        () => {
                            notifySuccess(
                                `Successfully deleted ${this.actions.singular} "${item.name}".`
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
                            ref.componentInstance.loading = null;
                            notifyError(
                                `Error deleting ${
                                    this.actions.singular
                                }. Error: ${JSON.stringify(
                                    err.response || err.message || err
                                )}`
                            );
                        }
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
                                of({ data: [], total: resp.total, next: null }))
                    );
                    this._count.next(resp.total);
                    const list = this._list
                        .getValue()
                        .filter(
                            (i) => !resp.data.find((item) => item.id === i.id)
                        );
                    const new_list = list.concat(resp.data);
                    new_list.sort((a, b) => a.name?.localeCompare(b.name));
                    this._list.next(new_list);
                    this._loading_list.next(false);
                }
            },
            search ? 300 : 10
        );
    }

    private async updateSettings() {
        const item = this.active_item;
        if (item && (item as any).settings) {
            const settings = await querySettings({ parent_id: item.id })
                .pipe(map((resp) => resp.data))
                .toPromise();
            while (settings.length < 4) {
                if (
                    !settings.find(
                        (s) => s.encryption_level === EncryptionLevel.None
                    )
                ) {
                    settings.push(
                        new PlaceSettings({
                            encryption_level: EncryptionLevel.None,
                        })
                    );
                } else if (
                    !settings.find(
                        (s) => s.encryption_level === EncryptionLevel.Support
                    )
                ) {
                    settings.push(
                        new PlaceSettings({
                            encryption_level: EncryptionLevel.Support,
                        })
                    );
                } else if (
                    !settings.find(
                        (s) => s.encryption_level === EncryptionLevel.Admin
                    )
                ) {
                    settings.push(
                        new PlaceSettings({
                            encryption_level: EncryptionLevel.Admin,
                        })
                    );
                } else {
                    settings.push(
                        new PlaceSettings({
                            encryption_level: EncryptionLevel.NeverDisplay,
                        })
                    );
                }
            }
            settings.sort((a, b) => a.encryption_level - b.encryption_level);
            this._active_item.next(
                new this.actions.itemConstructor({ ...item, settings })
            );
        }
    }
}
