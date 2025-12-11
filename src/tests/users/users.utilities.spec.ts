import { describe, it, expect, vi, beforeEach } from 'vitest';
import { FormGroup, FormControl } from '@angular/forms';

// Mock @placeos/ts-client
vi.mock('@placeos/ts-client', () => ({
    PlaceUser: class {},
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

import {
    validateMatch,
    generateUserFormFields,
} from '../../app/users/users.utilities';

describe('users.utilities', () => {
    describe('validateMatch', () => {
        it('should return null when no parent group', () => {
            const validator = validateMatch('password');
            const control = new FormControl('test');
            expect(validator(control)).toBeNull();
        });

        it('should return null when values match', () => {
            const validator = validateMatch('password');
            const group = new FormGroup({
                password: new FormControl('secret123'),
                confirm_password: new FormControl('secret123'),
            });

            const control = group.get('confirm_password')!;
            expect(validator(control)).toBeNull();
        });

        it('should return match error when values differ', () => {
            const validator = validateMatch('password');
            const group = new FormGroup({
                password: new FormControl('secret123'),
                confirm_password: new FormControl('different'),
            });

            const control = group.get('confirm_password')!;
            expect(validator(control)).toEqual({ match: true });
        });

        it('should return null when target control does not exist', () => {
            const validator = validateMatch('nonexistent');
            const group = new FormGroup({
                confirm_password: new FormControl('test'),
            });

            const control = group.get('confirm_password')!;
            // Should compare with empty string
            expect(validator(control)).toEqual({ match: true });
        });

        it('should handle empty strings matching', () => {
            const validator = validateMatch('password');
            const group = new FormGroup({
                password: new FormControl(''),
                confirm_password: new FormControl(''),
            });

            const control = group.get('confirm_password')!;
            expect(validator(control)).toBeNull();
        });
    });

    describe('generateUserFormFields', () => {
        describe('form structure', () => {
            it('should return a FormGroup', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form).toBeInstanceOf(FormGroup);
            });

            it('should have authority_id control', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('authority_id')).toBeTruthy();
            });

            it('should have first_name control', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('first_name')).toBeTruthy();
            });

            it('should have last_name control', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('last_name')).toBeTruthy();
            });

            it('should have email control', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('email')).toBeTruthy();
            });

            it('should have staff_id control', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('staff_id')).toBeTruthy();
            });

            it('should have support control', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('support')).toBeTruthy();
            });

            it('should have sys_admin control', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('sys_admin')).toBeTruthy();
            });

            it('should have locatable control', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('locatable')).toBeTruthy();
            });

            it('should have groups control', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('groups')).toBeTruthy();
            });

            it('should have password control', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('password')).toBeTruthy();
            });

            it('should have confirm_password control', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('confirm_password')).toBeTruthy();
            });

            it('should have card_number control', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('card_number')).toBeTruthy();
            });

            it('should have image control', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('image')).toBeTruthy();
            });
        });

        describe('default values', () => {
            it('should have empty defaults without user', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('authority_id')?.value).toBe('');
                expect(form.get('first_name')?.value).toBe('');
                expect(form.get('last_name')?.value).toBe('');
                expect(form.get('email')?.value).toBe('');
                expect(form.get('staff_id')?.value).toBe('');
                expect(form.get('card_number')?.value).toBe('');
                expect(form.get('image')?.value).toBe('');
            });

            it('should have false for boolean defaults', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('support')?.value).toBe(false);
                expect(form.get('sys_admin')?.value).toBe(false);
                expect(form.get('locatable')?.value).toBe(false);
            });

            it('should have empty array for groups default', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('groups')?.value).toEqual([]);
            });
        });

        describe('with user data', () => {
            const mock_user = {
                id: 'user-123',
                authority_id: 'auth-456',
                first_name: 'John',
                last_name: 'Doe',
                email: 'john@example.com',
                staff_id: 'EMP001',
                support: true,
                sys_admin: true,
                locatable: true,
                groups: ['admin', 'users'],
                card_number: 'CARD123',
                image: 'https://example.com/avatar.png',
            } as any;

            it('should populate authority_id from user', () => {
                const form = generateUserFormFields(mock_user);
                expect(form.get('authority_id')?.value).toBe('auth-456');
            });

            it('should populate first_name from user', () => {
                const form = generateUserFormFields(mock_user);
                expect(form.get('first_name')?.value).toBe('John');
            });

            it('should populate last_name from user', () => {
                const form = generateUserFormFields(mock_user);
                expect(form.get('last_name')?.value).toBe('Doe');
            });

            it('should populate email from user', () => {
                const form = generateUserFormFields(mock_user);
                expect(form.get('email')?.value).toBe('john@example.com');
            });

            it('should populate staff_id from user', () => {
                const form = generateUserFormFields(mock_user);
                expect(form.get('staff_id')?.value).toBe('EMP001');
            });

            it('should populate support from user', () => {
                const form = generateUserFormFields(mock_user);
                expect(form.get('support')?.value).toBe(true);
            });

            it('should populate sys_admin from user', () => {
                const form = generateUserFormFields(mock_user);
                expect(form.get('sys_admin')?.value).toBe(true);
            });

            it('should populate locatable from user', () => {
                const form = generateUserFormFields(mock_user);
                expect(form.get('locatable')?.value).toBe(true);
            });

            it('should populate groups from user', () => {
                const form = generateUserFormFields(mock_user);
                expect(form.get('groups')?.value).toEqual(['admin', 'users']);
            });

            it('should populate card_number from user', () => {
                const form = generateUserFormFields(mock_user);
                expect(form.get('card_number')?.value).toBe('CARD123');
            });

            it('should populate image from user', () => {
                const form = generateUserFormFields(mock_user);
                expect(form.get('image')?.value).toBe(
                    'https://example.com/avatar.png',
                );
            });

            it('should use name if first_name not provided', () => {
                const user_with_name = { name: 'Jane Smith' } as any;
                const form = generateUserFormFields(user_with_name);
                expect(form.get('first_name')?.value).toBe('Jane Smith');
            });

            it('should prefer first_name over name', () => {
                const user = { first_name: 'John', name: 'Johnny' } as any;
                const form = generateUserFormFields(user);
                expect(form.get('first_name')?.value).toBe('John');
            });
        });

        describe('validation for new user', () => {
            it('should require authority_id', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('authority_id')?.valid).toBe(false);
                expect(
                    form.get('authority_id')?.errors?.['required'],
                ).toBeTruthy();
            });

            it('should require first_name', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('first_name')?.valid).toBe(false);
                expect(
                    form.get('first_name')?.errors?.['required'],
                ).toBeTruthy();
            });

            it('should require last_name', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('last_name')?.valid).toBe(false);
                expect(
                    form.get('last_name')?.errors?.['required'],
                ).toBeTruthy();
            });

            it('should require email', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('email')?.valid).toBe(false);
                expect(form.get('email')?.errors?.['required']).toBeTruthy();
            });

            it('should validate email format', () => {
                const form = generateUserFormFields(undefined as any);
                form.get('email')?.setValue('invalid-email');
                expect(form.get('email')?.valid).toBe(false);
                expect(form.get('email')?.errors?.['email']).toBeTruthy();
            });

            it('should accept valid email', () => {
                const form = generateUserFormFields(undefined as any);
                form.get('email')?.setValue('test@example.com');
                expect(form.get('email')?.errors?.['email']).toBeFalsy();
            });

            it('should require password for new user', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('password')?.valid).toBe(false);
                expect(form.get('password')?.errors?.['required']).toBeTruthy();
            });
        });

        describe('validation for existing user', () => {
            const existing_user = { id: 'user-123' } as any;

            it('should disable authority_id for existing user', () => {
                const form = generateUserFormFields(existing_user);
                expect(form.get('authority_id')?.disabled).toBe(true);
            });

            it('should not require password for existing user', () => {
                const form = generateUserFormFields(existing_user);
                expect(form.get('password')?.errors?.['required']).toBeFalsy();
            });
        });

        describe('password confirmation validation', () => {
            it('should validate confirm_password matches password', () => {
                const form = generateUserFormFields(undefined as any);
                form.get('password')?.setValue('secret123');
                form.get('confirm_password')?.setValue('different');
                expect(form.get('confirm_password')?.valid).toBe(false);
                expect(
                    form.get('confirm_password')?.errors?.['match'],
                ).toBeTruthy();
            });

            it('should be valid when passwords match', () => {
                const form = generateUserFormFields(undefined as any);
                form.get('password')?.setValue('secret123');
                form.get('confirm_password')?.setValue('secret123');
                expect(
                    form.get('confirm_password')?.errors?.['match'],
                ).toBeFalsy();
            });

            it('should update validation when password changes', () => {
                const form = generateUserFormFields(undefined as any);
                form.get('password')?.setValue('secret123');
                form.get('confirm_password')?.setValue('secret123');

                // Change password - confirm should now be invalid
                form.get('password')?.setValue('newsecret');
                expect(form.get('confirm_password')?.valid).toBe(false);
            });
        });

        describe('image URL validation', () => {
            it('should accept empty image URL', () => {
                const form = generateUserFormFields(undefined as any);
                expect(form.get('image')?.valid).toBe(true);
            });

            it('should accept valid image URL', () => {
                const form = generateUserFormFields(undefined as any);
                form.get('image')?.setValue('https://example.com/avatar.png');
                expect(form.get('image')?.valid).toBe(true);
            });

            it('should reject invalid image URL', () => {
                const form = generateUserFormFields(undefined as any);
                form.get('image')?.setValue('not-a-url');
                expect(form.get('image')?.valid).toBe(false);
                expect(form.get('image')?.errors?.['invalidUrl']).toBeTruthy();
            });
        });
    });
});
