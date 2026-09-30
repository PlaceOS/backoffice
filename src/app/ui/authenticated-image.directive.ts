import {
    Directive,
    ElementRef,
    OnChanges,
    SimpleChanges,
    inject,
    input,
} from '@angular/core';
import { apiKey, authority, token } from '@placeos/ts-client';
import { AsyncHandler } from '../common/async-handler.class';

const IMAGE_STORE = new Map<string, string>();
/** Tries to wait for the API authority before giving up (300ms apart) */
const MAX_AUTH_WAIT_ATTEMPTS = 100;

@Directive({
    selector: 'img [auth],video [auth]',
})
export class AuthenticatedImageDirective
    extends AsyncHandler
    implements OnChanges
{
    private _image_el = inject<ElementRef<HTMLImageElement>>(ElementRef);

    public readonly source = input<string>(undefined);

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.source && this.source()) this._load();
    }

    private _load(attempt = 0) {
        this._loadImage(attempt).catch((e) =>
            console.warn('Failed to load image:', e),
        );
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
        // If image has already been loaded, just use the cached version
        if (IMAGE_STORE.has(source)) {
            this._image_el.nativeElement.src = IMAGE_STORE.get(source);
            return;
        }
        const tkn = token();
        document.cookie = `${
            tkn === 'x-api-key'
                ? 'api-key=' + encodeURIComponent(apiKey())
                : 'bearer_token=' + encodeURIComponent(tkn)
        };max-age=60;path=/api/;samesite=strict;${
            location.protocol === 'https:' ? 'secure;' : ''
        }`;
        const response = await fetch(source);
        // Do not cache an error body, such as a 401, as the image
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        IMAGE_STORE.set(source, url);
        // The source changed while this one loaded
        if (this.source() !== source) return;
        this._image_el.nativeElement.src = url;
    }
}
