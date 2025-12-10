import { Component, inject } from '@angular/core';
import { PlaceZone } from '@placeos/ts-client';
import { ActiveItemService } from '../common/item.service';
import { MetadataDisplayComponent } from '../ui/metadata-display.component';

@Component({
    selector: 'zone-metadata',
    template: `
        <div class="p-4">
            @if (item) {
                <metadata-display [item]="item" />
            }
        </div>
    `,
    styles: [``],
    imports: [MetadataDisplayComponent],
})
export class ZoneMetadataComponent {
    private _service = inject(ActiveItemService);

    public get item(): PlaceZone {
        const active_item = this._service.active_item;
        return (active_item || { id: '' }) as PlaceZone;
    }
}
