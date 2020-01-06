
import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { EngineSystem, EngineZone, EngineZonesService } from '@acaprojects/ts-composer';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { ConfirmModalComponent, ConfirmModalData } from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';

@Component({
    selector: 'system-zones',
    templateUrl: './system-zones.template.html',
    styleUrls: ['./system-zones.styles.scss']
})
export class SystemZonesComponent extends BaseDirective implements OnChanges {
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

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.load();
        }
    }

    /**
     * Load zone data for the active item
     * @param offset Page offset for the service request
     */
    public load(offset: number = 0) {
        this._service.Zones.query({ sys_id: this.item.id, offset }).then((list) => {
            list.sort((a, b) => this.item.zones.indexOf(a.id) - this.item.zones.indexOf(b.id));
            this.zones = list;
        }, () => null);
    }

    public drop(event) {
        if (event && event.previousIndex !== event.currentIndex) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(ConfirmModalComponent, {
                width: '22em',
                maxWidth: '95vw',
                maxHeight: '95vh',
                data: {
                    title: 'Change order?',
                    content: `Are you sure you want to change the zone priority?<br>Settings will be updated immediately for the system.`,
                    icon: { type: 'icon', class: 'backoffice-cycle' }
                }
            })
            this.subscription('confirm_ref', ref.componentInstance.event.subscribe((e: DialogEvent) => {
                if (e.reason === 'done') {
                    const list: string[] = [];
                    for (const item of this.zones) { list.push(item.id); }
                    moveItemInArray(list, event.previousIndex, event.currentIndex);
                    this._service.Systems.update(this.item.id, { zones: list })
                        .then(() => {
                            moveItemInArray(this.zones, event.previousIndex, event.currentIndex);
                            moveItemInArray(this.item.zones, event.previousIndex, event.currentIndex);
                        });
                    ref.close();
                    this.unsub('confirm_ref');
                }
            }));
        }
    }

    public goto(item, link?: string) {
        if (link) {
            if (link.indexOf('http://') < 0 && link.indexOf('https://') < 0) {
                link = `http${item.tls}://${link}${item.port ? ':' + item.port : ''}`;
            }
            window.open(item, '_blank');
        } else {
            this._service.navigate(['zones', encodeURIComponent(item.id)]);
        }
    }

    public joinZone() {
        if (this.new_zone) {
            if (this.item.zones.indexOf(this.new_zone) < 0) {
                const new_list = [ ...this.item.zones, this.new_zone ].filter(i => !!i);
                this.loading.emit(true);
                const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(ConfirmModalComponent, {
                    width: '22em',
                    maxWidth: '95vw',
                    maxHeight: '95vh',
                    data: {
                        title: 'Add zone',
                        content: `Add zone "${this.new_zone}" to system "${this.item.id}"`,
                        icon: { type: 'icon', class: 'backoffice-upload-to-cloud' }
                    }
                })
                this.subscription('confirm_ref', ref.componentInstance.event.subscribe((e: DialogEvent) => {
                    if (e.reason === 'done') {
                        this._service.Systems.update(this.item.id, { ...this.item, zones: new_list }).then((item) => {
                            this.new_zone = null;
                            this.loading.emit(false);
                            this._service.notifySuccess(`Addeed zone "${this.new_zone}" to system`);
                            this.item = item;
                            this.load();
                            ref.close();
                            this.unsub('confirm_ref');
                        }, () => {
                            this.loading.emit(false);
                            this._service.notifyError(`Error adding zone "${this.new_zone}"`);
                        });
                    } else {
                        this.loading.emit(false);
                    }
                }));
            } else {
                this._service.notifyInfo('The selected zone is already linked to this system');
            }
        }
    }
}
