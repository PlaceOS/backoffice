import {
  HotkeysService
} from "./chunk-PNWJF2I5.js";
import {
  readError
} from "./chunk-T3O7QHHC.js";
import {
  submit
} from "./chunk-6MC6LRI6.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-XTVPLVG6.js";
import {
  i18n
} from "./chunk-DIAVKJYC.js";
import {
  ci
} from "./chunk-OTGYPXXQ.js";
import {
  DestroyRef,
  afterNextRender,
  inject
} from "./chunk-DTROA6L2.js";
import {
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/common/forms.ts
function addSignalChipItem(items, event, transform = (value) => value) {
  const value = (event.value || "").trim();
  event.chipInput?.clear();
  if (!value) return items;
  const item = transform(value);
  return items.includes(item) ? items : [...items, item];
}
function removeSignalChipItem(items, item) {
  return items.filter((existing) => existing !== item);
}
function editSignalChipItem(items, item, event) {
  const value = (event.value || "").trim();
  if (!value) return removeSignalChipItem(items, item);
  if (value !== item && items.includes(value)) {
    return removeSignalChipItem(items, item);
  }
  return items.map((existing) => existing === item ? value : existing);
}
function fieldLabel(key) {
  const words = key.replace(/_/g, " ").trim();
  return words.charAt(0).toUpperCase() + words.slice(1);
}
function getInvalidSignalFields(form) {
  const value = form().value();
  return Object.keys(value).filter((key) => {
    const field = form[key];
    return typeof field === "function" && field().invalid();
  }).map(fieldLabel);
}
function mergeFormItem(item, form_value, empty = [void 0]) {
  const merged = __spreadValues(__spreadValues({}, item.toJSON ? item.toJSON() : item), form_value);
  return item.id ? ci(merged, empty) : merged;
}
async function submitFormDialog(form, dialog, prefix, save, after) {
  await submit(form, async () => {
    dialog.loading.set(i18n(`${prefix}SAVING`));
    try {
      const item = await save();
      if (item === void 0) return dialog.loading.set(null);
      dialog.event.emit({ reason: "done", metadata: { item } });
      notifySuccess(i18n(`${prefix}SAVE_SUCCESS`));
      await after?.(item);
      dialog.close();
    } catch (err) {
      dialog.loading.set(null);
      notifyError(
        i18n(`${prefix}SAVE_ERROR`, { error: await readError(err) })
      );
    }
  });
  if (form().invalid()) {
    notifyError(
      i18n("COMMON.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(form).join(", ")
      })
    );
  }
}
function onSaveHotkey(fn) {
  const hotkeys = inject(HotkeysService);
  const destroy_ref = inject(DestroyRef);
  afterNextRender(() => {
    const sub = hotkeys.listen(["KeyS"], fn);
    destroy_ref.onDestroy(() => sub?.unsubscribe());
  });
}

export {
  addSignalChipItem,
  removeSignalChipItem,
  editSignalChipItem,
  getInvalidSignalFields,
  mergeFormItem,
  submitFormDialog,
  onSaveHotkey
};
//# debugId=9e14324c-b172-52cc-9534-9e23b775fa60
//# sourceMappingURL=chunk-DEUMTF6I.js.map
