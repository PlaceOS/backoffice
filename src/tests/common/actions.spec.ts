import { beforeEach, describe, expect, it, vi } from 'vitest';

// Mock form components to avoid loading heavy Angular dependencies
vi.mock('../../app/domains/domain-form.component', () => ({
    DomainFormComponent: class {},
}));
vi.mock('../../app/drivers/driver-form.component', () => ({
    DriverFormComponent: class {},
}));
vi.mock('../../app/modules/module-form.component', () => ({
    ModuleFormComponent: class {},
}));
vi.mock('../../app/repositories/repository-form.component', () => ({
    RepositoryFormComponent: class {},
}));
vi.mock('../../app/systems/system-form.component', () => ({
    SystemFormComponent: class {},
}));
vi.mock('../../app/triggers/trigger-form.component', () => ({
    TriggerFormComponent: class {},
}));
vi.mock('../../app/users/user-form.component', () => ({
    UserFormComponent: class {},
}));
vi.mock('../../app/zones/zone-form.component', () => ({
    ZoneFormComponent: class {},
}));

// Mock @placeos/ts-client
vi.mock('@placeos/ts-client', () => {
    const resolved = (value: unknown = {}) => Promise.resolve(value);
    const query_response = () => resolved({ data: [], total: 0 });
    return {
        PlaceDomain: class {},
        PlaceDriver: class {},
        PlaceGroup: class {},
        PlaceModule: class {},
        PlaceRepository: class {},
        PlaceSystem: class {},
        PlaceTrigger: class {},
        PlaceUser: class {},
        PlaceZone: class {},
        PlaceDriverRole: {
            Device: 1,
            Logic: 3,
        },
        addDomain: vi.fn(() => resolved()),
        addDriver: vi.fn(() => resolved()),
        addGroup: vi.fn(() => resolved()),
        addModule: vi.fn(() => resolved()),
        addRepository: vi.fn(() => resolved()),
        addSystem: vi.fn(() => resolved()),
        addTrigger: vi.fn(() => resolved()),
        addUser: vi.fn(() => resolved()),
        addZone: vi.fn(() => resolved()),
        queryDomains: vi.fn(query_response),
        queryDrivers: vi.fn(query_response),
        queryGroups: vi.fn(query_response),
        queryModules: vi.fn(query_response),
        queryRepositories: vi.fn(query_response),
        querySystems: vi.fn(query_response),
        queryTriggers: vi.fn(query_response),
        queryUsers: vi.fn(query_response),
        queryZones: vi.fn(query_response),
        removeDomain: vi.fn(() => resolved()),
        removeDriver: vi.fn(() => resolved()),
        removeGroup: vi.fn(() => resolved()),
        removeModule: vi.fn(() => resolved()),
        removeRepository: vi.fn(() => resolved()),
        removeSystem: vi.fn(() => resolved()),
        removeTrigger: vi.fn(() => resolved()),
        removeUser: vi.fn(() => resolved()),
        removeZone: vi.fn(() => resolved()),
        showDomain: vi.fn(() => resolved()),
        showDriver: vi.fn(() => resolved()),
        showGroup: vi.fn(() => resolved()),
        showModule: vi.fn(() => resolved()),
        showRepository: vi.fn(() => resolved()),
        showSystem: vi.fn(() => resolved()),
        showTrigger: vi.fn(() => resolved()),
        showUser: vi.fn(() => resolved()),
        showZone: vi.fn(() => resolved()),
        startSystem: vi.fn(() => resolved()),
        updateDomain: vi.fn(() => resolved()),
        updateDriver: vi.fn(() => resolved()),
        updateGroup: vi.fn(() => resolved()),
        updateModule: vi.fn(() => resolved()),
        updateRepository: vi.fn(() => resolved()),
        updateSystem: vi.fn(() => resolved()),
        updateTrigger: vi.fn(() => resolved()),
        updateUser: vi.fn(() => resolved()),
        updateZone: vi.fn(() => resolved()),
    };
});

import * as client from '@placeos/ts-client';
import { ACTIONS } from '../../app/common/actions';

