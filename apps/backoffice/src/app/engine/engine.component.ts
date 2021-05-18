import { Component } from '@angular/core';

import { BaseClass } from 'apps/backoffice/src/app/common/base.class';
import { extensionsForItem } from '../common/api';
import { ActiveItemService } from '../common/item.service';
import { SettingsService } from '../common/settings.service';
import { BackofficeUsersService } from '../users/users.service';

@Component({
    selector: 'app-engine',
    template: `
        <div
            class="h-16 p-4 text-2xl bg-white border-b border-gray-300 shadow z-10"
            [class.dark-mode]="dark_mode"
        >
            PlaceOS Admin
        </div>
        <div class="flex flex-1 z-0">
            <div
                class="relative w-64 h-full bg-white border-r border-gray-300 shadow z-10"
                [class.dark-mode]="dark_mode"
            >
                <a
                    *ngFor="let item of tab_list"
                    class="flex items-center space-x-2 my-2 rounded-l-2xl h-8 px-3 ml-3 hover:bg-primary hover:bg-opacity-25"
                    [routerLink]="['/admin', item.id]"
                    routerLinkActive="active"
                >
                    <app-icon [icon]="item.icon"></app-icon>
                    <p>{{ item.name }}</p>
                </a>
            </div>
            <div
                class="relative flex-1 w-1/2 h-full z-0 bg-white px-4"
                [class.dark-mode]="dark_mode"
            >
                <router-outlet></router-outlet>
            </div>
        </div>
        <!-- <item-display class="w-full h-full" name="Admin" route="admin" [has_change]="false" [tabs]="tab_list">
        </item-display> -->
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
            }

            .active {
                background-color: #c2185b !important;
                color: #fff;
                margin-right: -1px;
            }

            .dark-mode {
                background: #424242 !important;
            }
        `,
    ],
})
export class PlaceComponent extends BaseClass {
    public tab_list = [];

    public get extensions() {
        return extensionsForItem(this._service.active_item, 'admin');
    }

    public get dark_mode() {
        return this._users.dark_mode;
    }

    public updateTabList() {
        this.tab_list = [
            { id: 'about', name: 'About', icon: { class: 'backoffice-info' } },
            {
                id: 'database',
                name: 'Database',
                icon: { class: 'backoffice-database' },
            },
            {
                id: 'clusters',
                name: 'Clusters',
                icon: { class: 'backoffice-server' },
            },
            { id: 'edge', name: 'Edges', icon: { class: 'backoffice-server' } },
            {
                id: 'interfaces',
                name: 'Interfaces',
                icon: { class: 'backoffice-browser' },
            },
            {
                id: 'brokers',
                name: 'MQTT Brokers',
                icon: { class: 'backoffice-server' },
            },
            {
                id: 'staff-api',
                name: 'Staff API',
                icon: { class: 'backoffice-gist' },
            },
            {
                id: 'extensions',
                name: 'Extensions',
                icon: { class: 'backoffice-gist' },
            },
            {
                id: 'schemas',
                name: 'Custom Schemas',
                icon: { class: 'backoffice-list' },
            },
        ].concat(this.extensions);
    }

    constructor(
        private _settings: SettingsService,
        private _service: ActiveItemService,
        private _users: BackofficeUsersService
    ) {
        super();
    }

    public ngOnInit(): void {
        this._settings.title = 'Admin';
        this.updateTabList();
    }
}
