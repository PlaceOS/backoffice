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
vi.mock('@placeos/ts-client', async (importOriginal) => {
    const resolved = (value: unknown = {}) => Promise.resolve(value);
    const query_response = () => resolved({ data: [], total: 0 });
    // Keep the schemas, which `newItem` and `toBody` read
    const actual = await importOriginal<typeof import('@placeos/ts-client')>();
    return {
        ...actual,
        domains: {
            create: vi.fn(fromV1Mock(() => resolved(), ['body'])),
            query: vi.fn(fromV1Mock(query_response, ['...'], 'page')),
            destroy: vi.fn(fromV1Mock(() => resolved(), ['id'])),
            show: vi.fn(fromV1Mock(() => resolved(), ['id'])),
            update: vi.fn(fromV1Mock(() => resolved(), ['id', 'body'])),
        },
        drivers: {
            create: vi.fn(fromV1Mock(() => resolved(), ['body'])),
            query: vi.fn(fromV1Mock(query_response, ['...'], 'page')),
            destroy: vi.fn(fromV1Mock(() => resolved(), ['id'])),
            show: vi.fn(fromV1Mock(() => resolved(), ['id', '...'])),
            update: vi.fn(fromV1Mock(() => resolved(), ['id', 'body'])),
        },
        groups: {
            create: vi.fn(fromV1Mock(() => resolved(), ['body'])),
            query: vi.fn(fromV1Mock(query_response, ['...'], 'page')),
            destroy: vi.fn(fromV1Mock(() => resolved(), ['id'])),
            show: vi.fn(fromV1Mock(() => resolved(), ['id'])),
            update: vi.fn(fromV1Mock(() => resolved(), ['id', 'body'])),
        },
        modules: {
            create: vi.fn(fromV1Mock(() => resolved(), ['body'])),
            query: vi.fn(fromV1Mock(query_response, ['...'], 'page')),
            destroy: vi.fn(fromV1Mock(() => resolved(), ['id'])),
            show: vi.fn(fromV1Mock(() => resolved(), ['id', '...'])),
            update: vi.fn(fromV1Mock(() => resolved(), ['id', 'body'])),
        },
        repositories: {
            create: vi.fn(fromV1Mock(() => resolved(), ['body'])),
            query: vi.fn(fromV1Mock(query_response, ['...'], 'page')),
            destroy: vi.fn(fromV1Mock(() => resolved(), ['id'])),
            show: vi.fn(fromV1Mock(() => resolved(), ['id'])),
            update: vi.fn(fromV1Mock(() => resolved(), ['id', 'body'])),
        },
        systems: {
            create: vi.fn(fromV1Mock(() => resolved(), ['body'])),
            query: vi.fn(fromV1Mock(query_response, ['...'], 'page')),
            destroy: vi.fn(fromV1Mock(() => resolved(), ['sys_id'])),
            show: vi.fn(fromV1Mock(() => resolved(), ['sys_id', '...'])),
            start: vi.fn(fromV1Mock(() => resolved(), ['sys_id', '...'])),
            update: vi.fn(fromV1Mock(() => resolved(), ['sys_id', 'body'])),
        },
        triggers: {
            create: vi.fn(fromV1Mock(() => resolved(), ['body'])),
            query: vi.fn(fromV1Mock(query_response, ['...'], 'page')),
            destroy: vi.fn(fromV1Mock(() => resolved(), ['id'])),
            show: vi.fn(fromV1Mock(() => resolved(), ['id', '...'])),
            update: vi.fn(fromV1Mock(() => resolved(), ['id', 'body'])),
        },
        users: {
            create: vi.fn(fromV1Mock(() => resolved(), ['body'])),
            query: vi.fn(fromV1Mock(query_response, ['...'], 'page')),
            destroy: vi.fn(fromV1Mock(() => resolved(), ['id', '...'])),
            show: vi.fn(fromV1Mock(() => resolved(), ['id', '...'])),
            update: vi.fn(fromV1Mock(() => resolved(), ['id', 'body'])),
        },
        zones: {
            create: vi.fn(fromV1Mock(() => resolved(), ['body'])),
            query: vi.fn(fromV1Mock(query_response, ['...'], 'page')),
            destroy: vi.fn(fromV1Mock(() => resolved(), ['id'])),
            show: vi.fn(fromV1Mock(() => resolved(), ['id', '...'])),
            update: vi.fn(fromV1Mock(() => resolved(), ['id', 'body'])),
        },
    };
});

