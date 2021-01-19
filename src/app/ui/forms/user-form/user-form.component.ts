import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { addChipItem, removeChipItem } from 'src/app/common/forms';
@Component({
    selector: 'user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** Whether password should be visible in plaintext */
    public show_password: boolean;
    /** Whether password confirm should be visible in plaintext */
    public show_confirm: boolean;
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public readonly addGroup = (e) => addChipItem(this.form.controls.groups as any, e);
    public readonly removeGroup = (i) => removeChipItem(this.form.controls.groups as any, i);

    public get group_list(): string[] {
        return this.form.controls.groups.value;
    }
}
