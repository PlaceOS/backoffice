import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { post, put } from '@placeos/ts-client';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
    StaffTenantModalComponent,
    StaffTenantModalData,
} from '../../app/admin/staff-tenant-modal.component';

vi.mock('@placeos/ts-client', () => ({
    cleanObject: (value: unknown) => value,
    post: vi.fn(() => Promise.resolve({ id: 'tenant-new' })),
    put: vi.fn(() => Promise.resolve({ id: 'tenant-test' })),
}));
vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

describe('Staff tenant advance booking limits', () => {
    const tenant = {
        id: 'tenant-test',
        name: 'Test Tenant',
        domain: 'localhost',
        email_domain: '',
        platform: 'google',
        delegated: true,
        booking_limits: { desk: 2 },
        booking_range: { desk: 30, parking: 0 },
    };

    beforeEach(() => vi.clearAllMocks());

    async function createComponent(data: StaffTenantModalData = {}) {
        await TestBed.configureTestingModule({
            imports: [StaffTenantModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: data },
                {
                    provide: MatDialogRef,
                    useValue: { close: vi.fn(), disableClose: false },
                },
            ],
        })
            .overrideComponent(StaffTenantModalComponent, {
                set: { template: '' },
            })
            .compileComponents();
        return TestBed.createComponent(StaffTenantModalComponent)
            .componentInstance;
    }

    it('loads and updates ranges without changing booking count limits', async () => {
        const component = await createComponent({ tenant });
        expect(component.formModel().booking_range).toEqual([
            { type: 'desk', days: 30 },
            { type: 'parking', days: 0 },
        ]);
        component.updateBookingRange([
            { type: 'desk', days: '45' },
            { type: 'parking', days: '0' },
        ]);
        await component.save();
        expect(put).toHaveBeenCalledWith(
            '/api/staff/v1/tenants/tenant-test',
            expect.objectContaining({
                booking_limits: { desk: 2 },
                booking_range: { desk: 45, parking: 0 },
            }),
        );
    });

    it('creates tenants with numeric booking ranges', async () => {
        const component = await createComponent();
        expect(component.formModel().booking_range).toEqual([]);
        component.formModel.update((model) => ({
            ...model,
            name: 'New Tenant',
            delegated: true,
        }));
        component.updateBookingRange([{ type: 'desk', days: '30' }]);
        await component.save();
        expect(post).toHaveBeenCalledWith(
            '/api/staff/v1/tenants',
            expect.objectContaining({ booking_range: { desk: 30 } }),
        );
    });

    it('sends an empty map when all advance limits are removed', async () => {
        const component = await createComponent({ tenant });
        component.updateBookingRange([]);
        await component.save();
        expect(put).toHaveBeenCalledWith(
            '/api/staff/v1/tenants/tenant-test',
            expect.objectContaining({ booking_range: {} }),
        );
    });

    it('revalidates edits from the object list using the same array', async () => {
        const component = await createComponent({ tenant });
        const ranges = [{ type: 'desk', days: '' }];
        component.updateBookingRange(ranges);
        expect(component.form.booking_range().invalid()).toBe(true);
        ranges[0].days = '30';
        component.updateBookingRange(ranges);
        expect(component.form.booking_range().valid()).toBe(true);
        ranges[0].days = '-1';
        component.updateBookingRange(ranges);
        expect(component.form.booking_range().invalid()).toBe(true);
    });

    it('blocks invalid days, missing types and duplicate types', async () => {
        const component = await createComponent({ tenant });
        const invalid_ranges = [
            [{ type: 'desk', days: '' }],
            [{ type: 'desk', days: '-1' }],
            [{ type: 'desk', days: '1.5' }],
            [{ type: 'desk', days: 'invalid' }],
            [{ type: 'desk', days: '4294967296' }],
            [{ type: '', days: '30' }],
            [
                { type: 'desk', days: '30' },
                { type: ' desk ', days: '60' },
            ],
        ];
        for (const ranges of invalid_ranges) {
            component.updateBookingRange(ranges);
            await component.save();
            expect(component.form.booking_range().invalid()).toBe(true);
        }
        expect(put).not.toHaveBeenCalled();
    });
});
