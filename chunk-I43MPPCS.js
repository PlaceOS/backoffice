import {
  signal
} from "./chunk-6G3VFYSX.js";

// src/app/common/notifications.ts
var MAX_TOASTS = 3;
var TOAST_DURATION_MS = 5e3;
var next_id = 0;
var _toasts = signal(
  [],
  ...ngDevMode ? [{ debugName: "_toasts" }] : (
    /* istanbul ignore next */
    []
  )
);
var toasts = _toasts.asReadonly();
function dismissToast(id) {
  _toasts.update((list) => list.filter((toast) => toast.id !== id));
}
function notify(type, message, action = "OK", on_action) {
  const id = next_id++;
  const toast = {
    id,
    type,
    message,
    action: action || "",
    on_action: on_action || (() => dismissToast(id))
  };
  _toasts.update((list) => [...list, toast].slice(-MAX_TOASTS));
  if (type !== "error") {
    setTimeout(() => dismissToast(id), TOAST_DURATION_MS);
  }
}
function notifySuccess(msg, action, on_action) {
  console.debug(msg);
  notify("success", msg, action, on_action);
}
function notifyError(msg, action, on_action) {
  console.error(msg);
  notify("error", msg, action, on_action);
}
function notifyWarn(msg, action, on_action) {
  console.warn(msg);
  notify("warn", msg, action, on_action);
}
function notifyInfo(msg, action, on_action) {
  console.info(msg);
  notify("info", msg, action, on_action);
}

export {
  toasts,
  dismissToast,
  notifySuccess,
  notifyError,
  notifyWarn,
  notifyInfo
};
//# debugId=132ef50d-a0f8-5887-b032-323d872706c6
//# sourceMappingURL=chunk-I43MPPCS.js.map
