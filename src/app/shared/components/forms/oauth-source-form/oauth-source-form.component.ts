import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Identity, HashMap } from 'src/app/shared/utilities/types.utilities';
import { BaseDirective } from 'src/app/shared/globals/base.directive';

@Component({
  selector: 'oauth-source-form',
  templateUrl: './oauth-source-form.component.html',
  styleUrls: ['./oauth-source-form.component.scss']
})
export class OauthSourceFormComponent extends BaseDirective implements OnChanges {
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

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.form && this.form) {
            if (this.form.controls.info_mappings) {
                const map = this.form.controls.info_mappings.value || {};
                this.info_mapping_list = Object.keys(map).map((key) => {
                    return { Engine: key, Remote: map[key] };
                });
            }
        }
    }

    public updateMappings(mappings: { Engine: string, Remote: string }[]) {
        this.timeout('mappings', () => {
            const map: HashMap = {};
            for (const pair of mappings) {
                if (pair.Engine && pair.Remote) {
                    map[pair.Engine] = pair.Remote;
                }
            }
            this.form.controls.info_mappings.setValue(map);
        }, 200);
    }

}
