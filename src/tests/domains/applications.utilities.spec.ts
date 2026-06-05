import { describe, expect, it } from 'vitest';
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
            const model = generateApplicationFormModel({
                name: 'Test App',
                scopes: 'public',
                subsystems: ['sys-a'],
                skip_authorization: true,
                redirect_uri: 'https://example.com/callback',
                uid: 'client-id',
            } as any);

            expect(model).toEqual({
                name: 'Test App',
                scopes: 'public',
                subsystems: ['sys-a'],
                skip_authorization: true,
                redirect_uri: 'https://example.com/callback',
                client_id: 'client-id',
                preserve_client_id: false,
            });
        });
    });
});
