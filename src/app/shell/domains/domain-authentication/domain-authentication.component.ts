
import { Component, Input, OnChanges } from '@angular/core';
import { EngineDomain } from '@acaprojects/ts-composer';

import { BaseComponent } from '../../../shared/globals/base.component';
import { ApplicationService } from '../../../services/app.service';

@Component({
    selector: 'domain-authentication',
    templateUrl: './domain-authentication.template.html',
    styleUrls: ['./domain-authentication.styles.scss']
})
export class DomainAuthenticationComponent extends BaseComponent implements OnChanges {
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
        this.service.AuthSources.query({ authority_id: this.item.id, offset } as any).then((list) => {
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
}
