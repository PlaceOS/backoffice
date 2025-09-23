import { Component, inject } from '@angular/core';
import { PlaceZone } from '@placeos/ts-client';
import { ActiveItemService } from 'apps/backoffice/src/app/common/item.service';
import { MetadataDisplayComponent } from '../ui/metadata-display.component';

@Component({
    selector: 'zone-metadata',
    template: `
        @if (item) {
            <metadata-display [item]="item" />
        }
    `,
    styles: [``],
    imports: [MetadataDisplayComponent],
})
export class ZoneMetadataComponent {
    private _service = inject(ActiveItemService);

    public get item(): PlaceZone {
        return this._service.active_item as any;
    }
}
