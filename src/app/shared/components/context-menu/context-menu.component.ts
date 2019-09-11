
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { OverlayItem } from '@acaprojects/ngx-overlays';

import { BaseComponent } from '../../globals/base.component';


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
export class ContextMenuComponent extends BaseComponent implements AfterViewInit {
    /** Top position of the menu */
    public top: number;
    /** Whether menu show to the left of the cursor */
    public right: boolean;
    /**  */
    public offset: number;

    @ViewChild('container', { static: true }) private container: ElementRef;

    constructor(private _item: OverlayItem) {
        super();
    }

    /** List of menu items to display */
    public get menu_items(): any[] {
        return this._item.data.data;
    }

    public ngOnInit(): void {
        this.offset = this._item.data.offset;
    }

    public ngAfterViewInit() {
        setTimeout(() => this.updatePosition(), 10);
    }

    public updatePosition() {
        if (!this.container || !this.container.nativeElement) {
            return setTimeout(() => this.updatePosition(), 50);
        }
        const box = this.container.nativeElement.getBoundingClientRect();
        this.right = false;
        this.top = 0;
        if (this.offset) {
            if (window.innerHeight < box.bottom) {
                this.top = window.innerHeight - (box.bottom + 5);
            }
            this.right = box.right - 5 > window.innerWidth;
        }
    }

    public post(data: any) {
        this._item.post('event', data);
    }

}
