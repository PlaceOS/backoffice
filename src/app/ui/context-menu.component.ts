import { CdkContextMenuTrigger } from '@angular/cdk/menu';
import { Component } from '@angular/core';

/**
 * Opens a CDK menu at the pointer when the user right-clicks the host.
 * Usage: `<div [context-menu]="menu_template">…</div>`, where
 * `menu_template` is an `<ng-template>` that holds a `cdkMenu`.
 */
@Component({
    selector: '[context-menu]',
    template: `<ng-content />`,
    styles: [
        `
            :host {
                position: relative;
            }
        `,
    ],
    hostDirectives: [
        {
            directive: CdkContextMenuTrigger,
            inputs: ['cdkContextMenuTriggerFor: context-menu'],
        },
    ],
})
export class ContextMenuComponent {}
