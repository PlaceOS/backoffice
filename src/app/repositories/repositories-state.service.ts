import { computed, inject, resource, Service, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    listRepositoryCommits,
    listRepositoryDrivers,
    PlaceDriver,
    PlaceRepository,
    PlaceRepositoryType,
    pullRepositoryChanges,
    showRepository,
} from '@placeos/ts-client';

import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { notifyError } from '../common/notifications';
import { Identity } from '../common/types';
import { DriverFormComponent } from '../drivers/driver-form.component';

@Service()
export class RepositoriesStateService {
    private _state = inject(ActiveItemService);
    private _dialog = inject(MatDialog);

    private _loading = signal(false);
    private _driver_list_error = signal('');
    private _commit_error = signal('');

    public readonly loading = this._loading.asReadonly();
    public readonly driver_list_error = this._driver_list_error.asReadonly();
    public readonly commit_error = this._commit_error.asReadonly();
    /** Active repository */
    public readonly item = computed(
        () => this._state.item() as unknown as PlaceRepository,
    );

    private readonly _driver_list = resource({
        params: () => this.item(),
        loader: async ({ params: item }) => {
            if (
                !(item instanceof PlaceRepository) ||
                item.repo_type === PlaceRepositoryType.Interface
            )
                return [] as string[];
            this._loading.set(true);
            this._driver_list_error.set('');
            try {
                return await listRepositoryDrivers(item.id, { limit: 2000 });
            } catch (err) {
                this._driver_list_error.set(this._errorMessage(err));
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

    private readonly _commit = resource({
        params: () => this.item(),
        loader: async ({ params: item }) => {
            if (!(item instanceof PlaceRepository)) return 'HEAD';
            this._commit_error.set('');
            let details = [];
            try {
                details = await listRepositoryCommits(item.id, {
                    count: 1,
                } as Record<string, unknown>);
            } catch (err) {
                this._commit_error.set(this._errorMessage(err));
            }
            return details[0]?.commit || 'HEAD';
        },
    });
    /** Get latest commit for the active repository */
    public readonly commit = computed(() => this._commit.value() || 'HEAD');

    public get active_item(): PlaceRepository {
        return this._state.active_item as unknown as PlaceRepository;
    }

    public async pullLatestCommit() {
        const commit: unknown = await pullRepositoryChanges(
            this.active_item.id,
        ).catch((err) => {
            notifyError(
                i18n('REPOS.GIT_PULL_ERROR', {
                    error: JSON.stringify(
                        err.response ||
                            err.message ||
                            i18n('REPOS.GIT_PULL_TIMEOUT'),
                    ),
                }),
            );
        });
        if (!commit) return;
        const repo = await showRepository(this.active_item.id);
        if (repo) this._state.replaceItem(repo as unknown as Identity);
    }

    public async newDriver(driver: string) {
        this._dialog.open(DriverFormComponent, {
            data: {
                item: new PlaceDriver({
                    name: '',
                    module_name: '',
                    repository_id: this.active_item.id,
                    file_name: driver,
                }),
            },
        });
    }

    private _errorMessage(err: unknown): string {
        if (err instanceof Response) return `${err.status} ${err.statusText}`;
        if (err instanceof Error) return err.message;
        const error = err as { response?: unknown; message?: unknown };
        return JSON.stringify(error?.response || error?.message || err);
    }
}
