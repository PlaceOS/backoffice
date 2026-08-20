import { resolveSignagePluginUrl } from '../../app/admin/signage-plugins/signage-plugin-embed.component';

describe('SignagePluginEmbedComponent', () => {
    describe('resolveSignagePluginUrl', () => {
        const base_uri = 'https://backoffice.example/admin/signage-plugins/';

        it('resolves a relative plugin URI against the document base URI', () => {
            const result = resolveSignagePluginUrl(
                '../plugins/news-ticker.html',
                base_uri,
            );

            expect(result?.href).toBe(
                'https://backoffice.example/admin/plugins/news-ticker.html',
            );
            expect(result?.origin).toBe('https://backoffice.example');
        });

        it('preserves an absolute plugin URI', () => {
            const result = resolveSignagePluginUrl(
                'http://localhost:8080/news-ticker.html',
                base_uri,
            );

            expect(result?.href).toBe('http://localhost:8080/news-ticker.html');
            expect(result?.origin).toBe('http://localhost:8080');
        });

        it('rejects an invalid plugin URI', () => {
            expect(resolveSignagePluginUrl('http://[', base_uri)).toBeNull();
        });
    });
});
