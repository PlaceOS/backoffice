
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from '../../shared/components/base.component';

@Component({
    selector: 'app-zones',
    templateUrl: './zones.template.html',
    styleUrls: ['./zones.styles.scss']
})
export class ZonesComponent extends BaseComponent implements OnInit {
    public model: any = {};

    constructor(private route: ActivatedRoute) {
        super();
    }

    public ngOnInit() {
        this.subs.obs.route = this.route.paramMap.subscribe((params) => {
            this.model.id = '';
            if (params.has('id')) {
                this.model.id = params.get('id');
            }
            this.model.show_sidebar = !this.model.id;
        });
    }

    public sidebarEvent(event: any) {
        this.clearTimer('sidebar');
        this.model.show_sidebar = false;
    }

    public showSidebar(state: boolean = true) {
        this.timeout('sidebar', () => this.model.show_sidebar = state);
    }
}
