import { Component, computed, inject } from '@angular/core';
import { extensionsForItem } from '../common/api';
import { i18n } from '../common/locale.service';
import { ItemShellComponent } from '../ui/item-shell.component';
import { DomainStateService } from './domain-state.service';

@Component({
    selector: 'new-domains-view',
    template: `
        <item-shell
            name="domains"
            i18n_key="DOMAINS"
            [tabs]="tab_list()"
            [extra_actions]="extra_actions"
            padded
        />
    `,
    imports: [ItemShellComponent],
})
export class DomainsComponent {
    private _service = inject(DomainStateService);

    public readonly name = 'domains';

    public readonly counts = this._service.counts;
    public readonly item = this._service.item;
    public readonly extra_actions = [
        {
            label: 'DOMAINS.AZURE_INTEGRATION',
            icon: 'integration_instructions',
            action: () => this._service.performAzureIntegration(),
        },
    ];
    public readonly tab_list = computed(() => {
        const count = this.counts();
        return [
            {
                id: 'about',
                name: i18n('DOMAINS.TAB_ABOUT'),
                icon: { content: 'info' },
            },
            {
                id: 'applications',
                name: i18n('DOMAINS.TAB_APPLICATIONS'),
                count: count.applications || 0,
                icon: { content: 'login' },
            },
            {
                id: 'authentication',
                name: i18n('DOMAINS.TAB_AUTHENTICATION'),
                count: count.auth_sources || 0,
                icon: { content: 'lock_open' },
            },
            {
                id: 'users',
                name: i18n('DOMAINS.TAB_USERS'),
                count: count.users || 0,
                icon: { content: 'group' },
            },
            ...extensionsForItem(this.item(), this.name),
        ];
    });
}
