import { FieldTree } from '@angular/forms/signals';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

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

/**
 * Replace a chip item with its edited value, keeping its position.
 * An empty value removes the item. A value already in the list merges into it.
 */
export function editSignalChipItem(
    items: string[],
    item: string,
    event: MatChipEditedEvent,
): string[] {
    const value = (event.value || '').trim();
    if (!value) return removeSignalChipItem(items, item);
    if (value !== item && items.includes(value)) {
        return removeSignalChipItem(items, item);
    }
    return items.map((existing) => (existing === item ? value : existing));
}

/** Readable name for a form field key, e.g. `service_account` to "Service account" */
export function fieldLabel(key: string): string {
    const words = key.replace(/_/g, ' ').trim();
    return words.charAt(0).toUpperCase() + words.slice(1);
}

/** Readable names of the invalid top-level fields, for error messages */
export function getInvalidSignalFields<T extends object>(
    form: FieldTree<T>,
): string[] {
    const value = form().value() as object;
    return Object.keys(value)
        .filter((key) => {
            const field = form[key as keyof typeof form];
            return typeof field === 'function' && field().invalid();
        })
        .map(fieldLabel);
}
