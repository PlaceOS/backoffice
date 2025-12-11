import { describe, it, expect, vi } from 'vitest';
import { FormGroup } from '@angular/forms';

// Mock @placeos/ts-client
vi.mock('@placeos/ts-client', () => ({
    PlaceApplication: class {},
}));

// Mock validation module
vi.mock('../../app/common/validation', () => ({
    validateURL: vi.fn((control) => {
        const value = control.value;
        if (!value) return null;
        try {
            new URL(value);
            return null;
        } catch {
            return { invalidUrl: true };
        }
    }),
}));

import { generateApplicationFormFields } from '../../app/domains/applications.utilities';

describe('applications.utilities', () => {
    describe('generateApplicationFormFields', () => {
        describe('form structure', () => {
            it('should return a FormGroup', () => {
                const form = generateApplicationFormFields();
                expect(form).toBeInstanceOf(FormGroup);
            });

            it('should have name control', () => {
                const form = generateApplicationFormFields();
                expect(form.get('name')).toBeTruthy();
            });

            it('should have scopes control', () => {
                const form = generateApplicationFormFields();
                expect(form.get('scopes')).toBeTruthy();
            });

            it('should have skip_authorization control', () => {
                const form = generateApplicationFormFields();
                expect(form.get('skip_authorization')).toBeTruthy();
            });

            it('should have redirect_uri control', () => {
                const form = generateApplicationFormFields();
                expect(form.get('redirect_uri')).toBeTruthy();
            });

            it('should have client_id control', () => {
                const form = generateApplicationFormFields();
                expect(form.get('client_id')).toBeTruthy();
            });

            it('should have preserve_client_id control', () => {
                const form = generateApplicationFormFields();
                expect(form.get('preserve_client_id')).toBeTruthy();
            });
        });

        describe('default values', () => {
            it('should have empty name by default', () => {
                const form = generateApplicationFormFields();
                expect(form.get('name')?.value).toBe('');
            });

            it('should have empty scopes by default', () => {
                const form = generateApplicationFormFields();
                expect(form.get('scopes')?.value).toBe('');
            });

            it('should have skip_authorization false by default', () => {
                const form = generateApplicationFormFields();
                expect(form.get('skip_authorization')?.value).toBe(false);
            });

            it('should have empty redirect_uri by default', () => {
                const form = generateApplicationFormFields();
                expect(form.get('redirect_uri')?.value).toBe('');
            });

            it('should have empty client_id by default', () => {
                const form = generateApplicationFormFields();
                expect(form.get('client_id')?.value).toBe('');
            });

            it('should have preserve_client_id false by default', () => {
                const form = generateApplicationFormFields();
                expect(form.get('preserve_client_id')?.value).toBe(false);
            });
        });

        describe('with application data', () => {
            const mock_app = {
                name: 'Test Application',
                scopes: 'read write',
                skip_authorization: true,
                redirect_uri: 'https://app.example.com/callback',
                uid: 'app-client-123',
            } as any;

            it('should populate name', () => {
                const form = generateApplicationFormFields(mock_app);
                expect(form.get('name')?.value).toBe('Test Application');
            });

            it('should populate scopes', () => {
                const form = generateApplicationFormFields(mock_app);
                expect(form.get('scopes')?.value).toBe('read write');
            });

            it('should populate skip_authorization', () => {
                const form = generateApplicationFormFields(mock_app);
                expect(form.get('skip_authorization')?.value).toBe(true);
            });

            it('should populate redirect_uri', () => {
                const form = generateApplicationFormFields(mock_app);
                expect(form.get('redirect_uri')?.value).toBe(
                    'https://app.example.com/callback',
                );
            });

            it('should populate client_id from uid', () => {
                const form = generateApplicationFormFields(mock_app);
                expect(form.get('client_id')?.value).toBe('app-client-123');
            });
        });

        describe('validation', () => {
            it('should require name', () => {
                const form = generateApplicationFormFields();
                expect(form.get('name')?.valid).toBe(false);
                expect(form.get('name')?.errors?.['required']).toBeTruthy();
            });

            it('should validate name when provided', () => {
                const form = generateApplicationFormFields();
                form.get('name')?.setValue('My App');
                expect(form.get('name')?.valid).toBe(true);
            });

            it('should accept empty redirect_uri', () => {
                const form = generateApplicationFormFields();
                expect(form.get('redirect_uri')?.valid).toBe(true);
            });

            it('should accept valid redirect_uri', () => {
                const form = generateApplicationFormFields();
                form.get('redirect_uri')?.setValue(
                    'https://app.example.com/callback',
                );
                expect(form.get('redirect_uri')?.valid).toBe(true);
            });

            it('should reject invalid redirect_uri', () => {
                const form = generateApplicationFormFields();
                form.get('redirect_uri')?.setValue('not-a-url');
                expect(form.get('redirect_uri')?.valid).toBe(false);
                expect(
                    form.get('redirect_uri')?.errors?.['invalidUrl'],
                ).toBeTruthy();
            });

            it('should not require scopes', () => {
                const form = generateApplicationFormFields();
                expect(form.get('scopes')?.valid).toBe(true);
            });

            it('should not require client_id', () => {
                const form = generateApplicationFormFields();
                expect(form.get('client_id')?.valid).toBe(true);
            });

            it('should be invalid without required fields', () => {
                const form = generateApplicationFormFields();
                expect(form.valid).toBe(false);
            });

            it('should be valid with name provided', () => {
                const form = generateApplicationFormFields();
                form.get('name')?.setValue('App Name');
                expect(form.valid).toBe(true);
            });
        });

        describe('skip_authorization coercion', () => {
            it('should coerce undefined to false', () => {
                const app = { name: 'Test' } as any;
                const form = generateApplicationFormFields(app);
                expect(form.get('skip_authorization')?.value).toBe(false);
            });

            it('should coerce null to false', () => {
                const app = { name: 'Test', skip_authorization: null } as any;
                const form = generateApplicationFormFields(app);
                expect(form.get('skip_authorization')?.value).toBe(false);
            });

            it('should preserve true value', () => {
                const app = { skip_authorization: true } as any;
                const form = generateApplicationFormFields(app);
                expect(form.get('skip_authorization')?.value).toBe(true);
            });

            it('should coerce truthy value to true', () => {
                const app = { skip_authorization: 1 } as any;
                const form = generateApplicationFormFields(app);
                expect(form.get('skip_authorization')?.value).toBe(true);
            });
        });
    });
});
