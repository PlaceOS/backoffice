import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EncryptionLevel, EngineDriver } from '@acaprojects/ts-composer';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { Identity } from 'src/app/shared/utilities/types.utilities';
import { ApplicationService } from 'src/app/services/app.service';
import { BackofficeDiscoveryService } from 'src/app/services/data/discovery.service';

@Component({
    selector: 'driver-form',
    templateUrl: './driver-form.component.html',
    styleUrls: ['./driver-form.component.scss']
})
export class DriverFormComponent extends BaseDirective {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** Levels of encyption available for the system's settings */
    public encryption_levels: Identity[] = [
        { id: EncryptionLevel.None, name: 'None' },
        { id: EncryptionLevel.Support, name: 'Support' },
        { id: EncryptionLevel.Admin, name: 'Admin' },
        { id: EncryptionLevel.NeverDisplay, name: 'Never Display' }
    ];
    /** List of driver roles */
    public role_types: Identity[] = [
        { id: 0, name: 'SSH' },
        { id: 1, name: 'Device' },
        { id: 2, name: 'Service' },
        { id: 3, name: 'Websocket' },
        { id: 99, name: 'Logic' }
    ];

    /** Driver used as a template for the new driver being created */
    public base_driver: EngineDriver;

    /** Service for handling driver discovery */
    public get discovery_service(): BackofficeDiscoveryService {
        return this._service.Discovery;
    }

    constructor(private _service: ApplicationService) {
        super();
    }

    public scanForDrivers() {
        this._service.Discovery.scan().then(() => {});
    }

    /**
     *
     * @param driver
     */
    public setDriverBase(driver: EngineDriver) {
        this.form.controls.name.setValue(driver.name);
        this.form.controls.module_name.setValue(driver.module_name);
        this.form.controls.class_name.setValue(driver.class_name);
        this.form.controls.settings_string.setValue(driver.settings.settings_string || '');
    }
}
