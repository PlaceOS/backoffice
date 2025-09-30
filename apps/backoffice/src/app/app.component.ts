import {
    Component,
    inject,
    OnInit,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import {
    Amazon,
    Azure,
    Google,
    initialiseUploadService,
    OpenStack,
} from '@placeos/cloud-uploads';
import {
    get,
    invalidateToken,
    isMock,
    isOnline,
    setAPI_Key,
    token,
} from '@placeos/ts-client';
import { first } from 'rxjs/operators';

import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { addDays, format, getUnixTime } from 'date-fns';
import { setupCache } from './common/application';
import { AsyncHandler } from './common/async-handler.class';
import { detectIE, log } from './common/general';
import { setNotifyOutlet } from './common/notifications';
import { setupPlace } from './common/placeos';
import { SettingsService } from './common/settings.service';
import { currentUser } from './common/user-state';
import { BackofficeUsersService } from './users/users.service';

import { LocaleService, setTranslationService } from './common/locale.service';

@Component({
    selector: 'placeos-root',
    template: `
        <div class="flex h-full w-full flex-col overflow-hidden">
            @if (!loading()) {
                <global-banner></global-banner>
                <div class="relative h-1/2 w-full flex-1">
                    <router-outlet></router-outlet>
                </div>
                @if (filter) {
                    <global-search [(search)]="filter"></global-search>
                }
                @if (!simple) {
                    <app-upload-list></app-upload-list>
                }
            } @else {
                <div
                    class="absolute inset-0 z-50 flex items-center justify-center"
                >
                    <mat-spinner [diameter]="64"></mat-spinner>
                </div>
            }
        </div>
        @if (!online && !loading()) {
            <div
                class="fixed bottom-2 left-1/2 z-[9999] -translate-x-1/2 rounded-3xl bg-error px-4 py-2 text-xs text-error-content shadow"
            >
                Unable to reach server... Some features may not work.
            </div>
        }
    `,
    styleUrls: [
        './styles/app.component.scss',
        './styles/utility.scss',
        './styles/custom-element.styles.scss',
        './styles/native-element.styles.scss',
    ],
    encapsulation: ViewEncapsulation.None,
    standalone: false,
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
    /**  */
    public filter: string;
    /**  */
    public show: boolean;
    public simple: boolean;

    public get dark_mode() {
        return this._users.dark_mode;
    }

    public get online() {
        return isOnline();
    }

    public get is_fools_day(): boolean {
        return false;
    }

    public async ngOnInit() {
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
            if (params.has('x-api-key')) {
                setAPI_Key(params.get('x-api-key'));
            }
        });
        setNotifyOutlet(this._snackbar);
        setTranslationService(this._locale);
        this.loading.set(true);
        /** Wait for settings to initialise */
        await this._settings.initialised.pipe(first((_) => _)).toPromise();
        const settings = this._settings.get('composer') || {};
        settings.mock = !!this._settings.get('mock');
        settings.ignore_api_key = true;
        /** Wait for authentication details to load */
        await setupPlace(settings).catch(() => this.onInitError());
        setupCache(this._cache);
        this.timeout('wait_for_user', () => this.onInitError(), 30 * 1000);
        await this._users.initialised.pipe(first((_) => _)).toPromise();
        this.clearTimeout('wait_for_user');
        this.loading.set(false);
        this.timeout('init_uploads', () => {
            initialiseUploadService({
                auto_start: true,
                token: token(),
                endpoint: '/api/engine/v2/uploads',
                worker_url: 'assets/md5_worker.js',
                providers: [Amazon, Azure, Google, OpenStack] as any,
            });
        });
        this.interval(
            'dark-mode',
            () => {
                this.dark_mode
                    ? document.body.classList.add('dark')
                    : document.body.classList.remove('dark');
            },
            200,
        );
        this._router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.simple = this._router.url.includes('mqtt');
            }
        });
        this._checkTenants();
        this._initLocale();
    }

    private onInitError() {
        if (isMock()) return;

        log('Init', 'Failed to initialise user. Restarting application...');
        invalidateToken();
        location.reload();
    }

    private async _checkTenants() {
        if (!currentUser()?.sys_admin) return;
        const tenant_list: any = await get('/api/staff/v1/tenants').toPromise();
        for (const tenant of tenant_list) {
            if (!tenant.secret_expiry) continue;
            if (tenant.secret_expiry > getUnixTime(addDays(Date.now(), -30))) {
                this._settings.post('banner', {
                    id: `tenant_secret_expiry-${tenant.id}`,
                    type: 'warn',
                    content: `Staff API Tenant "${
                        tenant.name
                    }" has a secret that will expire on ${format(
                        tenant.secret_expiry * 1000,
                        "MMM do 'at' h:mma",
                    )}.`,
                });
            }
        }
    }

    private _initLocale() {
        try {
            let locale = localStorage.getItem('BACKOFFICE.locale');
            const locales = this._settings.get('app.locales') || [
                { id: 'en', name: 'English' },
            ];
            if (locale) {
                this._locale?.setLocale(locale);
            } else {
                const list = navigator.languages;
                for (const lang of list) {
                    locale = locales.find((_) => _.id === lang);
                    if (!locale)
                        locale = locales.find((_) => lang.includes(_.id));
                    if (locale) {
                        this._locale?.setLocale(lang);
                        localStorage.setItem('BACKOFFICE.locale', lang);
                        break;
                    }
                }
            }
        } catch {}
    }
}
