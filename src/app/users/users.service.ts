import { Service, inject, signal } from '@angular/core';
import {
    PlaceUser,
    PlaceUserQueryOptions,
    currentUser,
    logout,
    onlineState,
    queryUsers,
} from '@placeos/ts-client';

import { AsyncHandler } from '../common/async-handler.class';
import { SettingsService } from '../common/settings.service';
import { loadSupportAccess } from '../common/support-access';
import { FilterFn } from '../common/types';
import { current_user, setCurrentUser } from '../common/user-state';

type ServiceItem = PlaceUser;

/** Attempts `load` makes before it waits for the next reconnect */
const MAX_LOAD_ATTEMPTS = 12;

@Service()
export class BackofficeUsersService extends AsyncHandler {
    private _settings = inject(SettingsService);

    /** Name for a single user */
    public readonly singular: string = 'user';
    /** Signal with the currently available list of users */
    public readonly listing = signal<ServiceItem[]>([]);

    /** Active User */
    public readonly user = current_user;
    /** Active User */
    public readonly current = () => this.user();

    /** Active User */
    public readonly currentSignal = () => this.user;
    /** State of loading the user */
    public readonly state = signal('');

    public readonly can_create: boolean = false;
    public readonly can_edit: boolean = true;

    /** Whether dark mode is enabled */
    public get dark_mode(): boolean {
        const os_dark = window?.matchMedia
            ? window?.matchMedia('(prefers-color-scheme: dark)')?.matches
            : false;
        const theme =
            localStorage.getItem('BACKOFFICE.theme') ??
            ((this.user() || {}) as Record<string, unknown>).ui_theme;
        return (theme && theme === 'dark') || (!theme && os_dark);
    }
    public set dark_mode(state: boolean) {
        if (state) {
            localStorage.setItem('BACKOFFICE.theme', 'dark');
            this._settings.post('dark_mode', state);
            document.body.classList.add('dark-mode');
        } else {
            localStorage.setItem('BACKOFFICE.theme', 'light');
            document.body.classList.remove('dark-mode');
        }
    }
    /** Default method for filtering the available list */
    private _filter_fn: FilterFn<ServiceItem> = (_) => true;

    constructor() {
        super();
        const unsubscribe = onlineState().subscribe((online) => {
            if (online) this.load();
        });
        this.subscription('online', unsubscribe);
    }

    /**
     * Get the available list of zones
     * @param predicate Function to filter the zone list on
     */
    public list(predicate: FilterFn<PlaceUser> = this._filter_fn): PlaceUser[] {
        return (this.listing() || []).filter(predicate);
    }

    public async query(
        query_params?: PlaceUserQueryOptions,
    ): Promise<PlaceUser[]> {
        return (await queryUsers(query_params)).data;
    }

    /**
     * Load the signed-in user and their support access. Retries with backoff
     * while the user is not available, and gives up after
     * `MAX_LOAD_ATTEMPTS` until the next reconnect calls it again.
     */
    public load(attempt = 0): Promise<void> {
        return new Promise((resolve) => {
            this.state.set('loading');
            const retry = () => {
                if (attempt + 1 >= MAX_LOAD_ATTEMPTS) {
                    this.state.set('error');
                    return resolve();
                }
                this.timeout(
                    'load',
                    () => this.load(attempt + 1).then(() => resolve()),
                    Math.min(600 * 2 ** attempt, 30 * 1000),
                );
            };
            currentUser()
                .then(async (user) => {
                    if (!user) return retry();
                    await loadSupportAccess(user);
                    setCurrentUser(user);
                    this.state.set('success');
                    this._initialised.set(true);
                    // Trigger dark mode getter to apply current theme
                    const _current_theme = this.dark_mode;
                    resolve();
                })
                .catch(retry);
        });
    }

    /**
     * Login with given credentials
     * @param fields Key value pairs of post parameters
     */
    public login(_fields: Record<string, unknown> = {}) {
        // Login functionality is handled by PlaceOS OAuth
    }

    /**
     * Logout from the application
     */
    public logout() {
        logout();
    }
}
