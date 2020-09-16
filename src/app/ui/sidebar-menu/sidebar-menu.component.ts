import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { authority } from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';
import { ApplicationLinkInternal } from 'src/app/common/types';
import { SettingsService } from 'src/app/common/settings.service';
import { BackofficeUsersService } from 'src/app/users/users.service';
import { HotkeysService } from 'src/app/common/hotkeys.service';

@Component({
    selector: 'sidebar-menu',
    templateUrl: './sidebar-menu.template.html',
    styleUrls: ['./sidebar-menu.styles.scss']
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
        if (!authority().metrics) {
            this.menu_items = this.menu_items.filter(
                item => item.route && item.route.indexOf('metrics') < 0
            );
            if (this._router.url.indexOf('metrics') >= 0) {
                this._router.navigate([]);
            }
        }
        /** Filter out items with insufficient permissions */
        this.menu_items = this.menu_items.filter(
            item => !item.needs_role || !!(user as any)[item.needs_role]
        );
        this.subscription(
            'up',
            this._hotkey.listen(['Control', 'Shift', 'ArrowUp'], () => this.changeSelected(-1))
        );
        this.subscription(
            'down',
            this._hotkey.listen(['Control', 'Shift', 'ArrowDown'], () => this.changeSelected(1))
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.show) {
            this.clearTimeout('close');
        }
    }

    /**
     * Delayed close of the sidebar menu. Mobile Only
     */
    public close() {
        this.timeout(
            'close',
            () => {
                this.show = false;
                this.showChange.emit(this.show);
            },
            100
        );
    }

    /**
     * Cancel delayed close
     */
    public cancelClose() {
        this.timeout('cancel_close', () => this.clearTimeout('close'), 10);
    }

    private changeSelected(offset: number = 1) {
        const index = this.menu_items.findIndex(item => this._router.url.indexOf(item.route) >= 0);
        const new_index = index + offset;
        if (this.menu_items[new_index]) {
            this._router.navigate([this.menu_items[new_index].route]);
        }
    }
}
