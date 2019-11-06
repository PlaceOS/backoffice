/**
 * @Author: Alex Sorafumo
 * @Date:   17/10/2016 4:10 PM
 * @Email:  alex@yuion.net
 * @Filename: simple.component.ts
 * @Last modified by:   Alex Sorafumo
 * @Last modified time: 01/02/2017 1:37 PM
 */

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { ApplicationService } from '../services/app.service';
import { BaseDirective } from '../shared/globals/base.directive';

import * as dayjs from 'dayjs';

@Component({
    selector: 'app-shell',
    styleUrls: ['./shell.styles.scss'],
    templateUrl: './shell.template.html'
})
export class AppShellComponent extends BaseDirective implements OnInit {

    public model: any = {};
    public timers: any = {};

    constructor(private service: ApplicationService, private router: Router) {
        super();
        this.model.routing = {};
    }

    public ngOnInit() {
        this.model.year = dayjs().format('YYYY');
        this.subscription('user', this.service.Users.user.subscribe((user) => this.model.user = user));
        this.subscription('route', this.router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.checkRoute();
            }
        }));
        this.init();
    }

    public init() {
        this.model.loading = true;
        if (!this.service.is_ready) {
            this.model.env = this.service.setting('env');
            return setTimeout(() => this.init(), 200);
        }
        this.model.env = this.service.setting('env');
        this.model.loading = false;
        this.model.user = this.service.Users.current();
        this.model.tiles = this.service.setting('app.tiles');
        this.subscription('filters', this.service.listen('APP.global_filter', (filter) => this.model.filter = filter));
        this.checkRoute();
    }

    public home() {
        this.service.navigate('');
    }

    public route() {
        if (this.model.routing.sub) {
            this.service.navigate(this.model.routing.back);
        }
    }

    public checkRoute() {
        const route = this.router.url.split('?')[0];
        if (this.model.menu) {
            this.model.menu.show_footer = this.model.hide_routes.indexOf(route) < 0;
        }
        if (this.model.banner) {
            this.model.banner.show = this.model.hide_routes.indexOf(route) < 0;
        }
        if (this.model.tiles) {
            for (const tile of this.model.tiles) {
                tile.active = route.indexOf(`/${tile.id}`) === 0;
                if (tile.active && this.model.banner) {
                    this.model.explore = tile.id.indexOf('explore') >= 0 || route.indexOf('book/room') >= 0;
                    this.model.banner.color = this.model.banner.color || tile.color !== '#fff' ? tile.color : '';
                    this.model.banner.page = {
                        links: this.service.setting(`app.${tile.settings}.banner.links`) || this.model.banner.links || []
                    };
                }
            }
        }
    }
}
