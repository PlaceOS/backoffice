import { Component, inject } from '@angular/core';
import { SettingsService } from '../common/settings.service';

export interface BannerDetails {
    id: string;
    type?: 'info' | 'warn' | 'error';
    content: string;
}

@Component({
    selector: 'global-banner',
    template: `
        @if (!has_viewed) {
            <div
                class="flex w-full items-center space-x-4 p-4"
                [class.bg-info]="banner.type === 'info' || !banner.type"
                [class.text-info-content]="
                    banner.type === 'info' || !banner.type
                "
                [class.bg-warning]="banner.type === 'warn'"
                [class.text-warning-content]="banner.type === 'warn'"
                [class.bg-error]="banner.type === 'error'"
                [class.text-error-content]="banner.type === 'error'"
            >
                <div class="flex-1">{{ banner?.content }}</div>
                <button icon (click)="close()">
                    <app-icon>close</app-icon>
                </button>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: block;
                width: 100%;
            }
        `,
    ],
    standalone: false,
})
export class GlobalBannerComponent {
    private _settings = inject(SettingsService);

    public get has_viewed() {
        return (
            !this.banner?.content ||
            localStorage.getItem('PLACE.last_banner') === this.banner.id
        );
    }

    public get banner(): BannerDetails {
        return this._settings.value('banner');
    }

    public close() {
        localStorage.setItem('PLACE.last_banner', this.banner?.id || '');
    }
}
