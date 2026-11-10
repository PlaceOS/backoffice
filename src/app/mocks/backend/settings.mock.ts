import { EncryptionLevel, registerMockEndpoint } from '@placeos/ts-client';
import { HashMap } from '../../common/types';
import {
    API,
    createMockStore,
    endpointData,
    generateBasicHandlers,
    nameFilter,
} from '../common.mock';

/** Most old versions kept in the settings history */
const HISTORY_LIMIT = 200;

/** Matches `q` against the name and `parent_id` (a comma list) */
const FILTER_FN = (item: Record<string, unknown>, q: HashMap) =>
    nameFilter(item, q) &&
    (!q.parent_id || `${q.parent_id}`.split(',').includes(`${item.parent_id}`));

/** Settings of the seed systems, modules, zones and drivers */
const SETTINGS_DATA = ['systems', 'modules', 'zones', 'drivers']
    .flatMap((type) => endpointData(`${API}/${type}`))
    .filter(
        (item) =>
            typeof item.settings === 'string' ||
            Object.keys(item.settings || {}).length,
    )
    .map((item) => ({
        id: `setting-${item.id}`,
        parent_id: item.id,
        encryption_level: EncryptionLevel.None,
        settings_string:
            typeof item.settings === 'string'
                ? item.settings
                : JSON.stringify(item.settings),
        keys: Object.keys(
            typeof item.settings === 'object' ? item.settings : {},
        ),
    }));

type MockSetting = (typeof SETTINGS_DATA)[number];

const settings = generateBasicHandlers<MockSetting>(
    `${API}/settings`,
    SETTINGS_DATA,
    {
        filter: FILTER_FN,
        id_prefix: 'setting-',
    },
);

/** Old versions of settings, newest first */
const history = createMockStore<MockSetting[]>('settings_history', []);

/** Keep the old version of each changed setting */
let previous = settings();
settings.subscribe((list) => {
    const changed = previous.filter((old) => {
        const item = list.find(({ id }) => id === old.id);
        return item && item.settings_string !== old.settings_string;
    });
    previous = list;
    if (changed.length) {
        history.set([...changed, ...history()].slice(0, HISTORY_LIMIT));
    }
});

registerMockEndpoint({
    path: `${API}/settings/:id/history`,
    method: 'GET',
    callback: (event) =>
        history().filter(({ id }) => id === event.route_params.id),
});
