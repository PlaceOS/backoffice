import { describe, expect, it } from 'vitest';
import { fieldLabel } from '../../app/common/forms';

describe('fieldLabel', () => {
    it('turns form keys into readable names', () => {
        expect(fieldLabel('zone')).toBe('Zone');
        expect(fieldLabel('service_account')).toBe('Service account');
    });
});
