import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatList',
})
export class FormatListPipe implements PipeTransform {
    public transform(value: string[]): string {
        return value.join('\n');
    }
}
