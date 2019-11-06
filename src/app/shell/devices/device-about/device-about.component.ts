
import { Component, Input } from '@angular/core';
import { EngineModule } from '@acaprojects/ts-composer';

import { BaseComponent } from '../../../shared/globals/base.component';

@Component({
    selector: 'device-about',
    templateUrl: './device-about.template.html',
    styleUrls: ['./device-about.styles.scss']
})
export class DeviceAboutComponent extends BaseComponent {
    @Input() public item: EngineModule;

}
