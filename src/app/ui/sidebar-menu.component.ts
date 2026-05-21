import { Component, inject, model, OnInit, signal } from '@angular/core';
import {
    NavigationCancel,
    NavigationEnd,
    NavigationError,
    RouteConfigLoadEnd,
    RouteConfigLoadStart,
    Router,
    RouterModule,
} from '@angular/router';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { authority, queryApplications } from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';
import { AsyncHandler } from '../common/async-handler.class';
import { HotkeysService } from '../common/hotkeys.service';
import { SettingsService } from '../common/settings.service';
import { ApplicationIcon } from '../common/types';
import { BackofficeUsersService } from '../users/users.service';
import { ApplicationPickerTooltipComponent } from './application-picker-tooltip.component';
import {
    CustomTooltipComponent,
    CustomTooltipData,
} from './custom-tooltip.component';
import { DebugInfoComponent } from './debug-info.component';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';
import { UserAvatarComponent } from './user-avatar.component';
import { UserMenuTooltipComponent } from './user-menu-tooltip.component';

@Component({
    selector: 'sidebar-menu',
    template: `
        <!-- eslint-disable @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
        <div
            sidebar-menu
            class="bg-base-200 pointer-events-none absolute inset-0 z-40 hidden h-full flex-col justify-between sm:pointer-events-auto sm:relative sm:inset-auto sm:z-10 sm:flex"
            [class.compact]="compact()"
            [class.sm:w-52]="!compact()"
            [class.!flex]="open()"
            [class.pointer-events-auto!]="open()"
            (click)="close()"
        >
            <div class="flex h-1/2 flex-1 flex-col items-center space-y-2">
                <a
                    [routerLink]="['/']"
                    class="font-heading mt-4 ml-16 text-4xl sm:mb-2 sm:ml-0"
                    [style.width]="compact() ? 'auto' : 'calc(100%-2rem)'"
                >
                    <div [class.sm:hidden]="compact()">
                        Place<span class="font-heading text-primary">OS</span>
                    </div>
                    <img
                        src="assets/icon/mstile-310x310.png"
                        class="hidden h-12 w-12"
                        [class.sm:block]="compact()"
                        alt="PlaceOS logo"
                    />
                </a>
                <div class="w-full flex-1 space-y-2 overflow-auto pb-2">
                    @for (link of links; track $index) {
                        @if (!link.show_on || link.show_on()) {
                            @if (link.external) {
                                <a
                                    btn
                                    link
                                    matRipple
                                    class="clear hover:bg-base-100 mx-auto w-[calc(100%-1rem)] text-left"
                                    [href]="link.external()"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    [matTooltip]="
                                        compact() ? (link.name | translate) : ''
                                    "
                                    matTooltipPosition="right"
                                >
                                    <div
                                        class="flex w-full items-center space-x-2"
                                        [class.sm:justify-center]="compact()"
                                    >
                                        <icon
                                            class="text-xl"
                                            [class.sm:text-2xl]="compact()"
                                            [class.sm:mx-auto]="compact()"
                                            >{{ link.icon }}</icon
                                        >
                                        <p [class.sm:hidden]="compact()">
                                            {{ link.name | translate }}
                                        </p>
                                    </div>
                                </a>
                            } @else {
                                <a
                                    btn
                                    link
                                    matRipple
                                    class="clear hover:bg-base-100 relative mx-auto w-[calc(100%-1rem)] text-left"
                                    [routerLink]="[link.route]"
                                    routerLinkActive="bg-secondary! text-secondary-content"
                                    [matTooltip]="
                                        compact() ? (link.name | translate) : ''
                                    "
                                    matTooltipPosition="right"
                                >
                                    <div
                                        class="flex w-full items-center space-x-2"
                                        [class.sm:justify-center]="compact()"
                                    >
                                        <icon
                                            class="text-xl transition-opacity"
                                            [class.sm:text-2xl]="compact()"
                                            [class.sm:mx-auto]="compact()"
                                            [class.sm:opacity-25]="
                                                compact() &&
                                                isRouteLoading(link.route)
                                            "
                                            >{{ link.icon }}</icon
                                        >
                                        <p [class.sm:hidden]="compact()">
                                            {{ link.name | translate }}
                                        </p>
                                        @if (isRouteLoading(link.route)) {
                                            <span
                                                role="status"
                                                aria-label="Loading page"
                                                class="ml-auto h-4 w-4 animate-spin rounded-full border-2 border-current/30 border-t-current sm:absolute sm:top-1/2 sm:ml-0 sm:-translate-y-1/2"
                                                [class.sm:left-1/2]="compact()"
                                                [class.sm:right-3]="!compact()"
                                                [class.sm:right-auto]="compact()"
                                                [class.sm:-translate-x-1/2]="
                                                    compact()
                                                "
                                            ></span>
                                        }
                                    </div>
                                </a>
                            }
                        }
                    }
                    <button
                        class="absolute top-1 left-1 sm:hidden"
                        icon
                        matRipple
                        (click)="open.set(false)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            </div>
            @if (show_application_picker()) {
                <button
                    btn
                    link
                    matRipple
                    customTooltip
                    class="clear hover:bg-base-100 mx-auto mb-2 w-[calc(100%-1rem)] text-left"
                    [content]="application_picker"
                    [matTooltip]="compact() ? 'Applications' : ''"
                    matTooltipPosition="right"
                    yPosition="bottom"
                >
                    <div
                        class="flex w-full items-center space-x-2"
                        [class.sm:justify-center]="compact()"
                    >
                        <icon
                            class="text-xl"
                            [class.sm:text-2xl]="compact()"
                            [class.sm:mx-auto]="compact()"
                            >apps</icon
                        >
                        <p [class.sm:hidden]="compact()">Applications</p>
                    </div>
                </button>
            }
            <debug-info [compact]="compact()" />
            <button
                matRipple
                class="border-base-300 flex min-h-16 items-center space-x-2 border-t p-2 text-left"
                customTooltip
                user
                [content]="user_controls"
                yPosition="bottom"
                xPosition="start"
            >
                <a-user-avatar
                    [user]="user"
                    [class.sm:pl-2]="compact()"
                    [matTooltip]="compact() ? user?.name : ''"
                    matTooltipPosition="right"
                ></a-user-avatar>
                <div
                    class="flex w-1/2 flex-1 flex-col leading-tight"
                    [class.sm:hidden]="compact()"
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
                class="border-base-200 bg-base-100 hover:bg-base-200 absolute right-0 bottom-12 z-999 hidden h-6 w-6 min-w-6 translate-x-1/2 rounded-full border shadow-sm sm:flex"
                (click)="toggleCompactMode()"
            >
                <icon>
                    {{ compact() ? 'chevron_right' : 'chevron_left' }}
                </icon>
            </button>
        </div>
    `,
    styles: [
        `
            [sidebar-menu] {
                transition: width 200ms;
            }

            .active {
                background-color: var(--secondary);
                color: var(--secondary-content);
            }

            @media screen and (min-width: 512px) {
                .compact {
                    width: 4.5rem;
                }
            }
        `,
    ],
    imports: [
        IconComponent,
        TranslatePipe,
        UserAvatarComponent,
        MatRippleModule,
        MatTooltipModule,
        CustomTooltipComponent,
        RouterModule,
        DebugInfoComponent,
    ],
})
export class SidebarMenuComponent extends AsyncHandler implements OnInit {
    private _tooltip = inject(CustomTooltipData, { optional: true });
    private _settings = inject(SettingsService);
    private _users = inject(BackofficeUsersService);
    private _hotkey = inject(HotkeysService);
    private _router = inject(Router);

