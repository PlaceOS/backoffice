import { computed, inject, resource, Service, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

    private _loading = signal(false);

    private _changed = signal(0);

    public readonly item = computed(
        () => this._state.item() as unknown as PlaceDomain,
    );

    public readonly loading = this._loading.asReadonly();

    private readonly _users = resource({
        params: () => ({ item: this.item(), changed: this._changed() }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceDomain)) return [] as PlaceUser[];
            const response = await queryUsers({
                authority_id: item.id,
                limit: 1000,
            } as Record<string, unknown>).catch(() => ({ data: [] }));
            return response.data.sort((a, b) => a.name.localeCompare(b.name));
        },
    });

    public readonly users = computed(() => this._users.value() || []);

    private readonly _auth_sources = resource({
        params: () => ({ item: this.item(), changed: this._changed() }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceDomain)) return [] as PlaceAuthSource[];
            const q = { authority_id: item.id };
            const [saml, oauth, ldap] = await Promise.all([
                querySAMLSources(q as Record<string, unknown>).then(
                    (response) => response.data,
                ),
                queryOAuthSources(q as Record<string, unknown>).then(
                    (response) => response.data,
                ),
                queryLDAPSources(q as Record<string, unknown>).then(
                    (response) => response.data,
                ),
            ]).catch(() => [[], [], []]);
            return [...saml, ...oauth, ...ldap] as PlaceAuthSource[];
        },
    });

    public readonly auth_sources = computed(
        () => this._auth_sources.value() || [],
    );

    private readonly _applications = resource({
        params: () => ({ item: this.item(), changed: this._changed() }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceDomain)) return [] as PlaceApplication[];
            const response = await queryApplications({
                authority_id: item.id,
            } as Record<string, unknown>).catch(() => ({ data: [] }));
            return response.data.sort((a, b) => a.name.localeCompare(b.name));
        },
    });

    public readonly applications = computed(
        () => this._applications.value() || [],
    );

    private readonly _counts = resource({
        params: () => ({ item: this.item(), changed: this._changed() }),
        loader: async ({ params }) => {
            const { item } = params;
            if (!(item instanceof PlaceDomain)) return {};
            const q = { authority_id: item?.id };
            const details = await Promise.all([
                queryApplications(q as Record<string, unknown>)
                    .then((response) => response.total)
                    .catch(() => 0),
                Promise.all([
                    querySAMLSources(q as Record<string, unknown>),
                    queryOAuthSources(q as Record<string, unknown>),
                    queryLDAPSources(q as Record<string, unknown>),
                ])
                    .then(
                        ([saml, oauth, ldap]) =>
                            saml.total + oauth.total + ldap.total,
                    )
                    .catch(() => 0),
                queryUsers(q as Record<string, unknown>)
                    .then((response) => response.total)
                    .catch(() => 0),
            ]);
            const [applications, auth_sources, users] = details;
            return {
                applications,
                auth_sources: auth_sources || 0,
                users,
            };
        },
    });

    public readonly counts = computed<{
        applications?: number;
        auth_sources?: number;
        users?: number;
    }>(
        () =>
            this._counts.value() || {
                applications: 0,
                auth_sources: 0,
                users: 0,
            },
    );

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
