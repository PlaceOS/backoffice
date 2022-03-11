import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlaceApplication } from '@placeos/ts-client';

import { HashMap } from 'apps/backoffice/src/app/common/types';
import { validateURL } from '../common/validation';

export function generateApplicationFormFields(
    app: PlaceApplication
): FormGroup {
    if (!app) {
        throw Error('No domain application passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        name: new FormControl(app.name || '', [Validators.required]),
        scopes: new FormControl(app.scopes || ''),
        skip_authorization: new FormControl(!!app.skip_authorization),
        redirect_uri: new FormControl(
            app.redirect_uri || '',
            validateURL
        ),
    };
    return new FormGroup(fields);
}
