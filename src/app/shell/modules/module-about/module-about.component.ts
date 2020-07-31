import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { EngineModule, EngineDriver, EngineSystem, EngineSettings, EncryptionLevel } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { mergeYAMLSettings } from 'src/app/shared/utilities/general.utilities';
import { Identity } from 'src/app/shared/utilities/types.utilities';
import { ViewResponseModalComponent } from 'src/app/overlays/view-response-modal/view-response-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'module-about',
    templateUrl: './module-about.template.html',
    styleUrls: ['./module-about.styles.scss']
})
export class ModuleAboutComponent extends BaseDirective implements OnChanges, OnInit {
    /** Item to render */
    @Input() public item: EngineModule;
    /** Driver for the active item */
    public driver: EngineDriver;
    /** Control System for the active item */
    public system: EngineSystem;
    /** List of settings for associated modules, drivers and zones */
    public other_settings: EngineSettings[] = [];
    /** Whether module is being stopped */
    public stopping: boolean;

    /** Whether application is loading settings for item */
    public get loading_settings(): boolean {
        return this._service.get('loading_settings');
    }

    /** Displayable encryption levels for settings */
    public get levels(): Identity[] {
        const user = this._service.Users.user.getValue();
        const levels = [
            { id: EncryptionLevel.NeverDisplay, name: 'Merged' },
            { id: EncryptionLevel.None, name: 'Unencrypted' }
        ];
        if (user.support || user.sys_admin) {
            levels.push({ id: EncryptionLevel.Support, name: 'Support' });
        }
        if (user.sys_admin) {
            levels.push({ id: EncryptionLevel.Admin, name: 'Admin' });
        }
        return levels;
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
            this._service.Drivers.show(this.item.driver_id).then(driver => {
                this.driver = driver;
            });
        }
    }

    public loadSystem() {
        if (this.item && this.item.system_id) {
            this._service.Systems.show(this.item.system_id).then(system => {
                this.system = system;
            });
        }
    }

    public async loadSettings() {
        if (!this.item) {
            return;
        }
        this.other_settings = await this._service.Modules.settings(this.item.id);
    }

    public stopModule() {
        this.stopping = true;
        this.item.stop().then(
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
        this.item.start().then(
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
