import { FieldTree } from '@angular/forms/signals';
import { MatChipInputEvent } from '@angular/material/chips';

export function addSignalChipItem<T = string>(
    items: T[],
    event: MatChipInputEvent,
    transform: (value: string) => T = (value) => value as T,
): T[] {
    const value = (event.value || '').trim();
    event.chipInput?.clear();
    if (!value) return items;
    const item = transform(value);
    return items.includes(item) ? items : [...items, item];
}

export function removeSignalChipItem<T = string>(items: T[], item: T): T[] {
    return items.filter((existing) => existing !== item);
}

export function getInvalidSignalFields<T extends object>(
    form: FieldTree<T>,
): string[] {
    const value = form().value() as object;
    return Object.keys(value).filter((key) => {
        const field = form[key as keyof typeof form];
        return typeof field === 'function' && field().invalid();
    });
}
