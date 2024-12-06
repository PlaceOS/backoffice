import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';

import { marked } from 'marked';

export interface ChangelogModalData {
    changelog: string;
}

@Component({
    selector: 'changelog-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="'COMMON.CHANGELOG' | translate"
            [hide_confirm]="true"
        >
            <div
                class="markdown items-start"
                *ngIf="changelog; else empty_state"
                [innerHTML]="changelog | safe: 'html'"
            ></div>
        </fullscreen-modal-shell>
        <ng-template #empty_state>
            <div
                class="w-full h-[50vh] flex flex-col items-center justify-center space-y-4"
            >
                <app-icon class="text-7xl">playlist_remove</app-icon>
                <div class="text">
                    {{ 'COMMON.CHANGELOG_EMPTY' | translate }}
                </div>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class ChangelogModalComponent extends AsyncHandler {
    /** Whether the changelog is loading */
    public loading: boolean;
    /** Changelog Markdown */
    public item: string;

    constructor(@Inject(MAT_DIALOG_DATA) private _data: ChangelogModalData) {
        super();
    }

    /** HTML string for rendering the change log */
    public get changelog(): string {
        return marked(this._data.changelog || '', { async: false }) as string;
    }
}
