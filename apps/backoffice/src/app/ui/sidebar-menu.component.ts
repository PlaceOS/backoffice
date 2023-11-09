import {
    Component,
    EventEmitter,
    Input,
    Optional,
    Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { authority } from '@placeos/ts-client';
import { AsyncHandler } from '../common/async-handler.class';
import { PlaceDebugService } from '../common/debug.service';
import { HotkeysService } from '../common/hotkeys.service';
import { SettingsService } from '../common/settings.service';
import { ApplicationIcon, ApplicationLinkInternal } from '../common/types';
import { BackofficeUsersService } from '../users/users.service';
import { CustomTooltipData } from './custom-tooltip.component';
import { UserMenuTooltipComponent } from './user-menu-tooltip.component';

@Component({
    selector: 'sidebar-menu',
    template: `
        <div
            class="absolute pointer-events-none sm:pointer-events-auto inset-0 sm:relative sm:inset-auto hidden sm:flex flex-col sm:w-52 justify-between h-full overflow-hidden bg-base-100 z-40 sm:z-0"
            [class.!flex]="open"
            [class.!pointer-events-auto]="open"
            (click)="close()"
        >
            <div class="flex flex-col items-center space-y-2">
                <a
                    [routerLink]="['/']"
                    class="font-heading text-4xl mt-4 w-[calc(100%-2rem)]  ml-16 sm:ml-0"
                >
                    Place<span class="text-primary font-heading">OS</span>
                </a>
                <a
                    menu
                    matRipple
                    class="flex items-center p-2 rounded space-x-2 w-[calc(100%-2rem)]"
                    *ngFor="let item of items"
                    [routerLink]="[item.route]"
                    routerLinkActive="active"
                >
                    <app-icon [icon]="item.icon"></app-icon>
                    <p>{{ item?.name }}</p>
                </a>
                <button
                    class="absolute top-1 left-1 sm:hidden"
                    btn
                    icon
                    (click)="open = false; openChange.emit(false)"
                >
                    <app-icon>close</app-icon>
                </button>
            </div>
            <div class="flex-1 h-px"></div>
            <div
                class="m-2 p-2 rounded-xl border border-base-300  flex flex-col space-y-2"
                *ngIf="debug_enabled"
            >
                <div
                    class="rounded-xl text-xs mono bg-info text-info-content text-center p-1"
                >
                    Debugging Enabled
                </div>
                <p class="text-xs p-1 text-center">
                    Listening to {{ debug_module_count }} module(s)<br />
                    {{ debug_message_count }} module messages
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
                        <app-icon
                            className="material-icons"
                            matTooltip="Clear Messages"
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
                class="flex items-center space-x-2 p-2 border-t border-base-300  text-left "
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
                            user?.sys_admin
                                ? 'Admin'
                                : user?.support
                                ? 'Support'
                                : 'Basic'
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
    public get menu_items() {
        return this._getMenuItems();
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
        this.items = this.menu_items;
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

    private _getMenuItems(): ApplicationLinkInternal[] {
        let items = this._settings.get('app.general.menu') || [];
        const auth = authority();
        /** Only allow metrics if a URL has be set */
        if (!auth?.metrics && !auth?.config?.metrics) {
            items = items.filter((item) => item.route?.indexOf('metrics') < 0);
            if (this._router.url?.indexOf('metrics') >= 0)
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
