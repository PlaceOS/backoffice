import { Injectable, WritableSignal, signal } from '@angular/core';
import { PlaceDomain, authority, queryDomains } from '@placeos/ts-client';

export type AdminSortState = [string, boolean];

@Injectable({
    providedIn: 'root',
})
export class AdminDataService {
    private readonly _domain_list = signal<PlaceDomain[]>([]);
    private readonly _loading_domains = signal(false);
    private readonly _domain_error = signal<unknown>(null);
    private readonly _selected_domains = new Map<
        string,
        WritableSignal<PlaceDomain | null>
    >();
    private readonly _filters = new Map<string, WritableSignal<string>>();
    private readonly _sorts = new Map<string, WritableSignal<AdminSortState>>();
    private _domain_request: Promise<PlaceDomain[]> | null = null;

    public readonly domain_list = this._domain_list.asReadonly();
    public readonly loading_domains = this._loading_domains.asReadonly();
    public readonly domain_error = this._domain_error.asReadonly();

    public selectedDomain(key: string): WritableSignal<PlaceDomain | null> {
        let selected = this._selected_domains.get(key);
        if (!selected) {
            selected = signal<PlaceDomain | null>(null);
            this._selected_domains.set(key, selected);
        }
        return selected;
    }

    public filter(key: string): WritableSignal<string> {
        let filter = this._filters.get(key);
        if (!filter) {
            filter = signal('');
            this._filters.set(key, filter);
        }
        return filter;
    }

    public sort(key: string): WritableSignal<AdminSortState> {
        let sort = this._sorts.get(key);
        if (!sort) {
            sort = signal<AdminSortState>(['', false]);
            this._sorts.set(key, sort);
        }
        return sort;
    }

    public sortBy(key: string, new_field: string) {
        const sort = this.sort(key);
        const [field, asc] = sort();
        if (field === new_field) {
            sort.set(asc ? ['', false] : [new_field, true]);
        } else {
            sort.set([new_field, false]);
        }
    }

    public async loadDomains(limit = 500): Promise<PlaceDomain[]> {
        if (this._domain_list().length) return this._domain_list();
        if (this._domain_request) return this._domain_request;
        this._loading_domains.set(true);
        this._domain_error.set(null);
        this._domain_request = queryDomains({ limit })
            .then((response) => response.data || [])
            .catch((error) => {
                this._domain_error.set(error);
                return [] as PlaceDomain[];
            })
            .then((domains) => {
                this._domain_list.set(domains);
                return domains;
            })
            .finally(() => {
                this._loading_domains.set(false);
                this._domain_request = null;
            });
        return this._domain_request;
    }

    public async selectDefaultDomain(
        key: string,
        options: { fallbackFirst?: boolean; limit?: number } = {},
    ): Promise<PlaceDomain | null> {
        const selected = this.selectedDomain(key);
        const domains = await this.loadDomains(options.limit);
        const active_selection = selected();
        if (
            active_selection &&
            domains.some((domain) => domain.id === active_selection.id)
        ) {
            return active_selection;
        }
        const current = authority();
        const match = domains.find((domain) => domain.id === current.id);
        const next = match || (options.fallbackFirst ? domains[0] : null);
        selected.set(next || null);
        return selected();
    }

    public setDomain(key: string, domain: PlaceDomain | null) {
        this.selectedDomain(key).set(domain);
    }

    public replaceDomain(domain: PlaceDomain) {
        this._domain_list.update((list) =>
            list.map((item) => (item.id === domain.id ? domain : item)),
        );
        for (const selected of this._selected_domains.values()) {
            if (selected()?.id === domain.id) selected.set(domain);
        }
    }
}
