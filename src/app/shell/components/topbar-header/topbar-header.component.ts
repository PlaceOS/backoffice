
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { BaseComponent } from '../../../shared/components/base.component';
import { AppService } from '../../../services/app.service';

@Component({
    selector: 'topbar-header',
    templateUrl: './topbar-header.template.html',
    styleUrls: ['./topbar-header.styles.scss']
})
export class TopbarHeaderComponent extends BaseComponent implements OnInit {
    public model: any = {};

    constructor(private service: AppService, private router: Router) {
        super();
    }

    public ngOnInit() {
        this.init();
        this.subs.obs.router_events = this.router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) { this.checkRoute(); }
        });
    }

    public init() {
        if (!this.service.ready()) {
            return setTimeout(() => this.init(), 500);
        }
        this.model.logo = this.service.Settings.get('app.logo') || {};
        this.model.menu = this.service.Settings.get('app.menu') || {};
        this.model.banner = this.service.Settings.get('app.banner');
        this.model.page = this.service.Settings.get('app.page') || { titles: {}, info: {} };
        this.model.hide_heading = this.service.Settings.get('app.hide.heading');
        this.model.route_settings = this.service.Settings.get('app.route_settings') || {};
        this.model.user = this.service.Users.current();
        this.checkRoute();
    }

    public logo() {
        if (this.model.logo && this.model.logo.link) {
            location.href = this.model.logo.link;
        } else {
            this.service.navigate('');
        }
    }

    public checkRoute() {
        this.timeout('route', () => {
            const route = this.router.url.split('?')[0];
            this.model.is_home = route === '/' || route === '/home' || route === '/help';
            if (this.model.tiles) {
                for (const tile of this.model.tiles) {
                    tile.active = route.indexOf(`/${tile.id}`) === 0;
                }
            }
            if (this.model.page) {
                    // Get page heading
                this.model.heading = this.getRouteDetails(this.model.page.titles, route);
                this.service.title = this.model.heading || 'Home';
                    // Get page banner info
                this.model.info = this.getRouteDetails(this.model.page.info, route);
                this.model.info = this.model.info.replace(/{{user}}/g, this.model.user ? this.model.user.name || 'Guest' : 'Guest');
            }
        }, 50);
    }

    public home() {
        this.service.navigate('');
    }

    private getRouteDetails(map: any, route: string) {
        let current_route = '';
        let current_value = '';
        const keys = Object.keys(map || {});
        for (const id of keys) {
            if ((route.indexOf(`/${id}`) === 0 || route.indexOf(id) === 0) && id.length > current_route.length) {
                current_value = map[id];
                current_route = id;
            }
        }
        return current_value || '';
    }
}
