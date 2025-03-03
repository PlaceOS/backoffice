import { Component } from '@angular/core';
import { extensionsForItem } from '../common/api';
import { AsyncHandler } from '../common/async-handler.class';
import { ActiveItemService } from '../common/item.service';
import { DomainStateService } from './domain-state.service';
import { i18n } from '../common/translate';

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
                        <app-icon>menu</app-icon>
                    </button>
                </item-selection>
                <div class="flex h-1/2 flex-1 flex-col">
                    <ng-container *ngIf="item?.id">
                        <item-details
                            [can_edit]="true"
                            [item]="item"
                            [type]="'DOMAINS.SINGULAR' | translate"
                        ></item-details>
                        <item-tablist
                            [base]="name"
                            [tabs]="tab_list"
                            [scrolled]="scroll > 0"
                            class="z-10"
                        ></item-tablist>
                        <div
                            #el
                            class="relative z-0 h-1/2 w-full flex-1 overflow-auto p-4"
                            (scroll)="scroll = el.scrollTop"
                        >
                            <router-outlet></router-outlet>
                        </div>
                    </ng-container>
                </div>
                <button
                    class="absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-9"
                    [matTooltip]="'DOMAINS.NEW' | translate"
                    matTooltipPosition="right"
                    matRipple
                    (click)="newItem()"
                >
                    <app-icon class="text-3xl">add</app-icon>
                </button>
            </div>
        </div>
    `,
    styles: [``],
})
export class DomainsComponent extends AsyncHandler {
    public readonly name = 'domains';

    public open_menu = false;
    public tab_list = [];

    public readonly newItem = () => this._item.create();

    public get item() {
        return this._service.active_item;
    }

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    constructor(
        private _service: DomainStateService,
        protected _item: ActiveItemService,
    ) {
        super();
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

    public ngOnInit(): void {
        this.updateTabList({});
        this.subscription(
            'item',
            this._service.counts.subscribe((c) => this.updateTabList(c as any)),
        );
    }
}
