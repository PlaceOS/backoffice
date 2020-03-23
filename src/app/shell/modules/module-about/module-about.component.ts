import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { EngineModule, EngineDriver, EngineSystem, EngineSettings, EncryptionLevel } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { mergeYAMLSettings } from 'src/app/shared/utilities/general.utilities';
import { Identity } from 'src/app/shared/utilities/types.utilities';

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
    /** Settings level to display details for */
    public encryption_level: EncryptionLevel = EncryptionLevel.NeverDisplay;

    public readonly available_levels: Identity[] = this.levels;
    /** List of settings for associated modules, drivers and zones */
    public other_settings: EngineSettings[] = [];

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

    public get settings(): string {
        return (this.item.settings[this.encryption_level as any] || {}).settings_string || '';
    }

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item', item => {
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
        this.other_settings = await this._service.Systems.settings(this.item.id);
    }
}
