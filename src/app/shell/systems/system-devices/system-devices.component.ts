
import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../../shared/components/base.component';
import { AppService } from '../../../services/app.service';
import { IEngineSystem } from '../../../services/data/systems.service';

@Component({
    selector: 'system-devices',
    templateUrl: './system-devices.template.html',
    styleUrls: ['./system-devices.styles.scss']
})
export class SystemDevicesComponent extends BaseComponent {
    @Input() public item: IEngineSystem;

    public model: any = {};

    constructor(private service: AppService) {
        super();
    }
    
    public ngOnChanges(changes: any) {
        if (changes.item) {
            
        }
    }
}
