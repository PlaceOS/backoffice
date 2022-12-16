import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
    Component,
    ElementRef,
    Input,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { BaseClass } from '../common/base.class';
import { SanitizePipe } from './pipes/sanitise.pipe';

@Component({
    selector: 'new-terminal',
    template: `
        <div
            class="bg-gray-700 w-full h-full text-xs flex items-end relative"
            #container
        >
            <cdk-virtual-scroll-viewport
                itemSize="24"
                class="w-full max-h-full"
                [style.height]="24 * item_count + 'px'"
            >
                <div
                    *cdkVirtualFor="let item of output_lines | async"
                    [innerHTML]="item | safe"
                    class="mono p-1 hover:bg-black/10"
                ></div>
            </cdk-virtual-scroll-viewport>
            <div
                class="absolute inset-0 flex flex-col items-center justify-center text-base select-none"
                *ngIf="!(output_lines | async)?.length"
            >
                <p>No debug messages to display</p>
            </div>
            <div
                class="absolute -top-2 right-2 bg-neutral-800 rounded-b-lg p-2 flex items-center space-x-2"
            >
                <input
                    class="bg-neutral-700 border-none rounded mono text-xs"
                    [(ngModel)]="search"
                    (ngModelChange)="search_string.next($event)"
                />
                <div>{{ search_count }} / {{ lines.length }}</div>
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
    providers: [SanitizePipe],
})
export class NewTerminalComponent extends BaseClass {
    @Input() public lines: string[] = [];
    @Input() public search = '';
    @Input() public resize = 0;

    public search_count = 0;
    public item_count = 0;
    public old_count = 0;
    public line_length = 80;

    @ViewChild(CdkVirtualScrollViewport, { static: true })
    private _scroll_viewport: CdkVirtualScrollViewport;
    @ViewChild('container', { static: true })
    private _container_el: ElementRef<HTMLDivElement>;

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
                this._scroll_viewport.getOffsetToRenderedContentStart();
            const size = this._scroll_viewport.getViewportSize();
            this.timeout(
                'update_viewport',
                () => {
                    this._scroll_viewport?.checkViewportSize();
                    if (
                        (offset + size) / 24 > this.old_count - 7 ||
                        this.old_count < 5
                    ) {
                        this._scroll_viewport.scrollToIndex(this.item_count);
                    }
                    this.old_count = 0;
                },
                10
            );
            return out_lines;
        }),
        catchError((e) => {
            console.log(e);
            return of([]);
        }),
        shareReplay(1)
    );

    constructor(private _sanitize_pipe: SanitizePipe) {
        super();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.lines && this.lines) {
            this.line_list.next(this.lines);
        }
        if (changes.search) {
            this.search_string.next(this.search || '');
        }
        if (changes.resize) {
            this._updateLineLength();
        }
    }

    private _updateLineLength() {
        this.line_length = Math.max(
            40,
            Math.floor(
                this._container_el.nativeElement.getBoundingClientRect().width /
                    8
            )
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
                        (count + 1) * this.line_length
                    )
                )}`
            );
            count += 1;
        }
        return lines;
    }
}

function setTermColorsForLine(line: string) {
    return `<span>${line.replace(
        /\u001b?\[([0-9]*)m/g,
        '</span><span class="tc-$1">'
    )}</span>`.replace('<span></span>', '');
}
