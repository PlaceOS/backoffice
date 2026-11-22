import { Dialog } from '@angular/cdk/dialog';
import {
    computed,
    inject,
    linkedSignal,
    resource,
    Service,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import {
    Application,
    Domain,
    domains,
    ldap_authentications,
    oauth_applications,
    oauth_authentications,
    saml_authentications,
    tenant_consent,
    User,
    users,
} from '@placeos/ts-client';
import { orThrow, orThrowPage } from '@placeos/ts-client/compat';
import { filter, map } from 'rxjs';
import { describeError } from '../common/errors';
import { escapeHtml } from '../common/general';
import { ActiveItemService } from '../common/item.service';
import { reportLoadError } from '../common/load-error';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { newItem, toBody } from '../common/placeos';
import { waitForDialog } from '../common/signals';
import { Identity } from '../common/types';
import { AuthSourceModalComponent } from '../overlays/auth-source-modal.component';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import { ApplicationFormComponent } from './application-form.component';
import { authSourceType, type PlaceAuthSource } from './auth-sources.utilities';

export type { PlaceAuthSource } from './auth-sources.utilities';

@Service()
export class DomainStateService {
    private _state = inject(ActiveItemService);
    private _dialog = inject(Dialog);

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
        () => this._state.item() as unknown as Domain,
    );

    private readonly _domain_id = computed(
        () => this._state.activeOf('domains')?.id || undefined,
    );
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
            const response = await users
                .query({
                    authority_id: params.id,
                    limit: params.full ? 1000 : 1,
                })
                .then(orThrowPage)
                .catch(reportLoadError({ data: [] as User[], total: 0 }));
            return {
                ...response,
                data: response.data
                    .map((user) => newItem(User, user))
                    .sort((a, b) => a.name.localeCompare(b.name)),
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
            // One failing source type should not hide the others
            const results = await Promise.allSettled([
                saml_authentications.query(q).then(orThrowPage),
                oauth_authentications.query(q).then(orThrowPage),
                ldap_authentications.query(q).then(orThrowPage),
            ]);
            const responses = results
                .filter((result) => result.status === 'fulfilled')
                .map((result) => result.value);
            return {
                data: responses.flatMap(
                    (response): readonly PlaceAuthSource[] => response.data,
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
            const response = await oauth_applications
                .query({
                    authority_id: params.id,
                    ...(params.full ? {} : { limit: 1 }),
                })
                .then(orThrowPage)
                .catch(
                    reportLoadError({ data: [] as Application[], total: 0 }),
                );
            // The API document gives no schema for the list, so parse each item
            return {
                ...response,
                data: response.data
                    .map((app) => newItem(Application, app))
                    .sort((a, b) => a.name.localeCompare(b.name)),
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

    public async update(domain: Domain) {
        const item = await domains
            .update({ id: domain.id, body: toBody(Domain, domain) })
            .then(orThrow);
        this._state.replaceItem(item as unknown as Identity);
    }

    public async performAzureIntegration() {
        const item = this._state.activeOf('domains');
        if (!item) return;
        const result = await tenant_consent
            .query({ id: item.id })
            .then(orThrow)
            .catch((error) => {
                notifyError(
                    i18n('DOMAINS.AZURE_INTEGRATION_ERROR', {
                        error: describeError(error),
                    }),
                );
                return null;
            });
        if (result?.url) {
            window.open(result.url, '_blank', 'noopener noreferrer');
        }
    }

    /**
     * Open the modal to create a new system
     */
    public async editApplication(item?: Application) {
        item = item || newItem(Application, { owner_id: this.active_item.id });
        const ref = this._dialog.open(ApplicationFormComponent, {
            data: { item, name: 'DOMAINS.APPLICATION' },
        });
        const details = await waitForDialog(ref, 'done');
        if (details?.reason !== 'done') return;
        this._changed.set(new Date().valueOf());
    }

    /**
     * Remove application from domain
     * @param item Application to delete
     */
    public async deleteApplication(item: Application) {
        const details = await openConfirmModal(
            {
                title: `Delete application`,
                content: `<p>Are you sure you want delete the application ${escapeHtml(item.name)}?</p><p>Configuration will be <strong>immediately</strong> updated</p>`,
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        details.loading('Deleting domain application...');
        const err = await oauth_applications
            .destroy({ id: item.id })
            .then(orThrow)
            .catch((_) => _);
        details.close();
        if (err)
            return notifyError(
                `Error removing domain application. Error: ${describeError(
                    err,
                )}`,
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
        const details = await waitForDialog(ref, 'done');
        if (details?.reason !== 'done') return;
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
        const api = {
            saml: saml_authentications,
            oauth: oauth_authentications,
            ldap: ldap_authentications,
        }[authSourceType(item)];
        const err = await api
            .destroy({ id: item.id })
            .then(orThrow)
            .then(() => null)
            .catch((_) => _);
        details.close();
        if (err)
            return notifyError(
                `Error removing domain auth source. Error: ${describeError(
                    err,
                )}`,
            );
        notifySuccess('Successfully removed domain auth source.');
        this._changed.set(new Date().valueOf());
    }
}
