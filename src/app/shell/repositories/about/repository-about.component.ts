
import { Component, Input, OnInit } from '@angular/core';
import { EngineRepository } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';

@Component({
    selector: 'repository-about',
    templateUrl: './repository-about.template.html',
    styleUrls: ['./repository-about.styles.scss']
})
export class RepositoryAboutComponent extends BaseDirective implements OnInit {
    @Input() public item: EngineRepository;

    public model: any = {};

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item', item => {
                this.item = item;
            })
        );
    }

    public select(system) {
        this.model.selected_system = system;
    }

}
