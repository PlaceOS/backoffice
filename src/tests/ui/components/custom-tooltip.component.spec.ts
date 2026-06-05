import { Component, TemplateRef, viewChild } from '@angular/core';
import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';
import { OverlayContainer } from '@angular/cdk/overlay';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { CustomTooltipComponent } from '../../../app/ui/custom-tooltip.component';

@Component({
    template: `
        <button
            customTooltip
            [content]="tooltip_template"
            [backdrop]="backdrop"
            [hover]="hover"
        >
            Open tooltip
        </button>
        <ng-template #tooltip_template>
            <div class="test-tooltip">Tooltip content</div>
        </ng-template>
    `,
    imports: [CustomTooltipComponent],
})
class TestHostComponent {
    public readonly tooltip = viewChild(CustomTooltipComponent);
    public readonly tooltip_template =
        viewChild<TemplateRef<unknown>>('tooltip_template');
    public backdrop = true;
    public hover = false;
}

const waitForTooltipDelay = () =>
    new Promise((resolve) => setTimeout(resolve, 60));

describe('CustomTooltipComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let overlay_container: OverlayContainer;
    let overlay_element: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();

        overlay_container = TestBed.inject(OverlayContainer);
        overlay_element = overlay_container.getContainerElement();
        fixture = TestBed.createComponent(TestHostComponent);
    });

    afterEach(() => {
        overlay_container.ngOnDestroy();
    });

    it('opens template content when clicked', async () => {
        fixture.detectChanges();
        const button =
            fixture.nativeElement.querySelector<HTMLButtonElement>('button');
        const tooltip = fixture.componentInstance.tooltip();

        expect(tooltip?.content()).toBeTruthy();
        button.click();
        await waitForTooltipDelay();
        fixture.detectChanges();

        expect(overlay_element.textContent).toContain('Tooltip content');
    });

    it('closes when the backdrop is clicked', async () => {
        fixture.detectChanges();
        const button =
            fixture.nativeElement.querySelector<HTMLButtonElement>('button');

        button.click();
        await waitForTooltipDelay();
        fixture.detectChanges();
        expect(overlay_element.textContent).toContain('Tooltip content');

        overlay_element
            .querySelector<HTMLElement>('.cdk-overlay-backdrop')
            ?.click();
        fixture.detectChanges();

        expect(overlay_element.textContent).not.toContain('Tooltip content');
    });

    it('opens on mouse enter when hover is enabled', async () => {
        fixture.componentInstance.backdrop = false;
        fixture.componentInstance.hover = true;
        fixture.detectChanges();
        const button =
            fixture.nativeElement.querySelector<HTMLButtonElement>('button');
        const tooltip = fixture.componentInstance.tooltip();

        expect(tooltip?.hover()).toBe(true);
        button.dispatchEvent(new Event('mouseenter'));
        await waitForTooltipDelay();
        fixture.detectChanges();

        expect(overlay_element.textContent).toContain('Tooltip content');
    });
});
