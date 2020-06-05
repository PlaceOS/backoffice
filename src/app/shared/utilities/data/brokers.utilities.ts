import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlaceMQTTBroker, AuthType } from '@placeos/ts-client';

import { FormDetails } from './systems.utilities';
import { HashMap } from '../types.utilities';

export function generateBrokerFormFields(broker: PlaceMQTTBroker): FormDetails {
    if (!broker) {
        throw Error('No MQTT Broker passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        name: new FormControl(broker.name || '', [Validators.required]),
        description: new FormControl(broker.description),
        auth_type: new FormControl(broker.auth_type),
        host: new FormControl(broker.host, [Validators.required]),
        port: new FormControl(broker.port, [Validators.required]),
        tls: new FormControl(broker.tls),
        username: new FormControl(
            broker.username,
            broker.auth_type === AuthType.UserPassword ? [Validators.required] : []
        ),
        password: new FormControl(
            broker.password,
            broker.auth_type === AuthType.UserPassword ? [Validators.required] : []
        ),
        certificate: new FormControl(
            broker.certificate,
            broker.auth_type === AuthType.Certificate ? [Validators.required] : []
        ),
        secret: new FormControl(broker.secret),
        filters: new FormControl(broker.filters),
    };
    const subscriptions = [];
    for (const key in fields) {
        if (fields[key] && key.indexOf('confirm') < 0) {
            subscriptions.push(
                fields[key].valueChanges.subscribe((value) =>
                    broker.storePendingChange(key as any, value)
                )
            );
        }
    }
    subscriptions.push(
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
        })
    );
    return {
        form: new FormGroup(fields),
        subscriptions,
    };
}
