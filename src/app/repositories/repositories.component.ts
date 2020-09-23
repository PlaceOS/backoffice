import { Component } from '@angular/core';
import { PlaceRepository, PlaceRepositoryType, listRepositoryDrivers } from '@placeos/ts-client';

import { BaseClass } from '../common/base.class';
import { ActiveItemService } from '../common/item.service';

@Component({
    selector: 'app-repositories',
    templateUrl: './repositories.template.html',
    styleUrls: ['./repositories.styles.scss'],
})
export class RepositoriesComponent extends BaseClass {
    /** Number of drivers in the repository */
    public driver_count: number;

    public readonly name = 'repositories';

    public readonly show_options = this._service.show_options;

    constructor(protected _service: ActiveItemService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadValues(item as any);
        }));
    }

    protected loadValues(item: PlaceRepository) {
        if (!item) return;
        const query: any = { offset: 0 };
        if (item.type === PlaceRepositoryType.Driver) {
            this.driver_count = 0;
            // Get driver count for repository
            listRepositoryDrivers(item.id, query).subscribe(
                (list) => (this.driver_count = list.length)
            );
        } else {
            this.driver_count = -1;
        }
    }
}
