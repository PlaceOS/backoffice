import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// marked and Shiki load on first use, so pages without markdown skip them.
const loadRenderer = () => import('./markdown-render');

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
                loadRenderer()
                    .then(({ renderMarkdown }) => renderMarkdown(markdown))
                    .then((html) =>
                        this.sanitizer.bypassSecurityTrustHtml(html),
                    ),
            );
        }
        return this.cache.get(markdown) as Promise<SafeHtml>;
    }
}
