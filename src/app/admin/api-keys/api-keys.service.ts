import { Dialog } from '@angular/cdk/dialog';
import {
    computed,
    inject,
    linkedSignal,
    resource,
    Service,
    signal,
} from '@angular/core';
import { api_keys, ApiKey, root, User, users } from '@placeos/ts-client';
import { orThrow, orThrowPage } from '@placeos/ts-client/compat';
import { addDays, getUnixTime } from 'date-fns';
import { describeError } from '../../common/errors';
import { notifyError, notifySuccess } from '../../common/notifications';
import { toBody } from '../../common/placeos';
import { waitForDialog } from '../../common/signals';
import { currentUser } from '../../common/user-state';
import { confirmAndRun } from '../../overlays/confirm-modal.component';
import { AdminDataService } from '../admin-data.service';
import { permissionNumber, PlaceAPIKeyDetails } from './api-key-details.class';
import { APIKeyModalComponent } from './api-key-modal.component';

/** Values the API key modal saves */
type APIKeyFormData = Partial<Omit<PlaceAPIKeyDetails, 'permissions'>> & {
    permissions?: string | null;
    ttl?: number | null;
};

/** The request body of an API key, from the values of the modal */
function keyBody(data: APIKeyFormData) {
    const body = toBody(ApiKey, data);
    // `null` means no permissions. `toBody` leaves out nulls, so set it here
    return 'permissions' in data
        ? { ...body, permissions: permissionNumber(data.permissions) }
        : body;
}

/**
 * Expiry for a new API key in unix seconds, or `undefined` if it never expires.
 * An explicit `expires_at` wins. Otherwise `ttl` (seconds) counts from `now` (ms).
 */
export function apiKeyExpiry(
    { expires_at, ttl }: { expires_at?: number | null; ttl?: number | null },
    now = Date.now(),
): number | undefined {
    return expires_at ?? (ttl ? getUnixTime(now) + ttl : undefined);
}

/** Saves to try before a form closes, so a save loop always ends */
const MAX_SAVE_ATTEMPTS = 20;

@Service()
export class APIKeyService {
    private _dialog = inject(Dialog);
    private _admin_data = inject(AdminDataService);

    private _domain = this._admin_data.selectedDomain('api-keys');
    private _last_key = signal<PlaceAPIKeyDetails>(null);
    private _change = signal(0);
    private _loading = signal(false);

    public readonly last_key = this._last_key.asReadonly();
    public readonly active_domain = this._domain.asReadonly();
    public readonly loading = this._loading.asReadonly();

    private readonly _available_scopes = resource({
        loader: ({ abortSignal }) =>
            root.scopes({}, { signal: abortSignal }).then(orThrow),
    });

    public readonly available_scopes = computed(() =>
        this._available_scopes.hasValue() ? this._available_scopes.value() : [],
    );

    private readonly _available_keys = resource({
        params: () => ({
            domain: this._domain(),
            change: this._change(),
        }),
        loader: async ({ params, abortSignal }) => {
            const { domain } = params;
            this._loading.set(true);
            try {
                if (!domain) return [] as PlaceAPIKeyDetails[];
                const response = await api_keys
                    .query({ authority_id: domain.id }, { signal: abortSignal })
                    .then(orThrowPage);
                return [...response.data];
            } finally {
                // The newer load owns `loading` once this one is aborted
                if (!abortSignal.aborted) this._loading.set(false);
            }
        },
    });

    public readonly available_keys = computed(() =>
        this._available_keys.hasValue() ? this._available_keys.value() : [],
    );

    /**
     * Text of the error of the last key list load, or empty when it loaded.
     * A retry keeps the error until it ends, so the Retry button stays
     */
    public readonly load_error = linkedSignal<string, string>({
        source: () => this._available_keys.status(),
        computation: (status, previous) => {
            if (status === 'error') {
                return describeError(this._available_keys.error());
            }
            return status === 'reloading' ? (previous?.value ?? '') : '';
        },
    }).asReadonly();

    /** Loads the key list again, such as after a failed load */
    public reloadKeys() {
        this._available_keys.reload();
    }

    public async selectDefaultDomain() {
        return this._admin_data.selectDefaultDomain('api-keys');
    }

