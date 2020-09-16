import { Component, Input } from '@angular/core';

import { BaseClass } from 'src/app/common/base.class';
import { ApplicationIcon } from 'src/app/common/types';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})
export class IconComponent extends BaseClass {
    /** Icon to display */
    @Input() public icon: ApplicationIcon;
}
