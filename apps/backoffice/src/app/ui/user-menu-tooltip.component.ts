import { Component } from '@angular/core';
import { logout } from '@placeos/ts-client';
import { format } from 'date-fns';
import { VERSION } from '../../environments/version';
import { issueDescription } from '../common/general';
import { SettingsService } from '../common/settings.service';
import { TranslateService } from '@ngx-translate/core';
import { i18n } from '../common/translate';

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
            <button
                matRipple
                type="button"
                class="space-x-2"
                *ngIf="languages.length > 1"
                [matMenuTriggerFor]="lang_menu"
            >
                <app-icon>language</app-icon>

                {{ 'COMMON.LANGUAGE' | translate }}: {{ active_lang.name }}
            </button>
            <mat-menu #lang_menu="matMenu" xPosition="after" yPosition="above">
                <button
                    mat-menu-item
                    *ngFor="let language of languages"
                    class="w-60"
                    (click)="setLanguage(language.id)"
                >
                    <div
                        class="flex items-center justify-between space-x-4 w-full"
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
export class UserMenuTooltipComponent {
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
            format(VERSION.time, 'dd MMM yyyy, h:mm a')
        );
        return `https://github.com/PlaceOS/backoffice/issues/new?title=${encodeURIComponent(
            title
        )}&body=${encodeURIComponent(description)}&labels=bug`;
    }

    constructor(
        private _settings: SettingsService,
        private _translate_service: TranslateService
    ) {}

    public ngOnInit() {
        this.lang = this._translate_service.currentLang;
        console.log('Lang:', this.lang);
        this.languages = [
            { id: 'en', name: i18n('COMMON.LANG_ENGLISH'), flag: '🇬🇧' },
            { id: 'jp', name: i18n('COMMON.LANG_JAPANESE'), flag: '🇯🇵' },
            { id: 'fr', name: i18n('COMMON.LANG_FRENCH'), flag: '🇫🇷' },
            { id: 'es', name: i18n('COMMON.LANG_SPANISH'), flag: '🇪🇸' },
            { id: 'ar', name: i18n('COMMON.LANG_ARABIC'), flag: '' },
        ];
    }

    public setLanguage(lang: string) {
        this._translate_service.use(lang);
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
