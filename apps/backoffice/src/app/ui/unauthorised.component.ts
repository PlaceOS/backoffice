import { Component } from '@angular/core';

@Component({
    selector: 'app-unauthorised',
    template: `
        <div
            class="unauthorised border-gray-300 m-4 rounded border bg-base-100 px-8 pb-8 pt-2 text-center text-base-content"
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
    standalone: false
})
export class UnauthorisedComponent {}
