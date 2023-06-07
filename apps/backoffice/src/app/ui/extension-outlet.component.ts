import { Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { onlineState, showMetadata, updateMetadata } from '@placeos/ts-client';
import { first } from 'rxjs/operators';
import { AsyncHandler } from '../common/base.class';
import { ActiveItemService } from '../common/item.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { HashMap } from '../common/types';

export interface FrameMessage {
    type: 'backoffice';
    action: 'update' | 'load' | 'metadata';
    name?: string;
    parent?: boolean;
    content: HashMap;
}

@Component({
    selector: 'app-extension-outlet',
    template: `<iframe
        *ngIf="url && app_loaded"
        #frame
        class="absolute inset-0 w-full h-full border-none"
        [src]="url | safe: 'resource'"
    ></iframe>`,
})
export class ExtensionOutletComponent extends AsyncHandler {
    public url = '';
    public app_loaded = false;

    public readonly onMessage = (m) => {
        if (typeof m.data !== 'string') return;
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
        onlineState()
            .pipe(first((_) => _))
            .subscribe(() =>
                this.timeout('init', () => (this.app_loaded = true))
            );
        this._route.queryParamMap.subscribe((params) => {
            if (params.has('embed')) {
                this.url = params.get('embed');
            } else {
                this._location.back();
            }
        });
        window.addEventListener('message', this.onMessage);
        this.subscription('message', () =>
            window.removeEventListener('message', this.onMessage)
        );
    }

    private async handleMessage(message: FrameMessage) {
        if (!this._frame_el?.nativeElement) {
            return this.timeout('not_ready', () => this.handleMessage(message));
        }
        this.timeout('on_message', () => {
            const item = this._service.active_item;
            if (message.type === 'backoffice' && item) {
                if (message.action === 'update') {
                    // Handle update to item model
                    this.updateItem(item, message);
                } else if (message.action === 'metadata' && message.name) {
                    // Handle updating metadata
                    this.updateMetadata(item, message);
                } else if (message.action === 'load' && message.name) {
                    // Handle updating metadata
                    this.loadMetadata(item, message, message.parent);
                }
            }
        });
    }

    private async updateItem(item: any, message: FrameMessage) {
        const updated_item = await this._service.actions
            .save({ ...item, ...message.content })
            .toPromise()
            .catch((e) =>
                notifyError(
                    `Error updating ${
                        this._service.actions.singular || 'item'
                    }.`
                )
            );

        if (this._frame_el?.nativeElement) {
            if (updated_item) {
                notifySuccess(
                    `Successfully updated ${
                        this._service.actions.singular || 'item'
                    }`
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
    }

    private async updateMetadata(item: any, message: FrameMessage) {
        const exists = await showMetadata(item.id, message.name).toPromise();
        await updateMetadata(item.id, {
            id: item.id,
            name: message.name,
            description: `Metadata from ${this.url}`,
            details: message.content || {},
        }).toPromise();
        notifySuccess(
            `Successfully updated ${
                this._service.actions.singular || 'item'
            } metadata`
        );
        this._frame_el.nativeElement.contentWindow.postMessage(
            JSON.stringify({
                type: 'backoffice',
                status: 'success',
            }),
            '*'
        );
    }

    private async loadMetadata(
        item: any,
        message: FrameMessage,
        parent: boolean = false
    ) {
        const metadata = await showMetadata(
            parent ? item.parent_id : item.id,
            message.name
        ).toPromise();
        if (metadata) {
            this._frame_el.nativeElement.contentWindow.postMessage(
                JSON.stringify({
                    type: 'backoffice',
                    content: (metadata as any).details,
                }),
                '*'
            );
        }
    }
}
