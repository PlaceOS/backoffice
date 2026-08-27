import { describe, expect, it, vi } from 'vitest';
import type { PlaceModule } from '@placeos/ts-client';
import { generateModuleFormModel } from '../../app/modules/modules.utilities';

const mocks = vi.hoisted(() => ({
    PlaceDriverRole: {
        Logic: 3,
        Device: 4,
    },
}));

vi.mock('@placeos/ts-client', () => ({
    PlaceDriverRole: mocks.PlaceDriverRole,
}));

describe('modules.utilities', () => {
    describe('generateModuleFormModel', () => {
        it('returns defaults', () => {
            expect(generateModuleFormModel()).toMatchObject({
                id: '',
                ip: '',
                port: 0,
                tls: false,
                udp: false,
                makebreak: false,
                ignore_connected: false,
                alert_level: 'medium',
                uri: '',
                notes: '',
                name: '',
                custom_name: '',
                control_system_id: '',
                role: mocks.PlaceDriverRole.Logic,
                driver_id: '',
                edge_id: '',
            });
        });

        it('populates values from a module', () => {
            const model = generateModuleFormModel({
                id: 'module-1',
                ip: '10.0.0.2',
                port: 4999,
                tls: true,
                udp: true,
                makebreak: true,
                ignore_connected: true,
                alert_level: 'high',
                uri: 'tcp://10.0.0.2:4999',
                notes: 'notes',
                name: 'Display',
                custom_name: 'Display 1',
                control_system_id: 'sys-1',
                role: mocks.PlaceDriverRole.Device,
                driver_id: 'driver-1',
                edge_id: 'edge-1',
            } as any);

            expect(model).toMatchObject({
                id: 'module-1',
                ip: '10.0.0.2',
                port: 4999,
                tls: true,
                udp: true,
                makebreak: true,
                role: mocks.PlaceDriverRole.Device,
                driver_id: 'driver-1',
                edge_id: 'edge-1',
            });
        });

        it('uses the selected system id when control_system_id is missing', () => {
            const model = generateModuleFormModel({
                system: { id: 'sys-1' },
                control_system_id: '',
            } as unknown as PlaceModule);

            expect(model.control_system_id).toBe('sys-1');
        });
    });
});
