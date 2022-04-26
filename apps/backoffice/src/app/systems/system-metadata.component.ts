import { Component } from '@angular/core';
import { PlaceSystem } from '@placeos/ts-client';
import { ActiveItemService } from 'apps/backoffice/src/app/common/item.service';

@Component({
    selector: 'system-metadata',
    template: `
        <div class="p-4" *ngIf="item">
            <metadata-display [item]="item"></metadata-display>
        </div>
    `,
    styles: [``],
})
export class SystemMetadataComponent {
    public get item(): PlaceSystem {
        return this._service.active_item as any;
    }

    constructor(private _service: ActiveItemService) {}
}
