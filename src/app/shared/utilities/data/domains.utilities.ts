import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EngineDomain } from '@placeos/ts-client';

import { FormDetails } from './systems.utilities';
import { HashMap } from '../types.utilities';

export function generateDomainFormFields(authority: EngineDomain): FormDetails {
    if (!authority) {
        throw Error('No User passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        name: new FormControl(authority.name || '', [Validators.required]),
        domain: new FormControl(authority.domain || '', [Validators.required]),
        login_url: new FormControl(authority.login_url || ''),
        logout_url: new FormControl(authority.logout_url || ''),
        config: new FormControl(authority.config || ''),
        internals: new FormControl(authority.internals || ''),
        description: new FormControl(authority.description || ''),
    };
    const subscriptions = [];
    for (const key in fields) {
        if (fields[key] && key.indexOf('confirm') < 0) {
            subscriptions.push(
                fields[key].valueChanges.subscribe(value =>
                    authority.storePendingChange(key as any, value)
                )
            );
        }
    }
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}
