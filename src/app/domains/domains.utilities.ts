import { PlaceDomain } from '@placeos/ts-client';
import { pattern, required, SchemaFn } from '@angular/forms/signals';

export interface DomainFormModel {
    name: string;
    domain: string;
    login_url: string;
    logout_url: string;
    config: string | Record<string, unknown>;
    internals: string | Record<string, unknown>;
    description: string;
    email_domains: string[];
}

export function generateDomainFormModel(domain?: PlaceDomain): DomainFormModel {
    return {
        name: domain?.name || '',
        domain: domain?.domain || '',
        login_url: domain?.login_url || '',
        logout_url: domain?.logout_url || '',
        config: domain?.config || '',
        internals: domain?.internals || '',
        description: domain?.description || '',
        email_domains: domain?.email_domains || [],
    };
}

export const applyDomainFormSchema: SchemaFn<DomainFormModel> = (path) => {
    required(path.name);
    required(path.domain);
    pattern(path.domain, /^([a-zA-Z0-9._-])+$/);
};
