import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DriverStateService } from './driver-state.service';

import { Router } from '@angular/router';
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
            } @else {
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
export class DriverDocsComponent implements OnInit {
    private _service = inject(DriverStateService);
    private _router = inject(Router);

    public readonly docs = this._service.docs;

    public async ngOnInit() {
        const str = this.docs();
        if (str) return;
        this._router.navigate([
            '/drivers',
            this._service.active_item.id,
            'about',
        ]);
    }
}
