import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { ApplicationLink, ApplicationIcon, ApplicationActionLink } from 'src/app/shared/utilities/settings.interfaces';
import { MatDialog } from '@angular/material/dialog';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';
import { EngineSystem, EngineZone } from '@acaprojects/ts-composer';

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

    public extra_action_list: ApplicationActionLink[] = [
        {
            name: 'New System',
            icon: { type: 'icon', class: 'backoffice-plus' },
            callback: () =>
                this.new(new EngineSystem(this._service.Systems, {}), this._service.Systems)
        },
        {
            name: 'New Zone',
            icon: { type: 'icon', class: 'backoffice-plus' },
            callback: () =>
                this.new(new EngineZone(this._service.Zones, {}), this._service.Zones)
        }
    ];

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

    constructor(private _service: ApplicationService, private _dialog: MatDialog) {
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
    /**
     * Open the modal to create a new engine resource
     */
    protected new(item: any, service: any) {
        this._dialog.open(ItemCreateUpdateModalComponent, {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item,
                service
            }
        });
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
