import {
    AfterViewInit,
    Component,
    ElementRef,
    HostListener,
    OnInit,
    input,
    viewChild,
} from '@angular/core';
import {
    MatMenuModule,
    MatMenuPanel,
    MatMenuTrigger,
} from '@angular/material/menu';
import { AsyncHandler } from '../common/async-handler.class';

@Component({
    selector: '[context-menu]',
    template: `
        <ng-content />
        <div
            class="pointer-events-none fixed h-px w-px"
            style="opacity: 0; height: 0"
            #container
            [style.top]="position.top + 'px'"
            [style.left]="position.left + 'px'"
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
export class ContextMenuComponent
    extends AsyncHandler
    implements OnInit, AfterViewInit
{
    /** List of context menu items */
    public readonly menu = input<MatMenuPanel>(undefined, {
        alias: 'context-menu',
    });
    /** Offset of the context menu on the x axis */
    public readonly offset_x = input(0);
    /** Offset of the context menu on the y axis */
    public readonly offset_y = input(0);
    /** Top position of the menu */
    public top: number;
    /** Whether menu show to the left of the cursor */
    public right: boolean;
    /** Whether the context menu should be shown */
    public show: boolean;
    /** Location of the menu */
    public position: { top: number; left: number };

    private readonly container =
        viewChild<ElementRef<HTMLDivElement>>('container');
    private readonly trigger = viewChild(MatMenuTrigger);

    @HostListener('contextmenu', ['$event']) public onEvent(event) {
        event.preventDefault();
        this.position = {
            top: event.clientY + this.offset_y(),
            left: event.clientX + this.offset_x(),
        };
        const trigger = this.trigger();
        if (trigger) trigger.openMenu();
        this.timeout('update_position', () => this.updatePosition(), 50);
    }

    public ngOnInit(): void {
        this.position = { top: 0, left: 0 };
    }

    public ngAfterViewInit() {
        setTimeout(() => this.updatePosition(), 10);
    }

    /** Update the position of the context menu */
    public updatePosition() {
        const container = this.container();
        if (!container || !container.nativeElement) {
            return setTimeout(() => this.updatePosition(), 50);
        }
        const box = container.nativeElement.getBoundingClientRect();
        this.right = false;
        this.top = 0;
        if (window.innerHeight < box.bottom) {
            this.top = window.innerHeight - (box.bottom + 5);
        }
        this.right = box.right - 5 > window.innerWidth;
    }
}
