import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { Component, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { ContextMenuComponent } from '../../../app/ui/context-menu.component';

@Component({
    template: `
        <div id="area" [context-menu]="menu">Right-click me</div>
        <ng-template #menu>
            <div cdkMenu><button cdkMenuItem>Restart</button></div>
        </ng-template>
    `,
    imports: [ContextMenuComponent, CdkMenu, CdkMenuItem],
})
class HostComponent {}

describe('ContextMenuComponent', () => {
    it('opens the menu at the pointer on right-click', async () => {
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });
        const fixture = TestBed.createComponent(HostComponent);
        await fixture.whenStable();
        const area = fixture.nativeElement.querySelector('#area');

        const event = new MouseEvent('contextmenu', {
            bubbles: true,
            cancelable: true,
            clientX: 40,
            clientY: 60,
        });
        area.dispatchEvent(event);
        await fixture.whenStable();

        expect(event.defaultPrevented).toBe(true);
        const item = document.querySelector('.cdk-menu [cdkmenuitem]');
        expect(item?.textContent).toContain('Restart');
    });
});
