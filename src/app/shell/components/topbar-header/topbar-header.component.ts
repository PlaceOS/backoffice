import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { ApplicationLink, ApplicationIcon } from 'src/app/shared/utilities/settings.interfaces';

@Component({
    selector: 'topbar-header',
    templateUrl: './topbar-header.template.html',
    styleUrls: ['./topbar-header.styles.scss']
})
export class TopbarHeaderComponent extends BaseDirective implements OnInit {
    /** Whether the sidebar menu should be shown */
    @Input('showMenu') public show_menu: boolean;
    /** Emitter for changes to the sidebar menu show state */
    @Output('showMenuChange') public show_menu_change = new EventEmitter<boolean>();
    /** Current global search string */
    @Input() public filter: string;
    /** Emitter for changes to the search input */
    @Output() public filterChange = new EventEmitter();
    /** List of user actions */
    public options: ApplicationLink[];
    /** Whether user tooltip should be shown */
    public show: boolean;

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
        return this._service.setting('env');
    }

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnInit() {
        this.options = [
            {
                route: '/profile',
                name: 'Profile',
                icon: { type: 'icon', class: 'backoffice-user' }
            },
            { link: '/logout', name: 'Logout', icon: { type: 'icon', class: 'backoffice-logout' } }
        ];
    }

    /** Toggle the show state of the sidebar menu */
    public toggleMenu() {
        this.show_menu = !this.show_menu;
        this.show_menu_change.emit(this.show_menu);
    }

    /**
     * Emit changes to the global search filter
     */
    public postFilter() {
        this.filterChange.emit(this.filter);
    }
}
