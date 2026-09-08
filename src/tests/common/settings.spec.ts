import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// Mock @placeos/ts-client
vi.mock('@placeos/ts-client', () => ({
    showMetadata: vi.fn(() => Promise.resolve({ details: {} })),
    updateMetadata: vi.fn(() => Promise.resolve({})),
}));

// Mock Google Analytics Service
vi.mock('../../app/common/google-analytics.service', () => ({
    GoogleAnalyticsService: class {
        send = vi.fn();
    },
}));

// Mock version info
vi.mock('../../env/version', () => ({
    VERSION: {
        semver: '1.0.0',
        hash: 'abc123',
        time: Date.now(),
    },
}));

// Mock user-state with a signal-shaped function.
vi.mock('../../app/common/user-state', () => ({
    current_user: () => ({ id: 'user-123', name: 'Test User' }),
    currentUser: vi.fn(() => ({ id: 'user-123' })),
}));

// Mock general.ts
vi.mock('../../app/common/general', () => ({
    getItemWithKeys: vi.fn((keys: string[], obj: any) => {
        if (!obj) return null;
        let result = obj;
        for (const key of keys) {
            if (result && typeof result === 'object' && key in result) {
                result = result[key];
            } else {
                return null;
            }
        }
        return result;
    }),
    log: vi.fn(),
}));

import { DEFAULT_SETTINGS } from '../../app/common/settings';
import { SettingsService } from '../../app/common/settings.service';

describe('DEFAULT_SETTINGS', () => {
    describe('composer settings', () => {
        const composer = DEFAULT_SETTINGS.composer;

        it('should have empty domain by default', () => {
            expect(composer.domain).toBe('');
        });

        it('should have route set to /backoffice', () => {
            expect(composer.route).toBe('/backoffice');
        });

        it('should have empty protocol by default', () => {
            expect(composer.protocol).toBe('');
        });

        it('should have use_domain as false', () => {
            expect(composer.use_domain).toBe(false);
        });

        it('should have local_login as false', () => {
            expect(composer.local_login).toBe(false);
        });
    });
});

