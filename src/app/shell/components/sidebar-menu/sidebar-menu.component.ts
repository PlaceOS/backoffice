
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';

@Component({
    selector: 'sidebar-menu',
    templateUrl: './sidebar-menu.template.html',
    styleUrls: ['./sidebar-menu.styles.scss']
})
export class SidebarMenuComponent extends BaseDirective implements OnInit {
    public model: any = {};

    constructor(private service: ApplicationService, private router: Router) {
        super();
    }

    public ngOnInit() {
        this.init();
        this.subscription('route', this.router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) { this.checkRoute(); }
        }));
    }

    public init() {
        if (!this.service.is_ready) {
            return this.timeout('init', () => this.init());
        }
        this.model.menu = this.service.setting('app.menu');
        this.subscription('show', this.service.listen('APP.show_menu', (state) => {
            this.model.show = state;
            this.timeout('cancel_close', () => this.clearTimeout('close'), 50);
        }));
        this.checkRoute();
    }

    public checkRoute() {
        this.timeout('route', () => {
            const route = this.router.url.split('?')[0];
            if (this.model.menu && this.model.menu.list) {
                let found = false;
                for (const i of this.model.menu.list) {
                    i.active = route.indexOf(`/${i.id}`) === 0 && !found;
                    if (!found) { found = route.indexOf(`/${i.id}`) === 0; }
                    if (i.items) {
                        for (const itm of i.items) {
                            itm.active = route.indexOf(`/${itm.id}`) === 0 && !found;
                            if (!found) { found = route.indexOf(`/${itm.id}`) === 0; }
                        }
                    }
                }
            }
        }, 50);
    }

    public goto(item: any) {
        if (item.id) {
            this.service.navigate(item.id, item.query || {});
        } else if (item.link || item.url) {
            window.open(item.link || item.url, 'blank_');
        }
        this.close();
    }

    public close() {
        this.timeout('close', () => {
            this.model.show = false;
            this.service.set('APP.show_menu', this.model.show);
        }, 100);
    }

    public cancelClose() {
        this.clearTimeout('close');
    }
}
