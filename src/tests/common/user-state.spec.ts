import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@placeos/ts-client', () => ({
    PlaceUser: class {
        id = '';
    },
    showUser: vi.fn(),
}));

describe('current user', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        vi.resetModules();
    });

    afterEach(() => {
        vi.clearAllTimers();
        vi.useRealTimers();
        vi.resetAllMocks();
    });

    it('returns a stable empty user until the current user loads', async () => {
        const { current_user, currentUser } = await import(
            '../../app/common/user-state'
        );

        expect(current_user()).toBeNull();
        expect(currentUser().id).toBe('');
        expect(currentUser()).toBe(currentUser());
    });

    it('publishes the loaded user and stops polling', async () => {
        const { PlaceUser, showUser } = await import('@placeos/ts-client');
        const user = new PlaceUser();
        vi.mocked(showUser).mockResolvedValue(user);
        const { current_user, currentUser } = await import(
            '../../app/common/user-state'
        );

        await vi.advanceTimersByTimeAsync(11_000);

        expect(showUser).toHaveBeenCalledExactlyOnceWith('current');
        expect(current_user()).toBe(user);
        expect(currentUser()).toBe(user);
        expect(vi.getTimerCount()).toBe(0);
    });

    it('stops after ten failed requests and keeps the empty user', async () => {
        const { showUser } = await import('@placeos/ts-client');
        vi.mocked(showUser).mockRejectedValue(new Error('Unavailable'));
        const { current_user, currentUser } = await import(
            '../../app/common/user-state'
        );

        await vi.advanceTimersByTimeAsync(11_000);

        expect(showUser).toHaveBeenCalledTimes(10);
        expect(current_user()).toBeNull();
        expect(currentUser().id).toBe('');
        expect(vi.getTimerCount()).toBe(0);
    });
});
