import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { OverlayItem } from '@acaprojects/ngx-overlays';

import { OVERLAY_REGISTER } from '../../shared/globals/overlay-register';
import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { ApplicationIcon } from 'src/app/shared/utilities/settings.interfaces';

export interface ConfirmModalOptions {
    title: string;
    body: string;
    icon?: ApplicationIcon;
}

@Component({
    selector: 'confirm-modal',
    templateUrl: './confirm-modal.component.html',
    styleUrls: ['./confirm-modal.component.scss'],
    animations: [
        trigger('show', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateX(100%) scale(0)' }),
                animate(200, style({ opacity: 1, transform: 'translateX(0%) scale(1)' }))
            ]),
            transition(':leave', [
                style({ opacity: 1, transform: 'translateX(0%) scale(1)' }),
                animate(200, style({ opacity: 0, transform: 'translateX(-100%) scale(0)' }))
            ])
        ])
    ]
})
export class ConfirmModalComponent extends BaseDirective implements OnInit {
    /** Title of the confirm modal */
    public title: string;
    /** Body of the confirm modal */
    public content: string;
    /** Display text on the confirm button */
    public action: string;
    /** Display icon properties */
    public icon: { class?: string; value?: string; src?: string };
    /** Whether modal is closing */
    public closing: boolean;

    constructor(private item: OverlayItem) {
        super();
    }

    public ngOnInit(): void {
        const data = this.item.data;
        if (data) {
            this.title = data.title || 'Confirm';
            this.content = data.content || data.body || data.description || 'Confirm';
            this.action = data.action || 'Ok';
            this.icon = data.icon;
        }
    }

    /**
     * Close the modal
     */
    public close() {
        this.closing = true;
        this.timeout('close', () => this.item.close());

    }

    /**
     * User confirmation of the content of the modal
     */
    public accept() {
        this.item.post('finish');
        this.close();
    }
}

OVERLAY_REGISTER.push({ id: 'confirm', config: { content: ConfirmModalComponent, config: 'modal' } });
