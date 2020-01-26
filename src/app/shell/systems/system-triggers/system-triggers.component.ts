
import { Component, Input, OnChanges } from '@angular/core';
import { EngineSystem, EngineTrigger } from '@acaengine/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';

@Component({
    selector: 'system-triggers',
    templateUrl: './system-triggers.template.html',
    styleUrls: ['./system-triggers.styles.scss']
})
export class SystemTriggersComponent extends BaseDirective implements OnChanges {
    /** Active System */
    @Input() public item: EngineSystem;
    /** List of triggers associated with the active system */
    public trigger_list: EngineTrigger[] = [];
    /** Filter string for listing of triggers */
    public search_str: string;

    constructor(private service: ApplicationService) {
        super();
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.loadSystemTriggers();
        }
    }

    public loadSystemTriggers(offset: number = 0) {
        this.service.SystemTriggers.query({ sys_id: this.item.id, offset } as any).then((list) => {
            this.trigger_list = list;
        }, () => null);
    }

    public addTrigger() {

    }
}
