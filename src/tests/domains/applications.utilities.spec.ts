import { Application } from '@placeos/ts-client';
import { describe, expect, it } from 'vitest';
import { newItem } from '../../app/common/placeos';
import { generateApplicationFormModel } from '../../app/domains/applications.utilities';

describe('applications.utilities', () => {
    describe('generateApplicationFormModel', () => {
        it('returns empty defaults', () => {
            expect(generateApplicationFormModel()).toEqual({
                name: '',
                scopes: '',
                subsystems: [],
                skip_authorization: false,
                redirect_uri: '',
                client_id: '',
                preserve_client_id: false,
            });
        });

        it('populates values from an application', () => {
            const model = generateApplicationFormModel(
                newItem(Application, {
                    name: 'Test App',
                    scopes: 'public',
                    subsystems: ['sys-a'],
                    skip_authorization: true,
                    redirect_uri: 'https://example.com/callback',
                    uid: 'client-id',
                }),
            );

            expect(model).toEqual({
                name: 'Test App',
                scopes: 'public',
                subsystems: ['sys-a'],
                skip_authorization: true,
                redirect_uri: 'https://example.com/callback',
                client_id: 'client-id',
                // The API has no such field
                preserve_client_id: false,
            });
        });
    });
});
