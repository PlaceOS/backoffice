import { Component } from '@angular/core';
import { PlaceZone } from '@placeos/ts-client';
import { ActiveItemService } from 'apps/backoffice/src/app/common/item.service';

@Component({
    selector: 'zone-metadata',
    template: `
        <metadata-display *ngIf="item" [item]="item"></metadata-display>
    `,
    styles: [``],
})
export class ZoneMetadataComponent {
    public get item(): PlaceZone {
        return this._service.active_item as any;
    }

    constructor(private _service: ActiveItemService) {}
}
