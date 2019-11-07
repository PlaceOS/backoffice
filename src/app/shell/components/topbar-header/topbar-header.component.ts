
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';

@Component({
    selector: 'topbar-header',
    templateUrl: './topbar-header.template.html',
    styleUrls: ['./topbar-header.styles.scss']
})
export class TopbarHeaderComponent extends BaseDirective implements OnInit {
    @Output() public filter = new EventEmitter();
    public model: any = {};

    constructor(private service: ApplicationService, private router: Router) {
        super();
    }

    public ngOnInit() {
        this.init();
        this.model.options = [
            { id: 'profile', name: 'Profile', icon: { class: 'material-icons', value: 'account_circle' } },
            { id: 'logout', name: 'Logout', icon: { class: 'material-icons', value: 'exit_to_app' } }
        ];
        this.subscription('route', this.router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) { this.checkRoute(); }
        }));
    }

    public init() {
        if (!this.service.is_ready) {
            return setTimeout(() => this.init(), 500);
        }
        this.model.env = this.service.setting('env');
        this.model.logo = this.service.setting('app.logo') || {};
        this.model.has_search = this.service.setting('app.global_search') || false;
        this.model.user = this.service.Users.current();
        this.subscription('show_menu', this.service.listen('APP.show_menu', (state) => this.model.show_menu = state));
        this.subscription('filter', this.service.listen('APP.global_filter', (filter) => this.model.filter = filter));
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

    public select(item) {
        if (item.id === 'logout') {
            this.service.Users.logout();
        } else if (item.id === 'profile') {
            this.service.navigate('profile');
        }
        this.model.show = false;
    }

    public toggleMenu() {
        this.model.show_menu = !this.model.show_menu;
        this.service.set('APP.show_menu', this.model.show_menu);
    }

    public postFilter() {
        this.service.set('APP.global_filter', this.model.filter);
        this.filter.emit(this.model.filter);
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
