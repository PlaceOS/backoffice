import { User } from '@placeos/ts-client';
import { describe, expect, it } from 'vitest';
import { newItem } from '../../app/common/placeos';
import {
    current_user,
    currentUser,
    setCurrentUser,
} from '../../app/common/user-state';

describe('current user', () => {
    it('returns a stable empty user until the user is published', () => {
        expect(current_user()).toBeNull();
        // The empty v7 user has a null id, where the 6.x class had ''
        expect(currentUser().id).toBeNull();
        expect(currentUser()).toBe(currentUser());

        const user = newItem(User, { id: 'user-1' });
        setCurrentUser(user);
        expect(current_user()).toBe(user);
        expect(currentUser()).toBe(user);
    });
});
