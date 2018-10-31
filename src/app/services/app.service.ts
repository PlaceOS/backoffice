/**
 * @Author: Alex Sorafumo <alex.sorafumo>
 * @Date:   12/01/2017 2:25 PM
 * @Email:  alex@yuion.net
 * @Filename: app.service.ts
 * @Last modified by:   Alex Sorafumo
 * @Last modified time: 03/02/2017 10:25 AM
 */

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { BehaviorSubject } from 'rxjs';

import { SystemsService } from '@acaprojects/ngx-composer';
import { OverlayService, NotificationComponent } from '@acaprojects/ngx-widgets';

import { SettingsService } from './settings.service';
import { AnalyticsService } from './data/analytics.service';
import { CommentsService } from './data/comments.service';

import { DriversService } from './data/drivers.service';
import { LogsService } from './data/logs.service';
import { ModulesService } from './data/modules.service';
import { SystemTriggersService } from './data/system_triggers.service';
import { TriggersService } from './data/triggers.service';
import { EngineSystemsService } from './data/systems.service';
import { UsersService } from './data/users.service';
import { ZonesService } from './data/zones.service';

import { Utils } from '../shared/utility.class';

import { ConfirmModalComponent } from '../overlays/confirm-modal/confirm-modal.component';
import { ViewModuleStateModalComponent } from '../overlays/view-module-state/view-module-state.component';
import { HotkeyService } from './hotkey.service';
import { ApplicationService } from './data/application.service';
import { AuthSourcesService } from './data/authsources.service';
import { DomainsService } from './data/domains.service';
import { NodesService } from './data/nodes.service';
import { EngineSearchService } from './data/search.service';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    private api_base = 'control/api';

    private subjects: any = {};
    private observers: any = {};

    private prev_route: string[] = [];
    private model: any = {};
    private timers: any = {};

    constructor(private _title: Title,
        private version: SwUpdate,
        private router: Router,
        private overlay: OverlayService,
        private analytics: AnalyticsService,
        private settings: SettingsService,
        private composer_systems: SystemsService,
        private comments: CommentsService,
        private drivers: DriversService,
        private logs: LogsService,
        private modules: ModulesService,
        private system_triggers: SystemTriggersService,
        private systems: EngineSystemsService,
        private triggers: TriggersService,
        private users: UsersService,
        private zones: ZonesService,
        private applications: ApplicationService,
        private auth_sources: AuthSourcesService,
        private domains: DomainsService,
        private nodes: NodesService,
        private search: EngineSearchService,
        private hotkey: HotkeyService
    ) {
            // Set parent service on child services
        this.analytics.parent = this.comments.parent = this.users.parent = this.logs.parent = this;
        this.drivers.parent = this.modules.parent = this.zones.parent = this.system_triggers.parent = this;
        this.systems.parent = this.triggers.parent = this.domains.parent = this;
            // Create subjects
        this.subjects.system = new BehaviorSubject('');
        this.observers.system = this.subjects.system.asObservable();
        this.subjects.systems = new BehaviorSubject<any[]>([]);
        this.observers.systems = this.subjects.systems.asObservable();
            // Register modals/overlay components
        this.overlay.registerService(this);
        this.overlay.setupModal('confirm', { cmp: ConfirmModalComponent });
        this.overlay.setupModal('view-module-state', { cmp: ViewModuleStateModalComponent });
        this.init();
    }

    get endpoint() {
        const host = this.Settings.get('composer.domain');
        const protocol = this.Settings.get('composer.protocol');
        const port = ((protocol === 'https:') ? '443' : '80');
        const url = `${protocol || location.protocol}//${host || location.host}`;
        const endpoint = `${url}`;
        return endpoint;
    }

    get api_endpoint() {
        return `${this.endpoint}/${this.api_base}`;
    }

    public init(tries: number = 0) {
        if (!this.settings.setup) {
            if (tries === 5)  { this.settings.init(); }
            return setTimeout(() => this.init(), 500);
        }
        this.version.available.subscribe(event => {
            this.settings.log('CACHE', `Update available: current version is ${event.current.hash} available version is ${event.available.hash}`);
            this.info('Newer version of the app is available', 'Refresh', () => {
                location.reload();
            });
        });
        if (this.settings.get('debug')) {
            (window as any).application = this;
            (window as any).utility = Utils;
        }
        this.model.title = this.settings.get('app.title') || 'Angular Application';
        this.initialiseComposer();
        if (this.users) {
            const sub = this.users.listen('state', (state) => {
                if (state === 'available') {
                    this.loadSystems();
                    sub.unsubscribe();
                }
            });
        } else {
            this.loadSystems();
        }
        this.analytics.init();
            // Initialise data services
        this.users.init();
        NotificationComponent.timeout(5000);
        setInterval(() => this.checkCache(), 5 * 60 * 1000);
    }

    public ready() {
        const mock = this.settings.get('mock') ? (window as any).backend : null;
        const app_ready = this.settings.setup && this.users.current();
        return app_ready && (!mock || mock.is_loaded);
    }

    public logout() {
        this.users.logout();
    }

    public initialiseComposer(tries: number = 0) {
        this.settings.log('SYSTEM', 'Initialising Composer...');
            // Get domain information for configuring composer
        const host = this.settings.get('composer.domain') || location.hostname;
        const protocol = this.settings.get('composer.protocol') || location.protocol;
        const port = (protocol.indexOf('https') >= 0 ? '443' : '80');
        const url = this.settings.get('composer.use_domain') ? `${protocol}//${host}` : location.origin;
        const route = this.settings.get('composer.route') || '';
            // Generate configuration for composer
        const config: any = {
            id: 'AcaEngine',
            scope: 'public',
            protocol, host, port,
            oauth_server: `${url}/auth/oauth/authorize`,
            oauth_tokens: `${url}/auth/token`,
            redirect_uri: `${location.origin}${route}/oauth-resp.html`,
            api_endpoint: `${url}/control/`,
            proactive: true,
            login_local: this.settings.get('composer.local_login') || false,
            http: true,
        };
            // Enable mock/development environment if the settings is defined
        const mock = this.settings.get('mock');
        if (mock) {
            config.mock = true;
            config.http = false;
        }
            // Setup/Initialise composer
        this.composer_systems.setup(config);
    }
    /**
     * Listen to changes of given property
     * @param name Name of the property
     * @param next Callback for changes to properties value
     */
    public listen(name: string, next: (data: any) => void) {
        if (this.subjects[name]) {
            return this.observers[name].subscribe(next);
        } else {
                // Create new variable to store property's value
            this.subjects[name] = new BehaviorSubject<any>(this[name] instanceof Function ? null : this[name]);
            this.observers[name] = this.subjects[name].asObservable();
                // Create raw getter and setter for property
            if (!(this[name] instanceof Function)) {
                Object.defineProperty(this, name, {
                    get: () => this.get(name),
                    set: (v: any) => this.set(name, v)
                });
            }
            return this.observers[name].subscribe(next);
        }
    }

    /**
     * Get the current value of the given property
     * @param name Name of the property
     */
    public get(name: string) {
        return this.subjects[name] ? this.subjects[name].getValue() : null;
    }

    /**
     * Set the value of the given property
     * @param name Name of the property
     * @param value New value to assign to the property
     */
    public set(name: string, value: any) {
        if (this.subjects[name]) {
            this.subjects[name].next(value);
        } else {
                // Create new variable to store property's value
            this.subjects[name] = new BehaviorSubject<any>(value);
            this.observers[name] = this.subjects[name].asObservable();
                // Create raw getter and setter for property
            if (!(this[name] instanceof Function)) {
                Object.defineProperty(this, name, {
                    get: () => this.get(name),
                    set: (v: any) => this.set(name, v)
                });
            }
        }
    }

    get Analytics() { return this.analytics; }
    get Settings() { return this.settings; }
    get Overlay() { return this.overlay; }
    get Systems() { return this.systems; }
    get system() { return this.subjects.system.getValue(); }
    set system(value: string) { this.subjects.system.next(value); }
    get Hotkey() { return this.hotkey; }
        // Getters for data/API services
    get Applications() { return this.applications; }
    get AuthSources() { return this.auth_sources; }
    get Domains() { return this.domains; }
    get Drivers() { return this.drivers; }
    get Logs() { return this.logs; }
    get Modules() { return this.modules; }
    get SystemTriggers() { return this.system_triggers; }
    get Triggers() { return this.triggers; }
    get Users() { return this.users; }
    get Zones() { return this.zones; }
    get Nodes() { return this.nodes; }
    get Search() { return this.search; }
    /**
     * Set the page title
     * @param str New value to set the page title
     */
    set title(str: string) {
        if (!this.model.title) {
            this.model.title = this.settings.get('app.title') || '';
        }
        const title = `${str ? str : ''}${this.model.title ? ' | ' + this.model.title : ''}`;
        this._title.setTitle(title || this.settings.get('app.title'));
    }

    /**
     * Get the current page title
     */
    get title() {
        return this._title.getTitle();
    }

    /**
     * Wrapper for Angular Router navigate method
     * @param path Path to navigate
     * @param query Query parameter to add to the route
     */
    public navigate(path: string | string[], query?: any) {
        let path_list = [];
        if (path instanceof Array) {
            path_list = path_list.concat(path);
        } else {
            path_list.push(path);
        }
        this.prev_route.push(this.router.url);
        // if (!this.composer_systems.resources.authLoaded) {
        this.router.navigate(path_list, { queryParams: query });
        // } else {
        // this.router.navigate([path]);
        // }
    }

    /**
     * Return to the previous page
     */
    public back() {
        if (this.prev_route.length > 0) {
            this.navigate(this.prev_route.pop());
            this.prev_route.pop();
        } else {
            this.navigate('');
        }
    }

    /**
     * Log message to the console
     * @param type Message prefix
     * @param msg Message to emit
     * @param args Arguments to attach to log
     * @param stream Stream to output the message
     */
    public log(type: string, msg: string, args?: any, stream: string = 'debug') {
        this.settings.log(type, msg, args, stream);
    }

    /**
     * Open confirm modal
     * @param options Options to pass to the modal
     * @param next Callback for events on the modal
     */
    public confirm(options: any, next: (event: any) => void) {
        this.Overlay.openModal('confirm', {
            data: options,
        }).then((inst: any) => inst.subscribe(next));
    }

    /**
     * Create a new error notification
     * @param msg Message to display
     * @param action User action to display
     * @param event Callback for user action
     */
    public error(msg: string, action?: string, event?: () => void) {
        const message = msg ? msg : `Error`;
        this.overlay.notify('success', {
            html: `<div class="display-icon error" style="font-size:2.0em"></div><div class="msg">${message}</div>`,
            name: 'ntfy error',
            action
        }, event);
    }

    /**
     * Create a new success notification
     * @param msg Message to display
     * @param action User action to display
     * @param event Callback for user action
     */
    public success(msg: string, action?: string, event?: () => void) {
        const message = msg ? msg : `Success`;
        this.overlay.notify('success', {
            html: `<div class="display-icon success" style="font-size:2.0em"></div><div class="msg">${message}</div>`,
            name: 'ntfy success',
            action
        }, event);
    }

    /**
     * Create a new success notification
     * @param msg Message to display
     * @param action User action to display
     * @param event Callback for user action
     */
    public warning(msg: string, action?: string, event?: () => void) {
        const message = msg ? msg : `Warning`;
        this.overlay.notify('success', {
            html: `<div class="display-icon warning" style="font-size:2.0em"></div><div class="msg">${message}</div>`,
            name: 'ntfy warning',
            action
        }, event);
    }

    /**
     * Create a new informational notification
     * @param msg Message to display
     * @param action User action to display
     * @param event Callback for user action
     */
    public info(msg: string, action?: string, event?: () => void) {
        const message = msg ? msg : `Information`;
        this.overlay.notify('info', {
            html: `<div class="display-icon info" style="font-size:2.0em"></div></div><div class="msg">${message}</div>`,
            name: 'ntfy info',
            action
        }, event);
    }

    get iOS() {
        return Utils.isMobileSafari();
    }

    public getSystem(id: string) {
        const system_list = this.subjects.systems.getValue();
        if (system_list) {
            for (const system of system_list) {
                if (system.id === id) {
                    return system;
                }
            }
        }
        return {};
    }

    private addSystems(list: any[]) {
        const system_list = this.subjects.systems.getValue().concat(list);
        system_list.sort((a, b) => a.name.localeCompare(b.name));
        this.subjects.systems.next(system_list);
    }

    private loadSystems(tries: number = 0) {
        if (this.timers.system) {
            clearTimeout(this.timers.system);
            this.timers.system = null;
        }
        if (tries > 20) { return; }
        const systems = this.composer_systems.resources.get('System');
        if (systems) {
            tries = 0;
            systems.get({ offset: '0', limit: 500 }).then((sys_list: any) => {
                this.subjects.systems.next([]);
                if (sys_list) {
                    const count = sys_list.total;
                    if (count > 500) {
                        const iter = Math.ceil((count - 500) / 500);
                        for (let i = 0; i < iter; i++) {
                            systems.get({ offset: (i + 1) * 500, limit: 500 }).then((list: any) => {
                                if (list) {
                                    this.addSystems(list.results);
                                }
                            });
                        }
                    }
                    this.addSystems(sys_list.results);
                } else {
                    this.timers.system = setTimeout(() => this.loadSystems(tries), 200 * ++tries);
                }
            }, (err: any) => {
                this.timers.system = setTimeout(() => this.loadSystems(tries), 200 * ++tries);
            });
        } else {
            this.timers.system = setTimeout(() => this.loadSystems(tries), 200 * ++tries);
        }
    }

    private checkCache() {
        if (this.version.isEnabled) {
            this.settings.log('SYSTEM', 'Checking cache for updates');
            this.version.checkForUpdate()
                .then(() => this.settings.log('SYSTEM', 'Finished checking cache for updates'))
                .catch(err => this.settings.log('SYSTEM', err, null, 'error'));
        }
    }

}
