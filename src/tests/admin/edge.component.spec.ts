import { Dialog } from '@angular/cdk/dialog';
import { TestBed } from '@angular/core/testing';
import { PlaceEdge, queryEdges } from '@placeos/ts-client';
import { of } from 'rxjs';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { PlaceEdgeComponent } from '../../app/admin/edge.component';

vi.mock('@placeos/ts-client', () => ({
    queryEdges: vi.fn(() => Promise.resolve({ data: [] })),
    removeEdge: vi.fn(),
    showMetadata: vi.fn(() => Promise.resolve({})),
}));

describe('PlaceEdgeComponent', () => {
    afterEach(() => sessionStorage.clear());

    it('keeps the last API key when an edit returns no key', async () => {
        const created = JSON.stringify({ id: 'edge-1', x_api_key: 'key-1' });
        sessionStorage.setItem('BACKOFFICE.last_edge', created);
        const closed = of({ id: 'edge-1', name: 'Renamed' } as PlaceEdge);
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

        await component.edit({ id: 'edge-1' } as PlaceEdge);

        // Once on open, and again after the edit
        expect(queryEdges).toHaveBeenCalledTimes(2);
        expect(component.last_change().x_api_key).toBe('key-1');
        expect(sessionStorage.getItem('BACKOFFICE.last_edge')).toBe(created);
    });
});
