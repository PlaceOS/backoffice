import { Component, inject } from '@angular/core';
import { PlaceResource } from '@placeos/ts-client';
import { ActiveItemService } from '../common/item.service';
import { MetadataDisplayComponent } from '../ui/metadata-display.component';

@Component({
    selector: 'system-metadata',
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
export class SystemMetadataComponent {
    private _service = inject(ActiveItemService);

    public get item(): PlaceResource | null {
        return this._service.active_item;
    }
}
