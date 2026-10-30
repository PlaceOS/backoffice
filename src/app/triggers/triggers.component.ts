import { Component, computed, inject } from '@angular/core';
import { extensionsForItem } from '../common/api';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { ItemShellComponent } from '../ui/item-shell.component';
import { TriggerStateService } from './trigger-state.service';

@Component({
    selector: 'new-triggers-view',
    template: `
        <item-shell
            name="triggers"
            i18n_key="TRIGGERS"
            [tabs]="tab_list()"
            padded
            debug
        />
    `,
    imports: [ItemShellComponent],
})
export class TriggersComponent {
    protected _service = inject(ActiveItemService);
    private _state = inject(TriggerStateService);

    public readonly name = 'triggers';

    public readonly instance_count = computed(
        () => this._state.instances().length,
    );
    public readonly item = this._service.item;
    public readonly tab_list = computed(() => [
        {
            id: 'about',
            name: i18n('TRIGGERS.TAB_ABOUT'),
            icon: { content: 'info' },
        },
        {
            id: 'instances',
            name: i18n('TRIGGERS.TAB_INSTANCES'),
            count: this.instance_count(),
            icon: { content: 'meeting_room' },
        },
        ...extensionsForItem(this.item(), this.name),
    ]);
}