import * as client from '@placeos/ts-client';
import { mockReply, PlaceDriverRole } from '@placeos/ts-client/compat';
import { ACTIONS } from '../../app/common/actions';
const { fromV1Mock } = await vi.hoisted(
    () => import('@placeos/ts-client/compat'),
);

describe('actions.ts', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('loads the selected form on demand', async () => {
        const { SystemFormComponent } = await import(
            '../../app/systems/system-form.component'
        );
        expect(await ACTIONS.systems.loadModal()).toBe(SystemFormComponent);
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
        it('should have the item schema', () => {
            expect(ACTIONS.domains.schema).toBe(client.Domain);
        });

        it('should call queryDomains with query', () => {
            ACTIONS.domains.query('test');
            expect(client.domains.query).toHaveBeenCalledWith(
                {
                    q: 'test',
                    fields: ['id', 'name', 'domain'],
                },
                { signal: undefined },
            );
        });

        it('should call showDomain for show', () => {
            ACTIONS.domains.show('domain-123');
            expect(client.domains.show).toHaveBeenCalledWith(
                {
                    id: 'domain-123',
                },
                { signal: undefined },
            );
        });

        it('should call addDomain for new item', () => {
            const item = { name: 'New Domain' } as any;
            ACTIONS.domains.save(item);
            expect(client.domains.create).toHaveBeenCalledWith({ body: item });
        });

        it('should call updateDomain for existing item', () => {
            const item = { id: 'domain-123', name: 'Updated Domain' } as any;
            ACTIONS.domains.save(item);
            expect(client.domains.update).toHaveBeenCalledWith({
                id: 'domain-123',
                body: item,
            });
        });

        it('should call removeDomain for remove', () => {
            const item = { id: 'domain-123' } as any;
            ACTIONS.domains.remove(item);
            expect(client.domains.destroy).toHaveBeenCalledWith({
                id: 'domain-123',
            });
        });
    });

    describe('drivers actions', () => {
        it('should have the item schema', () => {
            expect(ACTIONS.drivers.schema).toBe(client.Driver);
        });

        it('should call queryDrivers with query', () => {
            ACTIONS.drivers.query('test');
            expect(client.drivers.query).toHaveBeenCalledWith(
                {
                    q: 'test',
                    fields: ['id', 'name', 'module_name'],
                },
                { signal: undefined },
            );
        });

        it('should call showDriver for show', () => {
            ACTIONS.drivers.show('driver-123');
            expect(client.drivers.show).toHaveBeenCalledWith(
                {
                    id: 'driver-123',
                },
                { signal: undefined },
            );
        });

        it('should call addDriver for new item', () => {
            const item = { name: 'New Driver' } as any;
            ACTIONS.drivers.save(item);
            expect(client.drivers.create).toHaveBeenCalledWith({ body: item });
        });

        it('should call updateDriver for existing item', () => {
            const item = { id: 'driver-123', name: 'Updated Driver' } as any;
            ACTIONS.drivers.save(item);
            expect(client.drivers.update).toHaveBeenCalledWith({
                id: 'driver-123',
                body: item,
            });
        });

        it('should call removeDriver for remove', () => {
            const item = { id: 'driver-123' } as any;
            ACTIONS.drivers.remove(item);
            expect(client.drivers.destroy).toHaveBeenCalledWith({
                id: 'driver-123',
            });
        });

        it('should have delete_extra function', () => {
            expect(ACTIONS.drivers.delete_extra).toBeDefined();
            expect(typeof ACTIONS.drivers.delete_extra).toBe('function');
        });
    });

    describe('modules actions', () => {
        it('should have the item schema', () => {
            expect(ACTIONS.modules.schema).toBe(client.Module);
        });

        it('should call queryModules with query', () => {
            ACTIONS.modules.query('test');
            expect(client.modules.query).toHaveBeenCalledWith(
                {
                    q: 'test',
                    fields: ['id', 'name', 'custom_name', 'module_name'],
                },
                { signal: undefined },
            );
        });

        it('should call showModule for show', () => {
            ACTIONS.modules.show('mod-123');
            expect(client.modules.show).toHaveBeenCalledWith(
                { id: 'mod-123' },
                { signal: undefined },
            );
        });

        it('should call addModule for new item', () => {
            const item = { name: 'New Module' } as any;
            ACTIONS.modules.save(item);
            // A new module without a port gets 1, as in 6.x: the server refuses 0
            expect(client.modules.create).toHaveBeenCalledWith({
                body: { ...item, port: 1 },
            });
        });

        it('should call updateModule for existing item', () => {
            const item = { id: 'mod-123', name: 'Updated Module' } as any;
            ACTIONS.modules.save(item);
            expect(client.modules.update).toHaveBeenCalledWith({
                id: 'mod-123',
                body: item,
            });
        });

        it('should call removeModule for remove', () => {
            const item = { id: 'mod-123' } as any;
            ACTIONS.modules.remove(item);
            expect(client.modules.destroy).toHaveBeenCalledWith({
                id: 'mod-123',
            });
        });
    });

    describe('repositories actions', () => {
        it('should have the item schema', () => {
            expect(ACTIONS.repositories.schema).toBe(client.Repository);
        });

        it('should call queryRepositories with query', () => {
            ACTIONS.repositories.query('test');
            expect(client.repositories.query).toHaveBeenCalledWith(
                {
                    q: 'test',
                    fields: ['id', 'name', 'repo_type'],
                },
                { signal: undefined },
            );
        });

        it('should call showRepository for show', () => {
            ACTIONS.repositories.show('repo-123');
            expect(client.repositories.show).toHaveBeenCalledWith(
                {
                    id: 'repo-123',
                },
                { signal: undefined },
            );
        });

        it('should call addRepository for new item', () => {
            const item = { name: 'New Repo' } as any;
            ACTIONS.repositories.save(item);
            expect(client.repositories.create).toHaveBeenCalledWith({
                body: item,
            });
        });

        it('should call updateRepository for existing item', () => {
            const item = { id: 'repo-123', name: 'Updated Repo' } as any;
            ACTIONS.repositories.save(item);
            expect(client.repositories.update).toHaveBeenCalledWith({
                id: 'repo-123',
                body: item,
            });
        });

        it('should call removeRepository for remove', () => {
            const item = { id: 'repo-123' } as any;
            ACTIONS.repositories.remove(item);
            expect(client.repositories.destroy).toHaveBeenCalledWith({
                id: 'repo-123',
            });
        });
    });

    describe('systems actions', () => {
        it('should have the item schema', () => {
            expect(ACTIONS.systems.schema).toBe(client.System);
        });

        it('should call querySystems with query', () => {
            ACTIONS.systems.query('test');
            expect(client.systems.query).toHaveBeenCalledWith(
                {
                    q: 'test',
                    fields: ['id', 'name', 'display_name'],
                },
                { signal: undefined },
            );
        });

        it('should call showSystem for show', () => {
            ACTIONS.systems.show('sys-123');
            expect(client.systems.show).toHaveBeenCalledWith(
                {
                    sys_id: 'sys-123',
                },
                { signal: undefined },
            );
        });

        it('should call addSystem for new item', () => {
            const item = { name: 'New System', support_url: '' } as any;
            ACTIONS.systems.save(item);
            expect(client.systems.create).toHaveBeenCalled();
        });

        it.each([
            ['an array', ['mod-123', 'driver-logic', 'driver-device']],
            ['a JSON string', '["mod-123","driver-logic","driver-device"]'],
            ['a CSV cell', "['mod-123', driver-logic driver-device]"],
        ])(
            'should create modules for logic driver ids in %s when adding systems',
            async (_, modules) => {
                vi.mocked(client.systems.create).mockResolvedValueOnce(
                    mockReply({
                        id: 'sys-new',
                    } as client.System),
                );
                vi.mocked(client.drivers.show).mockImplementation(
                    fromV1Mock(
                        async (id: string) =>
                            ({
                                id,
                                name: `${id} name`,
                                role:
                                    id === 'driver-logic'
                                        ? PlaceDriverRole.Logic
                                        : PlaceDriverRole.Device,
                                default_port: 1,
                            }) as client.Driver,
                        ['id', '...'],
                    ),
                );

                await ACTIONS.systems.save({
                    name: 'New System',
                    support_url: '',
                    modules,
                } as unknown as client.System);

                expect(client.systems.create).toHaveBeenCalledWith({
                    body: expect.objectContaining({ modules: ['mod-123'] }),
                });
                expect(client.drivers.show).toHaveBeenCalledWith({
                    id: 'driver-logic',
                });
                expect(client.drivers.show).toHaveBeenCalledWith({
                    id: 'driver-device',
                });
                expect(client.modules.create).toHaveBeenCalledTimes(1);
                expect(client.modules.create).toHaveBeenCalledWith({
                    body: expect.objectContaining({
                        driver_id: 'driver-logic',
                        control_system_id: 'sys-new',
                        role: PlaceDriverRole.Logic,
                    }),
                });
            },
        );

        it('should start systems after bulk add when requested', async () => {
            vi.mocked(client.systems.create).mockImplementationOnce(
                fromV1Mock(
                    () => Promise.resolve({ id: 'sys-new' } as any),
                    ['body'],
                ),
            );

            await ACTIONS.systems.save({
                name: 'New System',
                support_url: '',
                modules: ['mod-123'],
                start_modules: true,
            } as any);

            expect(client.systems.create).toHaveBeenCalledWith({
                body: expect.not.objectContaining({ start_modules: true }),
            });
            expect(client.systems.start).toHaveBeenCalledWith({
                sys_id: 'sys-new',
            });
        });

        it('should call updateSystem for existing item', () => {
            const item = {
                id: 'sys-123',
                name: 'Updated System',
                support_url: '',
            } as any;
            ACTIONS.systems.save(item);
            expect(client.systems.update).toHaveBeenCalled();
        });

        it('should call removeSystem for remove', () => {
            const item = { id: 'sys-123' } as any;
            ACTIONS.systems.remove(item);
            expect(client.systems.destroy).toHaveBeenCalledWith({
                sys_id: 'sys-123',
            });
        });
    });

    describe('triggers actions', () => {
        it('should have the item schema', () => {
            expect(ACTIONS.triggers.schema).toBe(client.Trigger);
        });

        it('should call queryTriggers with query', () => {
            ACTIONS.triggers.query('test');
            expect(client.triggers.query).toHaveBeenCalledWith(
                {
                    q: 'test',
                    fields: ['id', 'name', 'display_name'],
                },
                { signal: undefined },
            );
        });

        it('should call showTrigger for show', () => {
            ACTIONS.triggers.show('trig-123');
            expect(client.triggers.show).toHaveBeenCalledWith(
                {
                    id: 'trig-123',
                },
                { signal: undefined },
            );
        });

        it('should call addTrigger for new item', () => {
            const item = { name: 'New Trigger' } as any;
            ACTIONS.triggers.save(item);
            expect(client.triggers.create).toHaveBeenCalledWith({ body: item });
        });

        it('should call updateTrigger for existing item', () => {
            const item = { id: 'trig-123', name: 'Updated Trigger' } as any;
            ACTIONS.triggers.save(item);
            expect(client.triggers.update).toHaveBeenCalledWith({
                id: 'trig-123',
                body: item,
            });
        });

        it('should call removeTrigger for remove', () => {
            const item = { id: 'trig-123' } as any;
            ACTIONS.triggers.remove(item);
            expect(client.triggers.destroy).toHaveBeenCalledWith({
                id: 'trig-123',
            });
        });
    });

    describe('users actions', () => {
        it('should have the item schema', () => {
            expect(ACTIONS.users.schema).toBe(client.User);
        });

        it('should call queryUsers with query', () => {
            ACTIONS.users.query('test');
            expect(client.users.query).toHaveBeenCalledWith(
                {
                    q: 'test',
                    fields: [
                        'id',
                        'name',
                        'email',
                        'authority_id',
                        'groups',
                        'deleted',
                    ],
                },
                { signal: undefined },
            );
        });

        it.each([true, false])(
            'passes include_deleted=%s to the users API and the signal to the call',
            (include_deleted) => {
                const { signal } = new AbortController();
                ACTIONS.users.query('alex', { include_deleted, signal });
                expect(client.users.query).toHaveBeenCalledWith(
                    {
                        q: 'alex',
                        include_deleted,
                        fields: [
                            'id',
                            'name',
                            'email',
                            'authority_id',
                            'groups',
                            'deleted',
                        ],
                    },
                    { signal },
                );
            },
        );

        it('should call showUser for show', () => {
            ACTIONS.users.show('user-123');
            expect(client.users.show).toHaveBeenCalledWith(
                { id: 'user-123' },
                { signal: undefined },
            );
        });

        it('should call addUser for new item', () => {
            const item = { name: 'New User' } as any;
            ACTIONS.users.save(item);
            expect(client.users.create).toHaveBeenCalledWith({ body: item });
        });

        it('should call updateUser for existing item', () => {
            const item = { id: 'user-123', name: 'Updated User' } as any;
            ACTIONS.users.save(item);
            expect(client.users.update).toHaveBeenCalledWith({
                id: 'user-123',
                body: item,
            });
        });

        it('should call removeUser for remove', () => {
            const item = { id: 'user-123' } as any;
            ACTIONS.users.remove(item);
            expect(client.users.destroy).toHaveBeenCalledWith({
                id: 'user-123',
            });
        });
    });

    describe('zones actions', () => {
        it('should have the item schema', () => {
            expect(ACTIONS.zones.schema).toBe(client.Zone);
        });

        it('should call queryZones with query', () => {
            ACTIONS.zones.query('test');
            expect(client.zones.query).toHaveBeenCalledWith(
                {
                    q: 'test',
                    fields: ['id', 'name', 'display_name', 'tags'],
                },
                { signal: undefined },
            );
        });

        it('should call showZone for show', () => {
            ACTIONS.zones.show('zone-123');
            expect(client.zones.show).toHaveBeenCalledWith(
                { id: 'zone-123' },
                { signal: undefined },
            );
        });

        it('should call addZone for new item', () => {
            const item = { name: 'New Zone' } as any;
            ACTIONS.zones.save(item);
            expect(client.zones.create).toHaveBeenCalledWith({ body: item });
        });

        it('should call updateZone for existing item', () => {
            const item = { id: 'zone-123', name: 'Updated Zone' } as any;
            ACTIONS.zones.save(item);
            expect(client.zones.update).toHaveBeenCalledWith({
                id: 'zone-123',
                body: item,
            });
        });

        it('should call removeZone for remove', () => {
            const item = { id: 'zone-123' } as any;
            ACTIONS.zones.remove(item);
            expect(client.zones.destroy).toHaveBeenCalledWith({
                id: 'zone-123',
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

            expect(client.systems.update).toHaveBeenCalledWith(
                expect.objectContaining({
                    sys_id: 'sys-123',
                    body: expect.objectContaining({
                        support_url: 'https://support.example.com/Test System',
                    }),
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

            expect(client.systems.update).toHaveBeenCalledWith(
                expect.objectContaining({
                    sys_id: 'sys-456',
                    body: expect.objectContaining({
                        support_url:
                            'https://support.example.com/system/sys-456',
                    }),
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

            expect(client.systems.update).toHaveBeenCalledWith(
                expect.objectContaining({
                    sys_id: 'sys-789',
                    body: expect.objectContaining({
                        support_url:
                            'https://support.example.com/sys-789/Room A/ROOM-A',
                    }),
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

            expect(client.systems.update).toHaveBeenCalledWith(
                expect.objectContaining({
                    sys_id: 'sys-123',
                    body: expect.objectContaining({
                        support_url: 'sys-123-sys-123-sys-123',
                    }),
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

            expect(client.systems.update).toHaveBeenCalledWith(
                expect.objectContaining({
                    sys_id: 'sys-123',
                    body: expect.objectContaining({
                        support_url: '',
                    }),
                }),
            );
        });

        it('should process the page origin, host and pathname', () => {
            ACTIONS.systems.save({
                id: 'sys-123',
                support_url: '{{origin}}/help?host={{host}}&path={{pathname}}',
            } as client.System);

            expect(client.systems.update).toHaveBeenCalledWith(
                expect.objectContaining({
                    sys_id: 'sys-123',
                    body: expect.objectContaining({
                        support_url: `${location.origin}/help?host=${location.host}&path=${location.pathname}`,
                    }),
                }),
            );
        });
    });
});
