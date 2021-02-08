import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlaceDomain, queryDomains } from '@placeos/ts-client';
import { map } from 'rxjs/operators';

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
    /** Loading state */
    public loading: string = '';
    /** List of available domains */
    public domain_list: PlaceDomain[];
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public readonly addGroup = (e) => addChipItem(this.form.controls.groups as any, e);
    public readonly removeGroup = (i) => removeChipItem(this.form.controls.groups as any, i);

    public async ngOnInit() {
        this.loading = 'Loading domains...';
        this.domain_list = await queryDomains()
            .pipe(map((r) => r.data))
            .toPromise();
        if (!this.form.controls.authority_id.value) {
            this.form.controls.authority_id.setValue(this.domain_list[0]?.id);
        }
        this.loading = '';
    }

    public get group_list(): string[] {
        return this.form.controls.groups.value;
    }
}
