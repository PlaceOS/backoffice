import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    Type,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    addDriver,
    addModule,
    addSystem,
    addUser,
    addZone,
    authority,
    logout,
    PlaceDriver,
    PlaceModule,
    PlaceSystem,
    PlaceUser,
    PlaceZone,
} from '@placeos/ts-client';
import { format } from 'date-fns';
import { BaseClass } from 'apps/backoffice/src/app/common/base.class';
import { issueDescription } from 'apps/backoffice/src/app/common/general';
import { SettingsService } from 'apps/backoffice/src/app/common/settings.service';
import {
    ApplicationIcon,
    ApplicationLink,
} from 'apps/backoffice/src/app/common/types';
import { BulkItemModalComponent } from 'apps/backoffice/src/app/overlays/bulk-item-modal/bulk-item-modal.component';
import { ItemCreateUpdateModalComponent } from 'apps/backoffice/src/app/overlays/item-modal/item-modal.component';
import { BackofficeUsersService } from 'apps/backoffice/src/app/users/users.service';
import { VERSION } from '../../../environments/version';

@Component({
    selector: 'topbar-header',
    templateUrl: './topbar-header.template.html',
    styleUrls: ['./topbar-header.styles.scss'],
})
export class TopbarHeaderComponent extends BaseClass implements OnInit {
    /** Whether the sidebar menu should be shown */
    @Input('showMenu') public show_menu: boolean;
    /** Emitter for changes to the sidebar menu show state */
    @Output('showMenuChange')
    public show_menu_change = new EventEmitter<boolean>();
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

    public get is_admin() {
        return this._users.current().sys_admin;
    }

    public get title() {
        return document.title.split(' | ')[0];
    }

    public get github_link() {
        const title = `Issue on page ${this.title}`;
        const description = issueDescription(
            VERSION.hash,
            format(new Date(VERSION.time), 'dd MMM yyyy, h:mm a')
        );
        return `https://github.com/PlaceOS/backoffice/issues/new?title=${encodeURIComponent(
            title
        )}&body=${encodeURIComponent(description)}&labels=bug`;
    }

    public get is_fools_day(): boolean {
        return (
            format(Date.now(), 'D MMM') === '1 Apr' &&
            !localStorage.getItem("I'M NO FOOL!!!")
        );
    }

    /** Application logo */
    public get logo(): ApplicationIcon {
        return this._settings.get('app.logo_light');
    }

    /** Whether global search is enabled */
    public get has_search(): boolean {
        return this._settings.get('app.general.global_search');
    }

    /** Whether global search is enabled */
    public get languages(): {
        name: string;
        locale: string;
        icon: ApplicationIcon;
    }[] {
        return this._settings.get('app.languages') || [];
    }

    /** Active user */
    public get user(): any {
        return this._users.current();
    }

    /** Current environment of the application */
    public get env(): string {
        const auth: any = authority() || {};
        return auth.production ? 'prod' : this._settings.get('env');
    }

    constructor(
        private _settings: SettingsService,
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
        this.newItem(
            new PlaceSystem(),
            (_) => addSystem(_),
            'System',
            PlaceSystem
        );
    }

    public newZone() {
        this.newItem(new PlaceZone(), (_) => addZone(_), 'Zone', PlaceZone);
    }

    public newModule() {
        this.newItem(
            new PlaceModule(),
            (_) => addModule(_),
            'Module',
            PlaceModule
        );
    }

    public newDriver() {
        this.newItem(
            new PlaceDriver(),
            (_) => addDriver(_),
            'Driver',
            PlaceDriver
        );
    }

    public newUser() {
        this.newItem(new PlaceUser(), (_) => addUser(_), 'User', PlaceUser);
    }

    public showUploadHistory() {
        this._settings.post('show_upload_manager', true);
    }

    public logout() {
        logout();
    }

    /**
     * Open the modal to create a new engine resource
     */
    protected newItem<T = any>(
        item: any,
        save: any,
        name: string,
        constr: Type<T>
    ) {
        if (this.bulk) {
            this._settings.post('disable_uploads', true);
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
            ref.afterClosed().subscribe(() =>
                this._settings.post('disable_uploads', false)
            );
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
        this.timeout(
            'toggle_menu',
            () => {
                this.show_menu = !this.show_menu;
                this.show_menu_change.emit(this.show_menu);
            },
            100
        );
    }

    /**
     * Emit changes to the global search filter
     */
    public postFilter() {
        this.filterChange.emit(this.filter);
    }
}
