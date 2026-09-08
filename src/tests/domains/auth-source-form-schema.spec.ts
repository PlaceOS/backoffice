import { TestBed } from '@angular/core/testing';
import { PlaceLDAPSource, PlaceSAMLSource } from '@placeos/ts-client';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
    applyLDAPSourceFormSchema,
    applyOAuthSourceFormSchema,
    applySAMLSourceFormSchema,
    generateLDAPSourceForm,
    generateOAuthSourceForm,
    generateSAMLSourceForm,
} from '../../app/domains/auth-sources.utilities';
import { createTestForm } from '../common/form-test.helpers';

vi.mock('@placeos/ts-client', () =>
    vi.importActual('@placeos/ts-client/dist/index.es.js'),
);

describe('authentication source validation', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('requires a name for an OAuth source', () => {
        const { fields } = createTestForm(
            generateOAuthSourceForm(),
            applyOAuthSourceFormSchema,
        );
        expect(fields.name().invalid()).toBe(true);
        fields.name().value.set('Corporate sign-in');
        expect(fields().valid()).toBe(true);
    });

    it('requires the SAML issuer and sign-in endpoints', () => {
        const { fields } = createTestForm(
            generateSAMLSourceForm(new PlaceSAMLSource()),
            applySAMLSourceFormSchema,
        );
        for (const field of [
            'name',
            'issuer',
            'idp_sso_target_url',
            'assertion_consumer_service_url',
        ] as const) {
            expect(fields[field]().invalid()).toBe(true);
        }
        fields.name().value.set('Corporate sign-in');
        fields.issuer().value.set('placeos');
        fields.idp_sso_target_url().value.set('https://idp.example.com/sso');
        fields
            .assertion_consumer_service_url()
            .value.set('https://example.com/saml/callback');
        expect(fields().valid()).toBe(true);
    });

    it('requires an LDAP host and search base but permits anonymous binding', () => {
        const { fields } = createTestForm(
            generateLDAPSourceForm(new PlaceLDAPSource()),
            applyLDAPSourceFormSchema,
        );
        expect(fields.host().invalid()).toBe(true);
        expect(fields.base().invalid()).toBe(true);
        fields.name().value.set('Directory');
        fields.host().value.set('ldap.example.com');
        fields.base().value.set('dc=example,dc=com');
        expect(fields().valid()).toBe(true);
    });
});
