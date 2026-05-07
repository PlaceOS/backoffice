import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AsyncHandler } from '../common/async-handler.class';

import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { IconComponent } from '../ui/icon.component';
import { MarkdownPipe } from '../ui/pipes/markdown.pipe';
import { TranslatePipe } from '../ui/translate.pipe';

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
                    class="markdown changelog items-start"
                    [innerHTML]="changelog | markdown | async"
                ></div>
            } @else {
                <div
                    class="flex h-[50vh] w-full flex-col items-center justify-center space-y-4"
                >
                    <icon class="text-7xl">playlist_remove</icon>
                    <div class="text">
                        {{ 'COMMON.CHANGELOG_EMPTY' | translate }}
                    </div>
                </div>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        AsyncPipe,
        MarkdownPipe,
        TranslatePipe,
        IconComponent,
    ],
})
export class ChangelogModalComponent extends AsyncHandler {
    private _data = inject<ChangelogModalData>(MAT_DIALOG_DATA);

    /** Whether the changelog is loading */
    public loading: boolean;
    public readonly changelog = this._data.changelog;
}
