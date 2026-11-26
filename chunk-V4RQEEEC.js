import {
  HotkeysService
} from "./chunk-NVIFDAFS.js";
import {
  readError
} from "./chunk-HS2B2TZM.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-V2X4XHND.js";
import {
  submit
} from "./chunk-SSVO7UC4.js";
import {
  i18n
} from "./chunk-2BK6GMG5.js";
import {
  cleanObject
} from "./chunk-Y2QSYZTA.js";
import {
  DestroyRef,
  afterNextRender,
  inject
} from "./chunk-6G3VFYSX.js";
import {
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/common/forms.ts
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
  const merged = __spreadValues(__spreadValues({}, item), form_value);
  return item.id ? cleanObject(merged, empty) : merged;
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
    const sub = hotkeys.listen(["Alt", "Shift", "KeyS"], fn);
    destroy_ref.onDestroy(() => sub?.unsubscribe());
  });
}

export {
  getInvalidSignalFields,
  mergeFormItem,
  submitFormDialog,
  onSaveHotkey
};
//# debugId=bd381934-e933-5a4e-b564-493bce1a538e
//# sourceMappingURL=chunk-V4RQEEEC.js.map
