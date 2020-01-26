/**
 * @Author: Alex Sorafumo
 * @Date:   17/10/2016 4:10 PM
 * @Email:  alex@yuion.net
 * @Filename: simple.component.ts
 * @Last modified by:   Alex Sorafumo
 * @Last modified time: 01/02/2017 1:37 PM
 */

import { Component, OnInit } from '@angular/core';
import { EngineUser } from '@acaengine/ts-client';

import { ApplicationLink } from '../shared/utilities/settings.interfaces';
import { ApplicationService } from '../services/app.service';
import { BaseDirective } from '../shared/globals/base.directive';

import * as dayjs from 'dayjs';

@Component({
    selector: 'app-shell',
    styleUrls: ['./shell.styles.scss'],
    templateUrl: './shell.template.html'
})
export class AppShellComponent extends BaseDirective implements OnInit {
    /** Whether the application is loading */
    public loading: boolean;
    /** Display string for the current year */
    public year: string;
    /** Currently active user */
    public user: EngineUser;
    /** Global search filter string */
    public filter: string;

    /** Active environment */
    public get env(): string {
        return this.service.setting('env') || '';
    }

    /** List of core tiles to show on the sidebar menu */
    public get tiles(): ApplicationLink[] {
        return this.service.setting('app.tiles') || [];
    }

    constructor(private service: ApplicationService) {
        super();
    }

    public ngOnInit() {
        this.year = dayjs().format('YYYY');
        this.subscription(
            'user',
            this.service.Users.user.subscribe(user => (this.user = user))
        );
        this.init();
    }

    public init() {
        this.loading = true;
        if (!this.service.is_ready) {
            return setTimeout(() => this.init(), 200);
        }
        this.loading = false;
        this.service.Users.current().then(user => (this.user = user));
    }

    /** Navigate to the root page */
    public home() {
        this.service.navigate('');
    }
}
