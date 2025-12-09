import { Component } from '@angular/core';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'app-unauthorised',
    template: `
        <div
            class="unauthorised bg-base-100 text-base-content m-4 rounded-sm border border-gray-300 px-8 pt-2 pb-8 text-center"
        >
            <h1>403</h1>
            <h3>{{ 'COMMON.FORBIDDEN' | translate }}</h3>
            <p>
                {{ 'COMMON.INVALID_PAGE_PERMISSIONS' | translate }}
            </p>
            <p>
                {{ 'COMMON.CONTACT_ADMIN' | translate }}
            </p>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .unauthorised {
                width: 24em;
            }

            @media (prefers-color-scheme: dark) {
                .unauthorised {
                    background-color: #262626 !important;
                    color: #fff !important;
                }
            }
        `,
    ],
    imports: [TranslatePipe],
})
export class UnauthorisedComponent {}
