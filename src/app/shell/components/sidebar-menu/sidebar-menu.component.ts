
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { ApplicationInternalLink } from 'src/app/shared/utilities/settings.interfaces';
import { ComposerService } from '@acaengine/composer';

@Component({
    selector: 'sidebar-menu',
    templateUrl: './sidebar-menu.template.html',
    styleUrls: ['./sidebar-menu.styles.scss']
})
export class SidebarMenuComponent extends BaseDirective implements OnInit {
    /** Whether the sidebar menu should be shown */
    @Input() public show: boolean;
    /** Emitter for changes to the sidebar show state */
    @Output() public showChange = new EventEmitter<boolean>();
    /** List of available menu items for the application */
    public menu_items: ApplicationInternalLink[];
    /** Route of the shown tooltip */
    public tooltip: string;

    constructor(private service: ApplicationService, private _composer: ComposerService, private router: Router) {
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
        /** Only allow metrics if a URL has be set */
        if (!this._composer.auth.authority.metrics) {
            this.menu_items = this.menu_items.filter(item => item.route && item.route.indexOf('metrics') < 0);
            if (this.router.url.indexOf('metrics') >= 0) {
                this.router.navigate([]);
            }
        }
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.show) {
            this.clearTimeout('close');
        }
    }

    /**
     * Delayed close of the sidebar menu. Mobile Only
     */
    public close() {
        this.timeout('close', () => {
            this.show = false;
            this.showChange.emit(this.show);
        }, 100);
    }

    /**
     * Cancel delayed close
     */
    public cancelClose() {
        this.timeout('cancel_close', () => this.clearTimeout('close'), 10);
    }
}
