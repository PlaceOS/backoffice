import { Dialog } from '@angular/cdk/dialog';
import { TestBed } from '@angular/core/testing';
import { type Edge, edges } from '@placeos/ts-client';
import { of } from 'rxjs';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { PlaceEdgeComponent } from '../../app/admin/edge.component';
const { fromV1Mock } = await vi.hoisted(
    () => import('@placeos/ts-client/compat'),
);

vi.mock('@placeos/ts-client', () => ({
    edges: {
        query: vi.fn(
            fromV1Mock(() => Promise.resolve({ data: [] }), ['...'], 'page'),
        ),
        destroy: vi.fn(fromV1Mock(undefined, ['id'])),
    },
    metadata: {
        show: vi.fn(
            fromV1Mock(
                () => Promise.resolve({}),
                ['id', 'name'],
                'data',
                'name',
            ),
        ),
    },
}));

describe('PlaceEdgeComponent', () => {
    afterEach(() => sessionStorage.clear());

    it('keeps the last API key when an edit returns no key', async () => {
        const created = JSON.stringify({ id: 'edge-1', x_api_key: 'key-1' });
        sessionStorage.setItem('BACKOFFICE.last_edge', created);
        const closed = of({ id: 'edge-1', name: 'Renamed' } as Edge);
        await TestBed.configureTestingModule({
            imports: [PlaceEdgeComponent],
            providers: [
                { provide: Dialog, useValue: { open: () => ({ closed }) } },
            ],
        })
            .overrideComponent(PlaceEdgeComponent, {
                set: { template: '' },
            })
            .compileComponents();
        const fixture = TestBed.createComponent(PlaceEdgeComponent);
        fixture.detectChanges();
        const component = fixture.componentInstance;

        await component.edit({ id: 'edge-1' } as Edge);

        // Once on open, and again after the edit
        expect(edges.query).toHaveBeenCalledTimes(2);
        expect(component.last_change().x_api_key).toBe('key-1');
        expect(sessionStorage.getItem('BACKOFFICE.last_edge')).toBe(created);
    });
});
