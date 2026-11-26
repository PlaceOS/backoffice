import {
    Directive,
    ElementRef,
    OnChanges,
    OnDestroy,
    SimpleChanges,
    inject,
    input,
} from '@angular/core';
import { AsyncHandler } from '../common/async-handler.class';
import { authority, setAuthCookie } from '../common/placeos';

/** Tries to wait for the API authority before giving up (300ms apart) */
const MAX_AUTH_WAIT_ATTEMPTS = 100;

/**
 * Shows an upload on an `img` or `video` element: `<img auth [source]="url" />`.
 * Each element owns the blob URL of its upload. The directive frees it when
 * the source changes or the element is removed, so a closed preview does not
 * keep the file in memory. There is no shared cache, so freeing one element's
 * URL cannot break another element.
 */
@Directive({
    selector: 'img [auth],video [auth]',
})
export class AuthenticatedImageDirective
    extends AsyncHandler
    implements OnChanges, OnDestroy
{
    private _image_el = inject<ElementRef<HTMLImageElement>>(ElementRef);
    /** Stops the download of the current upload */
    private _abort?: AbortController;
    /** Blob URL that this element shows, or empty */
    private _object_url = '';

    public readonly source = input<string>(undefined);

    public ngOnChanges(changes: SimpleChanges) {
        if (!changes.source) return;
        this._release();
        if (this.source()) this._load();
    }

    public ngOnDestroy() {
        super.ngOnDestroy();
        this._release();
    }

    /** Stops the current download and frees the blob URL of the last one */
    private _release() {
        this._abort?.abort();
        this._abort = undefined;
        if (this._object_url) URL.revokeObjectURL(this._object_url);
        this._object_url = '';
    }

    private _load(attempt = 0) {
        this._loadImage(attempt).catch((e: unknown) => {
            // A newer source or the removal of the element stopped the load
            if (e instanceof DOMException && e.name === 'AbortError') return;
            console.warn('Failed to load image:', e);
        });
    }

    private async _loadImage(attempt: number) {
        if (!this._image_el || !authority()) {
            if (attempt >= MAX_AUTH_WAIT_ATTEMPTS) return;
            return this.timeout('load', () => this._load(attempt + 1), 300);
        }
        // If not an API call, just load the image
        const source = this.source();
        if (!source.includes('/api/engine/v2/uploads')) {
            this._image_el.nativeElement.src = source;
            return;
        }
        const abort = new AbortController();
        this._abort = abort;
        if (!(await setAuthCookie('/api/'))) {
            throw new Error('Not signed in');
        }
        const response = await fetch(source, { signal: abort.signal });
        // Do not show an error body, such as a 401, as the image
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const blob = await response.blob();
        // The source changed, or the element was removed, while this loaded
        if (abort.signal.aborted) return;
        this._object_url = URL.createObjectURL(blob);
        this._image_el.nativeElement.src = this._object_url;
    }
}
