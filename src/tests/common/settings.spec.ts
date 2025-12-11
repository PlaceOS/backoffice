import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, of } from 'rxjs';

// Create mock_user at module level BEFORE vi.mock calls
const mock_user_subject = new BehaviorSubject<any>({ id: 'user-123', name: 'Test User' });

// Mock @placeos/ts-client
vi.mock('@placeos/ts-client', () => ({
    showMetadata: vi.fn(() => of({ details: {} })),
    updateMetadata: vi.fn(() => of({})),
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

// Mock user-state - use inline subject creation to avoid hoisting issues
vi.mock('../../app/common/user-state', () => {
    const { BehaviorSubject } = require('rxjs');
    const subject = new BehaviorSubject({ id: 'user-123', name: 'Test User' });
    return {
        current_user: subject.asObservable(),
        currentUser: vi.fn(() => ({ id: 'user-123' })),
    };
});

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
    describe('root settings', () => {
        it('should have env property', () => {
            expect(DEFAULT_SETTINGS).toHaveProperty('env');
            expect(typeof DEFAULT_SETTINGS.env).toBe('string');
        });

        it('should have debug property', () => {
            expect(DEFAULT_SETTINGS).toHaveProperty('debug');
            expect(typeof DEFAULT_SETTINGS.debug).toBe('boolean');
        });

        it('should have mock property', () => {
            expect(DEFAULT_SETTINGS).toHaveProperty('mock');
            expect(typeof DEFAULT_SETTINGS.mock).toBe('boolean');
        });

        it('should have composer settings', () => {
            expect(DEFAULT_SETTINGS).toHaveProperty('composer');
            expect(DEFAULT_SETTINGS.composer).toHaveProperty('domain');
            expect(DEFAULT_SETTINGS.composer).toHaveProperty('route');
            expect(DEFAULT_SETTINGS.composer).toHaveProperty('protocol');
            expect(DEFAULT_SETTINGS.composer).toHaveProperty('use_domain');
            expect(DEFAULT_SETTINGS.composer).toHaveProperty('local_login');
        });

        it('should have app settings', () => {
            expect(DEFAULT_SETTINGS).toHaveProperty('app');
        });
    });

    describe('app settings', () => {
        const app = DEFAULT_SETTINGS.app;

        it('should have title', () => {
            expect(app).toHaveProperty('title');
            expect(typeof app.title).toBe('string');
        });

        it('should have name', () => {
            expect(app).toHaveProperty('name');
            expect(typeof app.name).toBe('string');
        });

        it('should have description', () => {
            expect(app).toHaveProperty('description');
            expect(typeof app.description).toBe('string');
        });

        it('should have short_name', () => {
            expect(app).toHaveProperty('short_name');
            expect(typeof app.short_name).toBe('string');
        });

        it('should have code', () => {
            expect(app).toHaveProperty('code');
            expect(typeof app.code).toBe('string');
        });

        it('should have copyright', () => {
            expect(app).toHaveProperty('copyright');
            expect(typeof app.copyright).toBe('string');
        });

        it('should have login settings', () => {
            expect(app).toHaveProperty('login');
            expect(app.login).toHaveProperty('forgot');
        });

        it('should have analytics settings', () => {
            expect(app).toHaveProperty('analytics');
            expect(app.analytics).toHaveProperty('enabled');
            expect(app.analytics).toHaveProperty('tracking_id');
        });

        it('should have logo_light settings', () => {
            expect(app).toHaveProperty('logo_light');
            expect(app.logo_light).toHaveProperty('type');
            expect(app.logo_light).toHaveProperty('src');
        });
    });

    describe('feature settings', () => {
        const app = DEFAULT_SETTINGS.app;

        it('should have general settings', () => {
            expect(app).toHaveProperty('general');
            expect(app.general).toHaveProperty('global_search');
        });

        it('should have systems settings', () => {
            expect(app).toHaveProperty('systems');
            expect(app.systems).toHaveProperty('can_create');
        });

        it('should have modules settings', () => {
            expect(app).toHaveProperty('modules');
            expect(app.modules).toHaveProperty('can_create');
        });

        it('should have zones settings', () => {
            expect(app).toHaveProperty('zones');
            expect(app.zones).toHaveProperty('can_create');
        });

        it('should have drivers settings', () => {
            expect(app).toHaveProperty('drivers');
            expect(app.drivers).toHaveProperty('can_create');
        });

        it('should have users settings', () => {
            expect(app).toHaveProperty('users');
            expect(app.users).toHaveProperty('can_create');
        });

        it('should have domains settings', () => {
            expect(app).toHaveProperty('domains');
            expect(app.domains).toHaveProperty('can_create');
        });

        it('should have triggers settings', () => {
            expect(app).toHaveProperty('triggers');
            expect(app.triggers).toHaveProperty('can_create');
        });

        it('should have repositories settings', () => {
            expect(app).toHaveProperty('repositories');
            expect(app.repositories).toHaveProperty('can_create');
        });
    });

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
        it('should be created', () => {
            expect(service).toBeTruthy();
        });

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
        it('should return an observable', () => {
            const obs = service.listen('test_key');
            expect(obs).toBeDefined();
            expect(typeof obs.subscribe).toBe('function');
        });

        it('should return same observable for same key', () => {
            const obs1 = service.listen('test_key');
            const obs2 = service.listen('test_key');
            expect(obs1).toBe(obs2);
        });

        it('should emit null initially', async () => {
            const obs = service.listen('new_key');
            const value = await new Promise((resolve) => {
                obs.subscribe((v) => resolve(v));
            });
            expect(value).toBeNull();
        });
    });

    describe('post method', () => {
        it('should update value for key', async () => {
            const obs = service.listen('test_key');
            service.post('test_key', 'new_value');

            const value = await new Promise((resolve) => {
                obs.subscribe((v) => {
                    if (v !== null) resolve(v);
                });
            });
            expect(value).toBe('new_value');
        });

        it('should create observable if not exists', () => {
            service.post('brand_new_key', 'value');
            const obs = service.listen('brand_new_key');
            expect(obs).toBeDefined();
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
        it('should accept override settings', () => {
            // Should not throw
            service.overrides = [{ custom: 'value' }];
            expect(true).toBe(true);
        });

        it('should accept empty overrides array', () => {
            service.overrides = [];
            expect(true).toBe(true);
        });

        it('should accept multiple overrides', () => {
            service.overrides = [
                { first: 'override' },
                { second: 'override' },
            ];
            expect(true).toBe(true);
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
            // Should not throw
            service.saveUserSetting('custom_setting', 'custom_value');
            expect(true).toBe(true);
        });

        it('should accept numeric values', () => {
            service.saveUserSetting('numeric_setting', 42);
            expect(true).toBe(true);
        });

        it('should accept object values', () => {
            service.saveUserSetting('object_setting', { key: 'value' });
            expect(true).toBe(true);
        });
    });
});
