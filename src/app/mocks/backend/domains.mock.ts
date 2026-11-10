import { registerMockEndpoint } from '@placeos/ts-client';
import { API, DOMAIN, generateBasicHandlers, nameFilter } from '../common.mock';

/** Id of the authority the ts-client mock signs in to. Every mock user and
 *  group belongs to it */
export const AUTHORITY_ID = 'mock-authority';

const DOMAIN_DATA = [
    {
        id: AUTHORITY_ID,
        name: 'Place Technology',
        domain: DOMAIN,
        email_domains: [DOMAIN],
    },
];

/** Add basic API handlers for domains */
generateBasicHandlers(`${API}/domains`, DOMAIN_DATA, {
    filter: nameFilter,
    id_prefix: 'authority-',
});

/** Azure admin consent link for the domain */
registerMockEndpoint({
    path: `${API}/admin_consent/:id`,
    method: 'GET',
    callback: () => ({ url: 'about:blank' }),
});
