import { AuthType, PlaceMQTTBroker } from '@placeos/ts-client';
import { required, SchemaFn } from '@angular/forms/signals';

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
    broker: Partial<PlaceMQTTBroker> = {},
): BrokerFormModel {
    const auth_type = broker.auth_type ?? AuthType.NoAuth;
    return {
        name: broker.name || '',
        description: broker.description || '',
        auth_type,
        host: broker.host || '',
        port: broker.port || 0,
        tls: !!broker.tls,
        username: broker.username || '',
        password: broker.password || '',
        certificate: broker.certificate || '',
        filters: broker.filters || [],
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
