import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    PlaceSystem,
    PlaceZone,
    PlaceSettings,
    systemSettings,
    queryZones,
    stopSystem,
    startSystem,
} from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { map, first } from 'rxjs/operators';
import { notifySuccess, notifyError } from 'src/app/common/notifications';
import { ActiveItemService } from 'src/app/common/item.service';

@Component({
    selector: 'system-about',
    templateUrl: './system-about.template.html',
    styleUrls: ['./system-about.styles.scss'],
})
export class SystemAboutComponent extends BaseClass {
    /** List of zones for the active system */
    public zones: PlaceZone[];
    /** List of settings for associated modules, drivers and zones */
    public other_settings: PlaceSettings[] = null;

    /** List of module ids associated with the system */
    public modules(): string[] {
        return [...this.item.modules];
    }

    public get item(): PlaceSystem {
        return this._service.active_item as any;
    }

    constructor(private _dialog: MatDialog, private _service: ActiveItemService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadZones();
            this.loadSettings();
        }))
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
                    icon: { type: 'icon', class: 'backoffice-controller-play' },
                },
            }
        );
        ref.componentInstance.event.pipe(first((_) => _.reason === 'done')).subscribe((_) => {
            startSystem(this.item.id).subscribe(
                (_) => {
                    notifySuccess(`Successfully started system`);
                    ref.close();
                },
                (err) =>
                    notifyError(
                        `Failed to start system: ${JSON.stringify(
                            err.response || err.message || err
                        )}`
                    )
            );
        });
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
                    icon: { type: 'icon', class: 'backoffice-controller-stop' },
                },
            }
        );
        ref.componentInstance.event.pipe(first((_) => _.reason === 'done')).subscribe((_) => {
            stopSystem(this.item.id).subscribe(
                (_) => {
                    notifySuccess(`Successfully stopped system`);
                    ref.close();
                },
                (err) =>
                    notifyError(
                        `Failed to stop system: ${JSON.stringify(
                            err.response || err.message || err
                        )}`
                    )
            );
        });
    }

    /**
     * Load zones associated with the system to allow for merging
     */
    public loadZones() {
        if (!this.item) {
            return;
        }
        queryZones({ control_system_id: this.item.id, offset: 0 })
            .pipe(map((resp) => resp.data))
            .subscribe(
                (list) => {
                    list.sort(
                        (a, b) => this.item.zones.indexOf(b.id) - this.item.zones.indexOf(a.id)
                    );
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
