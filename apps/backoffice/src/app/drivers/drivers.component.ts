import { Component } from '@angular/core';
import { PlaceDriver, queryModules } from '@placeos/ts-client';
import { map } from 'rxjs/operators';
import { extensionsForItem } from '../common/api';
import { AsyncHandler } from '../common/async-handler.class';
import { PlaceDebugService } from '../common/debug.service';
import { ActiveItemService } from '../common/item.service';
import { DriverStateService } from './driver-state.service';

@Component({
    selector: 'new-drivers-view',
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
                        title="Drivers"
                    ></item-sidebar>
                    <div class="flex-1 w-1/2 h-full relative flex flex-col z-0">
                        <item-selection
                            class="z-20 sm:hidden"
                            [route]="name"
                            title="Drivers"
                        >
                            <button
                                btn
                                icon
                                class="sm:hidden mr-2"
                                (click)="open_menu = true"
                            >
                                <app-icon
                                    className="backoffice-menu"
                                ></app-icon>
                            </button>
                        </item-selection>
                        <div class="flex flex-col flex-1 h-1/2">
                            <ng-container *ngIf="item?.id">
                                <item-details
                                    [can_edit]="true"
                                    [item]="item"
                                    type="Driver"
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
                            class="absolute bottom-16 left-1 sm:-left-8 w-10 h-10 flex items-center justify-center bg-secondary rounded-lg shadow z-30 text-secondary-content"
                            matTooltip="Update Drivers"
                            matTooltipPosition="right"
                            matRipple
                            *ngIf="updates_available | async"
                            (click)="showUpdateList()"
                        >
                            <app-icon class="text-3xl">update</app-icon>
                        </button>
                        <button
                            class="absolute bottom-2 left-2 sm:-left-9 w-12 h-12 flex items-center justify-center bg-secondary rounded-lg shadow z-30 text-secondary-content"
                            matTooltip="New driver"
                            matTooltipPosition="right"
                            matRipple
                            (click)="newItem()"
                        >
                            <app-icon
                                [className]="'backoffice-plus'"
                                class="text-3xl"
                            ></app-icon>
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
export class DriversComponent extends AsyncHandler {
    public readonly name = 'drivers';

    public open_menu = false;
    public device_count: number;
    public tab_list = [];
    public updates_available = this._drivers.updates_available;

    public readonly showUpdateList = () => this._drivers.showUpdateList();

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
                name: 'About',
                icon: { class: 'backoffice-info-with-circle' },
            },
            {
                id: 'modules',
                name: 'Modules',
                count: this.device_count ?? '?',
                icon: { class: 'backoffice-tablet' },
            },
            {
                id: 'history',
                name: 'Settings History',
                icon: { class: 'backoffice-clock' },
            },
        ].concat(this.extensions);
    }

    constructor(
        protected _service: ActiveItemService,
        private _drivers: DriverStateService,
        private _debug: PlaceDebugService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.item.subscribe((item) => {
                this.device_count = null;
                this.updateTabList();
                this.loadValues(item as any);
            })
        );
    }

    protected async loadValues(item: PlaceDriver) {
        if (!item) return;
        const query: any = { offset: 0, limit: 1, driver_id: item.id };
        this.device_count = await queryModules(query)
            .pipe(map(({ total }) => total))
            .toPromise()
            .catch((_) => 0);
        this.updateTabList();
    }
}
