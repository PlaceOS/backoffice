import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { invalidateToken, isMock, token } from '@placeos/ts-client';
import {
    UploadManager,
    Md5Workers,
    Amazon,
    Azure,
    Google,
    OpenStack,
} from '@acaprojects/ngx-uploads';

import { SettingsService } from './common/settings.service';
import { setupPlace } from './common/placeos';
import { setupCache } from './common/application';
import { setNotifyOutlet } from './common/notifications';
import { BaseClass } from './common/base.class';
import { log, detectIE } from './common/general';
import { BackofficeUsersService } from './users/users.service';
import { setUploadService } from './common/uploads';

@Component({
    selector: 'app-root',
    template: `
        <ng-container *ngIf="!(loading | async); else load_state">
            <header [class.dark-mode]="dark_mode" [class.joke]="is_fools_day">
                <topbar-header class="w-full" [(showMenu)]="show" [(filter)]="filter"></topbar-header>
            </header>
            <main class="flex flex-1 h-0" [class.filtered]="filter">
                <sidebar-menu class="h-full" [(show)]="show"></sidebar-menu>
                <div class="flex-1 w-0">
                    <router-outlet></router-outlet>
                </div>
            </main>
            <ng-container *ngIf="filter">
                <global-search [(search)]="filter"></global-search>
            </ng-container>
            <app-debug-output></app-debug-output>
            <app-upload-list></app-upload-list>
        </ng-container>
        <ng-template #load_state>
            <div class="absolute inset-0 flex items-center justify-center">
                <mat-spinner [diameter]="64"></mat-spinner>
            </div>
        </ng-template>
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

    public get dark_mode() {
        return this._users.dark_mode;
    }

    public get is_fools_day(): boolean {
        return false;
    }

    constructor(
        private _settings: SettingsService,
        private _users: BackofficeUsersService,
        private _cache: SwUpdate,
        private _snackbar: MatSnackBar,
        private _uploads: UploadManager,
        private _md5_workers: Md5Workers
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
        this.timeout('wait_for_user', () => this.onInitError(), 5 * 1000);
        await this._users.initialised.pipe(first((_) => _)).toPromise();
        this.clearTimeout('wait_for_user');
        this._loading.next(false);
        this.timeout('init_uploads', () => {
            this._md5_workers.setup('assets/md5_worker.js');
            this._uploads.token = token();
            this._uploads.autoStart = true;
            this._uploads.endpoint = '/api/files/v1/uploads';
            UploadManager.addProvider(Amazon);
            UploadManager.addProvider(Azure);
            UploadManager.addProvider(Google);
            UploadManager.addProvider(OpenStack);
            setUploadService(this._uploads);
        });
    }

    private onInitError() {
        if (isMock()) { return; }
        log('Init', 'Failed to initialise user. Restarting application...');
        invalidateToken();
        location.reload();
    }
}
