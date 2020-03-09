
import { Component, Input, OnInit } from '@angular/core';
import { EngineUser } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';

@Component({
    selector: 'user-about',
    templateUrl: './user-about.template.html',
    styleUrls: ['./user-about.styles.scss']
})
export class UserAboutComponent extends BaseDirective implements OnInit {
    @Input() public item: EngineUser;

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

}
