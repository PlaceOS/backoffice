import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PlaceModule, PlaceSystem, querySystems } from '@placeos/ts-client';
import { Subject, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map } from 'rxjs/operators';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';

@Component({
    selector: 'module-systems',
    templateUrl: './module-systems.template.html',
    styleUrls: ['./module-systems.styles.scss'],
})
export class ModuleSystemsComponent extends BaseDirective implements OnChanges, OnInit {
    @Input() public item: PlaceModule;
    /** Filter string for the system list */
    public search_str: string;
    /** List of systems associated with the module */
    public system_list: PlaceSystem[];
    /** List of items from an API search */
    public search_results$: Observable<PlaceSystem[]>;
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
            this._service.listen('BACKOFFICE.active_item').subscribe((item) => {
                this.item = item;
                this.loadSystems();
            })
        );
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
        // Process API results
        this.subscription(
            'search_results',
            this.search_results$.subscribe((list) => (this.system_list = list))
        );
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.loadSystems();
        }
    }

    public async loadSystems(offset: number = 0) {
        if (!this.item) {
            return;
        }
        this.system_list = await querySystems({ module_id: this.item.id, offset })
            .pipe(map((resp) => resp.data))
            .toPromise();
    }
}
