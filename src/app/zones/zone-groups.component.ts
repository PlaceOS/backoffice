import { Component, inject } from '@angular/core';
import { GroupMembershipComponent } from '../groups/group-membership.component';
import { ZonesStateService } from './zones-state.service';

@Component({
    selector: 'zone-groups',
    template: `
        <group-membership [members]="members" [loading]="loading()" />
    `,
    imports: [GroupMembershipComponent],
})
export class ZoneGroupsComponent {
    private _service = inject(ZonesStateService);

    public readonly members = this._service.group_members;
    public readonly loading = this._service.loading;
}
