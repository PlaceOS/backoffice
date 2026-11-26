import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { configure } from '@placeos/ts-client';
import {
    clearEndpointMocks,
    endpointMocks,
    mockEndpoint,
} from '@placeos/ts-client/mock';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { AdminDataService } from '../../app/admin/admin-data.service';
import { AdminDomainSelectComponent } from '../../app/admin/admin-domain-select.component';
import { LocaleService } from '../../app/common/locale.service';

@Component({
    template: `
        <admin-domain-select id="first" key="users" all />
        @if (second()) {
            <admin-domain-select id="second" key="users" all />
        }
    `,
    imports: [AdminDomainSelectComponent],
})
class HostComponent {
    /** Whether a second picker for the same key shows, as on a later page */
    public readonly second = signal(false);
}

@Component({
    template: `
        <span id="domain-label">Prefix</span>
        <admin-domain-select key="labelled" labelled_by="domain-label" />
        <admin-domain-select id="unlabelled" key="other" />
    `,
    imports: [AdminDomainSelectComponent],
})
class LabelledHostComponent {}

describe('AdminDomainSelectComponent', () => {
    beforeEach(() => {
        configure({
            base_url: '',
            auth: { kind: 'none' },
            mock: endpointMocks,
        });
        clearEndpointMocks();
        mockEndpoint('domains.query', () => [
            { id: 'domain-1', name: 'Campus' },
        ]);
    });

    afterEach(() => document.body.replaceChildren());

    it('keeps "All domains" as null, so a second picker shows it', async () => {
        // The text shows in English once the translations load
        await TestBed.inject(LocaleService).ready;
        const data = TestBed.inject(AdminDataService);
        const [campus] = await data.loadDomains();
        data.setDomain('users', campus);
        const fixture = TestBed.createComponent(HostComponent);
        document.body.appendChild(fixture.nativeElement);
        await fixture.whenStable();
        const element: HTMLElement = fixture.nativeElement;
        const first = element.querySelector<HTMLElement>('#first app-select');
        expect(first.textContent).toContain('Campus');

        first.click();
        await fixture.whenStable();
        [...document.querySelectorAll<HTMLElement>('app-option')]
            .find((option) => option.textContent.includes('All Domains'))
            .click();
        await fixture.whenStable();
        expect(data.selectedDomain('users')()).toBeNull();

        fixture.componentInstance.second.set(true);
        await fixture.whenStable();
        const second = element.querySelector('#second app-select');
        expect(
            second.querySelector('.select-placeholder')?.textContent,
        ).toContain('All Domains');
    });

    it('takes its name from the label that labelled_by gives', async () => {
        // The text shows in English once the translations load
        await TestBed.inject(LocaleService).ready;
        const fixture = TestBed.createComponent(LabelledHostComponent);
        document.body.appendChild(fixture.nativeElement);
        await fixture.whenStable();
        const element: HTMLElement = fixture.nativeElement;

        const labelled = element.querySelector('[key="labelled"] app-select');
        expect(labelled.getAttribute('aria-labelledby')).toBe('domain-label');
        expect(labelled.hasAttribute('aria-label')).toBe(false);
        // Without a label, the placeholder names the select
        const unlabelled = element.querySelector('#unlabelled app-select');
        expect(unlabelled.hasAttribute('aria-labelledby')).toBe(false);
        expect(unlabelled.getAttribute('aria-label')).toBe('Select domain...');
    });
});
