import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
    updateSettings: vi.fn(),
    addSettings: vi.fn(),
    notifyError: vi.fn(),
    user: { sys_admin: true, support: true },
}));

vi.mock('../../../app/common/notifications', () => ({
    notifyError: mocks.notifyError,
    notifySuccess: vi.fn(),
}));

vi.mock('@placeos/ts-client', () => ({
    EncryptionLevel: { None: 0, Support: 1, Admin: 2, NeverDisplay: 3 },
    PlaceSettings: class {
        constructor(data: Record<string, unknown> = {}) {
            Object.assign(this, { keys: [], settings_string: '', ...data });
        }
    },
    PlaceUser: class {},
    updateSettings: mocks.updateSettings,
    addSettings: mocks.addSettings,
}));

vi.mock('../../../app/users/users.service', () => ({
    BackofficeUsersService: class {
        public currentSignal() {
            return signal(mocks.user);
        }
    },
}));

import { PlaceSettings } from '@placeos/ts-client';
import { SettingsFormComponent } from '../../../app/ui/forms/settings-form.component';
import { BackofficeUsersService } from '../../../app/users/users.service';

const MASK = '<COMMON.SETTINGS_MASKED>';

function createForm() {
    const component = TestBed.runInInjectionContext(
        () => new SettingsFormComponent(),
    );
    component.settings.set(
        [0, 1, 2, 3].map(
            (level) =>
                new PlaceSettings({
                    id: `settings-${level}`,
                    encryption_level: level,
                    settings_string: `level${level}: value`,
                    keys: [`level${level}`],
                } as never),
        ) as never,
    );
    TestBed.tick();
    return component;
}

describe('SettingsFormComponent', () => {
    beforeEach(() => {
        mocks.user = { sys_admin: true, support: true };
        mocks.updateSettings.mockReset();
        mocks.notifyError.mockReset();
        mocks.updateSettings.mockImplementation((id, details) =>
            Promise.resolve(details),
        );
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                BackofficeUsersService,
            ],
        });
    });

    it('saves only the changed levels', () => {
        const component = createForm();
        component.updateSetting(0, 'level0: changed');
        component.saveAll();
        expect(mocks.updateSettings).toHaveBeenCalledTimes(1);
        expect(mocks.updateSettings).toHaveBeenCalledWith(
            'settings-0',
            expect.objectContaining({ settings_string: 'level0: changed' }),
        );
    });

    it('never saves masked encrypted settings', () => {
        const component = createForm();
        expect(component.settingValue(3)).toContain(MASK);
        component.updateSetting(3, `${component.settingValue(3)}new: key\n`);
        component.saveAll();
        component.save(3);
        expect(mocks.updateSettings).not.toHaveBeenCalled();
        expect(mocks.notifyError).toHaveBeenCalledWith(
            'COMMON.SETTINGS_MASKED_ERROR',
        );
    });

    it('masks admin settings for support users', () => {
        mocks.user = { sys_admin: false, support: true };
        const component = createForm();
        expect(component.settingValue(1)).toBe('level1: value');
        expect(component.settingValue(2)).toContain(MASK);
    });
});
