import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BaseClass } from 'src/app/common/base.class';
import { HashMap } from 'src/app/shared/utilities/types.utilities';

@Component({
  selector: 'saml-source-form',
  templateUrl: './saml-source-form.component.html',
  styleUrls: ['./saml-source-form.component.scss']
})
export class SamlSourceFormComponent extends BaseClass implements OnChanges {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;

    /** List of attribute statement pairs */
    public attribute_statement_mappings: any[] = [];
    /** List of runtime param pairs */
    public runtime_param_list: any[] = [];

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.form && this.form) {
            if (this.form.controls.attribute_statements) {
                const map = this.form.controls.attribute_statements.value || {};
                this.attribute_statement_mappings = Object.keys(map).map((key) => {
                    return { name: key, mappings: map[key].join(',') };
                });
            }
            if (this.form.controls.idp_sso_target_url_runtime_params) {
                const map = this.form.controls.idp_sso_target_url_runtime_params.value || {};
                this.runtime_param_list = Object.keys(map).map((key) => {
                    return { name: key, mappings: map[key] };
                });
            }
        }
    }

    /**
     * Update the form control value for attribute statements
     * @param mappings Mapping listing
     */
    public updateAttributeStatements(mappings: { name: string, mappings: string }[]) {
        this.timeout('mappings', () => {
            const map: HashMap = {};
            for (const pair of mappings) {
                if (pair.name && pair.mappings) {
                    map[pair.name] = (pair.mappings || '').split(',');
                }
            }
            this.form.controls.attribute_statements.setValue(map);
        }, 200);
    }

    /**
     * Update the form control value for runtime parameters
     * @param mappings Mapping listing
     */
    public updateRuntimeParams(mappings: { name: string, mapping: string }[]) {
        this.timeout('mappings', () => {
            const map: HashMap = {};
            for (const pair of mappings) {
                if (pair.name && pair.mapping) {
                    map[pair.name] = pair.mapping;
                }
            }
            this.form.controls.idp_sso_target_url_runtime_params.setValue(map);
        }, 200);
    }

}
