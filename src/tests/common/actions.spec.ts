import { describe, it, expect, vi, beforeEach } from 'vitest';
import { of } from 'rxjs';

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
vi.mock('@placeos/ts-client', () => ({
    PlaceDomain: class {},
    PlaceDriver: class {},
    PlaceModule: class {},
    PlaceRepository: class {},
    PlaceSystem: class {},
    PlaceTrigger: class {},
    PlaceUser: class {},
    PlaceZone: class {},
    addDomain: vi.fn(() => of({})),
    addDriver: vi.fn(() => of({})),
    addModule: vi.fn(() => of({})),
    addRepository: vi.fn(() => of({})),
    addSystem: vi.fn(() => of({})),
    addTrigger: vi.fn(() => of({})),
    addUser: vi.fn(() => of({})),
    addZone: vi.fn(() => of({})),
    queryDomains: vi.fn(() => ({ pipe: vi.fn() })),
    queryDrivers: vi.fn(() => ({ pipe: vi.fn() })),
    queryModules: vi.fn(() => of({ data: [], total: 0 })),
    queryRepositories: vi.fn(() => ({ pipe: vi.fn() })),
    querySystems: vi.fn(() => ({ pipe: vi.fn() })),
    queryTriggers: vi.fn(() => ({ pipe: vi.fn() })),
    queryUsers: vi.fn(() => ({ pipe: vi.fn() })),
    queryZones: vi.fn(() => ({ pipe: vi.fn() })),
    removeDomain: vi.fn(() => of({})),
    removeDriver: vi.fn(() => of({})),
    removeModule: vi.fn(() => of({})),
    removeRepository: vi.fn(() => of({})),
    removeSystem: vi.fn(() => of({})),
    removeTrigger: vi.fn(() => of({})),
    removeUser: vi.fn(() => of({})),
    removeZone: vi.fn(() => of({})),
    showDomain: vi.fn(() => of({})),
    showDriver: vi.fn(() => of({})),
    showModule: vi.fn(() => of({})),
    showRepository: vi.fn(() => of({})),
    showSystem: vi.fn(() => of({})),
    showTrigger: vi.fn(() => of({})),
    showUser: vi.fn(() => of({})),
    showZone: vi.fn(() => of({})),
    updateDomain: vi.fn(() => of({})),
    updateDriver: vi.fn(() => of({})),
    updateModule: vi.fn(() => of({})),
    updateRepository: vi.fn(() => of({})),
    updateSystem: vi.fn(() => of({})),
    updateTrigger: vi.fn(() => of({})),
    updateUser: vi.fn(() => of({})),
    updateZone: vi.fn(() => of({})),
}));

import { ACTIONS } from '../../app/common/actions';
import * as client from '@placeos/ts-client';

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
            expect(client.updateDomain).toHaveBeenCalledWith('domain-123', item);
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
            expect(client.updateDriver).toHaveBeenCalledWith('driver-123', item);
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
                support_url: 'https://support.example.com/{{id}}/{{name}}/{{code}}',
            } as any;
            ACTIONS.systems.save(item);

            expect(client.updateSystem).toHaveBeenCalledWith(
                'sys-789',
                expect.objectContaining({
                    support_url: 'https://support.example.com/sys-789/Room A/ROOM-A',
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
