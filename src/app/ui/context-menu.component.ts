import {
    Component,
    HostListener,
    OnInit,
    input,
    signal,
    viewChild,
} from '@angular/core';
import {
    MatMenuModule,
    MatMenuPanel,
    MatMenuTrigger,
} from '@angular/material/menu';

@Component({
    selector: '[context-menu]',
    template: `
        <ng-content />
        <div
            class="pointer-events-none fixed h-px w-px"
            style="opacity: 0; height: 0"
            [style.top]="position().top + 'px'"
            [style.left]="position().left + 'px'"
            [matMenuTriggerFor]="menu()"
        ></div>
    `,
    styles: [
        `
            :host {
                position: relative;
            }
        `,
    ],
    imports: [MatMenuModule],
})
export class ContextMenuComponent implements OnInit {
    /** List of context menu items */
    public readonly menu = input<MatMenuPanel>(undefined, {
        alias: 'context-menu',
    });
    /** Offset of the context menu on the x axis */
    public readonly offset_x = input(0);
    /** Offset of the context menu on the y axis */
    public readonly offset_y = input(0);
    /** Location of the menu */
    public readonly position = signal<{ top: number; left: number } | null>(
        null,
    );

    private readonly trigger = viewChild(MatMenuTrigger);

    @HostListener('contextmenu', ['$event']) public onEvent(event) {
        event.preventDefault();
        this.position.set({
            top: event.clientY + this.offset_y(),
            left: event.clientX + this.offset_x(),
        });
        const trigger = this.trigger();
        if (trigger) trigger.openMenu();
    }

    public ngOnInit(): void {
        this.position.set({ top: 0, left: 0 });
    }
}
