import {
    Component,
    ViewChild,
    ElementRef,
    AfterViewInit,
    Input,
    HostListener,
    OnInit,
} from '@angular/core';
import { MatMenuTrigger, MatMenuPanel } from '@angular/material/menu';
import { BaseClass } from 'apps/backoffice/src/app/common/base.class';

@Component({
    selector: '[context-menu]',
    template: `
        <ng-content></ng-content>
        <div
            class="pointer-events-none fixed h-px w-px"
            style="opacity: 0; height: 0"
            #container
            [style.top]="position.top + 'px'"
            [style.left]="position.left + 'px'"
            [matMenuTriggerFor]="menu"
        ></div>
    `,
    styles: [`
        :host {
            position: relative;
        }
    `],
})
export class ContextMenuComponent
    extends BaseClass
    implements OnInit, AfterViewInit {
    /** List of context menu items */
    @Input('context-menu') public menu: MatMenuPanel;
    /** Offset of the context menu on the x axis */
    @Input() public offset_x = 0;
    /** Offset of the context menu on the y axis */
    @Input() public offset_y = 0;
    /** Top position of the menu */
    public top: number;
    /** Whether menu show to the left of the cursor */
    public right: boolean;
    /** Whether the context menu should be shown */
    public show: boolean;
    /** Location of the menu */
    public position: { top: number; left: number };

    @ViewChild('container', { static: true })
    private container: ElementRef<HTMLDivElement>;
    @ViewChild(MatMenuTrigger, { static: true })
    private trigger: MatMenuTrigger;

    @HostListener('contextmenu', ['$event']) public onEvent(event) {
        event.preventDefault();
        this.position = {
            top: event.clientY + this.offset_y,
            left: event.clientX + this.offset_x,
        };
        if (this.trigger) this.trigger.openMenu();
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
        if (!this.container || !this.container.nativeElement) {
            return setTimeout(() => this.updatePosition(), 50);
        }
        const box = this.container.nativeElement.getBoundingClientRect();
        this.right = false;
        this.top = 0;
        if (window.innerHeight < box.bottom) {
            this.top = window.innerHeight - (box.bottom + 5);
        }
        this.right = box.right - 5 > window.innerWidth;
    }
}
