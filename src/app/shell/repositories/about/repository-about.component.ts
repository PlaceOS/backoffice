
import { Component, Input, OnInit } from '@angular/core';
import { EngineRepository } from '@acaengine/ts-client';
import { MatDialog } from '@angular/material/dialog';

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

    constructor(private service: ApplicationService, private _dialog: MatDialog) {
        super();
    }

    public ngOnInit() {

    }

    public select(system) {
        this.model.selected_system = system;
    }

}
