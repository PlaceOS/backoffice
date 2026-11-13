import { describe, expect, it, vi } from 'vitest';
import { fieldLabel } from '../../app/common/forms';

vi.mock('@placeos/ts-client', () =>
    vi.importActual('@placeos/ts-client/dist/index.es.js'),
);

describe('fieldLabel', () => {
    it('turns form keys into readable names', () => {
        expect(fieldLabel('zone')).toBe('Zone');
        expect(fieldLabel('service_account')).toBe('Service account');
    });
});
