
import { Component, Input, OnInit } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';

@Component({
    selector: 'user-about',
    templateUrl: './user-about.template.html',
    styleUrls: ['./user-about.styles.scss']
})
export class UserAboutComponent extends BaseClass {
    @Input() public item: PlaceUser;
}
