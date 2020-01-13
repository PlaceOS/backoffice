
import { Component, Input, OnChanges } from '@angular/core';
import { EngineRepository } from '@acaprojects/ts-composer';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';

@Component({
    selector: 'repository-drivers',
    templateUrl: './repository-drivers.template.html',
    styleUrls: ['./repository-drivers.styles.scss']
})
export class RepositorySystemsComponent extends BaseDirective implements OnChanges {
    @Input() public item: EngineRepository;

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
        this.service.Repositories.listDrivers(this.item.id, { offset } as any).then((list) => {
            this.model.list = list;
        }, () => null);
    }
}
