import { Component } from '@angular/core';
import { PlaceDriver, queryModules } from '@placeos/ts-client';
import { map } from 'rxjs/operators';
import { extensionsForItem } from '../common/api';
import { AsyncHandler } from '../common/async-handler.class';
import { PlaceDebugService } from '../common/debug.service';
import { ActiveItemService } from '../common/item.service';
import { DriverStateService } from './driver-state.service';
import { i18n } from '../common/translate';

@Component({
    selector: 'new-drivers-view',
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
                        [title]="'DRIVERS.PLURAL' | translate"
                    ></item-sidebar>
                    <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                        <item-selection
                            class="z-20 sm:hidden"
                            [route]="name"
                            [title]="'DRIVERS.PLURAL' | translate"
                        >
                            <button
                                btn
                                icon
                                class="mr-2 sm:hidden"
                                (click)="open_menu = true"
                            >
                                <app-icon>menu</app-icon>
                            </button>
                        </item-selection>
                        <div class="flex h-1/2 flex-1 flex-col">
                            <ng-container *ngIf="item?.id">
                                <item-details
                                    [can_edit]="true"
                                    [item]="item"
                                    [type]="'DRIVERS.SINGULAR' | translate"
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
                            </ng-container>
                        </div>
                        <button
                            class="absolute bottom-16 left-1 z-30 flex h-10 w-10 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-8"
                            [matTooltip]="'DRIVERS.UPDATE' | translate"
                            matTooltipPosition="right"
                            matRipple
                            *ngIf="updates_available | async"
                            (click)="showUpdateList()"
                        >
                            <app-icon class="text-3xl">update</app-icon>
                        </button>
                        <button
                            class="absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-9"
                            [matTooltip]="'DRIVERS.NEW' | translate"
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
                name: i18n('DRIVERS.TAB_ABOUT'),
                icon: { content: 'info' },
            },
            {
                id: 'modules',
                name: i18n('DRIVERS.TAB_MODULES'),
                count: this.device_count ?? '?',
                icon: { content: 'tablet' },
            },
            {
                id: 'history',
                name: i18n('DRIVERS.TAB_SETTINGS_HISTORY'),
                icon: { content: 'schedule' },
            },
        ].concat(this.extensions);
    }

    constructor(
        protected _service: ActiveItemService,
        private _drivers: DriverStateService,
        private _debug: PlaceDebugService,
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
            }),
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
