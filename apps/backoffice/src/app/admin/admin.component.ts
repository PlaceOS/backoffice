import { Component } from '@angular/core';

import { AsyncHandler } from 'apps/backoffice/src/app/common/base.class';
import { extensionsForItem } from '../common/api';
import { PlaceDebugService } from '../common/debug.service';
import { ActiveItemService } from '../common/item.service';
import { SettingsService } from '../common/settings.service';
import { BackofficeUsersService } from '../users/users.service';

@Component({
    selector: 'app-engine',
    template: `
        <div
            class="absolute inset-0 flex items-center divide-y sm:divide-y-0 sm:divide-x divide-gray-300 dark:divide-neutral-600 bg-white dark:bg-neutral-700"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <div class="flex flex-col h-full flex-1 overflow-hidden w-px">
                <div
                    class="flex flex-1 z-0 h-1/2 dark:text-white dark:bg-neutral-700"
                >
                    <div
                        class="h-full relative sm:w-56 px-2 my-4 border-r border-gray-400 border-opacity-30 z-10 pt-10 sm:pt-0"
                    >
                        <a
                            *ngFor="let item of tab_list"
                            class="flex items-center space-x-2 m-2 rounded h-8 px-3 hover:bg-primary hover:bg-opacity-25"
                            [routerLink]="['/admin', item.id]"
                            routerLinkActive="active"
                        >
                            <app-icon [icon]="item.icon"></app-icon>
                            <span class="hidden sm:block">{{ item.name }}</span>
                        </a>
                    </div>
                    <div
                        class="relative flex-1 w-1/2 h-full z-0 px-4 dark:text-white overflow-auto"
                    >
                        <router-outlet></router-outlet>
                    </div>
                    <button
                        btn
                        icon
                        class="sm:hidden mr-2 absolute top-2 left-4 z-40"
                        (click)="open_menu = true"
                    >
                        <app-icon className="backoffice-menu"></app-icon>
                    </button>
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
export class PlaceComponent extends AsyncHandler {
    public tab_list = [];
    public open_menu = false;

    public get extensions() {
        return extensionsForItem(this._service.active_item, 'admin');
    }

    public get dark_mode() {
        return this._users.dark_mode;
    }

    public get debug_position() {
        return this._debug.position;
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
            {
                id: 'upload-storage',
                name: 'Upload Storage',
                icon: { class: 'backoffice-upload' },
            },
        ].concat(this.extensions);
    }

    constructor(
        private _settings: SettingsService,
        private _service: ActiveItemService,
        private _users: BackofficeUsersService,
        private _debug: PlaceDebugService
    ) {
        super();
    }

    public ngOnInit(): void {
        this._settings.title = 'Admin';
        this.updateTabList();
    }
}
