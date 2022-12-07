import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceDriver, queryModules } from '@placeos/ts-client';
import { map } from 'rxjs/operators';
import { extensionsForItem } from '../common/api';
import { BaseClass } from '../common/base.class';
import { PlaceDebugService } from '../common/debug.service';
import { ActiveItemService } from '../common/item.service';

@Component({
    selector: 'new-drivers-view',
    template: `
        <div
            class="absolute inset-0 flex items-center divide-y sm:divide-y-0 sm:divide-x divide-gray-300 dark:divide-neutral-600 bg-white dark:bg-neutral-700"
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
                                mat-icon-button
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
                            class="absolute bottom-2 left-2 sm:-left-9 w-12 h-12 flex items-center justify-center bg-primary dark:bg-pink rounded-lg shadow z-30 text-white"
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
export class DriversComponent extends BaseClass {
    public readonly name = 'drivers';

    public open_menu = false;
    public device_count: number;
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
