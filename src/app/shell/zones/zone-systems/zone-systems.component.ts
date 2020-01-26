
import { Component, Input, OnChanges } from '@angular/core';
import { EngineZone, EngineSystem } from '@acaengine/ts-client';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map } from 'rxjs/operators';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';

@Component({
    selector: 'zone-systems',
    templateUrl: './zone-systems.template.html',
    styleUrls: ['./zone-systems.styles.scss']
})
export class ZoneSystemsComponent extends BaseDirective implements OnChanges {
    @Input() public item: EngineZone;
    /** List of systems associated with the zone */
    public system_list: EngineSystem[] = [];
    /** Filter string for the systems */
    public search_str: string;
    /** List of items from an API search */
    public search_results$: Observable<EngineSystem[]>;
    /** Subject holding the value of the search */
    public search$ = new Subject<string>();
    /** Whether systems are being loaded */
    public loading: boolean;

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnInit(): void {
        this.search_results$ = this.search$.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            switchMap(query => {
                this.loading = true;
                return this._service.Systems.query({ q: query, module_id: this.item.id, offset: 0 })
            }),
            catchError((err) => {
                console.error(err);
                return of([]);
            }),
            map((list: EngineSystem[]) => {
                this.loading = false;
                const search = this.search_str.toLowerCase();
                return list.filter((item: any) => item.name.toLowerCase().indexOf(search) >= 0 || (item.email || '').toLowerCase().indexOf(search) >= 0);
            })
        );
        this.search$.next('');
        // Process API results
        this.subscription('search_results', this.search_results$.subscribe(list => this.system_list = list));
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.loadSystems();
        }
    }

    public loadSystems(offset: number = 0) {
        this._service.Systems.query({ offset, zone_id: this.item.id, limit: 500 }).then((list) => this.system_list = list);

    }
}
