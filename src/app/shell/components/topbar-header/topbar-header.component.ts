
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { ApplicationLink, ApplicationIcon } from 'src/app/shared/utilities/settings.interfaces';
import { EngineUser } from '@acaprojects/ts-composer';


@Component({
    selector: 'topbar-header',
    templateUrl: './topbar-header.template.html',
    styleUrls: ['./topbar-header.styles.scss']
})
export class TopbarHeaderComponent extends BaseDirective implements OnInit {
    /** Emitter for changes to the search input */
    @Output() public filter = new EventEmitter();
    /** List of user actions */
    public options: ApplicationLink[];

    public show: boolean;

    public show_menu: boolean;
    /** Current global search string */
    public filter_str: string;

    /** Application logo */
    public get logo(): ApplicationIcon {
        return this._service.setting('app.logo_light');
    }

    /** Whether global search is enabled */
    public get has_search(): boolean {
        return this._service.setting('app.general.global_search');
    }

    /** Active user */
    public get user(): any {
        return this._service.Users.user.getValue();
    }

    /** Current environment of the application */
    public get env(): string {
        return this._service.setting('env')
    }

    constructor(private _service: ApplicationService, private router: Router) {
        super();
    }

    public ngOnInit() {
        this.init();
        this.options = [
            { route: '/profile', name: 'Profile', icon: { type: 'icon', class: 'backoffice-user' } },
            { link: '/logout', name: 'Logout', icon: { type: 'icon', class: 'backoffice-logout' } }
        ];
    }

    public init() {
        if (!this._service.is_ready) {
            return setTimeout(() => this.init(), 500);
        }
        this.subscription('show_menu', this._service.listen('APP.show_menu', (state) => this.show_menu = state));
        this.subscription('filter', this._service.listen('APP.global_filter', (filter) => this.filter_str = filter));
    }

    public toggleMenu() {
        this.show_menu = !this.show_menu;
        this._service.set('APP.show_menu', this.show_menu);
    }

    public postFilter() {
        this._service.set('APP.global_filter', this.filter_str);
        this.filter.emit(this.filter_str);
    }
}
