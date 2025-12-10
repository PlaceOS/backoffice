import { Pipe, PipeTransform, inject } from '@angular/core';

import { LocaleService } from '../common/locale.service';

@Pipe({
    name: 'translate',
})
export class TranslatePipe implements PipeTransform {
    private _locale = inject(LocaleService);

    public transform(
        value: string,
        args: Record<string, unknown> = {},
        plural?: number,
    ) {
        return this._locale.get(value, args, plural);
    }
}
