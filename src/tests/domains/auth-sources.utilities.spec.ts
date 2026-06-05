import { describe, expect, it } from 'vitest';
import {
    generateLDAPSourceForm,
    generateOAuthSourceForm,
    generateSAMLSourceForm,
} from '../../app/domains/auth-sources.utilities';

describe('auth-sources.utilities', () => {
    it('generates OAuth defaults and populated values', () => {
        expect(generateOAuthSourceForm()).toMatchObject({
            name: '',
            client_id: '',
            client_secret: '',
            info_mappings: {},
            authorize_params: {},
            ensure_matching: {},
            token_method: 'post',
            auth_scheme: 'request_body',
        });

        expect(
            generateOAuthSourceForm({
                name: 'OAuth',
                client_id: 'client',
                client_secret: 'secret',
                site: 'https://idp.example.com',
                scope: 'openid',
            } as any),
        ).toMatchObject({
            name: 'OAuth',
            client_id: 'client',
            client_secret: 'secret',
            site: 'https://idp.example.com',
            scope: 'openid',
        });
    });

    it('requires a SAML source and maps its values', () => {
        expect(() => generateSAMLSourceForm(undefined as any)).toThrow();
        expect(
            generateSAMLSourceForm({
                name: 'SAML',
                issuer: 'issuer',
                idp_sso_target_url: 'https://idp.example.com/sso',
                assertion_consumer_service_url: 'https://app.example.com/acs',
                request_attributes: [{ name: 'email' }],
                attribute_statements: { email: ['mail'] },
            } as any),
        ).toMatchObject({
            name: 'SAML',
            issuer: 'issuer',
            idp_sso_target_url: 'https://idp.example.com/sso',
            assertion_consumer_service_url: 'https://app.example.com/acs',
            request_attributes: [{ name: 'email' }],
            attribute_statements: { email: ['mail'] },
        });
    });

    it('requires an LDAP source and maps its values', () => {
        expect(() => generateLDAPSourceForm(undefined as any)).toThrow();
        expect(
            generateLDAPSourceForm({
                name: 'LDAP',
                host: 'ldap.example.com',
                port: 636,
                auth_method: 'ssl',
                uid: 'uid',
                base: 'dc=example,dc=com',
                bind_dn: 'cn=admin',
                password: 'secret',
                filter: '(uid=%{username})',
            } as any),
        ).toMatchObject({
            name: 'LDAP',
            host: 'ldap.example.com',
            port: 636,
            auth_method: 'ssl',
            base: 'dc=example,dc=com',
        });
    });
});
