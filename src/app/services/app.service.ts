import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { SystemsService } from '@acaprojects/ngx-composer';
import { AOverlayService } from '@acaprojects/ngx-overlays';
import { GoogleAnalyticsService } from '@acaprojects/ngx-google-analytics';

import { Observable, BehaviorSubject, Subject, Subscription } from 'rxjs';

import { BaseClass } from '../shared/globals/base.class';
import { SettingsService, ConsoleStream } from './settings.service';
import { HashMap } from '../shared/utilities/types.utilities';

import { HotkeysService } from './hotkeys.service';
import { UsersService } from './data/users/users.service';
import { OVERLAY_REGISTER } from '../shared/globals/overlay-register';
import { BackofficeApplicationService } from './data/application.service';
import { BackofficeAuthSourcesService } from './data/authsources.service';
import { BackofficeCommentsService } from './data/comments.service';
import { BackofficeDiscoveryService } from './data/discovery.service';
import { BackofficeDomainsService } from './data/domains.service';
import { BackofficeDriversService } from './data/drivers.service';
import { BackofficeLogsService } from './data/logs.service';
import { BackofficeModulesService } from './data/modules.service';
import { BackofficeNodesService } from './data/nodes.service';
import { BackofficeSearchService } from './data/search.service';
import { BackofficeStatsService } from './data/stats.service';
import { BackofficeSystemLogsService } from './data/system_logs.service';
import { BackofficeSystemTriggersService } from './data/system_triggers.service';
import { BackofficeSystemsService } from './data/systems.service';
import { BackofficeTestsService } from './data/tests.service';
import { BackofficeUsersService } from './data/users.service';
import { BackofficeTriggersService } from './data/triggers.service';
import { BackofficeZonesService } from './data/zones.service';

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
        private _version: SwUpdate,
        private _settings: SettingsService,
        private _overlay: AOverlayService,
        private _composer: SystemsService,
        private _analytics: GoogleAnalyticsService,
        private _hotkeys: HotkeysService,
        private _users: BackofficeUsersService,
        private _engine_apps: BackofficeApplicationService,
        private _engine_auth_sources: BackofficeAuthSourcesService,
        private _engine_comments: BackofficeCommentsService,
        private _engine_discovery: BackofficeDiscoveryService,
        private _engine_domains: BackofficeDomainsService,
        private _engine_drivers: BackofficeDriversService,
        private _engine_logs: BackofficeLogsService,
        private _engine_modules: BackofficeModulesService,
        private _engine_nodes: BackofficeNodesService,
        private _engine_search: BackofficeSearchService,
        private _engine_stats: BackofficeStatsService,
        private _engine_system_logs: BackofficeSystemLogsService,
        private _engine_system_triggers: BackofficeSystemTriggersService,
        private _engine_systems: BackofficeSystemsService,
        private _engine_tests: BackofficeTestsService,
        private _engine_triggers: BackofficeTriggersService,
        private _engine_zones: BackofficeZonesService
    ) {
        super();
        this._users.parent = this._engine_apps.parent = this._engine_auth_sources.parent = this._engine_comments.parent
            = this._engine_discovery.parent = this._engine_domains.parent = this._engine_drivers.parent = this._engine_logs.parent
            = this._engine_modules.parent = this._engine_nodes.parent = this._engine_search.parent = this._engine_stats.parent
            = this._engine_system_logs.parent = this._engine_system_triggers.parent = this._engine_systems.parent
            = this._engine_tests.parent = this._engine_triggers.parent = this._engine_zones.parent = this;
        this.set('system', null);
        this.init();
        this.registerOverlays();
    }

    /** Overlay service */
    public get Overlay(): AOverlayService {
        return this._overlay;
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
        return this._engine_apps;
    }

    /** Engine Auth Sources service */
    public get AuthSources() {
        return this._engine_auth_sources;
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
        return this._engine_domains;
    }

    /** Drivers service */
    public get Drivers() {
        return this._engine_drivers;
    }

    /** Engine Logs service */
    public get Logs() {
        return this._engine_logs;
    }

    /** Modules service */
    public get Modules() {
        return this._engine_modules;
    }

    /** Engine Nodes service */
    public get Nodes() {
        return this._engine_nodes;
    }

    /** Engine Search service */
    public get Search() {
        return this._engine_search;
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
        return this._engine_system_triggers;
    }

    /** Systems service */
    public get Systems() {
        return this._engine_systems;
    }

    /** Testing service */
    public get Tests() {
        return this._engine_tests;
    }

    /** Triggers service */
    public get Triggers() {
        return this._engine_triggers;
    }

    /** Zones service */
    public get Zones() {
        return this._engine_zones;
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
        this._title.setTitle(`${value ? value + ' | ' : ''}${title_suffix}`);
    }

    /**
     * Title of the page
     */
    public get title(): string {
        return this._title.getTitle();
    }

    /** Root API Endpoint */
    public get endpoint() {
        return `/control/api`;
    }

    /** Root API Endpoint for engine */
    public get engine_endpoint() {
        return `/control/api`;
    }

    /** Whether settings and mock data has been loaded */
    public get is_ready() {
        return this._settings.setup;
    }

    /**
     * Create notification popup
     * @param type CSS Class to add to the notification
     * @param msg Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     */
    public notify(type: string, msg: string, action?: string, on_action?: () => void): void {
        const content = `<div class="icon"><i class="material-icons"></i></div><div class="text">${msg}</div>`;
        this._overlay.notify(content, action, on_action, type);
    }

    /**
     * Create success notification popup
     * @param msg Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     */
    public notifySuccess(msg: string, action?: string, on_action?: () => void): void {
        this.notify('success', msg, action, on_action);
    }

    /**
     * Create success notification popup
     * @param msg Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     */
    public notifyError(msg: string, action?: string, on_action?: () => void): void {
        this.notify('error', msg, action, on_action);
    }

    /**
     * Create info notification popup
     * @param msg Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     */
    public notifyInfo(msg: string, action?: string, on_action?: () => void): void {
        this.notify('info', msg, action, on_action);
    }

    /**
     * Log data to the browser console
     * @param type Type of message
     * @param msg Message body
     * @param args array of argments to log to the console
     * @param stream Stream to emit the console on. 'debug', 'log', 'warn' or 'error'
     * @param force Whether to force message to be emitted when debug is disabled
     */
    public log(type: string, msg: string, args?: any, stream: ConsoleStream = 'debug', force: boolean = false): void {
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
        this._users.init();
        // Listen for service worker version changes
        this._version.available.subscribe(event => {
            const current = `current version is ${event.current.hash}`;
            const available = `available version is ${event.available.hash}`;
            this.log('CACHE', `Update available: ${current} ${available}`);
            // Device application so reloading is fine
            location.reload();
            // this.notifyInfo('Newer version of the app is available', 'Refresh', () => location.reload());
        });
        // Add service to window if in debug mode
        if (window.debug) {
            window.application = this;
        }

        this._hotkeys.listen(['Shift', 'Backslash'], () => {
            this.navigate('bootstrap', { clear: true });
        });
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
        const url = settings.use_domain ? `${protocol}//${host}` : location.origin;
        const route = settings.route || '';
        const mock = this.setting('mock');
        // Generate configuration object
        const config: any = {
            id: 'AcaEngine',
            scope: 'public',
            protocol,
            host,
            port: settings.port || (location.protocol.indexOf('https') >= 0 ? '443' : '80'),
            oauth_server: `${url}/auth/oauth/authorize`,
            oauth_tokens: `${url}/auth/token`,
            redirect_uri: `${location.origin}${route}/oauth-resp.html`,
            api_endpoint: `${url}/control/`,
            proactive: true,
            login_local: settings.local_login || (location.search || '').indexOf('prevent_login=true') >= 0 || false,
            http: !mock,
            mock: !!mock
        };
        this._composer.setup(config);
    }

    /**
     * Pre-register available overlays
     */
    private registerOverlays(): void {
        if (OVERLAY_REGISTER) {
            for (const overlay of OVERLAY_REGISTER) {
                this._overlay.register(overlay.id, overlay.config);
            }
        }
    }
}
