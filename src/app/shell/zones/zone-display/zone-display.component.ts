
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from '../../../shared/components/base.component';
import { AppService } from '../../../services/app.service';

@Component({
    selector: 'zone-display',
    templateUrl: './zone-display.template.html',
    styleUrls: ['./zone-display.styles.scss']
})
export class ZoneDisplayComponent extends BaseComponent implements OnInit {
    public model: any = {};

    constructor(private service: AppService, private route: ActivatedRoute) {
        super();
    }

    public ngOnInit() {
        this.subs.obs.route = this.route.paramMap.subscribe((params) => {
            if (params.has('id')) {
                this.model.id = params.get('id');
            }
        });
    }
}
