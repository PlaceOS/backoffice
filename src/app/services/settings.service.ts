import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { HashMap } from '../shared/utilities/types.utilities';
import { getItemWithKeys } from '../shared/utilities/general.utilities';
import { version, build, core_version } from '../shared/globals/application';

import * as dayjs from 'dayjs';

interface SettingsMap {
    api: HashMap;
    local: HashMap;
    session: HashMap;
    [block: string]: HashMap;
}

declare global {
    interface Window {
        debug: boolean;
    }
}

export type ConsoleStream = 'debug' | 'warn' | 'log' | 'error';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    /** Map of settings */
    private _settings: SettingsMap = { api: {}, local: {}, session: {} };
    /** Store for promises */
    private _promises: { [name: string]: Promise<any> } = {};
    /** Whether the service has been setup */
    private _setup = false;
    /** Name of the application */
    private _app_name = 'ACA';
    /** State store for the setup state of the service */
    private _is_setup = new BehaviorSubject<boolean>(false);
    /** Observer for the state store value */
    private _is_setup_observer: Observable<boolean>;

    constructor(private http: HttpClient) {
        this._is_setup_observer = this._is_setup.asObservable();
        const now = dayjs();
        const built = now.isSame(build, 'd') ? `Today at ${build.format('h:mmA')}` : build.format('D MMM YYYY, h:mmA');
        this.log('CORE', `${core_version}`, null, 'debug', true);
        this.log('APP', `${version} | Built: ${built}`, null, 'debug', true);
        this.init();
    }

    /**
     * Initialise the settings
     */
    public async init() {
        await this.loadFromFile('api');
        this.loadStore('local', localStorage);
        this.loadStore('session', sessionStorage);
        if (this._settings.api.debug) {
            window.debug = true;
        }
        if (this._settings.api.app && this._settings.api.app.name) {
            this._app_name = this._settings.api.app.name;
        }
        this.log('Settings', 'Successfully loaded settings');
        this._setup = true;
        this._is_setup.next(this._setup);
        this._is_setup.complete();
    }

    /** Whether settings service has initialised */
    public get setup() { return this._setup; }
    /** Whether settings service has initialised */
    public get app_name() { return this._app_name; }

    /**
     * Observer for the setup state of the settings service
     * @param next Callback for state changes
     */
    public isSetup(next: (v: boolean) => void): Subscription {
        return this._is_setup_observer.subscribe(next);
    }

    /**
     * Log data to the browser console
     * @param type Type of message
     * @param msg Message body
     * @param args array of argments to log to the console
     * @param stream Stream to emit the console on. 'debug', 'log', 'warn' or 'error'
     * @param force Whether to force message to be emitted when debug is disabled
     */
    public log(type: string, msg: string, args?: any, stream: ConsoleStream = 'debug', force: boolean = false) {
        if (window.debug || force) {
            const colors: string[] = ['color: #E91E63', 'color: #3F51B5', 'color: default'];
            if (args) {
                console[stream](`%c[${this.app_name}]%c[${type}] %c${msg}`, ...colors, args);
            } else {
                console[stream](`%c[${this.app_name}]%c[${type}] %c${msg}`, ...colors);
            }
        }
    }

    /**
     * Get a setting
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    public get(key: string): any {
        const keys = key.split('.');
        let value = null;
        if (keys[0] === 'session') {
            keys.shift();
            value = getItemWithKeys(keys, this._settings.session);
        } else if (keys[0] === 'local') {
            keys.shift();
            value = getItemWithKeys(keys, this._settings.local);
        } else {
            value = getItemWithKeys(keys, this._settings.api) ||
                getItemWithKeys(keys, this._settings.session) ||
                getItemWithKeys(keys, this._settings.local);
        }
        return value;
    }

    /**
     * Load settings from the given Storage object
     * @param name Root key for the settings
     * @param store Storage item to add to the load into the settings
     */
    private loadStore(name: string, store: Storage) {
        if (store) {
            for (let i = 0; i < store.length; i++) {
                const key = store.key(i);
                const item = store.getItem(key);
                if (item) { this._settings[name][key] = item; }
            }
        }
    }

    /**
     * Load setting data from a file
     * @param name Namespace to add file data to
     * @param file URL to file to load setting data from
     */
    private async loadFromFile(name: string, file: string = 'assets/settings.json', tries: number = 0) {
        if (file !== 'assets/settings.json' && tries > 5) {
            return Promise.resolve();
        }
        const key = `load|${name}|${file}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise<void>((resolve, reject) => {
                this.http.get(file).subscribe(
                    (data) => {
                        this._settings[name] = { ...(this._settings[name] || {}), ...(data || {}) };
                    }, (e) => {
                        this.log('Settings', `Failed to load settings from "${file}"`);
                        this._promises[key] = null;
                        this.loadFromFile(name, file, ++tries).then(() => resolve());
                    }, () => resolve()
                );
            });
        }
        return this._promises[key];
    }

}
