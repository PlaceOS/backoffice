import { Component, Input, SimpleChanges } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'new-terminal',
    template: `
        <div class="bg-neutral-700 w-full h-full text-xs">
            <cdk-virtual-scroll-viewport itemSize="24" class="w-full h-full">
                <div
                    *cdkVirtualFor="let item of output_lines | async"
                    [innerHTML]="item | sanitize"
                    class="mono p-1 hover:bg-black/10"
                ></div>
            </cdk-virtual-scroll-viewport>
        </div>
    `,
    styles: [``],
})
export class NewTerminalComponent {
    @Input() public lines: string[] = [];
    @Input() public search = '';
    @Input() public resize = 0;

    public line_length = 80;

    public readonly line_list = new BehaviorSubject<string[]>([]);
    public readonly search_string = new BehaviorSubject('');
    public readonly output_lines = combineLatest([
        this.search_string,
        this.line_list,
    ]).pipe(map(([search, lines]) => {
        const s = search.toLowerCase();
        const list = lines.filter(_ => _.toLowerCase().includes(s));
        let out_lines = [];
        for (const ln of list) {
            out_lines = out_lines.concat(this._formatLineWithHTML(ln));
        }
        return out_lines;
    }));

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

    }

    private _formatLineWithHTML(line: string) {
        if (line.length < this.line_length) return [line];
        const lines = [];
        let count = 0;
        while(count * this.line_length > line.length) {
            lines.push(
                line.substring(
                    count * this.line_length, 
                    (count + 1) * this.line_length
                )
            );
            count += 1;
        }
        return lines;
    }
}
