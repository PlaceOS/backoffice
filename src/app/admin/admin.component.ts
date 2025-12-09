import { Component, inject } from '@angular/core';

import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { timer } from 'rxjs';
import { extensionsForItem } from '../common/api';
import { AsyncHandler } from '../common/async-handler.class';
import { PlaceDebugService } from '../common/debug.service';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { SettingsService } from '../common/settings.service';
import { DebugOutputComponent } from '../ui/debug-output.component';
import { IconComponent } from '../ui/icon.component';
import { SidebarMenuComponent } from '../ui/sidebar-menu.component';
import { BackofficeUsersService } from '../users/users.service';

@Component({
    selector: 'app-engine',
    template: `
        <div
            class="divide-base-200 bg-base-100 absolute inset-0 flex items-center divide-y sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="z-0 flex h-1/2 flex-1">
                    <div
                        class="border-base-200 relative z-10 h-full space-y-2 overflow-auto border-r px-2 pt-10 sm:w-56 sm:py-4"
                    >
                        @for (item of tab_list; track item.id) {
                            <a
                                btn
                                matRipple
                                class="clear hover:bg-base-200 w-auto min-w-full text-left"
                                [routerLink]="['/admin', item.id]"
                                routerLinkActive="bg-secondary! text-secondary-content"
                            >
                                <div class="flex w-full items-center space-x-2">
                                    <icon class="text-2xl">{{
                                        item.icon?.value
                                    }}</icon>
                                    <span class="hidden sm:block">{{
                                        item.name
                                    }}</span>
                                </div>
                            </a>
                        }
                    </div>
                    <div class="relative z-0 h-full w-1/2 flex-1 overflow-auto">
                        <router-outlet></router-outlet>
                    </div>
                    <button
                        icon
                        matRipple
                        class="absolute top-2 left-4 z-40 mr-2 sm:hidden"
                        (click)="open_menu = true"
                    >
                        <icon>menu</icon>
                    </button>
                </div>
                @if (debug_position() === 'below') {
                    <app-debug-output below></app-debug-output>
                }
            </div>
            @if (debug_position() === 'side') {
                <app-debug-output
                    side
                    class="h-full max-w-120"
                ></app-debug-output>
            }
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
                background-color: var(--secondary) !important;
                color: var(--secondary-content);
                margin-right: -1px;
            }
        `,
    ],
    imports: [
        DebugOutputComponent,
        IconComponent,
        MatRippleModule,
        SidebarMenuComponent,
        RouterModule,
    ],
})
export class PlaceComponent extends AsyncHandler {
    private _settings = inject(SettingsService);
    private _service = inject(ActiveItemService);
    private _users = inject(BackofficeUsersService);
    private _debug = inject(PlaceDebugService);

    public tab_list = [];
    public open_menu = false;
    public readonly debug_position = this._debug.position;

    public get extensions() {
        return extensionsForItem(this._service.active_item, 'admin');
    }

    public get dark_mode() {
        return this._users.dark_mode;
    }

    public updateTabList() {
        this.tab_list = [
            {
                id: 'about',
                name: i18n('ADMIN.TAB_ABOUT'),
                icon: { value: 'info' },
            },
            {
                id: 'database',
                name: i18n('ADMIN.TAB_DATABASE'),
                icon: { value: 'database' },
            },
            {
                id: 'clusters',
                name: i18n('ADMIN.TAB_CLUSTERS'),
                icon: { value: 'dns' },
            },
            {
                id: 'edge',
                name: i18n('ADMIN.TAB_EDGES'),
                icon: { value: 'network_node' },
            },
            {
                id: 'interfaces',
                name: i18n('ADMIN.TAB_INTERFACES'),
                icon: { value: 'web' },
            },
            {
                id: 'brokers',
                name: i18n('ADMIN.TAB_MQTT_BROKERS'),
                icon: { value: 'sensors' },
            },
            {
                id: 'staff-api',
                name: i18n('ADMIN.TAB_TENANT_CONFIG'),
                icon: { value: 'api' },
            },
            {
                id: 'resource-imports',
                name: i18n('ADMIN.TAB_RESOURCE_IMPORTS'),
                icon: { value: 'publish' },
            },
            {
                id: 'extensions',
                name: i18n('ADMIN.TAB_EXTENSIONS'),
                icon: { value: 'webhook' },
            },
            {
                id: 'api-keys',
                name: i18n('ADMIN.TAB_API_KEYS'),
                icon: { value: 'key' },
            },
            {
                id: 'schemas',
                name: i18n('ADMIN.TAB_CUSTOM_SCHEMAS'),
                icon: { value: 'list' },
            },
            {
                id: 'upload-storage',
                name: i18n('ADMIN.TAB_UPLOAD_STORAGE'),
                icon: { value: 'cloud_upload' },
            },
            {
                id: 'upload-library',
                name: i18n('ADMIN.TAB_UPLOADS_LIBRARY'),
                icon: { value: 'photo_album' },
            },
            {
                id: 'build-jobs',
                name: i18n('ADMIN.TAB_BUILD_JOBS'),
                icon: { value: 'laps' },
            },
            // {
            //     id: 'mailing-list',
            //     name: 'Email Templates',
            //     icon: { value: 'email' },
            // },
        ].concat(this.extensions);
    }

    public async ngOnInit() {
        this.updateTabList();
        await timer(1000).toPromise();
        this._settings.title = i18n('ADMIN.TITLE');
    }
}
