import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { FieldTree } from '@angular/forms/signals';

/**
 * Add a tag to the list of tags for the item
 * @param event Input event
 */
export function addChipItem<T = string>(
    control: FormControl<T[]>,
    event: MatChipInputEvent,
): void {
    if (!control) {
        return;
    }
    const input = event.input;
    const value = (event.value || '').trim() as T;
    const item_list = control.value;
    if (value) {
        item_list.push(value);
        control.setValue(item_list);
    }

    // Reset the input value
    if (input) {
        input.value = '';
    }
}

/**
 * Remove tag from the list
 * @param existing_tag Tag to remove
 */
export function removeChipItem<T = string>(
    control: FormControl<T[]>,
    item: T,
): void {
    if (!control) {
        return;
    }
    const item_list = control.value;
    const index = item_list.indexOf(item);

    if (index >= 0) {
        item_list.splice(index, 1);
        control.setValue(item_list);
    }
}

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
