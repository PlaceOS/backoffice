import { Component, inject } from '@angular/core';
import { PlaceSystem } from '@placeos/ts-client';
import { ActiveItemService } from 'apps/backoffice/src/app/common/item.service';

@Component({
    selector: 'system-metadata',
    template: `
        @if (item) {
            <metadata-display [item]="item"></metadata-display>
        }
    `,
    styles: [``],
    standalone: false,
})
export class SystemMetadataComponent {
    private _service = inject(ActiveItemService);

    public get item(): PlaceSystem {
        return this._service.active_item as any;
    }
}
