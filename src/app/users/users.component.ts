import { Component, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { PlaceUser } from '@placeos/ts-client';
import { extensionsForItem } from '../common/api';
import { AsyncHandler } from '../common/async-handler.class';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { IconComponent } from '../ui/icon.component';
import { ItemDetailsComponent } from '../ui/item-details.component';
import { ItemDetailsSkeletonComponent } from '../ui/item-details-skeleton.component';
import { ItemSelectionComponent } from '../ui/item-selection.component';
import { ItemSidebarComponent } from '../ui/item-sidebar.component';
import { ItemTablistComponent } from '../ui/item-tablist.component';
import { SidebarMenuComponent } from '../ui/sidebar-menu.component';
import { TranslatePipe } from '../ui/translate.pipe';

@Component({
    selector: 'new-users-view',
    template: `
        <div
            class="absolute inset-0 flex items-center divide-y divide-base-200 bg-base-100 sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <item-sidebar
                class="hidden sm:block"
                [route]="name"
                [title]="'USERS.PLURAL' | translate"
            ></item-sidebar>
            <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                <item-selection
                    class="z-20 sm:hidden"
                    [route]="name"
                    [title]="'USERS.PLURAL' | translate"
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
                    @if (loading()) {
                        <item-details-skeleton></item-details-skeleton>
                    } @else if (item()?.id) {
                        <item-details
                            [can_edit]="true"
                            [item]="item()"
                            [type]="'USERS.SINGULAR' | translate"
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
                    class="absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow-sm sm:-left-9"
                    [matTooltip]="'USERS.NEW' | translate"
                    matTooltipPosition="right"
                    matRipple
                    (click)="newItem()"
                >
                    <icon class="text-3xl">add</icon>
                </button>
                <button
                    class="absolute bottom-16 left-2 z-30 flex h-10 w-10 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow-sm sm:-left-8"
                    [matTooltip]="'USERS.BULK' | translate"
                    matTooltipPosition="right"
                    matRipple
                    (click)="bulkAdd()"
                >
                    <icon class="text-2xl">playlist_add</icon>
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
        ItemSidebarComponent,
        ItemDetailsComponent,
        ItemDetailsSkeletonComponent,
        ItemSelectionComponent,
        SidebarMenuComponent,
    ],
})
export class UsersComponent extends AsyncHandler {
    protected _service = inject(ActiveItemService);

    public readonly name = 'users';
    public open_menu = false;
    public tab_list = [];
    public readonly scroll = signal(0);
    public readonly loading = signal(false);

    public readonly newItem = () => this._service.create();
    public readonly bulkAdd = () => this._service.bulkAdd();

    public readonly item = signal<PlaceUser>(null);

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public updateTabList(details?: Record<string, number>) {
        this.tab_list = [
            {
                id: 'about',
                name: i18n('USERS.TAB_ABOUT'),
                icon: { content: 'info' },
            },
            {
                id: 'metadata',
                name: i18n('USERS.TAB_METADATA'),
                count: details?.metadata,
                icon: { content: 'code_blocks' },
            },
            {
                id: 'history',
                name: i18n('USERS.TAB_HISTORY'),
                icon: { content: 'history' },
            },
        ].concat(this.extensions);
    }

    public ngOnInit() {
        this.subscription(
            'loading',
            this._service.loading.subscribe((l) => this.loading.set(l)),
        );
        this.subscription(
            'item',
            this._service.item.subscribe((item) => {
                this.item.set(item as any);
                this.updateTabList();
            }),
        );
        this.updateTabList();
    }
}
