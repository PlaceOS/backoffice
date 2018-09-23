
import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../../shared/components/base.component';
import { AppService } from '../../../services/app.service';
import { IEngineSystem } from '../../../services/data/systems.service';

@Component({
    selector: 'system-triggers',
    templateUrl: './system-triggers.template.html',
    styleUrls: ['./system-triggers.styles.scss']
})
export class SystemTriggersComponent extends BaseComponent {
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
