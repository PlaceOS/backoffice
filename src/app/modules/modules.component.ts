import { Component, computed, inject } from '@angular/core';
import { extensionsForItem } from '../common/api';
import { i18n } from '../common/locale.service';
import { isSubsystemUser } from '../common/support-access';
import { ItemShellComponent } from '../ui/item-shell.component';
import { ModuleStateService } from './module-state.service';

@Component({
    selector: 'new-modules-view',
    template: `
        <item-shell
            name="modules"
            i18n_key="MODULES"
            [tabs]="tab_list()"
            debug
        />
    `,
    imports: [ItemShellComponent],
})
export class ModulesComponent {
    private _module_state = inject(ModuleStateService);

    public readonly name = 'modules';
    public readonly item = this._module_state.item;
    /** Number of systems for the active device */
    public readonly system_count = this._module_state.system_total;
    public readonly extensions = computed(() =>
        extensionsForItem(this.item(), this.name),
    );

    public readonly tab_list = computed(() =>
        [
            {
                id: 'about',
                name: i18n('MODULES.TAB_ABOUT'),
                icon: { content: 'info' },
            },
            {
                id: 'systems',
                name: i18n('MODULES.TAB_SYSTEMS'),
                count: this.system_count(),
                icon: { content: 'meeting_room' },
            },
            {
                id: 'history',
                name: i18n('MODULES.TAB_SETTINGS_HISTORY'),
                icon: { content: 'schedule' },
            },
            ...this.extensions(),
        ].filter((tab) => !isSubsystemUser() || !['history'].includes(tab.id)),
    );
}
