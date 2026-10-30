import { Component, computed, inject } from '@angular/core';
import { PlaceRepositoryType } from '@placeos/ts-client';
import { extensionsForItem } from '../common/api';
import { i18n } from '../common/locale.service';
import { ItemShellComponent } from '../ui/item-shell.component';
import { ItemTab } from '../ui/item-tablist.component';
import { RepositoriesStateService } from './repositories-state.service';

@Component({
    selector: 'new-repositories-view',
    template: `
        <item-shell
            name="repositories"
            i18n_key="REPOS"
            [tabs]="tab_list()"
            padded
        />
    `,
    imports: [ItemShellComponent],
})
export class RepositoriesComponent {
    protected _service = inject(RepositoriesStateService);

    public readonly name = 'repositories';

    public readonly item = this._service.item;
    public readonly driver_list_loading = this._service.loading;
    public readonly driver_list = this._service.driver_list;
    public readonly has_changelog = this._service.has_changelog;
    public readonly driver_count = computed(() => {
        const list = this.driver_list();
        return list ? list.length : -1;
    });
    public readonly is_driver_repo = computed(() => {
        const item = this.item();
        return (
            item?.repo_type === PlaceRepositoryType.Driver ||
            item?.type === PlaceRepositoryType.Driver
        );
    });
    public readonly extensions = computed(() =>
        extensionsForItem(this.item(), this.name),
    );
    public readonly tab_list = computed<ItemTab[]>(() => [
        ...(!this.is_driver_repo()
            ? [
                  {
                      id: 'about',
                      name: i18n('REPOS.TAB_ABOUT'),
                      icon: { content: 'info' },
                  },
                  ...(this.has_changelog()
                      ? [
                            {
                                id: 'changelog',
                                name: i18n('COMMON.CHANGELOG'),
                                icon: { content: 'history' },
                            },
                        ]
                      : []),
              ]
            : [
                  {
                      id: 'about',
                      name: i18n('REPOS.TAB_ABOUT'),
                      icon: { content: 'info' },
                  },
                  {
                      id: 'drivers',
                      name: i18n('REPOS.TAB_DRIVERS'),
                      count: Math.max(this.driver_count(), 0),
                      loading: this.driver_list_loading(),
                      icon: { content: 'meeting_room' },
                  },
              ]),
        ...this.extensions(),
    ]);
}
