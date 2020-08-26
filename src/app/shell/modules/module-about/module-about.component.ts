import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { PlaceModule, PlaceDriver, PlaceSystem, PlaceSettings, EncryptionLevel, startModule, stopModule, moduleSettings, showSystem, showDriver } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { Identity } from 'src/app/shared/utilities/types.utilities';
import { ViewResponseModalComponent } from 'src/app/overlays/view-response-modal/view-response-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { BackofficeUsersService } from 'src/app/services/data/users.service';

@Component({
    selector: 'module-about',
    templateUrl: './module-about.template.html',
    styleUrls: ['./module-about.styles.scss']
})
export class ModuleAboutComponent extends BaseDirective implements OnChanges, OnInit {
    /** Item to render */
    @Input() public item: PlaceModule;
    /** Driver for the active item */
    public driver: PlaceDriver;
    /** Control System for the active item */
    public system: PlaceSystem;
    /** List of settings for associated modules, drivers and zones */
    public other_settings: PlaceSettings[] = [];
    /** Whether module is being stopped */
    public stopping: boolean;

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
                this.loadDriver();
                this.loadSystem();
                this.loadSettings();
            })
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.item) {
            this.loadDriver();
            this.loadSystem();
            this.loadSettings();
        }
    }

    public loadDriver() {
        if (this.item && this.item.driver_id) {
            showDriver(this.item.driver_id).subscribe(driver => {
                this.driver = driver;
            });
        }
    }

    public loadSystem() {
        if (this.item && this.item.system_id) {
            showSystem(this.item.system_id).subscribe(system => {
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
                this._service.notifySuccess('Module successfully stopped');
                (this.item as any).running = false;
            },
            err => {
                this.stopping = false;
                if (typeof err === 'string' && err.length < 64) {
                    this._service.notifyError(err);
                } else {
                    this._service.notifyError(
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
                this._service.notifySuccess('Module successfully started');
                (this.item as any).running = true;
            },
            err => {
                this.stopping = false;
                if (typeof err === 'string' && err.length < 64) {
                    this._service.notifyError(err);
                } else {
                    this._service.notifyError(
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
            data: { content }
        });
    }
}
