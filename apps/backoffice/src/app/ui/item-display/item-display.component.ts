import {
    Component,
    Input,
    TemplateRef,
    OnInit,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { PlaceDriver, PlaceDriverRole } from '@placeos/ts-client';

import { BaseClass } from 'apps/backoffice/src/app/common/base.class';
import { HashMap, Identity } from 'apps/backoffice/src/app/common/types';
import { ApplicationIcon } from 'apps/backoffice/src/app/common/types';
import {
    downloadFile,
    jsonToCsv,
} from 'apps/backoffice/src/app/common/general';
import { BackofficeUsersService } from 'apps/backoffice/src/app/users/users.service';
import { ActiveItemService } from 'apps/backoffice/src/app/common/item.service';
import { HotkeysService } from 'apps/backoffice/src/app/common/hotkeys.service';
import { notifyInfo } from 'apps/backoffice/src/app/common/notifications';

export interface ApplicationTab {
    id: string;
    name: string;
    icon: ApplicationIcon;
    template: TemplateRef<any>;
    query?: HashMap<string>;
    count?: number;
}

@Component({
    selector: 'item-display',
    templateUrl: './item-display.template.html',
    styleUrls: ['./item-display.styles.scss'],
})
export class ItemDisplayComponent<T extends Identity = any>
    extends BaseClass
    implements OnInit {
    /** Base route of parent component */
    @Input() public route: string;
    /** Whether item is allowed to be edited and deleted */
    @Input() public has_change = true;
    /** Tabs available to the item type */
    @Input() public tabs: ApplicationTab[] = [];
    /** ID of the active tab */
    public active_tab: string;

    public readonly loading = this._service.loading;

    /** Open modal to edit the active item */
    public readonly edit = () => this._service.edit();
    /** Delete the active item */
    public readonly delete = () => this._service.delete();
    /** Duplicate the active item */
    public readonly duplicateItem = () => this._service.duplicate();
    /** Create a new item using the current as a template */
    public readonly newFromItem = () => this._service.create(true);

    public get name() {
        return this._service.type;
    }

    @ViewChild('content') public content_el: ElementRef<HTMLDivElement>;

    public get item(): T {
        return this._service.active_item as any;
    }

    /** Whether dark mode is enabled */
    public get dark_mode(): boolean {
        return this._users.dark_mode;
    }

    public get is_scrolled() {
        if (this.content_el) {
            return this.content_el.nativeElement.scrollTop > 0;
        }
        return false;
    }

    public get is_admin() {
        return this._users.current().sys_admin;
    }

    public get driver_type(): string {
        const item: any = this.item;
        if (!item.role) {
            return '';
        }
        const driver: PlaceDriver = item || {};
        switch (driver.role) {
            case PlaceDriverRole.Device:
                return 'Device';
            case PlaceDriverRole.SSH:
                return 'SSH';
            case PlaceDriverRole.Service:
                return 'Service';
            case PlaceDriverRole.Websocket:
                return 'Websocket';
        }
        return 'Logic';
    }

    constructor(
        private _service: ActiveItemService,
        private _hotkey: HotkeysService,
        private _users: BackofficeUsersService,
        private _router: Router
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'right',
            this._hotkey.listen(['ArrowRight'], () => this.changeTab(1))
        );
        this.subscription(
            'left',
            this._hotkey.listen(['ArrowLeft'], () => this.changeTab(-1))
        );
    }

    public changeTab(direction) {
        if (!this.item) {
            return;
        }
        this.timeout(
            'change_tab',
            () => {
                const index = this.tabs.findIndex(
                    (tab) => this._router.url.indexOf(tab.id) >= 0
                );
                if (index >= 0 && this.tabs[index + direction]) {
                    this._router.navigate([
                        `/${this.route}`,
                        this.item.id,
                        this.tabs[index + direction].id,
                    ]);
                }
            },
            100
        );
    }

    /** Copy the ID of the active item to the clipboard */
    public copy() {
        if (this.item && this.item.id) {
            document.execCommand('copy');
            notifyInfo('ID copied to clipboard');
        }
    }

    /**
     * Export the active item as a CSV
     */
    public exportAsTSV() {
        const item = this.item.toJSON();
        const filename = `${item.name.toLowerCase().split(' ').join('_')}.${
            this.name
        }.tsv`;
        const ignore_keys = ['module_list', 'settings', '_type', 'version'];
        const csv_data = jsonToCsv(
            [item],
            Object.keys(item).filter((key) => ignore_keys.indexOf(key) < 0),
            '\t'
        );
        downloadFile(filename, csv_data);
    }
}
