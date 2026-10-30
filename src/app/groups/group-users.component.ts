import { Component, inject } from '@angular/core';
import { GroupMembershipComponent } from './group-membership.component';
import { GroupStateService } from './group-state.service';

@Component({
    selector: 'group-users',
    template: `
        <group-membership [members]="members" [loading]="loading()" />
    `,
    imports: [GroupMembershipComponent],
})
export class GroupUsersComponent {
    private _service = inject(GroupStateService);

    public readonly members = this._service.user_members;
    public readonly loading = this._service.loading;
}
