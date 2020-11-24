import { Component } from '@angular/core';

@Component({
    selector: 'app-unauthorised',
    template: `
        <div
            class="unauthorised bg-white text-black rounded border border-gray-300 text-center pt-2 px-8 pb-8 m-4"
        >
            <h1>403</h1>
            <h3 i18n="@@forbiddenLabel">Access forbidden.</h3>
            <p i18n="@@invalidPermissionLabel">
                You do not have permission to view this page and your access attempt has been
                recorded.
            </p>
            <p i18n="@@contactAdminLabel">
                Contact your Administrator if you feel that you should have access.
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
