
import { Component, Input, OnChanges } from '@angular/core';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { EngineDomain } from '@acaprojects/ts-composer';

@Component({
    selector: 'domain-applications',
    templateUrl: './domain-applications.template.html',
    styleUrls: ['./domain-applications.styles.scss']
})
export class DomainApplicationsComponent extends BaseDirective implements OnChanges {
    @Input() public item: EngineDomain;

    public model: any = {};

    constructor(private service: ApplicationService) {
        super();
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.load();
        }
    }

    public load(offset: number = 0) {
        this.service.Applications.query({ owner: this.item.id, offset } as any).then((list) => {
            if (!offset) { this.model.list = []; }
            for (const item of (list || [])) {
                let found = false;
                for (const i of this.model.list) {
                    if (i.id === item.id) {
                        found = true;
                        break;
                    }
                }
                if (!found) { this.model.list.push(item); }
            }
        }, () => null);
    }

    public createApplication() {
        console.log('Create application');
        // this.service.Applications.create().then((v) => {
        //     this.load();
        // }, _ => null);
    }
}
