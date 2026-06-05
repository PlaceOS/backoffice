import { Component, computed, inject, resource, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { listZoneTags, PlaceZone } from '@placeos/ts-client';
import { extensionsForItem } from '../common/api';
import { AsyncHandler } from '../common/async-handler.class';
import { PlaceDebugService } from '../common/debug.service';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { DebugOutputComponent } from '../ui/debug-output.component';
import { IconComponent } from '../ui/icon.component';
import { ItemDetailsSkeletonComponent } from '../ui/item-details-skeleton.component';
import { ItemDetailsComponent } from '../ui/item-details.component';
import { ItemSelectionComponent } from '../ui/item-selection.component';
import { ItemSidebarComponent } from '../ui/item-sidebar.component';
import { ItemTab, ItemTablistComponent } from '../ui/item-tablist.component';
import { SidebarMenuComponent } from '../ui/sidebar-menu.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { ZonesStateService } from './zones-state.service';

@Component({
    selector: 'new-zones-view',
    template: `
        <div
            class="divide-base-200 bg-base-100 absolute inset-0 flex items-center divide-y sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="flex h-px flex-1">
                    <item-sidebar
                        class="hidden sm:block"
                        [route]="name"
                        [title]="'ZONES.PLURAL' | translate"
                        [filter_options]="zone_tags()"
                    ></item-sidebar>
                    <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                        <item-selection
                            class="z-20 sm:hidden"
                            [route]="name"
                            [title]="'ZONES.PLURAL' | translate"
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
                                <item-details-skeleton></item-details-skeleton>
                            } @else if (item()?.id) {
                                <item-details
                                    [can_edit]="true"
                                    [item]="item()"
                                    [type]="'ZONES.SINGULAR' | translate"
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
                            [matTooltip]="'ZONES.NEW' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="newItem()"
                        >
                            <icon class="text-3xl">add</icon>
                        </button>
                        <button
                            class="border-base-200 bg-secondary text-secondary-content absolute bottom-16 left-2 z-30 flex h-10 w-10 items-center justify-center rounded-lg border shadow-sm sm:-left-8"
                            [matTooltip]="'ZONES.BULK' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="bulkAdd()"
                        >
                            <icon class="text-2xl">playlist_add</icon>
                        </button>
                    </div>
                </div>
                @if (debug_position() === 'below') {
                    <app-debug-output below></app-debug-output>
                }
            </div>
            @if (debug_position() === 'side') {
                <app-debug-output
                    side
                    class="h-full max-w-120"
                ></app-debug-output>
            }
        </div>
    `,
    styles: [``],
    imports: [
        DebugOutputComponent,
        IconComponent,
        TranslatePipe,
        MatTooltipModule,
        RouterModule,
        MatRippleModule,
        ItemTablistComponent,
        ItemDetailsComponent,
        ItemDetailsSkeletonComponent,
        ItemSidebarComponent,
        SidebarMenuComponent,
        ItemSelectionComponent,
    ],
})
export class ZonesComponent extends AsyncHandler {
    protected _service = inject(ZonesStateService);
    protected _item = inject(ActiveItemService);
    protected _route = inject(ActivatedRoute);
    protected _router = inject(Router);
    private _debug = inject(PlaceDebugService);

    public readonly item = computed(
        () => this._item.active_item$() as PlaceZone | null,
    );
    public readonly loading = this._item.loading;
    public readonly name = 'zones';
    public readonly open_menu = signal(false);
    public readonly scroll = signal(0);
    public readonly debug_position = this._debug.position;
    public readonly counts = this._service.counts;
    public readonly tab_list = computed(() => {
        const details = this.counts();
        return (
            [
                {
                    id: 'about',
                    name: i18n('ZONES.TAB_ABOUT'),
                    icon: { content: 'info' },
                },
                {
                    id: 'systems',
                    name: i18n('ZONES.TAB_SYSTEMS'),
                    count: details.systems ?? '?',
                    icon: { content: 'meeting_room' },
                },
                {
                    id: 'triggers',
                    name: i18n('ZONES.TAB_TRIGGERS'),
                    count: details.triggers ?? '?',
                    icon: { content: 'timer' },
                },
                {
                    id: 'metadata',
                    name: i18n('ZONES.TAB_METADATA'),
                    count: details.metadata ?? '?',
                    icon: { content: 'code_blocks' },
                },
                {
                    id: 'groups',
                    name: i18n('ZONES.TAB_GROUPS'),
                    count: details.groups ?? '?',
                    icon: { content: 'groups' },
                },
                {
                    id: 'children',
                    name: i18n('ZONES.TAB_CHILDREN'),
                    count: details.children ?? '?',
                    icon: { content: 'account_tree' },
                },
                {
                    id: 'history',
                    name: i18n('ZONES.TAB_SETTINGS_HISTORY'),
                    icon: { content: 'schedule' },
                },
            ] as ItemTab[]
        ).concat(extensionsForItem(this.item(), this.name));
    });

    public readonly newItem = () => this._item.create();
    public readonly bulkAdd = () => this._item.bulkAdd();
    private readonly _zone_tags = resource({
        loader: async () => listZoneTags().catch(() => []),
    });
    public readonly zone_tags = computed(() => this._zone_tags.value() || []);
}
