import { HashMap } from '../../common/types';
import { API, generateBasicHandlers, nameFilter } from '../common.mock';

/** Matches `q` against the name and `authority_id` against the source */
const FILTER_FN = (item: Record<string, unknown>, q: HashMap) =>
    nameFilter(item, q) &&
    (!q.authority_id || item.authority_id === q.authority_id);

generateBasicHandlers(`${API}/oauth_auths`, [], {
    filter: FILTER_FN,
    id_prefix: 'oauth-',
});

generateBasicHandlers(`${API}/saml_auths`, [], {
    filter: FILTER_FN,
    id_prefix: 'saml-',
});

generateBasicHandlers(`${API}/ldap_auths`, [], {
    filter: FILTER_FN,
    id_prefix: 'ldap-',
});
