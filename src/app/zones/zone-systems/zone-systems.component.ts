import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PlaceZone, PlaceSystem, querySystems } from '@placeos/ts-client';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map } from 'rxjs/operators';

import { BaseClass } from 'src/app/common/base.class';
import { ActiveItemService } from 'src/app/common/item.service';

@Component({
    selector: 'zone-systems',
    templateUrl: './zone-systems.template.html',
    styleUrls: ['./zone-systems.styles.scss'],
})
export class ZoneSystemsComponent extends BaseClass implements OnInit {
    /** List of systems associated with the zone */
    public system_list: PlaceSystem[] = [];
    /** Filter string for the systems */
    public search_str: string;
    /** List of items from an API search */
    public search_results$: Observable<PlaceSystem[]>;
    /** Subject holding the value of the search */
    public search$ = new Subject<string>();
    /** Whether systems are being loaded */
    public loading: boolean;

    public get item(): PlaceZone {
        return this._service.active_item as any;
    }

    constructor(private _service: ActiveItemService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadSystems();
        }));
        this.search_results$ = this.search$.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            switchMap((query) => {
                this.loading = true;
                return querySystems({
                    q: query,
                    module_id: this.item.id,
                    offset: 0,
                });
            }),
            catchError((err) => {
                console.error(err);
                return of([]);
            }),
            map((list: PlaceSystem[]) => {
                this.loading = false;
                const search = this.search_str.toLowerCase();
                return list.filter(
                    (item: any) =>
                        item.name.toLowerCase().indexOf(search) >= 0 ||
                        (item.email || '').toLowerCase().indexOf(search) >= 0
                );
            })
        );
        this.search$.next('');
        // Process API results
        this.subscription(
            'search_results',
            this.search_results$.subscribe((list) => (this.system_list = list))
        );
    }

    public loadSystems(offset: number = 0) {
        querySystems({ offset, zone_id: this.item.id, limit: 500 })
            .pipe(map((resp) => resp.data))
            .subscribe((list) => (this.system_list = list));
    }
}
