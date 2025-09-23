import {
    Directive,
    ElementRef,
    SimpleChanges,
    inject,
    input,
} from '@angular/core';
import { apiKey, authority, token } from '@placeos/ts-client';
import { AsyncHandler } from '../common/async-handler.class';

const IMAGE_STORE = new Map<string, string>();

@Directive({
    selector: 'img [auth],video [auth]',
})
export class AuthenticatedImageDirective extends AsyncHandler {
    private _image_el = inject<ElementRef<HTMLImageElement>>(ElementRef);

    public readonly source = input<string>(undefined);

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.source && this.source()) this._loadImage();
    }

    private async _loadImage() {
        if (!this._image_el || !authority()) {
            return this.timeout('load', () => this._loadImage(), 300);
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
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        IMAGE_STORE.set(source, url);
        this._image_el.nativeElement.src = url;
    }
}
