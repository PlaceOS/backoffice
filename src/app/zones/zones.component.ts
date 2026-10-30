import { Component, computed, inject, resource } from '@angular/core';
import { listZoneTags, PlaceZone } from '@placeos/ts-client';
import { extensionsForItem } from '../common/api';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { isSubsystemUser } from '../common/support-access';
import { ItemShellComponent } from '../ui/item-shell.component';
import { ItemTab } from '../ui/item-tablist.component';
import { BackofficeUsersService } from '../users/users.service';
import { ZonesStateService } from './zones-state.service';

@Component({
    selector: 'new-zones-view',
    template: `
        <item-shell
            name="zones"
            i18n_key="ZONES"
            [tabs]="tab_list()"
            [filter_options]="zone_tags()"
            bulk
            debug
        />
    `,
    imports: [ItemShellComponent],
})
export class ZonesComponent {
    protected _service = inject(ZonesStateService);
    protected _item = inject(ActiveItemService);
    private _users = inject(BackofficeUsersService);

    public readonly item = computed(
        () => this._item.active_item$() as PlaceZone | null,
    );
    public readonly name = 'zones';
    public readonly counts = this._service.counts;
    public readonly tab_list = computed(() => {
        const details = this.counts();
        const is_admin = !!this._users.user()?.sys_admin;
        return (
            (
                [
                    {
                        id: 'about',
                        name: i18n('ZONES.TAB_ABOUT'),
                        icon: { content: 'info' },
                    },
                    {
                        id: 'systems',
                        name: i18n('ZONES.TAB_SYSTEMS'),
                        count: details.systems ?? '?',
                        icon: { content: 'meeting_room' },
                    },
                    {
                        id: 'triggers',
                        name: i18n('ZONES.TAB_TRIGGERS'),
                        count: details.triggers ?? '?',
                        icon: { content: 'timer' },
                    },
                    {
                        id: 'metadata',
                        name: i18n('ZONES.TAB_METADATA'),
                        count: details.metadata ?? '?',
                        icon: { content: 'code_blocks' },
                    },
                    {
                        id: 'groups',
                        name: i18n('ZONES.TAB_GROUPS'),
                        count: details.groups ?? '?',
                        icon: { content: 'groups' },
                    },
                    {
                        id: 'children',
                        name: i18n('ZONES.TAB_CHILDREN'),
                        count: details.children ?? '?',
                        icon: { content: 'account_tree' },
                    },
                    {
                        id: 'history',
                        name: i18n('ZONES.TAB_SETTINGS_HISTORY'),
                        icon: { content: 'schedule' },
                    },
                ] as ItemTab[]
            )
                .concat(extensionsForItem(this.item(), this.name))
                .filter(
                    (tab) =>
                        !isSubsystemUser() ||
                        !['history', 'triggers', 'groups'].includes(tab.id),
                )
                // Groups and history routes are admin only
                .filter(
                    (tab) =>
                        is_admin || !['history', 'groups'].includes(tab.id),
                )
        );
    });

    private readonly _zone_tags = resource({
        loader: async () => listZoneTags().catch(() => []),
    });
    public readonly zone_tags = computed(() => this._zone_tags.value() || []);
}
