import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatList'
})
export class FormatListPipe implements PipeTransform {
    public transform(value: string[]): any {
        return value.join('\n');
    }
}
