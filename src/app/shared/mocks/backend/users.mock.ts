
import { generateBasicHandlers, generateID, API } from '../common.mock';
import { HashMap } from '../../utilities/types.utilities';

import * as faker from 'faker';

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

const PREDFINED_USERS = [
    'Alex Sorafumo',
    'Jonathan McFarlane',
    'Stephen von Takach',
    'Alexandre Chuvand',
    'Jeremy West',
    'Phil Kheav',
    'Sravani Kotha'
].map((name) => ({
    id: `user-${generateID()}`,
    name,
    email: `${name.split(' ').join('.')}@place.tech`,
    support: Math.floor(Math.random() * 999_999) % 10 === 0,
    sys_admin: Math.floor(Math.random() * 999_999) % 10 === 0
}));

const USER_DATA = Array(30).fill(0).map(() => {
    const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    return {
        id: `user-${generateID()}`,
        name,
        email: `${name.split(' ').join('.')}@place.tech`,
        support: Math.floor(Math.random() * 999_999) % 10 === 0,
        sys_admin: Math.floor(Math.random() * 999_999) % 10 === 0
    }
}).concat(PREDFINED_USERS);

const CURRENT_USER = {
    id: `current`,
    name: 'Place Admin',
    email: `admin@place.tech`,
    support: Math.floor(Math.random() * 999_999) % 10 === 0,
    sys_admin: Math.floor(Math.random() * 999_999) % 10 === 0
}

/** Add basic API handlers for systems */
generateBasicHandlers(`${API}/users`, [...USER_DATA, CURRENT_USER], FILTER_FN);
