
import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../../shared/components/base.component';
import { IEngineSystem } from '../../../services/data/systems.service';

@Component({
    selector: 'system-zones',
    templateUrl: './system-zones.template.html',
    styleUrls: ['./system-zones.styles.scss']
})
export class SystemZonesComponent extends BaseComponent {
    @Input() public item: IEngineSystem;

}
