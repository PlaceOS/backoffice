import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { afterEach, describe, expect, it, onTestFinished, vi } from 'vitest';
import { AppComponent } from '../../app/app';
import { LocaleService } from '../../app/common/locale.service';
import { SettingsService } from '../../app/common/settings.service';
import { BackofficeUsersService } from '../../app/users/users.service';

vi.mock('@placeos/cloud-uploads', () =>
    vi.importActual('@placeos/cloud-uploads/dist/index.es.js'),
);

const place = vi.hoisted(() => ({
    isMock: vi.fn(() => true),
    setupPlace: vi.fn(() => Promise.resolve()),
}));
vi.mock('../../app/common/placeos', async (importOriginal) => {
    const { signal } = await import('@angular/core');
    return {
        ...(await importOriginal<object>()),
        isMock: place.isMock,
        online: signal(true),
        setLoadingMessage: vi.fn(),
        setupPlace: place.setupPlace,
    };
});

vi.mock('../../app/common/sentry', async () => ({
    ...(await vi.importActual<object>('../../app/common/sentry')),
    initSentry: vi.fn(() => Promise.resolve()),
}));

function setup(locale: Partial<LocaleService>) {
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
            { provide: LocaleService, useValue: locale },
        ],
    });
    return TestBed.runInInjectionContext(() => new AppComponent());
}

/** The jsdom instance that Vitest puts on the global object */
interface JsdomGlobal {
    jsdom: {
        virtualConsole: {
            on(event: 'jsdomError', listener: (error: Error) => void): void;
            off(event: 'jsdomError', listener: (error: Error) => void): void;
        };
    };
}

/**
 * Count the page reloads. jsdom does not let a test replace
 * `location.reload`, and it reports each reload as a navigation that it
 * does not do.
 */
function watchReloads() {
    let count = 0;
    const listener = (error: Error) => {
        if (error.message.includes('Not implemented: navigation')) count += 1;
    };
    const { virtualConsole } = (globalThis as unknown as JsdomGlobal).jsdom;
    virtualConsole.on('jsdomError', listener);
    onTestFinished(() => virtualConsole.off('jsdomError', listener));
    return { count: () => count };
}

describe('AppComponent', () => {
    afterEach(() => {
        vi.useRealTimers();
        place.setupPlace.mockReset();
        place.setupPlace.mockResolvedValue(undefined);
        localStorage.clear();
        sessionStorage.clear();
        place.isMock.mockReturnValue(true);
    });

    it('shows a start up error and does not reload after the reload limit', async () => {
        place.isMock.mockReturnValue(false);
        place.setupPlace.mockRejectedValueOnce(new Error('Unavailable'));
        sessionStorage.setItem('BACKOFFICE.startup_reloads', '2');
        const app = setup({
            ready: Promise.resolve(),
            setLocale: () => Promise.resolve(),
        });

        await app.ngOnInit();

        expect(app.startup_error()).toBe(true);
        expect(app.loading()).toBe(true);
        expect(sessionStorage.getItem('BACKOFFICE.startup_reloads')).toBe('2');
    });

    it('reloads twice on failed start ups, then shows the error with Retry', async () => {
        place.isMock.mockReturnValue(false);
        place.setupPlace.mockRejectedValue(new Error('Unavailable'));
        const reloads = watchReloads();
        const locale = {
            ready: Promise.resolve(),
            setLocale: () => Promise.resolve(),
            get: (key: string) => key,
        };

        // Each reload starts the app again with the same session storage
        await setup(locale).ngOnInit();
        expect(reloads.count()).toBe(1);
        await TestBed.runInInjectionContext(
            () => new AppComponent(),
        ).ngOnInit();
        expect(reloads.count()).toBe(2);

        // The third failure shows the error and does not reload
        const fixture = TestBed.createComponent(AppComponent);
        const element: HTMLElement = fixture.nativeElement;
        await vi.waitFor(() => {
            fixture.detectChanges();
            expect(element.querySelector('[role="alert"]')).not.toBeNull();
        });
        const panel = element.querySelector('[role="alert"]');
        expect(panel.textContent).toContain('COMMON.STARTUP_ERROR');
        expect(reloads.count()).toBe(2);

        panel.querySelector('button').click();
        expect(reloads.count()).toBe(3);
    });

    it('stops loading after five seconds when translations never load', async () => {
        vi.useFakeTimers();
        const never = () => new Promise<void>(() => undefined);
        const app = setup({ ready: never(), setLocale: never });

        const init = app.ngOnInit();
        await vi.advanceTimersByTimeAsync(4_999);
        expect(app.loading()).toBe(true);
        await vi.advanceTimersByTimeAsync(1);
        expect(app.loading()).toBe(false);
        await init;
    });
});
