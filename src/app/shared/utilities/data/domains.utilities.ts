import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { EngineDomain } from '@acaprojects/ts-composer';

import { FormDetails, URL_PATTERN } from './systems.utilities';
import { HashMap } from '../types.utilities';

export function generateDomainFormFields(authority: EngineDomain): FormDetails {
    if (!authority) {
        throw Error('No User passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        name: new FormControl(authority.name || '', [Validators.required]),
        domain: new FormControl(authority.domain || '', [Validators.email, Validators.required]),
        login_url: new FormControl(authority.login_url || '', [Validators.pattern(URL_PATTERN)]),
        logout_url: new FormControl(authority.logout_url || '', [Validators.pattern(URL_PATTERN)]),
        description: new FormControl(authority.description || ''),
    };
    const subscriptions = [];
    for (const key in fields) {
        if (fields[key] && key.indexOf('confirm') < 0) {
            subscriptions.push(fields[key].valueChanges.subscribe(value => authority[key] = value));
        }
    }
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}
