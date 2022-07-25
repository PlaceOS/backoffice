import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlaceDomain } from '@placeos/ts-client';

export function generateDomainFormFields(domain?: PlaceDomain) {
    const fields = {
        name: new FormControl(domain?.name || '', [Validators.required]),
        domain: new FormControl(domain?.domain || '', [
            Validators.required,
            Validators.pattern(/^([a-zA-Z0-9._-])+$/),
        ]),
        login_url: new FormControl(domain?.login_url || ''),
        logout_url: new FormControl(domain?.logout_url || ''),
        config: new FormControl(domain?.config || ''),
        internals: new FormControl(domain?.internals || ''),
        description: new FormControl(domain?.description || ''),
    };
    return new FormGroup(fields);
}
