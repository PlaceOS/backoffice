import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PlaceSystem, PlaceZone } from '@placeos/ts-client';
import { describe, expect, it, vi } from 'vitest';
import { SystemStateService } from '../../app/systems/system-state.service';
import { SystemZonesComponent } from '../../app/systems/system-zones.component';

vi.mock('@placeos/ts-client', () =>
    vi.importActual('@placeos/ts-client/dist/index.es.js'),
);
vi.mock('../../app/systems/system-state.service', () => ({
    SystemStateService: class {},
}));
vi.mock('../../app/common/support-access', () => ({
    querySupportZones: async () => ({ data: [] }),
}));

describe('SystemZonesComponent', () => {
    it('drops unsaved zone changes when the tab shows another system', async () => {
        const system = new PlaceSystem({ id: 'sys-1', zones: ['zone-1'] });
        const item = signal(system);
        TestBed.configureTestingModule({
            imports: [SystemZonesComponent],
            providers: [
                provideZonelessChangeDetection(),
                provideRouter([]),
                {
                    provide: SystemStateService,
                    useValue: {
                        item,
                        zones: signal([new PlaceZone({ id: 'zone-1' })]),
                        loading: signal({}),
                        active_item: system,
                    },
                },
            ],
        });
        const fixture = TestBed.createComponent(SystemZonesComponent);
        const component = fixture.componentInstance;
        await fixture.whenStable();
        component.addPendingZone(new PlaceZone({ id: 'zone-2' }));
        await component.reorder([0, 1]);
        await fixture.whenStable();
        expect(component.zone_order()).toEqual(['zone-2', 'zone-1']);

        item.set(new PlaceSystem({ id: 'sys-2' }));
        await fixture.whenStable();

        expect(component.pending_zones()).toEqual([]);
        expect(component.zone_order()).toEqual([]);
        expect(component.has_changes()).toBe(false);
    });
});
