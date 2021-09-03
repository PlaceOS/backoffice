import { Pipe, PipeTransform } from '@angular/core';
import { PlaceSettings } from '@placeos/ts-client';
import { format } from 'date-fns';

const TYPES = ['OPEN', 'SUPPORT', 'ADMIN', 'ENCRYPTED'];

@Pipe({
    name: 'formatSettings',
})
export class SettingsFormatPipe implements PipeTransform {
    public transform(value: PlaceSettings): string {
        return `${TYPES[value.encryption_level]} (${format(
            value.updated_at * 1000,
            'dd-MMM-yyyy h:mma'
        )})`;
    }
}
