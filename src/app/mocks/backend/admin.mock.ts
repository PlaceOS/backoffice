import { registerMockEndpoint } from '@placeos/ts-client';
import { HashMap } from '../../common/types';
import {
    API,
    createMockStore,
    generateBasicHandlers,
    generateID,
    nameFilter,
    notFound,
} from '../common.mock';
import { AUTHORITY_ID } from './domains.mock';

/** Matches `q` against the name and `authority_id` against the item */
const AUTHORITY_FILTER = (item: Record<string, unknown>, q: HashMap) =>
    nameFilter(item, q) &&
    (!q.authority_id || item.authority_id === q.authority_id);

// ============ API KEYS ============

registerMockEndpoint({
    path: `${API}/scopes`,
    method: 'GET',
    callback: () => [
        'public',
        'read',
        'write',
        'systems',
        'zones',
        'users',
        'admin',
    ],
});

generateBasicHandlers(`${API}/api_keys`, [], {
    filter: AUTHORITY_FILTER,
    id_prefix: 'api_key-',
    prepare: (item) => ({ x_api_key: `sk_${generateID(32)}`, ...item }),
});

// ============ BROKERS ============

generateBasicHandlers(`${API}/brokers`, [], {
    filter: AUTHORITY_FILTER,
    id_prefix: 'broker-',
});

// ============ EDGES ============

/** Modules in `../data/modules` run on this edge */
const EDGE_DATA = [
    {
        id: 'edge-KiBexw2DWK',
        name: 'Master Node',
        description: 'Edge in the server room',
        created_at: 1551149982,
        updated_at: 1551149982,
    },
];

generateBasicHandlers(`${API}/edges`, EDGE_DATA, {
    filter: nameFilter,
    id_prefix: 'edge-',
});

registerMockEndpoint({
    path: `${API}/edges/:id/token`,
    method: 'GET',
    callback: () => ({ token: `edge_token_${generateID(32)}` }),
});

// ============ APPLICATIONS (OAuth/OIDC) ============

generateBasicHandlers(`${API}/oauth_apps`, [], {
    filter: AUTHORITY_FILTER,
    id_prefix: 'app-',
    prepare: (item) => ({
        uid: generateID(32),
        secret: generateID(64),
        ...item,
    }),
});

// ============ UPLOADS ============

generateBasicHandlers(`${API}/uploads`, [], {
    filter: AUTHORITY_FILTER,
    id_prefix: 'upload-',
    prepare: (item) => ({ file_path: `/uploads/${generateID()}.bin`, ...item }),
});

// ============ STORAGE PROVIDERS ============

generateBasicHandlers(`${API}/storages`, [], {
    filter: AUTHORITY_FILTER,
    id_prefix: 'storage-',
});

// ============ SIGNAGE ============

generateBasicHandlers(`${API}/signage/plugins`, [], {
    filter: AUTHORITY_FILTER,
    id_prefix: 'plugin-',
});

const PLAYLIST_DATA = ['Lobby', 'Cafe Specials', 'Safety Notices'].map(
    (name) => ({
        id: `playlist-${name.toLowerCase().replace(/\W+/g, '-')}`,
        name,
        description: '',
        authority_id: AUTHORITY_ID,
        default_animation: 'cut',
        orientation: 'landscape',
        play_count: 0,
        play_through_count: 0,
        created_at: 1709283600,
        updated_at: 1709283600,
    }),
);

generateBasicHandlers(`${API}/signage/playlists`, PLAYLIST_DATA, {
    filter: AUTHORITY_FILTER,
    id_prefix: 'playlist-',
});

/** Prove the credentials work. The mock always succeeds */
registerMockEndpoint({
    path: `${API}/signage/ai/providers/:id/test`,
    method: 'POST',
    callback: () => ({ ok: true, latency_ms: 420, model: 'mock-image-1' }),
});

generateBasicHandlers(`${API}/signage/ai/providers`, [], {
    filter: AUTHORITY_FILTER,
    id_prefix: 'ai-provider-',
});

registerMockEndpoint({
    path: `${API}/signage/ai/usage`,
    method: 'GET',
    callback: () => [],
});

// ============ BUILD JOBS ============

const BUILD_API = '/api/build/v1';

/** Build jobs of the build service. Cancelled jobs stay in the list */
const build_jobs = createMockStore('build_jobs', [
    {
        id: `job-${generateID()}`,
        state: 'running',
        message: 'Compiling',
        driver: 'drivers/place/meet.cr',
        repo: 'https://github.com/PlaceOS/drivers',
        branch: 'master',
        commit: 'HEAD',
        timestamp: new Date().toISOString(),
    },
    {
        id: `job-${generateID()}`,
        state: 'done',
        message: 'Compiled',
        driver: 'drivers/place/bookings.cr',
        repo: 'https://github.com/PlaceOS/drivers',
        branch: 'master',
        commit: 'HEAD',
        timestamp: new Date(Date.now() - 3_600_000).toISOString(),
    },
]);

registerMockEndpoint({
    path: `${BUILD_API}/monitor`,
    method: 'GET',
    callback: (event) => ({
        data: build_jobs().filter(
            (job) =>
                !event.query_params.state ||
                job.state === event.query_params.state,
        ),
    }),
});

registerMockEndpoint({
    path: `${BUILD_API}/cancel/:id`,
    method: 'DELETE',
    callback: (event) => {
        const job = build_jobs().find(({ id }) => id === event.route_params.id);
        if (!job) return notFound('Build job');
        build_jobs.set(
            build_jobs().map((item) =>
                item === job
                    ? { ...item, state: 'cancelled', message: 'Cancelled' }
                    : item,
            ),
        );
        return null;
    },
});
