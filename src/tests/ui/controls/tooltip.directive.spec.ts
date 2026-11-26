import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { PANEL_GAP, TOOLTIP_ARROW } from '../../../app/ui/controls/overlay';
import { TooltipDirective } from '../../../app/ui/controls/tooltip.directive';

@Component({
    template: `<button appTooltip="Save the item">Save</button>`,
    imports: [TooltipDirective],
})
class HostComponent {}

describe('TooltipDirective', () => {
    let trigger: HTMLButtonElement;
    const panel = () => document.querySelector<HTMLElement>('.tooltip-panel');

    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });
        const fixture = TestBed.createComponent(HostComponent);
        await fixture.whenStable();
        trigger = fixture.nativeElement.querySelector('button');
        vi.useFakeTimers();
        trigger.dispatchEvent(new MouseEvent('mouseenter'));
    });

    afterEach(() => vi.useRealTimers());

    it('stays open while the pointer crosses the gap onto it slowly', () => {
        const bridge = panel().querySelector('.tooltip-bridge');
        // The bridge fills the gap below the trigger
        expect(panel().dataset['side']).toBe('below');
        expect(panel().style.getPropertyValue('--bridge')).toBe(
            `${TOOLTIP_ARROW + PANEL_GAP}px`,
        );

        trigger.dispatchEvent(new MouseEvent('mouseleave'));
        bridge.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
        vi.advanceTimersByTime(1000);
        expect(panel()?.textContent).toBe('Save the item');

        panel().dispatchEvent(new MouseEvent('mouseleave'));
        vi.advanceTimersByTime(1000);
        expect(panel()).toBeNull();
    });

    it('extends the bridge to the edge of a raised trigger below it', () => {
        trigger.dispatchEvent(new MouseEvent('pointerdown'));
        trigger.style.setProperty('--hover-raise', '1px');
        vi.spyOn(trigger, 'matches').mockReturnValue(true);
        trigger.dispatchEvent(new MouseEvent('mouseenter'));

        expect(panel().style.getPropertyValue('--bridge')).toBe(
            `${TOOLTIP_ARROW + PANEL_GAP + 1}px`,
        );
    });

    it('stays open for a focused trigger when the pointer leaves', () => {
        TestBed.inject(FocusMonitor).focusVia(trigger, 'keyboard');
        trigger.dispatchEvent(new MouseEvent('mouseleave'));
        vi.advanceTimersByTime(1000);

        expect(panel()?.textContent).toBe('Save the item');
    });

    it('closes on Escape while the pointer is on the trigger', () => {
        document.body.dispatchEvent(
            new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
        );
        expect(panel()).toBeNull();
    });
});
