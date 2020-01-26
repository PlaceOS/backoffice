
import { Component, Input } from '@angular/core';
import { EngineUser } from '@acaengine/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';

@Component({
    selector: 'user-about',
    templateUrl: './user-about.template.html',
    styleUrls: ['./user-about.styles.scss']
})
export class UserAboutComponent extends BaseDirective {
    @Input() public item: EngineUser;

}
