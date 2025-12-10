import { Location } from '@angular/common';
import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    apiKey,
    onlineState,
    showMetadata,
    token,
    updateMetadata,
} from '@placeos/ts-client';
import { first } from 'rxjs/operators';
import { AsyncHandler } from '../common/async-handler.class';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { HashMap } from '../common/types';
import { SafePipe } from './pipes/safe.pipe';

const RESOURCE_STORE = new Map<string, string>();

export interface FrameMessage {
    id: string;
    type: 'backoffice';
    action: 'update' | 'load' | 'metadata' | 'resource';
    name?: string;
    parent?: boolean;
    content: HashMap;
}

@Component({
    selector: 'app-extension-outlet',
    template: `
        @if (url && app_loaded) {
            <iframe
                #frame
                class="absolute inset-0 h-full w-full border-none"
                [src]="url | safe: 'resource'"
            ></iframe>
        }
    `,
    imports: [SafePipe],
})
export class ExtensionOutletComponent extends AsyncHandler {
    private _route = inject(ActivatedRoute);
    private _location = inject(Location);
    private _service = inject(ActiveItemService);

    public url = '';
    public app_loaded = false;

    public readonly onMessage = (m) => {
        if (typeof m.data !== 'string') return;
        this.handleMessage(JSON.parse(m.data));
    };

    private readonly _frame_el =
        viewChild<ElementRef<HTMLIFrameElement>>('frame');

    public ngOnInit(): void {
        onlineState()
            .pipe(first((_) => _))
            .subscribe(() =>
                this.timeout('init', () => (this.app_loaded = true)),
            );
        this._route.queryParamMap.subscribe((params) => {
            if (params.has('embed')) this.url = params.get('embed');
            else this._location.back();
        });
        window.addEventListener('message', this.onMessage);
        this.subscription('message', () =>
            window.removeEventListener('message', this.onMessage),
        );
    }

    private async handleMessage(message: FrameMessage) {
        if (!this._frame_el()?.nativeElement) {
            return this.timeout('not_ready', () => this.handleMessage(message));
        }
        this.timeout(`on_message:${message.action}`, async () => {
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
                } else if (message.action === 'resource' && message.name) {
                    // Handle updating metadata
                    const url = await this.loadResource(item, message);
                    this._postMessage({
                        id: message.id,
                        type: 'backoffice',
                        status: 'success',
                        content: url,
                    } as any);
                }
            }
        });
    }

    private async updateItem(item: any, message: FrameMessage) {
        const updated_item = await this._service.actions
            .save({ ...item, ...message.content })
            .toPromise()
            .catch((e) => notifyError(i18n('COMMON.ITEM_ERROR')));

        if (this._frame_el()?.nativeElement) {
            if (updated_item) {
                notifySuccess(i18n('COMMON.ITEM_SAVE'));
            }
            this._postMessage({
                id: message.id,
                type: 'backoffice',
                status: updated_item ? 'success' : 'error',
            } as any);
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
        notifySuccess(i18n('COMMON.METADTA_SAVE'));
        this._postMessage({
            id: message.id,
            type: 'backoffice',
            status: 'success',
        } as any);
    }

    private async loadMetadata(
        item: any,
        message: FrameMessage,
        parent = false,
    ) {
        const metadata = await showMetadata(
            parent ? item.parent_id : item.id,
            message.name,
        ).toPromise();
        if (metadata) {
            this._postMessage({
                id: message.id,
                type: 'backoffice',
                content: (metadata as any).details,
                status: 'success',
            } as any);
        }
    }

    private async loadResource(item: any, message: FrameMessage) {
        const src = message.name;
        // If not an API call, just load the image
        if (!src.includes('/api/engine/v2/uploads')) return src;
        const as_string = JSON.stringify(item);
        // Prevent resolving resources for not owned by the parent item
        if (!as_string.includes(src)) return src;
        // If image has already been loaded, just use the cached version
        if (RESOURCE_STORE.has(src)) return RESOURCE_STORE.get(src);

        const tkn = token();
        document.cookie = `${
            tkn === 'x-api-key'
                ? 'api-key=' + encodeURIComponent(apiKey())
                : 'bearer_token=' + encodeURIComponent(tkn)
        };max-age=60;path=/api/;samesite=strict;${
            location.protocol === 'https:' ? 'secure;' : ''
        }`;
        const response = await fetch(src);
        const blob = await response.blob();

        const url = await new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result as any);
            reader.readAsDataURL(blob);
        });

        RESOURCE_STORE.set(src, url);
        return url;
    }

    private _postMessage(message: FrameMessage) {
        this._frame_el()?.nativeElement?.contentWindow?.postMessage(
            JSON.stringify(message),
            '*',
        );
    }
}
