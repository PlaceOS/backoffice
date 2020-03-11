import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EngineSystem, EngineZone } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';
import { mergeYAMLSettings } from 'src/app/shared/utilities/general.utilities';
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
    @Input() public item: EngineSystem;
    /** Whether to show the settings merged with zone and modules */
    public merged: boolean;
    /** Settings map for the item */
    public settings: string;
    /** List of zones for the active system */
    public zones: EngineZone[];

    /** List of module ids associated with the system */
    public modules(): string[] {
        return [...this.item.modules];
    }

    constructor(private _service: ApplicationService, private _dialog: MatDialog) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item', item => {
                this.item = item;
                this.loadZones();
            })
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.item && this.item) {
            this.loadZones();
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
                    this._service.Systems.start(this.item.id).then(
                        result => null,
                        err =>
                            this._service.notifyError(
                                `Failed to start system: ${err.message || err}`
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
                    this._service.Systems.stop(this.item.id).then(
                        result => null,
                        err =>
                            this._service.notifyError(
                                `Failed to stop system: ${err.message || err}`
                            )
                    );
                }
            })
        );
    }

    /**
     * Toggle whether the settings are merged
     */
    public toggleSettings() {
        this.merged = this.merged === false ? true : false;
        this.updateSettings();
    }

    /**
     * Update the displayed settings
     */
    public updateSettings() {
        if (!this.item) {
            return;
        }
        if (this.merged !== false) {
            this.settings = mergeYAMLSettings('', this.item.settings.settings_string || '');
            for (const zone of this.zones) {
                this.settings = mergeYAMLSettings(
                    this.settings,
                    zone.settings.settings_string || ''
                );
            }
        } else {
            this.settings = this.item.settings.settings_string || '';
        }
    }

    /**
     * Load zones associated with the system to allow for merging
     */
    public loadZones() {
        if (!this.item) {
            return;
        }
        this._service.Zones.query({ sys_id: this.item.id, offset: 0 }).then(
            list => {
                list.sort((a, b) => this.item.zones.indexOf(b.id) - this.item.zones.indexOf(a.id));
                this.zones = list;
                this.updateSettings();
            },
            () => null
        );
    }
}
