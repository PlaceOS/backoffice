import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Domain } from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';
import { EMPTY } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { newItem } from '../../app/common/placeos';
import {
    AuthSourceModalComponent,
    AuthSourceTypes,
} from '../../app/overlays/auth-source-modal.component';

const mocks = vi.hoisted(() => ({
    addOAuthSource: vi.fn(),
    addSAMLSource: vi.fn(),
    addLDAPSource: vi.fn(),
}));
vi.mock('@placeos/ts-client', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@placeos/ts-client')>();
    return {
        ...actual,
        oauth_authentications: {
            ...actual.oauth_authentications,
            create: mocks.addOAuthSource,
        },
        saml_authentications: {
            ...actual.saml_authentications,
            create: mocks.addSAMLSource,
        },
        ldap_authentications: {
            ...actual.ldap_authentications,
            create: mocks.addLDAPSource,
        },
    };
});
vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

describe('saving authentication sources', () => {
    let component: AuthSourceModalComponent;

    beforeEach(async () => {
        vi.resetAllMocks();
        for (const add of Object.values(mocks))
            add.mockResolvedValue(mockReply({}));
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
                    useValue: { domain: newItem(Domain, { id: 'domain-1' }) },
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
            expect(add).toHaveBeenCalledExactlyOnceWith({
                body: expect.objectContaining({
                    ...saved,
                    authority_id: 'domain-1',
                }),
            });
            for (const other of Object.values(mocks)) {
                if (other !== add) expect(other).not.toHaveBeenCalled();
            }
        },
    );
});
