
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
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
    /** Whether the sidebar menu should be shown */
    @Input() public show: boolean;
    /** Emitter for changes to the sidebar show state */
    @Output() public showChange = new EventEmitter<boolean>();
    /** List of available menu items for the application */
    public menu_items: ApplicationLink[];
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
            console.warn('Close sidebar')
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
