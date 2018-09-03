
import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../../../shared/components/base.component';
import { IEngineDriver } from '../../../../services/data/drivers.service';

@Component({
    selector: 'driver-devices',
    templateUrl: './driver-devices.template.html',
    styleUrls: ['./driver-devices.styles.scss']
})
export class DriverDevicesComponent extends BaseComponent {
    @Input() public item: IEngineDriver;
    
}
