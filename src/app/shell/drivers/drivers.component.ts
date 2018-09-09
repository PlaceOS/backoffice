
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from '../../shared/components/base.component';
import { AppService } from '../../services/app.service';

@Component({
    selector: 'app-drivers',
    templateUrl: './drivers.template.html',
    styleUrls: ['./drivers.styles.scss']
})
export class DriversComponent extends BaseComponent implements OnInit {
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
                this.service.Drivers.show(this.model.id).then((item) => {
                    this.timeout('item', () => this.model.item = item);
                }, () => {
                    this.service.error(`Failed to load data for driver "${this.model.id}"`);
                    this.service.navigate('drivers');
                });
            }
            this.showSidebar(!this.model.id);
        });
        this.subs.obs.list = this.service.Drivers.listen('list', () => {
            this.model.list = this.service.Drivers.list();
            this.timeout('loading', () => this.model.loading = false, 10);
        });
    }

    public sidebarEvent(event: any) {
        if (event && event.type === 'more') {
            this.timeout('loading', () => this.model.loading = true, 10);
            this.service.Drivers.query({ offset: this.model.list.length || 0 });
        } else if (event && event.type === 'select') {
            this.service.navigate(`drivers/${event.item.id}`);
            this.showSidebar(false);
        } else {
            this.showSidebar(false);
        }
    }

    public showSidebar(state: boolean = true) {
        this.timeout('sidebar', () => this.model.show_sidebar = state);
    }
}