    public async newKey() {
        const ref = this._dialog.open(APIKeyModalComponent, {
            data: { domain: this._domain() },
        });
        // A failed save keeps the form open, so the user can fix it and
        // save again. Closing the form ends the loop.
        for (let attempt = 0; attempt < MAX_SAVE_ATTEMPTS; attempt++) {
            const details = await waitForDialog<APIKeyFormData>(ref, 'done');
            if (details?.reason !== 'done') return;
            ref.componentInstance.loading.set('Creating new API key...');
            const domain = this._domain();
            const api_key = details.metadata;
            const key = await api_keys
                .create({
                    body: keyBody({
                        ...api_key,
                        expires_at: apiKeyExpiry(api_key),
                        authority_id: domain.id,
                    }),
                })
                .then(orThrow)
                .catch((_) => {
                    ref.componentInstance.loading.set('');
                    notifyError(describeError(_));
                    return null;
                });
            if (!key) continue;
            this._last_key.set(key);
            this._change.set(Date.now());
            notifySuccess('Successfully created new API key.');
            break;
        }
        ref.close();
    }

    public async quickCreateKey() {
        const domain = this._domain();
        if (!domain) return;
        this._loading.set(true);
        try {
            const user = await this._currentUser();
            if (!user?.id) {
                notifyError('Unable to load current user details.');
                return;
            }
            const scopes = await this._scopes();
            if (!scopes.length) {
                notifyError('Unable to load API key scopes.');
                return;
            }
            const key = await api_keys
                .create({
                    body: keyBody({
                        name: `${this._userLabel(user)} API Key`,
                        description: `Created for ${this._userLabel(user)}`,
                        scopes: ['public'],
                        user_id: user.id,
                        permissions: 'user',
                        authority_id: domain.id,
                        expires_at: getUnixTime(addDays(Date.now(), 1)), // expire 1 day from creation
                    }),
                })
                .then(orThrow)
                .catch((_) => {
                    notifyError(describeError(_));
                    return null;
                });
            if (!key) return;
            this._last_key.set(key);
            this._change.set(Date.now());
            notifySuccess('Successfully created new API key.');
        } finally {
            this._loading.set(false);
        }
    }

    public async editKey(key: PlaceAPIKeyDetails) {
        const ref = this._dialog.open(APIKeyModalComponent, {
            data: { domain: this._domain(), key },
        });
        // As for a new key, a failed save keeps the form open
        for (let attempt = 0; attempt < MAX_SAVE_ATTEMPTS; attempt++) {
            const details = await waitForDialog<APIKeyFormData>(ref, 'done');
            if (details?.reason !== 'done') return;
            ref.componentInstance.loading.set('Updating API key...');
            const domain = this._domain();
            try {
                await api_keys
                    .update({
                        id: key.id,
                        body: keyBody({
                            ...details.metadata,
                            authority_id: domain.id,
                        }),
                    })
                    .then(orThrow);
            } catch (_) {
                ref.componentInstance.loading.set('');
                notifyError(describeError(_));
                continue;
            }
            this._change.set(Date.now());
            notifySuccess('Successfully updated API key.');
            break;
        }
        ref.close();
    }

    public async removeKey(key: PlaceAPIKeyDetails) {
        const removed = await confirmAndRun(
            this._dialog,
            {
                title: 'Remove API Key',
                content: `Are you sure you wish to remove this API key?
                    Removing this key may result in applications using this key to stop working.`,
                icon: { content: 'delete' },
            },
            {
                loading: 'Removing API key...',
                action: () => api_keys.destroy({ id: key.id }).then(orThrow),
                error: (reason) => reason,
                success: 'Successfully removed API key.',
            },
        );
        if (removed) this._change.set(Date.now());
    }

    private async _currentUser() {
        const cached_user = currentUser();
        if (cached_user?.id) return cached_user;
        return users
            .current({})
            .then(orThrow)
            .catch(() => null);
    }

    private async _scopes() {
        const scopes = this.available_scopes();
        if (scopes.length) return scopes;
        return root
            .scopes()
            .then(orThrow)
            .catch((): readonly string[] => []);
    }

    private _userLabel(user: User) {
        return user?.name || user?.email || 'Current User';
    }
}
