import { UntypedFormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

/**
 * Add a tag to the list of tags for the item
 * @param event Input event
 */
export function addChipItem(control: UntypedFormControl, event: MatChipInputEvent): void {
    if (!control) { return; }
    const input = event.input;
    const value = event.value;
    const item_list = control.value;
    if ((value || '').trim()) {
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
export function removeChipItem(control: UntypedFormControl, item: string): void {
    if (!control) { return; }
    const item_list = control.value;
    const index = item_list.indexOf(item);

    if (index >= 0) {
        item_list.splice(index, 1);
        control.setValue(item_list);
    }
}
