import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlaceZone, showZone, queryZones } from '@placeos/ts-client';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { BaseClass } from 'src/app/common/base.class';
import { map } from 'rxjs/operators';
import { addChipItem, removeChipItem } from 'src/app/common/forms';

@Component({
    selector: 'zone-form',
    templateUrl: './zone-form.component.html',
    styleUrls: ['./zone-form.component.scss']
})
export class ZoneFormComponent extends BaseClass {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];
    /** Query function for zones */
    public readonly query_fn = (_: string) => queryZones({ q: _ }).pipe(map(resp => resp.data));
    /** Function to exclude zones */
    public readonly exclude = (zone: PlaceZone) => zone.id === this.form.controls.id.value;

    public readonly addTag = (e) => addChipItem(this.form.controls.tags as any, e);
    public readonly removeTag = (i) => removeChipItem(this.form.controls.tags as any, i);

    public get tag_list(): string[] {
        return this.form.controls.tags.value;
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.form) {
            this.updateZone();
        }
    }

    /** Update parent zone details if set */
    private async updateZone() {
        const parent_id = this.form.controls.parent_id ? this.form.controls.parent_id.value : '';
        if (parent_id) {
            const zone = await showZone(parent_id).toPromise();
            this.form.controls.parent_zone.setValue(zone);
        }
    }
}
