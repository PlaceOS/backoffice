import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EncryptionLevel } from '@placeos/ts-client';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { Identity, EngineServiceLike } from 'src/app/shared/utilities/types.utilities';
import { ApplicationService } from 'src/app/services/app.service';
import { BaseDirective } from 'src/app/shared/globals/base.directive';

@Component({
    selector: 'zone-form',
    templateUrl: './zone-form.component.html',
    styleUrls: ['./zone-form.component.scss']
})
export class ZoneFormComponent extends BaseDirective {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** Levels of encyption available for the system's settings */
    public encryption_levels: Identity[] = [
        { id: EncryptionLevel.None, name: 'None' },
        { id: EncryptionLevel.Support, name: 'Support' },
        { id: EncryptionLevel.Admin, name: 'Admin' },
        { id: EncryptionLevel.NeverDisplay, name: 'Never Display' }
    ];
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA];

    /** Service for handling zones */
    public get zone_service(): EngineServiceLike {
        return this._service.Zones;
    }

    public get tag_list(): string[] {
        return this.form.controls.tag_list.value;
    }

    constructor(private _service: ApplicationService) {
        super();
    }

    /**
     * Add a tag to the list of tags for the item
     * @param event Input event
     */
    public addTag(event: MatChipInputEvent): void {
        if (!this.form || !this.form.controls.tag_list) return;
        const input = event.input;
        const value = event.value;
        const tag_list = this.tag_list;
        if ((value || '').trim()) {
            tag_list.push(value);
            this.form.controls.tag_list.setValue(tag_list);
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    /**
     * Remove tag from the list
     * @param existing_tag Tag to remove
     */
    public removeTag(existing_tag: string): void {
        if (!this.form || !this.form.controls.tag_list) return;
        const tag_list = this.tag_list;
        const index = tag_list.indexOf(existing_tag);

        if (index >= 0) {
            tag_list.splice(index, 1);
            this.form.controls.tag_list.setValue(tag_list);
        }
    }
}
