import { PlaceApplication } from '@placeos/ts-client';
import { required, SchemaFn, validate } from '@angular/forms/signals';
import { isValidUrl } from '../common/validation';

export interface ApplicationFormModel {
    name: string;
    scopes: string;
    subsystems: string[];
    skip_authorization: boolean;
    redirect_uri: string;
    client_id: string;
    preserve_client_id: boolean;
}

export function generateApplicationFormModel(
    app?: PlaceApplication,
): ApplicationFormModel {
    const application = app as PlaceApplication & { subsystems?: string[] };
    return {
        name: app?.name || '',
        scopes: app?.scopes || '',
        subsystems: application?.subsystems || [],
        skip_authorization: !!app?.skip_authorization,
        redirect_uri: app?.redirect_uri || '',
        client_id: app?.uid || '',
        preserve_client_id: false,
    };
}

export const applyApplicationFormSchema: SchemaFn<ApplicationFormModel> = (
    path,
) => {
    required(path.name);
    validate(path.redirect_uri, ({ value }) =>
        isValidUrl(value()) ? undefined : { kind: 'url', message: 'Invalid URL' },
    );
};
