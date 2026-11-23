import { Module } from '@placeos/ts-client';
import { PlaceDriverRole } from '@placeos/ts-client/compat';
import { describe, expect, it } from 'vitest';
import { newItem } from '../../app/common/placeos';
import { generateModuleFormModel } from '../../app/modules/modules.utilities';

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
                role: PlaceDriverRole.Logic,
                driver_id: '',
                edge_id: '',
            });
        });

        it('populates values from a module', () => {
            const model = generateModuleFormModel(
                newItem(Module, {
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
                    role: PlaceDriverRole.Device,
                    driver_id: 'driver-1',
                    edge_id: 'edge-1',
                }),
            );

            expect(model).toMatchObject({
                id: 'module-1',
                ip: '10.0.0.2',
                port: 4999,
                tls: true,
                udp: true,
                makebreak: true,
                role: PlaceDriverRole.Device,
                driver_id: 'driver-1',
                edge_id: 'edge-1',
            });
        });

        it('makes the system from its id and the name the API sends', () => {
            const model = generateModuleFormModel(
                newItem(Module, {
                    control_system_id: 'sys-1',
                    control_system: { name: 'Room 1', zone_data: [] },
                }),
            );

            expect(model.control_system_id).toBe('sys-1');
            expect(model.system).toMatchObject({ id: 'sys-1', name: 'Room 1' });
        });

        it('has no system until the system details load', () => {
            const model = generateModuleFormModel(
                newItem(Module, { control_system_id: 'sys-1' }),
            );
            expect(model.control_system_id).toBe('sys-1');
            expect(model.system).toBeNull();
        });
    });
});
