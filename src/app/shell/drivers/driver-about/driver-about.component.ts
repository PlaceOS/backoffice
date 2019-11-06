
import { Component, Input } from '@angular/core';
import { EngineDriver } from '@acaprojects/ts-composer';

import { BaseDirective } from '../../../shared/globals/base.directive';

@Component({
    selector: 'driver-about',
    templateUrl: './driver-about.template.html',
    styleUrls: ['./driver-about.styles.scss']
})
export class DriverAboutComponent extends BaseDirective {
    @Input() public item: EngineDriver;

}
