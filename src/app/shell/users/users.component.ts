
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../../services/app.service';
import { BaseComponent } from '../../shared/components/base.component';

@Component({
    selector: 'app-users',
    templateUrl: './users.template.html',
    styleUrls: ['./users.styles.scss']
})
export class UsersComponent extends BaseComponent {
    public model: any = {};

    constructor(private service: AppService, private route: ActivatedRoute) {
        super();
    }

    public ngOnInit() {
        this.model.loading_item = true;
        this.model.list = [];
        this.subs.obs.route = this.route.paramMap.subscribe((params) => {
            this.model.id = '';
            if (params.has('id')) {
                this.model.id = params.get('id');
                this.timeout('loading', () => this.model.loading_item = true, 10);
                this.service.Users.show(this.model.id).then((item) => {
                    this.timeout('item', () => {
                        this.model.item = item;
                        this.model.loading_item = false;
                    });
                }, () => {
                    this.service.error(`Failed to load data for user "${this.model.id}"`);
                    this.model.loading_item = false;
                    this.service.navigate('users');
                });
            }
            if (params.has('tab')) {
                this.model.tab = params.get('tab');
            }
            this.showSidebar(!this.model.id);
        });
        this.subs.obs.list = this.service.Users.listen('list', () => {
            this.model.list = this.service.Users.list();
            this.model.total = this.service.Users.get('total');
            this.timeout('loading', () => {
                this.model.loading = false;
                this.model.loading_item = false;
            }, 100);
        });
    }

    public sidebarEvent(event: any) {
        if (event && event.type === 'more') {
            if (!this.model.total || this.model.list.length < this.model.total) {
                this.timeout('loading', () => this.model.loading = true, 10);
                this.service.Users.query({ offset: this.model.list.length || 0 });
            }
        } else if (event && event.type === 'select') {
            this.service.navigate(`users/${event.item.id}`);
            this.showSidebar(false);
        } else {
            this.showSidebar(false);
        }
    }

    public showSidebar(state: boolean = true) {
        this.timeout('sidebar', () => this.model.show_sidebar = state);
    }
}
