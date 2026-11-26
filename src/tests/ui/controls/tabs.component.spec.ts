import { Component, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { TabsComponent } from '../../../app/ui/controls/tabs.component';

@Component({
    template: `
        <app-tabs #tabs [labels]="['One', 'Two']" [selectedIndex]="1" />
        <div
            role="tabpanel"
            [id]="tabs.panelId(1)"
            [attr.aria-labelledby]="tabs.tabId(1)"
        >
            Two
        </div>
    `,
    imports: [TabsComponent],
})
class HostComponent {}

describe('TabsComponent', () => {
    it('links the selected tab and its panel', async () => {
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });
        const fixture = TestBed.createComponent(HostComponent);
        await fixture.whenStable();
        const element: HTMLElement = fixture.nativeElement;
        const [first, selected] = element.querySelectorAll('[role=tab]');
        const panel = element.querySelector('[role=tabpanel]');
        expect(selected.getAttribute('aria-controls')).toBe(panel.id);
        expect(panel.getAttribute('aria-labelledby')).toBe(selected.id);
        expect(first.hasAttribute('aria-controls')).toBe(false);
    });
});
