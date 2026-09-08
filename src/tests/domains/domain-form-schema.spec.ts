import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import {
    applyApplicationFormSchema,
    generateApplicationFormModel,
} from '../../app/domains/applications.utilities';
import {
    applyDomainFormSchema,
    generateDomainFormModel,
} from '../../app/domains/domains.utilities';
import { createTestForm } from '../common/form-test.helpers';

describe('domain and application validation', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it.each(['https://example.com', 'example.com/path', 'example com'])(
        'rejects domain %j and accepts a host name',
        (domain) => {
            const { fields } = createTestForm(
                { ...generateDomainFormModel(), name: 'Main', domain },
                applyDomainFormSchema,
            );
            expect(fields.domain().invalid()).toBe(true);
            fields.domain().value.set('backoffice.example.com');
            expect(fields().valid()).toBe(true);
        },
    );

    it('requires the domain name and host', () => {
        const { fields } = createTestForm(
            generateDomainFormModel(),
            applyDomainFormSchema,
        );
        expect(fields.name().invalid()).toBe(true);
        expect(fields.domain().invalid()).toBe(true);
    });

    it('requires an application name and validates its redirect URL', () => {
        const { fields } = createTestForm(
            generateApplicationFormModel(),
            applyApplicationFormSchema,
        );
        expect(fields.name().invalid()).toBe(true);
        fields.name().value.set('Reception');
        fields.redirect_uri().value.set('invalid');
        expect(fields.redirect_uri().invalid()).toBe(true);
        fields.redirect_uri().value.set('https://example.com/oauth/callback');
        expect(fields().valid()).toBe(true);
    });
});
