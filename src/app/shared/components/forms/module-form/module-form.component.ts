import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EncryptionLevel } from '@acaprojects/ts-composer';

import { Identity, EngineServiceLike } from 'src/app/shared/utilities/types.utilities';
import { ApplicationService } from 'src/app/services/app.service';
import { BaseDirective } from 'src/app/shared/globals/base.directive';

@Component({
    selector: 'module-form',
    templateUrl: './module-form.component.html',
    styleUrls: ['./module-form.component.scss']
})
export class ModuleFormComponent extends BaseDirective {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** Levels of encyption available for the system's settings */
    public encryption_levels: Identity[] = [
        { id: EncryptionLevel.None, name: 'None' },
        { id: EncryptionLevel.Support, name: 'Support' },
        { id: EncryptionLevel.Admin, name: 'Admin' },
        { id: EncryptionLevel.NeverDisplay, name: 'Never Display' }
    ];

    /** Service for handling system */
    public get system_service(): EngineServiceLike {
        return this._service.Systems;
    }

    /** Service for handling drivers */
    public get driver_service(): EngineServiceLike {
        return this._service.Drivers;
    }

    constructor(private _service: ApplicationService) {
        super();
    }
}
