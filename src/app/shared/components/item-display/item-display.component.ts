import {
    Component,
    Input,
    TemplateRef,
    Output,
    EventEmitter,
    OnInit,
    ViewChild,
    ElementRef
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EngineResource, EngineDriver, EngineDriverRole } from '@placeos/ts-client';

import { ApplicationService } from '../../../services/app.service';
import { BaseDirective } from '../../globals/base.directive';
import { DialogEvent } from '../../utilities/types.utilities';
import { ApplicationIcon } from '../../utilities/settings.interfaces';
import {
    ItemCreateUpdateModalComponent,
    CreateEditModalData
} from 'src/app/overlays/item-modal/item-modal.component';
import { Router } from '@angular/router';

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
    styleUrls: ['./item-display.styles.scss']
})
export class ItemDisplayComponent extends BaseDirective implements OnInit {
    /** Name of the type of item being shown */
    @Input() public name: string;
    /** Base route of parent component */
    @Input() public route: string;
    /** Resource to display details of */
    @Input() public item: EngineResource<any>;
    /** Whether resouce data is being loaded */
    @Input() public loading: boolean;
    /** Whether item is allowed to be edited and deleted */
    @Input() public has_change = true;
    /** Tabs available to the item type */
    @Input() public tabs: ApplicationTab[] = [];
    /** Emitter for events on the item display */
    @Output() public event = new EventEmitter();
    /** ID of the active tab */
    public active_tab: string;

    @ViewChild('content') public content_el: ElementRef<HTMLDivElement>;

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
        const driver: EngineDriver = item || {};
        switch (driver.role) {
            case EngineDriverRole.Device:
                return 'Device';
            case EngineDriverRole.SSH:
                return 'SSH';
            case EngineDriverRole.Service:
                return 'Service';
            case EngineDriverRole.Websocket:
                return 'Websocket';
        }
        return 'Logic';
    }

    constructor(private service: ApplicationService, private _dialog: MatDialog, private _router: Router) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'right',
            this.service.Hotkeys.listen(['ArrowRight'], () => this.changeTab(1))
        );
        this.subscription(
            'left',
            this.service.Hotkeys.listen(['ArrowLeft'], () => this.changeTab(-1))
        );
    }

    public changeTab(direction) {
        if (!this.item) { return; }
        console.log('Item:', this.item);
        this.timeout('change_tab', () => {
            const index = this.tabs.findIndex(tab => this._router.url.indexOf(tab.id) >= 0);
            if (index >= 0 && this.tabs[index + direction]) {
                this._router.navigate([`/${this.route}`, this.item.id, this.tabs[index + direction].id]);
            }
        }, 100);
    }

    /** Copy the ID of the active item to the clipboard */
    public copy() {
        if (this.item && this.item.id) {
            document.execCommand('copy');
            this.service.notifyInfo('ID copied to clipboard');
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
                    service: (this.item as any)._service,
                    item: this.item,
                    form: [] as any,
                    name: this.name
                }
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
}
