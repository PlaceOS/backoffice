import { Component, inject } from '@angular/core';
import { PlaceResource } from '@placeos/ts-client';
import { ActiveItemService } from '../common/item.service';
import { MetadataDisplayComponent } from './metadata-display.component';

/** Metadata tab of the active item */
@Component({
    selector: 'item-metadata',
    template: `
        <div class="h-full w-full p-4">
            @if (item) {
                <metadata-display [item]="item" />
            }
        </div>
    `,
    imports: [MetadataDisplayComponent],
})
export class ItemMetadataComponent {
    private _service = inject(ActiveItemService);

    public get item(): PlaceResource | null {
        return this._service.active_item;
    }
}
