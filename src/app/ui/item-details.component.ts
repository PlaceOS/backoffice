import { Clipboard } from '@angular/cdk/clipboard';
import { Component, inject, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PlaceDriverRole } from '@placeos/ts-client';
import { downloadFile, jsonToCsv } from '../common/general';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { notifyInfo } from '../common/notifications';
import { BackofficeUsersService } from '../users/users.service';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

export interface DisplayItem {
    id: string;
    name: string;
    display_name?: string;
    custom_name?: string;
    edge_id?: string;
    tls?: boolean;
    running?: boolean;
    role?: number;
    domain?: string;
    tags?: unknown[];
    toJSON: () => Record<string, unknown>;
}

@Component({
    selector: 'item-details',
    template: `
        <div class="flex items-center justify-between px-4 py-2">
            <div class="flex flex-col space-y-2">
                <div name class="text-2xl select-text">
                    {{
                        item()?.display_name ||
                            item()?.custom_name ||
                            item()?.name ||
                            '&lt;Unnamed&gt;'
                    }}
                </div>
                <div class="flex items-center space-x-2">
                    <button class="mono text-xs opacity-60" (click)="copyID()">
                        {{ item()?.id }}
                    </button>
                    @if (driver_type) {
                        <div
                            class="bg-info text-info-content rounded-xl px-2 py-1 text-xs"
                        >
                            {{ driver_type }}
                        </div>
                    }
                    @if (domain) {
                        <div
                            class="mono bg-info text-info-content rounded-xl px-2 py-1 text-xs"
                        >
                            {{ domain }}
                        </div>
                    }
                    @for (tag of tags; track $index) {
                        <div
                            class="bg-info text-info-content rounded-xl px-2 py-1 text-xs uppercase"
                        >
                            {{ tag }}
                        </div>
                    }
                    @if (
                        item()?.running !== null &&
                        item()?.running !== undefined
                    ) {
                        <div
                            class="bg-error text-error-content rounded-xl px-2 py-1 text-xs"
                            [class.bg-success!]="item()?.running"
                            [class.text-success-content!]="item()?.running"
                        >
                            {{
                                (item()?.running
                                    ? 'COMMON.ONLINE'
                                    : 'COMMON.OFFLINE'
                                ) | translate
                            }}
                        </div>
                    }
                    @if (item()?.edge_id) {
                        <div
                            class="bg-info text-info-content rounded-xl px-2 py-1 text-xs"
                            [matTooltip]="item()?.edge_id"
                        >
                            {{ 'COMMON.EDGE' | translate }}
                        </div>
                    }
                    @if (item()?.tls) {
                        <div
                            class="bg-success text-success-content flex items-center space-x-2 rounded-xl px-2 py-1 text-xs"
                        >
                            <icon>lock</icon>
                            <div class="text">
                                {{ 'COMMON.SECURE' | translate }}
                            </div>
                        </div>
                    }
                </div>
            </div>
            <button icon default matRipple [matMenuTriggerFor]="action_menu">
                <icon>more_vert</icon>
            </button>
        </div>
        <mat-menu #action_menu="matMenu" class="min-w-88">
            @if (can_edit()) {
                <button
                    mat-menu-item
                    class="flex items-center space-x-2"
                    (click)="edit.emit(); editItem()"
                >
                    <icon class="text-2xl">edit</icon>
                    <div class="flex-1">
                        {{ 'COMMON.EDIT_TYPE' | translate: { name: type() } }}
                    </div>
                    <span class="keycap">E</span>
                </button>
            }
            <button
                mat-menu-item
                class="flex items-center space-x-2"
                disabled="true"
                (click)="create.emit(false); newFromItem()"
            >
                <icon class="text-2xl">add</icon>
                <div>
                    {{
                        'COMMON.CREATE_FROM_TYPE' | translate: { name: type() }
                    }}
                </div>
            </button>
            <button
                mat-menu-item
                class="flex items-center space-x-2"
                disabled="true"
                (click)="create.emit(true); duplicateItem()"
            >
                <icon class="text-2xl">call_split</icon>
                <div>
                    {{ 'COMMON.DUPLICATE_TYPE' | translate: { name: type() } }}
                </div>
            </button>
            <button
                mat-menu-item
                class="flex items-center space-x-2"
                (click)="exportAsTSV()"
            >
                <icon class="text-2xl">download</icon>
                <div>
                    {{
                        'COMMON.EXPORT_TYPE_AS_TSV'
                            | translate: { name: type() }
                    }}
                </div>
            </button>
            @for (item of extra_actions(); track item.label) {
                <button
                    mat-menu-item
                    class="flex items-center space-x-2"
                    (click)="item.action()"
                >
                    <icon class="text-2xl">{{ item.icon }}</icon>
                    <div class="flex-1">
                        {{ item.label | translate }}
                    </div>
                    @if (item.keycap) {
                        <span class="keycap">{{ item.keycap }}</span>
                    }
                </button>
            }
            @if (can_edit()) {
                <button
                    mat-menu-item
                    class="flex items-center space-x-2"
                    (click)="delete.emit(); deleteItem()"
                >
                    <icon class="text-error text-2xl">delete</icon>
                    <div class="flex-1">
                        {{ 'COMMON.DELETE_TYPE' | translate: { name: type() } }}
                    </div>
                    <span class="keycap">⌦</span>
                </button>
            }
        </mat-menu>
    `,
    styles: [``],
    imports: [
        IconComponent,
        TranslatePipe,
        MatMenuModule,
        MatRippleModule,
        MatTooltipModule,
    ],
})
export class ItemDetailsComponent {
    private _service = inject(ActiveItemService);
    private _users = inject(BackofficeUsersService);
    private _clipboard = inject(Clipboard);

    public readonly type = input('system');
    public readonly item = input<DisplayItem>(undefined);
    public readonly can_edit = input(false);
    public readonly extra_actions = input<
        {
            label: string;
            action: () => void;
            icon: string;
            keycap?: string;
        }[]
    >([]);
    public readonly create = output<boolean>();
    public readonly edit = output();
    public readonly delete = output();

    public readonly copyID = () => {
        this._clipboard.copy(this.item()?.id || '');
        notifyInfo(i18n('COMMON.COPIED_ID'));
    };

    /** Open modal to edit the active item */
    public readonly editItem = () => this._service.edit();
    /** Delete the active item */
    public readonly deleteItem = () => this._service.delete();
    /** Duplicate the active item */
    public readonly duplicateItem = () => this._service.duplicate();
    /** Create a new item using the current as a template */
    public readonly newFromItem = () => this._service.create(undefined, true);

    public get is_admin() {
        return this._users.current().sys_admin;
    }

    public get domain() {
        return this.item()?.domain || '';
    }

    public get tags() {
        return this.item()?.tags || [];
    }

    public get driver_type(): string {
        const item = this.item();
        if (typeof item?.role !== 'number') return '';
        switch (item?.role) {
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
        const item = this.item()?.toJSON();
        const filename = `${(item?.name as string).toLowerCase().split(' ').join('_')}.${this.type()}.tsv`;
        const ignore_keys = ['module_list', 'settings', '_type', 'version'];
        const csv_data = jsonToCsv(
            [item],
            Object.keys(item).filter((key) => ignore_keys.indexOf(key) < 0),
            '\t',
        );
        downloadFile(filename, csv_data);
    }
}
