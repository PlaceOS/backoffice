import { Component } from '@angular/core';
import { PlaceRepository, PlaceRepositoryType, listRepositoryDrivers } from '@placeos/ts-client';
import { extensionsForItem } from '../common/api';

import { BaseClass } from '../common/base.class';
import { ActiveItemService } from '../common/item.service';

@Component({
    selector: 'app-repositories',
    template: `
        <div
            class="flex-1 flex-col sm:flex-row flex h-full w-full relative"
        >
            <sidebar
                heading="Repositories"
                name="repos"
                class="absolute top-0 left-0 h-12 w-full sm:h-full sm:static"
            ></sidebar>
            <item-display
                name="repo"
                route="repositories"
                [tabs]="tab_list"
                class="flex-1 relative mt-12 sm:mt-0"
            ></item-display>
        </div>
    `,
    styles: [
        `
            sidebar {
                transition: height 300ms;
            }
            @media screen and (min-width: 640px) {
                sidebar {
                    width: 20em !important;
                }
            }
        `,
    ],
})
export class RepositoriesComponent extends BaseClass {
    /** Number of drivers in the repository */
    public driver_count: number;

    public readonly name = 'repositories';

    public readonly show_options = this._service.show_options;

    public tab_list = [];

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public updateTabList() {
        this.tab_list = (this.driver_count < 0
            ? [{ id: 'about', name: 'About', icon: { class: 'backoffice-info-with-circle' } }]
            : [
                  { id: 'about', name: 'About', icon: { class: 'backoffice-info-with-circle' } },
                  {
                      id: 'drivers',
                      name: 'Drivers',
                      count: this.driver_count,
                      icon: { class: 'backoffice-documents' },
                  },
              ]
        ).concat(this.extensions);
    }

    constructor(protected _service: ActiveItemService) {
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

    protected async loadValues(item: PlaceRepository) {
        if (!item) return;
        const query: any = { offset: 0 };
        if (item.type === PlaceRepositoryType.Driver) {
            this.driver_count = 0;
            // Get driver count for repository
            const list = await listRepositoryDrivers(item.id, query).toPromise();
            (this.driver_count = list.length);
        } else {
            this.driver_count = -1;
        }
        this.updateTabList();
    }
}
