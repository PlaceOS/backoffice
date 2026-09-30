import {
    Component,
    computed,
    DestroyRef,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import {
    get,
    invalidateToken,
    isMock,
    onlineState,
} from '@placeos/ts-client';

import {
    ActivatedRoute,
    NavigationEnd,
    Router,
    RouterOutlet,
} from '@angular/router';
import { setupCache, updateAvailable } from './common/application';
import { AsyncHandler } from './common/async-handler.class';
import { detectIE, log } from './common/general';
import { setNotifyOutlet } from './common/notifications';
import { PlaceSettings, setLoadingMessage, setupPlace } from './common/placeos';
import { SettingsService } from './common/settings.service';
import { signalFromClient, waitForSignalValue } from './common/signals';
import { syncUploadToken } from './common/uploads';
import { currentUser } from './common/user-state';
import { BackofficeUsersService } from './users/users.service';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PlaceTenant } from './admin/staff-api.component';
import { tenantExpiryBanner } from './admin/staff-api.utilities';
import {
    localeFromUrl,
    LocaleService,
    setTranslationService,
} from './common/locale.service';
import { GlobalBannerComponent } from './ui/global-banner.component';
import { GlobalLoadingComponent } from './ui/global-loading.component';
import { IconComponent } from './ui/icon.component';
import { UploadListComponent } from './ui/upload-list.component';

/** Longest time start up waits for translations */
const LOCALE_TIMEOUT_MS = 5000;

/** Signal of the browser's network state. Call in an injection context. */
function browserOnline() {
    const state = signal(navigator.onLine);
    const update = () => state.set(navigator.onLine);
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    inject(DestroyRef).onDestroy(() => {
        window.removeEventListener('online', update);
        window.removeEventListener('offline', update);
    });
    return state.asReadonly();
}

