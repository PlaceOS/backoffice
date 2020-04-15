import { Component, Input } from '@angular/core';
import { ApplicationIcon } from '../../utilities/settings.interfaces';
import { BaseDirective } from '../../globals/base.directive';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})
export class IconComponent extends BaseDirective {
    /** Icon to display */
    @Input() public icon: ApplicationIcon;
}
