import { required, SchemaFn, validate } from '@angular/forms/signals';
import { type Application } from '@placeos/ts-client';
import { isValidUrl } from '../common/validation';

export interface ApplicationFormModel {
    name: string;
    scopes: string;
    subsystems: readonly string[];
    skip_authorization: boolean;
    redirect_uri: string;
    client_id: string;
    preserve_client_id: boolean;
}

export function generateApplicationFormModel(
    app?: Application,
): ApplicationFormModel {
    return {
        name: app?.name || '',
        scopes: app?.scopes || '',
        subsystems: app?.subsystems || [],
        skip_authorization: !!app?.skip_authorization,
        redirect_uri: app?.redirect_uri || '',
        client_id: app?.uid || '',
        // The API has no such field, so it is not saved. It starts off for each form
        preserve_client_id: false,
    };
}

export const applyApplicationFormSchema: SchemaFn<ApplicationFormModel> = (
    path,
) => {
    required(path.name);
    validate(path.redirect_uri, ({ value }) =>
        isValidUrl(value())
            ? undefined
            : { kind: 'url', message: 'Invalid URL' },
    );
};
