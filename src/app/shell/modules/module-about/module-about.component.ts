import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { EngineModule, EngineDriver, EngineSystem } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { mergeYAMLSettings } from 'src/app/shared/utilities/general.utilities';

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
    /** Whether the local settings are merged with it's dependencies */
    public merged: boolean;
    /** Settings for the item */
    public settings: string;

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
            })
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.item) {
            this.loadDriver();
            this.loadSystem();
        }
    }

    public loadDriver() {
        if (this.item && this.item.driver_id) {
            this._service.Drivers.show(this.item.driver_id).then(driver => {
                this.driver = driver;
                this.updateSettings();
            });
        }
    }

    public loadSystem() {
        if (this.item && this.item.system_id) {
            this._service.Systems.show(this.item.system_id).then(system => {
                this.system = system;
                this.updateSettings();
            });
        }
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
        if (!this.item) return;
        if (this.merged !== false) {
            this.settings = mergeYAMLSettings('', this.item.settings.settings_string || '');
            if (this.driver) {
                this.settings = mergeYAMLSettings(
                    this.settings,
                    this.driver.settings.settings_string || ''
                );
            }
        } else {
            this.settings = this.item.settings.settings_string || '';
        }
    }
}