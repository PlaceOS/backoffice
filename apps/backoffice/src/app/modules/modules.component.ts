import { Component } from '@angular/core';
import { PlaceModule, querySystems } from '@placeos/ts-client';
import { extensionsForItem } from '../common/api';
import { AsyncHandler } from '../common/async-handler.class';
import { PlaceDebugService } from '../common/debug.service';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';

@Component({
    selector: 'new-modules-view',
    template: `
        <div
            class="absolute inset-0 flex items-center divide-y divide-base-200 bg-base-100 sm:divide-x sm:divide-y-0"
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
                                (click)="open_menu = true"
                            >
                                <app-icon>menu</app-icon>
                            </button>
                        </item-selection>
                        <div class="flex h-1/2 flex-1 flex-col">
                            @if (item?.id) {
                                <item-details
                                    [can_edit]="true"
                                    [item]="item"
                                    [type]="'MODULES.SINGULAR' | translate"
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
                            }
                        </div>
                        <button
                            class="absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-9"
                            [matTooltip]="'MODULES.NEW' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="newItem()"
                        >
                            <app-icon class="text-3xl">add</app-icon>
                        </button>
                    </div>
                </div>
                @if (debug_position === 'below') {
                    <app-debug-output below></app-debug-output>
                }
            </div>
            @if (debug_position === 'side') {
                <app-debug-output
                    side
                    class="h-full max-w-[30rem]"
                ></app-debug-output>
            }
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class ModulesComponent extends AsyncHandler {
    /** Number of systems for the active device */
    public system_count: number;
    public open_menu = false;
    public readonly name = 'modules';

    public tab_list = [];

    public readonly newItem = () => this._service.create();

    public get item() {
        return this._service.active_item;
    }

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public get debug_position() {
        return this._debug.position;
    }

    public updateTabList() {
        this.tab_list = [
            {
                id: 'about',
                name: i18n('MODULES.TAB_ABOUT'),
                icon: { content: 'info' },
            },
            {
                id: 'systems',
                name: i18n('MODULES.TAB_SYSTEMS'),
                count: this.system_count,
                icon: { content: 'meeting_room' },
            },
            {
                id: 'history',
                name: i18n('MODULES.TAB_SETTINGS_HISTORY'),
                icon: { content: 'schedule' },
            },
        ].concat(this.extensions);
    }

    constructor(
        private _service: ActiveItemService,
        private _debug: PlaceDebugService,
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.item.subscribe((item) => {
                this.loadValues(item as any);
                this.updateTabList();
            }),
        );
        this.updateTabList();
    }

    protected async loadValues(item: PlaceModule) {
        if (!item) return;
        const query: any = { offset: 0, limit: 1, module_id: item.id };
        // Get system count
        this.system_count = (await querySystems(query).toPromise()).total;
    }
}
