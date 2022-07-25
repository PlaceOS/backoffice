import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlaceMQTTBroker, AuthType } from '@placeos/ts-client';

export function generateBrokerFormFields(broker?: PlaceMQTTBroker) {
    const auth_type = broker.auth_type ?? AuthType.NoAuth;
    const fields = {
        name: new FormControl(broker.name || '', [Validators.required]),
        description: new FormControl(broker.description),
        auth_type: new FormControl(auth_type),
        host: new FormControl(broker.host, [Validators.required]),
        port: new FormControl(broker.port, [Validators.required]),
        tls: new FormControl(!!broker.tls),
        username: new FormControl(
            broker.username,
            auth_type === AuthType.UserPassword ? [Validators.required] : []
        ),
        password: new FormControl(
            broker.password,
            auth_type === AuthType.UserPassword ? [Validators.required] : []
        ),
        certificate: new FormControl(
            broker.certificate,
            auth_type === AuthType.Certificate ? [Validators.required] : []
        ),
        filters: new FormControl(broker.filters),
    };
    fields.auth_type.valueChanges.subscribe((type) => {
        switch (type) {
            case AuthType.Certificate:
                fields.username.setValidators([]);
                fields.password.setValidators([]);
                fields.certificate.setValidators([Validators.required]);
            case AuthType.UserPassword:
                fields.username.setValidators([Validators.required]);
                fields.password.setValidators([Validators.required]);
                fields.certificate.setValidators([]);
            default:
                fields.username.setValidators([]);
                fields.password.setValidators([]);
                fields.certificate.setValidators([]);
        }
        fields.username.updateValueAndValidity();
        fields.password.updateValueAndValidity();
        fields.certificate.updateValueAndValidity();
    });
    return new FormGroup(fields);
}
