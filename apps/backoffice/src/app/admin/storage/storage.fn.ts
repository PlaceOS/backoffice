import {
    cleanObject,
    create,
    query,
    remove,
    show,
    update,
} from '@placeos/ts-client';

const PATH = 'storages';

export class PlaceStorage {
    /** ID of the storage */
    public readonly id: string;
    /** ID of the authority the storage is under */
    public readonly authority_id: string;
    /** Type of the storage */
    public readonly storage_type: string;
    /** Name of the storage */
    public readonly bucket_name: string;
    /** Region of the storage */
    public readonly region: string;
    /** Access key for the storage */
    public readonly access_key: string;
    /** Access secret for the storage */
    public readonly access_secret: string;
    /** Endpoint for the storage */
    public readonly endpoint: string;
    /** File type extensions to filter out */
    public readonly ext_filter: string[];
    /** File MIME type extensions to filter out */
    public readonly mime_filter: string[];

    constructor(item: Partial<PlaceStorage> = {}) {
        Object.assign(this, item);
    }
}

/** Convert raw server data to an storage object */
function process(item: Partial<PlaceStorage>) {
    return new PlaceStorage(item);
}

export interface StorageQueryParameters {
    /** ID of the authority the storage is under */
    auth_id?: string;
    /** Filter results based on a simple query string */
    q?: string;
    /** Number of results to return */
    limit?: number;
    /** Number of results to skip */
    offset?: number;
}

/**
 * Query the available systems
 * @param query_params Query parameters to add the to request URL
 */
export function queryStorage(query_params: StorageQueryParameters = {}) {
    return query({ query_params, fn: process, path: PATH });
}

/**
 * Get the data for a system
 * @param id ID of the system to retrieve
 * @param query_params Query parameters to add the to request URL
 */
export function showStorage(
    id: string,
    query_params: StorageQueryParameters = {}
) {
    return show({ id, query_params, fn: process, path: PATH });
}

/**
 * Update the storage in the database
 * @param id ID of the storage
 * @param form_data New values for the storage
 * @param query_params Query parameters to add the to request URL
 * @param method HTTP verb to use on request. Defaults to `patch`
 */
export function updateStorage(
    id: string,
    form_data: Partial<PlaceStorage>,
    method: 'put' | 'patch' = 'patch'
) {
    return update({
        id,
        form_data,
        query_params: {},
        method,
        fn: process,
        path: PATH,
    });
}

/**
 * Save the item to the database will overrite existing item if `id` is set
 * @param item New storage data
 * @returns New storage object
 */
export function saveStorage(item: PlaceStorage) {
    const data = cleanObject(item, ['', undefined, null]);
    return item.id ? updateStorage(item.id, data, 'put') : addStorage(data);
}

/**
 * Add a new storage to the database
 * @param form_data Storage data
 * @param query_params Query parameters to add the to request URL
 */
export function addStorage(form_data: Partial<PlaceStorage>) {
    return create({ form_data, query_params: {}, fn: process, path: PATH });
}

/**
 * Remove an storage from the database
 * @param id ID of the storage
 * @param query_params Query parameters to add the to request URL
 */
export function removeStorage(
    id: string,
    query_params: Record<string, any> = {}
) {
    return remove({ id, query_params, path: PATH });
}
