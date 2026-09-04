import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IconComponent } from '../ui/icon.component';
import { MarkdownPipe } from '../ui/pipes/markdown.pipe';
import { TranslatePipe } from '../ui/translate.pipe';
import { RepositoriesStateService } from './repositories-state.service';

@Component({
    selector: 'repository-changelog',
    template: `
        <div class="px-4 py-2">
            @if (loading()) {
                <div
                    class="flex min-h-64 items-center justify-center"
                    role="status"
                    aria-label="Loading changelog"
                >
                    <mat-spinner diameter="40" />
                </div>
            } @else if (changelog()) {
                <div
                    class="markdown changelog items-start"
                    [innerHTML]="changelog() | markdown | async"
                ></div>
            } @else {
                <div
                    class="bg-base-200 flex min-h-64 w-full flex-col items-center justify-center space-y-4 rounded-xl opacity-30"
                >
                    <icon class="text-7xl">playlist_remove</icon>
                    <p>{{ 'COMMON.CHANGELOG_EMPTY' | translate }}</p>
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                min-height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [
        AsyncPipe,
        IconComponent,
        MarkdownPipe,
        MatProgressSpinnerModule,
        TranslatePipe,
    ],
})
export class RepositoryChangelogComponent {
    private readonly _service = inject(RepositoriesStateService);

    public readonly changelog = this._service.changelog;
    public readonly loading = this._service.changelog_loading;
}