describe('actions.ts', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('ACTIONS object', () => {
        it('should have domains action', () => {
            expect(ACTIONS.domains).toBeDefined();
            expect(ACTIONS.domains.name).toBe('DOMAINS');
        });

        it('should have drivers action', () => {
            expect(ACTIONS.drivers).toBeDefined();
            expect(ACTIONS.drivers.name).toBe('DRIVERS');
        });

        it('should have modules action', () => {
            expect(ACTIONS.modules).toBeDefined();
            expect(ACTIONS.modules.name).toBe('MODULES');
        });

        it('should have repositories action', () => {
            expect(ACTIONS.repositories).toBeDefined();
            expect(ACTIONS.repositories.name).toBe('REPOS');
        });

        it('should have systems action', () => {
            expect(ACTIONS.systems).toBeDefined();
            expect(ACTIONS.systems.name).toBe('SYSTEMS');
        });

        it('should have triggers action', () => {
            expect(ACTIONS.triggers).toBeDefined();
            expect(ACTIONS.triggers.name).toBe('TRIGGERS');
        });

        it('should have users action', () => {
            expect(ACTIONS.users).toBeDefined();
            expect(ACTIONS.users.name).toBe('USERS');
        });

        it('should have zones action', () => {
            expect(ACTIONS.zones).toBeDefined();
            expect(ACTIONS.zones.name).toBe('ZONES');
        });
    });

    describe('domains actions', () => {
        it('should have itemConstructor', () => {
            expect(ACTIONS.domains.itemConstructor).toBe(client.PlaceDomain);
        });

        it('should call queryDomains with query', () => {
            ACTIONS.domains.query('test');
            expect(client.queryDomains).toHaveBeenCalledWith({
                q: 'test',
                fields: 'id,name,domain',
            });
        });

        it('should call showDomain for show', () => {
            ACTIONS.domains.show('domain-123');
            expect(client.showDomain).toHaveBeenCalledWith('domain-123');
        });

        it('should call addDomain for new item', () => {
            const item = { name: 'New Domain' } as any;
            ACTIONS.domains.save(item);
            expect(client.addDomain).toHaveBeenCalledWith(item);
        });

        it('should call updateDomain for existing item', () => {
            const item = { id: 'domain-123', name: 'Updated Domain' } as any;
            ACTIONS.domains.save(item);
            expect(client.updateDomain).toHaveBeenCalledWith(
                'domain-123',
                item,
            );
        });

        it('should call removeDomain for remove', () => {
            const item = { id: 'domain-123' } as any;
            ACTIONS.domains.remove(item);
            expect(client.removeDomain).toHaveBeenCalledWith('domain-123');
        });
    });

    describe('drivers actions', () => {
        it('should have itemConstructor', () => {
            expect(ACTIONS.drivers.itemConstructor).toBe(client.PlaceDriver);
        });

        it('should call queryDrivers with query', () => {
            ACTIONS.drivers.query('test');
            expect(client.queryDrivers).toHaveBeenCalledWith({
                q: 'test',
                fields: 'id,name,module_name',
            });
        });

        it('should call showDriver for show', () => {
            ACTIONS.drivers.show('driver-123');
            expect(client.showDriver).toHaveBeenCalledWith('driver-123');
        });

        it('should call addDriver for new item', () => {
            const item = { name: 'New Driver' } as any;
            ACTIONS.drivers.save(item);
            expect(client.addDriver).toHaveBeenCalledWith(item);
        });

        it('should call updateDriver for existing item', () => {
            const item = { id: 'driver-123', name: 'Updated Driver' } as any;
            ACTIONS.drivers.save(item);
            expect(client.updateDriver).toHaveBeenCalledWith(
                'driver-123',
                item,
            );
        });

        it('should call removeDriver for remove', () => {
            const item = { id: 'driver-123' } as any;
            ACTIONS.drivers.remove(item);
            expect(client.removeDriver).toHaveBeenCalledWith('driver-123');
        });

        it('should have delete_extra function', () => {
            expect(ACTIONS.drivers.delete_extra).toBeDefined();
            expect(typeof ACTIONS.drivers.delete_extra).toBe('function');
        });
    });

    describe('modules actions', () => {
        it('should have itemConstructor', () => {
            expect(ACTIONS.modules.itemConstructor).toBe(client.PlaceModule);
        });

        it('should call queryModules with query', () => {
            ACTIONS.modules.query('test');
            expect(client.queryModules).toHaveBeenCalledWith({
                q: 'test',
                fields: 'id,name,module_name',
            });
        });

        it('should call showModule for show', () => {
            ACTIONS.modules.show('mod-123');
            expect(client.showModule).toHaveBeenCalledWith('mod-123');
        });

        it('should call addModule for new item', () => {
            const item = { name: 'New Module' } as any;
            ACTIONS.modules.save(item);
            expect(client.addModule).toHaveBeenCalledWith(item);
        });

        it('should call updateModule for existing item', () => {
            const item = { id: 'mod-123', name: 'Updated Module' } as any;
            ACTIONS.modules.save(item);
            expect(client.updateModule).toHaveBeenCalledWith('mod-123', item);
        });

        it('should call removeModule for remove', () => {
            const item = { id: 'mod-123' } as any;
            ACTIONS.modules.remove(item);
            expect(client.removeModule).toHaveBeenCalledWith('mod-123');
        });
    });

    describe('repositories actions', () => {
        it('should have itemConstructor', () => {
            expect(ACTIONS.repositories.itemConstructor).toBe(
                client.PlaceRepository,
            );
        });

        it('should call queryRepositories with query', () => {
            ACTIONS.repositories.query('test');
            expect(client.queryRepositories).toHaveBeenCalledWith({
                q: 'test',
                fields: 'id,name,repo_type',
            });
        });

        it('should call showRepository for show', () => {
            ACTIONS.repositories.show('repo-123');
            expect(client.showRepository).toHaveBeenCalledWith('repo-123');
        });

        it('should call addRepository for new item', () => {
            const item = { name: 'New Repo' } as any;
            ACTIONS.repositories.save(item);
            expect(client.addRepository).toHaveBeenCalledWith(item);
        });

        it('should call updateRepository for existing item', () => {
            const item = { id: 'repo-123', name: 'Updated Repo' } as any;
            ACTIONS.repositories.save(item);
            expect(client.updateRepository).toHaveBeenCalledWith(
                'repo-123',
                item,
            );
        });

        it('should call removeRepository for remove', () => {
            const item = { id: 'repo-123' } as any;
            ACTIONS.repositories.remove(item);
            expect(client.removeRepository).toHaveBeenCalledWith('repo-123');
        });
    });

    describe('systems actions', () => {
        it('should have itemConstructor', () => {
            expect(ACTIONS.systems.itemConstructor).toBe(client.PlaceSystem);
        });

        it('should call querySystems with query', () => {
            ACTIONS.systems.query('test');
            expect(client.querySystems).toHaveBeenCalledWith({
                q: 'test',
                fields: 'id,name,display_name',
            });
        });

        it('should call showSystem for show', () => {
            ACTIONS.systems.show('sys-123');
            expect(client.showSystem).toHaveBeenCalledWith('sys-123');
        });

        it('should call addSystem for new item', () => {
            const item = { name: 'New System', support_url: '' } as any;
            ACTIONS.systems.save(item);
            expect(client.addSystem).toHaveBeenCalled();
        });

        it('should create modules for logic driver ids when adding systems', async () => {
            vi.mocked(client.addSystem).mockReturnValueOnce(
                Promise.resolve({ id: 'sys-new' } as any),
            );
            vi.mocked(client.showDriver).mockImplementation((id: string) =>
                Promise.resolve({
                    id,
                    name: `${id} name`,
                    module_name: `${id} module`,
                    role:
                        id === 'driver-logic'
                            ? client.PlaceDriverRole.Logic
                            : client.PlaceDriverRole.Device,
                    default_uri: '',
                    default_port: 1,
                    alert_level: 'medium',
                    ignore_connected: false,
                } as any),
            );

            await ACTIONS.systems.save({
                name: 'New System',
                support_url: '',
                modules: ['mod-123', 'driver-logic', 'driver-device'],
            } as any);

            expect(client.addSystem).toHaveBeenCalledWith(
                expect.objectContaining({ modules: ['mod-123'] }),
            );
            expect(client.showDriver).toHaveBeenCalledWith('driver-logic');
            expect(client.showDriver).toHaveBeenCalledWith('driver-device');
            expect(client.addModule).toHaveBeenCalledTimes(1);
            expect(client.addModule).toHaveBeenCalledWith(
                expect.objectContaining({
                    driver_id: 'driver-logic',
                    control_system_id: 'sys-new',
                    role: client.PlaceDriverRole.Logic,
                }),
            );
        });

        it('should start systems after bulk add when requested', async () => {
            vi.mocked(client.addSystem).mockReturnValueOnce(
                Promise.resolve({ id: 'sys-new' } as any),
            );

            await ACTIONS.systems.save({
                name: 'New System',
                support_url: '',
                modules: ['mod-123'],
                start_modules: true,
            } as any);

            expect(client.addSystem).toHaveBeenCalledWith(
                expect.not.objectContaining({ start_modules: true }),
            );
            expect(client.startSystem).toHaveBeenCalledWith('sys-new');
        });

        it('should call updateSystem for existing item', () => {
            const item = {
                id: 'sys-123',
                name: 'Updated System',
                support_url: '',
            } as any;
            ACTIONS.systems.save(item);
            expect(client.updateSystem).toHaveBeenCalled();
        });

        it('should call removeSystem for remove', () => {
            const item = { id: 'sys-123' } as any;
            ACTIONS.systems.remove(item);
            expect(client.removeSystem).toHaveBeenCalledWith('sys-123');
        });
    });

    describe('triggers actions', () => {
        it('should have itemConstructor', () => {
            expect(ACTIONS.triggers.itemConstructor).toBe(client.PlaceTrigger);
        });

        it('should call queryTriggers with query', () => {
            ACTIONS.triggers.query('test');
            expect(client.queryTriggers).toHaveBeenCalledWith({
                q: 'test',
                fields: 'id,name,display_name',
            });
        });

        it('should call showTrigger for show', () => {
            ACTIONS.triggers.show('trig-123');
            expect(client.showTrigger).toHaveBeenCalledWith('trig-123');
        });

        it('should call addTrigger for new item', () => {
            const item = { name: 'New Trigger' } as any;
            ACTIONS.triggers.save(item);
            expect(client.addTrigger).toHaveBeenCalledWith(item);
        });

        it('should call updateTrigger for existing item', () => {
            const item = { id: 'trig-123', name: 'Updated Trigger' } as any;
            ACTIONS.triggers.save(item);
            expect(client.updateTrigger).toHaveBeenCalledWith('trig-123', item);
        });

        it('should call removeTrigger for remove', () => {
            const item = { id: 'trig-123' } as any;
            ACTIONS.triggers.remove(item);
            expect(client.removeTrigger).toHaveBeenCalledWith('trig-123');
        });
    });

    describe('users actions', () => {
        it('should have itemConstructor', () => {
            expect(ACTIONS.users.itemConstructor).toBe(client.PlaceUser);
        });

        it('should call queryUsers with query', () => {
            ACTIONS.users.query('test');
            expect(client.queryUsers).toHaveBeenCalledWith({
                q: 'test',
                fields: 'id,name,email,authority_id,groups',
            });
        });

        it('should call showUser for show', () => {
            ACTIONS.users.show('user-123');
            expect(client.showUser).toHaveBeenCalledWith('user-123');
        });

        it('should call addUser for new item', () => {
            const item = { name: 'New User' } as any;
            ACTIONS.users.save(item);
            expect(client.addUser).toHaveBeenCalledWith(item);
        });

        it('should call updateUser for existing item', () => {
            const item = { id: 'user-123', name: 'Updated User' } as any;
            ACTIONS.users.save(item);
            expect(client.updateUser).toHaveBeenCalledWith('user-123', item);
        });

        it('should call removeUser for remove', () => {
            const item = { id: 'user-123' } as any;
            ACTIONS.users.remove(item);
            expect(client.removeUser).toHaveBeenCalledWith('user-123');
        });
    });

    describe('zones actions', () => {
        it('should have itemConstructor', () => {
            expect(ACTIONS.zones.itemConstructor).toBe(client.PlaceZone);
        });

        it('should call queryZones with query', () => {
            ACTIONS.zones.query('test');
            expect(client.queryZones).toHaveBeenCalledWith({
                q: 'test',
                fields: 'id,name,display_name,tags',
            });
        });

        it('should call showZone for show', () => {
            ACTIONS.zones.show('zone-123');
            expect(client.showZone).toHaveBeenCalledWith('zone-123');
        });

        it('should call addZone for new item', () => {
            const item = { name: 'New Zone' } as any;
            ACTIONS.zones.save(item);
            expect(client.addZone).toHaveBeenCalledWith(item);
        });

        it('should call updateZone for existing item', () => {
            const item = { id: 'zone-123', name: 'Updated Zone' } as any;
            ACTIONS.zones.save(item);
            expect(client.updateZone).toHaveBeenCalledWith('zone-123', item);
        });

        it('should call removeZone for remove', () => {
            const item = { id: 'zone-123' } as any;
            ACTIONS.zones.remove(item);
            expect(client.removeZone).toHaveBeenCalledWith('zone-123');
        });
    });

    describe('ItemActions interface', () => {
        it('all actions should have query function', () => {
            Object.values(ACTIONS).forEach((action) => {
                expect(typeof action.query).toBe('function');
            });
        });

        it('all actions should have show function', () => {
            Object.values(ACTIONS).forEach((action) => {
                expect(typeof action.show).toBe('function');
            });
        });

        it('all actions should have save function', () => {
            Object.values(ACTIONS).forEach((action) => {
                expect(typeof action.save).toBe('function');
            });
        });

        it('all actions should have remove function', () => {
            Object.values(ACTIONS).forEach((action) => {
                expect(typeof action.remove).toBe('function');
            });
        });

        it('all actions should have itemConstructor', () => {
            Object.values(ACTIONS).forEach((action) => {
                expect(action.itemConstructor).toBeDefined();
            });
        });

        it('all actions should have name', () => {
            Object.values(ACTIONS).forEach((action) => {
                expect(typeof action.name).toBe('string');
                expect(action.name.length).toBeGreaterThan(0);
            });
        });

        it('all actions should have delete_message', () => {
            Object.values(ACTIONS).forEach((action) => {
                expect(typeof action.delete_message).toBe('string');
            });
        });
    });

    describe('processURL via systems.save', () => {
        // The processURL function is internal, but we can test it through systems.save

        it('should process support_url with system properties', () => {
            const item = {
                id: 'sys-123',
                name: 'Test System',
                support_url: 'https://support.example.com/{{name}}',
            } as any;
            ACTIONS.systems.save(item);

            expect(client.updateSystem).toHaveBeenCalledWith(
                'sys-123',
                expect.objectContaining({
                    support_url: 'https://support.example.com/Test System',
                }),
            );
        });

        it('should process support_url with id', () => {
            const item = {
                id: 'sys-456',
                name: 'System',
                support_url: 'https://support.example.com/system/{{id}}',
            } as any;
            ACTIONS.systems.save(item);

            expect(client.updateSystem).toHaveBeenCalledWith(
                'sys-456',
                expect.objectContaining({
                    support_url: 'https://support.example.com/system/sys-456',
                }),
            );
        });

        it('should process support_url with multiple placeholders', () => {
            const item = {
                id: 'sys-789',
                name: 'Room A',
                code: 'ROOM-A',
                support_url:
                    'https://support.example.com/{{id}}/{{name}}/{{code}}',
            } as any;
            ACTIONS.systems.save(item);

            expect(client.updateSystem).toHaveBeenCalledWith(
                'sys-789',
                expect.objectContaining({
                    support_url:
                        'https://support.example.com/sys-789/Room A/ROOM-A',
                }),
            );
        });

        it('should process repeated placeholders', () => {
            const item = {
                id: 'sys-123',
                name: 'Test',
                support_url: '{{id}}-{{id}}-{{id}}',
            } as any;
            ACTIONS.systems.save(item);

            expect(client.updateSystem).toHaveBeenCalledWith(
                'sys-123',
                expect.objectContaining({
                    support_url: 'sys-123-sys-123-sys-123',
                }),
            );
        });

        it('should handle empty support_url', () => {
            const item = {
                id: 'sys-123',
                name: 'Test',
                support_url: '',
            } as any;
            ACTIONS.systems.save(item);

            expect(client.updateSystem).toHaveBeenCalledWith(
                'sys-123',
                expect.objectContaining({
                    support_url: '',
                }),
            );
        });

        it('should process origin placeholder', () => {
            const item = {
                id: 'sys-123',
                support_url: '{{origin}}/support',
            } as any;
            ACTIONS.systems.save(item);

            expect(client.updateSystem).toHaveBeenCalledWith(
                'sys-123',
                expect.objectContaining({
                    support_url: expect.stringContaining('/support'),
                }),
            );
        });

        it('should process host placeholder', () => {
            const item = {
                id: 'sys-123',
                support_url: 'https://{{host}}/api',
            } as any;
            ACTIONS.systems.save(item);

            expect(client.updateSystem).toHaveBeenCalled();
        });

        it('should process pathname placeholder', () => {
            const item = {
                id: 'sys-123',
                support_url: 'path={{pathname}}',
            } as any;
            ACTIONS.systems.save(item);

            expect(client.updateSystem).toHaveBeenCalled();
        });
    });
});
