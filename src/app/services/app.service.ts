import { Injectable, ApplicationRef, NgZone } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { first } from 'rxjs/operators';

import { setup, authority, apiEndpoint, PlaceAuthOptions } from '@placeos/ts-client';

import { GoogleAnalyticsService } from './google-analytics.service';
import { BaseClass } from '../shared/globals/base.class';
import { SettingsService, ConsoleStream } from './settings.service';
import { HashMap } from '../shared/utilities/types.utilities';
import { HotkeysService } from './hotkeys.service';
import { ApplicationIcon, ComposerOptions } from '../shared/utilities/settings.interfaces';

import * as Sentry from '@sentry/browser';

declare global {
    interface Window {
        application: ApplicationService;
        mock: {
            enabled: boolean;
            backend: any;
        };
    }
}

@Injectable({
    providedIn: 'root'
})
export class ApplicationService extends BaseClass {
    /** List of previous routes for return navigation */
    private _route_trail: string[] = [];
    /** Map of state variables for Service */
    protected _subjects: HashMap<BehaviorSubject<any> | Subject<any>> = {};
    /** Map of observables for state variables */
    protected _observers: HashMap<Observable<any>> = {};
    /** Whether the application has stablised */
    private _stable: boolean;

    /** Whether the application has stablised */
    public get is_stable(): boolean {
        return this._stable || false;
    }

    constructor(
        private _app_ref: ApplicationRef,
        private _zone: NgZone,
        private _title: Title,
        private _router: Router,
        private _cache: SwUpdate,
        private _settings: SettingsService,
        private _analytics: GoogleAnalyticsService,
        private _hotkeys: HotkeysService,
        private _snackbar: MatSnackBar
    ) {
        super();
        this.set('system', null);
        this.set('show_upload_manager', false);
        this._app_ref.isStable.pipe(first(_ => _)).subscribe(() => {
            this._zone.run(() => {
                this._stable = true;
                this.log('APP', `Application has stablised.`);
                this.setupCache();
                this.waitForSettings();
            });
        });
    }

    /** Analytics service */
    public get Analytics() {
        return this._analytics;
    }

    /** Hotkeys service */
    public get Hotkeys() {
        return this._hotkeys;
    }

    /**
     * Get a setting from the settings service
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    public setting(key: string): any {
        return this._settings.get(key);
    }

    /** Name of the application */
    public get name() {
        return this._settings.app_name;
    }

    /**
     * Title of the page
     */
    public set title(value: string) {
        const title_suffix = this.setting('app.title');
        this._title.setTitle(`${value ? value + ' | ' : ''}${title_suffix || 'PlaceOS'}`);
    }

    /**
     * Title of the page
     */
    public get title(): string {
        return this._title.getTitle();
    }

    /** Root API Endpoint */
    public get endpoint() {
        return apiEndpoint();
    }

    /** Root API Endpoint for engine */
    public get engine_endpoint() {
        return apiEndpoint();
    }

    /**
     * Create notification popup
     * @param type CSS Class to add to the notification
     * @param message Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     * @param icon Icon to render to the left of the notification message
     */
    public notify(
        type: string,
        message: string,
        action: string = 'OK',
        on_action?: () => void,
        icon: ApplicationIcon = {
            type: 'icon',
            class: 'material-icons',
            content: 'info'
        },
        duration: number = 8000
    ): void {
        const snackbar_ref = this._snackbar.open(message, action, {
            panelClass: [type],
            duration
        });
        this.subscription(
            'snackbar_close',
            snackbar_ref.afterDismissed().subscribe(() => {
                this.unsub('snackbar_close');
                this.unsub('notify');
            })
        );
        if (action) {
            on_action = on_action || (() => snackbar_ref.dismiss());
            this.subscription(
                'notify',
                snackbar_ref.onAction().subscribe(() => on_action())
            );
        }
    }

    /**
     * Create success notification popup
     * @param msg Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     */
    public notifySuccess(
        msg: string,
        action?: string,
        on_action?: () => void,
        duration: number = 8000
    ): void {
        const icon: ApplicationIcon = { type: 'icon', class: 'material-icons', content: 'done' };
        console.debug('[APP][USER_ACTION]', msg);
        this.notify('success', msg, action, on_action, icon, duration);
    }

    /**
     * Create success notification popup
     * @param msg Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     */
    public notifyError(
        msg: string,
        action?: string,
        on_action?: () => void,
        duration: number = 8000
    ): void {
        const icon: ApplicationIcon = { type: 'icon', class: 'material-icons', content: 'error' };
        console.error('[APP][USER_ACTION]', msg);
        this.notify('error', msg, action, on_action, icon, duration);
    }

    /**
     * Create info notification popup
     * @param msg Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     */
    public notifyWarn(
        msg: string,
        action?: string,
        on_action?: () => void,
        duration: number = 8000
    ): void {
        const icon: ApplicationIcon = { type: 'icon', class: 'material-icons', content: 'warning' };
        console.warn('[APP][USER_ACTION]', msg);
        this.notify('warn', msg, action, on_action, icon, duration);
    }

