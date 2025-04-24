import { Clipboard } from '@angular/cdk/clipboard';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlaceDriverRole } from '@placeos/ts-client';
import { downloadFile, jsonToCsv } from '../common/general';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
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
                    <a class="mono text-xs opacity-60" (click)="copyID()">
                        {{ item?.id }}
                    </a>
                    <div
                        class="rounded-xl bg-info px-2 py-1 text-xs text-info-content"
                        *ngIf="driver_type"
                    >
                        {{ driver_type }}
                    </div>
                    <div
                        class="mono rounded-xl bg-info px-2 py-1 text-xs text-info-content"
                        *ngIf="domain"
                    >
                        {{ domain }}
                    </div>
                    <div
                        class="rounded-xl bg-info px-2 py-1 text-xs uppercase text-info-content"
                        *ngFor="let tag of tags"
                    >
                        {{ tag }}
                    </div>
                    <div
                        class="rounded-xl bg-error px-2 py-1 text-xs text-error-content"
                        *ngIf="
                            item?.running !== null &&
                            item?.running !== undefined
                        "
                        [class.!bg-success]="item?.running"
                        [class.!text-success-content]="item?.running"
                    >
                        {{
                            (item?.running ? 'COMMON.ONLINE' : 'COMMON.OFFLINE')
                                | translate
                        }}
                    </div>
                    <div
                        class="rounded-xl bg-info px-2 py-1 text-xs text-info-content"
                        *ngIf="item?.edge_id"
                        [matTooltip]="item?.edge_id"
                    >
                        {{ 'COMMON.EDGE' | translate }}
                    </div>
                    <div
                        class="flex items-center space-x-2 rounded-xl bg-success px-2 py-1 text-xs text-success-content"
                        *ngIf="item?.tls"
                    >
                        <app-icon>lock</app-icon>
                        <div class="text">
                            {{ 'COMMON.SECURE' | translate }}
                        </div>
                    </div>
                </div>
            </div>
            <button icon matRipple [matMenuTriggerFor]="action_menu">
                <app-icon>more_vert</app-icon>
            </button>
        </div>
        <mat-menu #action_menu="matMenu" class="min-w-[22rem]">
            <button
                *ngIf="can_edit"
                mat-menu-item
                class="flex items-center space-x-2"
                (click)="edit.emit(); editItem()"
            >
                <app-icon class="text-2xl">edit</app-icon>
                <div class="flex-1">
                    {{ 'COMMON.EDIT_TYPE' | translate: { name: type } }}
                </div>
                <span class="keycap">E</span>
            </button>
            <button
                mat-menu-item
                class="flex items-center space-x-2"
                disabled="true"
                (click)="create.emit(false); newFromItem()"
            >
                <app-icon class="text-2xl">add</app-icon>
                <div>
                    {{ 'COMMON.CREATE_FROM_TYPE' | translate: { name: type } }}
                </div>
            </button>
            <button
                mat-menu-item
                class="flex items-center space-x-2"
                disabled="true"
                (click)="create.emit(true); duplicateItem()"
            >
                <app-icon class="text-2xl">call_split</app-icon>
                <div>
                    {{ 'COMMON.DUPLICATE_TYPE' | translate: { name: type } }}
                </div>
            </button>
            <button
                mat-menu-item
                class="flex items-center space-x-2"
                (click)="exportAsTSV()"
            >
                <app-icon class="text-2xl">download</app-icon>
                <div>
                    {{
                        'COMMON.EXPORT_TYPE_AS_TSV' | translate: { name: type }
                    }}
                </div>
            </button>
            @for (item of extra_actions; track item.label) {
                <button
                    mat-menu-item
                    class="flex items-center space-x-2"
                    (click)="item.action()"
                >
                    <app-icon class="text-2xl">{{ item.icon }}</app-icon>
                    <div class="flex-1">
                        {{ item.label | translate }}
                    </div>
                    <span class="keycap" *ngIf="item.keycap">{{
                        item.keycap
                    }}</span>
                </button>
            }
            <button
                *ngIf="can_edit"
                mat-menu-item
                class="flex items-center space-x-2"
                (click)="delete.emit(); deleteItem()"
            >
                <app-icon class="text-2xl text-error">delete</app-icon>
                <div class="flex-1">
                    {{ 'COMMON.DELETE_TYPE' | translate: { name: type } }}
                </div>
                <span class="keycap">⌦</span>
            </button>
        </mat-menu>
    `,
    styles: [``],
    standalone: false,
})
export class ItemDetailsComponent {
    @Input() public type = 'system';
    @Input() public item: DisplayItem;
    @Input() public can_edit = false;
    @Input() public extra_actions: {
        label: string;
        action: () => void;
        icon: string;
        keycap?: string;
    }[] = [];
    @Output() public create = new EventEmitter<boolean>();
    @Output() public edit = new EventEmitter();
    @Output() public delete = new EventEmitter();

    public readonly copyID = () => {
        this._clipboard.copy(this.item?.id || '');
        notifyInfo(i18n('COMMON.COPIED_ID'));
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

    public get tags() {
        return (this.item as any)?.tags || [];
    }

    constructor(
        private _service: ActiveItemService,
        private _users: BackofficeUsersService,
        private _clipboard: Clipboard,
    ) {}

    public get driver_type(): string {
        if (typeof this.item?.role !== 'number') return '';
        switch (this.item?.role) {
            case PlaceDriverRole.Device:
                return i18n('DRIVERS.DEVICE');
            case PlaceDriverRole.SSH:
                return i18n('DRIVERS.SSH');
            case PlaceDriverRole.Service:
                return i18n('DRIVERS.SERVICE');
            case PlaceDriverRole.Websocket:
                return i18n('DRIVERS.WEBSOCKET');
        }
        return i18n('DRIVERS.LOGIC');
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
            '\t',
        );
        downloadFile(filename, csv_data);
    }
}
