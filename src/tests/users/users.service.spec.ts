import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NEVER } from 'rxjs';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { SettingsService } from '../../app/common/settings.service';
import { BackofficeUsersService } from '../../app/users/users.service';

const mocks = vi.hoisted(() => ({ currentUser: vi.fn() }));
vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<typeof import('@placeos/ts-client')>(
        '@placeos/ts-client/dist/index.es.js',
    )),
    currentUser: mocks.currentUser,
    onlineState: () => NEVER,
}));
vi.mock('../../app/common/settings.service', () => ({
    SettingsService: class {},
}));
vi.mock('../../app/common/support-access', () => ({
    loadSupportAccess: vi.fn(),
}));

describe('loading the signed-in user', () => {
    afterEach(() => vi.useRealTimers());

    it('stops retrying after 12 failed attempts', async () => {
        vi.useFakeTimers();
        mocks.currentUser.mockRejectedValue(new Error('Offline'));
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                { provide: SettingsService, useValue: {} },
            ],
        });
        const service = TestBed.inject(BackofficeUsersService);

        const loaded = service.load();
        await vi.runAllTimersAsync();
        await loaded;

        expect(mocks.currentUser).toHaveBeenCalledTimes(12);
        expect(service.state()).toBe('error');
        await vi.advanceTimersByTimeAsync(60_000);
        expect(mocks.currentUser).toHaveBeenCalledTimes(12);
    });
});
