import { Component } from '@angular/core';
import { extensionsForItem } from '../common/api';

import { BaseClass } from '../common/base.class';
import { RepositoriesStateService } from './repositories-state.service';

@Component({
    selector: 'app-repositories',
    template: `
        <div class="flex-1 flex-col sm:flex-row flex h-full w-full relative">
            <sidebar
                heading="Repositories"
                name="repositories"
                class="absolute top-0 left-0 h-12 w-full sm:h-full sm:static"
            ></sidebar>
            <item-display
                name="repo"
                route="repositories"
                [tabs]="tab_list"
                class="flex-1 relative mt-12 sm:mt-0 w-full sm:w-1/2"
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

    public tab_list = [];

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public updateTabList() {
        this.tab_list = (this.driver_count < 0 || !this.driver_count
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

    constructor(protected _service: RepositoriesStateService) {
        super();
    }

    public async ngOnInit() {
        this.subscription(
            'item',
            this._service.driver_list.subscribe((list) => {
                this.driver_count = list ? list.length : -1;
                this.updateTabList();
            })
        );
        this.updateTabList();
    }
}
