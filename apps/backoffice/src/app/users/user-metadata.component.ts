import { Component, inject } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';
import { ActiveItemService } from 'apps/backoffice/src/app/common/item.service';

@Component({
    selector: 'user-metadata',
    template: `
        @if (item) {
            <metadata-display [item]="item"></metadata-display>
        }
    `,
    styles: [``],
    standalone: false,
})
export class UserMetadataComponent {
    private _service = inject(ActiveItemService);

    public get item(): PlaceUser {
        return this._service.active_item as any;
    }
}
