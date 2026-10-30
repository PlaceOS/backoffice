import { Component, computed, inject } from '@angular/core';
import { PlaceSystem } from '@placeos/ts-client';
import { extensionsForItem } from '../common/api';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { isSubsystemUser } from '../common/support-access';
import { ItemShellComponent } from '../ui/item-shell.component';
import { ItemTab } from '../ui/item-tablist.component';
import { SystemStateService } from './system-state.service';

@Component({
    selector: 'new-systems-view',
    template: `
        <item-shell
            name="systems"
            i18n_key="SYSTEMS"
            [tabs]="tab_list()"
            bulk
            debug
        />
    `,
    imports: [ItemShellComponent],
})
export class SystemsComponent {
    protected _service = inject(SystemStateService);
    private _item = inject(ActiveItemService);

    public readonly item = computed(
        () => this._item.active_item$() as PlaceSystem | null,
    );
    public readonly name = 'systems';
    public readonly counts = this._service.counts;
    public readonly extensions = computed(() =>
        extensionsForItem(this.item(), this.name),
    );
    public readonly tab_list = computed(() =>
        (
            [
                {
                    id: 'about',
                    name: i18n('SYSTEMS.TAB_ABOUT'),
                    icon: { content: 'info' },
                },
                {
                    id: 'modules',
                    name: i18n('SYSTEMS.TAB_MODULES'),
                    count: this.counts()?.devices ?? '?',
                    icon: { content: 'tablet' },
                },
                {
                    id: 'zones',
                    name: i18n('SYSTEMS.TAB_ZONES'),
                    count: this.counts()?.zones ?? '?',
                    icon: { content: 'layers' },
                },
                {
                    id: 'triggers',
                    name: i18n('SYSTEMS.TAB_TRIGGERS'),
                    count: this.counts()?.triggers ?? '?',
                    icon: { content: 'timer' },
                },
                {
                    id: 'metadata',
                    name: i18n('SYSTEMS.TAB_METADATA'),
                    count: this.counts()?.metadata ?? '?',
                    icon: { content: 'code_blocks' },
                },
                {
                    id: 'history',
                    name: i18n('SYSTEMS.TAB_SETTINGS_HISTORY'),
                    icon: { content: 'schedule' },
                },
            ] as ItemTab[]
        )
            .concat(this.extensions())
            .filter(
                (tab) => !isSubsystemUser() || !['history'].includes(tab.id),
            ),
    );
}