@Component({
    selector: 'placeos-root',
    template: `
        <div class="flex h-full w-full flex-col overflow-hidden">
            @if (!loading()) {
                <global-banner />
                <div class="relative h-1/2 w-full flex-1">
                    <router-outlet />
                </div>
                <!-- @if (filter()) {
                    <global-search [(search)]="filter"></global-search>
                } -->
                @if (!simple()) {
                    <app-upload-list />
                }
            } @else {
                <div
                    loader
                    class="absolute inset-0 z-50 flex items-center justify-center"
                >
                    <div
                        class="border-base-300 absolute bottom-2 left-1/2 w-[24rem] -translate-x-1/2 overflow-hidden rounded-full border shadow"
                    >
                        <mat-progress-bar
                            mode="indeterminate"
                            class="scale-150 rounded"
                        />
                    </div>
                </div>
            }
        </div>
        <global-loading />
        @if (!online() && !loading()) {
            <div
                class="bg-error text-error-content fixed bottom-2 left-1/2 z-9999 -translate-x-1/2 rounded-3xl px-4 py-2 text-xs shadow-sm"
            >
                Unable to reach server... Some features may not work.
            </div>
        }
        @if (update_available() && !loading()) {
            <section
                role="status"
                aria-live="polite"
                class="border-info/30 bg-base-100 text-base-content fixed right-3 bottom-3 z-100 w-88 max-w-[calc(100vw-2rem)] rounded-md border p-3 shadow-lg"
            >
                <div class="flex items-center gap-2">
                    <div class="min-w-0 flex-1">
                        <div class="text-sm font-medium">Update available</div>
                        <p class="mt-0.5 text-xs opacity-70">
                            Refresh to load the latest Backoffice version.
                        </p>
                    </div>
                    <button
                        icon
                        default
                        type="button"
                        (click)="refreshApplication()"
                        matTooltip="Refresh"
                        matTooltipPosition="left"
                    >
                        <icon>refresh</icon>
                    </button>
                </div>
            </section>
        }
    `,
    styles: [
        `
            [loader] {
                background-image: linear-gradient(
                    to right,
                    #c62828 0%,
                    #ef5350 100%
                );
            }
        `,
    ],
    imports: [
        GlobalBannerComponent,
        RouterOutlet,
        UploadListComponent,
        MatProgressBarModule,
        GlobalLoadingComponent,
        IconComponent,
        MatTooltipModule,
    ],
})
export class AppComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);
    private _users = inject(BackofficeUsersService);
    private _cache = inject(SwUpdate);
    private _snackbar = inject(MatSnackBar);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _locale = inject(LocaleService, { optional: true });

    /** Whether the application is loading */
    public readonly loading = signal(false);
    public readonly filter = signal(false);
    public readonly show = signal(false);
    public readonly simple = signal(false);
    public readonly update_available = updateAvailable;

    public get dark_mode() {
        return this._users.dark_mode;
    }

    private readonly _client_online = signalFromClient(onlineState());
    private readonly _browser_online = browserOnline();
    /** Whether PlaceOS is reachable. ts-client only flags auth failures, so also track the network. */
    public readonly online = computed(
        () => this._client_online() && this._browser_online(),
    );

    public get is_fools_day(): boolean {
        return false;
    }

    public refreshApplication() {
        location.reload();
    }

    public async ngOnInit() {
        setLoadingMessage('Initialising application...');
        /* istanbul ignore if */
        if (detectIE() && detectIE() < 12) {
            location.href = `${location.origin}${location.pathname}assets/not-supported.html`;
            return;
        }
        this._route.queryParamMap.subscribe((params) => {
            if (params.has('lang')) {
                const locale = params.get('lang');
                this._locale?.setLocale(locale);
                localStorage.setItem('BACKOFFICE.locale', locale);
            }
        });
        setNotifyOutlet(this._snackbar);
        setTranslationService(this._locale);
        this.loading.set(true);
        setLoadingMessage('Loading application settings...');
        /** Wait for settings to initialise */
        const settings_ready = await waitForSignalValue(
            this._settings.initialised,
            (_) => _,
        ).catch(() => false);
        if (!settings_ready) return this.onInitError();
        const settings = (this._settings.get('composer') ||
            {}) as PlaceSettings;
        settings.mock = !!this._settings.get('mock');
        settings.ignore_api_key = true;
        setLoadingMessage('Authenticating user...');
        /** Wait for authentication details to load */
        await setupPlace(settings).catch(() => this.onInitError());
        setupCache(this._cache);
        const user_ready = await waitForSignalValue(
            this._users.initialised,
            (_) => _,
            50,
            30 * 1000,
        ).catch(() => false);
        if (!user_ready) return this.onInitError();
        setLoadingMessage('Initialising locales...');
        // TranslatePipe is pure, so load translations before the shell renders
        await this._initLocale();
        this.loading.set(false);
        setLoadingMessage('Initialising upload service...');
        this.timeout('init_uploads', () => syncUploadToken());
        // this.interval(
        //     'dark-mode',
        //     () =>
        //         this.dark_mode
        //             ? document.body.classList.add('theme-dark')
        //             : document.body.classList.remove('theme-dark')
        //     ,
        //     200,
        // );
        this._router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.simple.set(this._router.url.includes('mqtt'));
            }
        });
        setLoadingMessage('Checking staff tenants...');
        // Runs after the user loads, so currentUser() is set here
        this._checkTenants().catch((error) =>
            log('Init', 'Failed to check staff tenants', [error], 'warn'),
        );
    }

    private onInitError() {
        if (isMock()) return;

        log('Init', 'Failed to initialise user. Restarting application...');
        invalidateToken();
        location.reload();
    }

    /** Show one banner for staff tenants with expiring secrets */
    private async _checkTenants() {
        if (!currentUser()?.sys_admin) return;
        const tenants = await get('/api/staff/v1/tenants').catch(() => []);
        const banner = tenantExpiryBanner(
            Array.isArray(tenants) ? (tenants as PlaceTenant[]) : [],
        );
        if (banner) this._settings.post('banner', banner);
    }

    /**
     * Set the locale from the URL `lang` param, storage or the browser languages.
     * Resolves when translations load, or after a timeout.
     */
    private async _initLocale() {
        let load: Promise<void> | undefined;
        try {
            // Router query params are not ready yet, so read lang from the URL
            const url_locale = localeFromUrl(location.search, location.hash);
            if (url_locale) {
                localStorage.setItem('BACKOFFICE.locale', url_locale);
            }
            let locale = localStorage.getItem('BACKOFFICE.locale');
            const locales = (this._settings.get('app.locales') as {
                id: string;
                name: string;
            }[]) || [{ id: 'en', name: 'English' }];
            if (locale) {
                load = this._locale?.setLocale(locale);
            } else {
                const list = navigator.languages || [];
                for (const lang of list) {
                    locale = locales.find((_) => _.id === lang)?.id;
                    if (!locale)
                        locale = locales.find((_) => lang.includes(_.id))?.id;
                    // Load the full browser tag (e.g. en-US), not the matched id,
                    // as locale files use full tags.
                    if (locale) {
                        load = this._locale?.setLocale(lang);
                        localStorage.setItem('BACKOFFICE.locale', lang);
                        break;
                    }
                }
            }
        } catch {
            // Ignore locale parsing errors
        }
        if (!load) return;
        // Do not block start up on a slow or failed locale file
        await Promise.race([
            load.catch(() => undefined),
            new Promise((resolve) => setTimeout(resolve, LOCALE_TIMEOUT_MS)),
        ]);
    }
}
