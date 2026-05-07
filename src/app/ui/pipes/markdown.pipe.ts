import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Marked, type Tokens } from 'marked';
import {
    bundledLanguages,
    codeToHtml,
    type BundledLanguage,
} from 'shiki/bundle/web';

const MARKED = new Marked({
    gfm: true,
});

const HTML_ENTITIES: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
};

function escapeHTML(value = ''): string {
    return value.replace(/[&<>"']/g, (char) => HTML_ENTITIES[char]);
}

function normaliseLanguage(lang = ''): BundledLanguage {
    const language = lang.trim().split(/\s+/)[0].toLowerCase();
    return (language && language in bundledLanguages
        ? language
        : 'text') as BundledLanguage;
}

function safeURL(href = ''): string | null {
    if (!href) return null;
    if (href.startsWith('#') || href.startsWith('/')) return href;
    try {
        const url = new URL(
            href,
            globalThis.location?.origin || 'http://localhost',
        );
        return ['http:', 'https:', 'mailto:', 'tel:'].includes(url.protocol)
            ? href
            : null;
    } catch {
        return null;
    }
}

async function renderMarkdown(value = ''): Promise<string> {
    const highlights = new WeakMap<Tokens.Code, string>();
    const tokens = MARKED.lexer(value);

    await Promise.all(
        MARKED.walkTokens(tokens, async (token) => {
            if (token.type !== 'code') return;
            const code_token = token as Tokens.Code;
            const language = normaliseLanguage(code_token.lang);
            try {
                highlights.set(
                    code_token,
                    await codeToHtml(code_token.text.replace(/^\n+/, ''), {
                        lang: language,
                        theme: 'github-dark',
                    }),
                );
            } catch {
                highlights.set(
                    code_token,
                    `<pre><code>${escapeHTML(code_token.text)}</code></pre>`,
                );
            }
        }),
    );

    const renderer = new MARKED.Renderer();
    renderer.code = (token) =>
        highlights.get(token) ||
        `<pre><code>${escapeHTML(token.text)}</code></pre>`;
    renderer.html = ({ text }) => escapeHTML(text);
    renderer.link = ({ href, title, tokens }) => {
        const url = safeURL(href);
        const label = MARKED.Parser.parseInline(tokens || [], { renderer });
        if (!url) return label;
        const title_attr = title ? ` title="${escapeHTML(title)}"` : '';
        return `<a href="${escapeHTML(url)}"${title_attr}>${label}</a>`;
    };
    renderer.image = ({ href, title, text }) => {
        const url = safeURL(href);
        if (!url) return escapeHTML(text);
        const title_attr = title ? ` title="${escapeHTML(title)}"` : '';
        return `<img src="${escapeHTML(url)}" alt="${escapeHTML(text)}"${title_attr}>`;
    };

    return MARKED.parser(tokens, { renderer });
}

@Pipe({
    name: 'markdown',
    standalone: true,
})
export class MarkdownPipe implements PipeTransform {
    private readonly sanitizer = inject(DomSanitizer);
    private readonly cache = new Map<string, Promise<SafeHtml>>();

    public transform(value: string | null | undefined): Promise<SafeHtml> {
        const markdown = value || '';
        if (!this.cache.has(markdown)) {
            this.cache.set(
                markdown,
                renderMarkdown(markdown).then((html) =>
                    this.sanitizer.bypassSecurityTrustHtml(html),
                ),
            );
        }
        return this.cache.get(markdown) as Promise<SafeHtml>;
    }
}
