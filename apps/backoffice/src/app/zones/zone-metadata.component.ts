import { Component, inject } from '@angular/core';
import { PlaceZone } from '@placeos/ts-client';
import { ActiveItemService } from 'apps/backoffice/src/app/common/item.service';

@Component({
    selector: 'zone-metadata',
    template: `
        @if (item) {
            <metadata-display [item]="item" />
        }
    `,
    styles: [``],
    standalone: false,
})
export class ZoneMetadataComponent {
    private _service = inject(ActiveItemService);

    public get item(): PlaceZone {
        return this._service.active_item as any;
    }
}
