import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ComposerService } from '@acaprojects/ngx-composer';
import { ComposerOptions } from '@acaprojects/ts-composer';
import { GoogleAnalyticsService } from '@acaprojects/ngx-google-analytics';

import { Observable, BehaviorSubject, Subject, Subscription } from 'rxjs';

import { BaseClass } from '../shared/globals/base.class';
import { SettingsService, ConsoleStream } from './settings.service';
import { HashMap } from '../shared/utilities/types.utilities';

import { HotkeysService } from './hotkeys.service';
import { BackofficeCommentsService } from './data/comments.service';
import { BackofficeDiscoveryService } from './data/discovery.service';
import { BackofficeLogsService } from './data/logs.service';
import { BackofficeSearchService } from './data/search.service';
import { BackofficeStatsService } from './data/stats.service';
import { BackofficeSystemLogsService } from './data/system_logs.service';
import { BackofficeTestsService } from './data/tests.service';
import { BackofficeUsersService } from './data/users.service';
import { ApplicationIcon } from '../shared/utilities/settings.interfaces';

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
    protected _subjects: { [key: string]: BehaviorSubject<any> | Subject<any> } = {};
    /** Map of observables for state variables */
    protected _observers: { [key: string]: Observable<any> } = {};

    constructor(
        private _title: Title,
        private _router: Router,
        private _cache: SwUpdate,
        private _settings: SettingsService,
        private _composer: ComposerService,
        private _analytics: GoogleAnalyticsService,
        private _hotkeys: HotkeysService,
        private _engine_comments: BackofficeCommentsService,
        private _engine_discovery: BackofficeDiscoveryService,
        private _engine_logs: BackofficeLogsService,
        private _engine_search: BackofficeSearchService,
        private _engine_stats: BackofficeStatsService,
        private _engine_system_logs: BackofficeSystemLogsService,
        private _engine_tests: BackofficeTestsService,
        private _users: BackofficeUsersService,
        private _snackbar: MatSnackBar
    ) {
        super();
        this._engine_comments.parent = this._engine_discovery.parent = this._engine_logs.parent
            = this._engine_search.parent = this._engine_stats.parent = this._engine_system_logs.parent
            = this._engine_tests.parent = this._users.parent = this;
        this.set('system', null);
        this.init();
    }

    /** Analytics service */
    public get Analytics() {
        return this._analytics;
    }

    /** Hotkeys service */
    public get Hotkeys() {
        return this._hotkeys;
    }

    /** Users service */
    public get Users() {
        return this._users;
    }

    /** Engine Applications service */
    public get Applications() {
        return this._composer.applications;
    }

    /** Engine Auth Sources service */
    public get AuthSources() {
        return this._composer.auth_sources;
    }

    /** Comments service */
    public get Comments() {
        return this._engine_comments;
    }

    /** Driver Discovery service */
    public get Discovery() {
        return this._engine_discovery;
    }

    /** Engine Domains service */
    public get Domains() {
        return this._composer.domains;
    }

    /** Drivers service */
    public get Drivers() {
        return this._composer.drivers;
    }

    /** Engine Logs service */
    public get Logs() {
        return this._engine_logs;
    }

    /** Modules service */
    public get Modules() {
        return this._composer.modules;
    }

    /** Engine Search service */
    public get Search() {
        return this._engine_search;
    }

    public get Repositories() {
        return this._composer.repositories;
    }

    /** Stats service */
    public get Stats() {
        return this._engine_stats;
    }

    /** Engien System Logs service */
    public get SystemLogs() {
        return this._engine_system_logs;
    }

    /** System Triggers service */
    public get SystemTriggers() {
        return this._composer.system_triggers;
    }

    /** Systems service */
    public get Systems() {
        return this._composer.systems;
    }

    /** Testing service */
    public get Tests() {
        return this._engine_tests;
    }

    /** Triggers service */
    public get Triggers() {
        return this._composer.triggers;
    }

    /** Zones service */
    public get Zones() {
        return this._composer.zones;
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
        this._title.setTitle(`${value ? value + ' | ' : ''}${title_suffix || 'ACA Engine'}`);
    }

    /**
     * Title of the page
     */
    public get title(): string {
        return this._title.getTitle();
    }

    /** Root API Endpoint */
    public get endpoint() {
        return this._composer.auth.api_endpoint;
    }

    /** Root API Endpoint for engine */
    public get engine_endpoint() {
        return this._composer.auth.api_endpoint;
    }

    /** Whether settings and mock data has been loaded */
    public get is_ready() {
        return this._settings.setup && this._composer.is_initialised && this.get('ready');
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
    public notifySuccess(msg: string, action?: string, on_action?: () => void, duration: number = 8000): void {
        const icon: ApplicationIcon = { type: 'icon', class: 'material-icons', content: 'done' };
        this.notify('success', msg, action, on_action, icon, duration);
    }

    /**
     * Create success notification popup
     * @param msg Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     */
    public notifyError(msg: string, action?: string, on_action?: () => void, duration: number = 8000): void {
        const icon: ApplicationIcon = { type: 'icon', class: 'material-icons', content: 'error' };
        this.notify('error', msg, action, on_action, icon, duration);
    }

    /**
     * Create info notification popup
     * @param msg Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     */
    public notifyWarn(msg: string, action?: string, on_action?: () => void, duration: number = 8000): void {
        const icon: ApplicationIcon = { type: 'icon', class: 'material-icons', content: 'warning' };
        this.notify('warn', msg, action, on_action, icon, duration);
    }

    /**
     * Create info notification popup
     * @param msg Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     */
    public notifyInfo(msg: string, action?: string, on_action?: () => void, duration: number = 8000): void {
        const icon: ApplicationIcon = { type: 'icon', class: 'material-icons', content: 'info' };
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
    public listen<U = any>(name: string, next: (_: U) => void): Subscription {
        return this._observers[name] ? this._observers[name].subscribe(next) : null;
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

    /**
     * Initialise application services
     */
    private init(): void {
        // Wait until the settings have loaded before initialising
        if (!this._settings.setup) {
            return this.timeout('init', () => this.init());
        }
        this.setupComposer();
        // Setup analytics
        this._analytics.enabled = !!this.setting('app.analytics.enabled');
        if (this._analytics.enabled) {
            this._analytics.load(this.setting('app.analytics.tracking_id'));
        }
        this.setupCache();
        this.subscription('composer_init', this._composer.initialised.subscribe((state) => {
            if (state) {
                this.unsub('composer_init');
                this.set('ready', true);
                this.loadActiveUser();
            }
        }));
        // Add service to window if in debug mode
        if (window.debug) {
            window.application = this;
        }
    }

    /**
     * Initialise the composer library comms
     */
    private setupComposer(): void {
        this.log('SYSTEM', 'Setup up composer...');
        // Get application settings
        const settings = this.setting('composer') || {};
        const protocol = settings.protocol || location.protocol;
        const host = settings.domain || location.hostname;
        const port = settings.port || location.port;
        const url = settings.use_domain ? `${protocol}//${host}:${port}` : location.origin;
        const route = settings.route || '';
        const mock = this.setting('mock');
        // Generate configuration object
        const config: ComposerOptions = {
            scope: 'public',
            host: `${host}:${port}`,
            auth_uri: `${url}/auth/oauth/authorize`,
            token_uri: `${url}/auth/token`,
            redirect_uri: `${location.origin}${route}/oauth-resp.html`,
            handle_login: settings.handle_login,
            mock
        };
        this._composer.setup(config);
    }

    private loadActiveUser() {
        this.Users.show('current').then(user => this.set('user', user));
    }

    /**
     * Setup handler for cache change events
     */
    private setupCache() {
        if (this._cache.isEnabled) {
            this.subscription(
                'cache_update',
                this._cache.available.subscribe(event => {
                    const current = `current version is ${event.current.hash}`;
                    const available = `available version is ${event.available.hash}`;
                    this.log('CACHE', `Update available: ${current} ${available}`);
                    this.activateUpdate();
                })
            );
            this.subscription(
                'cache_activated',
                this._cache.activated.subscribe(() => {
                    this.log('CACHE', `Updates activated. Reloading...`);
                    this.notifyInfo(
                        'Newer version of the application is available',
                        'Refresh',
                        () => location.reload(true)
                    );
                })
            );
            setInterval(() => {
                this.log('CACHE', `Checking for updates...`);
                this._cache.checkForUpdate();
            }, 5 * 60 * 1000);
        }
    }

    /**
     * Update the cache and reload the page
     *
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
