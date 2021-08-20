import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlaceApplication } from '@placeos/ts-client';

import { HashMap } from 'apps/backoffice/src/app/common/types';

export const URL_PATTERN =
    '^((http|ftp|ws)s?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '(localhost)|' + // Localhost
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z{}\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-zA-Z{}\\d%_.~+=-]*)?' +
    '(\\#[-a-zA-Z{}/\\d_]*)?' +
    '(\\?[;&a-zA-Z{}\\d%_.~+=-]*)?$'; // query string;

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
            Validators.pattern(URL_PATTERN)
        ),
    };
    return new FormGroup(fields);
}
