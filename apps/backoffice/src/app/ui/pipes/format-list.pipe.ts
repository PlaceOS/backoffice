import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatList',
    standalone: false
})
export class FormatListPipe implements PipeTransform {
    public transform(value: string[]): any {
        return value.join('\n');
    }
}
