import { required, SchemaFn } from '@angular/forms/signals';
import { type Broker } from '@placeos/ts-client';
import { AuthType } from '@placeos/ts-client/compat';

export interface BrokerFormModel {
    name: string;
    description: string;
    auth_type: AuthType;
    host: string;
    port: number;
    tls: boolean;
    username: string;
    password: string;
    certificate: string;
    filters: string[];
}

export function generateBrokerFormModel(
    broker: Partial<Broker> = {},
): BrokerFormModel {
    // A new broker uses the 6.x defaults: user and password on port 1883
    const auth_type = broker.auth_type ?? AuthType.UserPassword;
    return {
        name: broker.name || '',
        description: broker.description || '',
        auth_type,
        host: broker.host || '',
        port: broker.port || 1883,
        tls: !!broker.tls,
        username: broker.username || '',
        password: broker.password || '',
        certificate: broker.certificate || '',
        filters: [...(broker.filters || [])],
    };
}

export const applyBrokerFormSchema: SchemaFn<BrokerFormModel> = (path) => {
    required(path.name);
    required(path.host);
    required(path.port);
    required(path.username, {
        when({ valueOf }) {
            return valueOf(path.auth_type) === AuthType.UserPassword;
        },
    });
    required(path.password, {
        when({ valueOf }) {
            return valueOf(path.auth_type) === AuthType.UserPassword;
        },
    });
    required(path.certificate, {
        when({ valueOf }) {
            return valueOf(path.auth_type) === AuthType.Certificate;
        },
    });
};
