import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { getItemWithKeys } from '../shared/utilities/general.utilities';
import { DEFAULT_SETTINGS } from '../shared/globals/settings';
import { HashMap } from '../shared/utilities/types.utilities';
import { VERSION } from 'src/environments/version';
import { BaseClass } from '../shared/globals/base.class';

import * as dayjs from 'dayjs';

declare global {
    interface Window {
        debug: boolean;
    }
}

export type ConsoleStream = 'debug' | 'warn' | 'log' | 'error';

@Injectable({
    providedIn: 'root',
})
export class SettingsService extends BaseClass {
    /** Name of the application */
    private _app_name = 'ACA';
    /** List of override settings in order of priority */
    private _overrides = new BehaviorSubject<HashMap[]>([]);

    /**
     * @hidden
     */
    public set overrides(value: HashMap[]) {
        this._overrides.next(value);
    }

    constructor() {
        super();
        const now = dayjs();
        const build = dayjs(VERSION.time);
        const built = now.isSame(build, 'd')
            ? `Today at ${build.format('h:mmA')}`
            : build.format('D MMM YYYY, h:mmA');
        this.log('CORE', `${VERSION.core_version}`, null, 'debug', true);
        this.log(
            'APP',
            `${VERSION.version} - ${VERSION.hash} | Built: ${built}`,
            null,
            'debug',
            true
        );
        this.init();
    }

    /**
     * Initialise the settings
     */
    public async init() {
        if (this.get('debug')) {
            window.debug = true;
        }
        if (this.get('app')?.name) {
            this._app_name = this.get('app').name;
        }
        this.log('Settings', 'Successfully loaded settings');
        this._initialised.next(true);
    }

    /** Whether settings service has initialised */
    public get app_name() {
        return this._app_name;
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
    ) {
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
        if (keys[0] !== 'app') {
            return getItemWithKeys(keys, DEFAULT_SETTINGS);
        }
        const override_settings = this._overrides.getValue();
        for (const override of override_settings) {
            const value = getItemWithKeys(keys.slice(1), override);
            if (value != null) { return value; }
        }
        return getItemWithKeys(keys, DEFAULT_SETTINGS);
    }
}