    public readonly open = model(true);
    public readonly compact = signal(false);
    public readonly loading_route = signal('');
    public readonly show_application_picker = signal(false);
    public readonly application_picker = ApplicationPickerTooltipComponent;
    public readonly user_controls = UserMenuTooltipComponent;
    public readonly links = [
        { name: 'COMMON.SYSTEMS', route: '/systems', icon: 'meeting_room' },
        { name: 'COMMON.MODULES', route: '/modules', icon: 'tablet' },
        { name: 'COMMON.ZONES', route: '/zones', icon: 'meeting_room' },
        { name: 'COMMON.DRIVERS', route: '/drivers', icon: 'construction' },
        { name: 'COMMON.REPOS', route: '/repositories', icon: 'inventory_2' },
        { name: 'COMMON.TRIGGERS', route: '/triggers', icon: 'timer' },
        {
            name: 'COMMON.ALERTS',
            icon: 'notifications_active',
            show_on: () => !!this.alerts_url,
            external: () => this.alerts_url,
        },
        {
            name: 'COMMON.METRICS',
            icon: 'monitoring',
            show_on: () => !!this.metrics_url,
            external: () => this.metrics_url,
        },
        {
            name: 'COMMON.USERS',
            route: '/users',
            icon: 'group',
            show_on: () => this.is_support || this.is_admin,
        },
        {
            name: 'COMMON.GROUPS',
            route: '/groups',
            icon: 'groups',
            show_on: () => this.is_admin,
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

    public get is_admin() {
        return this._users.current().sys_admin;
    }

    public get is_support() {
        return this._users.current().support;
    }

    public get alerts_url(): string {
        return authority()?.config?.backoffice?.alerts_url;
    }

    public get metrics_url(): string {
        return authority()?.config?.backoffice?.metrics_url;
    }

    public readonly close = () => this._tooltip?.close();

    public toggleCompactMode() {
        this.compact.update((s) => !s);
        localStorage.setItem('BACKOFFICE.SIDEBAR_COMPACT', `${this.compact()}`);
    }

    public isRouteLoading(route: string) {
        return this.loading_route() === route;
    }

    public async ngOnInit() {
        this.subscription(
            'route_load',
            this._router.events.subscribe((event) => {
                if (event instanceof RouteConfigLoadStart) {
                    this.loading_route.set(`/${event.route.path || ''}`);
                }
                if (event instanceof RouteConfigLoadEnd) {
                    this.loading_route.set('');
                }
                if (
                    event instanceof NavigationCancel ||
                    event instanceof NavigationEnd ||
                    event instanceof NavigationError
                ) {
                    this.loading_route.set('');
                }
            }),
        );
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
        this.compact.set(
            localStorage.getItem('BACKOFFICE.SIDEBAR_COMPACT') === 'true',
        );
        const active_authority = authority();
        if (!active_authority?.id) return;
        const response = await lastValueFrom(
            queryApplications({ authority_id: active_authority.id } as Record<
                string,
                unknown
            >),
        ).catch(() => null);
        this.show_application_picker.set(
            !!(response?.data || []).find((app) =>
                this.isSupportedRedirectUri(app?.redirect_uri),
            ),
        );
    }

    private changeSelected(_offset = 1) {
        // const index = this.menu_items.findIndex(
        //     (item) => this._router.url.indexOf(item.route) >= 0
        // );
        // const new_index = index + offset;
        // if (this.menu_items[new_index]) {
        //     this._router.navigate([this.menu_items[new_index].route]);
        // }
    }

    private isSupportedRedirectUri(uri: string) {
        if (!uri) return false;
        try {
            const protocol = new URL(uri, location.origin).protocol;
            return protocol === 'http:' || protocol === 'https:';
        } catch {
            return false;
        }
    }
}
