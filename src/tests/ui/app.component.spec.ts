import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { AppComponent } from '../../app/app';
import { LocaleService } from '../../app/common/locale.service';
import { SettingsService } from '../../app/common/settings.service';
import { BackofficeUsersService } from '../../app/users/users.service';

vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<object>('@placeos/ts-client/dist/index.es.js')),
    isMock: () => true,
    onlineState: () => ({
        value: true,
        subscribe: (next: (value: boolean) => void) => {
            next(true);
            return () => undefined;
        },
    }),
}));

vi.mock('@placeos/cloud-uploads', () =>
    vi.importActual('@placeos/cloud-uploads/dist/index.es.js'),
);

vi.mock('../../app/common/placeos', () => ({
    setLoadingMessage: vi.fn(),
    setupPlace: vi.fn(() => Promise.resolve()),
}));

vi.mock('../../app/common/sentry', async () => ({
    ...(await vi.importActual<object>('../../app/common/sentry')),
    initSentry: vi.fn(() => Promise.resolve()),
}));

describe('AppComponent', () => {
    afterEach(() => {
        vi.useRealTimers();
        localStorage.clear();
    });

    it('stops loading after five seconds when translations never load', async () => {
        vi.useFakeTimers();
        const never = () => new Promise<void>(() => undefined);
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                provideRouter([]),
                { provide: SwUpdate, useValue: { isEnabled: false } },
                {
                    provide: SettingsService,
                    useValue: { initialised: signal(true), get: () => null },
                },
                {
                    provide: BackofficeUsersService,
                    useValue: { initialised: signal(true) },
                },
                {
                    provide: LocaleService,
                    useValue: { ready: never(), setLocale: never },
                },
            ],
        });
        const app = TestBed.runInInjectionContext(() => new AppComponent());

        const init = app.ngOnInit();
        await vi.advanceTimersByTimeAsync(4_999);
        expect(app.loading()).toBe(true);
        await vi.advanceTimersByTimeAsync(1);
        expect(app.loading()).toBe(false);
        await init;
    });
});
