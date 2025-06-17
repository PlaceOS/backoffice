import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'driverFormat',
    standalone: false,
})
export class DriverFormatPipe implements PipeTransform {
    public transform(format: string): string {
        if (typeof format !== 'string') return '';
        if ((format || '').indexOf('/') >= 0) {
            const parts = format.split('/');
            parts.splice(0, 1);
            return `<div class="flex items-center space-x-2">${parts
                .map((i) => `<div class="name-part">${i}</div>`)
                .join(
                    '<i class="material-symbols-outlined text-xl">keyboard_arrow_right</i>',
                )}</div>`;
        }
        return format || '';
    }
}
