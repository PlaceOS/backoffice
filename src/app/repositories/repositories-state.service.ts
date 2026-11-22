import { computed, inject, resource, Service, signal } from '@angular/core';
import {
    Driver,
    type GitRepositoryCommit,
    repositories,
    type Repository,
} from '@placeos/ts-client';
import { orThrow, PlaceRepositoryType } from '@placeos/ts-client/compat';

import { Dialog } from '@angular/cdk/dialog';
import { describeError } from '../common/errors';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { notifyError } from '../common/notifications';
import { newItem } from '../common/placeos';
import { Identity } from '../common/types';
import { DriverFormComponent } from '../drivers/driver-form.component';

@Service()
export class RepositoriesStateService {
    private _state = inject(ActiveItemService);
    private _dialog = inject(Dialog);

    private _loading = signal(false);
    private _driver_list_error = signal('');
    private _commit_error = signal('');

    public readonly loading = this._loading.asReadonly();
    public readonly driver_list_error = this._driver_list_error.asReadonly();
    public readonly commit_error = this._commit_error.asReadonly();
    /** Active repository */
    public readonly item = computed(
        () => this._state.item() as unknown as Repository,
    );

    private readonly _driver_list = resource({
        params: () => this._state.activeOf('repositories'),
        loader: async ({ params: item }) => {
            if (!item || item.repo_type === PlaceRepositoryType.Interface)
                return [] as string[];
            this._loading.set(true);
            this._driver_list_error.set('');
            try {
                return await repositories
                    .drivers({ id: item.id })
                    .then(orThrow);
            } catch (err) {
                this._driver_list_error.set(describeError(err));
                return [];
            } finally {
                this._loading.set(false);
            }
        },
    });
    /** List of available drivers for repository */
    public readonly driver_list = computed(
        () => this._driver_list.value() || [],
    );

    private readonly _changelog = resource({
        params: () => {
            const item = this._state.activeOf('repositories');
            if (
                !item ||
                item.repo_type !== PlaceRepositoryType.Interface ||
                !item.folder_name
            ) {
                return undefined;
            }
            return item.folder_name.replace(/^\/+|\/+$/g, '') || undefined;
        },
        loader: async ({ params: folder_name, abortSignal }) => {
            try {
                const response = await fetch(`/${folder_name}/CHANGELOG.md`, {
                    cache: 'no-cache',
                    signal: abortSignal,
                });
                return response.ok ? await response.text() : null;
            } catch {
                return null;
            }
        },
    });
    /** Changelog loaded from the folder that serves the active interface. */
    public readonly changelog = computed(() => this._changelog.value() || '');
    /** Whether the active interface has a loadable CHANGELOG.md file. */
    public readonly has_changelog = computed(() => {
        const changelog = this._changelog.value();
        return changelog !== undefined && changelog !== null;
    });
    public readonly changelog_loading = this._changelog.isLoading;

    private readonly _commit = resource({
        params: () => this._state.activeOf('repositories'),
        loader: async ({ params: item }) => {
            if (!item) return 'HEAD';
            this._commit_error.set('');
            let details: readonly GitRepositoryCommit[] = [];
            try {
                details = await repositories
                    .commits({ id: item.id, limit: 1 })
                    .then(orThrow);
            } catch (err) {
                this._commit_error.set(describeError(err));
            }
            return details[0]?.commit || 'HEAD';
        },
    });
    /** Get latest commit for the active repository */
    public readonly commit = computed(() => this._commit.value() || 'HEAD');

    public get active_item(): Repository {
        return this._state.active_item as unknown as Repository;
    }

    public async pullLatestCommit() {
        const commit: unknown = await repositories
            .pull({ id: this.active_item.id })
            .then(orThrow)
            .catch((err) => {
                notifyError(
                    i18n('REPOS.GIT_PULL_ERROR', {
                        error: err
                            ? describeError(err)
                            : i18n('REPOS.GIT_PULL_TIMEOUT'),
                    }),
                );
            });
        if (!commit) return;
        const repo = await repositories
            .show({ id: this.active_item.id })
            .then(orThrow);
        if (repo) this._state.replaceItem(repo as unknown as Identity);
    }

    public async newDriver(driver: string) {
        this._dialog.open(DriverFormComponent, {
            data: {
                item: newItem(Driver, {
                    name: '',
                    module_name: '',
                    repository_id: this.active_item.id,
                    file_name: driver,
                }),
            },
        });
    }
}
