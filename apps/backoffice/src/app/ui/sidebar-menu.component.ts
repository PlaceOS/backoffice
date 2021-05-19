import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { authority } from '@placeos/ts-client';

import { BaseClass } from 'apps/backoffice/src/app/common/base.class';
import { ApplicationLinkInternal } from 'apps/backoffice/src/app/common/types';
import { SettingsService } from 'apps/backoffice/src/app/common/settings.service';
import { BackofficeUsersService } from 'apps/backoffice/src/app/users/users.service';
import { HotkeysService } from 'apps/backoffice/src/app/common/hotkeys.service';

@Component({
    selector: 'sidebar-menu',
    template: `
        <div
            class="absolute sm:relative h-screen w-screen z-30 bottom-0 pointer-events-auto sm:hidden"
            [class.hidden]="!show"
            (click)="show = false; showChange.emit(false)"
        ></div>
        <div
            class="absolute sm:relative h-full bg-gray-800 shadow z-40 text-white left-0 top-0 sm:block overflow-auto"
            [class.hidden]="!show"
            *ngIf="menu_items"
            (mouseleave)="tooltip = 'false'"
        >
            <a
                class="flex flex-col items-center justify-center relative border-b border-white border-opacity-30 hover:bg-white hover:bg-opacity-20"
                *ngFor="let item of menu_items"
                [routerLink]="[item.route]"
                routerLinkActive="active"
                [title]="item.name"
                [matTooltip]="item.name"
                i18n-matTooltip
                matTooltipPosition="right"
                (click)="show = false; showChange.emit(false)"
            >
                <app-icon [icon]="item?.icon"></app-icon>
                <div class="text-sm" *ngIf="!item?.hide_name" i18n>
                    { item.name, select, Systems { Systems } Modules { Modules }
                    Zones { Zones } Drivers { Drivers } Repos { Repos } Triggers
                    { Triggers } Users { Users } Domains { Domains } Admin {
                    Admin } Metrics { Metrics } other { Other } }
                </div>
                <div
                    bar
                    class="opacity-0 absolute top-0 right-0 bottom-0 bg-primary"
                ></div>
            </a>
        </div>
    `,
    styles: [
        `
            :host > div {
                width: 4.5rem;
                transition: opacity 200ms;

                @include respond-to(mobile) {
                    opacity: 0;
                    pointer-events: none;
                }
            }

            a {
                width: 4.5rem;
                height: 4.5rem;
            }

            .show {
                @include respond-to(mobile) {
                    opacity: 1 !important;
                    pointer-events: auto !important;
                    z-index: 999 !important;
                }
            }

            app-icon {
                font-size: 1.75em;
            }

            .active {
                background-color: rgba(255, 255, 255, 0.1);
                [bar] {
                    opacity: 1 !important;
                }
            }

            [bar] {
                width: 4px;
                transition: opacity 200ms;
            }
        `,
    ],
})
export class SidebarMenuComponent extends BaseClass implements OnInit {
    /** Whether the sidebar menu should be shown */
    @Input() public show: boolean;
    /** Emitter for changes to the sidebar show state */
    @Output() public showChange = new EventEmitter<boolean>();
    /** List of available menu items for the application */
    public menu_items: ApplicationLinkInternal[];
    /** Route of the shown tooltip */
    public tooltip: string;

    constructor(
        private _settings: SettingsService,
        private _users: BackofficeUsersService,
        private _hotkey: HotkeysService,
        private _router: Router
    ) {
        super();
    }

    public ngOnInit() {
        this.menu_items = this._settings.get('app.general.menu');
        const user = this._users.current();
        /** Only allow metrics if a URL has be set */
        if (!authority().metrics && !authority().config.metrics) {
            this.menu_items = this.menu_items.filter(
                (item) => item.route && item.route.indexOf('metrics') < 0
            );
            if (this._router.url.indexOf('metrics') >= 0) {
                this._router.navigate([]);
            }
        }
        /** Filter out items with insufficient permissions */
        this.menu_items = this.menu_items.filter(
            (item) => !item.needs_role || !!(user as any)[item.needs_role]
        );
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
