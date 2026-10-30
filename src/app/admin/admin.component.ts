import { Component, OnInit, computed, inject } from '@angular/core';

import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { extensionsForItem } from '../common/api';
import { PlaceDebugService } from '../common/debug.service';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { SettingsService } from '../common/settings.service';
import { DebugOutputComponent } from '../ui/debug-output.component';
import { IconComponent } from '../ui/icon.component';
import { ItemTab } from '../ui/item-tablist.component';
import { SidebarMenuComponent } from '../ui/sidebar-menu.component';
import { TranslatePipe } from '../ui/translate.pipe';

@Component({
    selector: 'app-engine',
    template: `
        <div
            class="divide-base-200 bg-base-100 absolute inset-0 flex items-center divide-y sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full" />
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="z-0 flex h-1/2 flex-1">
                    <nav
                        class="border-base-200 relative z-10 h-full space-y-2 overflow-auto border-r px-2 pt-10 sm:w-56 sm:py-4"
                        [attr.aria-label]="'COMMON.MANAGE' | translate"
                    >
                        @for (item of tab_list(); track item.id) {
                            <a
                                btn
                                matRipple
                                class="clear hover:bg-base-200 w-auto min-w-full text-left"
                                [routerLink]="'/admin/' + item.id"
                                [queryParams]="item.query || {}"
                                routerLinkActive="bg-secondary! text-secondary-content"
                                ariaCurrentWhenActive="page"
                            >
                                <div class="flex w-full items-center space-x-2">
                                    <icon class="text-2xl" [icon]="item.icon" />
                                    <span class="hidden sm:block">{{
                                        item.name
                                    }}</span>
                                </div>
                            </a>
                        }
                    </nav>
                    <main
                        id="main-content"
                        tabindex="-1"
                        class="relative z-0 h-full w-1/2 flex-1 overflow-auto outline-none"
                    >
                        <router-outlet />
                    </main>
                    <button
                        icon
                        matRipple
                        class="absolute top-2 left-4 z-40 mr-2 sm:hidden"
                        (click)="open_menu = true"
                        [attr.aria-label]="'COMMON.MENU' | translate"
                    >
                        <icon>menu</icon>
                    </button>
                </div>
                @if (debug_position() === 'below') {
                    <app-debug-output below />
                }
            </div>
            @if (debug_position() === 'side') {
                <app-debug-output side class="h-full max-w-120" />
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
        `,
    ],
    imports: [
        TranslatePipe,
        DebugOutputComponent,
        IconComponent,
        MatRippleModule,
        SidebarMenuComponent,
        RouterModule,
    ],
})
export class PlaceComponent implements OnInit {
    private _settings = inject(SettingsService);
    private _service = inject(ActiveItemService);
    private _debug = inject(PlaceDebugService);

    public open_menu = false;
    public readonly debug_position = this._debug.position;

    public readonly tab_list = computed(() =>
        (
            [
                {
                    id: 'about',
                    name: i18n('ADMIN.TAB_ABOUT'),
                    icon: { content: 'info' },
                },
                {
                    id: 'database',
                    name: i18n('ADMIN.TAB_DATABASE'),
                    icon: { content: 'database' },
                },
                {
                    id: 'clusters',
                    name: i18n('ADMIN.TAB_CLUSTERS'),
                    icon: { content: 'dns' },
                },
                {
                    id: 'edge',
                    name: i18n('ADMIN.TAB_EDGES'),
                    icon: { content: 'network_node' },
                },
                {
                    id: 'interfaces',
                    name: i18n('ADMIN.TAB_INTERFACES'),
                    icon: { content: 'web' },
                },
                {
                    id: 'brokers',
                    name: i18n('ADMIN.TAB_MQTT_BROKERS'),
                    icon: { content: 'sensors' },
                },
                {
                    id: 'staff-api',
                    name: i18n('ADMIN.TAB_TENANT_CONFIG'),
                    icon: { content: 'api' },
                },
                {
                    id: 'resource-imports',
                    name: i18n('ADMIN.TAB_RESOURCE_IMPORTS'),
                    icon: { content: 'publish' },
                },
                {
                    id: 'extensions',
                    name: i18n('ADMIN.TAB_EXTENSIONS'),
                    icon: { content: 'webhook' },
                },
                {
                    id: 'api-keys',
                    name: i18n('ADMIN.TAB_API_KEYS'),
                    icon: { content: 'key' },
                },
                {
                    id: 'schemas',
                    name: i18n('ADMIN.TAB_CUSTOM_SCHEMAS'),
                    icon: { content: 'list' },
                },
                {
                    id: 'upload-storage',
                    name: i18n('ADMIN.TAB_UPLOAD_STORAGE'),
                    icon: { content: 'cloud_upload' },
                },
                {
                    id: 'upload-library',
                    name: i18n('ADMIN.TAB_UPLOADS_LIBRARY'),
                    icon: { content: 'photo_album' },
                },
                {
                    id: 'signage-ai',
                    name: i18n('ADMIN.TAB_SIGNAGE_AI'),
                    icon: { content: 'auto_awesome' },
                },
                {
                    id: 'signage-plugins',
                    name: i18n('ADMIN.TAB_SIGNAGE_PLUGINS'),
                    icon: { content: 'display_settings' },
                },
                {
                    id: 'build-jobs',
                    name: i18n('ADMIN.TAB_BUILD_JOBS'),
                    icon: { content: 'laps' },
                },
            ] as ItemTab[]
        ).concat(extensionsForItem(this._service.item(), 'admin')),
    );

    public async ngOnInit() {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        this._settings.title = i18n('ADMIN.TITLE');
    }
}
