import { TestBed } from '@angular/core/testing';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { NewTerminalComponent } from '../../../app/ui/new-terminal.component';

vi.mock('../../../app/ui/translate.pipe', () => ({ TranslatePipe: class {} }));

function createTerminal() {
    TestBed.overrideComponent(NewTerminalComponent, {
        set: { template: '', imports: [] },
    });
    const fixture = TestBed.createComponent(NewTerminalComponent);
    return { fixture, terminal: fixture.componentInstance };
}

describe('terminal formatting', () => {
    afterEach(() => vi.restoreAllMocks());

    it('formats only new messages, reuses filtered messages, and rewraps on resize', () => {
        const format = vi.spyOn(
            NewTerminalComponent.prototype as any,
            '_formatLineWithHTML',
        );
        const { fixture, terminal } = createTerminal();
        fixture.componentRef.setInput('lines', [
            'first message',
            'second message',
        ]);
        expect(terminal.displayed_lines()).toHaveLength(2);
        expect(format).toHaveBeenCalledTimes(2);
        fixture.componentRef.setInput('lines', [
            'first message',
            'second message',
            'third message',
        ]);
        expect(terminal.displayed_lines()).toHaveLength(3);
        expect(format).toHaveBeenCalledTimes(3);
        terminal.search.set('second');
        expect(terminal.displayed_lines()).toHaveLength(1);
        terminal.search.set('');
        expect(terminal.displayed_lines()).toHaveLength(3);
        expect(format).toHaveBeenCalledTimes(3);
        terminal.line_length.set(8);
        expect(terminal.displayed_lines().length).toBeGreaterThan(3);
        expect(format).toHaveBeenCalledTimes(6);
        fixture.componentRef.setInput('lines', []);
        expect(terminal.displayed_lines()).toEqual([]);
        fixture.componentRef.setInput('lines', ['first message']);
        terminal.displayed_lines();
        expect(format).toHaveBeenCalledTimes(7);
        fixture.destroy();
    });

    it('shows HTML in log lines as text and keeps ANSI colours', () => {
        const { fixture, terminal } = createTerminal();
        fixture.componentRef.setInput('lines', ['<b>bold</b> \u001b[31mred']);
        expect(terminal.displayed_lines()).toEqual([
            '<span>&lt;b&gt;bold&lt;/b&gt; </span><span class="tc-31">red</span>',
        ]);
        fixture.destroy();
    });
});
