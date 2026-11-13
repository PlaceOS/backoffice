import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaceApplication } from '@placeos/ts-client';
import { EMPTY } from 'rxjs';
import { describe, expect, it, vi } from 'vitest';
import { ApplicationFormComponent } from '../../app/domains/application-form.component';

const mocks = vi.hoisted(() => ({
    addApplication: vi.fn(),
    updateApplication: vi.fn(),
}));
vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<typeof import('@placeos/ts-client')>(
        '@placeos/ts-client/dist/index.es.js',
    )),
    ...mocks,
}));
vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

describe('saving applications', () => {
    it('keeps the stored client ID when the redirect URL changes', async () => {
        mocks.updateApplication.mockResolvedValue({});
        TestBed.configureTestingModule({
            imports: [ApplicationFormComponent],
            providers: [
                provideZonelessChangeDetection(),
                {
                    provide: DialogRef,
                    useValue: {
                        close: vi.fn(),
                        disableClose: false,
                        backdropClick: EMPTY,
                        keydownEvents: EMPTY,
                    },
                },
                {
                    provide: DIALOG_DATA,
                    useValue: {
                        item: new PlaceApplication({
                            id: 'app-1',
                            name: 'Kiosk',
                            redirect_uri: 'https://old.example.com/callback',
                            uid: 'stored-uid',
                        }),
                    },
                },
            ],
        });
        const fixture = TestBed.createComponent(ApplicationFormComponent);
        const component = fixture.componentInstance;
        await fixture.whenStable();
        component.form
            .redirect_uri()
            .value.set('https://new.example.com/callback');
        await fixture.whenStable();

        await component.submit();

        expect(mocks.updateApplication).toHaveBeenCalledExactlyOnceWith(
            'app-1',
            expect.objectContaining({
                redirect_uri: 'https://new.example.com/callback',
                uid: 'stored-uid',
            }),
        );
        expect(mocks.updateApplication.mock.calls[0][1]).not.toHaveProperty(
            'client_id',
        );
    });
});
