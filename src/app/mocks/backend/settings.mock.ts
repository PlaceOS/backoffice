import { HashMap } from '../../common/types';
import {
    API,
    generateBasicHandlers,
    generateID,
    listenToHandlerChanges,
} from '../common.mock';

import { EncryptionLevel } from '@placeos/ts-client';

const FILTER_FN = (item: Record<string, unknown>, q: HashMap) => {
    if (!q || Object.keys(q).length <= 0) {
        return true;
    }
    let match = true;
    if (q.q) {
        match =
            match &&
            `${item.name || ''}`
                .toLowerCase()
                .indexOf(((q.q as string) || '').toLowerCase()) >= 0;
    }
    if (q.parent_id) {
        match = match && item.parent_id === q.parent_id;
    }
    return match;
};

const SETTINGS_DATA: Record<string, unknown>[] = [];

const handle_items_fn = (list: Record<string, unknown>[]) => {
    list.forEach((item) => {
        if (
            item.settings &&
            !SETTINGS_DATA.find((s) => s.parent_id === item.id)
        ) {
            SETTINGS_DATA.push({
                id: `setting-${generateID()}`,
                parent_id: item.id,
                encryption_level: EncryptionLevel.None,
                settings_string:
                    item.settings instanceof Object
                        ? JSON.stringify(item.settings)
                        : item.settings,
            });
        }
    });
};

let obs = listenToHandlerChanges(`${API}/systems`);
if (obs) {
    obs.subscribe(handle_items_fn);
}
obs = listenToHandlerChanges(`${API}/modules`);
if (obs) {
    obs.subscribe(handle_items_fn);
}
obs = listenToHandlerChanges(`${API}/zones`);
if (obs) {
    obs.subscribe(handle_items_fn);
}
obs = listenToHandlerChanges(`${API}/drivers`);
if (obs) {
    obs.subscribe(handle_items_fn);
}

/** Add basic API handlers for systems */
generateBasicHandlers(`${API}/settings`, SETTINGS_DATA, FILTER_FN);
