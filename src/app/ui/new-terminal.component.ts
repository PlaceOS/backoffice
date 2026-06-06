import {
    Component,
    computed,
    effect,
    ElementRef,
    inject,
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
import { SafePipe } from './pipes/safe.pipe';
import { SanitizePipe } from './pipes/sanitise.pipe';
import { TranslatePipe } from './translate.pipe';
import { VirtualScrollComponent } from './virtual-scroll.component';

@Component({
    selector: 'new-terminal',
    template: `
        <ng-template #line_template let-item="item">
            <div
                [innerHTML]="item | safe"
                class="mono p-1 hover:bg-white/10"
            ></div>
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
    providers: [SanitizePipe],
    imports: [
        IconComponent,
        FormsModule,
        SafePipe,
        TranslatePipe,
        VirtualScrollComponent,
    ],
})
export class NewTerminalComponent extends AsyncHandler implements OnChanges {
    private _sanitize_pipe = inject(SanitizePipe);

    public readonly lines = input<string[]>([]);
    public readonly search = model('');
    public readonly resize = input(0);

    public readonly old_count = signal(0);
    public readonly line_length = signal(80);
    private readonly _filtered_events = computed(() => {
        const s = this.search().toLowerCase();
        return this.lines().filter((event) => event.toLowerCase().includes(s));
    });
    public readonly search_count = computed(
        () => this._filtered_events().length,
    );
    public readonly displayed_lines = computed(() => {
        const out_lines: string[] = [];
        for (const event of this._filtered_events()) {
            if (!event) continue;
            // Split event into individual lines, then format each
            for (const ln of event.split('\n')) {
                out_lines.push(...this._formatLineWithHTML(ln));
            }
        }
        return out_lines;
    });
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
        const max_length = this.line_length();
        if (sanitized_line.length <= max_length)
            return [setTermColorsForLine(sanitized_line)];
        const lines = [];
        let remaining = sanitized_line;
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
                }${setTermColorsForLine(segment)}`,
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

function setTermColorsForLine(line: string) {
    return `<span>${line.replace(
        // eslint-disable-next-line no-control-regex
        /\u001b?\[([0-9]*)m/g,
        '</span><span class="tc-$1">',
    )}</span>`.replace('<span></span>', '');
}
