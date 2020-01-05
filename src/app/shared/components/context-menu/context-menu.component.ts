
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild, ElementRef, AfterViewInit, Input, Output, HostListener, EventEmitter } from '@angular/core';

import { BaseDirective } from '../../globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { ApplicationLink } from '../../utilities/settings.interfaces';



@Component({
    selector: 'context-menu',
    templateUrl: './context-menu.template.html',
    styleUrls: ['./context-menu.styles.scss'],
    animations: [
        trigger('show', [
            transition(':enter', [
                animate('160ms', keyframes([
                    style({ height: '*', width: '*', opacity: 0, offset: 0 }),
                    style({ height: '*', width: '*', opacity: 0, offset: .2 }),
                    style({ height: 0, width: 0, opacity: 0, offset: .4 }),
                    style({ height: '*', width: '*', opacity: 1, offset: 1 })
                ]))
            ]),
        ]),
    ]
})
export class ContextMenuComponent extends BaseDirective implements AfterViewInit {
    /** List of context menu items */
    @Input('context-menu') public context_items: ApplicationLink[];
    /** Emitter for user actions on the menu */
    @Output('contextAction') public context_action = new EventEmitter<ApplicationLink>();
    /** Top position of the menu */
    public top: number;
    /** Whether menu show to the left of the cursor */
    public right: boolean;
    /** Whether the context menu should be shown */
    public show: boolean;
    /** Location of the menu */
    public position: { top: number, left: number };

    @ViewChild('container', { static: true }) private container: ElementRef<HTMLDivElement>;

    @HostListener('contextmenu', ['$event']) public onEvent(event) {
        event.preventDefault();
        this.show = true;
        const box = this._element.nativeElement.getBoundingClientRect();
        this.position = { top: event.clientY - box.top, left: event.clientX - box.left };
        this.timeout('update_position', () => this.updatePosition(), 50);
    }

    constructor(private _service: ApplicationService, private _element: ElementRef<HTMLElement>) {
        super();
    }

    public ngOnInit(): void {
        this.position = { top: 0, left: 0 };
        this.timeout('init', () => this.clearTimeout('close'), 50);
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

    /** Post user actions */
    public post(data: ApplicationLink) {
        this.context_action.emit(data);
    }

    public cancelClose() {
        this.timeout('init', () => this.clearTimeout('close'), 50);
    }

    /** Delayed close of the context menu */
    public close() {
        this.timeout('close', () => this.show = false, 100);
    }

}
