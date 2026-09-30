import {
    Component,
    computed,
    effect,
    ElementRef,
    input,
    model,
    OnChanges,
    signal,
    SimpleChanges,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncHandler } from '../common/async-handler.class';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';
import { VirtualScrollComponent } from './virtual-scroll.component';

@Component({
    selector: 'new-terminal',
    template: `
        <ng-template #line_template let-item="item">
            <div [innerHTML]="item" class="mono p-1 hover:bg-white/10"></div>
        </ng-template>
        <div
            class="bg-base-200 border-base-300 relative flex h-full w-full items-end border-t text-xs text-white"
            #container
        >
            <virtual-scroll
                class="max-h-full w-full"
                [style.height]="24 * item_count() + 'px'"
                [items]="displayed_lines()"
                [item_size]="24"
                [item_template]="line_template"
                (scrolled)="onScrolled($event)"
            />
            @if (!displayed_lines().length) {
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center text-base select-none"
                >
                    <p class="opacity-60">
                        {{ 'COMMON.DEBUG_NO_MESSAGES' | translate }}
                    </p>
                </div>
            }
            <div
                class="absolute -top-11 right-0 flex items-center space-x-2 p-2"
            >
                <icon class="absolute top-1/2 left-3 -translate-y-1/2 text-xl"
                    >search</icon
                >
                <input
                    class="mono bg-base-200 placeholder:text-base-400 rounded border-none px-8 py-1 pr-1 text-sm text-white"
                    [(ngModel)]="search"
                    placeholder="Filter output"
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
                grow: 1;
                width: 100%;
            }
        `,
    ],
    imports: [
        IconComponent,
        FormsModule,
        TranslatePipe,
        VirtualScrollComponent,
    ],
})
export class NewTerminalComponent extends AsyncHandler implements OnChanges {
    public readonly lines = input<string[]>([]);
    public readonly search = model('');
    public readonly resize = input(0);

    public readonly old_count = signal(0);
    public readonly line_length = signal(80);
    private _format_width = 0;
    private _format_cache = new Map<
        string,
        { search: string; lines: string[] }
    >();
    private readonly _formatted_events = computed(() => {
        const width = this.line_length();
        if (width !== this._format_width) this._format_cache.clear();
        this._format_width = width;
        const next = new Map<string, { search: string; lines: string[] }>();
        const events = this.lines().map((event) => {
            const formatted = next.get(event) ||
                this._format_cache.get(event) || {
                    search: event.toLowerCase(),
                    lines: event
                        ? event
                              .split('\n')
                              .flatMap((line) => this._formatLineWithHTML(line))
                        : [],
                };
            next.set(event, formatted);
            return formatted;
        });
        // Keep only the current history, including entries hidden by the filter.
        this._format_cache = next;
        return events;
    });
    private readonly _filtered_events = computed(() => {
        const search = this.search().toLowerCase();
        return this._formatted_events().filter((event) =>
            event.search.includes(search),
        );
    });
    public readonly search_count = computed(
        () => this._filtered_events().length,
    );
    public readonly displayed_lines = computed(() =>
        this._filtered_events().flatMap((event) => event.lines),
    );
    public readonly item_count = computed(() => this.displayed_lines().length);

    private readonly _scroll_viewport = viewChild(VirtualScrollComponent);
    private readonly _container_el =
        viewChild<ElementRef<HTMLDivElement>>('container');

    private _scroll_offset = 0;
    private _scroll_range = 0;

    constructor() {
        super();
        effect(() => {
            const lines = this.displayed_lines();
            this._handleOutputLines(lines);
        });
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.resize) {
            this._updateLineLength();
        }
    }

    public onScrolled([offset, end]: [number, number]) {
        this._scroll_offset = offset;
        this._scroll_range = end - offset;
    }

    private _updateLineLength() {
        if (!this._container_el()) return;
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

    /**
     * Wrap a raw log line to the terminal width and convert it to HTML.
     * The line is split before escaping so that entities are not cut in half.
     */
    private _formatLineWithHTML(line: string) {
        const max_length = this.line_length();
        if (line.length <= max_length) return [formatTermLine(line)];
        const lines = [];
        let remaining = line;
        let count = 0;
        while (count < 128 && remaining.length > 0) {
            let break_at = max_length;
            if (remaining.length > max_length) {
                // Find last space within the limit
                const last_space = remaining.lastIndexOf(' ', max_length);
                if (last_space > max_length * 0.3) {
                    break_at = last_space;
                }
            } else {
                break_at = remaining.length;
            }
            const segment = remaining.substring(0, break_at);
            remaining = remaining.substring(break_at).trimStart();
            lines.push(
                `${
                    count > 0 ? '&nbsp;&nbsp;&nbsp;&nbsp;' : ''
                }${formatTermLine(segment)}`,
            );
            count += 1;
        }
        return lines;
    }

    private _handleOutputLines(lines: string[]) {
        const new_count = lines.length;
        const old_count = this.old_count();
        this.timeout(
            'update_viewport',
            () => {
                const viewport = this._scroll_viewport();
                if (!viewport) return;
                viewport.updateContainer();
                // Auto-scroll to bottom if near the end
                if (
                    this._scroll_offset + this._scroll_range > old_count - 7 ||
                    old_count < 5
                ) {
                    viewport.scrollToIndex(new_count);
                }
                this.old_count.set(new_count);
            },
            10,
        );
    }
}

const HTML_ENTITIES: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
};

/** Escape HTML so log text renders as text, not markup */
function escapeHtml(value: string) {
    return value.replace(/[&<>"']/g, (char) => HTML_ENTITIES[char]);
}

/** Escape a log line, then convert ANSI colour codes to styled spans */
function formatTermLine(line: string) {
    return `<span>${escapeHtml(line).replace(
        // eslint-disable-next-line no-control-regex
        /\u001b?\[([0-9]*)m/g,
        '</span><span class="tc-$1">',
    )}</span>`.replace('<span></span>', '');
}
