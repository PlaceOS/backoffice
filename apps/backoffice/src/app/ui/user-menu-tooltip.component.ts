import { Component } from '@angular/core';
import { logout } from '@placeos/ts-client';
import { SettingsService } from '../common/settings.service';
import { BackofficeUsersService } from '../users/users.service';

@Component({
    selector: 'user-menu-tooltip',
    template: `
        <div
            class="bg-white dark:bg-neutral-700 rounded m-2 divide-y divide-gray-200 dark:divide-neutral-600 dark:text-white shadow"
        >
            <a
                matRipple
                type="button"
                [routerLink]="['/profile']"
                class="space-x-2"
            >
                <app-icon [className]="'backoffice-user'"></app-icon>
                Profile
            </a>
            <div class="flex items-center p-4 w-[16rem]">
                <app-icon [className]="'backoffice-moon'"></app-icon>
                <p class="flex-1 w-1/2">Dark Mode</p>
                <mat-slide-toggle [(ngModel)]="dark_mode"></mat-slide-toggle>
            </div>
            <button
                matRipple
                type="button"
                class="space-x-2"
                (click)="logout()"
            >
                <app-icon [className]="'backoffice-log-out'"></app-icon>
                Logout
            </button>
            <button
                matRipple
                type="button"
                class="space-x-2"
                (click)="showUploadHistory()"
            >
                <app-icon [className]="'backoffice-clock'"></app-icon>
                Upload History
            </button>
            <a
                matRipple
                type="button"
                target="_blank"
                ref="noopener noreferer"
                href="https://github.com/PlaceOS/backoffice/issues/new?title=Issue%20on%20page%20Modules&body=%0A**Describe%20the%20bug**%0AA%20clear%20and%20concise%20description%20of%20what%20the%20bug%20is.%0A%0A**To%20Reproduce**%0ASteps%20to%20reproduce%20the%20behavior%3A%0A1.%20Go%20to%20%27...%27%0A2.%20Click%20on%20%27....%27%0A3.%20Scroll%20down%20to%20%27....%27%0A4.%20See%20error%0A%0A**Expected%20behavior**%0AA%20clear%20and%20concise%20description%20of%20what%20you%20expected%20to%20happen.%0A%0A**Screenshots**%0AIf%20applicable%2C%20add%20screenshots%20to%20help%20explain%20your%20problem.%0A%0A**Desktop%20(please%20complete%20the%20following%20information)%3A**%0A%20-%20OS%3A%20%5Be.g.%20iOS%5D%0A%20-%20Browser%20%5Be.g.%20chrome%2C%20safari%5D%0A%20-%20Version%20%5Be.g.%2022%5D%0A%0A**Smartphone%20(please%20complete%20the%20following%20information)%3A**%0A%20-%20Device%3A%20%5Be.g.%20iPhone6%5D%0A%20-%20OS%3A%20%5Be.g.%20iOS8.1%5D%0A%20-%20Browser%20%5Be.g.%20stock%20browser%2C%20safari%5D%0A%20-%20Version%20%5Be.g.%2022%5D%0A%0A**Additional%20context**%0A%0A**Hash%3A**%20g11c1364f%0A**Built%3A**%2003%20May%202022%2C%201%3A15%20PM%0A&labels=bug"
                class="space-x-2"
            >
                <app-icon [className]="'backoffice-github'"></app-icon>
                Report an Issue
            </a>
        </div>
    `,
    styles: [
        `
            [type='button'] {
                display: flex;
                align-items: center;
                padding: 1rem;
                width: 16rem;
            }

            [type='button']:hover {
                background-color: rgba(0, 0, 0, 0.2);
            }

            app-icon {
                margin-right: 0.5rem;
            }
        `,
    ],
})
export class UserMenuTooltipComponent {
    /** Whether dark mode is enabled */
    public get dark_mode(): boolean {
        return this._users.dark_mode;
    }
    public set dark_mode(state: boolean) {
        this._users.dark_mode = state;
    }

    constructor(
        private _settings: SettingsService,
        private _users: BackofficeUsersService
    ) {}

    public logout() {
        logout();
    }

    public showUploadHistory() {
        this._settings.post('show_upload_manager', true);
    }
}
