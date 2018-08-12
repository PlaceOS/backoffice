import { OverlayContentComponent } from '@acaprojects/ngx-widgets';
import { Component } from '@angular/core';

@Component({
    selector: 'confirm-modal',
    templateUrl: './confirm-modal.template.html',
    styleUrls: ['./confirm-modal.styles.scss'],
})
export class ConfirmModalComponent extends OverlayContentComponent {
    public model: any = {};

    public init() {
        return;
    }

    public close() {
        setTimeout(() => this.fn.close(), 300);
    }

    public event(name: string) {
        setTimeout(() => this.fn.event(name), 300);
    }
}
