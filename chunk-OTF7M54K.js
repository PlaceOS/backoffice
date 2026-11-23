// src/app/common/signals.ts
function disposeSubscription(subscription) {
  if (typeof subscription === "function") {
    subscription();
  } else {
    subscription.unsubscribe();
  }
}
function waitForEvent(source, predicate = () => true) {
  return new Promise((resolve) => {
    let subscription = null;
    let should_dispose = false;
    subscription = source.subscribe((value) => {
      if (!predicate(value)) return;
      if (subscription) {
        disposeSubscription(subscription);
      } else {
        should_dispose = true;
      }
      resolve(value);
    });
    if (should_dispose && subscription) disposeSubscription(subscription);
  });
}
function waitForSignalValue(source, predicate = () => true, delay = 50, max_wait = 60 * 1e3) {
  return new Promise((resolve, reject) => {
    const started = Date.now();
    const check = () => {
      const value = source();
      if (predicate(value)) return resolve(value);
      if (Date.now() - started >= max_wait) {
        return reject(new Error("Timed out waiting for signal value"));
      }
      setTimeout(check, delay);
    };
    check();
  });
}
function waitForDialog(ref, reason) {
  return Promise.race([
    waitForEvent(ref.componentInstance.event, (e) => e.reason === reason),
    waitForEvent(ref.closed)
  ]);
}

export {
  waitForEvent,
  waitForSignalValue,
  waitForDialog
};
//# debugId=7062812f-f4cc-5ed1-900e-4220b7479419
//# sourceMappingURL=chunk-OTF7M54K.js.map
