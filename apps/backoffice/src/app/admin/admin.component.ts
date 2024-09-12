import { Component } from '@angular/core';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { extensionsForItem } from '../common/api';
import { PlaceDebugService } from '../common/debug.service';
import { ActiveItemService } from '../common/item.service';
import { SettingsService } from '../common/settings.service';
import { BackofficeUsersService } from '../users/users.service';

@Component({
    selector: 'app-engine',
    template: `
        <div
            class="absolute inset-0 flex items-center divide-y sm:divide-y-0 sm:divide-x divide-base-200  bg-base-100 "
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <div class="flex flex-col h-full flex-1 overflow-hidden w-px">
                <div class="flex flex-1 z-0 h-1/2  ">
                    <div
                        class="h-full relative sm:w-56 px-2 border-r border-base-200 z-10 pt-10 sm:py-4 space-y-2"
                    >
                        <a
                            btn
                            matRipple
                            *ngFor="let item of tab_list"
                            class="clear text-left w-auto min-w-full hover:bg-base-200"
                            [routerLink]="['/admin', item.id]"
                            routerLinkActive="!bg-secondary text-secondary-content"
                        >
                            <div class="flex items-center space-x-2 w-full">
                                <app-icon class="text-2xl">{{
                                    item.icon?.value
                                }}</app-icon>
                                <span class="hidden sm:block">{{
                                    item.name
                                }}</span>
                            </div>
                        </a>
                    </div>
                    <div
                        class="relative flex-1 w-1/2 h-full z-0 px-4  overflow-auto"
                    >
                        <router-outlet></router-outlet>
                    </div>
                    <button
                        btn
                        icon
                        class="sm:hidden mr-2 absolute top-2 left-4 z-40"
                        (click)="open_menu = true"
                    >
                        <app-icon>menu</app-icon>
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
                background-color: var(--s) !important;
                color: var(--sc);
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
            { id: 'about', name: 'About', icon: { value: 'info' } },
            {
                id: 'database',
                name: 'Database',
                icon: { value: 'database' },
            },
            {
                id: 'clusters',
                name: 'Clusters',
                icon: { value: 'dns' },
            },
            { id: 'edge', name: 'Edges', icon: { value: 'network_node' } },
            {
                id: 'interfaces',
                name: 'Interfaces',
                icon: { value: 'web' },
            },
            {
                id: 'brokers',
                name: 'MQTT Brokers',
                icon: { value: 'sensors' },
            },
            {
                id: 'staff-api',
                name: 'Staff API',
                icon: { value: 'api' },
            },
            {
                id: 'extensions',
                name: 'Extensions',
                icon: { value: 'webhook' },
            },
            {
                id: 'api-keys',
                name: 'API Keys',
                icon: { value: 'key' },
            },
            {
                id: 'schemas',
                name: 'Custom Schemas',
                icon: { value: 'list' },
            },
            {
                id: 'upload-storage',
                name: 'Upload Storage',
                icon: { value: 'cloud_upload' },
            },
            {
                id: 'upload-library',
                name: 'Uploads Library',
                icon: { value: 'photo_album' },
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
