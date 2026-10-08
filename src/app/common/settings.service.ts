import {
    Service,
    Signal,
    WritableSignal,
    inject,
    isDevMode,
    signal,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { showMetadata, updateMetadata } from '@placeos/ts-client';

import { AsyncHandler } from './async-handler.class';
import { getItemWithKeys, log } from './general';
import { DEFAULT_SETTINGS } from './settings';
import { waitForSignalValue } from './signals';
import { HashMap } from './types';

import { VERSION } from '../../env/version';
import { currentUser, current_user } from './user-state';

declare global {
    interface Window {
        debug: boolean;
        application: HashMap<unknown>;
    }
}

@Service()
export class SettingsService extends AsyncHandler {
    private _title = inject(Title);

    /** Name of the application */
    private _app_name = 'PlaceOS';
    /** User's personal settings */
    private _user_settings = signal<HashMap>({});
    /** Mapping of named settings signals */
    private _signals: HashMap<WritableSignal<unknown>> = {};
    /** Mapping of pending settings */
    private _pending_settings: HashMap<unknown> = {};

    /** Get signal for key */
    public listen<T = unknown>(name: string): Signal<T> {
        if (!this._signals[name]) {
            this._signals[name] = signal<T>(null);
        }
        return this._signals[name].asReadonly() as Signal<T>;
    }

    /** Update signal value for key */
    public post<T>(name: string, value: T): void {
        if (!this._signals[name]) {
            this._signals[name] = signal<T>(null);
        }
        (this._signals[name] as WritableSignal<T>).set(value);
    }

    /** Read the value for key. Tracks the key even before it is posted. */
    public value<T = unknown>(name: string): T {
        return this.listen<T>(name)();
    }

    /** Page title */
    public get title() {
        return this._title.getTitle();
    }
    public set title(value: string) {
        this._title.setTitle(
            `${value} | ${this.get('app.name') || this._app_name}`,
        );
    }

    constructor() {
        super();
        const now = new Date();
        const time = new Date(VERSION.time);
        const built =
            now.toDateString() === time.toDateString()
                ? `Today at ${time.toLocaleTimeString([], { timeStyle: 'short' })}`
                : time.toLocaleString([], {
                      dateStyle: 'medium',
                      timeStyle: 'short',
                  });
        log('CORE', `${VERSION.semver}`, null, 'debug', true);
        log('APP', `${VERSION.hash} | Built: ${built}`, null, 'debug', true);
        this.init();
    }

    /**
     * Initialise the settings
     */
    public async init() {
        this._applyTheme();
        // Debug output is on for dev builds. To debug a production build,
        // set localStorage `BACKOFFICE.debug` to `true` and reload.
        if (
            this.get('debug') ||
            isDevMode() ||
            localStorage.getItem('BACKOFFICE.debug') === 'true'
        ) {
            window.debug = true;
        }
        const app = this.get('app') as { name?: string } | undefined;
        if (app?.name) {
            this._app_name = app.name;
        }
        this._app_name =
            location.pathname.replace(/[\\/]/g, '').trim() || this._app_name;
        log('Settings', 'Successfully loaded settings');
        this._initialised.set(true);
        if (window.debug) {
            if (!window.application) window.application = {};
            window.application.settings = this;
        }
        const user = await waitForSignalValue(
            current_user,
            (user) => !!user,
        ).catch(() => null);
        if (!user) return;
        const data = await showMetadata(user.id, 'settings');
        this._user_settings.set((data.details || {}) as HashMap);
        this._initDarkMode();
        this._applyTheme();
        this._setFontSize();
    }

    /** Whether settings service has initialised */
    public get app_name() {
        return this._app_name;
    }

    public get time_format(): string {
        return this.get('app.use_24_hour_time') ? 'HH:mm' : 'h:mm a';
    }

    /**
     * Get a setting
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    public get<T = unknown>(key: string): T {
        const keys = key.split('.');
        if (keys[0] !== 'app') {
            return (getItemWithKeys(keys, this._pending_settings) ??
                getItemWithKeys(keys, this._user_settings()) ??
                getItemWithKeys(
                    keys,
                    DEFAULT_SETTINGS as HashMap<unknown>,
                )) as T;
        }
        return getItemWithKeys(keys, DEFAULT_SETTINGS as HashMap<unknown>) as T;
    }

    public saveUserSetting<T>(name: string, value: T) {
        this._pending_settings[name] = value;
        if (name === 'dark_mode') this.setTheme(value ? 'dark' : '');
        if (name === 'font_size') this._setFontSize();
        this.timeout('save_settings', () => this._savePendingChanges(), 5000);
    }

    public overrideCssVariable(key: string, value: string, important = false) {
        let element = document.getElementById(`css-var-overrides+${key}`);
        if (!element) {
            element = document.createElement('style');
            element.id = `css-var-overrides+${key}`;
            document.head.appendChild(element);
        }
        element.innerText = `html, body { --${key}: ${value} ${
            important ? '!important' : ''
        }}`;
    }

    public setTheme(theme: string) {
        const current_theme = this.get('theme');
        if (current_theme === theme) return;
        this.saveUserSetting('theme', theme);
        localStorage.setItem('PLACEOS.theme', theme);
        this._applyTheme();
    }

    /**
     * Save pending settings to the user's metadata.
     * Settings changed while the request is in flight stay pending for the
     * next save. On failure, the unsaved settings go back into the pending list.
     */
    private async _savePendingChanges() {
        const user = currentUser();
        if (!user?.id || !Object.keys(this._pending_settings).length) return;
        const pending = this._pending_settings;
        this._pending_settings = {};
        const details = { ...this._user_settings(), ...pending } as HashMap;
        this._user_settings.set(details);
        try {
            await updateMetadata(user.id, {
                name: 'settings',
                description: '',
                details,
            });
        } catch (err) {
            // Newer changes win over the failed ones
            this._pending_settings = { ...pending, ...this._pending_settings };
            log(
                'Settings',
                'Failed to save user settings',
                [err as object],
                'warn',
                true,
            );
        }
    }

    private _setFontSize() {
        if (!this.get('font_size')) return;
        this.overrideCssVariable('font-size', `${this.get('font_size')}px`);
    }

    private _applyTheme() {
        const theme =
            this.get('theme') || localStorage.getItem('PLACEOS.theme');
        const class_list = document.body.classList.value.split(' ');
        for (const item of class_list) {
            if (item.startsWith('theme-')) {
                document.body.classList.remove(item);
            }
        }
        if (theme) {
            document.body.classList.add(`theme-${theme}`);
        } else {
            document.body.classList.remove(`theme-${theme}`);
        }
    }

    private _initDarkMode() {
        if (this.get('theme')) return;
        const os_dark = window?.matchMedia
            ? window?.matchMedia('(prefers-color-scheme: dark)')?.matches
            : false;
        this.setTheme(os_dark ? 'dark' : '');
    }
}
