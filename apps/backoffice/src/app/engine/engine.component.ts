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
            class="absolute inset-0 flex flex-col sm:flex-row items-center divide-y sm:divide-y-0 sm:divide-x divide-gray-300 dark:divide-neutral-600 bg-white dark:bg-neutral-700"
        >
            <sidebar-menu
                class="sm:h-full bg-gray-200 dark:bg-neutral-800"
            ></sidebar-menu>
            <div class="flex-1 w-1/2 h-full relative flex flex-col">
                <div class="flex flex-1 z-0 h-1/2 dark:text-white dark:bg-neutral-700">
                    <div
                        class="relative w-56 px-2 my-4 border-r border-gray-400 border-opacity-30 z-10"
                    >
                        <a
                            *ngFor="let item of tab_list"
                            class="flex items-center space-x-2 m-2 rounded h-8 px-3 hover:bg-primary hover:bg-opacity-25"
                            [routerLink]="['/admin', item.id]"
                            routerLinkActive="active"
                        >
                            <app-icon [icon]="item.icon"></app-icon>
                            <span>{{ item.name }}</span>
                        </a>
                    </div>
                    <div
                        class="relative flex-1 w-1/2 h-full z-0 px-4 dark:text-white overflow-auto"
                    >
                        <router-outlet></router-outlet>
                    </div>
                </div>
            </div>
        </div>
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
                background-color: var(--primary) !important;
                color: #fff;
                margin-right: -1px;
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
                id: 'api-keys',
                name: 'API Keys',
                icon: { class: 'backoffice-key' },
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
