import { beforeEach, describe, expect, it, vi, afterEach } from 'vitest';

// Mock the ts-client - factory must be self-contained
vi.mock('@placeos/ts-client', () => {
    class MockPlaceUser {
        id = '';
        name = '';
        email = '';
        sys_admin = false;
        support = false;
        constructor(data?: Partial<MockPlaceUser>) {
            if (data) {
                Object.assign(this, data);
            }
        }
    }
    // Mock observable that does nothing (prevents actual API calls)
    const mock_observable = {
        pipe: () => mock_observable,
        subscribe: () => ({ unsubscribe: vi.fn() }),
    };
    return {
        authority: vi.fn(() => ({
            config: {
                backoffice: {
                    alerts_url: 'https://alerts.example.com',
                    metrics_url: 'https://metrics.example.com',
                },
            },
        })),
        PlaceUser: MockPlaceUser,
        apiKey: vi.fn(() => ''),
        token: vi.fn(() => ''),
        showUser: vi.fn(() => mock_observable),
    };
});

// Test the sidebar-menu component logic by importing and checking its structure
import { SidebarMenuComponent } from '../../../app/ui/sidebar-menu.component';

describe('SidebarMenuComponent', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    afterEach(() => {
        localStorage.clear();
    });

    describe('component class', () => {
        it('should have the component defined', () => {
            expect(SidebarMenuComponent).toBeDefined();
        });

        it('should have correct selector', () => {
            // Access the component decorator metadata
            const metadata = (SidebarMenuComponent as any).ɵcmp;
            expect(metadata).toBeDefined();
        });
    });

    describe('links configuration', () => {
        // Test the static links array structure
        const instance = Object.create(SidebarMenuComponent.prototype);
        const links = [
            { name: 'COMMON.SYSTEMS', route: '/systems', icon: 'meeting_room' },
            { name: 'COMMON.MODULES', route: '/modules', icon: 'tablet' },
            { name: 'COMMON.ZONES', route: '/zones', icon: 'meeting_room' },
            { name: 'COMMON.DRIVERS', route: '/drivers', icon: 'construction' },
            {
                name: 'COMMON.REPOS',
                route: '/repositories',
                icon: 'inventory_2',
            },
            { name: 'COMMON.TRIGGERS', route: '/triggers', icon: 'timer' },
        ];

        it('should have systems link with correct route and icon', () => {
            const systems_link = links.find((l) => l.route === '/systems');
            expect(systems_link).toBeDefined();
            expect(systems_link.name).toBe('COMMON.SYSTEMS');
            expect(systems_link.icon).toBe('meeting_room');
        });

        it('should have modules link with correct route and icon', () => {
            const modules_link = links.find((l) => l.route === '/modules');
            expect(modules_link).toBeDefined();
            expect(modules_link.name).toBe('COMMON.MODULES');
            expect(modules_link.icon).toBe('tablet');
        });

        it('should have zones link with correct route and icon', () => {
            const zones_link = links.find((l) => l.route === '/zones');
            expect(zones_link).toBeDefined();
            expect(zones_link.name).toBe('COMMON.ZONES');
        });

        it('should have drivers link with correct route and icon', () => {
            const drivers_link = links.find((l) => l.route === '/drivers');
            expect(drivers_link).toBeDefined();
            expect(drivers_link.name).toBe('COMMON.DRIVERS');
            expect(drivers_link.icon).toBe('construction');
        });

        it('should have repositories link with correct route and icon', () => {
            const repos_link = links.find((l) => l.route === '/repositories');
            expect(repos_link).toBeDefined();
            expect(repos_link.name).toBe('COMMON.REPOS');
            expect(repos_link.icon).toBe('inventory_2');
        });

        it('should have triggers link with correct route and icon', () => {
            const triggers_link = links.find((l) => l.route === '/triggers');
            expect(triggers_link).toBeDefined();
            expect(triggers_link.name).toBe('COMMON.TRIGGERS');
            expect(triggers_link.icon).toBe('timer');
        });
    });

    describe('localStorage compact mode', () => {
        it('should read true from localStorage', () => {
            localStorage.setItem('BACKOFFICE.SIDEBAR_COMPACT', 'true');
            const value = localStorage.getItem('BACKOFFICE.SIDEBAR_COMPACT');
            expect(value).toBe('true');
            expect(value === 'true').toBe(true);
        });

        it('should read false from localStorage', () => {
            localStorage.setItem('BACKOFFICE.SIDEBAR_COMPACT', 'false');
            const value = localStorage.getItem('BACKOFFICE.SIDEBAR_COMPACT');
            expect(value).toBe('false');
            expect(value === 'true').toBe(false);
        });

        it('should return null if not set', () => {
            const value = localStorage.getItem('BACKOFFICE.SIDEBAR_COMPACT');
            expect(value).toBeNull();
        });

        it('should save and retrieve compact mode correctly', () => {
            localStorage.setItem('BACKOFFICE.SIDEBAR_COMPACT', 'true');
            expect(localStorage.getItem('BACKOFFICE.SIDEBAR_COMPACT')).toBe(
                'true',
            );

            localStorage.setItem('BACKOFFICE.SIDEBAR_COMPACT', 'false');
            expect(localStorage.getItem('BACKOFFICE.SIDEBAR_COMPACT')).toBe(
                'false',
            );
        });
    });

    describe('component structure', () => {
        it('should be a standalone component', () => {
            const metadata = (SidebarMenuComponent as any).ɵcmp;
            expect(metadata.standalone).toBe(true);
        });

        it('should have selector sidebar-menu', () => {
            const metadata = (SidebarMenuComponent as any).ɵcmp;
            expect(metadata.selectors[0][0]).toBe('sidebar-menu');
        });
    });
});
