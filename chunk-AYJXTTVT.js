// src/app/common/notifications.ts
var _service = null;
function setNotifyOutlet(snackbar) {
  _service = snackbar;
  if (snackbar instanceof Promise) {
    snackbar.then((service) => {
      if (_service === snackbar)
        _service = service;
    });
  }
}
function notify(type, message, action = "OK", on_action, _icon = {
  type: "icon",
  content: "info"
}) {
  if (!_service) {
    throw new Error("Snackbar service hasn't been initialised");
  }
  if (_service instanceof Promise) {
    _service.then((service) => openNotification(service, type, message, action, on_action));
    return;
  }
  openNotification(_service, type, message, action, on_action);
}
function openNotification(service, type, message, action, on_action) {
  const snackbar_ref = service.open(message, action, {
    panelClass: [type],
    duration: 5e3
  });
  if (action) {
    on_action = on_action || (() => snackbar_ref.dismiss());
    snackbar_ref.onAction().subscribe(() => on_action());
  }
}
function notifySuccess(msg, action, on_action) {
  const icon = {
    type: "icon",
    content: "done"
  };
  console.debug(msg);
  notify("success", msg, action, on_action, icon);
}
function notifyError(msg, action, on_action) {
  const icon = {
    type: "icon",
    content: "error"
  };
  console.error(msg);
  notify("error", msg, action, on_action, icon);
}
function notifyWarn(msg, action, on_action) {
  const icon = {
    type: "icon",
    content: "warning"
  };
  console.warn(msg);
  notify("warn", msg, action, on_action, icon);
}
function notifyInfo(msg, action, on_action) {
  console.info(msg);
  notify("info", msg, action, on_action);
}

export {
  setNotifyOutlet,
  notifySuccess,
  notifyError,
  notifyWarn,
  notifyInfo
};
//# sourceMappingURL=chunk-AYJXTTVT.js.map
