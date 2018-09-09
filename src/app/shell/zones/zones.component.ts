
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
                console.log('ID:', this.model.id);
                this.service.Zones.show(this.model.id).then((item) => {
                    this.timeout('item', () => this.model.item = item);
                }, () => {
                    this.service.error(`Failed to load data for zone "${this.model.id}"`);
                    this.service.navigate('zones');
                });
            }
            this.showSidebar(!this.model.id);
        });
        this.subs.obs.list = this.service.Zones.listen('list', () => {
            this.model.list = this.service.Zones.list();
            this.timeout('loading', () => this.model.loading = false, 10);
        });
    }

    public sidebarEvent(event: any) {
        if (event && event.type === 'more') {
            this.timeout('loading', () => this.model.loading = true, 10);
            this.service.Zones.query({ offset: this.model.list.length || 0 });
        } else if (event && event.type === 'select') {
            this.service.navigate(`zones/${event.item.id}`);
            this.showSidebar(false);
        } else {
            this.showSidebar(false);
        }
    }

    public showSidebar(state: boolean = true) {
        this.timeout('sidebar', () => this.model.show_sidebar = state);
    }
}
