import {
    afterNextRender,
    DestroyRef,
    inject,
    WritableSignal,
} from '@angular/core';
import { FieldTree, submit } from '@angular/forms/signals';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { cleanObject } from '@placeos/ts-client';
import { readError } from './errors';
import { HotkeysService } from './hotkeys.service';
import { i18n } from './locale.service';
import { notifyError, notifySuccess } from './notifications';
import { DialogEvent, Identity } from './types';

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

/**
 * Form values merged over the item to save. Updates also drop the values in
 * `empty`, so unset fields keep their saved value.
 */
export function mergeFormItem<T extends object>(
    item: { id?: string; toJSON?: () => object },
    form_value: T,
    empty: unknown[] = [undefined],
): Identity & T {
    const merged = { ...(item.toJSON ? item.toJSON() : item), ...form_value };
    return (item.id ? cleanObject(merged, empty) : merged) as Identity & T;
}

/** Parts of a form dialog that `submitFormDialog` drives */
export interface FormDialog {
    /** Saving label. Null when idle. */
    loading: WritableSignal<string | null>;
    event: { emit: (event: DialogEvent) => void };
    close: () => void;
}

/**
 * Validate a dialog form and save it. Shows the saving label while it saves.
 * On success emits `done` with the saved item, notifies and closes the dialog.
 * @param prefix Locale key prefix of `SAVING`, `SAVE_SUCCESS` and
 * `SAVE_ERROR`, e.g. `ZONES.` or `ADMIN.BROKERS_`
 * @param save Builds the payload and saves it. Return `undefined` to stop
 * without saving.
 * @param after Runs after a save, before the dialog closes
 */
export async function submitFormDialog<T extends object, R>(
    form: FieldTree<T>,
    dialog: FormDialog,
    prefix: string,
    save: () => Promise<R | undefined>,
    after?: (item: R) => Promise<unknown>,
) {
    await submit(form, async () => {
        dialog.loading.set(i18n(`${prefix}SAVING`));
        try {
            const item = await save();
            if (item === undefined) return dialog.loading.set(null);
            dialog.event.emit({ reason: 'done', metadata: { item } });
            notifySuccess(i18n(`${prefix}SAVE_SUCCESS`));
            await after?.(item);
            dialog.close();
        } catch (err) {
            dialog.loading.set(null);
            notifyError(
                i18n(`${prefix}SAVE_ERROR`, { error: await readError(err) }),
            );
        }
    });
    if (form().invalid()) {
        notifyError(
            i18n('COMMON.INVALID_FIELDS', {
                field_list: getInvalidSignalFields(form).join(', '),
            }),
        );
    }
}

/**
 * Run `fn` when the user presses the save hotkey, until the calling component
 * is destroyed. Call from a constructor or field. It starts listening after
 * the first render, so a dialog is open by then and owns the hotkey.
 */
export function onSaveHotkey(fn: () => void) {
    const hotkeys = inject(HotkeysService);
    const destroy_ref = inject(DestroyRef);
    afterNextRender(() => {
        const sub = hotkeys.listen(['KeyS'], fn);
        destroy_ref.onDestroy(() => sub?.unsubscribe());
    });
}
