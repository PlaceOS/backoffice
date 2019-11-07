
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { ApplicationLink } from 'src/app/shared/utilities/settings.interfaces';

@Component({
    selector: 'sidebar-menu',
    templateUrl: './sidebar-menu.template.html',
    styleUrls: ['./sidebar-menu.styles.scss']
})
export class SidebarMenuComponent extends BaseDirective implements OnInit {
    /** List of available menu items for the application */
    public menu_items: ApplicationLink[];
    /** Whether the sidebar menu should be shown */
    public show: boolean;
    /** Route of the shown tooltip */
    public tooltip: string;

    constructor(private service: ApplicationService, private router: Router) {
        super();
    }

    public ngOnInit() {
        this.init();
    }

    public init() {
        if (!this.service.is_ready) {
            return this.timeout('init', () => this.init());
        }
        this.menu_items = this.service.setting('app.general.menu');
        this.subscription('show', this.service.listen('APP.show_menu', (state) => {
            this.show = state;
            this.timeout('cancel_close', () => this.clearTimeout('close'), 50);
        }));
    }

    /**
     * Delayed close of the sidebar menu. Mobile Only
     */
    public close() {
        this.timeout('close', () => {
            this.show = false;
            this.service.set('APP.show_menu', this.show);
        }, 100);
    }

    /**
     * Cancel delayed close
     */
    public cancelClose() {
        this.timeout('cancel_close', () => this.clearTimeout('close'), 10);
    }
}
