import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { GroupAdGroupsFieldComponent } from '../../app/groups/group-ad-groups-field.component';

vi.mock('@placeos/ts-client', () =>
    vi.importActual('@placeos/ts-client/dist/index.es.js'),
);
vi.mock('../../app/groups/group-permissions-modal.component', () => ({
    GroupPermissionsModalComponent: class {},
}));

describe('GroupAdGroupsFieldComponent', () => {
    const open = vi.fn();
    let fixture: ComponentFixture<GroupAdGroupsFieldComponent>;
    let component: GroupAdGroupsFieldComponent;

    beforeEach(() => {
        open.mockReset();
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                { provide: MatDialog, useValue: { open } },
            ],
        }).overrideComponent(GroupAdGroupsFieldComponent, {
            set: { template: '', imports: [] },
        });
        fixture = TestBed.createComponent(GroupAdGroupsFieldComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('default_permissions', 17);
        fixture.componentRef.setInput('mappings', {
            'ad-1': ['Staff', 64],
        });
    });

    it('adds new AD groups with the default permissions', () => {
        component.addGroup({ id: 'AD-2', name: 'Admins' });
        expect(component.mappings()).toEqual({
            'ad-1': ['Staff', 64],
            'ad-2': ['Admins', 17],
        });
    });

    it('keeps custom permissions when an AD group is added again', () => {
        component.addGroup({ id: ' AD-1 ', name: 'Staff' });
        expect(component.mappings()).toEqual({ 'ad-1': ['Staff', 64] });
    });

    it('updates permissions of one AD group from the permissions modal', async () => {
        open.mockReturnValue({ afterClosed: () => of({ permissions: 3 }) });
        await component.editPermissions(component.rows()[0]);
        expect(component.mappings()).toEqual({ 'ad-1': ['Staff', 3] });
    });

    it('removes an AD group', () => {
        component.removeGroup('ad-1');
        expect(component.mappings()).toEqual({});
    });
});
