import {
    computed,
    inject,
    linkedSignal,
    resource,
    Service,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import {
    addApplication,
    get,
    PlaceApplication,
    PlaceDomain,
    PlaceLDAPSource,
    PlaceOAuthSource,
    PlaceSAMLSource,
    PlaceUser,
    queryApplications,
    queryLDAPSources,
    queryOAuthSources,
    querySAMLSources,
    queryUsers,
    removeApplication,
    removeLDAPSource,
    removeOAuthSource,
    removeSAMLSource,
    updateApplication,
    updateDomain,
} from '@placeos/ts-client';
import { filter, map } from 'rxjs';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { waitForEvent } from '../common/signals';
import { DialogEvent, FormModalComponent, Identity } from '../common/types';
import { AuthSourceModalComponent } from '../overlays/auth-source-modal.component';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import { ApplicationFormComponent } from './application-form.component';

export type PlaceAuthSource =
    | PlaceOAuthSource
    | PlaceSAMLSource
    | PlaceLDAPSource;

@Service()
export class DomainStateService {
    private _state = inject(ActiveItemService);
    private _dialog = inject(MatDialog);

    private readonly _router = inject(Router);
    private readonly _url = toSignal(
        this._router.events.pipe(
            filter(
                (event): event is NavigationEnd =>
                    event instanceof NavigationEnd,
            ),
            map((event) => event.urlAfterRedirects),
        ),
        { initialValue: this._router.url },
    );

    private _changed = signal(0);

    public readonly item = computed(
        () => this._state.item() as unknown as PlaceDomain,
    );

    private readonly _domain_id = computed(() => {
        const item = this.item();
        return item instanceof PlaceDomain ? item.id : undefined;
    });
    private readonly _tab = computed(
        () => this._url().split(/[?#]/)[0].split('/')[3],
    );
    // Once opened, retain a tab's data until the user selects another domain.
    private readonly _opened_tabs = linkedSignal<
        { id: string | undefined; tab: string },
        { id: string | undefined; tabs: Set<string> }
    >({
        source: () => ({ id: this._domain_id(), tab: this._tab() }),
        computation: ({ id, tab }, previous) => ({
            id,
            tabs: new Set<string>([
                ...(previous && previous.value.id === id
                    ? previous.value.tabs
                    : []),
                tab,
            ]),
        }),
    });
    private readonly _load_users = computed(() =>
        this._opened_tabs().tabs.has('users'),
    );
    private readonly _load_auth = computed(() =>
        this._opened_tabs().tabs.has('authentication'),
    );
    private readonly _load_applications = computed(() =>
        this._opened_tabs().tabs.has('applications'),
    );

    private readonly _users = resource({
        params: () =>
            this._domain_id()
                ? {
                      id: this._domain_id(),
                      changed: this._changed(),
                      full: this._load_users(),
                  }
                : undefined,
        loader: async ({ params }) => {
            const response = await queryUsers({
                authority_id: params.id,
                limit: params.full ? 1000 : 1,
            }).catch(() => ({ data: [] as PlaceUser[], total: 0 }));
            return {
                ...response,
                data: [...response.data].sort((a, b) =>
                    a.name.localeCompare(b.name),
                ),
            };
        },
    });
    public readonly users = computed(() =>
        this._load_users() ? this._users.value()?.data || [] : [],
    );

    private readonly _auth_sources = resource({
        params: () =>
            this._domain_id()
                ? {
                      id: this._domain_id(),
                      changed: this._changed(),
                      full: this._load_auth(),
                  }
                : undefined,
        loader: async ({ params }) => {
            const q = {
                authority_id: params.id,
                ...(params.full ? {} : { limit: 1 }),
            };
            const responses = await Promise.all([
                querySAMLSources(q),
                queryOAuthSources(q),
                queryLDAPSources(q),
            ]).catch(() => []);
            return {
                data: responses.flatMap(
                    (response): PlaceAuthSource[] => response.data,
                ),
                total: responses
                    .map((response) => response.total)
                    .reduce((total, count) => total + count, 0),
            };
        },
    });
    public readonly auth_sources = computed(() =>
        this._load_auth() ? this._auth_sources.value()?.data || [] : [],
    );

    private readonly _applications = resource({
        params: () =>
            this._domain_id()
                ? {
                      id: this._domain_id(),
                      changed: this._changed(),
                      full: this._load_applications(),
                  }
                : undefined,
        loader: async ({ params }) => {
            const response = await queryApplications({
                authority_id: params.id,
                ...(params.full ? {} : { limit: 1 }),
            }).catch(() => ({ data: [] as PlaceApplication[], total: 0 }));
            return {
                ...response,
                data: [...response.data].sort((a, b) =>
                    a.name.localeCompare(b.name),
                ),
            };
        },
    });
    public readonly applications = computed(() =>
        this._load_applications() ? this._applications.value()?.data || [] : [],
    );

    public readonly loading = computed(
        () =>
            this._users.isLoading() ||
            this._auth_sources.isLoading() ||
            this._applications.isLoading(),
    );
    public readonly counts = computed(() => ({
        applications: this._applications.value()?.total || 0,
        auth_sources: this._auth_sources.value()?.total || 0,
        users: this._users.value()?.total || 0,
    }));

    public get active_item() {
        return this._state.active_item;
    }

    public async update(domain: PlaceDomain) {
        const item = await updateDomain(domain.id, domain);
        this._state.replaceItem(item as unknown as Identity);
    }

    public async performAzureIntegration() {
        const item = this.active_item;
        if (!(item instanceof PlaceDomain)) return;
        const result = await get(
            `/api/engine/v2/admin_consent/${encodeURIComponent(item.id)}`,
        ).catch((error) => {
            notifyError(i18n('DOMAINS.AZURE_INTEGRATION_ERROR', { error }));
            throw error;
        });
        if (result.url) {
            window.open(result.url, '_blank', 'noopener noreferrer');
        }
    }

    /**
     * Open the modal to create a new system
     */
    public async editApplication(item?: PlaceApplication) {
        item = item || new PlaceApplication({ owner_id: this.active_item.id });
        const ref = this._dialog.open(ApplicationFormComponent, {
            data: {
                item,
                name: 'DOMAINS.APPLICATION',
                save: (i) => {
                    delete i.client_id;
                    return i.id
                        ? updateApplication(i.id, i)
                        : addApplication(i);
                },
            },
        });
        const instance = ref.componentInstance as unknown as FormModalComponent;
        const details = await Promise.race([
            waitForEvent(
                instance.event,
                (_: DialogEvent) => _.reason === 'done',
            ),
            waitForEvent(ref.afterClosed()),
        ]);
        if (!details) return;
        this._changed.set(new Date().valueOf());
    }

    /**
     * Remove application from domain
     * @param item Application to delete
     */
    public async deleteApplication(item: PlaceApplication) {
        const details = await openConfirmModal(
            {
                title: `Delete application`,
                content: `<p>Are you sure you want delete the application ${item.name}?</p><p>Configuration will be <strong>immediately</strong> updated</p>`,
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (!details) return;
        details.loading('Deleting domain application...');
        const err = await removeApplication(item.id).catch((_) => _);
        details.close();
        if (err)
            return notifyError(
                `Error removing domain application. Error: ${
                    err.responseText || err.message || err
                }`,
            );
        notifySuccess('Successfully removed domain application.');
        this._changed.set(new Date().valueOf());
    }

    /**
     * Open the modal to create a new system
     */
    public async editAuthSource(item?: PlaceAuthSource) {
        const ref = this._dialog.open(AuthSourceModalComponent, {
            data: {
                auth_source: item,
                domain: this.active_item,
            },
        });
        const details = await Promise.race([
            waitForEvent(
                ref.componentInstance.event,
                (_: DialogEvent) => _.reason === 'done',
            ),
            waitForEvent(ref.afterClosed()),
        ]);
        if (!details) return;
        this._changed.set(new Date().valueOf());
    }

    /**
     * Remove application from domain
     * @param item Application to delete
     */
    public async deleteAuthSource(item: PlaceAuthSource) {
        const details = await openConfirmModal(
            {
                title: `Delete auth source`,
                content: `<p>Are you sure you want delete this auth source?</p><p>Deleting this will remove this auth source <strong>immediately</strong></p>`,
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        details?.loading('Deleting domain auth source...');
        const method =
            item instanceof PlaceSAMLSource
                ? removeSAMLSource
                : item instanceof PlaceOAuthSource
                  ? removeOAuthSource
                  : removeLDAPSource;
        const err = await method(item.id).catch((_) => _);
        details.close();
        if (err)
            return notifyError(
                `Error removing domain auth source. Error: ${
                    err.responseText || err.message || err
                }`,
            );
        notifySuccess('Successfully removed domain auth source.');
        this._changed.set(new Date().valueOf());
    }
}
