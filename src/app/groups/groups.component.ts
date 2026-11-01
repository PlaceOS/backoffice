import { Component, computed, inject } from '@angular/core';
import { i18n } from '../common/locale.service';
import { DisplayItem } from '../ui/item-details.component';
import { ItemShellComponent } from '../ui/item-shell.component';
import { GroupStateService } from './group-state.service';

@Component({
    selector: 'new-groups-view',
    template: `
        <item-shell
            name="groups"
            i18n_key="GROUPS"
            [tabs]="tab_list()"
            [item]="display_item()"
        />
    `,
    imports: [ItemShellComponent],
})
export class GroupsComponent {
    private _service = inject(GroupStateService);

    public readonly item = this._service.item;
    public readonly display_item = computed(() => {
        const item = this.item();
        if (!item) return null;
        return { ...item, toJSON: () => ({ ...item }) } as DisplayItem;
    });
    public readonly counts = this._service.counts;
    public readonly tab_list = computed(() => {
        const count = this.counts();
        return [
            {
                id: 'about',
                name: i18n('GROUPS.TAB_ABOUT'),
                icon: { content: 'info' },
            },
            {
                id: 'users',
                name: i18n('GROUPS.TAB_USERS'),
                count: count.users || 0,
                icon: { content: 'group' },
            },
            {
                id: 'zones',
                name: i18n('GROUPS.TAB_ZONES'),
                count: count.zones || 0,
                icon: { content: 'meeting_room' },
            },
        ];
    });
}