    /**
     * Create info notification popup
     * @param msg Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     */
    public notifyInfo(
        msg: string,
        action?: string,
        on_action?: () => void,
        duration: number = 8000
    ): void {
        const icon: ApplicationIcon = { type: 'icon', class: 'material-icons', content: 'info' };
        console.info('[APP][USER_ACTION]', msg);
        this.notify('info', msg, action, on_action, icon, duration);
    }

    /**
     * Log data to the browser console
     * @param type Type of message
     * @param msg Message body
     * @param args array of argments to log to the console
     * @param stream Stream to emit the console on. 'debug', 'log', 'warn' or 'error'
     * @param force Whether to force message to be emitted when debug is disabled
     */
    public log(
        type: string,
        msg: string,
        args?: any,
        stream: ConsoleStream = 'debug',
        force: boolean = false
    ): void {
        this._settings.log(type, msg, args, stream, force);
    }

    /**
     * Navigate to the given path
     * @param path Path or array of path parts
     * @param query Key value pairs to add to the URL as query parameters
     */
    public navigate(path: string | string[], query?: HashMap): void {
        const route = path instanceof Array ? [...path] : [path];
        this._route_trail.push(this._router.url);
        this._router.navigate(route, { queryParams: query });
    }

    /**
     * Navigate to the previous location in the route trail
     */
    public navigateBack(): void {
        if (this._route_trail && this._route_trail.length > 0) {
            const path = this._route_trail.pop();
            this._router.navigate([path]);
        } else {
            this._router.navigate(['']);
        }
    }

    /**
     * Get the current value of the named property
     * @param name Property name
     */
    public get<U = any>(name: string): U {
        return this._subjects[name] && this._subjects[name] instanceof BehaviorSubject
            ? (this._subjects[name] as BehaviorSubject<U>).getValue()
            : null;
    }

    /**
     * Listen to value change of the named property
     * @param name Property name
     * @param next Callback for value changes
     */
    public listen<U = any>(name: string): Observable<U> {
        return this._observers[name] ? this._observers[name] : null;
    }

    /**
     * Update the value of the named property
     * @param name Property name
     * @param value New value
     */
    public set<U = any>(name: string, value: U): void {
        if (!this._subjects[name]) {
            this._subjects[name] = new BehaviorSubject<U>(value);
            this._observers[name] = this._subjects[name].asObservable();
        } else {
            this._subjects[name].next(value);
        }
    }

    /** Wait for settings to be initialised before setting up the application */
    private waitForSettings() {
        // Wait until the settings have loaded before initialising
        this._settings.initialised.pipe(first(_ => _)).subscribe((setup) => {
            if (setup) {
                this.init();
            }
        });
    }

    /**
     * Initialise application services
     */
    private init(): void {
        this.setupComposer().then(() => {
            // Setup analytics
            this._analytics.enabled = !!this.setting('app.analytics.enabled');
            if (this._analytics.enabled) {
                this._analytics.load(this.setting('app.analytics.tracking_id'));
            }
            this.set('ready', true);
            const dsn = authority().sentry_dsn || this.setting('app.sentry_dsn');
            if (dsn) {
                Sentry.init({ dsn });
            }
            // Add service to window if in debug mode
            if (window.debug) {
                window.application = this;
            }
            this.timeout('init', () => this._initialised.next(true), 200);
        });
    }

    /**
     * Initialise the composer library comms
     */
    private setupComposer(): Promise<void> {
        this.log('SYSTEM', 'Setup up composer...');
        // Get application settings
        const settings: ComposerOptions = this.setting('composer') || {};
        const protocol = settings.protocol || location.protocol;
        const host = settings.domain || location.hostname;
        const port = settings.port || location.port;
        const url = settings.use_domain ? `${protocol}//${host}:${port}` : location.origin;
        const route = settings.route || '';
        const mock = this.setting('mock');
        const login_locally = location.search.indexOf('login=true') >= 0;
        // Generate configuration object
        const config: PlaceAuthOptions = {
            auth_type: 'auth_code',
            scope: 'public',
            host: `${host}:${port}`,
            auth_uri: `${url}/auth/oauth/authorize`,
            token_uri: `${url}/auth/oauth/token`,
            redirect_uri: `${location.origin}${route}/oauth-resp.html`,
            handle_login: !settings.local_login && !login_locally,
            mock
        };
        return setup(config);
    }

    /**
     * Setup handler for cache change events
     */
    private setupCache() {
        this.unsub('app_stable');
        this.log('CACHE', `Initialising cache...`);
        if (this._cache.isEnabled) {
            this.log('CACHE', `Listening to cache events...`);
            this._cache.activateUpdate();
            this.subscription('cache_update', this._cache.available.subscribe((event) => {
                const current = `current version is ${event.current.hash}`;
                const available = `available version is ${event.available.hash}`;
                this.log('CACHE', `Update available: ${current} ${available}`);
                this.activateUpdate()
            }));
            setInterval(() => {
                this.log('CACHE', `Checking for updates...`);
                this._cache.checkForUpdate();
            }, 5 * 60 * 1000);
        }
    }

    /**
     * Update the cache and reload the page
     */
    private activateUpdate() {
        if (this._cache.isEnabled) {
            this.log('CACHE', `Activating changes to the cache...`);
            this._cache.activateUpdate().then(() => {
                this.notifyInfo('Newer version of the application is available', 'Refresh', () =>
                    location.reload(true)
                );
            });
        }
    }
}
