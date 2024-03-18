import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlaceApplication } from '@placeos/ts-client';

import { validateURL } from '../common/validation';

export function generateApplicationFormFields(app?: PlaceApplication) {
    const fields = {
        name: new FormControl(app?.name || '', [Validators.required]),
        scopes: new FormControl(app?.scopes || ''),
        skip_authorization: new FormControl(!!app?.skip_authorization),
        redirect_uri: new FormControl(app?.redirect_uri || '', validateURL),
        client_id: new FormControl(app?.uid || ''),
        preserve_client_id: new FormControl(false),
    };
    return new FormGroup(fields);
}
