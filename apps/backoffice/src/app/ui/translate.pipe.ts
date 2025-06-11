import { Pipe, PipeTransform } from '@angular/core';

import { LocaleService } from '../common/locale.service';

@Pipe({
    name: 'translate',
})
export class TranslatePipe implements PipeTransform {
    constructor(private _locale: LocaleService) {}

    public transform(
        value: string,
        args: Record<string, any> = {},
        plural?: number,
    ) {
        return this._locale.get(value, args, plural);
    }
}
