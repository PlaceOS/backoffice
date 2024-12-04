import { Component } from '@angular/core';
import { logout } from '@placeos/ts-client';
import { format } from 'date-fns';
import { VERSION } from '../../environments/version';
import { issueDescription } from '../common/general';
import { SettingsService } from '../common/settings.service';

@Component({
    selector: 'user-menu-tooltip',
    template: `
        <div class="bg-base-100  rounded m-2 divide-y divide-base-200 shadow">
            <a
                matRipple
                type="button"
                profile
                [routerLink]="['/users', 'current', 'about']"
                class="space-x-2"
            >
                <app-icon>person</app-icon>
                {{ 'COMMON.PROFILE' | translate }}
            </a>
            <div dark-mode class="flex items-center p-4 w-[16rem]">
                <app-icon>dark_mode</app-icon>
                <p class="flex-1 w-1/2">
                    {{ 'COMMON.DARK_MODE' | translate }}
                </p>
                <mat-slide-toggle [(ngModel)]="dark_mode"></mat-slide-toggle>
            </div>
            <button
                matRipple
                type="button"
                logout
                class="space-x-2"
                (click)="logout()"
            >
                <app-icon>logout</app-icon>
                {{ 'COMMON.LOGOUT' | translate }}
            </button>
            <button
                matRipple
                type="button"
                class="space-x-2"
                uploads
                (click)="showUploadHistory()"
            >
                <app-icon>schedule</app-icon>
                {{ 'COMMON.UPLOAD_HISTORY' | translate }}
            </button>
            <!-- <button
                matRipple
                type="button"
                class="space-x-2"
            >
                <app-icon>language</app-icon>
                
                {{ 'COMMON.LANGUAGE' | translate }}: {{lang.name}}
            </button> -->
            <a
                matRipple
                type="button"
                target="_blank"
                ref="noopener noreferer"
                report
                [href]="github_link | safe: 'url'"
                class="space-x-2"
            >
                <app-icon [className]="'backoffice-github'"></app-icon>
                {{ 'COMMON.REPORT_ISSUE' | translate }}
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
        return this._settings.get('theme') === 'dark';
    }
    public set dark_mode(state: boolean) {
        this._settings.setTheme(state ? 'dark' : 'light');
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

    constructor(private _settings: SettingsService) {}

    public logout() {
        logout();
    }

    public showUploadHistory() {
        this._settings.post('show_upload_manager', true);
    }
}
