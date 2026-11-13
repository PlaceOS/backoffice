import { TestBed } from '@angular/core/testing';
import { SignagePlugin } from '@placeos/ts-client';
import { describe, expect, it } from 'vitest';
import {
    resolveSignagePluginUrl,
    SIGNAGE_PLUGIN_API_VERSION,
    SignagePluginEmbedComponent,
} from '../../app/admin/signage-plugins/signage-plugin-embed.component';

describe('SignagePluginEmbedComponent', () => {
    it('only reads messages from its frame that use the plugin API', () => {
        const fixture = TestBed.createComponent(SignagePluginEmbedComponent);
        fixture.componentRef.setInput('plugin', {
            uri: 'https://plugin.example/news.html',
        } as SignagePlugin);
        fixture.detectChanges();
        const frame = (fixture.nativeElement as HTMLElement).querySelector(
            'iframe',
        );
        const loaded = (source: Window, api: string) =>
            window.dispatchEvent(
                new MessageEvent('message', {
                    source,
                    data: {
                        api,
                        type: 'loaded',
                        payload: { config_schema: { title: 'News' } },
                    },
                }),
            );

        loaded(window, SIGNAGE_PLUGIN_API_VERSION);
        loaded(frame.contentWindow, 'signage-plugin/v0');
        expect(fixture.componentInstance.schema()).toEqual({});

        loaded(frame.contentWindow, SIGNAGE_PLUGIN_API_VERSION);
        expect(fixture.componentInstance.schema()).toEqual({ title: 'News' });
    });

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

        it('rejects a non-http plugin URI', () => {
            expect(
                resolveSignagePluginUrl('javascript:alert(1)', base_uri),
            ).toBeNull();
        });
    });
});
