import { PlaceUser } from '@placeos/ts-client';
import { describe, expect, it, vi } from 'vitest';
import {
    current_user,
    currentUser,
    setCurrentUser,
} from '../../app/common/user-state';

vi.mock('@placeos/ts-client', async () =>
    vi.importActual('@placeos/ts-client/dist/index.es.js'),
);

describe('current user', () => {
    it('returns a stable empty user until the user is published', () => {
        expect(current_user()).toBeNull();
        expect(currentUser().id).toBe('');
        expect(currentUser()).toBe(currentUser());

        const user = new PlaceUser({ id: 'user-1' });
        setCurrentUser(user);
        expect(current_user()).toBe(user);
        expect(currentUser()).toBe(user);
    });
});
