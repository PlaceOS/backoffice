import { describe, expect, it, vi } from 'vitest';
import { generateDriverFormModel } from '../../app/drivers/drivers.utilities';

const mocks = vi.hoisted(() => ({
    PlaceDriverRole: {
        Logic: 3,
        Device: 4,
    },
}));

vi.mock('@placeos/ts-client', () => ({
    PlaceDriverRole: mocks.PlaceDriverRole,
}));

describe('drivers.utilities', () => {
    describe('generateDriverFormModel', () => {
        it('returns defaults', () => {
            expect(generateDriverFormModel()).toEqual({
                id: '',
                repository_id: '',
                file_name: '',
                commit: '',
                name: '',
                role: mocks.PlaceDriverRole.Logic,
                module_name: '',
                default_uri: '',
                default_port: 1,
                alert_level: 'medium',
                class_name: '',
                description: '',
                ignore_connected: false,
                settings: '',
            });
        });

        it('populates values from a driver', () => {
            const model = generateDriverFormModel({
                id: 'driver-1',
                repository_id: 'repo-1',
                file_name: 'driver.rb',
                commit: 'abc123',
                name: 'Display Driver',
                role: mocks.PlaceDriverRole.Device,
                module_name: 'Display',
                default_uri: 'tcp://1.2.3.4:23',
                default_port: 23,
                alert_level: 'high',
                class_name: 'DisplayDriver',
                description: 'Controls displays',
                ignore_connected: true,
            } as any);

            expect(model).toMatchObject({
                id: 'driver-1',
                repository_id: 'repo-1',
                role: mocks.PlaceDriverRole.Device,
                module_name: 'Display',
                default_port: 23,
                ignore_connected: true,
            });
        });
    });
});
