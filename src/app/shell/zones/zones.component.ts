
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from '../../shared/components/base.component';
import { AppService } from '../../services/app.service';

@Component({
    selector: 'app-zones',
    templateUrl: './zones.template.html',
    styleUrls: ['./zones.styles.scss']
})
export class ZonesComponent extends BaseComponent implements OnInit {
    public model: any = {};

    constructor(private service: AppService, private route: ActivatedRoute) {
        super();
    }

    public ngOnInit() {
        this.model.list = [];
        this.subs.obs.route = this.route.paramMap.subscribe((params) => {
            this.model.id = '';
            if (params.has('id')) {
                this.model.id = params.get('id');
            }
            this.model.show_sidebar = !this.model.id;
        });
        this.subs.obs.list = this.service.Zones.listen('list', () => {
            this.model.list = this.service.Zones.list();
            this.model.loading = false;
        });
    }

    public sidebarEvent(event: any) {
        if (event && event.type === 'more') {
            this.model.loading = true;
            this.service.Zones.query({ offset: this.model.list.length || 0 });
        } else if (event && event.type === 'select') {
            this.service.navigate(`zones/${event.item.id}`);
        } else {
            this.showSidebar(false);
        }
    }

    public showSidebar(state: boolean = true) {
        this.timeout('sidebar', () => this.model.show_sidebar = state);
    }
}
