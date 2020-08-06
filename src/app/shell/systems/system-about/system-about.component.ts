import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlaceSystem, PlaceZone, PlaceSettings, EncryptionLevel, systemSettings, queryZones, stopSystem, startSystem } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { DialogEvent, Identity } from 'src/app/shared/utilities/types.utilities';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA
} from 'src/app/overlays/confirm-modal/confirm-modal.component';

@Component({
    selector: 'system-about',
    templateUrl: './system-about.template.html',
    styleUrls: ['./system-about.styles.scss']
})
export class SystemAboutComponent extends BaseDirective implements OnChanges, OnInit {
    /** System to render */
    @Input() public item: PlaceSystem;
    /** List of zones for the active system */
    public zones: PlaceZone[];
    /** List of settings for associated modules, drivers and zones */
    public other_settings: PlaceSettings[] = [];

    /** List of module ids associated with the system */
    public modules(): string[] {
        return [...this.item.modules];
    }

    /** Whether application is loading settings for item */
    public get loading_settings(): boolean {
        return this._service.get('loading_settings');
    }

    constructor(private _service: ApplicationService, private _dialog: MatDialog) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item').subscribe(item => {
                this.item = item;
                this.loadZones();
                this.loadSettings();
            })
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.item && this.item) {
            this.loadZones();
            this.loadSettings();
        }
    }

    /**
     * Open confirmation modal for starting the active system
     */
    public start() {
        const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                ...CONFIRM_METADATA,
                data: {
                    title: 'Start system?',
                    content: `Are you sure you want to start this system?<br>All stopped modules within the system will boot up.`,
                    icon: { type: 'icon', class: 'backoffice-controller-play' }
                }
            }
        );
        this.subscription(
            'confirm_ref',
            ref.componentInstance.event.subscribe((e: DialogEvent) => {
                if (e.reason === 'done') {
                    startSystem(this.item.id).subscribe(
                        result => null,
                        err =>
                            this._service.notifyError(
                                `Failed to start system: ${JSON.stringify(err.response || err.message || err)}`
                            )
                    );
                }
            })
        );
    }

    /**
     * Open confirmation modal for stopping the active system
     */
    public stop() {
        const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                ...CONFIRM_METADATA,
                data: {
                    title: 'Stop system?',
                    content: `Are you sure you want to stop this system?<br>All modules will be immediately stopped regardless of any other systems they may be in.`,
                    icon: { type: 'icon', class: 'backoffice-controller-stop' }
                }
            }
        );
        this.subscription(
            'confirm_ref',
            ref.componentInstance.event.subscribe((e: DialogEvent) => {
                if (e.reason === 'done') {
                    stopSystem(this.item.id).subscribe(
                        result => null,
                        err =>
                            this._service.notifyError(
                                `Failed to stop system: ${JSON.stringify(err.response || err.message || err)}`
                            )
                    );
                }
            })
        );
    }

    /**
     * Load zones associated with the system to allow for merging
     */
    public loadZones() {
        if (!this.item) {
            return;
        }
        queryZones({ control_system_id: this.item.id, offset: 0 }).subscribe(
            list => {
                list.sort((a, b) => this.item.zones.indexOf(b.id) - this.item.zones.indexOf(a.id));
                this.zones = list;
            },
            () => null
        );
    }

    public async loadSettings() {
        if (!this.item) {
            return;
        }
        this.other_settings = await systemSettings(this.item.id).toPromise();
    }
}
