import {
    Component,
    EventEmitter,
    Input,
    Optional,
    Output,
} from '@angular/core';
import { Router } from '@angular/router';

import { AsyncHandler } from '../common/async-handler.class';
import { PlaceDebugService } from '../common/debug.service';
import { HotkeysService } from '../common/hotkeys.service';
import { SettingsService } from '../common/settings.service';
import { ApplicationIcon } from '../common/types';
import { BackofficeUsersService } from '../users/users.service';
import { CustomTooltipData } from './custom-tooltip.component';
import { UserMenuTooltipComponent } from './user-menu-tooltip.component';

@Component({
    selector: 'sidebar-link',
    template: `
        <a
            btn
            matRipple
            class="clear hover:bg-base-100 text-left w-[calc(100%-1rem)] mx-auto"
            [routerLink]="[route]"
            routerLinkActive="!bg-secondary text-secondary-content"
        >
            <div class="flex items-center space-x-2 w-full">
                <app-icon class="text-xl">{{ icon }}</app-icon>
                <p>{{ name }}</p>
            </div>
        </a>
    `,
    styles: [
        `
            :host {
                display: block;
                width: 100%;
            }
        `,
    ],
})
export class SidebarLink {
    @Input() public name: string;
    @Input() public icon: string;
    @Input() public route: string;
}

@Component({
    selector: 'sidebar-menu',
    template: `
        <div
            class="absolute pointer-events-none sm:pointer-events-auto inset-0 sm:relative sm:inset-auto hidden sm:flex flex-col sm:w-52 justify-between h-full overflow-hidden bg-base-200 z-40 sm:z-0"
            [class.!flex]="open"
            [class.!pointer-events-auto]="open"
            (click)="close()"
        >
            <div class="flex flex-col items-center space-y-2 flex-1 h-1/2">
                <a
                    [routerLink]="['/']"
                    class="font-heading text-4xl mt-4 w-[calc(100%-2rem)]  ml-16 sm:ml-0"
                >
                    Place<span class="text-primary font-heading">OS</span>
                </a>
                <div class="flex-1 overflow-auto space-y-2 w-full pb-2">
                    <sidebar-link
                        [name]="'COMMON.SYSTEMS' | translate"
                        route="/systems"
                        icon="meeting_room"
                    ></sidebar-link>
                    <sidebar-link
                        [name]="'COMMON.MODULES' | translate"
                        route="/modules"
                        icon="tablet"
                    ></sidebar-link>
                    <sidebar-link
                        [name]="'COMMON.ZONES' | translate"
                        route="/zones"
                        icon="layers"
                    ></sidebar-link>
                    <sidebar-link
                        [name]="'COMMON.DRIVERS' | translate"
                        route="/drivers"
                        icon="construction"
                    ></sidebar-link>
                    <sidebar-link
                        *ngIf="is_admin"
                        [name]="'COMMON.REPOS' | translate"
                        route="/repositories"
                        icon="inventory_2"
                    ></sidebar-link>
                    <sidebar-link
                        [name]="'COMMON.TRIGGERS' | translate"
                        route="/triggers"
                        icon="timer"
                    ></sidebar-link>
                    <sidebar-link
                        [name]="'COMMON.METRICS' | translate"
                        route="/metrics"
                        icon="monitoring"
                    ></sidebar-link>
                    <sidebar-link
                        *ngIf="is_support || is_admin"
                        [name]="'COMMON.USERS' | translate"
                        route="/users"
                        icon="group"
                    ></sidebar-link>
                    <sidebar-link
                        *ngIf="is_admin"
                        [name]="'COMMON.DOMAINS' | translate"
                        route="/domains"
                        icon="domain"
                    ></sidebar-link>
                    <sidebar-link
                        *ngIf="is_admin"
                        [name]="'COMMON.MANAGE' | translate"
                        route="/admin"
                        icon="settings"
                    ></sidebar-link>
                    <button
                        class="absolute top-1 left-1 sm:hidden"
                        btn
                        icon
                        (click)="open = false; openChange.emit(false)"
                    >
                        <app-icon>close</app-icon>
                    </button>
                </div>
            </div>
            <div
                class="m-2 p-2 rounded-xl border border-base-300  flex flex-col space-y-2"
                *ngIf="debug_enabled"
            >
                <div
                    class="rounded-xl text-xs mono bg-info text-info-content text-center p-1"
                >
                    {{ 'COMMON.DEBUG_ENABLED' | translate }}
                </div>
                <p class="text-xs p-1 text-center">
                    {{
                        'COMMON.DEBUG_LISTENING_MSG'
                            | translate: { modules: debug_module_count }
                    }}<br />
                    {{
                        'COMMON.DEBUG_MSG_COUNT_MSG'
                            | translate: { count: debug_message_count }
                    }}
                </p>
                <div actions class="flex items-center justify-center space-x-2">
                    <button
                        icon
                        matRipple
                        (click)="toggleDebugPosition()"
                        class="bg-base-200"
                    >
                        <app-icon matTooltip="Toggle Position">{{
                            debug_position === 'side'
                                ? 'border_bottom'
                                : 'border_right'
                        }}</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        (click)="clearDebugMessages()"
                        class="bg-base-200"
                    >
                        <app-icon matTooltip="Clear Messages"
                            >clear_all</app-icon
                        >
                    </button>
                    <button
                        icon
                        matRipple
                        (click)="clearBindings()"
                        class="bg-base-200"
                    >
                        <app-icon
                            className="backoffice-uninstall"
                            matTooltip="Unbind Modules"
                        ></app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        (click)="openDebug()"
                        class="bg-base-200"
                    >
                        <app-icon
                            className="backoffice-notification"
                            matTooltip="Open Console"
                        ></app-icon>
                    </button>
                </div>
            </div>
            <button
                matRipple
                class="flex items-center space-x-2 p-2 border-t border-base-300 min-h-16 text-left "
                customTooltip
                user
                [content]="user_controls"
                yPosition="bottom"
                xPosition="start"
            >
                <div
                    class="rounded-full h-10 w-10 bg-base-300 bg-cover bg-center"
                    [style.background-image]="'url(' + user?.image + ')'"
                ></div>
                <div class="flex flex-col flex-1 w-1/2 leading-tight">
                    <div class="truncate w-full">{{ user?.name }}</div>
                    <div class="truncate text-xs opacity-30 w-full">
                        {{
                            (user?.sys_admin
                                ? 'COMMON.USER_ADMIN'
                                : user?.support
                                ? 'COMMON.USER_SUPPORT'
                                : 'COMMON.USER_BASIC'
                            ) | translate
                        }}
                    </div>
                </div>
            </button>
        </div>
    `,
    styles: [
        `
            .active {
                background-color: var(--s);
                color: var(--sc);
            }
        `,
    ],
})
export class SidebarMenuComponent extends AsyncHandler {
    @Input() public open = true;
    @Output() public openChange = new EventEmitter();
    public items: any[] = [];
    public readonly user_controls = UserMenuTooltipComponent;
    /** Application logo */
    public get logo(): ApplicationIcon {
        return this._settings.get('app.logo_light');
    }
    /** List of available menu items for the application */
    public get user() {
        return this._users.current();
    }

