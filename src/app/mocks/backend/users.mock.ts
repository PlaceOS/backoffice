import { registerMockEndpoint } from '@placeos/ts-client';
import { HashMap } from '../../common/types';
import {
    API,
    endpointData,
    generateBasicHandlers,
    notFound,
    updateItem,
} from '../common.mock';
import { UI_MOCKS } from '../data/ui-mocks';
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

/**
 * Users of the user-interfaces mocks. IT staff are support users, and the
 * user that the UI apps sign in as (`current_user_id`) is an admin
 */
const USER_DATA = UI_MOCKS.users.map((user) => ({
    ...user,
    authority_id: AUTHORITY_ID,
    support: user.department === 'IT',
}));

/** The signed-in user. Registered before `users/:id` */
registerMockEndpoint({
    path: `${API}/users/current`,
    method: 'GET',
    callback: () =>
        endpointData(`${API}/users`).find(
            ({ id }) => id === UI_MOCKS.current_user_id,
        ) || notFound('User'),
});

/** Add basic API handlers for users */
generateBasicHandlers<MockUser>(`${API}/users`, USER_DATA.map(withNames), {
    filter: FILTER_FN,
    prepare: withNames,
    id_prefix: 'user-',
});

/** Restore a deleted user */
registerMockEndpoint({
    path: `${API}/users/:id/revive`,
    method: 'POST',
    callback: (event) =>
        updateItem(`${API}/users`, event.route_params.id, { deleted: false }),
});
