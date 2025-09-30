import { Component, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { PlaceRepository } from '@placeos/ts-client';
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
import { RepositoriesStateService } from './repositories-state.service';

@Component({
    selector: 'new-repositories-view',
    template: `
        <div
            class="absolute inset-0 flex items-center divide-y divide-base-200 bg-base-100 sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <item-sidebar
                class="hidden sm:block"
                [route]="name"
                [title]="'REPOS.PLURAL' | translate"
            ></item-sidebar>
            <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                <item-selection
                    class="z-20 sm:hidden"
                    [route]="name"
                    [title]="'REPOS.PLURAL' | translate"
                >
                    <button
                        icon
                        matRipple
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
                            [type]="'REPOS.SINGULAR' | translate"
                        ></item-details>
                        <item-tablist
                            [base]="name"
                            [tabs]="tab_list()"
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
                    }
                </div>
                <button
                    class="absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-9"
                    [matTooltip]="'REPOS.NEW' | translate"
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
        MatRippleModule,
        MatTooltipModule,
        TranslatePipe,
        RouterModule,
        ItemTablistComponent,
        ItemDetailsComponent,
        ItemSelectionComponent,
        SidebarMenuComponent,
        ItemSidebarComponent,
    ],
})
export class RepositoriesComponent extends AsyncHandler implements OnInit {
    protected _service = inject(RepositoriesStateService);
    protected _item = inject(ActiveItemService);

    public readonly name = 'repositories';

    public open_menu = false;
    public driver_count = 0;

    public readonly newItem = () => this._item.create();

    public readonly item = signal<PlaceRepository>(null);
    public readonly tab_list = signal([]);

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public updateTabList() {
        this.tab_list.set(
            (this.driver_count < 0 || !this.driver_count
                ? [
                      {
                          id: 'about',
                          name: i18n('REPOS.TAB_ABOUT'),
                          icon: { content: 'info' },
                      },
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
                          count: this.driver_count,
                          icon: { content: 'meeting_room' },
                      },
                  ]
            ).concat(this.extensions),
        );
    }

    public async ngOnInit() {
        this.subscription(
            'list',
            this._service.driver_list.subscribe((list) => {
                this.driver_count = list ? list.length : -1;
                this.updateTabList();
            }),
        );
        this.subscription(
            'item',
            this._service.item.subscribe((item) => this.item.set(item as any)),
        );
        this.updateTabList();
    }
}
