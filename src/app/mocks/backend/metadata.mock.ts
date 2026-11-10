import { registerMockEndpoint } from '@placeos/ts-client';
import { API, createMockStore, now } from '../common.mock';

interface MockMetadata {
    id: string;
    parent_id: string;
    name: string;
    description: string;
    details: unknown;
    editors: string[];
    schema: string;
    modified_by_id: string;
    created_at: number;
    updated_at: number;
}

/** Most old versions kept for each metadata block */
const HISTORY_LIMIT = 20;

/** Metadata blocks of every parent */
const metadata = createMockStore<MockMetadata[]>('metadata', []);
/** Old versions of metadata blocks, newest first */
const history = createMockStore<MockMetadata[]>('metadata_history', []);

/** Group a list of blocks by name, which is how the API returns them */
function byName<T extends { name: string }>(list: T[]) {
    return Object.fromEntries(list.map((item) => [item.name, item]));
}

/** Blocks of a parent, with an optional delay that e2e tests set */
function listFor(parent_id: string, name?: string) {
    const result = byName(
        metadata().filter(
            (item) =>
                item.parent_id === parent_id && (!name || item.name === name),
        ),
    );
    const delay = Number(
        sessionStorage.getItem('PLACEOS.mocks.metadata_delay') || 0,
    );
    if (!delay) return result;
    return new Promise((resolve) => setTimeout(() => resolve(result), delay));
}

/** Add or change a block. The old version goes to the history */
function save(parent_id: string, body: Partial<MockMetadata>) {
    if (!body.name) throw { status: 400, message: 'name is required' };
    const old = metadata().find(
        (item) => item.parent_id === parent_id && item.name === body.name,
    );
    const item: MockMetadata = {
        description: '',
        details: {},
        editors: [],
        schema: '',
        created_at: now(),
        ...old,
        ...body,
        id: `${parent_id}_${body.name}`,
        parent_id,
        name: body.name,
        modified_by_id: 'current',
        updated_at: now(),
    };
    if (old) {
        const versions = history().filter((v) => v.id === old.id);
        const others = history().filter((v) => v.id !== old.id);
        history.set([old, ...versions].slice(0, HISTORY_LIMIT).concat(others));
    }
    metadata.set([...metadata().filter((i) => i !== old), item]);
    return item;
}

registerMockEndpoint({
    path: `${API}/metadata/:id`,
    method: 'GET',
    callback: (event) =>
        listFor(event.route_params.id, event.query_params.name),
});

registerMockEndpoint({
    path: `${API}/metadata`,
    method: 'POST',
    callback: (event) => save(event.body.parent_id, event.body),
});

for (const method of ['PUT', 'PATCH'] as const) {
    registerMockEndpoint({
        path: `${API}/metadata/:id`,
        method,
        callback: (event) => save(event.route_params.id, event.body),
    });
}

registerMockEndpoint({
    path: `${API}/metadata/:id`,
    method: 'DELETE',
    callback: (event) => {
        const { id } = event.route_params;
        const { name } = event.query_params;
        metadata.set(
            metadata().filter(
                (item) => !(item.parent_id === id && item.name === name),
            ),
        );
        return null;
    },
});

/** Old versions of the blocks of a parent, grouped by name */
registerMockEndpoint({
    path: `${API}/metadata/:id/history`,
    method: 'GET',
    callback: (event) => {
        const { id } = event.route_params;
        const { name } = event.query_params;
        const groups: Record<string, MockMetadata[]> = {};
        for (const item of history()) {
            if (item.parent_id !== id || (name && item.name !== name)) continue;
            (groups[item.name] ||= []).push(item);
        }
        return groups;
    },
});
