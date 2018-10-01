
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { OverlayContentComponent } from '@acaprojects/ngx-widgets';


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
export class ContextMenuComponent extends OverlayContentComponent implements AfterViewInit {

    @ViewChild('container') private container: ElementRef;

    public ngAfterViewInit() {
        setTimeout(() => this.updatePosition(), 10);
    }

    public updatePosition() {
        console.log('Context Menu:', this);
        if (!this.container || !this.container.nativeElement) {
            return setTimeout(() => this.updatePosition(), 50);
        }
        const box = this.container.nativeElement.getBoundingClientRect();
        this.model.right = false;
        this.model.top = 0;
        console.log('Model:', box, this.model.offset);
        if (this.model.offset) {
            if (window.innerHeight < box.bottom) {
                this.model.top = window.innerHeight - (box.bottom + 5);
            }
            this.model.right = box.right - 5 > window.innerWidth;
        }
    }

}
