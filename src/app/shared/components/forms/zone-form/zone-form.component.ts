import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EngineZone } from '@placeos/ts-client';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { EngineServiceLike } from 'src/app/shared/utilities/types.utilities';
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
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA];
    /** Function to exclude zones */
    public readonly exclude = (zone: EngineZone) => zone.id === this.form.controls.id.value;

    /** Service for handling zones */
    public get zone_service(): EngineServiceLike {
        return this._service.Zones;
    }

    public get tag_list(): string[] {
        return this.form.controls.tags.value;
    }

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.form) {
            this.updateZone();
        }
    }

    /**
     * Add a tag to the list of tags for the item
     * @param event Input event
     */
    public addTag(event: MatChipInputEvent): void {
        if (!this.form || !this.form.controls.tags) return;
        const input = event.input;
        const value = event.value;
        const tag_list = this.tag_list;
        if ((value || '').trim()) {
            tag_list.push(value);
            this.form.controls.tags.setValue(tag_list);
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
        if (!this.form || !this.form.controls.tags) return;
        const tag_list = this.tag_list;
        const index = tag_list.indexOf(existing_tag);

        if (index >= 0) {
            tag_list.splice(index, 1);
            this.form.controls.tags.setValue(tag_list);
        }
    }

    /** Update parent zone details if set */
    private async updateZone() {
        const parent_id = this.form.controls.parent_id ? this.form.controls.parent_id.value : '';
        if (parent_id) {
            const zone = await this._service.Zones.show(parent_id);
            this.form.controls.parent_zone.setValue(zone);
        }
    }
}
