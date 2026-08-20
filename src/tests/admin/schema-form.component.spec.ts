import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { SchemaFormComponent } from '../../app/admin/signage-plugins/schema-form.component';

describe('SchemaFormComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SchemaFormComponent],
        }).compileComponents();
    });

    it('does not require values when the form edits plugin defaults', async () => {
        const fixture = TestBed.createComponent(SchemaFormComponent);
        fixture.componentRef.setInput('schema', {
            type: 'object',
            properties: {
                feed_url: { type: 'string', title: 'RSS Feed URL' },
            },
            required: ['feed_url'],
        });

        await fixture.whenStable();

        expect(fixture.componentInstance.isValid()).toBe(false);
        expect(
            fixture.nativeElement.querySelector('label span'),
        ).not.toBeNull();

        fixture.componentRef.setInput('enforce_required', false);
        await fixture.whenStable();

        expect(fixture.componentInstance.isValid()).toBe(true);
        expect(fixture.nativeElement.querySelector('label span')).toBeNull();
    });
});
