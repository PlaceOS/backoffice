import { Component } from '@angular/core';
import { listTriggerInstances, PlaceTrigger } from '@placeos/ts-client';
import { extensionsForItem } from '../common/api';
import { AsyncHandler } from '../common/async-handler.class';
import { PlaceDebugService } from '../common/debug.service';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/translate';

@Component({
    selector: 'new-triggers-view',
    template: `
        <div
            class="absolute inset-0 flex items-center divide-y sm:divide-y-0 sm:divide-x divide-base-200  bg-base-100 "
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <div class="flex flex-col h-full flex-1 overflow-hidden w-px">
                <div class="flex flex-1 h-px">
                    <item-sidebar
                        class="hidden sm:block"
                        [route]="name"
                        [title]="'TRIGGERS.PLURAL' | translate"
                    ></item-sidebar>
                    <div class="flex-1 w-1/2 h-full relative flex flex-col z-0">
                        <item-selection
                            class="z-20 sm:hidden"
                            [route]="name"
                            [title]="'TRIGGERS.PLURAL' | translate"
                        >
                            <button
                                btn
                                icon
                                class="sm:hidden mr-2"
                                (click)="open_menu = true"
                            >
                                <app-icon>menu</app-icon>
                            </button>
                        </item-selection>
                        <div class="flex flex-col flex-1 h-1/2">
                            <ng-container *ngIf="item?.id">
                                <item-details
                                    [can_edit]="true"
                                    [item]="item"
                                    [type]="'TRIGGERS.SINGULAR' | translate"
                                ></item-details>
                                <item-tablist
                                    [base]="name"
                                    [tabs]="tab_list"
                                    [scrolled]="scroll > 0"
                                    class="z-10"
                                ></item-tablist>
                                <div
                                    #el
                                    class="flex-1 h-1/2 w-full overflow-auto p-4 z-0 relative"
                                    (scroll)="scroll = el.scrollTop"
                                >
                                    <router-outlet></router-outlet>
                                </div>
                            </ng-container>
                        </div>
                        <button
                            class="absolute bottom-2 left-2 sm:-left-9 w-12 h-12 flex items-center justify-center bg-secondary rounded-lg shadow z-30 text-secondary-content border border-base-200"
                            [matTooltip]="'TRIGGERS.NEW' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="newItem()"
                        >
                            <app-icon class="text-3xl">add</app-icon>
                        </button>
                    </div>
                </div>
                <app-debug-output
                    below
                    *ngIf="debug_position === 'below'"
                ></app-debug-output>
            </div>
            <app-debug-output
                side
                *ngIf="debug_position === 'side'"
                class="h-full max-w-[30rem]"
            ></app-debug-output>
        </div>
    `,
    styles: [``],
})
export class TriggersComponent extends AsyncHandler {
    public readonly name = 'triggers';

    public open_menu = false;
    public instance_count = 0;
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
                name: i18n('TRIGGERS.TAB_ABOUT'),
                icon: { content: 'info' },
            },
            {
                id: 'instances',
                name: i18n('TRIGGERS.TAB_INSTANCES'),
                count: this.instance_count,
                icon: { content: 'meeting_room' },
            },
        ].concat(this.extensions);
    }

    constructor(
        protected _service: ActiveItemService,
        private _debug: PlaceDebugService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.item.subscribe((item) => {
                this.loadValues(item as any);
            })
        );
        this.updateTabList();
    }

    protected async loadValues(item: PlaceTrigger) {
        if (!item) return;
        // Get trigger count
        this.instance_count = (
            await listTriggerInstances(item.id).toPromise()
        ).length;
        this.updateTabList();
    }
}
