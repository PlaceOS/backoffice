import { HashMap } from '../../common/types';
import { API, generateBasicHandlers, generateID } from '../common.mock';
import { AUTHORITY_ID } from './domains.mock';

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
    if (q.authority_id) {
        match = match && item.authority_id === q.authority_id;
    }
    return match;
};

type MockUser = Record<string, unknown>;

/** Keeps `name` and `first_name`/`last_name` in step, like the API does */
function withNames(user: MockUser): MockUser {
    if (user.first_name || user.last_name) {
        const name = `${user.first_name || ''} ${user.last_name || ''}`;
        return { ...user, name: name.trim() };
    }
    const [first_name, ...rest] = `${user.name || ''}`.split(' ');
    return { ...user, first_name, last_name: rest.join(' ') };
}

const PREDFINED_USERS = [
    'Alex Sorafumo',
    'Jonathan McFarlane',
    'Stephen von Takach',
    'Alexandre Chuvand',
    'Jeremy West',
    'Phil Kheav',
    'Sravani Kotha',
].map((name) => ({
    // Stable ids, so saved data that points to a user survives a reload
    id: `user-${name.toLowerCase().replace(/\W+/g, '-')}`,
    name,
    email: `${name.split(' ').join('.')}@place.tech`,
    authority_id: AUTHORITY_ID,
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
            authority_id: AUTHORITY_ID,
            support: Math.floor(Math.random() * 999_999) % 10 === 0,
            sys_admin: Math.floor(Math.random() * 999_999) % 10 === 0,
        };
    })
    .concat(PREDFINED_USERS);

const CURRENT_USER = {
    id: `current`,
    name: 'Place Admin',
    email: `admin@place.tech`,
    authority_id: AUTHORITY_ID,
    support: Math.floor(Math.random() * 999_999) % 10 === 0,
    sys_admin: true,
};

/** Add basic API handlers for users */
generateBasicHandlers<MockUser>(
    `${API}/users`,
    [...USER_DATA, CURRENT_USER].map(withNames),
    FILTER_FN,
    withNames,
);
