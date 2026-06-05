import { Component, computed, effect, inject, signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { PlaceModule, querySystems } from '@placeos/ts-client';
import { extensionsForItem } from '../common/api';
import { PlaceDebugService } from '../common/debug.service';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { DebugOutputComponent } from '../ui/debug-output.component';
import { IconComponent } from '../ui/icon.component';
import { ItemDetailsSkeletonComponent } from '../ui/item-details-skeleton.component';
import { ItemDetailsComponent } from '../ui/item-details.component';
import { ItemSelectionComponent } from '../ui/item-selection.component';
import { ItemSidebarComponent } from '../ui/item-sidebar.component';
import { ItemTablistComponent } from '../ui/item-tablist.component';
import { SidebarMenuComponent } from '../ui/sidebar-menu.component';
import { TranslatePipe } from '../ui/translate.pipe';

@Component({
    selector: 'new-modules-view',
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
                        [title]="'MODULES.PLURAL' | translate"
                    ></item-sidebar>
                    <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                        <item-selection
                            class="z-20 sm:hidden"
                            [route]="name"
                            [title]="'MODULES.PLURAL' | translate"
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
                                    [type]="'MODULES.SINGULAR' | translate"
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
                            [matTooltip]="'MODULES.NEW' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="newItem()"
                        >
                            <icon class="text-3xl">add</icon>
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
        IconComponent,
        TranslatePipe,
        MatTooltipModule,
        RouterModule,
        ItemTablistComponent,
        ItemDetailsComponent,
        ItemDetailsSkeletonComponent,
        ItemSelectionComponent,
        ItemSidebarComponent,
        SidebarMenuComponent,
    ],
})
export class ModulesComponent {
    private _service = inject(ActiveItemService);
    private _debug = inject(PlaceDebugService);

    public readonly name = 'modules';
    public readonly item = computed(
        () => this._service.item() as PlaceModule | null,
    );
    public readonly loading = this._service.loading;
    /** Number of systems for the active device */
    public readonly system_count = signal(undefined);
    public readonly open_menu = signal(false);
    public readonly scroll = signal(0);
    public readonly debug_position = this._debug.position;
    public readonly newItem = () => this._service.create();
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
        ].concat(this.extensions()),
    );

    constructor() {
        effect(() => {
            const item = this.item();
            this.system_count.set(undefined);
            this.loadValues(item);
        });
    }

    protected async loadValues(item: PlaceModule) {
        if (!item) return;
        const query: Record<string, unknown> = {
            offset: 0,
            limit: 1,
            module_id: item.id,
        };
        // Get system count
        this.system_count.set((await querySystems(query)).total);
    }
}
