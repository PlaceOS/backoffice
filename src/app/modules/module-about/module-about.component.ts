import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    PlaceModule,
    PlaceDriver,
    PlaceSystem,
    PlaceSettings,
    startModule,
    stopModule,
    moduleSettings,
    showSystem,
    showDriver,
} from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';
import { ViewResponseModalComponent } from 'src/app/overlays/view-response-modal/view-response-modal.component';
import { notifySuccess, notifyError } from 'src/app/common/notifications';
import { ActiveItemService } from 'src/app/common/item.service';

@Component({
    selector: 'module-about',
    templateUrl: './module-about.template.html',
    styleUrls: ['./module-about.styles.scss'],
})
export class ModuleAboutComponent extends BaseClass implements OnInit {
    /** Driver for the active item */
    public driver: PlaceDriver;
    /** Control System for the active item */
    public system: PlaceSystem;
    /** List of settings for associated modules, drivers and zones */
    public other_settings: PlaceSettings[] = null;
    /** Whether module is being stopped */
    public stopping: boolean;

    public get item(): PlaceModule {
        return this._service.active_item as any;
    }

    constructor(private _dialog: MatDialog, private _service: ActiveItemService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadDriver();
            this.loadSystem();
            this.loadSettings();
        }))
    }

    public loadDriver() {
        if (this.item && this.item.driver_id) {
            showDriver(this.item.driver_id).subscribe((driver) => {
                this.driver = driver;
            });
        }
    }

    public loadSystem() {
        if (this.item && this.item.system_id) {
            showSystem(this.item.system_id).subscribe((system) => {
                this.system = system;
            });
        }
    }

    public async loadSettings() {
        if (!this.item) {
            return;
        }
        this.other_settings = await moduleSettings(this.item.id).toPromise();
    }

    public stopModule() {
        this.stopping = true;
        stopModule(this.item.id).subscribe(
            () => {
                this.stopping = false;
                notifySuccess('Module successfully stopped');
                (this.item as any).running = false;
            },
            (err) => {
                this.stopping = false;
                if (typeof err === 'string' && err.length < 64) {
                    notifyError(err);
                } else {
                    notifyError(
                        `Failed to stop device '${this.item.id}'.\nView Error?`,
                        'View',
                        () => this.viewDetails(err)
                    );
                }
            }
        );
    }

    public startModule() {
        this.stopping = true;
        startModule(this.item.id).subscribe(
            () => {
                this.stopping = false;
                notifySuccess('Module successfully started');
                (this.item as any).running = true;
            },
            (err) => {
                this.stopping = false;
                if (typeof err === 'string' && err.length < 64) {
                    notifyError(err);
                } else {
                    notifyError(
                        `Failed to start device '${this.item.id}'.\nView Error?`,
                        'View',
                        () => this.viewDetails(err)
                    );
                }
            }
        );
    }

    /** View Results of the execute */
    private viewDetails(content: any) {
        this._dialog.open<ViewResponseModalComponent>(ViewResponseModalComponent, {
            data: { content },
        });
    }
}
