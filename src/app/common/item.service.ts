import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { PlaceResource } from '@placeos/ts-client/dist/esm/resources/resource';

import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from '../overlays/confirm-modal/confirm-modal.component';
import { ItemActions, ACTIONS } from './actions';
import { SettingsService } from '../services/settings.service';
import { HotkeysService } from '../services/hotkeys.service';
import { ItemCreateUpdateModalComponent } from '../overlays/item-modal/item-modal.component';
import { notifySuccess, notifyError } from './notifications';
import { DialogEvent } from '../shared/utilities/types.utilities';
import { DuplicateModalComponent, DuplicateModalData } from '../overlays/duplicate-modal/duplicate-modal.component';
import { QueryResponse } from '@placeos/ts-client/dist/esm/resources/functions';
import { log } from './general';

export type ResourceType =
    | 'domains'
    | 'drivers'
    | 'modules'
    | 'repositories'
    | 'systems'
    | 'triggers'
    | 'users'
    | 'zones';

@Injectable({
    providedIn: 'root',
})
export class ActiveItemService {
    /** Whether active item is loading */
    private _loading = new BehaviorSubject<boolean>(false);
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
    /** Observable for item loading state */
    public readonly loading = this._loading.asObservable();
    /** Observable for item loading state */
    public readonly loading_list = this._loading_list.asObservable();
    /** Observable for list of items */
    public readonly list = this._list.asObservable();
    /** Observable for list of items */
    public readonly list_items = () => this._list.getValue();

    /** Available API actions for the active type */
    public get actions(): ItemActions<any> {
        return ACTIONS[this._type];
    }

    public get active_item() {
        return this._active_item.getValue();
    }

    public moreItems() {
        this.updateList();
    }

    /** Update the active item */
    public async setItem(id: string) {
        if (!this.active_item || this.active_item.id !== id && id.length > 2) {
            const url = this._router.url.split('/');
            this._type = url[1] as any;
            const item = await this.actions.show(id).toPromise();
            this._active_item.next(item);
            const name = this._type[0].toUpperCase() + this._type.slice(1);
            this._name.next(name);
            this._settings.title = name;
        }
    }

    constructor(
        private _router: Router,
        private _settings: SettingsService,
        private _hotkey: HotkeysService,
        private _dialog: MatDialog
    ) {
        this._router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.updateType();
            }
        });
        this._hotkey.listen(['KeyN'], () => this.create());
        this._hotkey.listen(['KeyE'], () => this.edit());
        this._hotkey.listen(['KeyD'], () => this.delete());
        setTimeout(() => this.updateType(), 300);
    }

    public create(copy: boolean = false) {
        const item = this._active_item.getValue();
        this.edit(
            copy
                ? new this.actions.itemConstructor({ ...item, id: '', name: `${item.name} (1)` })
                : new this.actions.itemConstructor()
        );
    }

    public edit(item?: any) {
        item = item || this._active_item.getValue();
        if (item) {
            const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    item: new this.actions.itemConstructor(item),
                    name: this._name.getValue().slice(0, -1),
                    save: this.actions.save,
                },
            });
            ref.componentInstance.event
                .pipe(filter((e) => e.reason === 'done'))
                .subscribe((event) => {
                    this._router.navigate([`/${this._type}`, event.metadata.item.id]);
                });
        }
    }

    public delete() {
        const item = this._active_item.getValue();
        if (item) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: `Delete system`,
                        content: this.actions.delete_message,
                        icon: { type: 'icon', class: 'backoffice-trash' },
                    },
                }
            );
            ref.componentInstance.event
                .pipe(filter((e) => e.reason === 'done'))
                .subscribe((event: DialogEvent) => {
                    ref.componentInstance.loading = 'Deleting system...';
                    this.actions.remove(item.id).subscribe(
                        () => {
                            notifySuccess(`Successfully deleted system "${item.name}".`);
                            this._active_item.next(null);
                            this._router.navigate([`/${this._type}`]);
                            ref.close();
                        },
                        (err) => {
                            ref.componentInstance.loading = null;
                            notifyError(
                                `Error deleting system. Error: ${JSON.stringify(
                                    err.response || err.message || err
                                )}`
                            );
                        }
                    );
                });
        }
    }

    public duplicate() {
        const item = this._active_item.getValue();
        if (item) {
            const ref = this._dialog.open<DuplicateModalComponent, DuplicateModalData>(
                DuplicateModalComponent,
                { data: { item, save: this.actions.save as any } }
            );
            ref.componentInstance.event.subscribe((e: DialogEvent) => {
                if (e.reason === 'done') {
                    this._active_item.next(e.metadata[0]);
                }
            })
        }
    }

    private updateType() {
        const url = this._router.url.split('/');
        const old_type = this._type;
        this._type = url[1] as any;
        if (url[2]) {
            this.setItem(url[2]);
        }
        log('Service', `Item type set to ${this._type}`);
        if (old_type !== this._type) {
            this._next_query.next(null);
            this._active_item.next(null);
            this.updateList();
        }
    }

    private async updateList() {
        if (!this.actions) return;
        this._loading_list.next(true);
        let next = this._next_query.getValue();
        if (!next) {
            next = this.actions.query;
            this._list.next([]);
        }
        const resp = await next().toPromise();
        this._next_query.next(resp.next || (() => of({ data: [], total: resp.total, next: null })));
        const list = this._list.getValue().filter(i => !resp.data.find(item => item.id === i.id));
        this._list.next(list.concat(resp.data));
        this._loading_list.next(false);
    }
}
