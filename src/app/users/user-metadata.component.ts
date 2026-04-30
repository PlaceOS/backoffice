import { Component, inject } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';
import { ActiveItemService } from '../common/item.service';
import { MetadataDisplayComponent } from '../ui/metadata-display.component';

@Component({
    selector: 'user-metadata',
    template: `
        <div class="h-full w-full p-4">
            @if (item) {
                <metadata-display [item]="item" />
            }
        </div>
    `,
    styles: [``],
    imports: [MetadataDisplayComponent],
})
export class UserMetadataComponent {
    private _service = inject(ActiveItemService);

    public get item(): PlaceUser {
        const active_item = this._service.active_item;
        return (active_item || { id: '' }) as PlaceUser;
    }
}
