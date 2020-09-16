import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

import { Identity, HashMap } from 'src/app/shared/utilities/types.utilities';
import { BaseClass } from 'src/app/common/base.class';

@Component({
    selector: 'oauth-source-form',
    templateUrl: './oauth-source-form.component.html',
    styleUrls: ['./oauth-source-form.component.scss'],
})
export class OauthSourceFormComponent extends BaseClass implements OnChanges {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** List of available token request methods */
    public token_methods: Identity[] = [
        { id: 'get', name: 'GET' },
        { id: 'post', name: 'POST' },
        { id: 'put', name: 'PUT' },
    ];
    /** List of available authentication schemes */
    public auth_schemes: Identity[] = [
        { id: 'request_body', name: 'Request Body' },
        { id: 'basic_auth', name: 'Basic Auth' },
    ];
    /** List of info mapping pairs */
    public info_mapping_list: any[] = [];
    /** List of authorize params pairs */
    public auth_params_list: any[] = [];
    /** List of ensure_matching pairs */
    public ensure_matching_list: any[] = [];

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.form && this.form) {
            if (this.form.controls.info_mappings) {
                const map = this.form.controls.info_mappings.value || {};
                this.info_mapping_list = Object.keys(map).map((key) => {
                    return { PlaceOS: key, Remote: map[key] };
                });
            }
            if (this.form.controls.authorize_params) {
                const map = this.form.controls.authorize_params.value || {};
                this.auth_params_list = Object.keys(map).map((key) => {
                    return { Parameter: key, Value: map[key] };
                });
            }
            if (this.form.controls.ensure_matching) {
                const map = this.form.controls.ensure_matching.value || {};
                this.ensure_matching_list = Object.keys(map).map((key) => {
                    return { Parameter: key, Value: (map[key] || []).join(',') };
                });
            }
        }
    }

    public updateMappings(
        mappings: { PlaceOS: string; Remote: string }[],
        control: AbstractControl,
        split: boolean = false,
        fields: [string, string] = ['PlaceOS', 'Remote']
    ) {
        const map: HashMap = {};
        for (const pair of mappings) {
            if (pair[fields[0]] && pair[fields[1]]) {
                map[pair[fields[0]]] = !split ? pair[fields[1]] : (pair[fields[1]] || '').split(',');
            }
        }
        control.setValue(map);
    }
}
