import { Component, OnInit, EventEmitter, Output, Input, Type } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    PlaceSystem,
    PlaceZone,
    PlaceDriver,
    PlaceModule,
    PlaceUser,
    addDriver,
    addModule,
    addZone,
    addSystem,
    addUser,
    authority,
} from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { ApplicationLink, ApplicationIcon } from 'src/app/shared/utilities/settings.interfaces';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';

import * as dayjs from 'dayjs';
import { BulkItemModalComponent } from 'src/app/overlays/bulk-item-modal/bulk-item-modal.component';
import { BackofficeUsersService } from 'src/app/services/data/users.service';

@Component({
    selector: 'topbar-header',
    templateUrl: './topbar-header.template.html',
    styleUrls: ['./topbar-header.styles.scss'],
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
    /** Whether the user wishes to bulk add items */
    public bulk: boolean = false;

    /** Whether dark mode is enabled */
    public get dark_mode(): boolean {
        return this._users.dark_mode;
    }
    public set dark_mode(state: boolean) {
        this._users.dark_mode = state;
    }

    public get title() {
        return document.title.split(' | ')[0];
    }

    public get is_fools_day(): boolean {
        return dayjs().format('D MMM') === '1 Apr' && !localStorage.getItem("I'M NO FOOL!!!");
    }

    /** Application logo */
    public get logo(): ApplicationIcon {
        return this._service.setting('app.logo_light');
    }

    /** Whether global search is enabled */
    public get has_search(): boolean {
        return this._service.setting('app.general.global_search');
    }

    /** Whether global search is enabled */
    public get languages(): { name: string; locale: string; icon: ApplicationIcon }[] {
        return this._service.setting('app.languages') || [];
    }

    /** Active user */
    public get user(): any {
        return this._service.get('user');
    }

    /** Current environment of the application */
    public get env(): string {
        const auth: any = authority() || {};
        return auth.production ? 'prod' : this._service.setting('env');
    }

    constructor(
        private _service: ApplicationService,
        private _users: BackofficeUsersService,
        private _dialog: MatDialog
    ) {
        super();
    }

    public ngOnInit() {}

    public notAFool() {
        localStorage.setItem("I'M NO FOOL!!!", 'true');
    }

    public newSystem() {
        this.newItem(new PlaceSystem(), (_) => addSystem(_), 'System', PlaceSystem);
    }

    public newZone() {
        this.newItem(new PlaceZone(), (_) => addZone(_), 'Zone', PlaceZone);
    }

    public newModule() {
        this.newItem(new PlaceModule(), (_) => addModule(_), 'Module', PlaceModule);
    }

    public newDriver() {
        this.newItem(new PlaceDriver(), (_) => addDriver(_), 'Driver', PlaceDriver);
    }

    public newUser() {
        this.newItem(new PlaceUser(), (_) => addUser(_), 'User', PlaceUser);
    }

    public showUploadHistory() {
        this._service.set('show_upload_manager', true);
    }

    /**
     * Open the modal to create a new engine resource
     */
    protected newItem<T = any>(item: any, save: any, name: string, constr: Type<T>) {
        if (this.bulk) {
            this._service.set('disable_uploads', true);
            const ref = this._dialog.open(BulkItemModalComponent, {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    constr,
                    name,
                    save,
                },
            });
            ref.afterClosed().subscribe(() => this._service.set('disable_uploads', false));
        } else {
            this._dialog.open(ItemCreateUpdateModalComponent, {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    item,
                    name,
                    save,
                },
            });
        }
    }

    /** Toggle the show state of the sidebar menu */
    public toggleMenu() {
        this.timeout('toggle_menu', () => {
            this.show_menu = !this.show_menu;
            this.show_menu_change.emit(this.show_menu);
        }, 100);
    }

    /**
     * Emit changes to the global search filter
     */
    public postFilter() {
        this.filterChange.emit(this.filter);
    }
}
