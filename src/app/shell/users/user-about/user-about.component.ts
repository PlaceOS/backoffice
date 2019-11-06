
import { Component, Input } from '@angular/core';
import { EngineUser } from '@acaprojects/ts-composer';

import { BaseComponent } from '../../../shared/globals/base.component';

@Component({
    selector: 'user-about',
    templateUrl: './user-about.template.html',
    styleUrls: ['./user-about.styles.scss']
})
export class UserAboutComponent extends BaseComponent {
    @Input() public item: EngineUser;

}
