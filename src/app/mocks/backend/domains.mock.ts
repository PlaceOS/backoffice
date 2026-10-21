import { HashMap } from '../../common/types';
import { API, DOMAIN, generateBasicHandlers } from '../common.mock';

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
generateBasicHandlers(`${API}/domains`, DOMAIN_DATA, FILTER_FN);
