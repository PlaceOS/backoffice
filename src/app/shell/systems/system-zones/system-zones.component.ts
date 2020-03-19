import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { EngineSystem, EngineZone, EngineZonesService } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';

@Component({
    selector: 'system-zones',
    templateUrl: './system-zones.template.html',
    styleUrls: ['./system-zones.styles.scss']
})
export class SystemZonesComponent extends BaseDirective implements OnChanges, OnInit {
    /** Active item */
    @Input() public item: EngineSystem;
    /** Emitter for changes to the loading state of the item */
    @Output() public loading = new EventEmitter<boolean | string>();
    /** List of zones assoicated with the active item */
    public zones: EngineZone[];
    /** ID of a zone that the user wishes to add to the system */
    public new_zone: string;

    /** Service for managing zone data */
    public get zone_service(): EngineZonesService {
        return this._service.Zones;
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

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.loadZones();
        }
    }

    /**
     * Load zone data for the active item
     * @param offset Page offset for the service request
     */
    public loadZones(offset: number = 0) {
        if (!this.item) { return; }
        this._service.Zones.query({ control_system_id: this.item.id, offset }).then(
            list => {
                list.sort((a, b) => this.item.zones.indexOf(a.id) - this.item.zones.indexOf(b.id));
                this.zones = list;
            },
            () => null
        );
    }

    public drop(event) {
        if (event && event.previousIndex !== event.currentIndex) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: 'Change order?',
                        content: `Are you sure you want to change the zone priority?<br>Settings will be updated immediately for the system.`,
                        icon: { type: 'icon', class: 'backoffice-cycle' }
                    }
                }
            );
            this.subscription(
                'confirm_ref',
                ref.componentInstance.event.subscribe((e: DialogEvent) => {
                    if (e.reason === 'done') {
                        const list: string[] = [...this.item.zones];
                        moveItemInArray(list, event.previousIndex, event.currentIndex);
                        ref.componentInstance.loading = 'Updating zone ordering...';
                        this.item.storePendingChange('zones', list);
                        this.item.save().then(
                            () => {
                                ref.close();
                                this.unsub('confirm_ref');
                            },
                            err => {
                                ref.componentInstance.loading = null;
                                this._service.notifyError(
                                    `Error reording zones. Error: ${err.message || err}`
                                );
                            }
                        );
                    }
                })
            );
        }
    }

    public removeZone(zone: EngineZone) {
        if (zone && zone.id) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: 'Remove zone?',
                        content: `<p>Are you sure you want remove zone "${zone.name}" from the system?</p>Configuration will be updated immediately.`,
                        icon: { type: 'icon', class: 'backoffice-export' }
                    }
                }
            );
            this.subscription(
                'confirm_ref',
                ref.componentInstance.event.subscribe((e: DialogEvent) => {
                    if (e.reason === 'done') {
                        this.loading.emit(true);
                        this.item.removeZone(zone.id).then(
                            item => {
                                this.loading.emit(false);
                                this.item = item;
                                this._service.notifySuccess(
                                    `Remove zone "${this.new_zone}" from system`
                                );
                                ref.close();
                                this.unsub('confirm_ref');
                            },
                            err => {
                                this.loading.emit(false);
                                this._service.notifySuccess(
                                    `Error removing "${this.new_zone}" from system. Error: ${err}`
                                );
                                ref.close();
                                this.unsub('confirm_ref');
                            }
                        );
                    }
                })
            );
        }
    }

    public joinZone() {
        if (this.new_zone) {
            if (this.item.zones.indexOf(this.new_zone) < 0) {
                const new_list = [...this.item.zones, this.new_zone].filter(i => !!i);
                this.loading.emit(true);
                const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                    ConfirmModalComponent,
                    {
                        ...CONFIRM_METADATA,
                        data: {
                            title: 'Add zone',
                            content: `Add zone "${this.new_zone}" to system "${this.item.name}"`,
                            icon: { type: 'icon', class: 'backoffice-upload-to-cloud' }
                        }
                    }
                );
                this.subscription(
                    'confirm_ref',
                    ref.componentInstance.event.subscribe((e: DialogEvent) => {
                        if (e.reason === 'done') {
                            ref.componentInstance.loading = 'Adding zone to system...';
                            this._service.Systems.update(this.item.id, {
                                ...this.item,
                                zones: new_list
                            }).then(
                                item => {
                                    this.new_zone = null;
                                    this.loading.emit(false);
                                    this._service.notifySuccess(
                                        `Added zone "${this.new_zone}" to system`
                                    );
                                    this.item = item;
                                    this.loadZones();
                                    ref.close();
                                    this.unsub('confirm_ref');
                                },
                                () => {
                                    ref.componentInstance.loading = null;
                                    this.loading.emit(false);
                                    this._service.notifyError(
                                        `Error adding zone "${this.new_zone}"`
                                    );
                                }
                            );
                        } else {
                            this.loading.emit(false);
                        }
                    })
                );
            } else {
                this._service.notifyInfo('The selected zone is already linked to this system');
            }
        }
    }
}
