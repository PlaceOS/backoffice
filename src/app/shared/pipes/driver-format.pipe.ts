import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'driverFormat'
})
export class DriverFormatPipe implements PipeTransform {
    public transform(format: string): string {
        if (typeof format !== 'string') return '';
        if ((format || '').indexOf('/') >= 0) {
            const parts = format.split('/');
            parts.splice(0, 1);
            return `<div class="formatted-driver-name">${parts
                .map(i => `<div class="name-part">${i}</div>`)
                .join(
                    '<div class="icon"><i class="material-icons">keyboard_arrow_right</i></div>'
                )}</div>`;
        }
        return format || '';
    }
}
