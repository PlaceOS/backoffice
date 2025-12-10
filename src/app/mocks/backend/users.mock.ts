import { HashMap } from '../../common/types';
import { API, generateBasicHandlers, generateID } from '../common.mock';

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
    return match;
};

const PREDFINED_USERS = [
    'Alex Sorafumo',
    'Jonathan McFarlane',
    'Stephen von Takach',
    'Alexandre Chuvand',
    'Jeremy West',
    'Phil Kheav',
    'Sravani Kotha',
].map((name) => ({
    id: `user-${generateID()}`,
    name,
    email: `${name.split(' ').join('.')}@place.tech`,
    support: Math.floor(Math.random() * 999_999) % 10 === 0,
    sys_admin: Math.floor(Math.random() * 999_999) % 10 === 0,
}));

const USER_DATA = Array(0)
    .fill(0)
    .map((_, idx) => {
        const name = `No. ${idx}`;
        return {
            id: `user-${generateID()}`,
            name,
            email: `${name.split(' ').join('.')}@place.tech`,
            support: Math.floor(Math.random() * 999_999) % 10 === 0,
            sys_admin: Math.floor(Math.random() * 999_999) % 10 === 0,
        };
    })
    .concat(PREDFINED_USERS);

const CURRENT_USER = {
    id: `current`,
    name: 'Place Admin',
    email: `admin@place.tech`,
    support: Math.floor(Math.random() * 999_999) % 10 === 0,
    sys_admin: true,
};

/** Add basic API handlers for systems */
generateBasicHandlers(`${API}/users`, [...USER_DATA, CURRENT_USER], FILTER_FN);
