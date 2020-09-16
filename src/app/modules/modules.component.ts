import { Component } from '@angular/core';
import { querySystems, PlaceModule } from '@placeos/ts-client';

import { ActiveItemService } from '../common/item.service';
import { BaseClass } from '../common/base.class';

@Component({
    selector: 'app-modules',
    templateUrl: './modules.template.html',
    styleUrls: ['./modules.styles.scss'],
})
export class ModulesComponent extends BaseClass {
    /** Number of systems for the active device */
    public system_count: number;
    /** Whether the list of devices should show only the disconnected devices */
    public only_disconnected: boolean;

    public readonly name = 'modules';

    constructor(private _service: ActiveItemService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadValues(item as any);
        }));
    }

    protected async loadValues(item: PlaceModule) {
        if (!item) return;
        const query: any = { offset: 0, limit: 1, module_id: item.id };
        // Get system count
        this.system_count = (await querySystems(query).toPromise()).total;
    }
}
