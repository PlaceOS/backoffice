import { Type } from '@angular/core';
import {
    addDomain,
    addDriver,
    addModule,
    addRepository,
    addSystem,
    addTrigger,
    addUser,
    addZone,
    PlaceDomain,
    PlaceDriver,
    PlaceModule,
    PlaceRepository,
    PlaceSystem,
    PlaceTrigger,
    PlaceUser,
    PlaceZone,
    queryDomains,
    queryDrivers,
    queryModules,
    queryRepositories,
    QueryResponse,
    querySystems,
    queryTriggers,
    queryUsers,
    queryZones,
    removeDomain,
    removeDriver,
    removeModule,
    removeRepository,
    removeSystem,
    removeTrigger,
    removeUser,
    removeZone,
    showDomain,
    showDriver,
    showModule,
    showRepository,
    showSystem,
    showTrigger,
    showUser,
    showZone,
    updateDomain,
    updateDriver,
    updateModule,
    updateRepository,
    updateSystem,
    updateTrigger,
    updateUser,
    updateZone,
} from '@placeos/ts-client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomainFormComponent } from '../domains/domain-form.component';
import { DriverFormComponent } from '../drivers/driver-form.component';
import { ModuleFormComponent } from '../modules/module-form.component';
import { RepositoryFormComponent } from '../repositories/repository-form.component';
import { SystemFormComponent } from '../systems/system-form.component';
import { TriggerFormComponent } from '../triggers/trigger-form.component';
import { UserFormComponent } from '../users/user-form.component';
import { ZoneFormComponent } from '../zones/zone-form.component';

export interface ItemActions<T> {
    query: (_?: string) => QueryResponse<T>;
    show: (_: string) => Observable<T>;
    save: (_: T) => Observable<T>;
    remove: (_: T) => Observable<unknown>;
    itemConstructor: Type<T>;
    modalComponent: Type<unknown>;
    delete_message: string;
    delete_extra?: (_: T) => Promise<[string, string]>;
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
    modalComponent: DomainFormComponent,
    delete_message: ``,
    name: 'DOMAINS',
};

const drivers: ItemActions<PlaceDriver> = {
    query: (_) =>
        queryDrivers({
            q: _,
            fields: ['id', 'name', 'module_name'].join(','),
        }),
    show: (_) => showDriver(_),
    save: (item) => (item.id ? updateDriver(item.id, item) : addDriver(item)),
    remove: (item) => removeDriver(item.id),
    itemConstructor: PlaceDriver,
    modalComponent: DriverFormComponent,
    delete_message: ``,
    delete_extra: async (_) => {
        const query: Record<string, string | number> = {
            offset: 0,
            limit: 1,
            driver_id: _.id,
        };
        const count = await queryModules(query)
            .pipe(map(({ total }) => total))
            .toPromise()
            .catch((_err) => 0);
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
    modalComponent: ModuleFormComponent,
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
    modalComponent: RepositoryFormComponent,
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
    modalComponent: SystemFormComponent,
    delete_message: ``,
    name: 'SYSTEMS',
};

function processURL(system: PlaceSystem, url: string) {
    for (const key in system) {
        url = url.replace(new RegExp(`{{${key}}}`, 'g'), `${system[key]}`);
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
    modalComponent: TriggerFormComponent,
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
    modalComponent: UserFormComponent,
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
    modalComponent: ZoneFormComponent,
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
