import { Component, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import {
    PlaceSystem,
    PlaceZone,
    updateSystem,
    listSystemZones,
    queryZones,
} from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent } from 'src/app/common/types';
import { unique } from 'src/app/common/general';
import { map } from 'rxjs/operators';
import { notifyError, notifySuccess, notifyInfo } from 'src/app/common/notifications';
import { ActiveItemService } from 'src/app/common/item.service';

@Component({
    selector: 'system-zones',
    templateUrl: './system-zones.template.html',
    styleUrls: ['./system-zones.styles.scss'],
})
export class SystemZonesComponent extends BaseClass {
    /** Emitter for changes to the loading state of the item */
    @Output() public loading = new EventEmitter<boolean | string>();
    /** List of zones assoicated with the active item */
    public zones: PlaceZone[];
    /** ID of a zone that the user wishes to add to the system */
    public new_zone: PlaceZone;
    /** Query function for systems */
    public readonly query_fn = (_) => queryZones({ q: _ }).pipe(map((resp) => resp.data));

    public readonly exclude_fn = (zone: PlaceZone) => this.item.zones.indexOf(zone.id) >= 0;

    public get item(): PlaceSystem {
        return this._service.active_item as any;
    }

    constructor(private _dialog: MatDialog, private _service: ActiveItemService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadZones();
        }))
    }

    /**
     * Load zone data for the active item
     * @param offset Page offset for the service request
     */
    public loadZones(offset: number = 0) {
        if (!this.item) {
            return;
        }
        listSystemZones(this.item.id)
            .pipe(map((resp) => resp.data))
            .subscribe(
                (list) => {
                    list.sort(
                        (a, b) => this.item.zones.indexOf(a.id) - this.item.zones.indexOf(b.id)
                    );
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
                        icon: { type: 'icon', class: 'backoffice-cycle' },
                    },
                }
            );
            this.subscription(
                'confirm_ref',
                ref.componentInstance.event.subscribe((e: DialogEvent) => {
                    if (e.reason === 'done') {
                        const zones: string[] = [...this.item.zones];
                        moveItemInArray(zones, event.previousIndex, event.currentIndex);
                        ref.componentInstance.loading = 'Updating zone ordering...';
                        updateSystem(this.item.id, { ...this.item.toJSON(), zones }).subscribe(
                            () => {
                                ref.close();
                                this.unsub('confirm_ref');
                            },
                            (err) => {
                                ref.componentInstance.loading = null;
                                notifyError(
                                    `Error reording zones. Error: ${JSON.stringify(
                                        err.response || err.message || err
                                    )}`
                                );
                            }
                        );
                    }
                })
            );
        }
    }

    public removeZone(zone: PlaceZone) {
        if (zone && zone.id) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: 'Remove zone?',
                        content: `<p>Are you sure you want remove zone "${zone.name}" from the system?</p>Configuration will be updated immediately.`,
                        icon: { type: 'icon', class: 'backoffice-trash' },
                    },
                }
            );
            this.subscription(
                'confirm_ref',
                ref.componentInstance.event.subscribe((e: DialogEvent) => {
                    if (e.reason === 'done') {
                        this.loading.emit(true);
                        const zones = this.item.zones.filter((id) => id !== zone.id);
                        updateSystem(this.item.id, { ...this.item.toJSON(), zones }).subscribe(
                            (item: any) => {
                                this.loading.emit(false);
                                this._service.replaceItem(item);
                                this.zones = this.zones.filter(z => z.id !== zone.id);
                                notifySuccess(`Remove zone "${zone.name}" from system`);
                                ref.close();
                                this.unsub('confirm_ref');
                            },
                            (err) => {
                                this.loading.emit(false);
                                notifySuccess(
                                    `Error removing "${
                                        zone.name
                                    }" from system. Error: ${JSON.stringify(
                                        err.response || err.message || err
                                    )}`
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
            if (this.item.zones.indexOf(this.new_zone.id) < 0) {
                this.loading.emit(true);
                const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                    ConfirmModalComponent,
                    {
                        ...CONFIRM_METADATA,
                        data: {
                            title: 'Add zone',
                            content: `Add zone "${this.new_zone.name}" to system "${this.item.name}"`,
                            icon: { type: 'icon', class: 'backoffice-upload-to-cloud' },
                        },
                    }
                );
                this.subscription(
                    'confirm_ref',
                    ref.componentInstance.event.subscribe((e: DialogEvent) => {
                        if (e.reason === 'done') {
                            ref.componentInstance.loading = 'Adding zone to system...';
                            const zones = unique([...this.item.zones, this.new_zone.id]);
                            updateSystem(this.item.id, { ...this.item.toJSON(), zones }).subscribe(
                                (item: any) => {
                                    this.loading.emit(false);
                                    notifySuccess(`Added zone "${this.new_zone.name}" to system`);
                                    this._service.replaceItem(item);
                                    this.zones.push(this.new_zone);
                                    ref.close();
                                    this.unsub('confirm_ref');
                                    this.new_zone = null;
                                },
                                (err) => {
                                    ref.componentInstance.loading = null;
                                    this.loading.emit(false);
                                    notifyError(
                                        `Error adding zone "${
                                            this.new_zone.name
                                        }". Error: ${JSON.stringify(
                                            err.response || err.message || err
                                        )}`
                                    );
                                }
                            );
                        } else {
                            this.loading.emit(false);
                        }
                    })
                );
            } else {
                notifyInfo('The selected zone is already linked to this system');
            }
        }
    }
}
