import { Injectable } from '@angular/core';
import { PlaceDomain, queryDomains } from '@placeos/ts-client';
import { BehaviorSubject, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

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
}

export interface EmailTemplatesFilters {
    category?: 'internal' | 'external';
}

@Injectable({
    providedIn: 'root',
})
export class EmailStateService {
    private _loading = new BehaviorSubject<boolean>(false);
    private _change = new BehaviorSubject<number>(0);
    private _domain = new BehaviorSubject<PlaceDomain>(null);

    public readonly template_definitions = of([] as EmailTemplateDefinition[]);
    public readonly templates = of([] as EmailTemplate[]);
    public readonly domain = this._domain.asObservable();
    public readonly loading = this._loading.asObservable();

    public readonly domain_list = queryDomains({ limit: 100 }).pipe(
        map((r) => r.data),
        shareReplay(1)
    );

    constructor() {}

    public setDomain(domain: PlaceDomain) {
        this._domain.next(domain);
    }

    public getDomain() {
        return this._domain.getValue();
    }

    public async loadTemplate(id: string) {
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
        const details = {
            ...template,
            subject: template.subject || '',
            html: template.html || '',
            text: template.text || '',
        };
        // return updateEmailTemplate(domain.id, template.id, details).toPromise();
    }
}
