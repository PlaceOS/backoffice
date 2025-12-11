import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

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
    setTranslationService,
} from '../../app/common/locale.service';

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

describe('LocaleService behavior patterns', () => {
    it('should handle translation with variable replacement', () => {
        const mock_service = {
            get: vi.fn((key, args) => {
                let value = 'Welcome {{ name }}';
                for (const id in args) {
                    value = value.replace(`{{ ${id} }}`, `${args[id]}`);
                }
                return value;
            }),
        };
        setTranslationService(mock_service as any);

        const result = i18n('welcome', { name: 'Alice' });
        expect(result).toBe('Welcome Alice');
    });

    it('should handle multiple variable replacements', () => {
        const mock_service = {
            get: vi.fn((key, args) => {
                let value = '{{ user }} has {{ count }} messages';
                for (const id in args) {
                    value = value.replace(`{{ ${id} }}`, `${args[id]}`);
                }
                return value;
            }),
        };
        setTranslationService(mock_service as any);

        const result = i18n('messages', { user: 'Bob', count: 5 });
        expect(result).toBe('Bob has 5 messages');
    });

    it('should handle plural forms', () => {
        const mock_service = {
            get: vi.fn((key, args, plural) => {
                if (plural === 1) return '1 item';
                if (plural > 1) return `${plural} items`;
                return '0 items';
            }),
        };
        setTranslationService(mock_service as any);

        expect(i18n('items', {}, 0)).toBe('0 items');
        expect(i18n('items', {}, 1)).toBe('1 item');
        expect(i18n('items', {}, 5)).toBe('5 items');
    });
});
