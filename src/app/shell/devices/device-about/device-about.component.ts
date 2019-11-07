
import { Component, Input } from '@angular/core';
import { EngineModule } from '@acaprojects/ts-composer';

import { BaseDirective } from '../../../shared/globals/base.directive';

@Component({
    selector: 'device-about',
    templateUrl: './device-about.template.html',
    styleUrls: ['./device-about.styles.scss']
})
export class DeviceAboutComponent extends BaseDirective {
    @Input() public item: EngineModule;

    public get system() {
        return null;
    }

}
