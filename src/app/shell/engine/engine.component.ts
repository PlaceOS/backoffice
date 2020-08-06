import { Component } from '@angular/core';

import { BaseDirective } from '../../shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';

@Component({
    selector: 'app-engine',
    templateUrl: './engine.component.html',
    styleUrls: ['./engine.component.scss']
})
export class PlaceComponent extends BaseDirective {

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnInit(): void {;
        this._service.title = 'Admin';
    }
}
