import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PlaceZone, queryZones } from '@placeos/ts-client';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map } from 'rxjs/operators';

import { BaseClass } from 'src/app/common/base.class';
import { ActiveItemService } from 'src/app/common/item.service';

@Component({
    selector: 'zone-children',
    templateUrl: './zone-children.template.html',
    styleUrls: ['./zone-children.styles.scss'],
})
export class ZoneChildrenComponent extends BaseClass implements OnInit {
    /** List of children associated with the zone */
    public zone_list: PlaceZone[] = [];
    /** Filter string for the children */
    public search_str: string;
    /** List of items from an API search */
    public search_results$: Observable<PlaceZone[]>;
    /** Subject holding the value of the search */
    public search$ = new Subject<string>();
    /** Whether children are being loaded */
    public loading: boolean;

    public get item(): PlaceZone {
        return this._service.active_item as any;
    }

    constructor(private _service: ActiveItemService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadChildren();
        }));
        this.search_results$ = this.search$.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            switchMap((query) => {
                this.loading = true;
                return queryZones({
                    q: query,
                    parent: this.item.id,
                    offset: 0,
                });
            }),
            catchError((err) => {
                console.error(err);
                return of([]);
            }),
            map((list: PlaceZone[]) => {
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
            this.search_results$.subscribe((list) => (this.zone_list = list))
        );
    }

    public loadChildren(offset: number = 0) {
        queryZones({ offset, parent: this.item.id, limit: 500 })
            .pipe(map((resp) => resp.data))
            .subscribe((list) => (this.zone_list = list));
    }
}
