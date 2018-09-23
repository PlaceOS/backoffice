
import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../../shared/components/base.component';
import { IEngineSystem } from '../../../services/data/systems.service';

@Component({
    selector: 'system-about',
    templateUrl: './system-about.template.html',
    styleUrls: ['./system-about.styles.scss']
})
export class SystemAboutComponent extends BaseComponent {
    @Input() public item: IEngineSystem;

}
