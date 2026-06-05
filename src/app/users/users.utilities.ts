import { AbstractControl } from '@angular/forms';
import {
    disabled,
    email,
    required,
    SchemaFn,
    validate,
} from '@angular/forms/signals';
import { PlaceUser } from '@placeos/ts-client';
import { isValidUrl } from '../common/validation';

export function validateMatch(name: string) {
    return (control: AbstractControl) => {
        const group = control.parent;
        if (group) {
            const value = group.controls[name]
                ? group.controls[name].value
                : '';
            return value !== control.value ? { match: true } : null;
        }
        return null;
    };
}

export interface UserFormModel {
    authority_id: string;
    first_name: string;
    last_name: string;
    email: string;
    staff_id: string;
    support: boolean;
    sys_admin: boolean;
    locatable: boolean;
    groups: string[];
    password: string;
    confirm_password: string;
    card_number: string;
    image: string;
}

export function generateUserFormModel(user: PlaceUser): UserFormModel {
    return {
        authority_id: user?.authority_id || '',
        first_name: user?.first_name || user?.name || '',
        last_name: user?.last_name || '',
        email: user?.email || '',
        staff_id: user?.staff_id || '',
        support: user?.support || false,
        sys_admin: user?.sys_admin || false,
        locatable: user?.locatable || false,
        groups: user?.groups || [],
        password: '',
        confirm_password: '',
        card_number: user?.card_number || '',
        image: user?.image || '',
    };
}

export function userFormSchema(user?: PlaceUser): SchemaFn<UserFormModel> {
    return (path) => {
        required(path.authority_id);
        required(path.first_name);
        required(path.last_name);
        required(path.email);
        email(path.email);
        required(path.password, {
            when() {
                return !user?.id;
            },
        });
        validate(path.confirm_password, ({ value, valueOf }) =>
            valueOf(path.password) !== value()
                ? { kind: 'match', message: 'Passwords must match' }
                : undefined,
        );
        validate(path.image, ({ value }) =>
            isValidUrl(value())
                ? undefined
                : { kind: 'url', message: 'Invalid URL' },
        );
        disabled(path.authority_id, () => !!user?.id);
    };
}
