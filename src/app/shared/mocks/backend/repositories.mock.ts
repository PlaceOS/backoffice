
import { generateBasicHandlers, API, generateID } from '../common.mock';
import { HashMap } from '../../utilities/types.utilities';

import { EngineRepositoryType } from '@placeos/ts-client';

const FILTER_FN = (item: any, q: HashMap) => {
    if (!q || Object.keys(q).length <= 0) {
        return true;
    }
    let match = true;
    if (q.q) {
        match = match && (item.name || '').toLowerCase().indexOf((q.q || '').toLowerCase()) >= 0;
    }
    return match;
};

const REPO_DATA = [{
    id: `repo-${generateID()}`,
    name: 'PlaceOS Drivers',
    folder_name: 'drivers/placeos',
    uri: 'https://github.com/PlaceOS/drivers',
    commit_hash: 'head',
    type: EngineRepositoryType.Driver
}];

/** Add basic API handlers for systems */
generateBasicHandlers(`${API}/repositories`, REPO_DATA, FILTER_FN);

