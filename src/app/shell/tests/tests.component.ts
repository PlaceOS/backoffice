
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';

@Component({
    selector: 'app-tests',
    templateUrl: './tests.template.html',
    styleUrls: ['./tests.styles.scss']
})
export class TestsComponent extends BaseRootComponent {
    public model: any = {};

    constructor(protected service: AppService, protected route: ActivatedRoute) {
        super(service, route);
        this.model.type = 'test';
        this.model.service = 'Tests';
        this.model.route = 'tests';
    }

    protected loadValues() {

    }
}
