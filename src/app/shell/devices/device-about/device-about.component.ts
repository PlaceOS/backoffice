
import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../../shared/globals/base.component';
import { IEngineModule } from '../../../services/data/modules.service';

@Component({
    selector: 'device-about',
    templateUrl: './device-about.template.html',
    styleUrls: ['./device-about.styles.scss']
})
export class DeviceAboutComponent extends BaseComponent {
    @Input() public item: IEngineModule;

}
