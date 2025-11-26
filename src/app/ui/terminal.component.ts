import {
    Component,
    ElementRef,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    input,
    viewChild,
} from '@angular/core';
import { AsyncHandler } from '../common/async-handler.class';

@Component({
    selector: 'a-terminal',
    template: `
        <div
            class="h-full w-full overflow-hidden p-2"
            #container
            (window:resize)="resizeTerminal()"
        >
            <div terminal class="min-h-full max-w-full" #terminal></div>
        </div>
    `,
    styles: [
        `
            :host > div {
                background-color: #263238;
            }
        `,
    ],
    imports: [],
})
export class TerminalComponent
    extends AsyncHandler
    implements OnInit, OnChanges, OnDestroy
{
    /** Contents to display on the terminal */
    public readonly content = input<string>(undefined);
    /** Resizes terminal display on change */
    public readonly resize = input<boolean>(undefined);
    /** Local instance of an xterm terminal */
    public terminal: any;

    public readonly terminal_element =
        viewChild<ElementRef<HTMLDivElement>>('terminal');
    public readonly container_el =
        viewChild<ElementRef<HTMLDivElement>>('container');

    public ngOnInit(): void {
        if (this.terminal) this.ngOnDestroy();
        // this.terminal = new Terminal({
        //     theme: {
        //         background: `#263238`,
        //         red: '#e53935',
        //         blue: '#1e88e5',
        //         yellow: '#fdd835',
        //         green: '#43a047',
        //     },
        //     fontSize: 12,
        // });
        // this.terminal.open(this.terminal_element().nativeElement);
        this.timeout('init', () => {
            this.resizeTerminal();
            this.updateTerminalContents(this.content() || '');
        });
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.content) {
            this.updateTerminalContents(this.content() || '');
        }
        if (changes.resize) {
            this.timeout('resize', () => this.resizeTerminal());
        }
    }

    public ngOnDestroy(): void {
        this.terminal.clear();
        this.terminal.dispose();
    }

    /**
     * Resize the terminal display to fill the container element
     */
    public resizeTerminal(): void {
        const container_el = this.container_el();
        if (!this.terminal || !container_el) return;
        const font_size = this.terminal.options.fontSize;
        const line_height = this.terminal.options.lineHeight;
        const box = container_el.nativeElement.getBoundingClientRect();
        const width = Math.floor(box.width / (font_size * 0.6));
        const height = Math.floor(
            box.height / (line_height * font_size * 1.28),
        );
        this.terminal.resize(width - 2, height);
    }

    /**
     * Update the rendered contents of the terminal view
     * @param new_content New contents to render
     */
    private updateTerminalContents(new_content: string) {
        if (!this.terminal) return;
        this.terminal.selectAll();
        this.terminal.clearSelection();
        this.terminal.write('\x1b[H\x1b[2J');
        const lines: string[] = new_content.split('\n');
        lines.reverse().forEach((line) => this.terminal.writeln(line));
        // this.timeout('scroll', () => this.terminal.scrollToBottom(), 50);
    }
}
