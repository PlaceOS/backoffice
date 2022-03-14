import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { invalidateToken, isMock, isOnline, token } from '@placeos/ts-client';
import {
    Amazon,
    Azure,
    Google,
    OpenStack,
    initialiseUploadService
} from '@placeos/cloud-uploads';

import { SettingsService } from './common/settings.service';
import { setupPlace } from './common/placeos';
import { setupCache } from './common/application';
import { setNotifyOutlet } from './common/notifications';
import { BaseClass } from './common/base.class';
import { log, detectIE } from './common/general';
import { BackofficeUsersService } from './users/users.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'placeos-root',
    template: `
        <div class="h-full w-full flex flex-col overflow-hidden">
            <ng-container *ngIf="!(loading | async); else load_state">
                <header *ngIf="!simple" [class.joke]="is_fools_day">
                    <topbar-header
                        class="w-full"
                        [(showMenu)]="show"
                        [(filter)]="filter"
                    ></topbar-header>
                </header>
                <main
                    class="relative flex flex-1 h-0"
                    [class.filtered]="filter"
                >
                    <sidebar-menu
                        class="w-0 sm:w-auto"
                        *ngIf="!simple"
                        [(show)]="show"
                    ></sidebar-menu>
                    <div class="flex-1 w-0">
                        <router-outlet></router-outlet>
                    </div>
                </main>
                <ng-container *ngIf="filter">
                    <global-search [(search)]="filter"></global-search>
                </ng-container>
                <app-debug-output></app-debug-output>
                <app-upload-list *ngIf="!simple"></app-upload-list>
            </ng-container>
            <ng-template #load_state>
                <div
                    class="absolute inset-0 flex items-center justify-center z-50"
                >
                    <mat-spinner [diameter]="64"></mat-spinner>
                </div>
            </ng-template>
        </div>
        <div
            *ngIf="!online && !(loading | async)"
            class="fixed bottom-2 left-1/2 -translate-x-1/2 shadow rounded-3xl px-4 py-2 bg-error text-white text-xs z-[9999]"
        >
            Unable to reach server... Some features may not work.
        </div>
    `,
    styleUrls: [
        './styles/app.component.scss',
        './styles/utility.scss',
        './styles/custom-element.styles.scss',
        './styles/native-element.styles.scss',
    ],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent extends BaseClass implements OnInit {
    /** Whether the application is loading */
    private _loading = new BehaviorSubject<boolean>(false);
    /** Observable for whether the application is initialising */
    public readonly loading = this._loading.asObservable();
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

    constructor(
        private _settings: SettingsService,
        private _users: BackofficeUsersService,
        private _cache: SwUpdate,
        private _snackbar: MatSnackBar,
        private _router: Router
    ) {
        super();
    }

    public async ngOnInit() {
        /* istanbul ignore if */
        if (detectIE() && detectIE() < 12) {
            location.href = `${location.origin}${location.pathname}assets/not-supported.html`;
            return;
        }
        setNotifyOutlet(this._snackbar);
        this._loading.next(true);
        /** Wait for settings to initialise */
        await this._settings.initialised.pipe(first((_) => _)).toPromise();
        const settings = this._settings.get('composer') || {};
        settings.mock = !!this._settings.get('mock');
        /** Wait for authentication details to load */
        await setupPlace(settings).catch(() => this.onInitError());
        setupCache(this._cache);
        this.timeout('wait_for_user', () => this.onInitError(), 30 * 1000);
        await this._users.initialised.pipe(first((_) => _)).toPromise();
        this.clearTimeout('wait_for_user');
        this._loading.next(false);
        this.timeout('init_uploads', () => {
            initialiseUploadService({
                auto_start: true,
                token: token(),
                endpoint: '/api/files/v1/uploads',
                worker_url: 'assets/md5_worker.js',
                providers: [Amazon, Azure, Google, OpenStack] as any
            });
        });
        this.interval(
            'dark-mode',
            () => {
                this.dark_mode
                    ? document.body.classList.add('dark')
                    : document.body.classList.remove('dark');
            },
            200
        );
        this._router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.simple = this._router.url.includes('mqtt');
            }
        })
    }

    private onInitError() {
        if (isMock()) return;
        log('Init', 'Failed to initialise user. Restarting application...');
        invalidateToken();
        location.reload();
    }
}