    public get debug_position() {
        return this._debug.position;
    }

    public get debug_enabled() {
        return this._debug.is_enabled;
    }

    public get debug_module_count() {
        return this._debug.modules.length;
    }

    public get debug_message_count() {
        return this._debug.event_list.length;
    }

    public get is_admin() {
        return this._users.current().sys_admin;
    }

    public get is_support() {
        return this._users.current().support;
    }

    public readonly close = () => this._tooltip?.close();

    constructor(
        @Optional() private _tooltip: CustomTooltipData,
        private _debug: PlaceDebugService,
        private _settings: SettingsService,
        private _users: BackofficeUsersService,
        private _hotkey: HotkeysService,
        private _router: Router
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'up',
            this._hotkey.listen(['Control', 'Shift', 'ArrowUp'], () =>
                this.changeSelected(-1)
            )
        );
        this.subscription(
            'down',
            this._hotkey.listen(['Control', 'Shift', 'ArrowDown'], () =>
                this.changeSelected(1)
            )
        );
    }

    public toggleDebugPosition() {
        const position = this.debug_position;
        const new_pos = position === 'side' ? 'below' : 'side';
        this._debug.position = new_pos;
    }

    public openDebug() {
        this._debug.is_shown = true;
    }

    /** Clear all the debug logs */
    public clearDebugMessages() {
        this._debug.clearEvents();
    }

    public clearBindings() {
        this._debug.unbindAll();
    }

    private changeSelected(offset: number = 1) {
        // const index = this.menu_items.findIndex(
        //     (item) => this._router.url.indexOf(item.route) >= 0
        // );
        // const new_index = index + offset;
        // if (this.menu_items[new_index]) {
        //     this._router.navigate([this.menu_items[new_index].route]);
        // }
    }
}
