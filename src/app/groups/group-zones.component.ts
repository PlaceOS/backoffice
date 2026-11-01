import { Component, inject } from '@angular/core';
import { GroupMembershipComponent } from './group-membership.component';
import { GroupStateService } from './group-state.service';

@Component({
    selector: 'group-zones',
    template: `
        <group-membership [members]="members" [loading]="loading()" />
    `,
    imports: [GroupMembershipComponent],
})
export class GroupZonesComponent {
    private _service = inject(GroupStateService);

    public readonly members = this._service.zone_members;
    public readonly loading = this._service.loading;
}
