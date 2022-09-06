import { Component } from '@angular/core';
import { logout } from '@placeos/ts-client';
import { format } from 'date-fns';
import { VERSION } from '../../environments/version';
import { issueDescription } from '../common/general';
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
                profile
                [routerLink]="['/profile']"
                class="space-x-2"
            >
                <app-icon [className]="'backoffice-user'"></app-icon>
                Profile
            </a>
            <div dark-mode class="flex items-center p-4 w-[16rem]">
                <app-icon [className]="'backoffice-moon'"></app-icon>
                <p class="flex-1 w-1/2">Dark Mode</p>
                <mat-slide-toggle [(ngModel)]="dark_mode"></mat-slide-toggle>
            </div>
            <button
                matRipple
                type="button"
                logout
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
                uploads
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
                report
                [href]="github_link | safe:'url'"
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

    public get github_link() {
        const title = `Issue on page`;
        const description = issueDescription(
            VERSION.hash,
            format(VERSION.time, 'dd MMM yyyy, h:mm a')
        );
        return `https://github.com/PlaceOS/backoffice/issues/new?title=${encodeURIComponent(
            title
        )}&body=${encodeURIComponent(description)}&labels=bug`;
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
