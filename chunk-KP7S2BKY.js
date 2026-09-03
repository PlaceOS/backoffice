import {
  DestroyRef,
  Injector,
  inject,
  signal
} from "./chunk-2GWPJS4J.js";

// src/app/common/signals.ts
function disposeSubscription(subscription) {
  if (typeof subscription === "function") {
    subscription();
  } else {
    subscription.unsubscribe();
  }
}
function signalFromSubscribable(source, initialValue, injector = inject(Injector)) {
  const destroyRef = injector.get(DestroyRef);
  const state = signal(
    initialValue,
    ...ngDevMode ? [{ debugName: "state" }] : (
      /* istanbul ignore next */
      []
    )
  );
  const subscription = source.subscribe((value) => state.set(value));
  destroyRef.onDestroy(() => disposeSubscription(subscription));
  return state.asReadonly();
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
function toSignal(source, options = {}) {
  if (typeof source === "function")
    return source;
  return signalFromSubscribable(source, options.initialValue, options.injector);
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
function waitForSignalValue(source, predicate = () => true, delay = 50) {
  return new Promise((resolve) => {
    const check = () => {
      const value = source();
      if (predicate(value)) {
        resolve(value);
      } else {
        setTimeout(check, delay);
      }
    };
    check();
  });
}
function waitForClientSignalValue(source, predicate = () => true, delay = 50) {
  return new Promise((resolve) => {
    const check = () => {
      const value = source.value;
      if (predicate(value)) {
        resolve(value);
      } else {
        setTimeout(check, delay);
      }
    };
    check();
  });
}

export {
  signalFromSubscribable,
  signalFromClient,
  toSignal,
  waitForEvent,
  waitForSignalValue,
  waitForClientSignalValue
};
//# sourceMappingURL=chunk-KP7S2BKY.js.map
