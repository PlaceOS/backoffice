import {
    MockHttpRequestHandler,
    registerMockEndpoint,
} from '@placeos/ts-client';
import { HashMap } from '../../common/types';
import {
    API,
    generateID,
    loadFromSession,
    saveToSession,
} from '../common.mock';

/** In-memory storage for auth sources with session persistence */
const OAUTH_SOURCES: Record<string, any>[] = loadFromSession('oauth_sources', []);
const SAML_SOURCES: Record<string, any>[] = loadFromSession('saml_sources', []);
const LDAP_SOURCES: Record<string, any>[] = loadFromSession('ldap_sources', []);

const createFilter = (items: Record<string, any>[]) => (q: HashMap) => {
    if (!q || Object.keys(q).length <= 0) {
        return items;
    }
    return items.filter((item) => {
        let match = true;
        if (q.authority_id) {
            match = match && item.authority_id === q.authority_id;
        }
        if (q.q) {
            match =
                match &&
                (item.name || '')
                    .toLowerCase()
                    .indexOf(((q.q as string) || '').toLowerCase()) >= 0;
        }
        return match;
    });
};

// ============ OAUTH SOURCES ============

/** GET OAuth sources list */
registerMockEndpoint({
    path: `${API}/oauth_auths`,
    metadata: [],
    method: 'GET',
    callback: (event) => createFilter(OAUTH_SOURCES)(event.query_params),
} as MockHttpRequestHandler);

/** GET OAuth source by ID */
registerMockEndpoint({
    path: `${API}/oauth_auths/:id`,
    metadata: [],
    method: 'GET',
    callback: (event) => {
        const source = OAUTH_SOURCES.find(
            (s) => s.id === event.route_params.id,
        );
        if (source) return source;
        throw { status: 404, message: 'OAuth source not found' };
    },
} as MockHttpRequestHandler);

/** POST create OAuth source */
registerMockEndpoint({
    path: `${API}/oauth_auths`,
    metadata: [],
    method: 'POST',
    callback: (event) => {
        const source = {
            id: `oauth-${generateID()}`,
            ...event.body,
            created_at: Date.now() / 1000,
            updated_at: Date.now() / 1000,
        };
        OAUTH_SOURCES.push(source);
        saveToSession('oauth_sources', OAUTH_SOURCES);
        return source;
    },
} as MockHttpRequestHandler);

/** PUT/PATCH update OAuth source */
registerMockEndpoint({
    path: `${API}/oauth_auths/:id`,
    metadata: [],
    method: 'PUT',
    callback: (event) => {
        const index = OAUTH_SOURCES.findIndex(
            (s) => s.id === event.route_params.id,
        );
        if (index >= 0) {
            OAUTH_SOURCES[index] = {
                ...OAUTH_SOURCES[index],
                ...event.body,
                updated_at: Date.now() / 1000,
            };
            saveToSession('oauth_sources', OAUTH_SOURCES);
            return OAUTH_SOURCES[index];
        }
        throw { status: 404, message: 'OAuth source not found' };
    },
} as MockHttpRequestHandler);

registerMockEndpoint({
    path: `${API}/oauth_auths/:id`,
    metadata: [],
    method: 'PATCH',
    callback: (event) => {
        const index = OAUTH_SOURCES.findIndex(
            (s) => s.id === event.route_params.id,
        );
        if (index >= 0) {
            OAUTH_SOURCES[index] = {
                ...OAUTH_SOURCES[index],
                ...event.body,
                updated_at: Date.now() / 1000,
            };
            saveToSession('oauth_sources', OAUTH_SOURCES);
            return OAUTH_SOURCES[index];
        }
        throw { status: 404, message: 'OAuth source not found' };
    },
} as MockHttpRequestHandler);

/** DELETE OAuth source */
registerMockEndpoint({
    path: `${API}/oauth_auths/:id`,
    metadata: [],
    method: 'DELETE',
    callback: (event) => {
        const index = OAUTH_SOURCES.findIndex(
            (s) => s.id === event.route_params.id,
        );
        if (index >= 0) {
            OAUTH_SOURCES.splice(index, 1);
            saveToSession('oauth_sources', OAUTH_SOURCES);
            return {};
        }
        throw { status: 404, message: 'OAuth source not found' };
    },
} as MockHttpRequestHandler);

// ============ SAML SOURCES ============

/** GET SAML sources list */
registerMockEndpoint({
    path: `${API}/saml_auths`,
    metadata: [],
    method: 'GET',
    callback: (event) => createFilter(SAML_SOURCES)(event.query_params),
} as MockHttpRequestHandler);

/** GET SAML source by ID */
registerMockEndpoint({
    path: `${API}/saml_auths/:id`,
    metadata: [],
    method: 'GET',
    callback: (event) => {
        const source = SAML_SOURCES.find((s) => s.id === event.route_params.id);
        if (source) return source;
        throw { status: 404, message: 'SAML source not found' };
    },
} as MockHttpRequestHandler);

