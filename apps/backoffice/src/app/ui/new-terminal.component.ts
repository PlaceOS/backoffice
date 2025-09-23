import {
    CdkVirtualScrollViewport,
    ScrollingModule,
} from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    SimpleChanges,
    inject,
    input,
    model,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { AsyncHandler } from '../common/async-handler.class';
import { SafePipe } from './pipes/safe.pipe';
import { SanitizePipe } from './pipes/sanitise.pipe';

@Component({
    selector: 'new-terminal',
    template: `
        <div
            class="relative flex h-full w-full items-end bg-[#424242] text-xs text-white"
            #container
        >
            <cdk-virtual-scroll-viewport
                itemSize="24"
                class="max-h-full w-full"
                [style.height]="24 * item_count + 'px'"
            >
                <div
                    *cdkVirtualFor="let item of output_lines | async"
                    [innerHTML]="item | safe"
                    class="mono hover:bg-base-content/10 p-1"
                ></div>
            </cdk-virtual-scroll-viewport>
            @if (!(output_lines | async)?.length) {
                <div
                    class="absolute inset-0 flex select-none flex-col items-center justify-center text-base"
                >
                    <p class="opacity-60">
                        {{ 'COMMON.DEBUG_NO_MESSAGES' | translate }}
                    </p>
                </div>
            }
            <div
                class="absolute -top-11 right-0 flex items-center space-x-2 p-2"
            >
                <input
                    class="bg-neutral-700 mono border-none p-1 text-sm"
                    [ngModel]="search()"
                    placeholder="🔍 Filter output"
                    (ngModelChange)="
                        search.set($event); search_string.next($event)
                    "
                />
                <div>{{ search_count }} / {{ lines().length }}</div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                height: 1px;
                flex-grow: 1;
                width: 100%;
            }
        `,
    ],
    imports: [FormsModule, ScrollingModule, CommonModule, SafePipe],
})
export class NewTerminalComponent extends AsyncHandler {
    private _sanitize_pipe = inject(SanitizePipe);

    public readonly lines = input<string[]>([]);
    public readonly search = model('');
    public readonly resize = input(0);

    public search_count = 0;
    public item_count = 0;
    public old_count = 0;
    public line_length = 80;

    private readonly _scroll_viewport = viewChild(CdkVirtualScrollViewport);
    private readonly _container_el =
        viewChild<ElementRef<HTMLDivElement>>('container');

    public readonly line_list = new BehaviorSubject<string[]>([]);
    public readonly search_string = new BehaviorSubject('');
    public readonly output_lines = combineLatest([
        this.search_string,
        this.line_list,
    ]).pipe(
        map(([search, lines]) => {
            const s = search.toLowerCase();
            const list = lines.filter((_) => _.toLowerCase().includes(s));
            this.search_count = list.length;
            let out_lines = [];
            for (const ln of list) {
                if (!ln) continue;
                out_lines = out_lines.concat(this._formatLineWithHTML(ln));
            }
            if (!this.old_count) this.old_count = this.item_count;
            this.item_count = out_lines.length;
            const offset =
                this._scroll_viewport().getOffsetToRenderedContentStart();
            const size = this._scroll_viewport().getViewportSize();
            this.timeout(
                'update_viewport',
                () => {
                    this._scroll_viewport()?.checkViewportSize();
                    if (
                        (offset + size) / 24 > this.old_count - 7 ||
                        this.old_count < 5
                    ) {
                        this._scroll_viewport().scrollToIndex(this.item_count);
                    }
                    this.old_count = 0;
                },
                10,
            );
            return out_lines;
        }),
        catchError(() => of([])),
        shareReplay(1),
    );

    public ngOnChanges(changes: SimpleChanges) {
        const lines = this.lines();
        if (changes.lines && lines) {
            this.line_list.next(lines);
        }
        if (changes.search) {
            this.search_string.next(this.search() || '');
        }
        if (changes.resize) {
            this._updateLineLength();
        }
    }

    private _updateLineLength() {
        this.line_length = Math.max(
            40,
            Math.floor(
                this._container_el().nativeElement.getBoundingClientRect()
                    .width / 8,
            ),
        );
        this.line_list.next(this.line_list.getValue());
    }

    private _formatLineWithHTML(line: string) {
        const sanitized_line = this._sanitize_pipe.transform(line).toString();
        if (sanitized_line.length < this.line_length)
            return [setTermColorsForLine(sanitized_line)];
        const lines = [];
        let count = 0;
        while (
            count < 128 &&
            count * this.line_length < sanitized_line.length
        ) {
            lines.push(
                `${
                    count > 0 ? '&nbsp;&nbsp;&nbsp;&nbsp;' : ''
                }${setTermColorsForLine(
                    sanitized_line.substring(
                        count * this.line_length,
                        (count + 1) * this.line_length,
                    ),
                )}`,
            );
            count += 1;
        }
        return lines;
    }
}

function setTermColorsForLine(line: string) {
    return `<span>${line.replace(
        /\u001b?\[([0-9]*)m/g,
        '</span><span class="tc-$1">',
    )}</span>`.replace('<span></span>', '');
}
