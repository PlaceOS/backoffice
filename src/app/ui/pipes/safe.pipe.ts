import { Pipe, PipeTransform, inject } from '@angular/core';
import {
    DomSanitizer,
    SafeResourceUrl,
    SafeUrl,
} from '@angular/platform-browser';

@Pipe({
    name: 'safe',
})
export class SafePipe implements PipeTransform {
    private sanitizer = inject(DomSanitizer);

    /**
     * Sanitizes the string allowing it to be injected into a template
     * @param value String to sanitize
     * @param type Type of value to trust. `resource` or `url`
     */
    public transform(
        value: string,
        type: 'resource' | 'url',
    ): SafeResourceUrl | SafeUrl {
        return type === 'resource'
            ? this.sanitizer.bypassSecurityTrustResourceUrl(value)
            : this.sanitizer.bypassSecurityTrustUrl(value);
    }
}
