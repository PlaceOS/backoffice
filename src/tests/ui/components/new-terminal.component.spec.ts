import { TestBed } from '@angular/core/testing';
import { describe, expect, it, vi } from 'vitest';
import { NewTerminalComponent } from '../../../app/ui/new-terminal.component';
import { SanitizePipe } from '../../../app/ui/pipes/sanitise.pipe';

vi.mock('../../../app/ui/translate.pipe', () => ({ TranslatePipe: class {} }));

describe('terminal formatting', () => {
    it('formats only new messages, reuses filtered messages, and rewraps on resize', () => {
        const transform = vi.fn((value: string) => value);
        TestBed.overrideComponent(NewTerminalComponent, {
            set: {
                template: '',
                imports: [],
                providers: [{ provide: SanitizePipe, useValue: { transform } }],
            },
        });
        const fixture = TestBed.createComponent(NewTerminalComponent);
        const terminal = fixture.componentInstance;
        fixture.componentRef.setInput('lines', [
            'first message',
            'second message',
        ]);
        expect(terminal.displayed_lines()).toHaveLength(2);
        expect(transform).toHaveBeenCalledTimes(2);
        fixture.componentRef.setInput('lines', [
            'first message',
            'second message',
            'third message',
        ]);
        expect(terminal.displayed_lines()).toHaveLength(3);
        expect(transform).toHaveBeenCalledTimes(3);
        terminal.search.set('second');
        expect(terminal.displayed_lines()).toHaveLength(1);
        terminal.search.set('');
        expect(terminal.displayed_lines()).toHaveLength(3);
        expect(transform).toHaveBeenCalledTimes(3);
        terminal.line_length.set(8);
        expect(terminal.displayed_lines().length).toBeGreaterThan(3);
        expect(transform).toHaveBeenCalledTimes(6);
        fixture.componentRef.setInput('lines', []);
        expect(terminal.displayed_lines()).toEqual([]);
        fixture.componentRef.setInput('lines', ['first message']);
        terminal.displayed_lines();
        expect(transform).toHaveBeenCalledTimes(7);
        fixture.destroy();
    });
});
