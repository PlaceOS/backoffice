import { Component } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';
import { ActiveItemService } from 'apps/backoffice/src/app/common/item.service';

@Component({
    selector: 'user-metadata',
    template: `
        <div class="p-4" *ngIf="item">
            <metadata-display [item]="item"></metadata-display>
        </div>
    `,
    styles: [``],
})
export class UserMetadataComponent {
    public get item(): PlaceUser {
        return this._service.active_item as any;
    }

    constructor(private _service: ActiveItemService) {}
}
