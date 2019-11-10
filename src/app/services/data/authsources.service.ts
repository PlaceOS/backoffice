
import { Injectable } from '@angular/core';
import { ComposerService } from '@acaprojects/ngx-composer';
import { EngineAuthSourcesService, EngineAuthSource } from '@acaprojects/ts-composer';
import { BehaviorSubject } from 'rxjs';

import { FilterFn } from 'src/app/shared/utilities/types.utilities';
import { EngineResourceQueryOptions } from '@acaprojects/ts-composer/dist/types/http/services/resources/resources.interface';

type ServiceItem = EngineAuthSource

@Injectable({
    providedIn: 'root'
})
export class BackofficeAuthSourcesService extends EngineAuthSourcesService {
    /** Name for a single user */
    readonly singular: string = 'auth source';
    /** Behavior subject with the currently available list of users */
    readonly listing = new BehaviorSubject<ServiceItem[]>([]);
    /** Default method for filtering the available list */
    private _filter_fn: FilterFn<ServiceItem> = (_) => true;
    /** Application Service */
    public parent: any;
    readonly can_create: boolean = true;
    readonly can_edit: boolean = true;

    constructor(private _composer: ComposerService) {
        super(undefined);
        const sub = this._composer.initialised.subscribe((state) => {
            if (state) {
                this.http = this._composer.http;
                sub.unsubscribe();
            }
        });
    }

    /**
     * Get the available list of zones
     * @param predicate Function to filter the zone list on
     */
    public list(predicate: FilterFn<ServiceItem> = this._filter_fn): ServiceItem[] {
        return (this.listing.getValue() || []).filter(predicate);
    }

    public query(query_params?: EngineResourceQueryOptions): Promise<ServiceItem[]> {
        return new Promise((resolve, reject) => {
            super.query(query_params).then((list) => {
                const old_list = this.list();
                const new_list = [...old_list, ...list];
                for (const item of new_list) {
                    const found = new_list.findIndex(i => i.id === item.id && i !== item);
                    if (found >= 0) {
                        new_list.splice(new_list.indexOf(item), 1);
                    }
                }
                this.listing.next(new_list);
                this.listing.next(new_list);
                resolve(list);
            }, e => reject(e));
        });
    }

}
