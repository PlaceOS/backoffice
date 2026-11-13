import { SecurityContext } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { describe, expect, it } from 'vitest';
import { MarkdownPipe } from '../../../app/ui/pipes/markdown.pipe';

describe('Markdown highlighting', () => {
    it('renders supported aliases with the selected theme and escapes unsupported code', async () => {
        const pipe = TestBed.runInInjectionContext(() => new MarkdownPipe());
        const value = await pipe.transform(
            '```js\nconst answer = 42;\n```\n\n```unknown-language\n<script>alert(1)</script>\n```',
        );
        const html = TestBed.inject(DomSanitizer).sanitize(
            SecurityContext.HTML,
            value,
        );
        expect(html).toContain('shiki github-dark');
        expect(html).toContain('const');
        const document = new DOMParser().parseFromString(html, 'text/html');
        expect(document.querySelector('script')).toBeNull();
        expect(document.querySelectorAll('code')[1].textContent).toBe(
            '<script>alert(1)</script>',
        );
    });

    it('keeps raw HTML and unsafe URLs inactive and renders safe links', async () => {
        const pipe = TestBed.runInInjectionContext(() => new MarkdownPipe());
        const value = await pipe.transform(
            '<img src="x" onerror="alert(1)">\n\n' +
                'Text <span onclick="alert(2)">inline</span>\n\n' +
                '[bad](javascript:alert(3)) ![pic](javascript:alert(4)) ' +
                '[docs](https://example.com/docs)',
        );
        const html = TestBed.inject(DomSanitizer).sanitize(
            SecurityContext.HTML,
            value,
        );
        const document = new DOMParser().parseFromString(html, 'text/html');

        expect(document.querySelector('[onerror], [onclick]')).toBeNull();
        expect(document.querySelector('img')).toBeNull();
        expect(html).not.toContain('javascript:');
        const links = document.querySelectorAll('a');
        expect(links).toHaveLength(1);
        expect(links[0].getAttribute('href')).toBe('https://example.com/docs');
        expect(links[0].textContent).toBe('docs');
    });
});
