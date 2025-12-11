import { describe, it, expect, vi } from 'vitest';
import { FormGroup, Validators } from '@angular/forms';

// Mock @placeos/ts-client
vi.mock('@placeos/ts-client', () => ({
    PlaceDomain: class {},
}));

import { generateDomainFormFields } from '../../app/domains/domains.utilities';

describe('domains.utilities', () => {
    describe('generateDomainFormFields', () => {
        describe('without domain argument', () => {
            it('should return a FormGroup', () => {
                const form = generateDomainFormFields();
                expect(form).toBeInstanceOf(FormGroup);
            });

            it('should have name control', () => {
                const form = generateDomainFormFields();
                expect(form.get('name')).toBeTruthy();
            });

            it('should have domain control', () => {
                const form = generateDomainFormFields();
                expect(form.get('domain')).toBeTruthy();
            });

            it('should have login_url control', () => {
                const form = generateDomainFormFields();
                expect(form.get('login_url')).toBeTruthy();
            });

            it('should have logout_url control', () => {
                const form = generateDomainFormFields();
                expect(form.get('logout_url')).toBeTruthy();
            });

            it('should have config control', () => {
                const form = generateDomainFormFields();
                expect(form.get('config')).toBeTruthy();
            });

            it('should have internals control', () => {
                const form = generateDomainFormFields();
                expect(form.get('internals')).toBeTruthy();
            });

            it('should have description control', () => {
                const form = generateDomainFormFields();
                expect(form.get('description')).toBeTruthy();
            });

            it('should have email_domains control', () => {
                const form = generateDomainFormFields();
                expect(form.get('email_domains')).toBeTruthy();
            });

            it('should have empty default values', () => {
                const form = generateDomainFormFields();
                expect(form.get('name')?.value).toBe('');
                expect(form.get('domain')?.value).toBe('');
                expect(form.get('login_url')?.value).toBe('');
                expect(form.get('logout_url')?.value).toBe('');
                expect(form.get('config')?.value).toBe('');
                expect(form.get('internals')?.value).toBe('');
                expect(form.get('description')?.value).toBe('');
            });

            it('should have empty array for email_domains default', () => {
                const form = generateDomainFormFields();
                expect(form.get('email_domains')?.value).toEqual([]);
            });
        });

        describe('with domain argument', () => {
            const mock_domain = {
                name: 'Test Domain',
                domain: 'test.example.com',
                login_url: '/login',
                logout_url: '/logout',
                config: '{"key": "value"}',
                internals: '{"internal": true}',
                description: 'Test description',
                email_domains: ['example.com', 'test.com'],
            } as any;

            it('should populate name from domain', () => {
                const form = generateDomainFormFields(mock_domain);
                expect(form.get('name')?.value).toBe('Test Domain');
            });

            it('should populate domain from domain', () => {
                const form = generateDomainFormFields(mock_domain);
                expect(form.get('domain')?.value).toBe('test.example.com');
            });

            it('should populate login_url from domain', () => {
                const form = generateDomainFormFields(mock_domain);
                expect(form.get('login_url')?.value).toBe('/login');
            });

            it('should populate logout_url from domain', () => {
                const form = generateDomainFormFields(mock_domain);
                expect(form.get('logout_url')?.value).toBe('/logout');
            });

            it('should populate config from domain', () => {
                const form = generateDomainFormFields(mock_domain);
                expect(form.get('config')?.value).toBe('{"key": "value"}');
            });

            it('should populate internals from domain', () => {
                const form = generateDomainFormFields(mock_domain);
                expect(form.get('internals')?.value).toBe('{"internal": true}');
            });

            it('should populate description from domain', () => {
                const form = generateDomainFormFields(mock_domain);
                expect(form.get('description')?.value).toBe('Test description');
            });

            it('should populate email_domains from domain', () => {
                const form = generateDomainFormFields(mock_domain);
                expect(form.get('email_domains')?.value).toEqual([
                    'example.com',
                    'test.com',
                ]);
            });
        });

        describe('validation', () => {
            it('should require name field', () => {
                const form = generateDomainFormFields();
                expect(form.get('name')?.valid).toBe(false);
                expect(form.get('name')?.errors?.['required']).toBeTruthy();
            });

            it('should validate name when provided', () => {
                const form = generateDomainFormFields();
                form.get('name')?.setValue('Test');
                expect(form.get('name')?.valid).toBe(true);
            });

            it('should require domain field', () => {
                const form = generateDomainFormFields();
                expect(form.get('domain')?.valid).toBe(false);
                expect(form.get('domain')?.errors?.['required']).toBeTruthy();
            });

            it('should validate domain pattern for valid domain', () => {
                const form = generateDomainFormFields();
                form.get('domain')?.setValue('test.example.com');
                expect(form.get('domain')?.valid).toBe(true);
            });

            it('should validate domain pattern with underscores', () => {
                const form = generateDomainFormFields();
                form.get('domain')?.setValue('test_domain');
                expect(form.get('domain')?.valid).toBe(true);
            });

            it('should validate domain pattern with hyphens', () => {
                const form = generateDomainFormFields();
                form.get('domain')?.setValue('test-domain');
                expect(form.get('domain')?.valid).toBe(true);
            });

            it('should validate domain pattern with dots', () => {
                const form = generateDomainFormFields();
                form.get('domain')?.setValue('sub.domain.example.com');
                expect(form.get('domain')?.valid).toBe(true);
            });

            it('should invalidate domain with spaces', () => {
                const form = generateDomainFormFields();
                form.get('domain')?.setValue('test domain');
                expect(form.get('domain')?.valid).toBe(false);
                expect(form.get('domain')?.errors?.['pattern']).toBeTruthy();
            });

            it('should invalidate domain with special characters', () => {
                const form = generateDomainFormFields();
                form.get('domain')?.setValue('test@domain');
                expect(form.get('domain')?.valid).toBe(false);
            });

            it('should not require login_url', () => {
                const form = generateDomainFormFields();
                expect(form.get('login_url')?.valid).toBe(true);
            });

            it('should not require logout_url', () => {
                const form = generateDomainFormFields();
                expect(form.get('logout_url')?.valid).toBe(true);
            });

            it('should not require config', () => {
                const form = generateDomainFormFields();
                expect(form.get('config')?.valid).toBe(true);
            });

            it('should not require description', () => {
                const form = generateDomainFormFields();
                expect(form.get('description')?.valid).toBe(true);
            });

            it('should be invalid without required fields', () => {
                const form = generateDomainFormFields();
                expect(form.valid).toBe(false);
            });

            it('should be valid with all required fields', () => {
                const form = generateDomainFormFields();
                form.get('name')?.setValue('Test');
                form.get('domain')?.setValue('test.example.com');
                expect(form.valid).toBe(true);
            });
        });
    });
});
