import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { EngineModule, EngineSystem } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { Subject, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map } from 'rxjs/operators';

@Component({
    selector: 'device-systems',
    templateUrl: './device-systems.template.html',
    styleUrls: ['./device-systems.styles.scss']
})
export class DeviceSystemsComponent extends BaseDirective implements OnChanges, OnInit {
    @Input() public item: EngineModule;
    /** Filter string for the system list */
    public search_str: string;
    /** List of systems associated with the module */
    public system_list: EngineSystem[];
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
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item', item => {
                this.item = item;
                this.loadSystems();
            })
        );
        this.search_results$ = this.search$.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            switchMap(query => {
                this.loading = true;
                return this._service.Systems.query({
                    q: query,
                    module_id: this.item.id,
                    offset: 0
                });
            }),
            catchError(err => {
                console.error(err);
                return of([]);
            }),
            map((list: EngineSystem[]) => {
                this.loading = false;
                const search = this.search_str.toLowerCase();
                return list.filter(
                    (item: any) =>
                        item.name.toLowerCase().indexOf(search) >= 0 ||
                        (item.email || '').toLowerCase().indexOf(search) >= 0
                );
            })
        );
        // Process API results
        this.subscription(
            'search_results',
            this.search_results$.subscribe(list => (this.system_list = list))
        );
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.loadSystems();
        }
    }

    public loadSystems(offset: number = 0) {
        if (!this.item) { return; }
        this._service.Systems.query({ module_id: this.item.id, offset }).then(
            list => {
                this.system_list = list;
            },
            () => null
        );
    }
}
