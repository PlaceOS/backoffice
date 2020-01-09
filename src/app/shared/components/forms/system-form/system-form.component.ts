import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EngineZone } from '@acaprojects/ts-composer';

import { ApplicationService } from 'src/app/services/app.service';
import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { EngineServiceLike } from 'src/app/shared/utilities/types.utilities';

@Component({
    selector: 'system-form',
    templateUrl: './system-form.component.html',
    styleUrls: ['./system-form.component.scss']
})
export class SystemFormComponent extends BaseDirective {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;

    /** Service for handling zones */
    public get zone_service(): EngineServiceLike {
        return this._service.Zones;
    }

    constructor(private _service: ApplicationService) {
        super();
    }

    public setZone(zone: EngineZone): void {
        this.form.controls.zone.setValue(zone.id);
    }
}
