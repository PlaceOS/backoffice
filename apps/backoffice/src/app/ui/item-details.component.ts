import { Clipboard } from '@angular/cdk/clipboard';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlaceDriverRole } from '@placeos/ts-client';
import { downloadFile, jsonToCsv } from '../common/general';
import { ActiveItemService } from '../common/item.service';
import { notifyInfo } from '../common/notifications';
import { BackofficeUsersService } from '../users/users.service';

export interface DisplayItem {
    id: string;
    name: string;
    display_name?: string;
    custom_name?: string;
    edge_id?: string;
    tls?: boolean;
    running?: boolean;
    role?: number;
    toJSON: () => Record<string, any>;
}

@Component({
    selector: 'item-details',
    template: `
        <div class="flex items-center justify-between px-4 py-2">
            <div class="flex flex-col space-y-2">
                <div name class="text-2xl">
                    {{
                        item?.display_name ||
                            item?.custom_name ||
                            item?.name ||
                            '&lt;Unnamed&gt;'
                    }}
                </div>
                <div class="flex items-center space-x-2">
                    <a class="text-xs mono opacity-60" (click)="copyID()">
                        {{ item?.id }}
                    </a>
                    <div
                        class="px-2 py-1 rounded-xl text-xs bg-blue-600 text-white"
                        *ngIf="driver_type"
                        i18n="@@driverType"
                    >
                        { driver_type, select, Device { Device } Logic { Logic }
                        SSH { SSH } Websocket { Websocket } Service { Service }
                        other { Other } }
                    </div>
                    <div
                        class="px-2 py-1 rounded-xl text-xs mono bg-blue-600 text-white"
                        *ngIf="domain"
                        i18n="@@domain"
                    >
                        {{ domain }}
                    </div>
                    <div
                        class="px-2 py-1 rounded-xl text-xs bg-red-600 text-white"
                        *ngIf="
                            item?.running !== null &&
                            item?.running !== undefined
                        "
                        [class.!bg-green-600]="item?.running"
                        i18n="@@onlineState"
                    >
                        { item?.running, select, true { Online } false { Offline
                        } other { Other } }
                    </div>
                    <div
                        class="px-2 py-1 rounded-xl text-xs bg-blue-600 text-white"
                        *ngIf="item?.edge_id"
                        [matTooltip]="item?.edge_id"
                        i18n="@@edgeState"
                    >
                        Edge
                    </div>
                    <div
                        class="px-2 py-1 rounded-xl text-xs bg-green-600 flex items-center space-x-2 text-white"
                        *ngIf="item?.tls"
                    >
                        <div class="icon"><i class="backoffice-lock"></i></div>
                        <div class="text" i18n="@@secure">Secure</div>
                    </div>
                </div>
            </div>
            <button [matMenuTriggerFor]="action_menu" mat-icon-button>
                <app-icon
                    [icon]="{ class: 'backoffice-dots-three-vertical' }"
                ></app-icon>
            </button>
        </div>
        <mat-menu #action_menu="matMenu">
            <button
                *ngIf="can_edit"
                mat-menu-item
                class="flex items-center space-x-2"
                (click)="edit.emit(); editItem()"
            >
                <app-icon [icon]="{ class: 'backoffice-edit' }"></app-icon>
                <div class="text flex-1" i18n="@@editAction">
                    Edit {{ type }}
                </div>
                <span class="keycap">E</span>
            </button>
            <button
                mat-menu-item
                class="flex items-center space-x-2"
                disabled="true"
                (click)="create.emit(false); newFromItem()"
            >
                <app-icon [icon]="{ class: 'backoffice-plus' }"></app-icon>
                <div class="text" i18n="@@copyItemAction">
                    Create new from this {{ type }}
                </div>
            </button>
            <button
                mat-menu-item
                class="flex items-center space-x-2"
                disabled="true"
                (click)="create.emit(true); duplicateItem()"
            >
                <app-icon
                    [icon]="{ class: 'backoffice-flow-branch' }"
                ></app-icon>
                <div class="text" i18n="@@duplicateAction">
                    Duplicate {{ type }}
                </div>
            </button>
            <button
                mat-menu-item
                class="flex items-center space-x-2"
                (click)="exportAsTSV()"
            >
                <app-icon [icon]="{ class: 'backoffice-download' }"></app-icon>
                <div class="text" i18n="@@exportAction">
                    Export {{ type }} as TSV template
                </div>
            </button>
            <button
                *ngIf="can_edit"
                mat-menu-item
                class="flex items-center space-x-2"
                (click)="delete.emit(); deleteItem()"
            >
                <app-icon [icon]="{ class: 'backoffice-trash' }"></app-icon>
                <div class="text flex-1" i18n="@@deleteAction">
                    Delete {{ type }}
                </div>
                <span class="keycap">⌦</span>
            </button>
        </mat-menu>
    `,
    styles: [``],
})
export class ItemDetailsComponent {
    @Input() public type: string = 'system';
    @Input() public item: DisplayItem;
    @Input() public can_edit = false;
    @Output() public create = new EventEmitter<boolean>();
    @Output() public edit = new EventEmitter();
    @Output() public delete = new EventEmitter();

    public readonly copyID = () => {
        this._clipboard.copy(this.item?.id || '');
        notifyInfo('ID copied to clipboard');
    };

    /** Open modal to edit the active item */
    public readonly editItem = () => this._service.edit();
    /** Delete the active item */
    public readonly deleteItem = () => this._service.delete();
    /** Duplicate the active item */
    public readonly duplicateItem = () => this._service.duplicate();
    /** Create a new item using the current as a template */
    public readonly newFromItem = () => this._service.create(true);

    public get is_admin() {
        return this._users.current().sys_admin;
    }

    public get domain() {
        return (this.item as any)?.domain || '';
    }

    constructor(
        private _service: ActiveItemService,
        private _users: BackofficeUsersService,
        private _clipboard: Clipboard
    ) {}

    public get driver_type(): string {
        if (typeof this.item?.role !== 'number') return '';
        switch (this.item?.role) {
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

    /**
     * Export the active item as a CSV
     */
    public exportAsTSV() {
        const item = this.item?.toJSON();
        const filename = `${item?.name.toLowerCase().split(' ').join('_')}.${
            this.type
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
