import { Component } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';
import { ActiveItemService } from 'apps/backoffice/src/app/common/item.service';

@Component({
    selector: 'user-metadata',
    template: `
        <metadata-display  *ngIf="item" [item]="item"></metadata-display>
    `,
    styles: [``],
})
export class UserMetadataComponent {
    public get item(): PlaceUser {
        return this._service.active_item as any;
    }

    constructor(private _service: ActiveItemService) {}
}
