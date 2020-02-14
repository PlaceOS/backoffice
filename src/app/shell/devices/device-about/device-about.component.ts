
import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { EngineModule, EngineDriver, EngineSystem } from '@acaengine/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { mergeYAMLSettings } from 'src/app/shared/utilities/general.utilities';

@Component({
    selector: 'device-about',
    templateUrl: './device-about.template.html',
    styleUrls: ['./device-about.styles.scss']
})
export class DeviceAboutComponent extends BaseDirective implements OnChanges, OnInit {
    /** Item to render */
    @Input() public item: EngineModule;
    /** Dependency for the active item */
    public dependency: EngineDriver;
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
                this.loadDependency();
                this.loadSystem();
            })
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.item) {
            this.loadDependency();
            this.loadSystem();
        }
    }

    public loadDependency() {
        if (this.item && this.item.dependency_id) {
            this._service.Drivers.show(this.item.dependency_id).then((driver) => {
                this.dependency = driver;
                this.updateSettings();
            })
        }
    }

    public loadSystem() {
        if (this.item && this.item.system_id) {
            this._service.Systems.show(this.item.system_id).then((system) => {
                this.system = system;
                this.updateSettings();
            })
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
            if (this.dependency) {
                this.settings = mergeYAMLSettings(this.settings, this.dependency.settings.settings_string || '');
            }
        } else {
            this.settings = this.item.settings.settings_string || '';
        }
    }

}
