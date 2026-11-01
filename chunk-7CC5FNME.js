import {
  DestroyRef,
  inject,
  signal
} from "./chunk-HGOGRFKW.js";

// src/app/common/signals.ts
function disposeSubscription(subscription) {
  if (typeof subscription === "function") {
    subscription();
  } else {
    subscription.unsubscribe();
  }
}
function signalFromClient(source, initialValue = source.value) {
  const destroyRef = inject(DestroyRef);
  const state = signal(
    initialValue,
    ...ngDevMode ? [{ debugName: "state" }] : (
      /* istanbul ignore next */
      []
    )
  );
  const unsubscribe = source.subscribe((value) => state.set(value), {
    emitCurrent: true
  });
  destroyRef.onDestroy(unsubscribe);
  return state.asReadonly();
}
function waitForEvent(source, predicate = () => true) {
  return new Promise((resolve) => {
    let subscription = null;
    let should_dispose = false;
    subscription = source.subscribe((value) => {
      if (!predicate(value))
        return;
      if (subscription) {
        disposeSubscription(subscription);
      } else {
        should_dispose = true;
      }
      resolve(value);
    });
    if (should_dispose && subscription)
      disposeSubscription(subscription);
  });
}
function waitForSignalValue(source, predicate = () => true, delay = 50, max_wait = 60 * 1e3) {
  return new Promise((resolve, reject) => {
    const started = Date.now();
    const check = () => {
      const value = source();
      if (predicate(value))
        return resolve(value);
      if (Date.now() - started >= max_wait) {
        return reject(new Error("Timed out waiting for signal value"));
      }
      setTimeout(check, delay);
    };
    check();
  });
}
function waitForClientSignalValue(source, predicate = () => true) {
  return waitForEvent({
    subscribe: (next) => source.subscribe(next, { emitCurrent: true })
  }, predicate);
}
function waitForDialog(ref, reason) {
  return Promise.race([
    waitForEvent(ref.componentInstance.event, (e) => e.reason === reason),
    waitForEvent(ref.afterClosed())
  ]);
}

export {
  signalFromClient,
  waitForEvent,
  waitForSignalValue,
  waitForClientSignalValue,
  waitForDialog
};
//# debugId=bdbff2a6-cd65-5494-b258-caf47e1c35f7
//# sourceMappingURL=chunk-7CC5FNME.js.map
