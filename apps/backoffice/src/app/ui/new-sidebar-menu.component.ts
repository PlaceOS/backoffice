import { Component, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { authority } from '@placeos/ts-client';
import { BaseClass } from '../common/base.class';
import { HotkeysService } from '../common/hotkeys.service';
import { SettingsService } from '../common/settings.service';
import { ApplicationIcon, ApplicationLinkInternal } from '../common/types';
import { BackofficeUsersService } from '../users/users.service';
import { CustomTooltipData } from './custom-tooltip.component';
import { UserMenuTooltipComponent } from './user-menu-tooltip.component';

@Component({
    selector: 'new-sidebar-menu',
    template: `
        <div class="flex flex-col w-52 justify-between h-full overflow-hidden" (click)="close()">
            <div class="flex flex-col items-center space-y-2">
                <a
                    [routerLink]="['/']"
                    class="font-heading text-4xl mt-4 w-[calc(100%-2rem)] dark:text-white"
                >
                    Place<span class="text-pink font-heading">OS</span>
                </a>
                <a
                    menu
                    matRipple
                    class="flex items-center p-2 rounded space-x-2 w-[calc(100%-2rem)]"
                    *ngFor="let item of items; trackBy"
                    [routerLink]="[item.route]"
                    routerLinkActive="active"
                >
                    <app-icon [icon]="item.icon"></app-icon>
                    <p>{{ item.name }}</p>
                </a>
            </div>
            <button
                matRipple
                class="flex items-center space-x-2 p-2 border-t border-gray-300 dark:border-neutral-600 text-left dark:text-white"
                customTooltip
                [content]="user_controls"
                yPosition="bottom"
                xPosition="start"
            >
                <div
                    class="rounded-full h-10 w-10 bg-neutral-500"
                    [style.background-image]="'url(' + user?.image + ')'"
                ></div>
                <div class="flex flex-col flex-1 w-1/2 leading-tight">
                    <div class="truncate w-full">{{ user.name }}</div>
                    <div class="truncate text-xs opacity-30 w-full">
                        {{
                            user.sys_admin
                                ? 'Admin'
                                : user.support
                                ? 'Support'
                                : 'Basic'
                        }}
                    </div>
                </div>
            </button>
        </div>
    `,
    styles: [``],
})
export class NewSidebarMenuComponent extends BaseClass {
    public items: any[] = [];
    public readonly user_controls = UserMenuTooltipComponent;
    /** Application logo */
    public get logo(): ApplicationIcon {
        return this._settings.get('app.logo_light');
    }
    /** List of available menu items for the application */
    public get menu_items() {
        return this._getMenuItems();
    }
    /** List of available menu items for the application */
    public get user() {
        return this._users.current();
    }

    public readonly close = () => this._tooltip?.close();

    constructor(
        @Optional() private _tooltip: CustomTooltipData,
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
        this.items = this.menu_items;
    }

    private _getMenuItems(): ApplicationLinkInternal[] {
        let items = this._settings.get('app.general.menu');
        const auth = authority();
        /** Only allow metrics if a URL has be set */
        if (!auth?.metrics && !auth?.config?.metrics) {
            items = items.filter((item) => item.route?.indexOf('metrics') < 0);
            if (this._router.url.indexOf('metrics') >= 0)
                this._router.navigate([]);
        }
        /** Filter out items with insufficient permissions */
        const user = this._users.current();
        items = items.filter(
            ({ needs_role }) => !needs_role || !!(user as any)[needs_role]
        );
        return items;
    }

    private changeSelected(offset: number = 1) {
        const index = this.menu_items.findIndex(
            (item) => this._router.url.indexOf(item.route) >= 0
        );
        const new_index = index + offset;
        if (this.menu_items[new_index]) {
            this._router.navigate([this.menu_items[new_index].route]);
        }
    }
}
