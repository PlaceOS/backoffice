import { pattern, required, SchemaFn } from '@angular/forms/signals';
import { type Domain } from '@placeos/ts-client';

export interface DomainFormModel {
    name: string;
    domain: string;
    login_url: string;
    logout_url: string;
    config: Domain['config'];
    internals: Domain['internals'];
    description: string;
    email_domains: readonly string[];
}

export function generateDomainFormModel(domain?: Domain): DomainFormModel {
    return {
        name: domain?.name || '',
        domain: domain?.domain || '',
        login_url: domain?.login_url || '',
        logout_url: domain?.logout_url || '',
        // An object: the API rejects text. 6.x dropped the `''` before it sent it
        config: domain?.config || {},
        internals: domain?.internals || {},
        description: domain?.description || '',
        email_domains: domain?.email_domains || [],
    };
}

export const applyDomainFormSchema: SchemaFn<DomainFormModel> = (path) => {
    required(path.name);
    required(path.domain);
    pattern(path.domain, /^([a-zA-Z0-9._-])+$/);
};
