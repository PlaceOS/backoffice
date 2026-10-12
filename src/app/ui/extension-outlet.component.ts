import { Location } from '@angular/common';
import {
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    apiKey,
    onlineState,
    PlaceResource,
    showMetadata,
    token,
    updateMetadata,
} from '@placeos/ts-client';
import { allowedEmbedUrl, extensionsForItem } from '../common/api';
import { AsyncHandler } from '../common/async-handler.class';
import { describeError } from '../common/errors';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { signalFromClient, toSignal } from '../common/signals';
import { HashMap } from '../common/types';
import { SafePipe } from './pipes/safe.pipe';

const RESOURCE_STORE = new Map<string, string>();

/** Request sent by the extension frame */
export interface FrameMessage<T = unknown> {
    id: string;
    type: 'backoffice';
    action: 'update' | 'load' | 'metadata' | 'resource' | 'result';
    name?: string;
    parent?: boolean;
    status?: 'success' | 'error';
    content?: string | HashMap<T> | T[];
}

/** Value of the message content if it is a plain object */
const contentFields = (content: unknown): HashMap<unknown> =>
    content && typeof content === 'object' && !Array.isArray(content)
        ? (content as HashMap<unknown>)
        : {};

@Component({
    selector: 'app-extension-outlet',
    template: `
        @if (url() && app_loaded()) {
            <iframe
                #frame
                class="absolute inset-0 h-full w-full border-none"
                [src]="url() | safe: 'resource'"
            ></iframe>
        }
    `,
    imports: [SafePipe],
})
export class ExtensionOutletComponent extends AsyncHandler {
    private _route = inject(ActivatedRoute);
    private _location = inject(Location);
    private _service = inject(ActiveItemService);

    private readonly _online = signalFromClient(onlineState(), false);
    private readonly _query_params = toSignal(this._route.queryParamMap, {
        initialValue: undefined,
    });
    private readonly _embed = computed(() => {
        const params = this._query_params();
        return params === undefined
            ? undefined
            : params.has('embed')
              ? params.get('embed')
              : null;
    });

    /** Last embed param that passed the extension URL check */
    private _verified_embed = '';

    public readonly url = signal('');
    public readonly app_loaded = signal(false);
    private readonly _frame_origin = computed(() =>
        this.url() ? new URL(this.url()).origin : '',
    );

    /** Handle messages sent by the embedded extension frame only */
    public readonly onMessage = (event: MessageEvent) => {
        const frame_window = this._frame_el()?.nativeElement?.contentWindow;
        if (!frame_window || event.source !== frame_window) return;
        if (event.origin !== this._frame_origin()) return;
        if (typeof event.data !== 'string') return;
        let message: FrameMessage;
        try {
            message = JSON.parse(event.data);
        } catch {
            return;
        }
        this.handleMessage(message);
    };

    private readonly _frame_el =
        viewChild<ElementRef<HTMLIFrameElement>>('frame');

    constructor() {
        super();
        effect(() => {
            if (this._online()) {
                this.timeout('init', () => this.app_loaded.set(true));
            }
        });
        effect(() => {
            const embed = this._embed();
            if (embed === undefined) {
                return;
            }
            if (!embed) {
                this._location.back();
                return;
            }
            const item = this._service.item();
            if (!this._online() || !item || embed === this._verified_embed) {
                return;
            }
            // Only load URLs from the extensions configured for this item
            const url = allowedEmbedUrl(
                embed,
                extensionsForItem(item, this._service.type).map(
                    (ext) => ext.query.embed,
                ),
            );
            this._verified_embed = url ? embed : '';
            this.url.set(url || '');
        });
        effect((onCleanup) => {
            window.addEventListener('message', this.onMessage);
            onCleanup(() =>
                window.removeEventListener('message', this.onMessage),
            );
        });
    }

    /** Run the requested action and send the result back to the frame */
    private async handleMessage(message: FrameMessage) {
        const item = this._service.active_item;
        if (message?.type !== 'backoffice' || !item) return;
        const result = this._runAction(item, message);
        if (!result) return;
        try {
            this._reply(message.id, 'success', (await result) || undefined);
        } catch {
            this._reply(message.id, 'error');
        }
    }

    /** Start the action of a request. Returns `null` for unknown actions */
    private _runAction(
        item: PlaceResource,
        message: FrameMessage,
    ): Promise<FrameMessage['content'] | void> | null {
        switch (message.action) {
            case 'update':
                return this.updateItem(item, message);
            case 'metadata':
                return this.updateMetadata(item, message);
            case 'load':
                return this.loadMetadata(item, message);
            case 'resource':
                return this.loadResource(item, message);
            default:
                return null;
        }
    }

    /** Merge the message content into the active item and save it */
    private async updateItem(item: PlaceResource, message: FrameMessage) {
        const updated_item = await this._service.actions
            .save({ ...item, ...contentFields(message.content) })
            .catch((error) => {
                notifyError(
                    i18n('COMMON.ITEM_ERROR', { error: describeError(error) }),
                );
                throw error;
            });
        // Later updates must merge into the saved item
        this._service.replaceItem(updated_item as PlaceResource);
        notifySuccess(i18n('COMMON.ITEM_SAVE'));
    }

    /** Save the message content as metadata on the active item */
    private async updateMetadata(item: PlaceResource, message: FrameMessage) {
        if (!item.id || !message.name)
            throw new Error('Metadata not available');
        await updateMetadata(item.id, {
            id: item.id,
            name: message.name,
            description: `Metadata from ${this.url()}`,
            details:
                message.content && typeof message.content === 'object'
                    ? message.content
                    : {},
        });
        notifySuccess(i18n('COMMON.METADATA_SAVE'));
    }

    /** Load metadata from the active item or from its parent */
    private async loadMetadata(
        item: PlaceResource & { parent_id?: string },
        message: FrameMessage,
    ) {
        const id = message.parent ? item.parent_id : item.id;
        if (!message.name || !id) throw new Error('Metadata not available');
        const metadata = await showMetadata(id, message.name);
        return metadata.details as FrameMessage['content'];
    }

    /** Resolve a URL that the frame can show without credentials */
    private async loadResource(item: PlaceResource, message: FrameMessage) {
        const src = message.name;
        if (!src) throw new Error('Resource URL is required');
        // If not an API call, just load the image
        if (!src.includes('/api/engine/v2/uploads')) return src;
        // Prevent resolving resources not owned by the parent item
        if (!JSON.stringify(item).includes(src)) return src;
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
        if (!response.ok) throw new Error(`Failed to load ${src}`);
        const blob = await response.blob();

        const url = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(blob);
        });

        RESOURCE_STORE.set(src, url);
        return url;
    }

    /** Send the result of a request to the frame */
    private _reply(
        id: string,
        status: FrameMessage['status'],
        content?: FrameMessage['content'],
    ) {
        const origin = this._frame_origin();
        if (!origin) return;
        const reply: FrameMessage = {
            id,
            type: 'backoffice',
            action: 'result',
            status,
            content,
        };
        this._frame_el()?.nativeElement?.contentWindow?.postMessage(
            JSON.stringify(reply),
            origin,
        );
    }
}
