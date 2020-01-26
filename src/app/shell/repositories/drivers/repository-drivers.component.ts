
import { Component, Input, OnChanges } from '@angular/core';
import { EngineRepository, EngineDriver } from '@acaengine/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';

@Component({
    selector: 'repository-drivers',
    templateUrl: './repository-drivers.template.html',
    styleUrls: ['./repository-drivers.styles.scss']
})
export class RepositorySystemsComponent extends BaseDirective implements OnChanges {
    /** Active repository */
    @Input() public item: EngineRepository;
    /** List of drivers available in the repository */
    public driver_list: string[] = [];

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
            this.driver_list = list || [];
        }, () => null);
    }
}
