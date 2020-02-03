
import { BaseMockBackend } from './base.mock';

import * as faker from 'faker';
import * as dayjs from 'dayjs';
import { padZero, randomInt } from '../../utilities/general.utilities';

let counter = 0;

export class MockAuthSourcesBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
    }

    protected load() {
        this.model.log('AUTH SOURCES', 'Loading mock data for authentication sources...');
        this.loadList();
    }

    private loadList() {
        const oauth_sources = generateOAuthAuthSource(this.model.domains);
        this.setupBasicHandlers('api/engine/v2/oauth_auths', oauth_sources, 'auth');
        this.model.auth_sources = [].concat(oauth_sources);
        const saml_sources = generateSAMLAuthSource(this.model.domains);
        this.setupBasicHandlers('api/engine/v2/saml_auths', saml_sources, 'auth');
        this.model.auth_sources = this.model.auth_sources.concat(saml_sources);
        const ldap_sources = generateLDAPAuthSource(this.model.domains);
        this.setupBasicHandlers('api/engine/v2/ldap_auths', ldap_sources, 'auth');
        this.model.auth_sources = this.model.auth_sources.concat(ldap_sources);
        this.state.next(true);
    }

    public search(data, fragment) {
        const authority = fragment.authority_id || fragment.authority;
        if (authority) {
            data = data.filter((a) => a.authority_id === authority);
        }
        return super.search(data, fragment);
    }
}

export function generateOAuthAuthSource(domain_list: any[]) {
    const list = Array(randomInt(10) + 2).fill(0).map((_, idx) => {
        return {
            id: `auth-${padZero(counter++, 4)}`,
            name: `OAuth Source ${idx + 1}`,
            authority_id: domain_list[randomInt(domain_list.length)].id,
            client_id: `${padZero(randomInt(999_999_999), 10)}`,
            client_secret: `${padZero(randomInt(999_999_999), 10)}`,
            info_mappings: {
                name: 'name',
                email: 'email'
            },
            site: `https://${randomInt(99999)}.acaengine.com`,
            authorize_url: 'oauth/authorise',
            token_method: 'post',
            auth_scheme: randomInt(9999) % 2 === 0 ? 'request_body' : 'basic_auth',
            token_url: 'oauth/token',
            scope: 'admin',
            raw_info_url: 'user/details'
        };
    });
    return list;
}

export function generateLDAPAuthSource(domain_list: any[]) {
    const list = Array(randomInt(10) + 2).fill(0).map(_ => {
        const num = randomInt(9999999) % 3;
        return {
            id: `auth-${padZero(counter++, 4)}`,
            name: `LDAP Source ${_ + 1}`,
            authority_id: domain_list[randomInt(domain_list.length)].id,
            host: '',
            port: randomInt(65535, 1000),
            auth_method: num === 0 ? 'plain' : num === 1 ? 'ssl' : 'tls',
            uid: `${padZero(randomInt(999_999_999), 10)}`,
            base: 'acaengine.com',
            bind_dn: 'another.acaengine.com',
            password: `${padZero(randomInt(999_999_999), 10)}`
        };
    });
    return list;
}

export function generateSAMLAuthSource(domain_list: any[]) {
    const list = Array(randomInt(10) + 2).fill(0).map(_ => {
        return {
            id: `auth-${padZero(counter++, 4)}`,
            name: `SAML Source ${_ + 1}`,
            authority_id: domain_list[randomInt(domain_list.length)].id,
            issuer: 'sso.acaengine.com',
            idp_sso_target_url_runtime_params: {},
            name_identifier_format: '',
            uid_attribute: '',
            assertion_consumer_service_url: '',
            idp_sso_target_url: '',
            idp_cert: '',
            idp_cert_fingerprint: '',
            attribute_service_name: '',
            attribute_statements: {},
            request_attributes: [],
            idp_slo_target_url: '',
            slo_default_relay_state: ''
        };
    });
    return list;
}

