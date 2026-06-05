import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRipple } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { PlaceGroup } from '@placeos/ts-client';
import { AsyncHandler } from '../common/async-handler.class';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { IconComponent } from '../ui/icon.component';
import { ItemDetailsSkeletonComponent } from '../ui/item-details-skeleton.component';
import {
    DisplayItem,
    ItemDetailsComponent,
} from '../ui/item-details.component';
import { ItemSelectionComponent } from '../ui/item-selection.component';
import { ItemSidebarComponent } from '../ui/item-sidebar.component';
import { ItemTablistComponent } from '../ui/item-tablist.component';
import { SidebarMenuComponent } from '../ui/sidebar-menu.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { GroupStateService } from './group-state.service';

@Component({
    selector: 'new-groups-view',
    template: `
        <div
            class="divide-base-200 bg-base-100 absolute inset-0 flex items-center divide-y sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <item-sidebar
                class="hidden sm:block"
                [route]="name"
                [title]="'GROUPS.PLURAL' | translate"
            ></item-sidebar>
            <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                <item-selection
                    class="z-20 sm:hidden"
                    [route]="name"
                    [title]="'GROUPS.PLURAL' | translate"
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
                            [item]="display_item()"
                            [type]="'GROUPS.SINGULAR' | translate"
                        ></item-details>
                        <item-tablist
                            [base]="name"
                            [tabs]="tab_list()"
                            [scrolled]="scroll() > 0"
                            class="z-10"
                        ></item-tablist>
                        <div
                            #el
                            class="relative z-0 h-1/2 w-full flex-1 overflow-auto"
                            (scroll)="scroll.set(el.scrollTop)"
                        >
                            <router-outlet></router-outlet>
                        </div>
                    }
                </div>
                <button
                    class="border-base-200 bg-secondary text-secondary-content absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border shadow-sm sm:-left-9"
                    [matTooltip]="'GROUPS.NEW' | translate"
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
        ItemDetailsSkeletonComponent,
        ItemSelectionComponent,
        ItemSidebarComponent,
        SidebarMenuComponent,
    ],
})
export class GroupsComponent extends AsyncHandler {
    private _service = inject(GroupStateService);
    protected _item = inject(ActiveItemService);

    public readonly name = 'groups';
    public open_menu = false;
    public readonly scroll = signal(0);
    public readonly loading = toSignal(this._item.loading, {
        initialValue: false,
    });
    public readonly item = toSignal(this._service.item, {
        initialValue: null as PlaceGroup | null,
    });
    public readonly display_item = computed(() => {
        const item = this.item();
        if (!item) return null;
        return { ...item, toJSON: () => ({ ...item }) } as DisplayItem;
    });
    public readonly counts = toSignal(this._service.counts, {
        initialValue: { users: 0, zones: 0 },
    });
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

    public readonly newItem = () => this._item.create();
}
