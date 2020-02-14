import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { EngineRepository } from '@acaengine/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';

@Component({
    selector: 'repository-drivers',
    templateUrl: './repository-drivers.template.html',
    styleUrls: ['./repository-drivers.styles.scss']
})
export class RepositoryDriversComponent extends BaseDirective implements OnChanges, OnInit {
    /** Active repository */
    @Input() public item: EngineRepository;
    /** List of drivers available in the repository */
    public driver_list: string[] = [];

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item', item => {
                this.item = item;
                this.load();
            })
        );
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.load();
        }
    }

    public load(offset: number = 0) {
        if (!this.item) {
            return;
        }
        this._service.Repositories.listDrivers(this.item.id, { offset } as any).then(
            list => {
                this.driver_list = list || [];
            },
            () => null
        );
    }
}
