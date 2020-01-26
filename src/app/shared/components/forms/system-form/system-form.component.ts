import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EncryptionLevel } from '@acaengine/ts-client';

import { ApplicationService } from 'src/app/services/app.service';
import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { EngineServiceLike, Identity } from 'src/app/shared/utilities/types.utilities';

@Component({
    selector: 'system-form',
    templateUrl: './system-form.component.html',
    styleUrls: ['./system-form.component.scss']
})
export class SystemFormComponent extends BaseDirective {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** Levels of encyption available for the system's settings */
    public encryption_levels: Identity[] = [
        { id: EncryptionLevel.None, name: 'None' },
        { id: EncryptionLevel.Support, name: 'Support' },
        { id: EncryptionLevel.Admin, name: 'Admin' },
        { id: EncryptionLevel.NeverDisplay, name: 'Never Display' }
    ]

    /** Service for handling zones */
    public get zone_service(): EngineServiceLike {
        return this._service.Zones;
    }

    constructor(private _service: ApplicationService) {
        super();
    }
}
