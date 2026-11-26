import { Component, computed, effect, inject } from '@angular/core';
import { AdminDataService } from '../admin/admin-data.service';
import { extensionsForItem } from '../common/api';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { isSubsystemUser } from '../common/support-access';
import { ItemShellComponent } from '../ui/item-shell.component';
import { UsersStateService } from './users-state.service';
import { BackofficeUsersService } from './users.service';

@Component({
    selector: 'new-users-view',
    template: `
        <item-shell
            name="users"
            i18n_key="USERS"
            [tabs]="tab_list()"
            [extra_actions]="userActions()"
            bulk
        />
    `,
    imports: [ItemShellComponent],
})
export class UsersComponent {
    protected _service = inject(ActiveItemService);
    private _state = inject(UsersStateService);

    public readonly name = 'users';
    public readonly item = this._service.item;
    public readonly counts = this._state.counts;

    constructor() {
        const admin_data = inject(AdminDataService);
        const user = inject(BackofficeUsersService);
        // Only admins can list domains. The list layouts show the domain filter when they load.
        effect(() => {
            if (user.current()?.sys_admin) void admin_data.loadDomains();
        });
    }

    public userActions() {
        const item = this._service.activeOf('users');
        return [
            ...(item?.deleted && this._service.canMutate(4)
                ? [
                      {
                          label: 'USERS.REVIVE',
                          icon: 'restore_from_trash',
                          action: () => this._state.revive(),
                      },
                  ]
                : []),
            ...(this._service.canMutate(8)
                ? [
                      {
                          label: 'USERS.FORCE_DELETE',
                          icon: 'delete_forever',
                          destructive: true,
                          action: () => this._service.delete(true),
                      },
                  ]
                : []),
        ];
    }

    public readonly tab_list = computed(() =>
        [
            {
                id: 'about',
                name: i18n('USERS.TAB_ABOUT'),
                icon: { content: 'info' },
            },
            {
                id: 'metadata',
                name: i18n('USERS.TAB_METADATA'),
                icon: { content: 'code_blocks' },
            },
            {
                id: 'groups',
                name: i18n('USERS.TAB_GROUPS'),
                icon: { content: 'groups' },
                count: this.counts()?.groups || 0,
            },
            ...extensionsForItem(this.item(), this.name),
        ].filter((tab) => !isSubsystemUser() || tab.id !== 'groups'),
    );
}
