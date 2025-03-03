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
    selector: 'sidebar-menu',
    template: `
        <div
            sidebar-menu
            class="pointer-events-none absolute inset-0 z-40 hidden h-full flex-col justify-between bg-base-200 sm:pointer-events-auto sm:relative sm:inset-auto sm:z-10 sm:flex"
            [class.compact]="compact"
            [class.sm:w-52]="!compact"
            [class.!flex]="open"
            [class.!pointer-events-auto]="open"
            (click)="close()"
        >
            <div class="flex h-1/2 flex-1 flex-col items-center space-y-2">
                <a
                    [routerLink]="['/']"
                    class="font-heading ml-16 mt-4 text-4xl sm:mb-2 sm:ml-0"
                    [style.width]="compact ? 'auto' : 'calc(100%-2rem)'"
                >
                    <div [class.sm:hidden]="compact">
                        Place<span class="font-heading text-primary">OS</span>
                    </div>
                    <img
                        src="assets/icon/mstile-310x310.png"
                        class="hidden h-12 w-12"
                        [class.sm:block]="compact"
                    />
                </a>
                <div class="w-full flex-1 space-y-2 overflow-auto pb-2">
                    @for (link of links; track link.name) {
                        <a
                            btn
                            matRipple
                            class="clear mx-auto w-[calc(100%-1rem)] text-left hover:bg-base-100"
                            [routerLink]="[link.route]"
                            routerLinkActive="!bg-secondary text-secondary-content"
                            [matTooltip]="
                                compact ? (link.name | translate) : ''
                            "
                            matTooltipPosition="right"
                            *ngIf="!link.show_on || link.show_on()"
                        >
                            <div
                                class="flex w-full items-center space-x-2"
                                [class.sm:justify-center]="compact"
                            >
                                <app-icon class="text-xl">{{
                                    link.icon
                                }}</app-icon>
                                <p [class.sm:hidden]="compact">
                                    {{ link.name | translate }}
                                </p>
                            </div>
                        </a>
                    }
                    <button
                        class="absolute left-1 top-1 sm:hidden"
                        icon
                        matRipple
                        (click)="open = false; openChange.emit(false)"
                    >
                        <app-icon>close</app-icon>
                    </button>
                </div>
            </div>
            <div
                class="m-2 flex flex-col space-y-2 rounded-xl border border-base-300 p-2"
                *ngIf="debug_enabled"
            >
                <div
                    class="mono rounded-xl bg-info p-1 text-center text-xs text-info-content"
                >
                    {{ 'COMMON.DEBUG_ENABLED' | translate }}
                </div>
                <p class="p-1 text-center text-xs">
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
                class="flex min-h-16 items-center space-x-2 border-t border-base-300 p-2 text-left"
                customTooltip
                user
                [content]="user_controls"
                yPosition="bottom"
                xPosition="start"
            >
                <a-user-avatar
                    [user]="user"
                    [class.sm:pl-2]="compact"
                    [matTooltip]="compact ? user?.name : ''"
                    matTooltipPosition="right"
                ></a-user-avatar>
                <div
                    class="flex w-1/2 flex-1 flex-col leading-tight"
                    [class.sm:hidden]="compact"
                >
                    <div class="w-full truncate">{{ user?.name }}</div>
                    <div class="w-full truncate text-xs opacity-30">
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
            <button
                icon
                matRipple
                class="absolute bottom-12 right-0 hidden h-6 w-6 min-w-6 translate-x-1/2 rounded-full border border-base-200 bg-base-100 shadow hover:bg-base-200 sm:flex"
                (click)="toggleCompactMode()"
            >
                <app-icon>
                    {{ compact ? 'chevron_right' : 'chevron_left' }}
                </app-icon>
            </button>
        </div>
    `,
    styles: [
        `
            [sidebar-menu] {
                transition: width 200ms;
            }

            .active {
                background-color: var(--s);
                color: var(--sc);
            }

            @media screen and (min-width: 512px) {
                .compact {
                    width: 4.5rem;
                }
            }
        `,
    ],
})
export class SidebarMenuComponent extends AsyncHandler {
    @Input() public open = true;
    @Output() public openChange = new EventEmitter();
    public items: any[] = [];
    public compact: boolean = false;
    public readonly user_controls = UserMenuTooltipComponent;
    public readonly links = [
        { name: 'COMMON.SYSTEMS', route: '/systems', icon: 'meeting_room' },
        { name: 'COMMON.MODULES', route: '/modules', icon: 'tablet' },
        { name: 'COMMON.ZONES', route: '/zones', icon: 'meeting_room' },
        { name: 'COMMON.DRIVERS', route: '/drivers', icon: 'construction' },
        { name: 'COMMON.REPOS', route: '/repositories', icon: 'inventory_2' },
        { name: 'COMMON.TRIGGERS', route: '/triggers', icon: 'timer' },
        { name: 'COMMON.METRICS', route: '/metrics', icon: 'monitoring' },
        {
            name: 'COMMON.USERS',
            route: '/users',
            icon: 'group',
            show_on: () => this.is_support || this.is_admin,
        },
        {
            name: 'COMMON.DOMAINS',
            route: '/domains',
            icon: 'domain',
            show_on: () => this.is_admin,
        },
        {
            name: 'COMMON.MANAGE',
            route: '/admin',
            icon: 'settings',
            show_on: () => this.is_admin,
        },
    ];
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

    public toggleCompactMode() {
        this.compact = !this.compact;
        localStorage.setItem('BACKOFFICE.SIDEBAR_COMPACT', `${this.compact}`);
    }

    constructor(
        @Optional() private _tooltip: CustomTooltipData,
        private _debug: PlaceDebugService,
        private _settings: SettingsService,
        private _users: BackofficeUsersService,
        private _hotkey: HotkeysService,
        private _router: Router,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'up',
            this._hotkey.listen(['Control', 'Shift', 'ArrowUp'], () =>
                this.changeSelected(-1),
            ),
        );
        this.subscription(
            'down',
            this._hotkey.listen(['Control', 'Shift', 'ArrowDown'], () =>
                this.changeSelected(1),
            ),
        );
        this.compact =
            localStorage.getItem('BACKOFFICE.SIDEBAR_COMPACT') === 'true';
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
