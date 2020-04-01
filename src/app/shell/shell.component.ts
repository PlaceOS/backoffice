/**
 * @Author: Alex Sorafumo
 * @Date:   17/10/2016 4:10 PM
 * @Email:  alex@yuion.net
 * @Filename: simple.component.ts
 * @Last modified by:   Alex Sorafumo
 * @Last modified time: 01/02/2017 1:37 PM
 */

import { Component, OnInit } from '@angular/core';
import { EngineUser } from '@placeos/ts-client';
import { first } from 'rxjs/operators';

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
        return this._service.setting('env') || '';
    }

    /** List of core tiles to show on the sidebar menu */
    public get tiles(): ApplicationLink[] {
        return this._service.setting('app.tiles') || [];
    }

    /** Whether dark mode is enabled */
    public get dark_mode(): boolean {
        return this._service.Users.dark_mode;
    }

    public get is_fools_day(): boolean {
        return dayjs().format('D MMM') === '1 Apr' && !localStorage.getItem('I\'M NO FOOL!!!');
    }

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnInit() {
        this.year = dayjs().format('YYYY');
        this.subscription(
            'user',
            this._service.Users.user.subscribe(user => (this.user = user))
        );
        this.loading = true;
        this._service.initialised.pipe(first(_ => _)).subscribe(() => this.init());
    }

    public init() {
        this.loading = false;
        this._service.Users.current().then(user => (this.user = user));
    }

    /** Navigate to the root page */
    public home() {
        this._service.navigate('');
    }
}
