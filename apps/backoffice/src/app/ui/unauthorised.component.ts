import { Component } from '@angular/core';

@Component({
    selector: 'app-unauthorised',
    template: `
        <div
            class="unauthorised bg-base-100 text-base-content rounded border border-gray-300 text-center pt-2 px-8 pb-8 m-4"
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
})
export class UnauthorisedComponent {}
