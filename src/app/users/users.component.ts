import { Component } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';

import { ActiveItemService } from '../common/item.service';
import { BaseClass } from '../common/base.class';
import { extensionsForItem } from '../common/api';

@Component({
    selector: 'app-users',
    template: `
        <div
            class="flex-1 flex-col sm:flex-row flex h-full w-full relative"
        >
            <sidebar
                heading="Users"
                name="users"
                class="absolute top-0 left-0 h-12 w-full sm:h-full sm:static"
            ></sidebar>
            <item-display
                name="user"
                route="users"
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
export class UsersComponent extends BaseClass {
    public readonly name = 'users';

    public readonly show_options = this._service.show_options;

    public tab_list = [];

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public updateTabList() {
        this.tab_list = [
            { id: 'about', name: 'About', icon: { class: 'backoffice-info-with-circle' } },
            { id: 'history', name: 'History', icon: { class: 'backoffice-list' } }
        ].concat(this.extensions);
    }

    constructor(protected _service: ActiveItemService) {
        super();
    }

    public ngOnInit() {
        this.subscription('item', this._service.item.subscribe(() => this.updateTabList()));
        this.updateTabList();
    }
}
