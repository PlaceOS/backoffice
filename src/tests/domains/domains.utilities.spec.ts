import { describe, expect, it } from 'vitest';
import { generateDomainFormModel } from '../../app/domains/domains.utilities';

describe('domains.utilities', () => {
    describe('generateDomainFormModel', () => {
        it('returns empty defaults', () => {
            expect(generateDomainFormModel()).toEqual({
                name: '',
                domain: '',
                login_url: '',
                logout_url: '',
                config: '',
                internals: '',
                description: '',
                email_domains: [],
            });
        });

        it('populates values from a domain', () => {
            const model = generateDomainFormModel({
                name: 'Test Domain',
                domain: 'test.example.com',
                login_url: '/login',
                logout_url: '/logout',
                config: { theme: 'dark' },
                internals: { debug: true },
                description: 'A test domain',
                email_domains: ['example.com'],
            } as any);

            expect(model).toMatchObject({
                name: 'Test Domain',
                domain: 'test.example.com',
                login_url: '/login',
                logout_url: '/logout',
                config: { theme: 'dark' },
                internals: { debug: true },
                description: 'A test domain',
                email_domains: ['example.com'],
            });
        });
    });
});
