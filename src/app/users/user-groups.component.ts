import { Component, inject } from '@angular/core';
import { GroupMembershipComponent } from '../groups/group-membership.component';
import { UsersStateService } from './users-state.service';

@Component({
    selector: 'user-groups',
    template: `
        <group-membership [members]="members" [loading]="loading()" />
    `,
    imports: [GroupMembershipComponent],
})
export class UserGroupsComponent {
    private _service = inject(UsersStateService);

    public readonly members = this._service.group_members;
    public readonly loading = this._service.loading;
}
