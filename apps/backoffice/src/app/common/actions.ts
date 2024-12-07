import { Type } from '@angular/core';
import {
    PlaceSystem,
    querySystems,
    showSystem,
    updateSystem,
    addSystem,
    PlaceDomain,
    queryDomains,
    showDomain,
    addDomain,
    updateDomain,
    PlaceDriver,
    queryDrivers,
    showDriver,
    updateDriver,
    addDriver,
    PlaceModule,
    queryModules,
    showModule,
    updateModule,
    addModule,
    PlaceRepository,
    queryRepositories,
    showRepository,
    updateRepository,
    addRepository,
    PlaceTrigger,
    queryTriggers,
    showTrigger,
    updateTrigger,
    addTrigger,
    PlaceUser,
    queryUsers,
    showUser,
    updateUser,
    addUser,
    PlaceZone,
    queryZones,
    showZone,
    updateZone,
    addZone,
    removeDomain,
    removeZone,
    removeUser,
    removeTrigger,
    removeSystem,
    removeRepository,
    removeModule,
    removeDriver,
    PlaceSettings,
} from '@placeos/ts-client';
import { QueryResponse } from '@placeos/ts-client/dist/esm/resources/functions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfirmExtraType } from '../overlays/confirm-modal.component';
import { HashMap } from './types';

export interface ItemActions<T> {
    query: (_?: string) => QueryResponse<T>;
    show: (_: string) => Observable<T>;
    save: (_: T) => Observable<T>;
    remove: (_: T) => Observable<any>;
    itemConstructor: Type<T>;
    delete_message: string;
    delete_extra?: (_: T) => Promise<[ConfirmExtraType, string]>;
    name: string;
}

const domains: ItemActions<PlaceDomain> = {
    query: (_) =>
        queryDomains({
            q: _,
            fields: ['id', 'name', 'domain'].join(','),
        }),
    show: (_) => showDomain(_),
    save: (item) => (item.id ? updateDomain(item.id, item) : addDomain(item)),
    remove: (item) => removeDomain(item.id),
    itemConstructor: PlaceDomain,
    delete_message: ``,
    name: 'DOMAINS',
};

const drivers: ItemActions<PlaceDriver> = {
    query: (_) =>
        queryDrivers({
            q: _,
            fields: ['id', 'name', 'module_name'].join(','),
        } as any),
    show: (_) => showDriver(_),
    save: (item) => (item.id ? updateDriver(item.id, item) : addDriver(item)),
    remove: (item) => removeDriver(item.id),
    itemConstructor: PlaceDriver,
    delete_message: ``,
    delete_extra: async (_) => {
        const query: any = { offset: 0, limit: 1, driver_id: _.id };
        const count = await queryModules(query)
            .pipe(map(({ total }) => total))
            .toPromise()
            .catch((_) => 0);
        return count
            ? [
                  'error',
                  `${count} modules that rely on this driver will be <strong>immediately</strong> removed.`,
              ]
            : null;
    },
    name: 'DRIVERS',
};

const modules: ItemActions<PlaceModule> = {
    query: (_) =>
        queryModules({
            q: _,
            fields: ['id', 'name', 'module_name'].join(','),
        }),
    show: (_) => showModule(_),
    save: (item) => (item.id ? updateModule(item.id, item) : addModule(item)),
    remove: (item) => removeModule(item.id),
    itemConstructor: PlaceModule,
    delete_message: ``,
    name: 'MODULES',
};

const repositories: ItemActions<PlaceRepository> = {
    query: (_) =>
        queryRepositories({
            q: _,
            fields: ['id', 'name', 'repo_type'].join(','),
        }),
    show: (_) => showRepository(_),
    save: (item) =>
        item.id ? updateRepository(item.id, item) : addRepository(item),
    remove: (item) => removeRepository(item.id),
    itemConstructor: PlaceRepository,
    delete_message: `'`,
    name: 'REPOS',
};

const systems: ItemActions<PlaceSystem> = {
    query: (_) =>
        querySystems({
            q: _,
            fields: ['id', 'name', 'display_name'].join(','),
        }),
    show: (_) => showSystem(_),
    save: (item) =>
        item.id
            ? updateSystem(item.id, {
                  ...item,
                  support_url: processURL(item, item.support_url),
              })
            : addSystem({
                  ...item,
                  support_url: processURL(item, item.support_url),
              }),
    remove: (item) => removeSystem(item.id),
    itemConstructor: PlaceSystem,
    delete_message: ``,
    name: 'SYSTEMS',
};

function processURL(system: HashMap, url: string) {
    for (const key in system) {
        url = url.replace(new RegExp(`{{${key}}}`, 'g'), system[key]);
    }
    url = url.replace(new RegExp(`{{origin}}`, 'g'), location.origin);
    url = url.replace(new RegExp(`{{host}}`, 'g'), location.host);
    url = url.replace(new RegExp(`{{pathname}}`, 'g'), location.pathname);
    return url;
}

const triggers: ItemActions<PlaceTrigger> = {
    query: (_) =>
        queryTriggers({
            q: _,
            fields: ['id', 'name', 'display_name'].join(','),
        }),
    show: (_) => showTrigger(_),
    save: (item) => (item.id ? updateTrigger(item.id, item) : addTrigger(item)),
    remove: (item) => removeTrigger(item.id),
    itemConstructor: PlaceTrigger,
    delete_message: ``,
    name: 'TRIGGERS',
};

const users: ItemActions<PlaceUser> = {
    query: (_) =>
        queryUsers({
            q: _,
            fields: ['id', 'name', 'email', 'authority_id', 'groups'].join(','),
        }),
    show: (_) => showUser(_),
    save: (item) => (item.id ? updateUser(item.id, item) : addUser(item)),
    remove: (item) => removeUser(item.id),
    itemConstructor: PlaceUser,
    delete_message: ``,
    name: 'USERS',
};

const zones: ItemActions<PlaceZone> = {
    query: (_) =>
        queryZones({
            q: _,
            fields: ['id', 'name', 'display_name', 'tags'].join(','),
        }),
    show: (_) => showZone(_),
    save: (item) => (item.id ? updateZone(item.id, item) : addZone(item)),
    remove: (item) => removeZone(item.id),
    itemConstructor: PlaceZone,
    delete_message: ``,
    name: 'ZONES',
};

export const ACTIONS = {
    domains,
    drivers,
    modules,
    repositories,
    systems,
    triggers,
    users,
    zones,
};
