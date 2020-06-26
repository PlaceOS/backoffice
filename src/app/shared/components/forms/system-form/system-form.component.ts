import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EncryptionLevel } from '@placeos/ts-client';
import { SPACE, ENTER, COMMA } from '@angular/cdk/keycodes';

import { ApplicationService } from 'src/app/services/app.service';
import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { EngineServiceLike, Identity } from 'src/app/shared/utilities/types.utilities';
import { MatChipInputEvent } from '@angular/material/chips';

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
    ];

    /** List of separator characters for features */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public get feature_list(): string[] {
        return this.form.controls.features.value;
    }

    /** Service for handling zones */
    public get zone_service(): EngineServiceLike {
        return this._service.Zones;
    }

    constructor(private _service: ApplicationService) {
        super();
    }

    /**
     * Add a feature to the list of features for the item
     * @param event Input event
     */
    public addFeature(event: MatChipInputEvent): void {
        if (!this.form || !this.form.controls.features) return;
        const input = event.input;
        const value = event.value;
        const feature_list = this.feature_list;
        if ((value || '').trim()) {
            feature_list.push(value);
            this.form.controls.features.setValue(feature_list);
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    /**
     * Remove feature from the list
     * @param existing_feature Feature to remove
     */
    public removeFeature(existing_feature: string): void {
        if (!this.form || !this.form.controls.features) return;
        const feature_list = this.feature_list;
        const index = feature_list.indexOf(existing_feature);

        if (index >= 0) {
            feature_list.splice(index, 1);
            this.form.controls.features.setValue(feature_list);
        }
    }
}
