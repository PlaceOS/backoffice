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
            @if (changelog) {
                <div
                    class="markdown items-start"
                    [innerHTML]="changelog | safe: 'html'"
                ></div>
            } @else {
                <div
                    class="flex h-[50vh] w-full flex-col items-center justify-center space-y-4"
                >
                    <app-icon class="text-7xl">playlist_remove</app-icon>
                    <div class="text">
                        {{ 'COMMON.CHANGELOG_EMPTY' | translate }}
                    </div>
                </div>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    standalone: false,
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
