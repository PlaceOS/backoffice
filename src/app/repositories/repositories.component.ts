import { Component, computed, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { extensionsForItem } from '../common/api';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { IconComponent } from '../ui/icon.component';
import { ItemDetailsSkeletonComponent } from '../ui/item-details-skeleton.component';
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
            class="divide-base-200 bg-base-100 absolute inset-0 flex items-center divide-y sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full" />
            <item-sidebar
                class="hidden sm:block"
                [route]="name"
                [title]="'REPOS.PLURAL' | translate"
            />
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
                        (click)="open_menu.set(true)"
                    >
                        <icon>menu</icon>
                    </button>
                </item-selection>
                <div class="flex h-1/2 flex-1 flex-col">
                    @if (loading()) {
                        <item-details-skeleton />
                    } @else if (item()?.id) {
                        <item-details
                            [can_edit]="true"
                            [item]="item()"
                            [type]="'REPOS.SINGULAR' | translate"
                        />
                        <item-tablist
                            [base]="name"
                            [tabs]="tab_list()"
                            [scrolled]="scroll() > 0"
                            class="z-10"
                        />
                        <div
                            #el
                            class="relative z-0 h-1/2 w-full flex-1 overflow-auto p-4"
                            (scroll)="scroll.set(el.scrollTop)"
                        >
                            <router-outlet />
                        </div>
                    }
                </div>
                <button
                    class="border-base-200 bg-secondary text-secondary-content absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border shadow-sm sm:-left-9"
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
        ItemDetailsSkeletonComponent,
        ItemSelectionComponent,
        SidebarMenuComponent,
        ItemSidebarComponent,
    ],
})
export class RepositoriesComponent {
    protected _service = inject(RepositoriesStateService);
    protected _item = inject(ActiveItemService);

    public readonly name = 'repositories';

    public readonly open_menu = signal(false);

    public readonly newItem = () => this._item.create();

    public readonly item = this._service.item;
    public readonly loading = this._item.loading;
    public readonly driver_list = this._service.driver_list;
    public readonly driver_count = computed(() => {
        const list = this.driver_list();
        return list ? list.length : -1;
    });
    public readonly extensions = computed(() =>
        extensionsForItem(this.item(), this.name),
    );
    public readonly tab_list = computed<
        {
            id: string;
            name: string;
            count?: number;
            icon: { content: string };
        }[]
    >(() =>
        (this.driver_count() < 0 || !this.driver_count()
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
                      count: this.driver_count(),
                      icon: { content: 'meeting_room' },
                  },
              ]
        ).concat(this.extensions()),
    );
    public readonly scroll = signal(0);
}
