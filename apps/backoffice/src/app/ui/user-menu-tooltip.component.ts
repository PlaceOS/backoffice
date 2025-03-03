import { Component, OnInit } from '@angular/core';
import { logout } from '@placeos/ts-client';
import { format } from 'date-fns';
import { VERSION } from '../../environments/version';
import { issueDescription } from '../common/general';
import { SettingsService } from '../common/settings.service';
import { i18n } from '../common/translate';
import { LocaleService } from '../common/locale.service';

@Component({
    selector: 'user-menu-tooltip',
    template: `
        <div class="m-2 divide-y divide-base-200 rounded bg-base-100 shadow">
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
            <div dark-mode class="flex w-[16rem] items-center p-4">
                <app-icon>dark_mode</app-icon>
                <p class="w-1/2 flex-1">
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
            <button
                matRipple
                type="button"
                *ngIf="languages.length > 1"
                [matMenuTriggerFor]="lang_menu"
            >
                <app-icon>language</app-icon>

                <div class="flex-1 text-left">
                    {{ 'COMMON.LANGUAGE' | translate }}
                </div>
                <div
                    class="max-w-24 truncate rounded bg-base-200 px-2 py-1 text-sm"
                >
                    {{ active_lang.name }}
                </div>
            </button>
            <mat-menu #lang_menu="matMenu" xPosition="after" yPosition="above">
                <button
                    mat-menu-item
                    *ngFor="let language of languages"
                    class="w-60"
                    (click)="setLanguage(language.id)"
                >
                    <div
                        class="flex w-full items-center justify-between space-x-4"
                    >
                        <div>{{ language.name }}</div>
                        <div>{{ language.flag }}</div>
                    </div>
                </button>
            </mat-menu>
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
export class UserMenuTooltipComponent implements OnInit {
    /** Whether dark mode is enabled */
    public get dark_mode(): boolean {
        return this._settings.get('theme') === 'dark';
    }
    public set dark_mode(state: boolean) {
        this._settings.setTheme(state ? 'dark' : 'light');
    }

    public lang = 'en';
    public languages = [];

    public get active_lang() {
        return (
            this.languages.find((_) => _.id === this.lang) || {
                id: 'en',
                name: 'English',
            }
        );
    }

    public get github_link() {
        const title = `Issue on page`;
        const description = issueDescription(
            VERSION.hash,
            format(VERSION.time, 'dd MMM yyyy, h:mm a'),
        );
        return `https://github.com/PlaceOS/backoffice/issues/new?title=${encodeURIComponent(
            title,
        )}&body=${encodeURIComponent(description)}&labels=bug`;
    }

    constructor(
        private _settings: SettingsService,
        private _locale: LocaleService,
    ) {}

    public ngOnInit() {
        this.lang = this._locale.locale;
        this.languages = [
            { id: 'en', name: i18n('COMMON.LANG_ENGLISH'), flag: '🇬🇧' },
            { id: 'jp', name: i18n('COMMON.LANG_JAPANESE'), flag: '🇯🇵' },
            { id: 'fr', name: i18n('COMMON.LANG_FRENCH'), flag: '🇫🇷' },
            { id: 'es', name: i18n('COMMON.LANG_SPANISH'), flag: '🇪🇸' },
            { id: 'ar', name: i18n('COMMON.LANG_ARABIC'), flag: '' },
        ];
    }

    public setLanguage(lang: string) {
        this._locale.setLocale(lang);
        localStorage.setItem('BACKOFFICE.locale', lang);
        this.languages = [
            { id: 'en', name: i18n('COMMON.LANG_ENGLISH'), flag: '🇬🇧' },
            { id: 'jp', name: i18n('COMMON.LANG_JAPANESE'), flag: '🇯🇵' },
            { id: 'fr', name: i18n('COMMON.LANG_FRENCH'), flag: '🇫🇷' },
            { id: 'es', name: i18n('COMMON.LANG_SPANISH'), flag: '🇪🇸' },
            { id: 'ar', name: i18n('COMMON.LANG_ARABIC'), flag: '' },
        ];
        setTimeout(() => location.reload(), 100);
    }

    public logout() {
        logout();
    }

    public showUploadHistory() {
        this._settings.post('show_upload_manager', true);
    }
}