describe('SettingsService', () => {
    let service: SettingsService;
    let title_service: Title;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                SettingsService,
                {
                    provide: Title,
                    useValue: {
                        getTitle: vi.fn().mockReturnValue('Test Title'),
                        setTitle: vi.fn(),
                    },
                },
            ],
        });

        title_service = TestBed.inject(Title);
        service = TestBed.inject(SettingsService);
    });

    afterEach(() => {
        service.ngOnDestroy();
        vi.clearAllMocks();
    });

    describe('initialization', () => {
        it('should have app_name property', () => {
            expect(service.app_name).toBeDefined();
            expect(typeof service.app_name).toBe('string');
        });
    });

    describe('title getter/setter', () => {
        it('should get title from Title service', () => {
            expect(service.title).toBe('Test Title');
        });

        it('should set title with app name appended', () => {
            service.title = 'Dashboard';
            expect(title_service.setTitle).toHaveBeenCalled();
            const call_args = (title_service.setTitle as any).mock.calls[0][0];
            expect(call_args).toContain('Dashboard');
            expect(call_args).toContain('|');
        });
    });

    describe('time_format getter', () => {
        it('should return 12-hour format by default', () => {
            const format = service.time_format;
            expect(format).toBe('h:mm a');
        });
    });

    describe('listen method', () => {
        it('should return a signal', () => {
            const value = service.listen('test_key');
            expect(value).toBeDefined();
            expect(typeof value).toBe('function');
        });

        it('should return same signal for same key', () => {
            const value1 = service.listen('test_key');
            const value2 = service.listen('test_key');
            expect(value1).toBe(value2);
        });

        it('should expose null initially', () => {
            const value = service.listen('new_key');
            expect(value()).toBeNull();
        });
    });

    describe('post method', () => {
        it('should update value for key', () => {
            const value = service.listen('test_key');
            service.post('test_key', 'new_value');

            expect(value()).toBe('new_value');
        });

        it('should create signal if not exists', () => {
            service.post('brand_new_key', 'value');
            const value = service.listen('brand_new_key');
            expect(value).toBeDefined();
        });
    });

    describe('value method', () => {
        it('should return null for non-existent key', () => {
            const value = service.value('non_existent_key');
            expect(value).toBeNull();
        });

        it('should return posted value', () => {
            service.post('my_key', 'my_value');
            const value = service.value('my_key');
            expect(value).toBe('my_value');
        });

        it('should return typed value', () => {
            service.post<number>('number_key', 42);
            const value = service.value<number>('number_key');
            expect(value).toBe(42);
        });
    });

    describe('get method', () => {
        it('should return value from default settings', () => {
            const value = service.get('debug');
            // Should return the DEFAULT_SETTINGS value
            expect(value).toBeDefined();
        });

        it('should handle nested keys with dot notation', () => {
            const value = service.get('app.title');
            // This depends on the mock implementation
            expect(value).toBeDefined();
        });
    });

    describe('overrides setter', () => {
        it('should read an overridden setting', () => {
            service.overrides = [{ custom: 'value' }];
            expect(service.get('app.custom')).toBe('value');
        });

        it('should restore defaults when overrides are cleared', () => {
            service.overrides = [{ name: 'Override' }];
            service.overrides = [];
            expect(service.get('app.name')).toBe(DEFAULT_SETTINGS.app.name);
        });

        it('should use the first matching override', () => {
            service.overrides = [
                { name: 'First' },
                { name: 'Second', custom: 'fallback' },
            ];
            expect(service.get('app.name')).toBe('First');
            expect(service.get('app.custom')).toBe('fallback');
        });
    });

    describe('overrideCssVariable', () => {
        beforeEach(() => {
            // Clean up any existing style elements
            const existing = document.querySelectorAll(
                '[id^="css-var-overrides+"]',
            );
            existing.forEach((el) => el.remove());
        });

        afterEach(() => {
            // Clean up style elements
            const existing = document.querySelectorAll(
                '[id^="css-var-overrides+"]',
            );
            existing.forEach((el) => el.remove());
        });

        it('should create style element for CSS variable', () => {
            service.overrideCssVariable('primary-color', '#ff0000');
            const element = document.getElementById(
                'css-var-overrides+primary-color',
            );
            expect(element).toBeTruthy();
            expect(element?.tagName).toBe('STYLE');
        });

        it('should set CSS variable value', () => {
            service.overrideCssVariable('test-var', '16px');
            const element = document.getElementById(
                'css-var-overrides+test-var',
            );
            expect(element?.innerText).toContain('--test-var: 16px');
        });

        it('should add !important when flag is set', () => {
            service.overrideCssVariable('important-var', 'red', true);
            const element = document.getElementById(
                'css-var-overrides+important-var',
            );
            expect(element?.innerText).toContain('!important');
        });

        it('should not add !important by default', () => {
            service.overrideCssVariable('normal-var', 'blue');
            const element = document.getElementById(
                'css-var-overrides+normal-var',
            );
            expect(element?.innerText).not.toContain('!important');
        });

        it('should update existing style element', () => {
            service.overrideCssVariable('update-var', 'first');
            service.overrideCssVariable('update-var', 'second');
            const element = document.getElementById(
                'css-var-overrides+update-var',
            );
            expect(element?.innerText).toContain('--update-var: second');
        });
    });

    describe('setTheme', () => {
        beforeEach(() => {
            document.body.className = '';
            localStorage.removeItem('PLACEOS.theme');
        });

        afterEach(() => {
            document.body.className = '';
            localStorage.removeItem('PLACEOS.theme');
        });

        it('should save theme to localStorage', () => {
            service.setTheme('dark');
            expect(localStorage.getItem('PLACEOS.theme')).toBe('dark');
        });

        it('should add theme class to body', () => {
            service.setTheme('dark');
            expect(document.body.classList.contains('theme-dark')).toBe(true);
        });

        it('should remove previous theme class', () => {
            document.body.classList.add('theme-light');
            service.setTheme('dark');
            expect(document.body.classList.contains('theme-light')).toBe(false);
            expect(document.body.classList.contains('theme-dark')).toBe(true);
        });

        it('should handle empty theme string', () => {
            service.setTheme('dark');
            service.setTheme('');
            expect(localStorage.getItem('PLACEOS.theme')).toBe('');
        });
    });

    describe('saveUserSetting', () => {
        it('should handle dark_mode setting', () => {
            const set_theme_spy = vi.spyOn(service, 'setTheme');
            service.saveUserSetting('dark_mode', true);
            expect(set_theme_spy).toHaveBeenCalledWith('dark');
        });

        it('should handle dark_mode false', () => {
            const set_theme_spy = vi.spyOn(service, 'setTheme');
            service.saveUserSetting('dark_mode', false);
            expect(set_theme_spy).toHaveBeenCalledWith('');
        });

        it('should accept any setting name', () => {
            service.saveUserSetting('custom_setting', 'custom_value');
            expect(service.get('custom_setting')).toBe('custom_value');
        });

        it('should accept numeric values', () => {
            service.saveUserSetting('numeric_setting', 42);
            expect(service.get('numeric_setting')).toBe(42);
        });

        it('should accept object values', () => {
            service.saveUserSetting('object_setting', { key: 'value' });
            expect(service.get('object_setting')).toEqual({ key: 'value' });
        });
    });
});
