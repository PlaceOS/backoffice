import { describe, it, expect, vi } from 'vitest';
import { FormGroup } from '@angular/forms';

// Mock @placeos/ts-client
vi.mock('@placeos/ts-client', () => ({
    PlaceOAuthSource: class {},
    PlaceSAMLSource: class {},
    PlaceLDAPSource: class {},
}));

import {
    generateOAuthSourceForm,
    generateSAMLSourceForm,
    generateLDAPSourceForm,
} from '../../app/domains/auth-sources.utilities';

describe('auth-sources.utilities', () => {
    describe('generateOAuthSourceForm', () => {
        describe('form structure', () => {
            it('should return a FormGroup', () => {
                const form = generateOAuthSourceForm();
                expect(form).toBeInstanceOf(FormGroup);
            });

            it('should have name control', () => {
                const form = generateOAuthSourceForm();
                expect(form.get('name')).toBeTruthy();
            });

            it('should have client_id control', () => {
                const form = generateOAuthSourceForm();
                expect(form.get('client_id')).toBeTruthy();
            });

            it('should have client_secret control', () => {
                const form = generateOAuthSourceForm();
                expect(form.get('client_secret')).toBeTruthy();
            });

            it('should have info_mappings control', () => {
                const form = generateOAuthSourceForm();
                expect(form.get('info_mappings')).toBeTruthy();
            });

            it('should have authorize_params control', () => {
                const form = generateOAuthSourceForm();
                expect(form.get('authorize_params')).toBeTruthy();
            });

            it('should have ensure_matching control', () => {
                const form = generateOAuthSourceForm();
                expect(form.get('ensure_matching')).toBeTruthy();
            });

            it('should have site control', () => {
                const form = generateOAuthSourceForm();
                expect(form.get('site')).toBeTruthy();
            });

            it('should have authorize_url control', () => {
                const form = generateOAuthSourceForm();
                expect(form.get('authorize_url')).toBeTruthy();
            });

            it('should have token_method control', () => {
                const form = generateOAuthSourceForm();
                expect(form.get('token_method')).toBeTruthy();
            });

            it('should have auth_scheme control', () => {
                const form = generateOAuthSourceForm();
                expect(form.get('auth_scheme')).toBeTruthy();
            });

            it('should have token_url control', () => {
                const form = generateOAuthSourceForm();
                expect(form.get('token_url')).toBeTruthy();
            });

            it('should have scope control', () => {
                const form = generateOAuthSourceForm();
                expect(form.get('scope')).toBeTruthy();
            });

            it('should have raw_info_url control', () => {
                const form = generateOAuthSourceForm();
                expect(form.get('raw_info_url')).toBeTruthy();
            });
        });

        describe('default values', () => {
            it('should have empty defaults', () => {
                const form = generateOAuthSourceForm();
                expect(form.get('name')?.value).toBe('');
                expect(form.get('client_id')?.value).toBe('');
                expect(form.get('client_secret')?.value).toBe('');
                expect(form.get('site')?.value).toBe('');
                expect(form.get('authorize_url')?.value).toBe('');
                expect(form.get('token_url')?.value).toBe('');
                expect(form.get('scope')?.value).toBe('');
                expect(form.get('raw_info_url')?.value).toBe('');
            });

            it('should have object defaults for mappings', () => {
                const form = generateOAuthSourceForm();
                expect(form.get('info_mappings')?.value).toEqual({});
                expect(form.get('authorize_params')?.value).toEqual({});
                expect(form.get('ensure_matching')?.value).toEqual({});
            });

            it('should have token_method default to post', () => {
                const form = generateOAuthSourceForm();
                expect(form.get('token_method')?.value).toBe('post');
            });

            it('should have auth_scheme default to request_body', () => {
                const form = generateOAuthSourceForm();
                expect(form.get('auth_scheme')?.value).toBe('request_body');
            });
        });

        describe('with auth source data', () => {
            const mock_oauth = {
                name: 'Google OAuth',
                client_id: 'client-123',
                client_secret: 'secret-456',
                info_mappings: { email: 'email' },
                authorize_params: { prompt: 'consent' },
                ensure_matching: { domain: 'example.com' },
                site: 'https://accounts.google.com',
                authorize_url: '/o/oauth2/auth',
                token_method: 'get',
                auth_scheme: 'basic_auth',
                token_url: '/o/oauth2/token',
                scope: 'email profile',
                raw_info_url: '/userinfo',
            } as any;

            it('should populate all fields from auth source', () => {
                const form = generateOAuthSourceForm(mock_oauth);
                expect(form.get('name')?.value).toBe('Google OAuth');
                expect(form.get('client_id')?.value).toBe('client-123');
                expect(form.get('client_secret')?.value).toBe('secret-456');
                expect(form.get('site')?.value).toBe(
                    'https://accounts.google.com',
                );
                expect(form.get('scope')?.value).toBe('email profile');
            });

            it('should populate object fields', () => {
                const form = generateOAuthSourceForm(mock_oauth);
                expect(form.get('info_mappings')?.value).toEqual({
                    email: 'email',
                });
                expect(form.get('authorize_params')?.value).toEqual({
                    prompt: 'consent',
                });
            });
        });

        describe('validation', () => {
            it('should require name', () => {
                const form = generateOAuthSourceForm();
                expect(form.get('name')?.valid).toBe(false);
                expect(form.get('name')?.errors?.['required']).toBeTruthy();
            });

            it('should validate name when provided', () => {
                const form = generateOAuthSourceForm();
                form.get('name')?.setValue('OAuth Provider');
                expect(form.get('name')?.valid).toBe(true);
            });

            it('should not require other fields', () => {
                const form = generateOAuthSourceForm();
                expect(form.get('client_id')?.valid).toBe(true);
                expect(form.get('site')?.valid).toBe(true);
                expect(form.get('scope')?.valid).toBe(true);
            });
        });
    });

    describe('generateSAMLSourceForm', () => {
        const min_saml_source = {
            name: 'SAML Provider',
            issuer: 'https://idp.example.com',
            idp_sso_target_url: 'https://idp.example.com/sso',
            assertion_consumer_service_url: 'https://app.example.com/saml/acs',
        } as any;

        describe('form structure', () => {
            it('should return a FormGroup', () => {
                const form = generateSAMLSourceForm(min_saml_source);
                expect(form).toBeInstanceOf(FormGroup);
            });

            it('should have name control', () => {
                const form = generateSAMLSourceForm(min_saml_source);
                expect(form.get('name')).toBeTruthy();
            });

            it('should have issuer control', () => {
                const form = generateSAMLSourceForm(min_saml_source);
                expect(form.get('issuer')).toBeTruthy();
            });

            it('should have idp_sso_target_url control', () => {
                const form = generateSAMLSourceForm(min_saml_source);
                expect(form.get('idp_sso_target_url')).toBeTruthy();
            });

            it('should have assertion_consumer_service_url control', () => {
                const form = generateSAMLSourceForm(min_saml_source);
                expect(form.get('assertion_consumer_service_url')).toBeTruthy();
            });

            it('should have idp_cert control', () => {
                const form = generateSAMLSourceForm(min_saml_source);
                expect(form.get('idp_cert')).toBeTruthy();
            });

            it('should have idp_cert_fingerprint control', () => {
                const form = generateSAMLSourceForm(min_saml_source);
                expect(form.get('idp_cert_fingerprint')).toBeTruthy();
            });

            it('should have idp_slo_target_url control', () => {
                const form = generateSAMLSourceForm(min_saml_source);
                expect(form.get('idp_slo_target_url')).toBeTruthy();
            });
        });

        it('should throw error when no auth source provided', () => {
            expect(() => generateSAMLSourceForm(null as any)).toThrow(
                'No OAuth source passed to generate form fields',
            );
        });

        it('should throw error when undefined auth source', () => {
            expect(() => generateSAMLSourceForm(undefined as any)).toThrow();
        });

        describe('validation', () => {
            it('should require name', () => {
                const source = { ...min_saml_source, name: '' };
                const form = generateSAMLSourceForm(source);
                expect(form.get('name')?.valid).toBe(false);
                expect(form.get('name')?.errors?.['required']).toBeTruthy();
            });

            it('should require issuer', () => {
                const source = { ...min_saml_source, issuer: '' };
                const form = generateSAMLSourceForm(source);
                expect(form.get('issuer')?.valid).toBe(false);
                expect(form.get('issuer')?.errors?.['required']).toBeTruthy();
            });

            it('should require idp_sso_target_url', () => {
                const source = { ...min_saml_source, idp_sso_target_url: '' };
                const form = generateSAMLSourceForm(source);
                expect(form.get('idp_sso_target_url')?.valid).toBe(false);
            });

            it('should require assertion_consumer_service_url', () => {
                const source = {
                    ...min_saml_source,
                    assertion_consumer_service_url: '',
                };
                const form = generateSAMLSourceForm(source);
                expect(
                    form.get('assertion_consumer_service_url')?.valid,
                ).toBe(false);
            });

            it('should be valid with all required fields', () => {
                const form = generateSAMLSourceForm(min_saml_source);
                expect(form.valid).toBe(true);
            });
        });

        describe('with full data', () => {
            const full_saml = {
                ...min_saml_source,
                name_identifier_format: 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
                request_attributes: ['email', 'name'],
                uid_attribute: 'email',
                idp_cert: 'MIIC...cert',
                idp_cert_fingerprint: 'AB:CD:EF:12',
                attribute_service_name: 'AttributeService',
                attribute_statements: { email: ['mail'] },
                idp_slo_target_url: 'https://idp.example.com/slo',
                slo_default_relay_state: 'https://app.example.com',
            } as any;

            it('should populate optional fields', () => {
                const form = generateSAMLSourceForm(full_saml);
                expect(form.get('name_identifier_format')?.value).toBe(
                    'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
                );
                expect(form.get('uid_attribute')?.value).toBe('email');
                expect(form.get('idp_cert')?.value).toBe('MIIC...cert');
            });

            it('should populate array and object fields', () => {
                const form = generateSAMLSourceForm(full_saml);
                expect(form.get('request_attributes')?.value).toEqual([
                    'email',
                    'name',
                ]);
                expect(form.get('attribute_statements')?.value).toEqual({
                    email: ['mail'],
                });
            });
        });
    });

    describe('generateLDAPSourceForm', () => {
        const min_ldap_source = {
            name: 'LDAP Server',
            host: 'ldap.example.com',
            base: 'dc=example,dc=com',
        } as any;

        describe('form structure', () => {
            it('should return a FormGroup', () => {
                const form = generateLDAPSourceForm(min_ldap_source);
                expect(form).toBeInstanceOf(FormGroup);
            });

            it('should have name control', () => {
                const form = generateLDAPSourceForm(min_ldap_source);
                expect(form.get('name')).toBeTruthy();
            });

            it('should have host control', () => {
                const form = generateLDAPSourceForm(min_ldap_source);
                expect(form.get('host')).toBeTruthy();
            });

            it('should have port control', () => {
                const form = generateLDAPSourceForm(min_ldap_source);
                expect(form.get('port')).toBeTruthy();
            });

            it('should have auth_method control', () => {
                const form = generateLDAPSourceForm(min_ldap_source);
                expect(form.get('auth_method')).toBeTruthy();
            });

            it('should have uid control', () => {
                const form = generateLDAPSourceForm(min_ldap_source);
                expect(form.get('uid')).toBeTruthy();
            });

            it('should have base control', () => {
                const form = generateLDAPSourceForm(min_ldap_source);
                expect(form.get('base')).toBeTruthy();
            });

            it('should have bind_dn control', () => {
                const form = generateLDAPSourceForm(min_ldap_source);
                expect(form.get('bind_dn')).toBeTruthy();
            });

            it('should have password control', () => {
                const form = generateLDAPSourceForm(min_ldap_source);
                expect(form.get('password')).toBeTruthy();
            });

            it('should have filter control', () => {
                const form = generateLDAPSourceForm(min_ldap_source);
                expect(form.get('filter')).toBeTruthy();
            });
        });

        it('should throw error when no auth source provided', () => {
            expect(() => generateLDAPSourceForm(null as any)).toThrow(
                'No OAuth source passed to generate form fields',
            );
        });

        describe('default values', () => {
            it('should have auth_method default to plain', () => {
                const form = generateLDAPSourceForm(min_ldap_source);
                expect(form.get('auth_method')?.value).toBe('plain');
            });

            it('should have empty defaults for optional fields', () => {
                const form = generateLDAPSourceForm(min_ldap_source);
                expect(form.get('uid')?.value).toBe('');
                expect(form.get('bind_dn')?.value).toBe('');
                expect(form.get('password')?.value).toBe('');
                expect(form.get('filter')?.value).toBe('');
            });
        });

        describe('validation', () => {
            it('should require name', () => {
                const source = { ...min_ldap_source, name: '' };
                const form = generateLDAPSourceForm(source);
                expect(form.get('name')?.valid).toBe(false);
            });

            it('should require host', () => {
                const source = { ...min_ldap_source, host: '' };
                const form = generateLDAPSourceForm(source);
                expect(form.get('host')?.valid).toBe(false);
            });

            it('should require base', () => {
                const source = { ...min_ldap_source, base: '' };
                const form = generateLDAPSourceForm(source);
                expect(form.get('base')?.valid).toBe(false);
            });

            it('should validate port minimum', () => {
                const form = generateLDAPSourceForm(min_ldap_source);
                form.get('port')?.setValue(0);
                expect(form.get('port')?.valid).toBe(false);
                expect(form.get('port')?.errors?.['min']).toBeTruthy();
            });

            it('should validate port maximum', () => {
                const source = { ...min_ldap_source, port: 65536 };
                const form = generateLDAPSourceForm(source);
                expect(form.get('port')?.valid).toBe(false);
                expect(form.get('port')?.errors?.['max']).toBeTruthy();
            });

            it('should accept valid port', () => {
                const source = { ...min_ldap_source, port: 389 };
                const form = generateLDAPSourceForm(source);
                expect(form.get('port')?.valid).toBe(true);
            });

            it('should accept LDAPS port', () => {
                const source = { ...min_ldap_source, port: 636 };
                const form = generateLDAPSourceForm(source);
                expect(form.get('port')?.valid).toBe(true);
            });

            it('should be valid with all required fields', () => {
                const form = generateLDAPSourceForm(min_ldap_source);
                expect(form.valid).toBe(true);
            });
        });

        describe('with full data', () => {
            const full_ldap = {
                ...min_ldap_source,
                port: 636,
                auth_method: 'simple',
                uid: 'sAMAccountName',
                bind_dn: 'cn=admin,dc=example,dc=com',
                password: 'secret',
                filter: '(objectClass=person)',
            } as any;

            it('should populate all fields', () => {
                const form = generateLDAPSourceForm(full_ldap);
                expect(form.get('port')?.value).toBe(636);
                expect(form.get('auth_method')?.value).toBe('simple');
                expect(form.get('uid')?.value).toBe('sAMAccountName');
                expect(form.get('bind_dn')?.value).toBe(
                    'cn=admin,dc=example,dc=com',
                );
                expect(form.get('filter')?.value).toBe('(objectClass=person)');
            });
        });
    });
});
