
import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../../shared/components/base.component';
import { AppService } from '../../../services/app.service';
import { IEngineModule } from '../../../services/data/modules.service';

@Component({
    selector: 'device-systems',
    templateUrl: './device-systems.template.html',
    styleUrls: ['./device-systems.styles.scss']
})
export class DeviceSystemsComponent extends BaseComponent {
    @Input() public item: IEngineModule;

    public model: any = {};

    constructor(private service: AppService) {
        super();
    }
    
    public ngOnChanges(changes: any) {
        if (changes.item) {
            
        }
    }
}
