import {
    CdkVirtualScrollViewport,
    ScrollingModule,
} from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    SimpleChanges,
    computed,
    inject,
    input,
    model,
    signal,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncHandler } from '../common/async-handler.class';
import { SafePipe } from './pipes/safe.pipe';
import { SanitizePipe } from './pipes/sanitise.pipe';
import { TranslatePipe } from './translate.pipe';

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
                [style.height]="24 * item_count() + 'px'"
            >
                <div
                    *cdkVirtualFor="let item of displayed_lines()"
                    [innerHTML]="item | safe"
                    class="mono hover:bg-base-content/10 p-1"
                ></div>
            </cdk-virtual-scroll-viewport>
            @if (!displayed_lines().length) {
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
                    [(ngModel)]="search"
                    placeholder="🔍 Filter output"
                />
                <div>{{ search_count() }} / {{ lines().length }}</div>
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
    imports: [
        FormsModule,
        ScrollingModule,
        CommonModule,
        SafePipe,
        TranslatePipe,
    ],
})
export class NewTerminalComponent extends AsyncHandler {
    private _sanitize_pipe = inject(SanitizePipe);

    public readonly lines = input<string[]>([]);
    public readonly search = model('');
    public readonly resize = input(0);

    public readonly old_count = signal(0);
    public readonly line_length = signal(80);
    public readonly search_count = computed(() => {
        const s = this.search().toLowerCase();
        const list = this.lines().filter((_) => _.toLowerCase().includes(s));
        return list.length;
    });
    public readonly displayed_lines = computed(() => {
        const s = this.search().toLowerCase();
        const list = this.lines().filter((_) => _.toLowerCase().includes(s));
        let out_lines = [];
        for (const ln of list) {
            if (!ln) continue;
            out_lines = out_lines.concat(this._formatLineWithHTML(ln));
        }
        this._handleOutputLines(out_lines);
        return out_lines;
    });
    public readonly item_count = computed(() => this.displayed_lines().length);

    private readonly _scroll_viewport = viewChild(CdkVirtualScrollViewport);
    private readonly _container_el =
        viewChild<ElementRef<HTMLDivElement>>('container');

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.resize) {
            this._updateLineLength();
        }
    }

    private _updateLineLength() {
        this.line_length.set(
            Math.max(
                40,
                Math.floor(
                    this._container_el().nativeElement.getBoundingClientRect()
                        .width / 8,
                ),
            ),
        );
    }

    private _formatLineWithHTML(line: string) {
        const sanitized_line = this._sanitize_pipe.transform(line).toString();
        if (sanitized_line.length < this.line_length())
            return [setTermColorsForLine(sanitized_line)];
        const lines = [];
        let count = 0;
        while (
            count < 128 &&
            count * this.line_length() < sanitized_line.length
        ) {
            lines.push(
                `${
                    count > 0 ? '&nbsp;&nbsp;&nbsp;&nbsp;' : ''
                }${setTermColorsForLine(
                    sanitized_line.substring(
                        count * this.line_length(),
                        (count + 1) * this.line_length(),
                    ),
                )}`,
            );
            count += 1;
        }
        return lines;
    }

    private _handleOutputLines(lines: string[]) {
        const new_count = lines.length;
        const old_count = new_count || 0;
        const offset =
            this._scroll_viewport().getOffsetToRenderedContentStart();
        const size = this._scroll_viewport().getViewportSize();
        this.timeout(
            'update_viewport',
            () => {
                this._scroll_viewport()?.checkViewportSize();
                if ((offset + size) / 24 > old_count - 7 || old_count < 5) {
                    this._scroll_viewport().scrollToIndex(new_count);
                }
            },
            10,
        );
    }
}

function setTermColorsForLine(line: string) {
    return `<span>${line.replace(
        /\u001b?\[([0-9]*)m/g,
        '</span><span class="tc-$1">',
    )}</span>`.replace('<span></span>', '');
}
