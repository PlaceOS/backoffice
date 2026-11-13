import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaceDomain } from '@placeos/ts-client';
import { EMPTY } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
    AuthSourceModalComponent,
    AuthSourceTypes,
} from '../../app/overlays/auth-source-modal.component';

const mocks = vi.hoisted(() => ({
    addOAuthSource: vi.fn(),
    addSAMLSource: vi.fn(),
    addLDAPSource: vi.fn(),
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

describe('saving authentication sources', () => {
    let component: AuthSourceModalComponent;

    beforeEach(async () => {
        vi.resetAllMocks();
        for (const add of Object.values(mocks)) add.mockResolvedValue({});
        TestBed.configureTestingModule({
            imports: [AuthSourceModalComponent],
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
                    useValue: { domain: new PlaceDomain({ id: 'domain-1' }) },
                },
            ],
        });
        const fixture = TestBed.createComponent(AuthSourceModalComponent);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it.each([
        {
            type: 'oauth',
            add: mocks.addOAuthSource,
            edit: () =>
                component.oauthFormModel.update((value) => ({
                    ...value,
                    name: 'Corporate sign-in',
                    client_id: 'client-1',
                })),
            saved: { name: 'Corporate sign-in', client_id: 'client-1' },
        },
        {
            type: 'saml',
            add: mocks.addSAMLSource,
            edit: () =>
                component.samlFormModel.update((value) => ({
                    ...value,
                    name: 'Corporate SAML',
                    issuer: 'placeos',
                    idp_sso_target_url: 'https://idp.example.com/sso',
                    assertion_consumer_service_url:
                        'https://example.com/saml/callback',
                })),
            saved: { name: 'Corporate SAML', issuer: 'placeos' },
        },
        {
            type: 'ldap',
            add: mocks.addLDAPSource,
            edit: () =>
                component.ldapFormModel.update((value) => ({
                    ...value,
                    name: 'Directory',
                    host: 'ldap.example.com',
                    base: 'dc=example,dc=com',
                })),
            saved: { name: 'Directory', host: 'ldap.example.com' },
        },
    ] satisfies {
        type: AuthSourceTypes;
        add: (typeof mocks)[keyof typeof mocks];
        edit: () => void;
        saved: Record<string, string>;
    }[])(
        'adds a new $type source with its edited values',
        async ({ type, add, edit, saved }) => {
            component.setType(type);
            edit();
            await component.save();
            expect(add).toHaveBeenCalledExactlyOnceWith(
                expect.objectContaining({ ...saved, authority_id: 'domain-1' }),
            );
            for (const other of Object.values(mocks)) {
                if (other !== add) expect(other).not.toHaveBeenCalled();
            }
        },
    );
});
