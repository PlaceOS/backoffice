import { computed, Injectable, resource, signal } from '@angular/core';
import { PlaceDomain, queryDomains } from '@placeos/ts-client';

export interface EmailTemplate {
    id: string;
    subject: string;
    zone_id: string;
    category: 'internal' | 'external';
    reply_to?: string;
    from?: string;
    trigger: string;
    html: string;
    text: string;
    preview_url: string;
    created_at: number;
    updated_at: number;
}

export interface EmailTemplateDefinition {
    id: string;
    name: string;
    description: string;
    fields: { name: string; description: string }[];
    name_details: [string, string];
}

export interface EmailTemplatesFilters {
    category?: 'internal' | 'external';
}

@Injectable({
    providedIn: 'root',
})
export class EmailStateService {
    private _loading = signal(false);
    private _change = signal(0);
    private _domain = signal<PlaceDomain>(null);

    public readonly template_definitions = signal(
        [] as EmailTemplateDefinition[],
    ).asReadonly();
    public readonly templates = signal([] as EmailTemplate[]).asReadonly();
    public readonly domain = this._domain.asReadonly();
    public readonly loading = this._loading.asReadonly();

    private readonly _domain_list = resource({
        loader: async () =>
            queryDomains({ limit: 100 })
                .then((r) => r.data)
                .catch(() => [] as PlaceDomain[]),
    });

    public readonly domain_list = computed(
        () => this._domain_list.value() || [],
    );

    public setDomain(domain: PlaceDomain) {
        this._domain.set(domain);
    }

    public getDomain() {
        return this._domain();
    }

    public async loadTemplate(_id: string) {
        const domain = this.getDomain();
        if (!domain) return;
        const template = {} as EmailTemplate;
        if (!template) return;
        return {
            ...template,
            subject: template.subject || '',
            html: template.html || '',
            text: template.text || '',
        };
    }

    public async saveTemplate(template: EmailTemplate) {
        const domain = this.getDomain();
        if (!domain) return;
        const _details = {
            ...template,
            subject: template.subject || '',
            html: template.html || '',
            text: template.text || '',
        };
        // return updateEmailTemplate(domain.id, template.id, details);
        this._change.set(Date.now());
    }
}
