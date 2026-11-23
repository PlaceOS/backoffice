import { TestBed } from '@angular/core/testing';
import { User } from '@placeos/ts-client';
import { beforeEach, describe, expect, it } from 'vitest';
import { newItem } from '../../app/common/placeos';
import {
    generateUserFormModel,
    userFormSchema,
} from '../../app/users/users.utilities';
import { createTestForm } from '../common/form-test.helpers';

const user = newItem(User, {
    id: 'user-1',
    authority_id: 'domain-1',
    first_name: 'Alex',
    last_name: 'Smith',
    email: 'alex@example.com',
});

describe('user form validation', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('requires matching passwords for a new user and rechecks confirmation when the password changes', () => {
        const { fields } = createTestForm(
            generateUserFormModel(user),
            userFormSchema(),
        );
        expect(fields.password().invalid()).toBe(true);
        expect(fields.authority_id().disabled()).toBe(false);
        fields.password().value.set('password-one');
        expect(fields.confirm_password().invalid()).toBe(true);
        fields.confirm_password().value.set('password-one');
        expect(fields().valid()).toBe(true);
        fields.password().value.set('password-two');
        expect(fields.confirm_password().errors()).toEqual([
            expect.objectContaining({ kind: 'match' }),
        ]);
    });

    it('allows an existing user to keep their password and locks the authority and email', () => {
        const { fields } = createTestForm(
            generateUserFormModel(user),
            userFormSchema(user),
        );
        expect(fields().valid()).toBe(true);
        expect(fields.authority_id().disabled()).toBe(true);
        expect(fields.email().disabled()).toBe(true);
        fields.password().value.set('replacement');
        expect(fields.confirm_password().invalid()).toBe(true);
        fields.confirm_password().value.set('replacement');
        expect(fields().valid()).toBe(true);
    });

    it('locks the authority when a subsystem user creates an account', () => {
        const { fields } = createTestForm(
            generateUserFormModel(newItem(User, { authority_id: 'domain-1' })),
            userFormSchema(undefined, true),
        );
        expect(fields.authority_id().disabled()).toBe(true);
    });

    it('rejects an invalid email or image URL and permits no image', () => {
        const { fields } = createTestForm(
            generateUserFormModel(user),
            userFormSchema(),
        );
        fields.email().value.set('invalid');
        fields.image().value.set('invalid');
        expect(fields.email().invalid()).toBe(true);
        expect(fields.image().invalid()).toBe(true);
        fields.email().value.set('alex@example.com');
        fields.image().value.set('');
        expect(fields.email().invalid()).toBe(false);
        expect(fields.image().invalid()).toBe(false);
    });
});
