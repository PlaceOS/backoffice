
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
} from '@placeos/ts-client';
import { QueryResponse } from '@placeos/ts-client/dist/esm/resources/functions';
import { Observable } from 'rxjs';

export interface ItemActions<T> {
    query: (_?: string) => QueryResponse<T>;
    show: (_: string) => Observable<T>;
    save: (_: T) => Observable<T>;
    remove: (_: T) => Observable<void>;
    itemConstructor: Type<T>;
    delete_message: string;
}

const domains: ItemActions<PlaceDomain> = {
    query: (_) => queryDomains({ q: _ }),
    show: (_) => showDomain(_),
    save: (item) => (item.id ? updateDomain(item.id, item) : addDomain(item)),
    remove: (item) => removeDomain(item.id),
    itemConstructor: PlaceDomain,
    delete_message: `<p>Are you sure you want delete this domain?</p><p>The domain will be deleted <strong>immediately.</strong></p>`
};

const drivers: ItemActions<PlaceDriver> = {
    query: (_) => queryDrivers({ q: _ } as any),
    show: (_) => showDriver(_),
    save: (item) => (item.id ? updateDriver(item.id, item) : addDriver(item)),
    remove: (item) => removeDriver(item.id),
    itemConstructor: PlaceDriver,
    delete_message: `<p>Are you sure you want delete this driver?</p><p>All modules that rely on this driver will be <strong>immediately</strong> removed.</p>`
};

const modules: ItemActions<PlaceModule> = {
    query: (_) => queryModules({ q: _ }),
    show: (_) => showModule(_),
    save: (item) => (item.id ? updateModule(item.id, item) : addModule(item)),
    remove: (item) => removeModule(item.id),
    itemConstructor: PlaceModule,
    delete_message: `<p>Are you sure you want delete this module?</p><p>Deleting this will module <strong>immediately</strong> remove it from any system associated with it</p>`
};

const repositories: ItemActions<PlaceRepository> = {
    query: (_) => queryRepositories({ q: _ }),
    show: (_) => showRepository(_),
    save: (item) => (item.id ? updateRepository(item.id, item) : addRepository(item)),
    remove: (item) => removeRepository(item.id),
    itemConstructor: PlaceRepository,
    delete_message: `<p>Deleting this repository will <strong>immediately</strong> remove assoicated drivers and modules</p>'`
};

const systems: ItemActions<PlaceSystem> = {
    query: (_) => querySystems({ q: _ }),
    show: (_) => showSystem(_),
    save: (item) => (item.id ? updateSystem(item.id, item) : addSystem(item)),
    remove: (item) => removeSystem(item.id),
    itemConstructor: PlaceSystem,
    delete_message: `<p>Are you sure you want delete this system?</p><p>Deleting this will <strong>immediately</strong> delete modules that are not in another system</p>`
};

const triggers: ItemActions<PlaceTrigger> = {
    query: (_) => queryTriggers({ q: _ }),
    show: (_) => showTrigger(_),
    save: (item) => (item.id ? updateTrigger(item.id, item) : addTrigger(item)),
    remove: (item) => removeTrigger(item.id),
    itemConstructor: PlaceTrigger,
    delete_message: `<p>Are you sure you want delete this trigger?</p><p>Deleting this trigger will <strong>immediately</strong> remove it from all associated systems and zones</p>`
};

const users: ItemActions<PlaceUser> = {
    query: (_) => queryUsers({ q: _ }),
    show: (_) => showUser(_),
    save: (item) => (item.id ? updateUser(item.id, item) : addUser(item)),
    remove: (item) => removeUser(item.id),
    itemConstructor: PlaceUser,
    delete_message: `<p>Are you sure you want delete this user?</p><p>The user will be removed from the system within 24 hours</p>`
};

const zones: ItemActions<PlaceZone> = {
    query: (_) => queryZones({ q: _ }),
    show: (_) => showZone(_),
    save: (item) => (item.id ? updateZone(item.id, item) : addZone(item)),
    remove: (item) => removeZone(item.id),
    itemConstructor: PlaceZone,
    delete_message: `<p>Are you sure you want delete this zone?</p><p>Deleting this zone will <strong>immediately</strong> remove systems without another zone</p>`
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
