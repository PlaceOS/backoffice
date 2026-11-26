import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { System, Zone } from '@placeos/ts-client';
import { describe, expect, it, vi } from 'vitest';
import { newItem } from '../../app/common/placeos';
import { SystemStateService } from '../../app/systems/system-state.service';
import { SystemZonesComponent } from '../../app/systems/system-zones.component';

vi.mock('../../app/systems/system-state.service', () => ({
    SystemStateService: class {},
}));
vi.mock('../../app/common/support-access', () => ({
    querySupportZones: async () => ({ data: [] }),
}));

describe('SystemZonesComponent', () => {
    it('drops unsaved zone changes when the tab shows another system', async () => {
        const system = newItem(System, { id: 'sys-1', zones: ['zone-1'] });
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
                        zones: signal([newItem(Zone, { id: 'zone-1' })]),
                        loading: signal({}),
                        active_item: system,
                    },
                },
            ],
        });
        const fixture = TestBed.createComponent(SystemZonesComponent);
        const component = fixture.componentInstance;
        await fixture.whenStable();
        component.addPendingZone(newItem(Zone, { id: 'zone-2' }));
        await component.reorder([0, 1]);
        await fixture.whenStable();
        expect(component.zone_order()).toEqual(['zone-2', 'zone-1']);

        item.set(newItem(System, { id: 'sys-2' }));
        await fixture.whenStable();

        expect(component.pending_zones()).toEqual([]);
        expect(component.zone_order()).toEqual([]);
        expect(component.has_changes()).toBe(false);
    });

    it('keeps the new zone order when the save does not complete', async () => {
        const system = newItem(System, {
            id: 'sys-1',
            zones: ['zone-1', 'zone-2'],
        });
        const reorderZones = vi.fn(async () => false);
        TestBed.configureTestingModule({
            imports: [SystemZonesComponent],
            providers: [
                provideZonelessChangeDetection(),
                provideRouter([]),
                {
                    provide: SystemStateService,
                    useValue: {
                        item: signal(system),
                        zones: signal([
                            newItem(Zone, { id: 'zone-1' }),
                            newItem(Zone, { id: 'zone-2' }),
                        ]),
                        loading: signal({}),
                        active_item: system,
                        reorderZones,
                    },
                },
            ],
        });
        const fixture = TestBed.createComponent(SystemZonesComponent);
        const component = fixture.componentInstance;
        await fixture.whenStable();
        await component.reorder([0, 1]);

        await component.saveZoneOrder();

        expect(reorderZones).toHaveBeenCalledWith(['zone-2', 'zone-1']);
        expect(component.zone_order()).toEqual(['zone-2', 'zone-1']);
    });
});
