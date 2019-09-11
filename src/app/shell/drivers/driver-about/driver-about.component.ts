
import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../../shared/globals/base.component';
import { IEngineDriver } from '../../../services/data/drivers.service';

@Component({
    selector: 'driver-about',
    templateUrl: './driver-about.template.html',
    styleUrls: ['./driver-about.styles.scss']
})
export class DriverAboutComponent extends BaseComponent {
    @Input() public item: IEngineDriver;

}
