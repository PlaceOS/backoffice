import {
    FormControl,
    FormGroup,
    Validators,
    AbstractControl,
} from '@angular/forms';
import { PlaceUser } from '@placeos/ts-client';

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

export function generateUserFormFields(user: PlaceUser) {
    const fields = {
        authority_id: new FormControl(user?.authority_id || '', [
            Validators.required,
        ]),
        first_name: new FormControl(user?.first_name || user?.name || '', [
            Validators.required,
        ]),
        last_name: new FormControl(user?.last_name || '', [Validators.required]),
        email: new FormControl(user?.email || '', [
            Validators.email,
            Validators.required,
        ]),
        staff_id: new FormControl(user?.staff_id || ''),
        support: new FormControl(user?.support || false),
        sys_admin: new FormControl(user?.sys_admin || false),
        groups: new FormControl(user?.groups || []),
        password: new FormControl(
            '',
            !user?.id ? [Validators.required] : undefined
        ),
        confirm_password: new FormControl('', [validateMatch('password')]),
        card_number: new FormControl(user?.card_number || ''),
    };
    if (user?.id) {
        fields.authority_id.disable();
    }
    fields.password.valueChanges.subscribe(() => {
        fields.confirm_password.updateValueAndValidity();
    });
    return new FormGroup(fields);
}
