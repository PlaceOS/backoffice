import { Component } from '@angular/core';
import { PlaceModule, querySystems } from '@placeos/ts-client';
import { extensionsForItem } from '../common/api';
import { BaseClass } from '../common/base.class';
import { ActiveItemService } from '../common/item.service';

@Component({
    selector: 'new-modules-view',
    template: `
        <div
            class="absolute inset-0 flex items-center divide-y sm:divide-y-0 sm:divide-x divide-gray-300 dark:divide-neutral-600 bg-white dark:bg-neutral-700"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <item-sidebar class="hidden sm:block" [route]="name" title="Modules"></item-sidebar>
            <div class="flex-1 w-1/2 h-full relative flex flex-col z-0">
                <item-selection class="z-20 sm:hidden" [route]="name" title="Modules">
                    <button
                        mat-icon-button
                        class="sm:hidden mr-2"
                        (click)="open_menu = true"
                    >
                        <app-icon className="backoffice-menu"></app-icon>
                    </button>
                </item-selection>
                <div class="flex flex-col flex-1 h-1/2">
                    <ng-container *ngIf="item?.id">
                        <item-details
                            [can_edit]="true"
                            [item]="item"
                            type="Module"
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
                    matTooltip="New system"
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
    `,
    styles: [``],
})
export class ModulesComponent extends BaseClass {
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

    public updateTabList() {
        this.tab_list = [
            {
                id: 'about',
                name: 'About',
                icon: { class: 'backoffice-info-with-circle' },
            },
            {
                id: 'systems',
                name: 'Systems',
                count: this.system_count,
                icon: { class: 'backoffice-documents' },
            },
            {
                id: 'history',
                name: 'Settings History',
                icon: { class: 'backoffice-clock' },
            },
        ].concat(this.extensions);
    }

    constructor(private _service: ActiveItemService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.item.subscribe((item) => {
                this.loadValues(item as any);
                this.updateTabList();
            })
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
