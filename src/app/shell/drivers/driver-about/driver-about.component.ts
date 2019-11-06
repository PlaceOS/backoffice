
import { Component, Input } from '@angular/core';
import { EngineDriver } from '@acaprojects/ts-composer';

import { BaseComponent } from '../../../shared/globals/base.component';

@Component({
    selector: 'driver-about',
    templateUrl: './driver-about.template.html',
    styleUrls: ['./driver-about.styles.scss']
})
export class DriverAboutComponent extends BaseComponent {
    @Input() public item: EngineDriver;

}
