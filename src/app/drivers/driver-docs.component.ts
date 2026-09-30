import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DriverStateService } from './driver-state.service';

import { IconComponent } from '../ui/icon.component';
import { MarkdownPipe } from '../ui/pipes/markdown.pipe';

@Component({
    selector: 'driver-docs',
    template: `
        <div class="px-8 py-4">
            @let docs_string = docs();
            @if (docs_string) {
                <div
                    class="markdown items-start"
                    [innerHTML]="docs_string | markdown | async"
                ></div>
            } @else if (!docs_loading()) {
                <div
                    class="bg-base-200 flex min-h-[calc(100vh-20rem)] w-full flex-col items-center justify-center space-y-4 rounded-xl opacity-30"
                >
                    <icon class="text-8xl">comments_disabled</icon>
                    <p>No documentation available for this driver</p>
                </div>
            }
        </div>
    `,
    styles: [``],
    imports: [MarkdownPipe, IconComponent, AsyncPipe],
})
export class DriverDocsComponent {
    private _service = inject(DriverStateService);

    public readonly docs = this._service.docs;
    /** Hide the empty state until the readme request settles */
    public readonly docs_loading = this._service.docs_loading;
}
