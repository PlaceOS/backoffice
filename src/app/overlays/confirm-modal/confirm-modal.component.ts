
import { OverlayItem } from '@acaprojects/ngx-overlays';
import { Component } from '@angular/core';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { OVERLAY_REGISTER } from 'src/app/shared/globals/overlay-register';

@Component({
    selector: 'confirm-modal',
    templateUrl: './confirm-modal.template.html',
    styleUrls: ['./confirm-modal.styles.scss'],
})
export class ConfirmModalComponent extends BaseDirective {
    public model: any = {};

    constructor(private _item: OverlayItem) {
        super();
    }

    public ngOnInit(): void {
        this.model = this._item.data || {};
    }

    public close() {
        setTimeout(() => this._item.close(), 300);
    }

    public event(name: string) {
        setTimeout(() => this._item.post('event', name), 300);
    }
}

OVERLAY_REGISTER.push({ id: 'confirm', config: { content: ConfirmModalComponent, config: 'modal' } });
