import {
    Component,
    Input,
    TemplateRef,
    Output,
    EventEmitter,
    OnInit,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlaceDriver, PlaceDriverRole } from '@placeos/ts-client';

import { ApplicationService } from '../../../services/app.service';
import { BaseDirective } from '../../globals/base.directive';
import { DialogEvent, Identity } from '../../utilities/types.utilities';
import { ApplicationIcon } from '../../utilities/settings.interfaces';
import {
    ItemCreateUpdateModalComponent,
    CreateEditModalData,
} from 'src/app/overlays/item-modal/item-modal.component';
import { Router } from '@angular/router';
import { downloadFile, jsonToCsv } from '../../utilities/general.utilities';
import {
    DuplicateModalComponent,
    DuplicateModalData,
} from 'src/app/overlays/duplicate-modal/duplicate-modal.component';
import { Observable } from 'rxjs';
import { BackofficeUsersService } from 'src/app/services/data/users.service';

export interface ApplicationTab {
    id: string;
    name: string;
    icon: ApplicationIcon;
    template: TemplateRef<any>;
    count?: number;
}

@Component({
    selector: 'item-display',
    templateUrl: './item-display.template.html',
    styleUrls: ['./item-display.styles.scss'],
})
export class ItemDisplayComponent<T extends Identity = any> extends BaseDirective
    implements OnInit {
    /** Name of the type of item being shown */
    @Input() public name: string;
    /** Base route of parent component */
    @Input() public route: string;
    /** Resource to display details of */
    @Input() public item: T;
    /** Whether resouce data is being loaded */
    @Input() public loading: boolean;
    /** Whether item is allowed to be edited and deleted */
    @Input() public has_change = true;
    /** Tabs available to the item type */
    @Input() public tabs: ApplicationTab[] = [];
    /** Method to call when saving changes to the item */
    @Input() public save: (_:T) => Observable<T>;
    /** Emitter for events on the item display */
    @Output() public event = new EventEmitter();
    /** ID of the active tab */
    public active_tab: string;

    @ViewChild('content') public content_el: ElementRef<HTMLDivElement>;

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
        private _service: ApplicationService,
        private _users: BackofficeUsersService,
        private _dialog: MatDialog,
        private _router: Router
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'right',
            this._service.Hotkeys.listen(['ArrowRight'], () => this.changeTab(1))
        );
        this.subscription(
            'left',
            this._service.Hotkeys.listen(['ArrowLeft'], () => this.changeTab(-1))
        );
    }

    public changeTab(direction) {
        if (!this.item) {
            return;
        }
        this.timeout(
            'change_tab',
            () => {
                const index = this.tabs.findIndex((tab) => this._router.url.indexOf(tab.id) >= 0);
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
            this._service.notifyInfo('ID copied to clipboard');
        }
    }

    /**
     * Open modal to edit the active item
     */
    public edit() {
        const ref = this._dialog.open<ItemCreateUpdateModalComponent, CreateEditModalData>(
            ItemCreateUpdateModalComponent,
            {
                data: {
                    item: this.item,
                    form: [] as any,
                    name: this.name,
                    save: this.save
                },
            }
        );
        this.subscription(
            'confirm_ref',
            ref.componentInstance.event.subscribe((e: DialogEvent) => {
                if (e.reason === 'done') {
                    this.item = e.metadata.item;
                }
            })
        );
    }

    /**
     * Delete the active item
     */
    public delete() {
        this.event.emit({ type: 'delete' });
    }

    /**
     * Delete the active item
     */
    public duplicateItem() {
        const ref = this._dialog.open<DuplicateModalComponent, DuplicateModalData>(
            DuplicateModalComponent,
            { data: { item: this.item } }
        );
        this.subscription(
            'confirm_ref',
            ref.componentInstance.event.subscribe((e: DialogEvent) => {
                if (e.reason === 'done') {
                    this.item = e.metadata[0];
                }
            })
        );
    }

    /**
     * Delete the active item
     */
    public newFromItem() {
        this.event.emit({ type: 'copy' });
    }

    /**
     * Export the active item as a CSV
     */
    public exportAsTSV() {
        const item = this.item.toJSON();
        const filename = `${item.name.toLowerCase().split(' ').join('_')}.${this.name}.tsv`;
        const ignore_keys = ['module_list', 'settings', '_type', 'version'];
        console.log(
            'TSV:',
            Object.keys(item),
            ignore_keys,
            Object.keys(item).filter((key) => ignore_keys.indexOf(key) < 0)
        );
        const csv_data = jsonToCsv(
            [item],
            Object.keys(item).filter((key) => ignore_keys.indexOf(key) < 0),
            '\t'
        );
        downloadFile(filename, csv_data);
    }
}
