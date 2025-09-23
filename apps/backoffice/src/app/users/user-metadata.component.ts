import { Component, inject } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';
import { ActiveItemService } from 'apps/backoffice/src/app/common/item.service';
import { MetadataDisplayComponent } from '../ui/metadata-display.component';

@Component({
    selector: 'user-metadata',
    template: `
        @if (item) {
            <metadata-display [item]="item" />
        }
    `,
    styles: [``],
    imports: [MetadataDisplayComponent],
})
export class UserMetadataComponent {
    private _service = inject(ActiveItemService);

    public get item(): PlaceUser {
        return this._service.active_item as any;
    }
}
