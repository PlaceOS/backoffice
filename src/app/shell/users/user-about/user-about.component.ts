
import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../../shared/globals/base.component';
import { IUser } from '../../../services/data/users.service';

@Component({
    selector: 'user-about',
    templateUrl: './user-about.template.html',
    styleUrls: ['./user-about.styles.scss']
})
export class UserAboutComponent extends BaseComponent {
    @Input() public item: IUser;

}
