import { Component, OnInit, inject, signal } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { PlaceDomain } from '@placeos/ts-client';
import { extensionsForItem } from '../common/api';
import { AsyncHandler } from '../common/async-handler.class';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { IconComponent } from '../ui/icon.component';
import { ItemDetailsComponent } from '../ui/item-details.component';
import { ItemSelectionComponent } from '../ui/item-selection.component';
import { ItemSidebarComponent } from '../ui/item-sidebar.component';
import { ItemTablistComponent } from '../ui/item-tablist.component';
import { SidebarMenuComponent } from '../ui/sidebar-menu.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { DomainStateService } from './domain-state.service';

@Component({
    selector: 'new-domains-view',
    template: `
        <div
            class="absolute inset-0 flex items-center divide-y divide-base-200 bg-base-100 sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <item-sidebar
                class="hidden sm:block"
                [route]="name"
                [title]="'DOMAINS.PLURAL' | translate"
            ></item-sidebar>
            <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                <item-selection
                    class="z-20 sm:hidden"
                    [route]="name"
                    [title]="'DOMAINS.PLURAL' | translate"
                >
                    <button
                        btn
                        icon
                        class="mr-2 sm:hidden"
                        (click)="open_menu = true"
                    >
                        <icon>menu</icon>
                    </button>
                </item-selection>
                <div class="flex h-1/2 flex-1 flex-col">
                    @if (item()?.id) {
                        <item-details
                            [can_edit]="true"
                            [item]="item()"
                            [extra_actions]="extra_actions"
                            [type]="'DOMAINS.SINGULAR' | translate"
                        ></item-details>
                        <item-tablist
                            [base]="name"
                            [tabs]="tab_list"
                            [scrolled]="scroll() > 0"
                            class="z-10"
                        ></item-tablist>
                        <div
                            #el
                            class="relative z-0 h-1/2 w-full flex-1 overflow-auto p-4"
                            (scroll)="scroll.set(el.scrollTop)"
                        >
                            <router-outlet></router-outlet>
                        </div>
                    }
                </div>
                <button
                    class="absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-9"
                    [matTooltip]="'DOMAINS.NEW' | translate"
                    matTooltipPosition="right"
                    matRipple
                    (click)="newItem()"
                >
                    <icon class="text-3xl">add</icon>
                </button>
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        IconComponent,
        MatTooltipModule,
        MatRipple,
        TranslatePipe,
        RouterModule,
        ItemTablistComponent,
        ItemDetailsComponent,
        ItemSelectionComponent,
        ItemSidebarComponent,
        SidebarMenuComponent,
    ],
})
export class DomainsComponent extends AsyncHandler implements OnInit {
    private _service = inject(DomainStateService);
    protected _item = inject(ActiveItemService);

    public readonly name = 'domains';

    public open_menu = false;
    public tab_list = [];
    public extra_actions = [];
    public readonly scroll = signal(0);

    public readonly newItem = () => this._item.create();

    public readonly item = signal<PlaceDomain>(null);

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public ngOnInit(): void {
        this.extra_actions = [
            {
                label: 'DOMAINS.AZURE_INTEGRATION',
                icon: 'integration_instructions',
                action: () => this._service.performAzureIntegration(),
            },
        ];
        this.updateTabList({});
        this.subscription(
            'counts',
            this._service.counts.subscribe((c) => {
                this.updateTabList(c as any);
            }),
        );
        this.subscription(
            'items',
            this._service.item.subscribe((item) => this.item.set(item)),
        );
    }

    public updateTabList(count: Record<string, number>) {
        this.tab_list = [
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
        ].concat(this.extensions);
    }
}
