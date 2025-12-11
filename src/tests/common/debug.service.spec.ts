import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';

// Mock @placeos/ts-client before importing the service
// Create the Subject inside the factory to avoid hoisting issues
vi.mock('@placeos/ts-client', () => {
    const { Subject } = require('rxjs');
    return {
        debug: vi.fn(() => Promise.resolve()),
        ignore: vi.fn(),
        debug_events: new Subject(),
        PlaceModule: class {},
    };
});

// Mock date-fns format
vi.mock('date-fns', () => ({
    format: vi.fn(() => '12:00 PM'),
}));

import { PlaceDebugService } from '../../app/common/debug.service';
import { debug_events } from '@placeos/ts-client';

// Mock PlaceModule interface
interface MockPlaceModule {
    id: string;
    system_id?: string;
    name?: string;
}

describe('PlaceDebugService', () => {
    let service: PlaceDebugService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PlaceDebugService],
        });
        service = TestBed.inject(PlaceDebugService);
    });

    afterEach(() => {
        service.ngOnDestroy();
        vi.clearAllMocks();
    });

    describe('initial state', () => {
        it('should be created', () => {
            expect(service).toBeTruthy();
        });

        it('should have empty bound_modules initially', () => {
            expect(service.bound_modules()).toEqual([]);
        });

        it('should have module_count of 0 initially', () => {
            expect(service.module_count()).toBe(0);
        });

        it('should have empty events initially', () => {
            expect(service.events()).toEqual([]);
        });

        it('should have event_count of 0 initially', () => {
            expect(service.event_count()).toBe(0);
        });

        it('should have enabled as false initially', () => {
            expect(service.enabled()).toBe(false);
        });

        it('should have is_shown as true initially', () => {
            expect(service.is_shown()).toBe(true);
        });

        it('should have position as "below" initially', () => {
            expect(service.position()).toBe('below');
        });

        it('should have is_listening as false initially', () => {
            expect(service.is_listening()).toBe(false);
        });
    });

    describe('modules getter', () => {
        it('should return bound_modules value', () => {
            expect(service.modules).toEqual([]);
        });
    });

    describe('module_names getter', () => {
        it('should return empty object initially', () => {
            expect(service.module_names).toEqual({});
        });
    });

    describe('clearEvents', () => {
        it('should clear all events', () => {
            // Manually set some events
            service.events.set([
                { mod_id: 'mod-1', level: 'info', message: 'test' } as any,
            ]);
            expect(service.events().length).toBe(1);

            service.clearEvents();
            expect(service.events()).toEqual([]);
        });
    });

    describe('isListening', () => {
        it('should return false for module not being listened to', () => {
            const module: MockPlaceModule = { id: 'mod-1' };
            expect(service.isListening(module as any)).toBe(false);
        });

        it('should return true for module being listened to', () => {
            const module: MockPlaceModule = { id: 'mod-1' };
            service.bound_modules.set([module as any]);
            expect(service.isListening(module as any)).toBe(true);
        });
    });

    describe('bind', () => {
        it('should not bind null module', async () => {
            service.bind(null as any, 'Test_1');
            expect(service.enabled()).toBe(false);
        });

        it('should enable debug when binding module', async () => {
            const module: MockPlaceModule = {
                id: 'mod-1',
                system_id: 'sys-1',
            };
            service.bind(module as any, 'TestModule_1');

            // Wait for async debug() call
            await vi.waitFor(() => {
                expect(service.enabled()).toBe(true);
            });
        });

        it('should add module to bound_modules after binding', async () => {
            const module: MockPlaceModule = {
                id: 'mod-1',
                system_id: 'sys-1',
            };
            service.bind(module as any, 'TestModule_1');

            await vi.waitFor(() => {
                expect(service.bound_modules().length).toBe(1);
                expect(service.bound_modules()[0].id).toBe('mod-1');
            });
        });

        it('should store module name', async () => {
            const module: MockPlaceModule = {
                id: 'mod-1',
                system_id: 'sys-1',
            };
            service.bind(module as any, 'TestModule_1');

            await vi.waitFor(() => {
                expect(service.module_names['mod-1']).toBe('TestModule_1');
            });
        });

        it('should emit changed event after binding', async () => {
            const changed_spy = vi.fn();
            service.changed.subscribe(changed_spy);

            const module: MockPlaceModule = {
                id: 'mod-1',
                system_id: 'sys-1',
            };
            service.bind(module as any, 'TestModule_1');

            await vi.waitFor(() => {
                expect(changed_spy).toHaveBeenCalled();
            });
        });
    });

    describe('unbind', () => {
        it('should not unbind null module', () => {
            service.unbind(null as any);
            // Should not throw
            expect(true).toBe(true);
        });

        it('should remove module from bound_modules', async () => {
            const module: MockPlaceModule = {
                id: 'mod-1',
                system_id: 'sys-1',
            };
            service.bind(module as any, 'TestModule_1');

            await vi.waitFor(() => {
                expect(service.bound_modules().length).toBe(1);
            });

            service.unbind(module as any);
            expect(service.bound_modules().length).toBe(0);
        });

        it('should emit changed event after unbinding', async () => {
            const module: MockPlaceModule = {
                id: 'mod-1',
                system_id: 'sys-1',
            };
            service.bind(module as any, 'TestModule_1');

            await vi.waitFor(() => {
                expect(service.bound_modules().length).toBe(1);
            });

            const changed_spy = vi.fn();
            service.changed.subscribe(changed_spy);

            service.unbind(module as any);
            expect(changed_spy).toHaveBeenCalled();
        });
    });

    describe('unbindAll', () => {
        it('should remove all bound modules', async () => {
            const module1: MockPlaceModule = {
                id: 'mod-1',
                system_id: 'sys-1',
            };
            const module2: MockPlaceModule = {
                id: 'mod-2',
                system_id: 'sys-1',
            };

            service.bind(module1 as any, 'TestModule_1');
            service.bind(module2 as any, 'TestModule_2');

            await vi.waitFor(() => {
                expect(service.bound_modules().length).toBe(2);
            });

            service.unbindAll();
            expect(service.bound_modules().length).toBe(0);
        });
    });

    describe('is_listening computed', () => {
        it('should be false when not enabled', () => {
            expect(service.is_listening()).toBe(false);
        });

        it('should be false when enabled but no modules', () => {
            service.enabled.set(true);
            expect(service.is_listening()).toBe(false);
        });

        it('should be true when enabled and has modules', async () => {
            const module: MockPlaceModule = {
                id: 'mod-1',
                system_id: 'sys-1',
            };
            service.bind(module as any, 'TestModule_1');

            await vi.waitFor(() => {
                expect(service.is_listening()).toBe(true);
            });
        });
    });

    describe('terminal_lines computed', () => {
        it('should return empty array when no events', () => {
            expect(service.terminal_lines()).toEqual([]);
        });

        it('should format events with terminal colors', () => {
            service.events.set([
                { mod_id: 'mod-1', level: 'info', message: 'Test message' },
            ] as any);

            const lines = service.terminal_lines();
            expect(lines.length).toBe(1);
            expect(lines[0]).toContain('\u001b[32m'); // Green for info
            expect(lines[0]).toContain('INFO');
            expect(lines[0]).toContain('Test message');
        });

        it('should use debug color for unknown levels', () => {
            service.events.set([
                { mod_id: 'mod-1', level: 'unknown', message: 'Test' },
            ] as any);

            const lines = service.terminal_lines();
            expect(lines[0]).toContain('\u001b[34m'); // Blue for debug (fallback)
        });

        it('should use error color for error level', () => {
            service.events.set([
                { mod_id: 'mod-1', level: 'error', message: 'Error msg' },
            ] as any);

            const lines = service.terminal_lines();
            expect(lines[0]).toContain('\u001b[31m'); // Red for error
        });

        it('should use warning color for warn level', () => {
            service.events.set([
                { mod_id: 'mod-1', level: 'warn', message: 'Warn msg' },
            ] as any);

            const lines = service.terminal_lines();
            expect(lines[0]).toContain('\u001b[33m'); // Yellow for warn
        });

        it('should show module name if available', () => {
            (service as any)._module_names['mod-1'] = 'MyModule_1';
            service.events.set([
                { mod_id: 'mod-1', level: 'info', message: 'Test' },
            ] as any);

            const lines = service.terminal_lines();
            expect(lines[0]).toContain('MyModule_1');
        });

        it('should show <UNKNOWN> for missing module name and id', () => {
            service.events.set([
                { mod_id: '', level: 'info', message: 'Test' },
            ] as any);

            const lines = service.terminal_lines();
            expect(lines[0]).toContain('<UNKNOWN>');
        });
    });

    describe('debug events subscription', () => {
        it('should add event when received for bound module', async () => {
            const module: MockPlaceModule = {
                id: 'mod-1',
                system_id: 'sys-1',
            };
            service.bind(module as any, 'TestModule_1');

            await vi.waitFor(() => {
                expect(service.bound_modules().length).toBe(1);
            });

            // Emit event via the mocked debug_events
            (debug_events as Subject<any>).next({
                mod_id: 'mod-1',
                level: 'info',
                message: 'Test event',
            });

            expect(service.events().length).toBe(1);
            expect(service.events()[0].message).toBe('Test event');
        });

        it('should ignore events for unbound modules', () => {
            (debug_events as Subject<any>).next({
                mod_id: 'unbound-mod',
                level: 'info',
                message: 'Should be ignored',
            });

            expect(service.events().length).toBe(0);
        });

        it('should limit events to 2000', async () => {
            const module: MockPlaceModule = {
                id: 'mod-1',
                system_id: 'sys-1',
            };
            service.bind(module as any, 'TestModule_1');

            await vi.waitFor(() => {
                expect(service.bound_modules().length).toBe(1);
            });

            // Add 2000 events directly
            const events = [];
            for (let i = 0; i < 2000; i++) {
                events.push({
                    mod_id: 'mod-1',
                    level: 'info',
                    message: `Event ${i}`,
                });
            }
            service.events.set(events as any);

            // Add one more event via subscription
            (debug_events as Subject<any>).next({
                mod_id: 'mod-1',
                level: 'info',
                message: 'New event',
            });

            expect(service.events().length).toBe(2000);
            // First event should be removed
            expect(service.events()[0].message).toBe('Event 1');
            expect(service.events()[1999].message).toBe('New event');
        });
    });

    describe('position signal', () => {
        it('should allow setting position to "side"', () => {
            service.position.set('side');
            expect(service.position()).toBe('side');
        });

        it('should allow setting position to "floating"', () => {
            service.position.set('floating');
            expect(service.position()).toBe('floating');
        });
    });
});
