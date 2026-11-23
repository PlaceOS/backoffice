import { Storage, storages } from '@placeos/ts-client';
import { orThrow, orThrowPage } from '@placeos/ts-client/compat';
import { cleanObject } from '../../common/general';
import { toBody } from '../../common/placeos';

/** A storage provider for uploads */
export type PlaceStorage = Storage;

export type StorageQueryParameters = Parameters<typeof storages.query>[0];

/**
 * Query the available storage providers
 * @param query_params Query parameters to add the to request URL
 */
export function queryStorage(query_params: StorageQueryParameters = {}) {
    return storages.query(query_params).then(orThrowPage);
}

/**
 * Update the storage in the database. The API only has PATCH, so fields
 * that the data leaves out keep their value
 * @param id ID of the storage
 * @param form_data New values for the storage
 */
export function updateStorage(id: string, form_data: Partial<PlaceStorage>) {
    return storages
        .update({ id, body: toBody(Storage, form_data) })
        .then(orThrow);
}

/**
 * Save the item to the database will overrite existing item if `id` is set
 * @param item New storage data
 * @returns New storage object
 */
export function saveStorage(item: Partial<PlaceStorage>) {
    const data = cleanObject({ ...item }, ['', undefined, null]);
    return item.id ? updateStorage(item.id, data) : addStorage(data);
}

/**
 * Add a new storage to the database
 * @param form_data Storage data
 */
export function addStorage(form_data: Partial<PlaceStorage>) {
    return storages.create({ body: toBody(Storage, form_data) }).then(orThrow);
}

/**
 * Remove an storage from the database
 * @param id ID of the storage
 */
export function removeStorage(id: string) {
    return storages.destroy({ id }).then(orThrow);
}
