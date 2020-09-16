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

    public get item(): PlaceRepository {
        return this._service.active_item as any;
    }

    constructor(protected _service: ActiveItemService) {
        super();
    }

    protected loadValues() {
        const query: any = { offset: 0 };
        if (this.item.type === PlaceRepositoryType.Driver) {
            // Get driver count for repository
            listRepositoryDrivers(this.item.id, query).subscribe(
                (list) => (this.driver_count = list.length)
            );
        } else {
            this.driver_count = -1;
        }
    }
}