/** POST create SAML source */
registerMockEndpoint({
    path: `${API}/saml_auths`,
    metadata: [],
    method: 'POST',
    callback: (event) => {
        const source = {
            id: `saml-${generateID()}`,
            ...event.body,
            created_at: Date.now() / 1000,
            updated_at: Date.now() / 1000,
        };
        SAML_SOURCES.push(source);
        saveToSession('saml_sources', SAML_SOURCES);
        return source;
    },
} as MockHttpRequestHandler);

/** PUT/PATCH update SAML source */
registerMockEndpoint({
    path: `${API}/saml_auths/:id`,
    metadata: [],
    method: 'PUT',
    callback: (event) => {
        const index = SAML_SOURCES.findIndex(
            (s) => s.id === event.route_params.id,
        );
        if (index >= 0) {
            SAML_SOURCES[index] = {
                ...SAML_SOURCES[index],
                ...event.body,
                updated_at: Date.now() / 1000,
            };
            saveToSession('saml_sources', SAML_SOURCES);
            return SAML_SOURCES[index];
        }
        throw { status: 404, message: 'SAML source not found' };
    },
} as MockHttpRequestHandler);

registerMockEndpoint({
    path: `${API}/saml_auths/:id`,
    metadata: [],
    method: 'PATCH',
    callback: (event) => {
        const index = SAML_SOURCES.findIndex(
            (s) => s.id === event.route_params.id,
        );
        if (index >= 0) {
            SAML_SOURCES[index] = {
                ...SAML_SOURCES[index],
                ...event.body,
                updated_at: Date.now() / 1000,
            };
            saveToSession('saml_sources', SAML_SOURCES);
            return SAML_SOURCES[index];
        }
        throw { status: 404, message: 'SAML source not found' };
    },
} as MockHttpRequestHandler);

/** DELETE SAML source */
registerMockEndpoint({
    path: `${API}/saml_auths/:id`,
    metadata: [],
    method: 'DELETE',
    callback: (event) => {
        const index = SAML_SOURCES.findIndex(
            (s) => s.id === event.route_params.id,
        );
        if (index >= 0) {
            SAML_SOURCES.splice(index, 1);
            saveToSession('saml_sources', SAML_SOURCES);
            return {};
        }
        throw { status: 404, message: 'SAML source not found' };
    },
} as MockHttpRequestHandler);

// ============ LDAP SOURCES ============

/** GET LDAP sources list */
registerMockEndpoint({
    path: `${API}/ldap_auths`,
    metadata: [],
    method: 'GET',
    callback: (event) => createFilter(LDAP_SOURCES)(event.query_params),
} as MockHttpRequestHandler);

/** GET LDAP source by ID */
registerMockEndpoint({
    path: `${API}/ldap_auths/:id`,
    metadata: [],
    method: 'GET',
    callback: (event) => {
        const source = LDAP_SOURCES.find((s) => s.id === event.route_params.id);
        if (source) return source;
        throw { status: 404, message: 'LDAP source not found' };
    },
} as MockHttpRequestHandler);

/** POST create LDAP source */
registerMockEndpoint({
    path: `${API}/ldap_auths`,
    metadata: [],
    method: 'POST',
    callback: (event) => {
        const source = {
            id: `ldap-${generateID()}`,
            ...event.body,
            created_at: Date.now() / 1000,
            updated_at: Date.now() / 1000,
        };
        LDAP_SOURCES.push(source);
        saveToSession('ldap_sources', LDAP_SOURCES);
        return source;
    },
} as MockHttpRequestHandler);

/** PUT/PATCH update LDAP source */
registerMockEndpoint({
    path: `${API}/ldap_auths/:id`,
    metadata: [],
    method: 'PUT',
    callback: (event) => {
        const index = LDAP_SOURCES.findIndex(
            (s) => s.id === event.route_params.id,
        );
        if (index >= 0) {
            LDAP_SOURCES[index] = {
                ...LDAP_SOURCES[index],
                ...event.body,
                updated_at: Date.now() / 1000,
            };
            saveToSession('ldap_sources', LDAP_SOURCES);
            return LDAP_SOURCES[index];
        }
        throw { status: 404, message: 'LDAP source not found' };
    },
} as MockHttpRequestHandler);

registerMockEndpoint({
    path: `${API}/ldap_auths/:id`,
    metadata: [],
    method: 'PATCH',
    callback: (event) => {
        const index = LDAP_SOURCES.findIndex(
            (s) => s.id === event.route_params.id,
        );
        if (index >= 0) {
            LDAP_SOURCES[index] = {
                ...LDAP_SOURCES[index],
                ...event.body,
                updated_at: Date.now() / 1000,
            };
            saveToSession('ldap_sources', LDAP_SOURCES);
            return LDAP_SOURCES[index];
        }
        throw { status: 404, message: 'LDAP source not found' };
    },
} as MockHttpRequestHandler);

/** DELETE LDAP source */
registerMockEndpoint({
    path: `${API}/ldap_auths/:id`,
    metadata: [],
    method: 'DELETE',
    callback: (event) => {
        const index = LDAP_SOURCES.findIndex(
            (s) => s.id === event.route_params.id,
        );
        if (index >= 0) {
            LDAP_SOURCES.splice(index, 1);
            saveToSession('ldap_sources', LDAP_SOURCES);
            return {};
        }
        throw { status: 404, message: 'LDAP source not found' };
    },
} as MockHttpRequestHandler);
