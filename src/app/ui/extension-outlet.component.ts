import { Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { addMetadata, showMetadata, updateMetadata } from '@placeos/ts-client';
import { BaseClass } from '../common/base.class';
import { ActiveItemService } from '../common/item.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { HashMap } from '../common/types';

export interface FrameMessage {
    type: 'backoffice';
    action: 'update' | 'metadata';
    name?: string;
    content: HashMap;
}

@Component({
    selector: 'app-extension-outlet',
    template: `<iframe
        *ngIf="url"
        #farme
        class="absolute inset-0 w-full h-full border-none"
        [src]="url | safe: 'resource'"
    ></iframe>`,
})
export class ExtensionOutletComponent extends BaseClass {
    public url = '';

    public readonly onMessage = (m) => {
        if (typeof m.data !== 'string') return;
        console.log('Message:', m);
        this.handleMessage(JSON.parse(m.data));
    };

    @ViewChild('frame') private _frame_el: ElementRef<HTMLIFrameElement>;

    constructor(
        private _route: ActivatedRoute,
        private _location: Location,
        private _service: ActiveItemService
    ) {
        super();
    }

    public ngOnInit(): void {
        this._route.queryParamMap.subscribe((params) => {
            if (params.has('embed')) {
                this.url = decodeURIComponent(params.get('embed'));
            } else {
                this._location.back();
            }
        });
        window.addEventListener('message', this.onMessage);
        this.subscription('message', () => window.removeEventListener('message', this.onMessage));
    }

    private async handleMessage(message: FrameMessage) {
        const item = this._service.active_item;
        if (message.type === 'backoffice' && item) {
            console.log('Update:', message);
            if (message.action === 'update') {
                // Handle update to item model
                const updated_item = await this._service.actions
                    .save({ ...item, ...message.content })
                    .toPromise()
                    .catch((e) =>
                        notifyError(`Error updating ${this._service.actions.singular || 'item'}.`)
                    );

                if (this._frame_el?.nativeElement) {
                    if (updated_item) {
                        notifySuccess(
                            `Successfully updated ${this._service.actions.singular || 'item'}`
                        );
                    }
                    this._frame_el.nativeElement.contentWindow.postMessage(
                        JSON.stringify({
                            type: 'backoffice',
                            status: updated_item ? 'success' : 'error',
                        }),
                        '*'
                    );
                }
            } else if (message.action === 'metadata' && message.name) {
                // Handle updating metadata
                const exists = await showMetadata(item.id, { name: message.name }).toPromise();
                console.log('Name:', message.name, exists);
                await updateMetadata(item.id, {
                    id: item.id,
                    name: message.name,
                    description: `Metadata from ${this.url}`,
                    details: message.content,
                }).toPromise();
                notifySuccess(
                    `Successfully updated ${this._service.actions.singular || 'item'} metadata`
                );
                if (this._frame_el?.nativeElement) {
                    this._frame_el.nativeElement.contentWindow.postMessage(
                        JSON.stringify({
                            type: 'backoffice',
                            status: 'success',
                        }),
                        '*'
                    );
                }
            }
        }
    }
}
