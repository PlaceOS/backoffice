import { FormControl, FormGroup } from '@angular/forms';
import { describe, expect, it } from 'vitest';
import {
    generateUserFormModel,
    validateMatch,
} from '../../app/users/users.utilities';

describe('users.utilities', () => {
    describe('validateMatch', () => {
        it('returns a match error when values differ', () => {
            const group = new FormGroup({
                password: new FormControl('secret'),
                confirm_password: new FormControl('different'),
            });

            expect(validateMatch('password')(group.controls.confirm_password))
                .toEqual({
                    match: true,
                });
        });

        it('returns null when values match', () => {
            const group = new FormGroup({
                password: new FormControl('secret'),
                confirm_password: new FormControl('secret'),
            });

            expect(validateMatch('password')(group.controls.confirm_password))
                .toBeNull();
        });
    });

    describe('generateUserFormModel', () => {
        it('returns defaults', () => {
            expect(generateUserFormModel(undefined as any)).toMatchObject({
                authority_id: '',
                first_name: '',
                last_name: '',
                email: '',
                staff_id: '',
                support: false,
                sys_admin: false,
                locatable: false,
                groups: [],
                password: '',
                confirm_password: '',
                card_number: '',
                image: '',
            });
        });

        it('populates values from a user', () => {
            const model = generateUserFormModel({
                authority_id: 'domain-1',
                first_name: 'Ada',
                last_name: 'Lovelace',
                email: 'ada@example.com',
                staff_id: 'A1',
                support: true,
                sys_admin: true,
                locatable: true,
                groups: ['group-1'],
                card_number: '1234',
                image: 'https://example.com/ada.png',
            } as any);

            expect(model).toMatchObject({
                authority_id: 'domain-1',
                first_name: 'Ada',
                last_name: 'Lovelace',
                email: 'ada@example.com',
                groups: ['group-1'],
                support: true,
                sys_admin: true,
                locatable: true,
            });
        });
    });
});
