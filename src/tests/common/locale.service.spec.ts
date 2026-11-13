import type { PlaceMetadata } from '@placeos/ts-client';
import { showMetadata } from '@placeos/ts-client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// Mock @placeos/ts-client
vi.mock('@placeos/ts-client', () => ({
    showMetadata: vi.fn(() => ({
        toPromise: () => Promise.resolve({ details: {} }),
    })),
}));

// Mock general.ts log function
vi.mock('../../app/common/general', () => ({
    log: vi.fn(),
}));

// We need to import and test the i18n function and setTranslationService
import {
    i18n,
    localeFromUrl,
    LocaleService,
    setTranslationService,
} from '../../app/common/locale.service';

describe('localeFromUrl', () => {
    it('should read lang from the hash query', () => {
        expect(localeFromUrl('', '#/systems/sys-1/about?lang=fr')).toBe('fr');
    });

    it('should read lang from the page search', () => {
        expect(localeFromUrl('?lang=fr', '#/systems')).toBe('fr');
    });

    it('should prefer the hash query over the page search', () => {
        expect(localeFromUrl('?lang=de', '#/systems?lang=fr')).toBe('fr');
    });

    it('should return null when lang is not set', () => {
        expect(
            localeFromUrl('?x-api-key=abc', '#/systems?tab=zones'),
        ).toBeNull();
    });
});

describe('i18n function', () => {
    afterEach(() => {
        vi.restoreAllMocks();
        // Reset the service
        setTranslationService(null as any);
    });

    it('should return key when no service is set', () => {
        setTranslationService(null as any);
        const result = i18n('test.key');
        expect(result).toBe('test.key');
    });

    it('should return key with args when no service is set', () => {
        setTranslationService(null as any);
        const result = i18n('test.key', { name: 'John' });
        expect(result).toBe('test.key');
    });

    it('should call service.get when service is set', () => {
        const mock_service = {
            get: vi.fn().mockReturnValue('Translated Value'),
        };
        setTranslationService(mock_service as any);

        const result = i18n('test.key');

        expect(mock_service.get).toHaveBeenCalledWith('test.key', {}, 0);
        expect(result).toBe('Translated Value');
    });

    it('should pass args to service.get', () => {
        const mock_service = {
            get: vi.fn().mockReturnValue('Hello John'),
        };
        setTranslationService(mock_service as any);

        const result = i18n('greeting', { name: 'John' });

        expect(mock_service.get).toHaveBeenCalledWith(
            'greeting',
            { name: 'John' },
            0,
        );
        expect(result).toBe('Hello John');
    });

    it('should pass plural to service.get', () => {
        const mock_service = {
            get: vi.fn().mockReturnValue('1 item'),
        };
        setTranslationService(mock_service as any);

        const result = i18n('items', {}, 1);

        expect(mock_service.get).toHaveBeenCalledWith('items', {}, 1);
        expect(result).toBe('1 item');
    });

    it('should pass both args and plural to service.get', () => {
        const mock_service = {
            get: vi.fn().mockReturnValue('5 items selected'),
        };
        setTranslationService(mock_service as any);

        const result = i18n('items.selected', { count: 5 }, 5);

        expect(mock_service.get).toHaveBeenCalledWith(
            'items.selected',
            { count: 5 },
            5,
        );
        expect(result).toBe('5 items selected');
    });
});

describe('setTranslationService', () => {
    afterEach(() => {
        setTranslationService(null as any);
    });

    it('should allow setting a service', () => {
        const mock_service = {
            get: vi.fn().mockReturnValue('test'),
        };
        setTranslationService(mock_service as any);

        // Verify it works by calling i18n
        i18n('key');
        expect(mock_service.get).toHaveBeenCalled();
    });

    it('should allow setting service to null', () => {
        const mock_service = {
            get: vi.fn().mockReturnValue('test'),
        };
        setTranslationService(mock_service as any);
        setTranslationService(null as any);

        // Should not throw and should return key
        const result = i18n('key');
        expect(result).toBe('key');
    });

    it('should replace previous service', () => {
        const mock_service1 = {
            get: vi.fn().mockReturnValue('service1'),
        };
        const mock_service2 = {
            get: vi.fn().mockReturnValue('service2'),
        };

        setTranslationService(mock_service1 as any);
        i18n('key1');
        expect(mock_service1.get).toHaveBeenCalledTimes(1);

        setTranslationService(mock_service2 as any);
        i18n('key2');
        expect(mock_service2.get).toHaveBeenCalledTimes(1);
        expect(mock_service1.get).toHaveBeenCalledTimes(1); // Not called again
    });
});

describe('LocaleService translations', () => {
    /** Serve `data` as the locale file */
    const stubLocaleFile = (data: object) =>
        vi.stubGlobal(
            'fetch',
            vi.fn(() =>
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(data),
                }),
            ),
        );

    beforeEach(() => localStorage.clear());
    afterEach(() => {
        vi.unstubAllGlobals();
        localStorage.clear();
    });

    it('fills in arguments and picks plural forms from the locale file', async () => {
        stubLocaleFile({
            INBOX: {
                WELCOME: 'Bonjour {{ name }}',
                ITEMS_1: '{{ count }} élément',
                ITEMS_N: '{{ count }} éléments',
            },
        });
        const service = new LocaleService();
        await service.setLocale('fr');
        expect(service.get('INBOX.WELCOME', { name: 'Alex' })).toBe(
            'Bonjour Alex',
        );
        expect(service.get('INBOX.ITEMS', { count: 1 }, 1)).toBe('1 élément');
        expect(service.get('INBOX.ITEMS', { count: 5 }, 5)).toBe('5 éléments');
    });

    it('lets zone metadata replace matching strings and keeps the others', async () => {
        stubLocaleFile({ INBOX: { WELCOME: 'Bonjour', LEAVE: 'Au revoir' } });
        vi.mocked(showMetadata).mockResolvedValueOnce({
            details: { INBOX: { WELCOME: 'Salut' } },
        } as Partial<PlaceMetadata> as PlaceMetadata);
        const service = new LocaleService();
        service.zone_id = 'zone-1';
        await service.setLocale('fr');
        expect(showMetadata).toHaveBeenCalledWith('zone-1', 'locale_fr');
        expect(service.get('INBOX.WELCOME')).toBe('Salut');
        expect(service.get('INBOX.LEAVE')).toBe('Au revoir');
    });
});

describe('LocaleService page language', () => {
    afterEach(() => vi.unstubAllGlobals());

    it('marks the page with the language of the loaded translations', async () => {
        vi.stubGlobal(
            'fetch',
            vi.fn((url: string) =>
                Promise.resolve({
                    ok: url.endsWith('/fr.json'),
                    json: () => Promise.resolve({}),
                }),
            ),
        );
        const service = new LocaleService();

        await service.setLocale('fr');
        expect(document.documentElement.lang).toBe('fr');

        // Only fr.json exists, so the text falls back to the default locale
        await service.setLocale('de-DE');
        expect(document.documentElement.lang).toBe('en-AU');
    });
});
