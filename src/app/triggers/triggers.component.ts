import { Component, computed, effect, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { listTriggerInstances, PlaceTrigger } from '@placeos/ts-client';
import { extensionsForItem } from '../common/api';
import { AsyncHandler } from '../common/async-handler.class';
import { PlaceDebugService } from '../common/debug.service';
import { lastValueFrom } from '../common/general';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { toSignal } from '../common/signals';
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
    selector: 'new-triggers-view',
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
                        [title]="'TRIGGERS.PLURAL' | translate"
                    ></item-sidebar>
                    <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                        <item-selection
                            class="z-20 sm:hidden"
                            [route]="name"
                            [title]="'TRIGGERS.PLURAL' | translate"
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
                                    [type]="'TRIGGERS.SINGULAR' | translate"
                                ></item-details>
                                <item-tablist
                                    [base]="name"
                                    [tabs]="tab_list()"
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
                            class="border-base-200 bg-secondary text-secondary-content absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border shadow-sm sm:-left-9"
                            [matTooltip]="'TRIGGERS.NEW' | translate"
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
        TranslatePipe,
        RouterModule,
        MatRippleModule,
        MatTooltipModule,
        ItemTablistComponent,
        ItemDetailsComponent,
        ItemDetailsSkeletonComponent,
        ItemSelectionComponent,
        ItemSidebarComponent,
        SidebarMenuComponent,
    ],
})
export class TriggersComponent extends AsyncHandler {
    protected _service = inject(ActiveItemService);
    private _debug = inject(PlaceDebugService);

    public readonly name = 'triggers';

    public open_menu = false;
    public readonly instance_count = signal(0);
    public readonly loading = toSignal(this._service.loading, {
        initialValue: false,
    });
    public readonly debug_position = this._debug.position;
    public readonly item = toSignal(this._service.item, {
        initialValue: null as PlaceTrigger | null,
    });
    public readonly newItem = () => this._service.create();
    public readonly scroll = signal(0);
    public readonly tab_list = computed(() =>
        [
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
        ].concat(extensionsForItem(this.item(), this.name)),
    );

    constructor() {
        super();
        effect(() => {
            void this.loadValues(this.item() as PlaceTrigger | null);
        });
    }

    protected async loadValues(item: PlaceTrigger | null) {
        if (!item) {
            this.instance_count.set(0);
            return;
        }
        // Get trigger count
        this.instance_count.set(
            (await lastValueFrom(listTriggerInstances(item.id))).length,
        );
    }
}
