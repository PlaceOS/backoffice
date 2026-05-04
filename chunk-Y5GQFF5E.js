import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// node_modules/rxjs/dist/esm/internal/util/isFunction.js
function isFunction(value) {
  return typeof value === "function";
}

// node_modules/rxjs/dist/esm/internal/util/isScheduler.js
function isScheduler(value) {
  return value && isFunction(value.schedule);
}

// node_modules/rxjs/dist/esm/internal/util/args.js
function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return isFunction(last(args)) ? args.pop() : void 0;
}
function popScheduler(args) {
  return isScheduler(last(args)) ? args.pop() : void 0;
}
function popNumber(args, defaultValue) {
  return typeof last(args) === "number" ? args.pop() : defaultValue;
}

// node_modules/tslib/tslib.es6.mjs
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __await(v2) {
  return this instanceof __await ? (this.v = v2, this) : new __await(v2);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g2 = generator.apply(thisArg, _arguments || []), i, q2 = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v2) {
      return Promise.resolve(v2).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g2[n]) {
      i[n] = function(v2) {
        return new Promise(function(a, b) {
          q2.push([n, v2, a, b]) > 1 || resume(n, v2);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  function resume(n, v2) {
    try {
      step(g2[n](v2));
    } catch (e) {
      settle(q2[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q2[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v2) {
    if (f(v2), q2.shift(), q2.length) resume(q2[0][0], q2[0][1]);
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v2) {
      return new Promise(function(resolve, reject) {
        v2 = o[n](v2), settle(resolve, reject, v2.done, v2.value);
      });
    };
  }
  function settle(resolve, reject, d, v2) {
    Promise.resolve(v2).then(function(v3) {
      resolve({ value: v3, done: d });
    }, reject);
  }
}

// node_modules/rxjs/dist/esm/internal/util/isArrayLike.js
var isArrayLike = ((x) => x && typeof x.length === "number" && typeof x !== "function");

// node_modules/rxjs/dist/esm/internal/util/isPromise.js
function isPromise(value) {
  return isFunction(value === null || value === void 0 ? void 0 : value.then);
}

// node_modules/rxjs/dist/esm/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
  const _super = (instance) => {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  const ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

// node_modules/rxjs/dist/esm/internal/util/UnsubscriptionError.js
var UnsubscriptionError = createErrorClass((_super) => function UnsubscriptionErrorImpl(errors) {
  _super(this);
  this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join("\n  ")}` : "";
  this.name = "UnsubscriptionError";
  this.errors = errors;
});

// node_modules/rxjs/dist/esm/internal/util/arrRemove.js
function arrRemove(arr, item) {
  if (arr) {
    const index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

// node_modules/rxjs/dist/esm/internal/Subscription.js
var Subscription = class _Subscription {
  constructor(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  unsubscribe() {
    let errors;
    if (!this.closed) {
      this.closed = true;
      const { _parentage } = this;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          for (const parent of _parentage) {
            parent.remove(this);
          }
        } else {
          _parentage.remove(this);
        }
      }
      const { initialTeardown: initialFinalizer } = this;
      if (isFunction(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof UnsubscriptionError ? e.errors : [e];
        }
      }
      const { _finalizers } = this;
      if (_finalizers) {
        this._finalizers = null;
        for (const finalizer of _finalizers) {
          try {
            execFinalizer(finalizer);
          } catch (err) {
            errors = errors !== null && errors !== void 0 ? errors : [];
            if (err instanceof UnsubscriptionError) {
              errors = [...errors, ...err.errors];
            } else {
              errors.push(err);
            }
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    }
  }
  add(teardown) {
    var _a2;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof _Subscription) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a2 = this._finalizers) !== null && _a2 !== void 0 ? _a2 : []).push(teardown);
      }
    }
  }
  _hasParent(parent) {
    const { _parentage } = this;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  }
  _addParent(parent) {
    const { _parentage } = this;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  }
  _removeParent(parent) {
    const { _parentage } = this;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  }
  remove(teardown) {
    const { _finalizers } = this;
    _finalizers && arrRemove(_finalizers, teardown);
    if (teardown instanceof _Subscription) {
      teardown._removeParent(this);
    }
  }
};
Subscription.EMPTY = (() => {
  const empty = new Subscription();
  empty.closed = true;
  return empty;
})();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if (isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

// node_modules/rxjs/dist/esm/internal/config.js
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

// node_modules/rxjs/dist/esm/internal/scheduler/timeoutProvider.js
var timeoutProvider = {
  setTimeout(handler, timeout, ...args) {
    const { delegate } = timeoutProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout(handler, timeout, ...args);
    }
    return setTimeout(handler, timeout, ...args);
  },
  clearTimeout(handle) {
    const { delegate } = timeoutProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm/internal/util/reportUnhandledError.js
function reportUnhandledError(err) {
  timeoutProvider.setTimeout(() => {
    const { onUnhandledError } = config;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

// node_modules/rxjs/dist/esm/internal/util/noop.js
function noop() {
}

// node_modules/rxjs/dist/esm/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = (() => createNotification("C", void 0, void 0))();
function errorNotification(error) {
  return createNotification("E", void 0, error);
}
function nextNotification(value) {
  return createNotification("N", value, void 0);
}
function createNotification(kind, value, error) {
  return {
    kind,
    value,
    error
  };
}

// node_modules/rxjs/dist/esm/internal/util/errorContext.js
var context = null;
function errorContext(cb) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    const isRoot = !context;
    if (isRoot) {
      context = { errorThrown: false, error: null };
    }
    cb();
    if (isRoot) {
      const { errorThrown, error } = context;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

// node_modules/rxjs/dist/esm/internal/Subscriber.js
var Subscriber = class extends Subscription {
  constructor(destination) {
    super();
    this.isStopped = false;
    if (destination) {
      this.destination = destination;
      if (isSubscription(destination)) {
        destination.add(this);
      }
    } else {
      this.destination = EMPTY_OBSERVER;
    }
  }
  static create(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  }
  next(value) {
    if (this.isStopped) {
      handleStoppedNotification(nextNotification(value), this);
    } else {
      this._next(value);
    }
  }
  error(err) {
    if (this.isStopped) {
      handleStoppedNotification(errorNotification(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  }
  complete() {
    if (this.isStopped) {
      handleStoppedNotification(COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  }
  unsubscribe() {
    if (!this.closed) {
      this.isStopped = true;
      super.unsubscribe();
      this.destination = null;
    }
  }
  _next(value) {
    this.destination.next(value);
  }
  _error(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  }
  _complete() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }
};
var _bind = Function.prototype.bind;
function bind(fn2, thisArg) {
  return _bind.call(fn2, thisArg);
}
var ConsumerObserver = class {
  constructor(partialObserver) {
    this.partialObserver = partialObserver;
  }
  next(value) {
    const { partialObserver } = this;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
  error(err) {
    const { partialObserver } = this;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  }
  complete() {
    const { partialObserver } = this;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
};
var SafeSubscriber = class extends Subscriber {
  constructor(observerOrNext, error, complete) {
    super();
    let partialObserver;
    if (isFunction(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
        error: error !== null && error !== void 0 ? error : void 0,
        complete: complete !== null && complete !== void 0 ? complete : void 0
      };
    } else {
      let context2;
      if (this && config.useDeprecatedNextContext) {
        context2 = Object.create(observerOrNext);
        context2.unsubscribe = () => this.unsubscribe();
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context2),
          error: observerOrNext.error && bind(observerOrNext.error, context2),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context2)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    this.destination = new ConsumerObserver(partialObserver);
  }
};
function handleUnhandledError(error) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    captureError(error);
  } else {
    reportUnhandledError(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  const { onStoppedNotification } = config;
  onStoppedNotification && timeoutProvider.setTimeout(() => onStoppedNotification(notification, subscriber));
}
var EMPTY_OBSERVER = {
  closed: true,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
};

// node_modules/rxjs/dist/esm/internal/symbol/observable.js
var observable = (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();

// node_modules/rxjs/dist/esm/internal/util/identity.js
function identity(x) {
  return x;
}

// node_modules/rxjs/dist/esm/internal/util/pipe.js
function pipe(...fns) {
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce((prev, fn2) => fn2(prev), input);
  };
}

// node_modules/rxjs/dist/esm/internal/Observable.js
var Observable = class _Observable {
  constructor(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  lift(operator) {
    const observable2 = new _Observable();
    observable2.source = this;
    observable2.operator = operator;
    return observable2;
  }
  subscribe(observerOrNext, error, complete) {
    const subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
    errorContext(() => {
      const { operator, source } = this;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? this._subscribe(subscriber) : this._trySubscribe(subscriber));
    });
    return subscriber;
  }
  _trySubscribe(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  }
  forEach(next, promiseCtor) {
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor((resolve, reject) => {
      const subscriber = new SafeSubscriber({
        next: (value) => {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      this.subscribe(subscriber);
    });
  }
  _subscribe(subscriber) {
    var _a2;
    return (_a2 = this.source) === null || _a2 === void 0 ? void 0 : _a2.subscribe(subscriber);
  }
  [observable]() {
    return this;
  }
  pipe(...operations) {
    return pipeFromArray(operations)(this);
  }
  toPromise(promiseCtor) {
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor((resolve, reject) => {
      let value;
      this.subscribe((x) => value = x, (err) => reject(err), () => resolve(value));
    });
  }
};
Observable.create = (subscribe) => {
  return new Observable(subscribe);
};
function getPromiseCtor(promiseCtor) {
  var _a2;
  return (_a2 = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a2 !== void 0 ? _a2 : Promise;
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}

// node_modules/rxjs/dist/esm/internal/util/isInteropObservable.js
function isInteropObservable(input) {
  return isFunction(input[observable]);
}

// node_modules/rxjs/dist/esm/internal/util/isAsyncIterable.js
function isAsyncIterable(obj) {
  return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

// node_modules/rxjs/dist/esm/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
  return new TypeError(`You provided ${input !== null && typeof input === "object" ? "an invalid object" : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}

// node_modules/rxjs/dist/esm/internal/symbol/iterator.js
function getSymbolIterator() {
  if (typeof Symbol !== "function" || !Symbol.iterator) {
    return "@@iterator";
  }
  return Symbol.iterator;
}
var iterator = getSymbolIterator();

// node_modules/rxjs/dist/esm/internal/util/isIterable.js
function isIterable(input) {
  return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}

// node_modules/rxjs/dist/esm/internal/util/isReadableStreamLike.js
function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, function* readableStreamLikeToAsyncGenerator_1() {
    const reader = readableStream.getReader();
    try {
      while (true) {
        const { value, done } = yield __await(reader.read());
        if (done) {
          return yield __await(void 0);
        }
        yield yield __await(value);
      }
    } finally {
      reader.releaseLock();
    }
  });
}
function isReadableStreamLike(obj) {
  return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

// node_modules/rxjs/dist/esm/internal/observable/innerFrom.js
function innerFrom(input) {
  if (input instanceof Observable) {
    return input;
  }
  if (input != null) {
    if (isInteropObservable(input)) {
      return fromInteropObservable(input);
    }
    if (isArrayLike(input)) {
      return fromArrayLike(input);
    }
    if (isPromise(input)) {
      return fromPromise(input);
    }
    if (isAsyncIterable(input)) {
      return fromAsyncIterable(input);
    }
    if (isIterable(input)) {
      return fromIterable(input);
    }
    if (isReadableStreamLike(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
  return new Observable((subscriber) => {
    const obs = obj[observable]();
    if (isFunction(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function fromArrayLike(array) {
  return new Observable((subscriber) => {
    for (let i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new Observable((subscriber) => {
    promise.then((value) => {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, (err) => subscriber.error(err)).then(null, reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new Observable((subscriber) => {
    for (const value of iterable) {
      subscriber.next(value);
      if (subscriber.closed) {
        return;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new Observable((subscriber) => {
    process(asyncIterable, subscriber).catch((err) => subscriber.error(err));
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_1, _a2;
  return __awaiter(this, void 0, void 0, function* () {
    try {
      for (asyncIterable_1 = __asyncValues(asyncIterable); asyncIterable_1_1 = yield asyncIterable_1.next(), !asyncIterable_1_1.done; ) {
        const value = asyncIterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (asyncIterable_1_1 && !asyncIterable_1_1.done && (_a2 = asyncIterable_1.return)) yield _a2.call(asyncIterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    subscriber.complete();
  });
}

// node_modules/rxjs/dist/esm/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay2 = 0, repeat = false) {
  const scheduleSubscription = scheduler.schedule(function() {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay2));
    } else {
      this.unsubscribe();
    }
  }, delay2);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}

// node_modules/rxjs/dist/esm/internal/util/lift.js
function hasLift(source) {
  return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return (source) => {
    if (hasLift(source)) {
      return source.lift(function(liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}

// node_modules/rxjs/dist/esm/internal/operators/OperatorSubscriber.js
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = class extends Subscriber {
  constructor(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    super(destination);
    this.onFinalize = onFinalize;
    this.shouldUnsubscribe = shouldUnsubscribe;
    this._next = onNext ? function(value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : super._next;
    this._error = onError ? function(err) {
      try {
        onError(err);
      } catch (err2) {
        destination.error(err2);
      } finally {
        this.unsubscribe();
      }
    } : super._error;
    this._complete = onComplete ? function() {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._complete;
  }
  unsubscribe() {
    var _a2;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      const { closed } = this;
      super.unsubscribe();
      !closed && ((_a2 = this.onFinalize) === null || _a2 === void 0 ? void 0 : _a2.call(this));
    }
  }
};

// node_modules/rxjs/dist/esm/internal/operators/observeOn.js
function observeOn(scheduler, delay2 = 0) {
  return operate((source, subscriber) => {
    source.subscribe(createOperatorSubscriber(subscriber, (value) => executeSchedule(subscriber, scheduler, () => subscriber.next(value), delay2), () => executeSchedule(subscriber, scheduler, () => subscriber.complete(), delay2), (err) => executeSchedule(subscriber, scheduler, () => subscriber.error(err), delay2)));
  });
}

// node_modules/rxjs/dist/esm/internal/operators/subscribeOn.js
function subscribeOn(scheduler, delay2 = 0) {
  return operate((source, subscriber) => {
    subscriber.add(scheduler.schedule(() => source.subscribe(subscriber), delay2));
  });
}

// node_modules/rxjs/dist/esm/internal/scheduled/scheduleObservable.js
function scheduleObservable(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// node_modules/rxjs/dist/esm/internal/scheduled/schedulePromise.js
function schedulePromise(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// node_modules/rxjs/dist/esm/internal/scheduled/scheduleArray.js
function scheduleArray(input, scheduler) {
  return new Observable((subscriber) => {
    let i = 0;
    return scheduler.schedule(function() {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}

// node_modules/rxjs/dist/esm/internal/scheduled/scheduleIterable.js
function scheduleIterable(input, scheduler) {
  return new Observable((subscriber) => {
    let iterator2;
    executeSchedule(subscriber, scheduler, () => {
      iterator2 = input[iterator]();
      executeSchedule(subscriber, scheduler, () => {
        let value;
        let done;
        try {
          ({ value, done } = iterator2.next());
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return () => isFunction(iterator2 === null || iterator2 === void 0 ? void 0 : iterator2.return) && iterator2.return();
  });
}

// node_modules/rxjs/dist/esm/internal/scheduled/scheduleAsyncIterable.js
function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error("Iterable cannot be null");
  }
  return new Observable((subscriber) => {
    executeSchedule(subscriber, scheduler, () => {
      const iterator2 = input[Symbol.asyncIterator]();
      executeSchedule(subscriber, scheduler, () => {
        iterator2.next().then((result) => {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}

// node_modules/rxjs/dist/esm/internal/scheduled/scheduleReadableStreamLike.js
function scheduleReadableStreamLike(input, scheduler) {
  return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}

// node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    }
    if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    }
    if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    }
    if (isAsyncIterable(input)) {
      return scheduleAsyncIterable(input, scheduler);
    }
    if (isIterable(input)) {
      return scheduleIterable(input, scheduler);
    }
    if (isReadableStreamLike(input)) {
      return scheduleReadableStreamLike(input, scheduler);
    }
  }
  throw createInvalidObservableTypeError(input);
}

// node_modules/rxjs/dist/esm/internal/observable/from.js
function from(input, scheduler) {
  return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}

// node_modules/rxjs/dist/esm/internal/observable/of.js
function of(...args) {
  const scheduler = popScheduler(args);
  return from(args, scheduler);
}

// node_modules/rxjs/dist/esm/internal/util/EmptyError.js
var EmptyError = createErrorClass((_super) => function EmptyErrorImpl() {
  _super(this);
  this.name = "EmptyError";
  this.message = "no elements in sequence";
});

// node_modules/rxjs/dist/esm/internal/lastValueFrom.js
function lastValueFrom(source, config2) {
  const hasConfig = typeof config2 === "object";
  return new Promise((resolve, reject) => {
    let _hasValue = false;
    let _value;
    source.subscribe({
      next: (value) => {
        _value = value;
        _hasValue = true;
      },
      error: reject,
      complete: () => {
        if (_hasValue) {
          resolve(_value);
        } else if (hasConfig) {
          resolve(config2.defaultValue);
        } else {
          reject(new EmptyError());
        }
      }
    });
  });
}

// node_modules/rxjs/dist/esm/internal/operators/map.js
function map(project, thisArg) {
  return operate((source, subscriber) => {
    let index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, (value) => {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}

// node_modules/rxjs/dist/esm/internal/util/argsArgArrayOrObject.js
var { isArray } = Array;
var { getPrototypeOf, prototype: objectProto, keys: getKeys } = Object;
function argsArgArrayOrObject(args) {
  if (args.length === 1) {
    const first2 = args[0];
    if (isArray(first2)) {
      return { args: first2, keys: null };
    }
    if (isPOJO(first2)) {
      const keys = getKeys(first2);
      return {
        args: keys.map((key) => first2[key]),
        keys
      };
    }
  }
  return { args, keys: null };
}
function isPOJO(obj) {
  return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto;
}

// node_modules/rxjs/dist/esm/internal/util/mapOneOrManyArgs.js
var { isArray: isArray2 } = Array;
function callOrApply(fn2, args) {
  return isArray2(args) ? fn2(...args) : fn2(args);
}
function mapOneOrManyArgs(fn2) {
  return map((args) => callOrApply(fn2, args));
}

// node_modules/rxjs/dist/esm/internal/util/createObject.js
function createObject(keys, values) {
  return keys.reduce((result, key, i) => (result[key] = values[i], result), {});
}

// node_modules/rxjs/dist/esm/internal/observable/combineLatest.js
function combineLatest(...args) {
  const scheduler = popScheduler(args);
  const resultSelector = popResultSelector(args);
  const { args: observables, keys } = argsArgArrayOrObject(args);
  if (observables.length === 0) {
    return from([], scheduler);
  }
  const result = new Observable(combineLatestInit(observables, scheduler, keys ? (values) => createObject(keys, values) : identity));
  return resultSelector ? result.pipe(mapOneOrManyArgs(resultSelector)) : result;
}
function combineLatestInit(observables, scheduler, valueTransform = identity) {
  return (subscriber) => {
    maybeSchedule(scheduler, () => {
      const { length } = observables;
      const values = new Array(length);
      let active = length;
      let remainingFirstValues = length;
      for (let i = 0; i < length; i++) {
        maybeSchedule(scheduler, () => {
          const source = from(observables[i], scheduler);
          let hasFirstValue = false;
          source.subscribe(createOperatorSubscriber(subscriber, (value) => {
            values[i] = value;
            if (!hasFirstValue) {
              hasFirstValue = true;
              remainingFirstValues--;
            }
            if (!remainingFirstValues) {
              subscriber.next(valueTransform(values.slice()));
            }
          }, () => {
            if (!--active) {
              subscriber.complete();
            }
          }));
        }, subscriber);
      }
    }, subscriber);
  };
}
function maybeSchedule(scheduler, execute, subscription) {
  if (scheduler) {
    executeSchedule(subscription, scheduler, execute);
  } else {
    execute();
  }
}

// node_modules/rxjs/dist/esm/internal/scheduler/Action.js
var Action = class extends Subscription {
  constructor(scheduler, work) {
    super();
  }
  schedule(state, delay2 = 0) {
    return this;
  }
};

// node_modules/rxjs/dist/esm/internal/scheduler/intervalProvider.js
var intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const { delegate } = intervalProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }
    return setInterval(handler, timeout, ...args);
  },
  clearInterval(handle) {
    const { delegate } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm/internal/scheduler/AsyncAction.js
var AsyncAction = class extends Action {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }
  schedule(state, delay2 = 0) {
    var _a2;
    if (this.closed) {
      return this;
    }
    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay2);
    }
    this.pending = true;
    this.delay = delay2;
    this.id = (_a2 = this.id) !== null && _a2 !== void 0 ? _a2 : this.requestAsyncId(scheduler, this.id, delay2);
    return this;
  }
  requestAsyncId(scheduler, _id, delay2 = 0) {
    return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay2);
  }
  recycleAsyncId(_scheduler, id, delay2 = 0) {
    if (delay2 != null && this.delay === delay2 && this.pending === false) {
      return id;
    }
    if (id != null) {
      intervalProvider.clearInterval(id);
    }
    return void 0;
  }
  execute(state, delay2) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    const error = this._execute(state, delay2);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(state, _delay) {
    let errored = false;
    let errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error("Scheduled action threw falsy error");
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const { id, scheduler } = this;
      const { actions } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      arrRemove(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
};

// node_modules/rxjs/dist/esm/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = {
  now() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm/internal/Scheduler.js
var Scheduler = class _Scheduler {
  constructor(schedulerActionCtor, now = _Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  schedule(work, delay2 = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay2);
  }
};
Scheduler.now = dateTimestampProvider.now;

// node_modules/rxjs/dist/esm/internal/scheduler/AsyncScheduler.js
var AsyncScheduler = class extends Scheduler {
  constructor(SchedulerAction, now = Scheduler.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
  }
  flush(action) {
    const { actions } = this;
    if (this._active) {
      actions.push(action);
      return;
    }
    let error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
};

// node_modules/rxjs/dist/esm/internal/scheduler/async.js
var asyncScheduler = new AsyncScheduler(AsyncAction);
var async = asyncScheduler;

// node_modules/rxjs/dist/esm/internal/util/isDate.js
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

// node_modules/rxjs/dist/esm/internal/observable/timer.js
function timer(dueTime = 0, intervalOrScheduler, scheduler = async) {
  let intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if (isScheduler(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new Observable((subscriber) => {
    let due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    let n = 0;
    return scheduler.schedule(function() {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(void 0, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}

// node_modules/rxjs/dist/esm/internal/observable/interval.js
function interval(period = 0, scheduler = asyncScheduler) {
  if (period < 0) {
    period = 0;
  }
  return timer(period, period, scheduler);
}

// node_modules/rxjs/dist/esm/internal/operators/filter.js
function filter(predicate, thisArg) {
  return operate((source, subscriber) => {
    let index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, (value) => predicate.call(thisArg, value, index++) && subscriber.next(value)));
  });
}

// node_modules/rxjs/dist/esm/internal/operators/catchError.js
function catchError(selector) {
  return operate((source, subscriber) => {
    let innerSub = null;
    let syncUnsub = false;
    let handledResult;
    innerSub = source.subscribe(createOperatorSubscriber(subscriber, void 0, void 0, (err) => {
      handledResult = innerFrom(selector(err, catchError(selector)(source)));
      if (innerSub) {
        innerSub.unsubscribe();
        innerSub = null;
        handledResult.subscribe(subscriber);
      } else {
        syncUnsub = true;
      }
    }));
    if (syncUnsub) {
      innerSub.unsubscribe();
      innerSub = null;
      handledResult.subscribe(subscriber);
    }
  });
}

// node_modules/rxjs/dist/esm/internal/operators/debounceTime.js
function debounceTime(dueTime, scheduler = asyncScheduler) {
  return operate((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(void 0, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe(createOperatorSubscriber(subscriber, (value) => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, void 0, () => {
      lastValue = activeTask = null;
    }));
  });
}

// node_modules/rxjs/dist/esm/internal/operators/distinctUntilChanged.js
function distinctUntilChanged(comparator, keySelector = identity) {
  comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
  return operate((source, subscriber) => {
    let previousKey;
    let first2 = true;
    source.subscribe(createOperatorSubscriber(subscriber, (value) => {
      const currentKey = keySelector(value);
      if (first2 || !comparator(previousKey, currentKey)) {
        first2 = false;
        previousKey = currentKey;
        subscriber.next(value);
      }
    }));
  });
}
function defaultCompare(a, b) {
  return a === b;
}

// node_modules/rxjs/dist/esm/internal/observable/empty.js
var EMPTY = new Observable((subscriber) => subscriber.complete());

// node_modules/rxjs/dist/esm/internal/operators/take.js
function take(count) {
  return count <= 0 ? () => EMPTY : operate((source, subscriber) => {
    let seen = 0;
    source.subscribe(createOperatorSubscriber(subscriber, (value) => {
      if (++seen <= count) {
        subscriber.next(value);
        if (count <= seen) {
          subscriber.complete();
        }
      }
    }));
  });
}

// node_modules/rxjs/dist/esm/internal/operators/defaultIfEmpty.js
function defaultIfEmpty(defaultValue) {
  return operate((source, subscriber) => {
    let hasValue = false;
    source.subscribe(createOperatorSubscriber(subscriber, (value) => {
      hasValue = true;
      subscriber.next(value);
    }, () => {
      if (!hasValue) {
        subscriber.next(defaultValue);
      }
      subscriber.complete();
    }));
  });
}

// node_modules/rxjs/dist/esm/internal/operators/throwIfEmpty.js
function throwIfEmpty(errorFactory = defaultErrorFactory) {
  return operate((source, subscriber) => {
    let hasValue = false;
    source.subscribe(createOperatorSubscriber(subscriber, (value) => {
      hasValue = true;
      subscriber.next(value);
    }, () => hasValue ? subscriber.complete() : subscriber.error(errorFactory())));
  });
}
function defaultErrorFactory() {
  return new EmptyError();
}

// node_modules/rxjs/dist/esm/internal/operators/first.js
function first(predicate, defaultValue) {
  const hasDefaultValue = arguments.length >= 2;
  return (source) => source.pipe(predicate ? filter((v2, i) => predicate(v2, i, source)) : identity, take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(() => new EmptyError()));
}

// node_modules/rxjs/dist/esm/internal/util/ObjectUnsubscribedError.js
var ObjectUnsubscribedError = createErrorClass((_super) => function ObjectUnsubscribedErrorImpl() {
  _super(this);
  this.name = "ObjectUnsubscribedError";
  this.message = "object unsubscribed";
});

// node_modules/rxjs/dist/esm/internal/Subject.js
var Subject = class extends Observable {
  constructor() {
    super();
    this.closed = false;
    this.currentObservers = null;
    this.observers = [];
    this.isStopped = false;
    this.hasError = false;
    this.thrownError = null;
  }
  lift(operator) {
    const subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  }
  _throwIfClosed() {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    }
  }
  next(value) {
    errorContext(() => {
      this._throwIfClosed();
      if (!this.isStopped) {
        if (!this.currentObservers) {
          this.currentObservers = Array.from(this.observers);
        }
        for (const observer of this.currentObservers) {
          observer.next(value);
        }
      }
    });
  }
  error(err) {
    errorContext(() => {
      this._throwIfClosed();
      if (!this.isStopped) {
        this.hasError = this.isStopped = true;
        this.thrownError = err;
        const { observers } = this;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  }
  complete() {
    errorContext(() => {
      this._throwIfClosed();
      if (!this.isStopped) {
        this.isStopped = true;
        const { observers } = this;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  }
  unsubscribe() {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  }
  get observed() {
    var _a2;
    return ((_a2 = this.observers) === null || _a2 === void 0 ? void 0 : _a2.length) > 0;
  }
  _trySubscribe(subscriber) {
    this._throwIfClosed();
    return super._trySubscribe(subscriber);
  }
  _subscribe(subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  }
  _innerSubscribe(subscriber) {
    const { hasError, isStopped, observers } = this;
    if (hasError || isStopped) {
      return EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new Subscription(() => {
      this.currentObservers = null;
      arrRemove(observers, subscriber);
    });
  }
  _checkFinalizedStatuses(subscriber) {
    const { hasError, thrownError, isStopped } = this;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  }
  asObservable() {
    const observable2 = new Observable();
    observable2.source = this;
    return observable2;
  }
};
Subject.create = (destination, source) => {
  return new AnonymousSubject(destination, source);
};
var AnonymousSubject = class extends Subject {
  constructor(destination, source) {
    super();
    this.destination = destination;
    this.source = source;
  }
  next(value) {
    var _a2, _b;
    (_b = (_a2 = this.destination) === null || _a2 === void 0 ? void 0 : _a2.next) === null || _b === void 0 ? void 0 : _b.call(_a2, value);
  }
  error(err) {
    var _a2, _b;
    (_b = (_a2 = this.destination) === null || _a2 === void 0 ? void 0 : _a2.error) === null || _b === void 0 ? void 0 : _b.call(_a2, err);
  }
  complete() {
    var _a2, _b;
    (_b = (_a2 = this.destination) === null || _a2 === void 0 ? void 0 : _a2.complete) === null || _b === void 0 ? void 0 : _b.call(_a2);
  }
  _subscribe(subscriber) {
    var _a2, _b;
    return (_b = (_a2 = this.source) === null || _a2 === void 0 ? void 0 : _a2.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
  }
};

// node_modules/rxjs/dist/esm/internal/ReplaySubject.js
var ReplaySubject = class extends Subject {
  constructor(_bufferSize = Infinity, _windowTime = Infinity, _timestampProvider = dateTimestampProvider) {
    super();
    this._bufferSize = _bufferSize;
    this._windowTime = _windowTime;
    this._timestampProvider = _timestampProvider;
    this._buffer = [];
    this._infiniteTimeWindow = true;
    this._infiniteTimeWindow = _windowTime === Infinity;
    this._bufferSize = Math.max(1, _bufferSize);
    this._windowTime = Math.max(1, _windowTime);
  }
  next(value) {
    const { isStopped, _buffer, _infiniteTimeWindow, _timestampProvider, _windowTime } = this;
    if (!isStopped) {
      _buffer.push(value);
      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }
    this._trimBuffer();
    super.next(value);
  }
  _subscribe(subscriber) {
    this._throwIfClosed();
    this._trimBuffer();
    const subscription = this._innerSubscribe(subscriber);
    const { _infiniteTimeWindow, _buffer } = this;
    const copy = _buffer.slice();
    for (let i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i]);
    }
    this._checkFinalizedStatuses(subscriber);
    return subscription;
  }
  _trimBuffer() {
    const { _bufferSize, _timestampProvider, _buffer, _infiniteTimeWindow } = this;
    const adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
    if (!_infiniteTimeWindow) {
      const now = _timestampProvider.now();
      let last3 = 0;
      for (let i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
        last3 = i;
      }
      last3 && _buffer.splice(0, last3 + 1);
    }
  }
};

// node_modules/rxjs/dist/esm/internal/operators/share.js
function share(options = {}) {
  const { connector = () => new Subject(), resetOnError = true, resetOnComplete = true, resetOnRefCountZero = true } = options;
  return (wrapperSource) => {
    let connection;
    let resetConnection;
    let subject;
    let refCount2 = 0;
    let hasCompleted = false;
    let hasErrored = false;
    const cancelReset = () => {
      resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
      resetConnection = void 0;
    };
    const reset = () => {
      cancelReset();
      connection = subject = void 0;
      hasCompleted = hasErrored = false;
    };
    const resetAndUnsubscribe = () => {
      const conn = connection;
      reset();
      conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
    };
    return operate((source, subscriber) => {
      refCount2++;
      if (!hasErrored && !hasCompleted) {
        cancelReset();
      }
      const dest = subject = subject !== null && subject !== void 0 ? subject : connector();
      subscriber.add(() => {
        refCount2--;
        if (refCount2 === 0 && !hasErrored && !hasCompleted) {
          resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
        }
      });
      dest.subscribe(subscriber);
      if (!connection && refCount2 > 0) {
        connection = new SafeSubscriber({
          next: (value) => dest.next(value),
          error: (err) => {
            hasErrored = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnError, err);
            dest.error(err);
          },
          complete: () => {
            hasCompleted = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnComplete);
            dest.complete();
          }
        });
        innerFrom(source).subscribe(connection);
      }
    })(wrapperSource);
  };
}
function handleReset(reset, on2, ...args) {
  if (on2 === true) {
    reset();
    return;
  }
  if (on2 === false) {
    return;
  }
  const onSubscriber = new SafeSubscriber({
    next: () => {
      onSubscriber.unsubscribe();
      reset();
    }
  });
  return innerFrom(on2(...args)).subscribe(onSubscriber);
}

// node_modules/rxjs/dist/esm/internal/operators/shareReplay.js
function shareReplay(configOrBufferSize, windowTime, scheduler) {
  let bufferSize;
  let refCount2 = false;
  if (configOrBufferSize && typeof configOrBufferSize === "object") {
    ({ bufferSize = Infinity, windowTime = Infinity, refCount: refCount2 = false, scheduler } = configOrBufferSize);
  } else {
    bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
  }
  return share({
    connector: () => new ReplaySubject(bufferSize, windowTime, scheduler),
    resetOnError: true,
    resetOnComplete: false,
    resetOnRefCountZero: refCount2
  });
}

// node_modules/rxjs/dist/esm/internal/operators/mergeInternals.js
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  const buffer = [];
  let active = 0;
  let index = 0;
  let isComplete = false;
  const checkComplete = () => {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };
  const outerNext = (value) => active < concurrent ? doInnerSub(value) : buffer.push(value);
  const doInnerSub = (value) => {
    expand && subscriber.next(value);
    active++;
    let innerComplete = false;
    innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, (innerValue) => {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, () => {
      innerComplete = true;
    }, void 0, () => {
      if (innerComplete) {
        try {
          active--;
          while (buffer.length && active < concurrent) {
            const bufferedValue = buffer.shift();
            if (innerSubScheduler) {
              executeSchedule(subscriber, innerSubScheduler, () => doInnerSub(bufferedValue));
            } else {
              doInnerSub(bufferedValue);
            }
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };
  source.subscribe(createOperatorSubscriber(subscriber, outerNext, () => {
    isComplete = true;
    checkComplete();
  }));
  return () => {
    additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
  };
}

// node_modules/rxjs/dist/esm/internal/operators/mergeMap.js
function mergeMap(project, resultSelector, concurrent = Infinity) {
  if (isFunction(resultSelector)) {
    return mergeMap((a, i) => map((b, ii2) => resultSelector(a, b, i, ii2))(innerFrom(project(a, i))), concurrent);
  } else if (typeof resultSelector === "number") {
    concurrent = resultSelector;
  }
  return operate((source, subscriber) => mergeInternals(source, subscriber, project, concurrent));
}

// node_modules/rxjs/dist/esm/internal/operators/mergeAll.js
function mergeAll(concurrent = Infinity) {
  return mergeMap(identity, concurrent);
}

// node_modules/rxjs/dist/esm/internal/operators/concatAll.js
function concatAll() {
  return mergeAll(1);
}

// node_modules/rxjs/dist/esm/internal/observable/concat.js
function concat(...args) {
  return concatAll()(from(args, popScheduler(args)));
}

// node_modules/rxjs/dist/esm/internal/operators/startWith.js
function startWith(...values) {
  const scheduler = popScheduler(values);
  return operate((source, subscriber) => {
    (scheduler ? concat(values, source, scheduler) : concat(values, source)).subscribe(subscriber);
  });
}

// node_modules/rxjs/dist/esm/internal/operators/switchMap.js
function switchMap(project, resultSelector) {
  return operate((source, subscriber) => {
    let innerSubscriber = null;
    let index = 0;
    let isComplete = false;
    const checkComplete = () => isComplete && !innerSubscriber && subscriber.complete();
    source.subscribe(createOperatorSubscriber(subscriber, (value) => {
      innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
      let innerIndex = 0;
      const outerIndex = index++;
      innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = createOperatorSubscriber(subscriber, (innerValue) => subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue), () => {
        innerSubscriber = null;
        checkComplete();
      }));
    }, () => {
      isComplete = true;
      checkComplete();
    }));
  });
}

// node_modules/rxjs/dist/esm/internal/operators/tap.js
function tap(observerOrNext, error, complete) {
  const tapObserver = isFunction(observerOrNext) || error || complete ? { next: observerOrNext, error, complete } : observerOrNext;
  return tapObserver ? operate((source, subscriber) => {
    var _a2;
    (_a2 = tapObserver.subscribe) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
    let isUnsub = true;
    source.subscribe(createOperatorSubscriber(subscriber, (value) => {
      var _a3;
      (_a3 = tapObserver.next) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver, value);
      subscriber.next(value);
    }, () => {
      var _a3;
      isUnsub = false;
      (_a3 = tapObserver.complete) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver);
      subscriber.complete();
    }, (err) => {
      var _a3;
      isUnsub = false;
      (_a3 = tapObserver.error) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver, err);
      subscriber.error(err);
    }, () => {
      var _a3, _b;
      if (isUnsub) {
        (_a3 = tapObserver.unsubscribe) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver);
      }
      (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
    }));
  }) : identity;
}

// node_modules/rxjs/dist/esm/internal/operators/refCount.js
function refCount() {
  return operate((source, subscriber) => {
    let connection = null;
    source._refCount++;
    const refCounter = createOperatorSubscriber(subscriber, void 0, void 0, void 0, () => {
      if (!source || source._refCount <= 0 || 0 < --source._refCount) {
        connection = null;
        return;
      }
      const sharedConnection = source._connection;
      const conn = connection;
      connection = null;
      if (sharedConnection && (!conn || sharedConnection === conn)) {
        sharedConnection.unsubscribe();
      }
      subscriber.unsubscribe();
    });
    source.subscribe(refCounter);
    if (!refCounter.closed) {
      connection = source.connect();
    }
  });
}

// node_modules/rxjs/dist/esm/internal/observable/ConnectableObservable.js
var ConnectableObservable = class extends Observable {
  constructor(source, subjectFactory) {
    super();
    this.source = source;
    this.subjectFactory = subjectFactory;
    this._subject = null;
    this._refCount = 0;
    this._connection = null;
    if (hasLift(source)) {
      this.lift = source.lift;
    }
  }
  _subscribe(subscriber) {
    return this.getSubject().subscribe(subscriber);
  }
  getSubject() {
    const subject = this._subject;
    if (!subject || subject.isStopped) {
      this._subject = this.subjectFactory();
    }
    return this._subject;
  }
  _teardown() {
    this._refCount = 0;
    const { _connection } = this;
    this._subject = this._connection = null;
    _connection === null || _connection === void 0 ? void 0 : _connection.unsubscribe();
  }
  connect() {
    let connection = this._connection;
    if (!connection) {
      connection = this._connection = new Subscription();
      const subject = this.getSubject();
      connection.add(this.source.subscribe(createOperatorSubscriber(subject, void 0, () => {
        this._teardown();
        subject.complete();
      }, (err) => {
        this._teardown();
        subject.error(err);
      }, () => this._teardown())));
      if (connection.closed) {
        this._connection = null;
        connection = Subscription.EMPTY;
      }
    }
    return connection;
  }
  refCount() {
    return refCount()(this);
  }
};

// node_modules/rxjs/dist/esm/internal/scheduler/animationFrameProvider.js
var animationFrameProvider = {
  schedule(callback) {
    let request = requestAnimationFrame;
    let cancel = cancelAnimationFrame;
    const { delegate } = animationFrameProvider;
    if (delegate) {
      request = delegate.requestAnimationFrame;
      cancel = delegate.cancelAnimationFrame;
    }
    const handle = request((timestamp) => {
      cancel = void 0;
      callback(timestamp);
    });
    return new Subscription(() => cancel === null || cancel === void 0 ? void 0 : cancel(handle));
  },
  requestAnimationFrame(...args) {
    const { delegate } = animationFrameProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame)(...args);
  },
  cancelAnimationFrame(...args) {
    const { delegate } = animationFrameProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame)(...args);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm/internal/BehaviorSubject.js
var BehaviorSubject = class extends Subject {
  constructor(_value) {
    super();
    this._value = _value;
  }
  get value() {
    return this.getValue();
  }
  _subscribe(subscriber) {
    const subscription = super._subscribe(subscriber);
    !subscription.closed && subscriber.next(this._value);
    return subscription;
  }
  getValue() {
    const { hasError, thrownError, _value } = this;
    if (hasError) {
      throw thrownError;
    }
    this._throwIfClosed();
    return _value;
  }
  next(value) {
    super.next(this._value = value);
  }
};

// node_modules/rxjs/dist/esm/internal/util/Immediate.js
var nextHandle = 1;
var resolved;
var activeHandles = {};
function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }
  return false;
}
var Immediate = {
  setImmediate(cb) {
    const handle = nextHandle++;
    activeHandles[handle] = true;
    if (!resolved) {
      resolved = Promise.resolve();
    }
    resolved.then(() => findAndClearHandle(handle) && cb());
    return handle;
  },
  clearImmediate(handle) {
    findAndClearHandle(handle);
  }
};

// node_modules/rxjs/dist/esm/internal/scheduler/immediateProvider.js
var { setImmediate, clearImmediate } = Immediate;
var immediateProvider = {
  setImmediate(...args) {
    const { delegate } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate)(...args);
  },
  clearImmediate(handle) {
    const { delegate } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm/internal/scheduler/AsapAction.js
var AsapAction = class extends AsyncAction {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
  }
  requestAsyncId(scheduler, id, delay2 = 0) {
    if (delay2 !== null && delay2 > 0) {
      return super.requestAsyncId(scheduler, id, delay2);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = immediateProvider.setImmediate(scheduler.flush.bind(scheduler, void 0)));
  }
  recycleAsyncId(scheduler, id, delay2 = 0) {
    var _a2;
    if (delay2 != null ? delay2 > 0 : this.delay > 0) {
      return super.recycleAsyncId(scheduler, id, delay2);
    }
    const { actions } = scheduler;
    if (id != null && ((_a2 = actions[actions.length - 1]) === null || _a2 === void 0 ? void 0 : _a2.id) !== id) {
      immediateProvider.clearImmediate(id);
      if (scheduler._scheduled === id) {
        scheduler._scheduled = void 0;
      }
    }
    return void 0;
  }
};

// node_modules/rxjs/dist/esm/internal/scheduler/AsapScheduler.js
var AsapScheduler = class extends AsyncScheduler {
  flush(action) {
    this._active = true;
    const flushId = this._scheduled;
    this._scheduled = void 0;
    const { actions } = this;
    let error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
};

// node_modules/rxjs/dist/esm/internal/scheduler/asap.js
var asapScheduler = new AsapScheduler(AsapAction);

// node_modules/rxjs/dist/esm/internal/scheduler/AnimationFrameAction.js
var AnimationFrameAction = class extends AsyncAction {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
  }
  requestAsyncId(scheduler, id, delay2 = 0) {
    if (delay2 !== null && delay2 > 0) {
      return super.requestAsyncId(scheduler, id, delay2);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider.requestAnimationFrame(() => scheduler.flush(void 0)));
  }
  recycleAsyncId(scheduler, id, delay2 = 0) {
    var _a2;
    if (delay2 != null ? delay2 > 0 : this.delay > 0) {
      return super.recycleAsyncId(scheduler, id, delay2);
    }
    const { actions } = scheduler;
    if (id != null && id === scheduler._scheduled && ((_a2 = actions[actions.length - 1]) === null || _a2 === void 0 ? void 0 : _a2.id) !== id) {
      animationFrameProvider.cancelAnimationFrame(id);
      scheduler._scheduled = void 0;
    }
    return void 0;
  }
};

// node_modules/rxjs/dist/esm/internal/scheduler/AnimationFrameScheduler.js
var AnimationFrameScheduler = class extends AsyncScheduler {
  flush(action) {
    this._active = true;
    let flushId;
    if (action) {
      flushId = action.id;
    } else {
      flushId = this._scheduled;
      this._scheduled = void 0;
    }
    const { actions } = this;
    let error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
};

// node_modules/rxjs/dist/esm/internal/scheduler/animationFrame.js
var animationFrameScheduler = new AnimationFrameScheduler(AnimationFrameAction);

// node_modules/rxjs/dist/esm/internal/observable/throwError.js
function throwError(errorOrErrorFactory, scheduler) {
  const errorFactory = isFunction(errorOrErrorFactory) ? errorOrErrorFactory : () => errorOrErrorFactory;
  const init = (subscriber) => subscriber.error(errorFactory());
  return new Observable(scheduler ? (subscriber) => scheduler.schedule(init, 0, subscriber) : init);
}

// node_modules/rxjs/dist/esm/internal/util/isObservable.js
function isObservable(obj) {
  return !!obj && (obj instanceof Observable || isFunction(obj.lift) && isFunction(obj.subscribe));
}

// node_modules/rxjs/dist/esm/internal/firstValueFrom.js
function firstValueFrom(source, config2) {
  const hasConfig = typeof config2 === "object";
  return new Promise((resolve, reject) => {
    const subscriber = new SafeSubscriber({
      next: (value) => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config2.defaultValue);
        } else {
          reject(new EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

// node_modules/rxjs/dist/esm/internal/observable/defer.js
function defer(observableFactory) {
  return new Observable((subscriber) => {
    innerFrom(observableFactory()).subscribe(subscriber);
  });
}

// node_modules/rxjs/dist/esm/internal/observable/forkJoin.js
function forkJoin(...args) {
  const resultSelector = popResultSelector(args);
  const { args: sources, keys } = argsArgArrayOrObject(args);
  const result = new Observable((subscriber) => {
    const { length } = sources;
    if (!length) {
      subscriber.complete();
      return;
    }
    const values = new Array(length);
    let remainingCompletions = length;
    let remainingEmissions = length;
    for (let sourceIndex = 0; sourceIndex < length; sourceIndex++) {
      let hasValue = false;
      innerFrom(sources[sourceIndex]).subscribe(createOperatorSubscriber(subscriber, (value) => {
        if (!hasValue) {
          hasValue = true;
          remainingEmissions--;
        }
        values[sourceIndex] = value;
      }, () => remainingCompletions--, void 0, () => {
        if (!remainingCompletions || !hasValue) {
          if (!remainingEmissions) {
            subscriber.next(keys ? createObject(keys, values) : values);
          }
          subscriber.complete();
        }
      }));
    }
  });
  return resultSelector ? result.pipe(mapOneOrManyArgs(resultSelector)) : result;
}

// node_modules/rxjs/dist/esm/internal/observable/merge.js
function merge(...args) {
  const scheduler = popScheduler(args);
  const concurrent = popNumber(args, Infinity);
  const sources = args;
  return !sources.length ? EMPTY : sources.length === 1 ? innerFrom(sources[0]) : mergeAll(concurrent)(from(sources, scheduler));
}

// node_modules/rxjs/dist/esm/internal/observable/never.js
var NEVER = new Observable(noop);

// node_modules/rxjs/dist/esm/internal/operators/audit.js
function audit(durationSelector) {
  return operate((source, subscriber) => {
    let hasValue = false;
    let lastValue = null;
    let durationSubscriber = null;
    let isComplete = false;
    const endDuration = () => {
      durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
      durationSubscriber = null;
      if (hasValue) {
        hasValue = false;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
      isComplete && subscriber.complete();
    };
    const cleanupDuration = () => {
      durationSubscriber = null;
      isComplete && subscriber.complete();
    };
    source.subscribe(createOperatorSubscriber(subscriber, (value) => {
      hasValue = true;
      lastValue = value;
      if (!durationSubscriber) {
        innerFrom(durationSelector(value)).subscribe(durationSubscriber = createOperatorSubscriber(subscriber, endDuration, cleanupDuration));
      }
    }, () => {
      isComplete = true;
      (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
    }));
  });
}

// node_modules/rxjs/dist/esm/internal/operators/auditTime.js
function auditTime(duration, scheduler = asyncScheduler) {
  return audit(() => timer(duration, scheduler));
}

// node_modules/rxjs/dist/esm/internal/operators/scanInternals.js
function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
  return (source, subscriber) => {
    let hasState = hasSeed;
    let state = seed;
    let index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, (value) => {
      const i = index++;
      state = hasState ? accumulator(state, value, i) : (hasState = true, value);
      emitOnNext && subscriber.next(state);
    }, emitBeforeComplete && (() => {
      hasState && subscriber.next(state);
      subscriber.complete();
    })));
  };
}

// node_modules/rxjs/dist/esm/internal/operators/concatMap.js
function concatMap(project, resultSelector) {
  return isFunction(resultSelector) ? mergeMap(project, resultSelector, 1) : mergeMap(project, 1);
}

// node_modules/rxjs/dist/esm/internal/operators/ignoreElements.js
function ignoreElements() {
  return operate((source, subscriber) => {
    source.subscribe(createOperatorSubscriber(subscriber, noop));
  });
}

// node_modules/rxjs/dist/esm/internal/operators/mapTo.js
function mapTo(value) {
  return map(() => value);
}

// node_modules/rxjs/dist/esm/internal/operators/delayWhen.js
function delayWhen(delayDurationSelector, subscriptionDelay) {
  if (subscriptionDelay) {
    return (source) => concat(subscriptionDelay.pipe(take(1), ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
  }
  return mergeMap((value, index) => innerFrom(delayDurationSelector(value, index)).pipe(take(1), mapTo(value)));
}

// node_modules/rxjs/dist/esm/internal/operators/delay.js
function delay(due, scheduler = asyncScheduler) {
  const duration = timer(due, scheduler);
  return delayWhen(() => duration);
}

// node_modules/rxjs/dist/esm/internal/operators/distinctUntilKeyChanged.js
function distinctUntilKeyChanged(key, compare) {
  return distinctUntilChanged((x, y) => compare ? compare(x[key], y[key]) : x[key] === y[key]);
}

// node_modules/rxjs/dist/esm/internal/operators/finalize.js
function finalize(callback) {
  return operate((source, subscriber) => {
    try {
      source.subscribe(subscriber);
    } finally {
      subscriber.add(callback);
    }
  });
}

// node_modules/rxjs/dist/esm/internal/operators/takeLast.js
function takeLast(count) {
  return count <= 0 ? () => EMPTY : operate((source, subscriber) => {
    let buffer = [];
    source.subscribe(createOperatorSubscriber(subscriber, (value) => {
      buffer.push(value);
      count < buffer.length && buffer.shift();
    }, () => {
      for (const value of buffer) {
        subscriber.next(value);
      }
      subscriber.complete();
    }, void 0, () => {
      buffer = null;
    }));
  });
}

// node_modules/rxjs/dist/esm/internal/operators/last.js
function last2(predicate, defaultValue) {
  const hasDefaultValue = arguments.length >= 2;
  return (source) => source.pipe(predicate ? filter((v2, i) => predicate(v2, i, source)) : identity, takeLast(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(() => new EmptyError()));
}

// node_modules/rxjs/dist/esm/internal/operators/pairwise.js
function pairwise() {
  return operate((source, subscriber) => {
    let prev;
    let hasPrev = false;
    source.subscribe(createOperatorSubscriber(subscriber, (value) => {
      const p2 = prev;
      prev = value;
      hasPrev && subscriber.next([p2, value]);
      hasPrev = true;
    }));
  });
}

// node_modules/rxjs/dist/esm/internal/operators/retry.js
function retry(configOrCount = Infinity) {
  let config2;
  if (configOrCount && typeof configOrCount === "object") {
    config2 = configOrCount;
  } else {
    config2 = {
      count: configOrCount
    };
  }
  const { count = Infinity, delay: delay2, resetOnSuccess = false } = config2;
  return count <= 0 ? identity : operate((source, subscriber) => {
    let soFar = 0;
    let innerSub;
    const subscribeForRetry = () => {
      let syncUnsub = false;
      innerSub = source.subscribe(createOperatorSubscriber(subscriber, (value) => {
        if (resetOnSuccess) {
          soFar = 0;
        }
        subscriber.next(value);
      }, void 0, (err) => {
        if (soFar++ < count) {
          const resub = () => {
            if (innerSub) {
              innerSub.unsubscribe();
              innerSub = null;
              subscribeForRetry();
            } else {
              syncUnsub = true;
            }
          };
          if (delay2 != null) {
            const notifier = typeof delay2 === "number" ? timer(delay2) : innerFrom(delay2(err, soFar));
            const notifierSubscriber = createOperatorSubscriber(subscriber, () => {
              notifierSubscriber.unsubscribe();
              resub();
            }, () => {
              subscriber.complete();
            });
            notifier.subscribe(notifierSubscriber);
          } else {
            resub();
          }
        } else {
          subscriber.error(err);
        }
      }));
      if (syncUnsub) {
        innerSub.unsubscribe();
        innerSub = null;
        subscribeForRetry();
      }
    };
    subscribeForRetry();
  });
}

// node_modules/rxjs/dist/esm/internal/operators/scan.js
function scan(accumulator, seed) {
  return operate(scanInternals(accumulator, seed, arguments.length >= 2, true));
}

// node_modules/rxjs/dist/esm/internal/operators/skip.js
function skip(count) {
  return filter((_2, index) => count <= index);
}

// node_modules/rxjs/dist/esm/internal/operators/skipWhile.js
function skipWhile(predicate) {
  return operate((source, subscriber) => {
    let taking = false;
    let index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, (value) => (taking || (taking = !predicate(value, index++))) && subscriber.next(value)));
  });
}

// node_modules/rxjs/dist/esm/internal/operators/takeUntil.js
function takeUntil(notifier) {
  return operate((source, subscriber) => {
    innerFrom(notifier).subscribe(createOperatorSubscriber(subscriber, () => subscriber.complete(), noop));
    !subscriber.closed && source.subscribe(subscriber);
  });
}

// node_modules/rxjs/dist/esm/internal/operators/takeWhile.js
function takeWhile(predicate, inclusive = false) {
  return operate((source, subscriber) => {
    let index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, (value) => {
      const result = predicate(value, index++);
      (result || inclusive) && subscriber.next(value);
      !result && subscriber.complete();
    }));
  });
}

// node_modules/@placeos/ts-client/dist/index.es.js
var Tn = function(t, e) {
  return Tn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Tn(t, e);
};
function ie(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Tn(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var nt = function() {
  return nt = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
    }
    return e;
  }, nt.apply(this, arguments);
};
function Ti(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function Oi(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function u(y) {
      try {
        l(r.next(y));
      } catch (b) {
        o(b);
      }
    }
    function c(y) {
      try {
        l(r.throw(y));
      } catch (b) {
        o(b);
      }
    }
    function l(y) {
      y.done ? s(y.value) : i(y.value).then(u, c);
    }
    l((r = r.apply(t, e || [])).next());
  });
}
function xr(t, e) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, i, s, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = u(0), o.throw = u(1), o.return = u(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function u(l) {
    return function(y) {
      return c([l, y]);
    };
  }
  function c(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, l[0] && (n = 0)), n; ) try {
      if (r = 1, i && (s = l[0] & 2 ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done) return s;
      switch (i = 0, s && (l = [l[0] & 2, s.value]), l[0]) {
        case 0:
        case 1:
          s = l;
          break;
        case 4:
          return n.label++, { value: l[1], done: false };
        case 5:
          n.label++, i = l[1], l = [0];
          continue;
        case 7:
          l = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            n = 0;
            continue;
          }
          if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
            n.label = l[1];
            break;
          }
          if (l[0] === 6 && n.label < s[1]) {
            n.label = s[1], s = l;
            break;
          }
          if (s && n.label < s[2]) {
            n.label = s[2], n.ops.push(l);
            break;
          }
          s[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      l = e.call(t, n);
    } catch (y) {
      l = [6, y], i = 0;
    } finally {
      r = s = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: true };
  }
}
function Fe(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ot(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n) return t;
  var r = n.call(t), i, s = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) s.push(i.value);
  } catch (u) {
    o = { error: u };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}
function Ut(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, s; r < i; r++)
    (s || !(r in e)) && (s || (s = Array.prototype.slice.call(e, 0, r)), s[r] = e[r]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function Ne(t) {
  return this instanceof Ne ? (this.v = t, this) : new Ne(t);
}
function Ui(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, s = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(a) {
    return function(d) {
      return Promise.resolve(d).then(a, b);
    };
  }
  function u(a, d) {
    r[a] && (i[a] = function(f) {
      return new Promise(function(w, x) {
        s.push([a, f, w, x]) > 1 || c(a, f);
      });
    }, d && (i[a] = d(i[a])));
  }
  function c(a, d) {
    try {
      l(r[a](d));
    } catch (f) {
      m(s[0][3], f);
    }
  }
  function l(a) {
    a.value instanceof Ne ? Promise.resolve(a.value.v).then(y, b) : m(s[0][2], a);
  }
  function y(a) {
    c("next", a);
  }
  function b(a) {
    c("throw", a);
  }
  function m(a, d) {
    a(d), s.shift(), s.length && c(s[0][0], s[0][1]);
  }
}
function Ri(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Fe == "function" ? Fe(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(s) {
    n[s] = t[s] && function(o) {
      return new Promise(function(u, c) {
        o = t[s](o), i(u, c, o.done, o.value);
      });
    };
  }
  function i(s, o, u, c) {
    Promise.resolve(c).then(function(l) {
      s({ value: l, done: u });
    }, o);
  }
}
function H(t) {
  return typeof t == "function";
}
function Cn(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var xn = Cn(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Rt(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Te = (function() {
  function t(e) {
    this.initialTeardown = e, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, n, r, i, s;
    if (!this.closed) {
      this.closed = true;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var u = Fe(o), c = u.next(); !c.done; c = u.next()) {
              var l = c.value;
              l.remove(this);
            }
          } catch (f) {
            e = { error: f };
          } finally {
            try {
              c && !c.done && (n = u.return) && n.call(u);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          o.remove(this);
      var y = this.initialTeardown;
      if (H(y))
        try {
          y();
        } catch (f) {
          s = f instanceof xn ? f.errors : [f];
        }
      var b = this._finalizers;
      if (b) {
        this._finalizers = null;
        try {
          for (var m = Fe(b), a = m.next(); !a.done; a = m.next()) {
            var d = a.value;
            try {
              sr(d);
            } catch (f) {
              s = s ?? [], f instanceof xn ? s = Ut(Ut([], Ot(s)), Ot(f.errors)) : s.push(f);
            }
          }
        } catch (f) {
          r = { error: f };
        } finally {
          try {
            a && !a.done && (i = m.return) && i.call(m);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (s)
        throw new xn(s);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        sr(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(e);
      }
  }, t.prototype._hasParent = function(e) {
    var n = this._parentage;
    return n === e || Array.isArray(n) && n.includes(e);
  }, t.prototype._addParent = function(e) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(e), n) : n ? [n, e] : e;
  }, t.prototype._removeParent = function(e) {
    var n = this._parentage;
    n === e ? this._parentage = null : Array.isArray(n) && Rt(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && Rt(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = (function() {
    var e = new t();
    return e.closed = true, e;
  })(), t;
})();
var Ar = Te.EMPTY;
function Ir(t) {
  return t instanceof Te || t && "closed" in t && H(t.remove) && H(t.add) && H(t.unsubscribe);
}
function sr(t) {
  H(t) ? t() : t.unsubscribe();
}
var qi = {
  Promise: void 0
};
var Ci = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Ut([t, e], Ot(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function wr(t) {
  Ci.setTimeout(function() {
    throw t;
  });
}
function or() {
}
function Pt(t) {
  t();
}
var Wt = (function(t) {
  ie(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = false, n ? (r.destination = n, Ir(n) && n.add(r)) : r.destination = Ni, r;
  }
  return e.create = function(n, r, i) {
    return new On(n, r, i);
  }, e.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, e.prototype.error = function(n) {
    this.isStopped || (this.isStopped = true, this._error(n));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, t.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(n) {
    this.destination.next(n);
  }, e.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
})(Te);
var Mi = (function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        It(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        It(r);
      }
    else
      It(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        It(n);
      }
  }, t;
})();
var On = (function(t) {
  ie(e, t);
  function e(n, r, i) {
    var s = t.call(this) || this, o;
    return H(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, s.destination = new Mi(o), s;
  }
  return e;
})(Wt);
function It(t) {
  wr(t);
}
function Di(t) {
  throw t;
}
var Ni = {
  closed: true,
  next: or,
  error: Di,
  complete: or
};
var Mn = (function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
function Dn(t) {
  return t;
}
function Hi(t) {
  return t.length === 0 ? Dn : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var F = (function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, s = zi(e) ? e : new On(e, n, r);
    return Pt(function() {
      var o = i, u = o.operator, c = o.source;
      s.add(u ? u.call(s, c) : c ? i._subscribe(s) : i._trySubscribe(s));
    }), s;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var r = this;
    return n = ur(n), new n(function(i, s) {
      var o = new On({
        next: function(u) {
          try {
            e(u);
          } catch (c) {
            s(c), o.unsubscribe();
          }
        },
        error: s,
        complete: i
      });
      r.subscribe(o);
    });
  }, t.prototype._subscribe = function(e) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
  }, t.prototype[Mn] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Hi(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = ur(e), new e(function(r, i) {
      var s;
      n.subscribe(function(o) {
        return s = o;
      }, function(o) {
        return i(o);
      }, function() {
        return r(s);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
})();
function ur(t) {
  var e;
  return (e = t ?? qi.Promise) !== null && e !== void 0 ? e : Promise;
}
function Fi(t) {
  return t && H(t.next) && H(t.error) && H(t.complete);
}
function zi(t) {
  return t && t instanceof Wt || Fi(t) && Ir(t);
}
function ji(t) {
  return H(t?.lift);
}
function le(t) {
  return function(e) {
    if (ji(e))
      return e.lift(function(n) {
        try {
          return t(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function te(t, e, n, r, i) {
  return new Wi(t, e, n, r, i);
}
var Wi = (function(t) {
  ie(e, t);
  function e(n, r, i, s, o, u) {
    var c = t.call(this, n) || this;
    return c.onFinalize = o, c.shouldUnsubscribe = u, c._next = r ? function(l) {
      try {
        r(l);
      } catch (y) {
        n.error(y);
      }
    } : t.prototype._next, c._error = s ? function(l) {
      try {
        s(l);
      } catch (y) {
        n.error(y);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, c._complete = i ? function() {
      try {
        i();
      } catch (l) {
        n.error(l);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, c;
  }
  return e.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      t.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, e;
})(Wt);
var Li = Cn(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
});
var Pe = (function(t) {
  ie(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = false, n.currentObservers = null, n.observers = [], n.isStopped = false, n.hasError = false, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new Un(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Li();
  }, e.prototype.next = function(n) {
    var r = this;
    Pt(function() {
      var i, s;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var o = Fe(r.currentObservers), u = o.next(); !u.done; u = o.next()) {
            var c = u.value;
            c.next(n);
          }
        } catch (l) {
          i = { error: l };
        } finally {
          try {
            u && !u.done && (s = o.return) && s.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(n) {
    var r = this;
    Pt(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = true, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    Pt(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.isStopped = true;
        for (var r = n.observers; r.length; )
          r.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", {
    get: function() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    },
    enumerable: false,
    configurable: true
  }), e.prototype._trySubscribe = function(n) {
    return this._throwIfClosed(), t.prototype._trySubscribe.call(this, n);
  }, e.prototype._subscribe = function(n) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
  }, e.prototype._innerSubscribe = function(n) {
    var r = this, i = this, s = i.hasError, o = i.isStopped, u = i.observers;
    return s || o ? Ar : (this.currentObservers = null, u.push(n), new Te(function() {
      r.currentObservers = null, Rt(u, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, s = r.thrownError, o = r.isStopped;
    i ? n.error(s) : o && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new F();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new Un(n, r);
  }, e;
})(F);
var Un = (function(t) {
  ie(e, t);
  function e(n, r) {
    var i = t.call(this) || this;
    return i.destination = n, i.source = r, i;
  }
  return e.prototype.next = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || i === void 0 || i.call(r, n);
  }, e.prototype.error = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || i === void 0 || i.call(r, n);
  }, e.prototype.complete = function() {
    var n, r;
    (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n);
  }, e.prototype._subscribe = function(n) {
    var r, i;
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Ar;
  }, e;
})(Pe);
var ve = (function(t) {
  ie(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r._value = n, r;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: false,
    configurable: true
  }), e.prototype._subscribe = function(n) {
    var r = t.prototype._subscribe.call(this, n);
    return !r.closed && n.next(this._value), r;
  }, e.prototype.getValue = function() {
    var n = this, r = n.hasError, i = n.thrownError, s = n._value;
    if (r)
      throw i;
    return this._throwIfClosed(), s;
  }, e.prototype.next = function(n) {
    t.prototype.next.call(this, this._value = n);
  }, e;
})(Pe);
var Nn = {
  now: function() {
    return (Nn.delegate || Date).now();
  },
  delegate: void 0
};
var An = (function(t) {
  ie(e, t);
  function e(n, r, i) {
    n === void 0 && (n = 1 / 0), r === void 0 && (r = 1 / 0), i === void 0 && (i = Nn);
    var s = t.call(this) || this;
    return s._bufferSize = n, s._windowTime = r, s._timestampProvider = i, s._buffer = [], s._infiniteTimeWindow = true, s._infiniteTimeWindow = r === 1 / 0, s._bufferSize = Math.max(1, n), s._windowTime = Math.max(1, r), s;
  }
  return e.prototype.next = function(n) {
    var r = this, i = r.isStopped, s = r._buffer, o = r._infiniteTimeWindow, u = r._timestampProvider, c = r._windowTime;
    i || (s.push(n), !o && s.push(u.now() + c)), this._trimBuffer(), t.prototype.next.call(this, n);
  }, e.prototype._subscribe = function(n) {
    this._throwIfClosed(), this._trimBuffer();
    for (var r = this._innerSubscribe(n), i = this, s = i._infiniteTimeWindow, o = i._buffer, u = o.slice(), c = 0; c < u.length && !n.closed; c += s ? 1 : 2)
      n.next(u[c]);
    return this._checkFinalizedStatuses(n), r;
  }, e.prototype._trimBuffer = function() {
    var n = this, r = n._bufferSize, i = n._timestampProvider, s = n._buffer, o = n._infiniteTimeWindow, u = (o ? 1 : 2) * r;
    if (r < 1 / 0 && u < s.length && s.splice(0, s.length - u), !o) {
      for (var c = i.now(), l = 0, y = 1; y < s.length && s[y] <= c; y += 2)
        l = y;
      l && s.splice(0, l + 1);
    }
  }, e;
})(Pe);
var Bi = (function(t) {
  ie(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
})(Te);
var cr = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Ut([t, e], Ot(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
};
var Gi = (function(t) {
  ie(e, t);
  function e(n, r) {
    var i = t.call(this, n, r) || this;
    return i.scheduler = n, i.work = r, i.pending = false, i;
  }
  return e.prototype.schedule = function(n, r) {
    var i;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = n;
    var s = this.id, o = this.scheduler;
    return s != null && (this.id = this.recycleAsyncId(o, s, r)), this.pending = true, this.delay = r, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(o, this.id, r), this;
  }, e.prototype.requestAsyncId = function(n, r, i) {
    return i === void 0 && (i = 0), cr.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === false)
      return r;
    r != null && cr.clearInterval(r);
  }, e.prototype.execute = function(n, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = false;
    var i = this._execute(n, r);
    if (i)
      return i;
    this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(n, r) {
    var i = false, s;
    try {
      this.work(n);
    } catch (o) {
      i = true, s = o || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), s;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var n = this, r = n.id, i = n.scheduler, s = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = false, Rt(s, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
})(Bi);
var ar = (function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = Nn.now, t;
})();
var Vi = (function(t) {
  ie(e, t);
  function e(n, r) {
    r === void 0 && (r = ar.now);
    var i = t.call(this, n, r) || this;
    return i.actions = [], i._active = false, i;
  }
  return e.prototype.flush = function(n) {
    var r = this.actions;
    if (this._active) {
      r.push(n);
      return;
    }
    var i;
    this._active = true;
    do
      if (i = n.execute(n.state, n.delay))
        break;
    while (n = r.shift());
    if (this._active = false, i) {
      for (; n = r.shift(); )
        n.unsubscribe();
      throw i;
    }
  }, e;
})(ar);
var Pr = new Vi(Gi);
var Ki = Pr;
var Qi = new F(function(t) {
  return t.complete();
});
function Zi(t) {
  return t && H(t.schedule);
}
var Er = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Tr(t) {
  return H(t?.then);
}
function Or(t) {
  return H(t[Mn]);
}
function Ur(t) {
  return Symbol.asyncIterator && H(t?.[Symbol.asyncIterator]);
}
function Rr(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Yi() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var qr = Yi();
function Cr(t) {
  return H(t?.[qr]);
}
function Mr(t) {
  return Ui(this, arguments, function() {
    var n, r, i, s;
    return xr(this, function(o) {
      switch (o.label) {
        case 0:
          n = t.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Ne(n.read())];
        case 3:
          return r = o.sent(), i = r.value, s = r.done, s ? [4, Ne(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Ne(i)];
        case 6:
          return [4, o.sent()];
        case 7:
          return o.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return n.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Dr(t) {
  return H(t?.getReader);
}
function he(t) {
  if (t instanceof F)
    return t;
  if (t != null) {
    if (Or(t))
      return Ji(t);
    if (Er(t))
      return Xi(t);
    if (Tr(t))
      return es(t);
    if (Ur(t))
      return Nr(t);
    if (Cr(t))
      return ts(t);
    if (Dr(t))
      return ns(t);
  }
  throw Rr(t);
}
function Ji(t) {
  return new F(function(e) {
    var n = t[Mn]();
    if (H(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Xi(t) {
  return new F(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function es(t) {
  return new F(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, wr);
  });
}
function ts(t) {
  return new F(function(e) {
    var n, r;
    try {
      for (var i = Fe(t), s = i.next(); !s.done; s = i.next()) {
        var o = s.value;
        if (e.next(o), e.closed)
          return;
      }
    } catch (u) {
      n = { error: u };
    } finally {
      try {
        s && !s.done && (r = i.return) && r.call(i);
      } finally {
        if (n) throw n.error;
      }
    }
    e.complete();
  });
}
function Nr(t) {
  return new F(function(e) {
    rs(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function ns(t) {
  return Nr(Mr(t));
}
function rs(t, e) {
  var n, r, i, s;
  return Oi(this, void 0, void 0, function() {
    var o, u;
    return xr(this, function(c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), n = Ri(t), c.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = c.sent(), !!r.done) return [3, 4];
          if (o = r.value, e.next(o), e.closed)
            return [2];
          c.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return u = c.sent(), i = { error: u }, [3, 11];
        case 6:
          return c.trys.push([6, , 9, 10]), r && !r.done && (s = n.return) ? [4, s.call(n)] : [3, 8];
        case 7:
          c.sent(), c.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (i) throw i.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return e.complete(), [2];
      }
    });
  });
}
function Ie(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = false);
  var s = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(s), !i)
    return s;
}
function Hr(t, e) {
  return e === void 0 && (e = 0), le(function(n, r) {
    n.subscribe(te(r, function(i) {
      return Ie(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return Ie(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return Ie(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Fr(t, e) {
  return e === void 0 && (e = 0), le(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function is(t, e) {
  return he(t).pipe(Fr(e), Hr(e));
}
function ss(t, e) {
  return he(t).pipe(Fr(e), Hr(e));
}
function os(t, e) {
  return new F(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function us(t, e) {
  return new F(function(n) {
    var r;
    return Ie(n, e, function() {
      r = t[qr](), Ie(n, e, function() {
        var i, s, o;
        try {
          i = r.next(), s = i.value, o = i.done;
        } catch (u) {
          n.error(u);
          return;
        }
        o ? n.complete() : n.next(s);
      }, 0, true);
    }), function() {
      return H(r?.return) && r.return();
    };
  });
}
function zr(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new F(function(n) {
    Ie(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      Ie(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, true);
    });
  });
}
function cs(t, e) {
  return zr(Mr(t), e);
}
function as(t, e) {
  if (t != null) {
    if (Or(t))
      return is(t, e);
    if (Er(t))
      return os(t, e);
    if (Tr(t))
      return ss(t, e);
    if (Ur(t))
      return zr(t, e);
    if (Cr(t))
      return us(t, e);
    if (Dr(t))
      return cs(t, e);
  }
  throw Rr(t);
}
function ls(t, e) {
  return e ? as(t, e) : he(t);
}
function Lt(t, e) {
  var n = H(t) ? t : function() {
    return t;
  }, r = function(i) {
    return i.error(n());
  };
  return new F(r);
}
var hs = Cn(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function fs(t, e) {
  return new Promise(function(n, r) {
    var i = false, s;
    t.subscribe({
      next: function(o) {
        s = o, i = true;
      },
      error: r,
      complete: function() {
        i ? n(s) : r(new hs());
      }
    });
  });
}
function ps(t) {
  return t instanceof Date && !isNaN(t);
}
function _(t, e) {
  return le(function(n, r) {
    var i = 0;
    n.subscribe(te(r, function(s) {
      r.next(t.call(e, s, i++));
    }));
  });
}
function ds(t, e, n, r, i, s, o, u) {
  var c = [], l = 0, y = 0, b = false, m = function() {
    b && !c.length && !l && e.complete();
  }, a = function(f) {
    return l < r ? d(f) : c.push(f);
  }, d = function(f) {
    l++;
    var w = false;
    he(n(f, y++)).subscribe(te(e, function(x) {
      e.next(x);
    }, function() {
      w = true;
    }, void 0, function() {
      if (w)
        try {
          l--;
          for (var x = function() {
            var P = c.shift();
            o || d(P);
          }; c.length && l < r; )
            x();
          m();
        } catch (P) {
          e.error(P);
        }
    }));
  };
  return t.subscribe(te(e, a, function() {
    b = true, m();
  })), function() {
  };
}
function jr(t, e, n) {
  return n === void 0 && (n = 1 / 0), H(e) ? jr(function(r, i) {
    return _(function(s, o) {
      return e(r, s, i, o);
    })(he(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), le(function(r, i) {
    return ds(r, i, t, n);
  }));
}
function Hn(t, e, n) {
  t === void 0 && (t = 0), n === void 0 && (n = Ki);
  var r = -1;
  return e != null && (Zi(e) ? n = e : r = e), new F(function(i) {
    var s = ps(t) ? +t - n.now() : t;
    s < 0 && (s = 0);
    var o = 0;
    return n.schedule(function() {
      i.closed || (i.next(o++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, s);
  });
}
function _s(t, e) {
  return le(function(n, r) {
    var i = 0;
    n.subscribe(te(r, function(s) {
      return t.call(e, s, i++) && r.next(s);
    }));
  });
}
function Wr(t) {
  return t <= 0 ? function() {
    return Qi;
  } : le(function(e, n) {
    var r = 0;
    e.subscribe(te(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function ms(t) {
  return _(function() {
    return t;
  });
}
function ys(t, e) {
  return jr(function(n, r) {
    return he(t(n, r)).pipe(Wr(1), ms(n));
  });
}
function gs(t, e) {
  e === void 0 && (e = Pr);
  var n = Hn(t, e);
  return ys(function() {
    return n;
  });
}
function vs(t, e) {
  return e === void 0 && (e = Dn), t = t ?? bs, le(function(n, r) {
    var i, s = true;
    n.subscribe(te(r, function(o) {
      var u = e(o);
      (s || !t(i, u)) && (s = false, i = u, r.next(o));
    }));
  });
}
function bs(t, e) {
  return t === e;
}
function $s(t) {
  t === void 0 && (t = 1 / 0);
  var e;
  t && typeof t == "object" ? e = t : e = {
    count: t
  };
  var n = e.count, r = n === void 0 ? 1 / 0 : n, i = e.delay, s = e.resetOnSuccess, o = s === void 0 ? false : s;
  return r <= 0 ? Dn : le(function(u, c) {
    var l = 0, y, b = function() {
      var m = false;
      y = u.subscribe(te(c, function(a) {
        o && (l = 0), c.next(a);
      }, void 0, function(a) {
        if (l++ < r) {
          var d = function() {
            y ? (y.unsubscribe(), y = null, b()) : m = true;
          };
          if (i != null) {
            var f = typeof i == "number" ? Hn(i) : he(i(a, l)), w = te(c, function() {
              w.unsubscribe(), d();
            }, function() {
              c.complete();
            });
            f.subscribe(w);
          } else
            d();
        } else
          c.error(a);
      })), m && (y.unsubscribe(), y = null, b());
    };
    b();
  });
}
function lr(t, e) {
  return le(function(n, r) {
    var i = null, s = 0, o = false, u = function() {
      return o && !i && r.complete();
    };
    n.subscribe(te(r, function(c) {
      i?.unsubscribe();
      var l = 0, y = s++;
      he(t(c, y)).subscribe(i = te(r, function(b) {
        return r.next(e ? e(c, b, y, l++) : b);
      }, function() {
        i = null, u();
      }));
    }, function() {
      o = true, u();
    }));
  });
}
function Fn(t, e) {
  e === void 0 && (e = {});
  var n = e.selector, r = Ti(e, ["selector"]);
  return new F(function(i) {
    var s = new AbortController(), o = s.signal, u = true, c = r.signal;
    if (c)
      if (c.aborted)
        s.abort();
      else {
        var l = function() {
          o.aborted || s.abort();
        };
        c.addEventListener("abort", l), i.add(function() {
          return c.removeEventListener("abort", l);
        });
      }
    var y = nt(nt({}, r), { signal: o }), b = function(m) {
      u = false, i.error(m);
    };
    return fetch(t, y).then(function(m) {
      n ? he(n(m)).subscribe(te(i, void 0, function() {
        u = false, i.complete();
      }, b)) : (u = false, i.next(m), i.complete());
    }).catch(b), function() {
      u && s.abort();
    };
  });
}
var ae = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "/"
];
var hr = [
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  62,
  255,
  255,
  255,
  63,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  255,
  255,
  255,
  0,
  255,
  255,
  255,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  255,
  255,
  255,
  255,
  255,
  255,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51
];
function wt(t) {
  if (t >= hr.length)
    throw new Error("Unable to parse base64 string.");
  const e = hr[t];
  if (e === 255)
    throw new Error("Unable to parse base64 string.");
  return e;
}
function Lr(t) {
  let e = "", n, r = t.length;
  for (n = 2; n < r; n += 3)
    e += ae[t[n - 2] >> 2], e += ae[(t[n - 2] & 3) << 4 | t[n - 1] >> 4], e += ae[(t[n - 1] & 15) << 2 | t[n] >> 6], e += ae[t[n] & 63];
  return n === r + 1 && (e += ae[t[n - 2] >> 2], e += ae[(t[n - 2] & 3) << 4], e += "=="), n === r && (e += ae[t[n - 2] >> 2], e += ae[(t[n - 2] & 3) << 4 | t[n - 1] >> 4], e += ae[(t[n - 1] & 15) << 2], e += "="), e;
}
function Ss(t) {
  if (t.length % 4 !== 0)
    throw new Error("Unable to parse base64 string.");
  const e = t.indexOf("=");
  if (e !== -1 && e < t.length - 2)
    throw new Error("Unable to parse base64 string.");
  let n = t.endsWith("==") ? 2 : t.endsWith("=") ? 1 : 0, r = t.length, i = new Uint8Array(3 * (r / 4)), s;
  for (let o = 0, u = 0; o < r; o += 4, u += 3)
    s = wt(t.charCodeAt(o)) << 18 | wt(t.charCodeAt(o + 1)) << 12 | wt(t.charCodeAt(o + 2)) << 6 | wt(t.charCodeAt(o + 3)), i[u] = s >> 16, i[u + 1] = s >> 8 & 255, i[u + 2] = s & 255;
  return i.subarray(0, i.length - n);
}
function ks(t, e = new TextEncoder()) {
  return Lr(e.encode(t));
}
var Et = { exports: {} };
var xs = Et.exports;
var fr;
function As() {
  return fr || (fr = 1, (function(t) {
    (function(e, n) {
      var r = {};
      n(r);
      var i = r.default;
      for (var s in r)
        i[s] = r[s];
      t.exports = i;
    })(xs, function(e) {
      e.__esModule = true, e.digestLength = 32, e.blockSize = 64;
      var n = new Uint32Array([
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ]);
      function r(m, a, d, f, w) {
        for (var x, P, E, Q, z, M, se, j, G, W, Je, Xe, At; w >= 64; ) {
          for (x = a[0], P = a[1], E = a[2], Q = a[3], z = a[4], M = a[5], se = a[6], j = a[7], W = 0; W < 16; W++)
            Je = f + W * 4, m[W] = (d[Je] & 255) << 24 | (d[Je + 1] & 255) << 16 | (d[Je + 2] & 255) << 8 | d[Je + 3] & 255;
          for (W = 16; W < 64; W++)
            G = m[W - 2], Xe = (G >>> 17 | G << 15) ^ (G >>> 19 | G << 13) ^ G >>> 10, G = m[W - 15], At = (G >>> 7 | G << 25) ^ (G >>> 18 | G << 14) ^ G >>> 3, m[W] = (Xe + m[W - 7] | 0) + (At + m[W - 16] | 0);
          for (W = 0; W < 64; W++)
            Xe = (((z >>> 6 | z << 26) ^ (z >>> 11 | z << 21) ^ (z >>> 25 | z << 7)) + (z & M ^ ~z & se) | 0) + (j + (n[W] + m[W] | 0) | 0) | 0, At = ((x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10)) + (x & P ^ x & E ^ P & E) | 0, j = se, se = M, M = z, z = Q + Xe | 0, Q = E, E = P, P = x, x = Xe + At | 0;
          a[0] += x, a[1] += P, a[2] += E, a[3] += Q, a[4] += z, a[5] += M, a[6] += se, a[7] += j, f += 64, w -= 64;
        }
        return f;
      }
      var i = (
        /** @class */
        (function() {
          function m() {
            this.digestLength = e.digestLength, this.blockSize = e.blockSize, this.state = new Int32Array(8), this.temp = new Int32Array(64), this.buffer = new Uint8Array(128), this.bufferLength = 0, this.bytesHashed = 0, this.finished = false, this.reset();
          }
          return m.prototype.reset = function() {
            return this.state[0] = 1779033703, this.state[1] = 3144134277, this.state[2] = 1013904242, this.state[3] = 2773480762, this.state[4] = 1359893119, this.state[5] = 2600822924, this.state[6] = 528734635, this.state[7] = 1541459225, this.bufferLength = 0, this.bytesHashed = 0, this.finished = false, this;
          }, m.prototype.clean = function() {
            for (var a = 0; a < this.buffer.length; a++)
              this.buffer[a] = 0;
            for (var a = 0; a < this.temp.length; a++)
              this.temp[a] = 0;
            this.reset();
          }, m.prototype.update = function(a, d) {
            if (d === void 0 && (d = a.length), this.finished)
              throw new Error("SHA256: can't update because hash was finished.");
            var f = 0;
            if (this.bytesHashed += d, this.bufferLength > 0) {
              for (; this.bufferLength < 64 && d > 0; )
                this.buffer[this.bufferLength++] = a[f++], d--;
              this.bufferLength === 64 && (r(this.temp, this.state, this.buffer, 0, 64), this.bufferLength = 0);
            }
            for (d >= 64 && (f = r(this.temp, this.state, a, f, d), d %= 64); d > 0; )
              this.buffer[this.bufferLength++] = a[f++], d--;
            return this;
          }, m.prototype.finish = function(a) {
            if (!this.finished) {
              var d = this.bytesHashed, f = this.bufferLength, w = d / 536870912 | 0, x = d << 3, P = d % 64 < 56 ? 64 : 128;
              this.buffer[f] = 128;
              for (var E = f + 1; E < P - 8; E++)
                this.buffer[E] = 0;
              this.buffer[P - 8] = w >>> 24 & 255, this.buffer[P - 7] = w >>> 16 & 255, this.buffer[P - 6] = w >>> 8 & 255, this.buffer[P - 5] = w >>> 0 & 255, this.buffer[P - 4] = x >>> 24 & 255, this.buffer[P - 3] = x >>> 16 & 255, this.buffer[P - 2] = x >>> 8 & 255, this.buffer[P - 1] = x >>> 0 & 255, r(this.temp, this.state, this.buffer, 0, P), this.finished = true;
            }
            for (var E = 0; E < 8; E++)
              a[E * 4 + 0] = this.state[E] >>> 24 & 255, a[E * 4 + 1] = this.state[E] >>> 16 & 255, a[E * 4 + 2] = this.state[E] >>> 8 & 255, a[E * 4 + 3] = this.state[E] >>> 0 & 255;
            return this;
          }, m.prototype.digest = function() {
            var a = new Uint8Array(this.digestLength);
            return this.finish(a), a;
          }, m.prototype._saveState = function(a) {
            for (var d = 0; d < this.state.length; d++)
              a[d] = this.state[d];
          }, m.prototype._restoreState = function(a, d) {
            for (var f = 0; f < this.state.length; f++)
              this.state[f] = a[f];
            this.bytesHashed = d, this.finished = false, this.bufferLength = 0;
          }, m;
        })()
      );
      e.Hash = i;
      var s = (
        /** @class */
        (function() {
          function m(a) {
            this.inner = new i(), this.outer = new i(), this.blockSize = this.inner.blockSize, this.digestLength = this.inner.digestLength;
            var d = new Uint8Array(this.blockSize);
            if (a.length > this.blockSize)
              new i().update(a).finish(d).clean();
            else
              for (var f = 0; f < a.length; f++)
                d[f] = a[f];
            for (var f = 0; f < d.length; f++)
              d[f] ^= 54;
            this.inner.update(d);
            for (var f = 0; f < d.length; f++)
              d[f] ^= 106;
            this.outer.update(d), this.istate = new Uint32Array(8), this.ostate = new Uint32Array(8), this.inner._saveState(this.istate), this.outer._saveState(this.ostate);
            for (var f = 0; f < d.length; f++)
              d[f] = 0;
          }
          return m.prototype.reset = function() {
            return this.inner._restoreState(this.istate, this.inner.blockSize), this.outer._restoreState(this.ostate, this.outer.blockSize), this;
          }, m.prototype.clean = function() {
            for (var a = 0; a < this.istate.length; a++)
              this.ostate[a] = this.istate[a] = 0;
            this.inner.clean(), this.outer.clean();
          }, m.prototype.update = function(a) {
            return this.inner.update(a), this;
          }, m.prototype.finish = function(a) {
            return this.outer.finished ? this.outer.finish(a) : (this.inner.finish(a), this.outer.update(a, this.digestLength).finish(a)), this;
          }, m.prototype.digest = function() {
            var a = new Uint8Array(this.digestLength);
            return this.finish(a), a;
          }, m;
        })()
      );
      e.HMAC = s;
      function o(m) {
        var a = new i().update(m), d = a.digest();
        return a.clean(), d;
      }
      e.hash = o, e.default = o;
      function u(m, a) {
        var d = new s(m).update(a), f = d.digest();
        return d.clean(), f;
      }
      e.hmac = u;
      function c(m, a, d, f) {
        var w = f[0];
        if (w === 0)
          throw new Error("hkdf: cannot expand more");
        a.reset(), w > 1 && a.update(m), d && a.update(d), a.update(f), a.finish(m), f[0]++;
      }
      var l = new Uint8Array(e.digestLength);
      function y(m, a, d, f) {
        a === void 0 && (a = l), f === void 0 && (f = 32);
        for (var w = new Uint8Array([1]), x = u(a, m), P = new s(x), E = new Uint8Array(P.digestLength), Q = E.length, z = new Uint8Array(f), M = 0; M < f; M++)
          Q === E.length && (c(E, P, d, w), Q = 0), z[M] = E[Q++];
        return P.clean(), E.fill(0), w.fill(0), z;
      }
      e.hkdf = y;
      function b(m, a, d, f) {
        for (var w = new s(m), x = w.digestLength, P = new Uint8Array(4), E = new Uint8Array(x), Q = new Uint8Array(x), z = new Uint8Array(f), M = 0; M * x < f; M++) {
          var se = M + 1;
          P[0] = se >>> 24 & 255, P[1] = se >>> 16 & 255, P[2] = se >>> 8 & 255, P[3] = se >>> 0 & 255, w.reset(), w.update(a), w.update(P), w.finish(Q);
          for (var j = 0; j < x; j++)
            E[j] = Q[j];
          for (var j = 2; j <= d; j++) {
            w.reset(), w.update(Q).finish(Q);
            for (var G = 0; G < x; G++)
              E[G] ^= Q[G];
          }
          for (var j = 0; j < x && M * x + j < f; j++)
            z[M * x + j] = E[j];
        }
        for (var M = 0; M < x; M++)
          E[M] = Q[M] = 0;
        for (var M = 0; M < 4; M++)
          P[M] = 0;
        return w.clean(), z;
      }
      e.pbkdf2 = b;
    });
  })(Et)), Et.exports;
}
var Is = As();
var ws = new Int32Array(4);
var Z = class _Z {
  static hashStr(e, n = false) {
    return this.onePassHasher.start().appendStr(e).end(n);
  }
  static hashAsciiStr(e, n = false) {
    return this.onePassHasher.start().appendAsciiStr(e).end(n);
  }
  // Private Static Variables
  static stateIdentity = new Int32Array([
    1732584193,
    -271733879,
    -1732584194,
    271733878
  ]);
  static buffer32Identity = new Int32Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);
  static hexChars = "0123456789abcdef";
  static hexOut = [];
  // Permanent instance is to use for one-call hashing
  static onePassHasher = new _Z();
  static _hex(e) {
    const n = _Z.hexChars, r = _Z.hexOut;
    let i, s, o, u;
    for (u = 0; u < 4; u += 1)
      for (s = u * 8, i = e[u], o = 0; o < 8; o += 2)
        r[s + 1 + o] = n.charAt(i & 15), i >>>= 4, r[s + 0 + o] = n.charAt(i & 15), i >>>= 4;
    return r.join("");
  }
  static _md5cycle(e, n) {
    let r = e[0], i = e[1], s = e[2], o = e[3];
    r += (i & s | ~i & o) + n[0] - 680876936 | 0, r = (r << 7 | r >>> 25) + i | 0, o += (r & i | ~r & s) + n[1] - 389564586 | 0, o = (o << 12 | o >>> 20) + r | 0, s += (o & r | ~o & i) + n[2] + 606105819 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & r) + n[3] - 1044525330 | 0, i = (i << 22 | i >>> 10) + s | 0, r += (i & s | ~i & o) + n[4] - 176418897 | 0, r = (r << 7 | r >>> 25) + i | 0, o += (r & i | ~r & s) + n[5] + 1200080426 | 0, o = (o << 12 | o >>> 20) + r | 0, s += (o & r | ~o & i) + n[6] - 1473231341 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & r) + n[7] - 45705983 | 0, i = (i << 22 | i >>> 10) + s | 0, r += (i & s | ~i & o) + n[8] + 1770035416 | 0, r = (r << 7 | r >>> 25) + i | 0, o += (r & i | ~r & s) + n[9] - 1958414417 | 0, o = (o << 12 | o >>> 20) + r | 0, s += (o & r | ~o & i) + n[10] - 42063 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & r) + n[11] - 1990404162 | 0, i = (i << 22 | i >>> 10) + s | 0, r += (i & s | ~i & o) + n[12] + 1804603682 | 0, r = (r << 7 | r >>> 25) + i | 0, o += (r & i | ~r & s) + n[13] - 40341101 | 0, o = (o << 12 | o >>> 20) + r | 0, s += (o & r | ~o & i) + n[14] - 1502002290 | 0, s = (s << 17 | s >>> 15) + o | 0, i += (s & o | ~s & r) + n[15] + 1236535329 | 0, i = (i << 22 | i >>> 10) + s | 0, r += (i & o | s & ~o) + n[1] - 165796510 | 0, r = (r << 5 | r >>> 27) + i | 0, o += (r & s | i & ~s) + n[6] - 1069501632 | 0, o = (o << 9 | o >>> 23) + r | 0, s += (o & i | r & ~i) + n[11] + 643717713 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & r | o & ~r) + n[0] - 373897302 | 0, i = (i << 20 | i >>> 12) + s | 0, r += (i & o | s & ~o) + n[5] - 701558691 | 0, r = (r << 5 | r >>> 27) + i | 0, o += (r & s | i & ~s) + n[10] + 38016083 | 0, o = (o << 9 | o >>> 23) + r | 0, s += (o & i | r & ~i) + n[15] - 660478335 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & r | o & ~r) + n[4] - 405537848 | 0, i = (i << 20 | i >>> 12) + s | 0, r += (i & o | s & ~o) + n[9] + 568446438 | 0, r = (r << 5 | r >>> 27) + i | 0, o += (r & s | i & ~s) + n[14] - 1019803690 | 0, o = (o << 9 | o >>> 23) + r | 0, s += (o & i | r & ~i) + n[3] - 187363961 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & r | o & ~r) + n[8] + 1163531501 | 0, i = (i << 20 | i >>> 12) + s | 0, r += (i & o | s & ~o) + n[13] - 1444681467 | 0, r = (r << 5 | r >>> 27) + i | 0, o += (r & s | i & ~s) + n[2] - 51403784 | 0, o = (o << 9 | o >>> 23) + r | 0, s += (o & i | r & ~i) + n[7] + 1735328473 | 0, s = (s << 14 | s >>> 18) + o | 0, i += (s & r | o & ~r) + n[12] - 1926607734 | 0, i = (i << 20 | i >>> 12) + s | 0, r += (i ^ s ^ o) + n[5] - 378558 | 0, r = (r << 4 | r >>> 28) + i | 0, o += (r ^ i ^ s) + n[8] - 2022574463 | 0, o = (o << 11 | o >>> 21) + r | 0, s += (o ^ r ^ i) + n[11] + 1839030562 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ r) + n[14] - 35309556 | 0, i = (i << 23 | i >>> 9) + s | 0, r += (i ^ s ^ o) + n[1] - 1530992060 | 0, r = (r << 4 | r >>> 28) + i | 0, o += (r ^ i ^ s) + n[4] + 1272893353 | 0, o = (o << 11 | o >>> 21) + r | 0, s += (o ^ r ^ i) + n[7] - 155497632 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ r) + n[10] - 1094730640 | 0, i = (i << 23 | i >>> 9) + s | 0, r += (i ^ s ^ o) + n[13] + 681279174 | 0, r = (r << 4 | r >>> 28) + i | 0, o += (r ^ i ^ s) + n[0] - 358537222 | 0, o = (o << 11 | o >>> 21) + r | 0, s += (o ^ r ^ i) + n[3] - 722521979 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ r) + n[6] + 76029189 | 0, i = (i << 23 | i >>> 9) + s | 0, r += (i ^ s ^ o) + n[9] - 640364487 | 0, r = (r << 4 | r >>> 28) + i | 0, o += (r ^ i ^ s) + n[12] - 421815835 | 0, o = (o << 11 | o >>> 21) + r | 0, s += (o ^ r ^ i) + n[15] + 530742520 | 0, s = (s << 16 | s >>> 16) + o | 0, i += (s ^ o ^ r) + n[2] - 995338651 | 0, i = (i << 23 | i >>> 9) + s | 0, r += (s ^ (i | ~o)) + n[0] - 198630844 | 0, r = (r << 6 | r >>> 26) + i | 0, o += (i ^ (r | ~s)) + n[7] + 1126891415 | 0, o = (o << 10 | o >>> 22) + r | 0, s += (r ^ (o | ~i)) + n[14] - 1416354905 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~r)) + n[5] - 57434055 | 0, i = (i << 21 | i >>> 11) + s | 0, r += (s ^ (i | ~o)) + n[12] + 1700485571 | 0, r = (r << 6 | r >>> 26) + i | 0, o += (i ^ (r | ~s)) + n[3] - 1894986606 | 0, o = (o << 10 | o >>> 22) + r | 0, s += (r ^ (o | ~i)) + n[10] - 1051523 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~r)) + n[1] - 2054922799 | 0, i = (i << 21 | i >>> 11) + s | 0, r += (s ^ (i | ~o)) + n[8] + 1873313359 | 0, r = (r << 6 | r >>> 26) + i | 0, o += (i ^ (r | ~s)) + n[15] - 30611744 | 0, o = (o << 10 | o >>> 22) + r | 0, s += (r ^ (o | ~i)) + n[6] - 1560198380 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~r)) + n[13] + 1309151649 | 0, i = (i << 21 | i >>> 11) + s | 0, r += (s ^ (i | ~o)) + n[4] - 145523070 | 0, r = (r << 6 | r >>> 26) + i | 0, o += (i ^ (r | ~s)) + n[11] - 1120210379 | 0, o = (o << 10 | o >>> 22) + r | 0, s += (r ^ (o | ~i)) + n[2] + 718787259 | 0, s = (s << 15 | s >>> 17) + o | 0, i += (o ^ (s | ~r)) + n[9] - 343485551 | 0, i = (i << 21 | i >>> 11) + s | 0, e[0] = r + e[0] | 0, e[1] = i + e[1] | 0, e[2] = s + e[2] | 0, e[3] = o + e[3] | 0;
  }
  _dataLength = 0;
  _bufferLength = 0;
  _state = new Int32Array(4);
  _buffer = new ArrayBuffer(68);
  _buffer8;
  _buffer32;
  constructor() {
    this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start();
  }
  /**
   * Initialise buffer to be hashed
   */
  start() {
    return this._dataLength = 0, this._bufferLength = 0, this._state.set(_Z.stateIdentity), this;
  }
  // Char to code point to to array conversion:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
  /**
   * Append a UTF-8 string to the hash buffer
   * @param str String to append
   */
  appendStr(e) {
    const n = this._buffer8, r = this._buffer32;
    let i = this._bufferLength, s, o;
    for (o = 0; o < e.length; o += 1) {
      if (s = e.charCodeAt(o), s < 128)
        n[i++] = s;
      else if (s < 2048)
        n[i++] = (s >>> 6) + 192, n[i++] = s & 63 | 128;
      else if (s < 55296 || s > 56319)
        n[i++] = (s >>> 12) + 224, n[i++] = s >>> 6 & 63 | 128, n[i++] = s & 63 | 128;
      else {
        if (s = (s - 55296) * 1024 + (e.charCodeAt(++o) - 56320) + 65536, s > 1114111)
          throw new Error(
            "Unicode standard supports code points up to U+10FFFF"
          );
        n[i++] = (s >>> 18) + 240, n[i++] = s >>> 12 & 63 | 128, n[i++] = s >>> 6 & 63 | 128, n[i++] = s & 63 | 128;
      }
      i >= 64 && (this._dataLength += 64, _Z._md5cycle(this._state, r), i -= 64, r[0] = r[16]);
    }
    return this._bufferLength = i, this;
  }
  /**
   * Append an ASCII string to the hash buffer
   * @param str String to append
   */
  appendAsciiStr(e) {
    const n = this._buffer8, r = this._buffer32;
    let i = this._bufferLength, s, o = 0;
    for (; ; ) {
      for (s = Math.min(e.length - o, 64 - i); s--; )
        n[i++] = e.charCodeAt(o++);
      if (i < 64)
        break;
      this._dataLength += 64, _Z._md5cycle(this._state, r), i = 0;
    }
    return this._bufferLength = i, this;
  }
  /**
   * Append a byte array to the hash buffer
   * @param input array to append
   */
  appendByteArray(e) {
    const n = this._buffer8, r = this._buffer32;
    let i = this._bufferLength, s, o = 0;
    for (; ; ) {
      for (s = Math.min(e.length - o, 64 - i); s--; )
        n[i++] = e[o++];
      if (i < 64)
        break;
      this._dataLength += 64, _Z._md5cycle(this._state, r), i = 0;
    }
    return this._bufferLength = i, this;
  }
  /**
   * Get the state of the hash buffer
   */
  getState() {
    const e = this._state;
    return {
      buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
      buflen: this._bufferLength,
      length: this._dataLength,
      state: [e[0], e[1], e[2], e[3]]
    };
  }
  /**
   * Override the current state of the hash buffer
   * @param state New hash buffer state
   */
  setState(e) {
    const n = e.buffer, r = e.state, i = this._state;
    let s;
    for (this._dataLength = e.length, this._bufferLength = e.buflen, i[0] = r[0], i[1] = r[1], i[2] = r[2], i[3] = r[3], s = 0; s < n.length; s += 1)
      this._buffer8[s] = n.charCodeAt(s);
  }
  /**
   * Hash the current state of the hash buffer and return the result
   * @param raw Whether to return the value as an `Int32Array`
   */
  end(e = false) {
    const n = this._bufferLength, r = this._buffer8, i = this._buffer32, s = (n >> 2) + 1;
    this._dataLength += n;
    const o = this._dataLength * 8;
    if (r[n] = 128, r[n + 1] = r[n + 2] = r[n + 3] = 0, i.set(_Z.buffer32Identity.subarray(s), s), n > 55 && (_Z._md5cycle(this._state, i), i.set(_Z.buffer32Identity)), o <= 4294967295)
      i[14] = o;
    else {
      const u = o.toString(16).match(/(.*?)(.{0,8})$/);
      if (u === null) return e ? ws : "";
      const c = parseInt(u[2], 16), l = parseInt(u[1], 16) || 0;
      i[14] = c, i[15] = l;
    }
    return _Z._md5cycle(this._state, i), e ? this._state : _Z._hex(this._state);
  }
};
if (Z.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592")
  throw new Error("Md5 self test failed.");
var Ps = 36e5;
var pr = Symbol.for("constructDateFrom");
function qt(t, e) {
  return typeof t == "function" ? t(e) : t && typeof t == "object" && pr in t ? t[pr](e) : t instanceof Date ? new t.constructor(e) : new Date(e);
}
function rt(t, e) {
  return qt(t, t);
}
function Es(t, e, n) {
  const r = rt(t);
  if (isNaN(e)) return qt(t, NaN);
  const i = r.getDate(), s = qt(t, r.getTime());
  s.setMonth(r.getMonth() + e + 1, 0);
  const o = s.getDate();
  return i >= o ? s : (r.setFullYear(
    s.getFullYear(),
    s.getMonth(),
    i
  ), r);
}
function Br(t, e, n) {
  return qt(t, +rt(t) + e);
}
function Ts(t, e, n) {
  return Br(t, e * Ps);
}
function Os(t, e, n) {
  return Br(t, e * 1e3);
}
function Us(t, e, n) {
  return Es(t, e * 12);
}
function Rs(t, e) {
  return +rt(t) < +rt(e);
}
function p(t, e, n, r = "debug", i) {
  if (window.debug) {
    const o = ["color: #0288D1", `color:${i || "#009688"}`, "color: default"];
    n ? _r() ? console[r](
      `%c[PlaceOS]%c[${t}] %c${e}`,
      ...o,
      n
    ) : console[r](`[PlaceOS][${t}] ${e}`, n) : _r() ? console[r](`%c[PlaceOS]%c[${t}] %c${e}`, ...o) : console[r](`[PlaceOS][${t}] ${e}`);
  }
}
function _r() {
  return !(document.documentMode || /Edge/.test(navigator.userAgent));
}
function Gr() {
  const t = window.location?.hash ? window.location?.hash.slice(1) : window.location?.href.split("#")[1] || "";
  let e = window.location?.search ? window.location?.search.slice(1) : window.location?.href.split("?")[1] || "", n = {};
  if (t)
    if (t.indexOf("?") >= 0) {
      const i = t.split("?");
      n = et(i[0]), e || (e = i[1]);
    } else
      n = et(t);
  let r = {};
  return e && (r = et(e)), __spreadValues(__spreadValues({}, n), r);
}
function et(t) {
  const e = {}, n = t.split("&");
  for (const r of n) {
    const i = r.split("=");
    i[1] && (e[decodeURIComponent(i[0])] = decodeURIComponent(
      i[1]
    ));
  }
  return e;
}
var mr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function qs(t = 40) {
  let e = "";
  for (let n = 0; n < t; n++)
    e += mr.charAt(
      Math.floor(Math.random() * mr.length)
    );
  return e;
}
function xe(t) {
  const e = (window.location?.hash || "").replace(new RegExp(`${t}[a-zA-Z0-9_+-.%=]*&?`, "g"), "").replace(/&&/g, "&").replace(/#&/g, "#").replace(/&$/g, "#"), n = (window.location?.search || "").replace(new RegExp(`${t}[a-zA-Z0-9_+-.%=]*&?`, "g"), "").replace(/&&/g, "&").replace(/\?&/g, "#").replace(/&$/g, "#");
  window.history?.replaceState && window.history?.replaceState(
    null,
    "",
    `${window.location?.pathname}${e}${n}`
  );
}
function Ct(t, e = false) {
  const n = e ? 1e3 : 1024;
  if (t < n)
    return t + (e ? " iB" : " B");
  const r = Math.floor(Math.log(t) / Math.log(n)), i = (e ? "kMGTPE" : "KMGTPE").charAt(r - 1) + (e ? "iB" : "B");
  return (t / Math.pow(n, r)).toFixed(2) + " " + i;
}
function Cs(t) {
  if (t.length === 0)
    throw new Error("Input must not be of zero length");
  const e = t.split(","), n = {};
  for (const r of e) {
    const i = r.split(";");
    if (i.length !== 2)
      throw new Error("Section could not be split on ';'");
    const s = i[0].replace(/<(.*)>/, "$1").trim(), o = i[1].replace(/rel="(.*)"/, "$1").trim();
    n[o] = s;
  }
  return n;
}
function Ms(t, e) {
  for (const n in t)
    t.hasOwnProperty(n) && e.indexOf(t[n]) >= 0 && delete t[n];
  return t;
}
function Ds() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function Ns() {
  return window.location !== window.parent.location;
}
function Hs(t = Date.now(), e = 60 * 1e3) {
  return Math.floor(t / e);
}
var Fs = class {
  abort() {
    p("Stub", "Aborted");
  }
};
function I(t) {
  let e = "";
  if (t)
    for (const n in t)
      t.hasOwnProperty(n) && t[n] !== void 0 && t[n] !== null && (e += `${e ? "&" : ""}${n}=${encodeURIComponent(
        t[n]
      )}`);
  return e;
}
var we = {};
function oe(t, e, n = 300) {
  if (t && e && e instanceof Function)
    Oe(t), we[t] = setTimeout(() => {
      e(), delete we[t];
    }, n);
  else
    throw new Error(
      t ? "Cannot create named timeout without a name" : "Cannot create a timeout without a callback"
    );
}
function Oe(t) {
  we[t] && (clearTimeout(we[t]), delete we[t]);
}
var Ls = {
  id: "mock-authority",
  name: "localhost:4200",
  description: "",
  domain: "localhost:4200",
  login_url: "/login?continue={{url}}",
  logout_url: "/logout",
  session: true,
  production: false,
  config: {},
  version: "2.0.0"
};
var $ = {};
var q = localStorage;
var L;
var A = {};
var C = "";
var Ee = "";
var ze = new ve("");
var Bt = new ve("");
var zn = "/api/engine/v2";
var ge = new ve(false);
var Bs = ge.asObservable();
var Mt = 0;
function Vr(t) {
  if (!t || t.startsWith("http://") || t.startsWith("https://"))
    return t;
  const e = L?.domain;
  return e ? `${$.secure || window.location?.protocol.indexOf("https") >= 0 ? "https:" : "http:"}//${e}${t}` : t;
}
function h() {
  return `${`${$.secure || window.location?.protocol.indexOf("https") >= 0 ? "https:" : "http:"}//${$.host || window.location?.host}`}${Kr()}`;
}
function Kr() {
  return $.version === "ACA Engine" ? "/control/api" : zn;
}
function Gs() {
  return !!$.token_header;
}
function Vs() {
  return C;
}
function vu(t, e = true) {
  q.setItem(`${C}_x-api-key`, `${t}`), q.setItem("trusted", `${e}`), Ks("x-api-key", Us(/* @__PURE__ */ new Date(), 5).valueOf());
}
function Gt() {
  return Nt("x-api-key", false) || "";
}
function Ks(t, e = Ts(/* @__PURE__ */ new Date(), 2).valueOf()) {
  $.ignore_api_key && t === "x-api-key" || (q.setItem(`${C}_expires_at`, `${e}`), q.setItem(`${C}_access_token`, t));
}
function ee(t = true) {
  if ($.mock) return "mock-token";
  if (!q) return "";
  if (Gt() && !$.ignore_api_key) return "x-api-key";
  const e = q.getItem(`${C}_expires_at`) || "", n = ze.getValue();
  return Rs(+e, /* @__PURE__ */ new Date()) && (p("Auth", "Token expired. Requesting new token..."), Ln(), A.load_authority || (Mt += 1, oe(
    "re-authorise",
    async () => {
      delete A.authorise, await Yr().catch(
        (r) => p("Auth", `Failed to get token: ${r}`)
      );
    },
    200 * Math.min(20, Mt)
  )), !t) ? "" : n || q.getItem(`${C}_access_token`) || "";
}
function Rn() {
  return Bt.getValue() || q.getItem(`${C}_refresh_token`) || "";
}
function qn() {
  return $.host || window.location?.host;
}
function Qs() {
  return !!ee();
}
function Zs() {
  return ze.pipe(_((t) => !!Qs()));
}
function Dt() {
  return L;
}
function bu() {
  return ge.getValue();
}
function jn() {
  return !!$.mock;
}
function Ys() {
  return !!$.secure;
}
function $u() {
  return Bs;
}
function Wn() {
  return Nt("trust") === "true" || Nt("trusted") === "true";
}
function Qr() {
  return !!Gt() && !$.ignore_api_key || Nt("fixed_device") === "true";
}
function Nt(t, e = true) {
  let r = Gr()[t];
  if (q) {
    const i = `${Vs()}_${t}`;
    r = r || q.getItem(i) || q.getItem(t) || "", e && q.setItem(i, `${r}`);
  }
  return r;
}
async function Su(t) {
  return $ = t || $, $.token_header = $.token_header ?? Ns(), window.AbortController || (window.AbortController = Fs), q = $.storage === "session" ? sessionStorage : localStorage, C = Z.hashStr($.redirect_uri, false), $.delay && $.delay > 0 && await fs(Hn($.delay)), Bn();
}
function Zr() {
  return p("Auth", "Refreshing authorty."), L = void 0, Bn();
}
function Ln() {
  p("Auth", "Invalidating tokens."), q.removeItem(`${C}_access_token`), q.removeItem(`${C}_expires_at`), ze.getValue() && ze.next("");
}
function Yr(t, e = L) {
  return A.authorise || (A.authorise = new Promise((n, r) => {
    if (!e)
      return delete A.authorise, r("Authority is not loaded");
    p("Auth", "Authorising user...");
    const i = () => {
      if (ee(false))
        p("Auth", "Valid token found."), delete A.authorise, n(ee());
      else {
        const s = [
          () => {
            p("Auth", "Successfully generated token."), n(ee()), delete A.authorise;
          },
          () => {
            p("Auth", "Failed to generate token."), r("Failed to generate token"), setTimeout(() => delete A.authorise, 200);
          }
        ];
        $ && $.auth_type === "password" ? (p("Auth", "Logging in with credentials."), oo($).then(
          ...s
        ), Mt = 0) : Ee || Rn() ? (p(
          "Auth",
          `Generating token with ${Ee ? "code" : "refresh token"}`
        ), Xr().then(...s), Mt = 0) : e.session ? (p(
          "Auth",
          "Users has session. Authorising application..."
        ), Js(t).then(...s)) : (p("Auth", "No user session"), Jr(e), r("No user session"), setTimeout(() => delete A.authorise, 200));
      }
    };
    eo().then(i, i);
  })), A.authorise;
}
function Au() {
  const t = Vr(
    L ? L.logout_url : "/logout"
  );
  fetch(t, {
    method: "GET",
    redirect: "manual",
    headers: {
      Authorization: "Bearer " + ee()
    }
  }).then((e) => {
    const n = e.headers.get("Location") || t;
    for (let r = 0; r < q.length; r++) {
      const i = q.key(r);
      i && i.indexOf(C) >= 0 && q.removeItem(i);
    }
    window.location?.assign(n);
  });
}
function Bn(t = 0) {
  return A.load_authority || (A.load_authority = new Promise((e) => {
    if (ge.next(false), $.mock) {
      L = Ls, p("Auth", "System in mock mode"), ge.next(true), e();
      return;
    }
    p("Auth", `Fixed: ${Qr()} | Trusted: ${Wn()}`), p("Auth", "Loading authority...");
    const n = $.secure || window.location?.protocol.indexOf("https") >= 0, r = (i) => {
      p("Auth", `Failed to load authority(${i})`), ge.next(false), oe(
        "load_authority",
        () => {
          delete A.load_authority, Bn(t).then((s) => e());
        },
        300 * Math.min(20, ++t)
      );
    };
    Fn(
      `${n ? "https:" : "http:"}//${qn()}/auth/authority`,
      {
        credentials: "same-origin"
      }
    ).subscribe(async (i) => {
      if (!i.ok)
        return r(await i.text().catch((o) => o));
      L = await i.json(), zn = /[2-9]\.[0-9]+\.[0-9]+/g.test(
        L.version || ""
      ) ? "/api/engine/v2" : "/control/api", p("Auth", "Loaded authority.", [], "group"), L && (p("Auth", `Name: ${L.name}`), p("Auth", `Version: ${L.version}`), p("Auth", `Domain: ${L.domain}`), p("Auth", `Session: ${L.session}`), p("Auth", `Production: ${L.production}`), p(
        "Auth",
        `Config Keys: ${Object.keys(L.config || {}).length}`
      )), p("Auth", "", [], "groupEnd");
      const s = () => {
        ge.next(true), p("Auth", "Application set online."), e();
      };
      delete A.load_authority, Yr("").then(s, s);
    }, r);
  })), A.load_authority;
}
async function Js(t) {
  const e = no(t);
  if ($.use_iframe)
    return Xs(e);
  window.location?.assign(e);
}
function Xs(t) {
  return A.iframe_auth || (A.iframe_auth = new Promise((e, n) => {
    p("Auth", "Authorizing in an iFrame...");
    const r = document.createElement("iframe");
    r.style.position = "absolute", r.style.top = "0", r.style.left = "0", r.style.height = "1px", r.style.width = "1px", r.style.zIndex = "-1", r.id = "place-authorize", r.src = `${t}`;
    const i = (s) => {
      if (s.origin === window.location?.origin && s.data.type === "place-os") {
        const o = s.data;
        if (p("Auth", "Received credentials from iFrame..."), document.body.removeChild(r), Oe("iframe_auth"), window.removeEventListener("message", i), delete A.iframe_auth, o.token)
          return e(), Gn(__spreadValues({
            access_token: o.token
          }, o));
        Ee = o.code || "", Xr().then(
          (u) => e(u),
          (u) => n(u)
        );
      }
    };
    oe(
      "iframe_auth",
      () => {
        p("Auth", "Unable to resolve iFrame after 15 seconds..."), n();
      },
      15 * 1e3
    ), window.addEventListener("message", i), r.onerror = (s) => {
      p("Auth", "iFrame error.", s), delete A.iframe_auth, n();
    }, document.body.appendChild(r);
  })), A.iframe_auth;
}
var yr = false;
function Jr(t) {
  if ($.handle_login !== false && !yr) {
    p("Auth", "Redirecting to login page...");
    const e = Vr(
      t.login_url?.replace(
        "{{url}}",
        encodeURIComponent(window.location?.href)
      )
    );
    throw setTimeout(() => window.location?.assign(e), 300), yr = true, new Error("Redirecting to login page...");
  } else
    p("Auth", "Login being handled locally.");
  delete A.authorise;
}
function eo() {
  return A.check_token || (A.check_token = new Promise(async (t, e) => {
    ee() ? (p("Auth", "Valid token found."), t(ee())) : (p("Auth", "No token. Checking URL for auth credentials..."), await to() ? t(true) : e()), delete A.check_token;
  })), A.check_token;
}
function to() {
  return A.check_params || (A.check_params = new Promise((t) => {
    p("Auth", "Checking for auth parameters...");
    let e = Gr();
    if ((!e || Object.keys(e).length <= 0) && sessionStorage && (e = JSON.parse(
      sessionStorage.getItem("ENGINE.auth.params") || "{}"
    )), e && (e.code || e.access_token || e.refresh_token)) {
      e.code && (Ee = e.code, xe("code")), e.refresh_token && (q.setItem(
        `${C}_refresh_token`,
        e.refresh_token
      ), xe("refresh_token"));
      const n = q.getItem(`${C}_nonce`) || "", r = (e.state || "").split(";");
      xe("state"), xe("token_type");
      const i = r[0];
      n === i ? (Gn(e), t(!!e.access_token)) : t(false);
    } else
      t(false);
    oe(
      "check_params_promise",
      () => delete A.check_params,
      50
    );
  })), A.check_params;
}
function no(t) {
  const e = uo();
  t = t ? `${e};${t}` : e;
  const n = $ ? ($.auth_uri || "").indexOf("?") >= 0 : false, r = ($ ? $.auth_uri : null) || "/auth/oauth/authorize", i = Wn() || $.auth_type === "auth_code" ? "code" : "token";
  let s = `${r}${n ? "&" : "?"}response_type=${encodeURIComponent(i)}&client_id=${encodeURIComponent(C)}&state=${encodeURIComponent(t)}&redirect_uri=${encodeURIComponent($.redirect_uri)}&scope=${encodeURIComponent($.scope)}`;
  if ($.auth_type === "auth_code") {
    const { challenge: o, verify: u } = ro();
    sessionStorage.setItem(`${C}_challenge`, o), s += "&code_challenge_method=S256", s += `&code_challenge=${u}`;
  }
  return s;
}
var gr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
function ro(t = 43) {
  const e = new Array(t).fill(0).map(
    () => gr[Math.floor(Math.random() * gr.length)]
  ).join(""), n = Ss(ks(e)), r = Lr(Is.hash(n)).split("=")[0].replace(/\//g, "_").replace(/\+/g, "-");
  return { challenge: e, verify: r };
}
function io() {
  let e = ($.token_uri || "/auth/token") + `?client_id=${encodeURIComponent(C)}`, n = "";
  if (e += `&redirect_uri=${encodeURIComponent($.redirect_uri)}`, Rn()) {
    e += `&refresh_token=${encodeURIComponent(Rn())}`, e += "&grant_type=refresh_token";
    const r = e.split("?");
    e = r[0], n = r[1];
  } else {
    e += `&code=${encodeURIComponent(Ee)}`, e += "&grant_type=authorization_code";
    const r = sessionStorage.getItem(`${C}_challenge`);
    r && (e += `&code_verifier=${r}`, sessionStorage.removeItem(`${C}_challenge`)), Ee = "";
  }
  return [e, n];
}
function so(t) {
  const e = t.token_uri || "/auth/token", n = I({
    grant_type: "password",
    client_id: C,
    client_secret: t.client_secret,
    redirect_uri: t.redirect_uri,
    authority: L?.id,
    scope: t.scope,
    username: t.username,
    password: t.password
  });
  return `${e}?${n}`;
}
function Xr() {
  return ei(...io());
}
function oo(t) {
  return ei(so(t));
}
function ei(t, e = "") {
  return A.generate_tokens || (A.generate_tokens = new Promise((n, r) => {
    p("Auth", "Generating new token...");
    const i = (s) => {
      p("Auth", "Error generating new tokens.", s), q.removeItem(`${C}_refresh_token`), Bt.next(""), r(), delete A.generate_tokens;
    };
    Fn(t, {
      method: "POST",
      body: e,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).subscribe(async (s) => {
      if (!s.ok) return i(s);
      const o = await s.json();
      Gn(o), n(), delete A.generate_tokens;
    }, i);
  })), A.generate_tokens;
}
function Gn(t) {
  const e = Os(
    /* @__PURE__ */ new Date(),
    Math.max(60, parseInt(t.expires_in, 10) - 300)
  );
  p("Auth", "Tokens generated storing..."), Wn() && (t.access_token && (q.setItem(
    `${C}_access_token`,
    t.access_token
  ), xe("access_token")), t.refresh_token && (q.setItem(
    `${C}_refresh_token`,
    t.refresh_token
  ), xe("refresh_token"))), t.expires_in && (q.setItem(`${C}_expires_at`, `${e.valueOf()}`), xe("expires_in")), ge.next(true), ze.next(t.access_token || ""), Bt.next(t.refresh_token || "");
}
function uo() {
  const t = qs();
  return q.setItem(`${C}_nonce`, t), t;
}
var Vt = {};
var ti = (t, e) => {
  const n = new Error(`Mock endpoint not found: ${t} ${e}`);
  return n.status = 404, p("HTTP(M)", `404 ${t}:`, e), Lt(n);
};
function wu(t, e = Vt) {
  co(t.method, t.path, e);
  const n = `${t.method}|${t.path}`, r = t.path.replace(/(http|https):\/\/[a-zA-Z0-9.-]*:?([0-9]*)?/g, "").replace(/^\//, "").split("/"), i = __spreadProps(__spreadValues({}, t), {
    path_parts: r,
    path_structure: r.map(
      (s) => s[0] === ":" ? s.replace(":", "") : ""
    )
  });
  e[n] = i, p("HTTP(M)", `+ ${t.method} ${t.path}`);
}
function co(t, e, n = Vt) {
  const r = `${t}|${e}`;
  n[r] && (delete n[r], p("HTTP(M)", `- ${t} ${e}`));
}
function ao(t, e, n, r = Vt) {
  const i = lo(t, e, r);
  if (i) {
    const s = ho(e, i, n);
    return fo(i, s);
  }
  try {
    return ti(t, e);
  } catch (s) {
    return p("HTTP(M)", `ERROR ${t}:`, [e, s]), Lt(s);
  }
}
function lo(t, e, n = Vt) {
  const i = e.replace(/(http|https):\/\/[a-zA-Z0-9.-]*:?([0-9]*)?/g, "").replace(/^\//, "").split("?")[0].split("/"), s = Object.keys(
    n
  ).reduce((o, u) => (u.indexOf(`${t}|`) === 0 && o.push(n[u]), o), []);
  for (const o of s)
    if (o.path_structure.length === i.length) {
      let u = true;
      for (let c = 0; c < o.path_structure.length; c++)
        if (!o.path_structure[c] && o.path_parts[c] !== i[c]) {
          u = false;
          break;
        }
      if (u)
        return o;
    }
  return null;
}
function ho(t, e, n) {
  const r = t.replace(/(http|https):\/\/[a-zA-Z0-9.-]*:?([0-9]*)?/g, "").split("?"), i = r[0].replace(/^\//, ""), s = r[1] || "", o = et(s), u = i.split("/"), c = {};
  for (let y = 0; y < e.path_structure.length; y++) {
    const b = e.path_structure[y];
    b && (c[b] = u[y]);
  }
  const l = {
    url: t,
    path: e.path,
    method: e.method,
    metadata: e.metadata,
    route_params: c,
    query_params: o,
    body: n
  };
  return p("HTTP(M)", `MATCHED ${l.method}:`, l), l;
}
function fo(t, e) {
  let n;
  try {
    n = t.callback ? t.callback(e) : t.metadata;
  } catch (o) {
    return p("HTTP(M)", `ERROR ${e.method}:`, [e.url, o]), Lt(o);
  }
  const r = t.delay_variance || 100, i = t.delay || 300, s = Math.floor(Math.random() * r - r / 2) + i;
  return p("HTTP(M)", `RESP ${e.method}:`, [e.url, n]), ls([n]).pipe(gs(Math.max(200, s)));
}
var ni = {};
function po(t, e = ni) {
  return e[t] || {};
}
function v(t, e, n = it) {
  return e || (e = { response_type: "json" }), n("GET", t, __spreadValues({ response_type: "json" }, e));
}
function T(t, e, n, r = it) {
  return n || (n = { response_type: "json" }), r("POST", t, __spreadValues({ body: e, response_type: "json" }, n));
}
function fe(t, e, n, r = it) {
  return n || (n = { response_type: "json" }), r("PUT", t, __spreadValues({ body: e, response_type: "json" }, n));
}
function be(t, e, n, r = it) {
  return n || (n = { response_type: "json" }), r("PATCH", t, __spreadValues({ body: e, response_type: "json" }, n));
}
function ne(t, e, n = it) {
  return e || (e = { response_type: "void" }), n("DELETE", t, __spreadValues({ response_type: "void" }, e));
}
async function _o(t, e, n = ni) {
  if (t.headers) {
    const r = {};
    t.headers.forEach ? t.headers.forEach((i, s) => r[s.toLowerCase()] = i) : Object.keys(t.headers).forEach(
      (i) => r[i.toLowerCase()] = t.headers[i]
    ), n[t.url || ""] = r;
  }
  switch (e) {
    case "json":
      return await t.json().catch(() => ({}));
    case "text":
      return await t.text();
    case "void":
      return;
    default:
      return await t.json().catch(() => ({}));
  }
}
var ri = () => (Ln(), Zr().then(
  () => Promise.resolve(),
  () => new Promise((t) => {
    setTimeout(() => {
      ri().then(() => t());
    }, 1e3);
  })
));
function it(t, e, n, r = jn, i = ao, s = _o) {
  if (r()) {
    const o = i(t, e, n?.body);
    if (o) return o;
  }
  return n.headers = n.headers || {}, !n.headers["Content-Type"] && !n.headers["content-type"] && (n.headers["Content-Type"] = "application/json"), Zs().pipe(
    _s((o) => o),
    Wr(1),
    lr((o) => {
      ee() === "x-api-key" ? n.headers["X-API-Key"] = Gt() : n.headers.Authorization = `Bearer ${ee()}`;
      const u = __spreadProps(__spreadValues({}, n), {
        method: t,
        credentials: "same-origin"
      });
      return ["POST", "PUT", "PATCH"].includes(t) && n.body !== void 0 && (u.body = typeof n.body == "string" ? n.body : JSON.stringify(n.body)), Fn(e, u);
    }),
    lr((o) => o.ok ? s(o, n.response_type) : Lt(o)),
    $s({
      count: 4,
      delay: (o, u) => new F((c) => {
        if (o.status === 511) {
          Jr(Dt()), c.error(o);
          return;
        }
        if (o.status !== 401) {
          c.error(o || {});
          return;
        }
        p("HTTP", "Auth error", o);
        const l = Math.pow(2, u - 1) * 1e3;
        ri().then(() => {
          c.next(l), c.complete();
        }).catch(() => {
          c.error(o);
        });
      })
    })
  );
}
var B = class {
  /** Unique Identifier of the object */
  id;
  /** Human readable name of the object */
  name;
  /** Unix epoch in seconds of the creation time of the object */
  created_at;
  /** Unix epoch in seconds of the creation time of the object */
  updated_at;
  /** Version of the data */
  version;
  constructor(e = {}) {
    this.id = e.id || "", this.name = e.name || "", this.created_at = e.created_at || 0, this.updated_at = e.updated_at || 0, this.version = e.version || 0;
  }
  /**
   * Convert object into plain object
   */
  toJSON() {
    const e = __spreadValues({}, this);
    return e.version = this.version, delete e.created_at, Ms(e, [void 0, null, ""]);
  }
};
var go = class extends B {
  /** Unique identifier of the application */
  uid;
  /** Secret associated with the application */
  secret;
  /** ID of the domain that owns this application */
  owner_id;
  /** Access scopes required by users to access the application */
  scopes;
  /** Authentication redirect URI */
  redirect_uri;
  /** Whether the application uses a confidential client secret */
  confidential;
  /** Skip authorization checks for the application */
  skip_authorization;
  /** Subsystems the application has access to */
  subsystems;
  /** Whether Client ID should be updated on changes */
  preserve_client_id;
  constructor(e = {}) {
    super(e), this.uid = e.uid || "", this.secret = e.secret || "", this.owner_id = e.owner_id || "", this.scopes = e.scopes || "", this.redirect_uri = e.redirect_uri || "", this.confidential = e.confidential || false, this.skip_authorization = e.skip_authorization || false, this.subsystems = e.subsystems || [], this.preserve_client_id = e.preserve_client_id || false;
  }
};
var ii = {};
var si = {};
var vr = "";
var Qt = (t) => t;
function S(t) {
  const { query_params: e, fn: n, path: r, endpoint: i } = t, s = I(e), o = `${i || h()}${r ? "/" + r : ""}${s ? "?" + s : ""}`;
  return v(o).pipe(
    _((u) => {
      const c = vo(o, s, r);
      return {
        total: c.total || 0,
        next: c.next ? () => S({
          query_params: c.next,
          fn: n,
          endpoint: i,
          path: r
        }) : null,
        data: u && u instanceof Array ? u.map((l) => (n || Qt)(l)) : u && !(u instanceof Array) && u.results ? u.results.map((l) => l) : []
      };
    })
  );
}
function k(t) {
  const { query_params: e, id: n, path: r, fn: i, options: s } = t, o = I(e), u = `${h()}/${r}/${n}${o ? "?" + o : ""}`;
  return v(u, s).pipe(_((c) => (i || Qt)(c)));
}
function U(t) {
  const { query_params: e, form_data: n, path: r, fn: i } = t, s = I(e), o = `${h()}/${r}${s ? "?" + s : ""}`;
  return T(o, n).pipe(
    _((c) => (i || Qt)(c))
  );
}
function g(t) {
  const { id: e, task_name: n, form_data: r, method: i, path: s, callback: o } = t, u = I(r), c = `${h()}/${s}/${e}/${n}`;
  return (i === "post" || i === "put" || !i ? (i === "put" ? fe : T)(c, r) : (i === "del" ? ne : v)(
    `${c}${u ? "?" + u : ""}`,
    {
      response_type: "json"
    }
  )).pipe(
    _((y) => (o || ((b) => b))(y))
  );
}
function R(t) {
  const { id: e, query_params: n, form_data: r, method: i, path: s, fn: o } = t, u = I(__spreadProps(__spreadValues({}, n), {
    version: r.version || 0
  })), c = `${h()}/${s}/${e}${u ? "?" + u : ""}`;
  return (i === "put" ? fe : be)(c, r).pipe(
    _((l) => (o || Qt)(l))
  );
}
function O(t) {
  const { id: e, query_params: n, path: r } = t, i = I(n), s = `${h()}/${r}/${e}${i ? "?" + i : ""}`;
  return ne(s);
}
function vo(t, e, n) {
  const r = po(
    t[0] === "/" ? `${location.origin}${t}` : t
  ), i = {
    total: 0,
    next: null
  };
  if (r && r["x-total-count"]) {
    const s = +(r["x-total-count"] || 0);
    (e.length < 2 || e.length < 12 && e.indexOf("offset=") >= 0) && (ii[n] = s), si[n] = s, i.total = s;
  }
  return r && r.link && (vr = Cs(r.link || "").next, i.next = et(vr.split("?")[1])), i;
}
var ut = "oauth_apps";
function Zt(t) {
  return new go(t);
}
function zu(t = {}) {
  return S({ query_params: t, fn: Zt, path: ut });
}
function Wu(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Zt,
    path: ut
  });
}
function Lu(t) {
  return U({ form_data: t, query_params: {}, fn: Zt, path: ut });
}
function Bu(t) {
  return O({ id: t, query_params: {}, path: ut });
}
var Vn = class extends B {
  /** Hash of the email address of the user */
  email_digest;
  /** ID of the authority associated with the user */
  authority_id;
  /** Email address of the user */
  email;
  /** Phone number of the user */
  phone;
  /** Display nickname of the user */
  nickname;
  /** Country that the user resides in */
  country;
  /** Office building the user is associated */
  building;
  /** Access control groups that user is associated */
  groups;
  /** Avatar image for the user */
  image;
  /** Additional metadata associated with the user */
  metadata;
  /** Miscellaneous user data */
  misc;
  /** Username credential of the user */
  login_name;
  /** Organisation ID of the user */
  staff_id;
  /** First name of the user */
  first_name;
  /** Last name of the user */
  last_name;
  /** Whether user is a support role */
  support;
  /** Whether user is a system admin role */
  sys_admin;
  /** Name of the active theme on the displayed UI */
  ui_theme;
  /** Preferred language of the user */
  preferred_language;
  /** Card Number associated with the user */
  card_number;
  /** Organisational department the user belongs */
  department;
  /** Default worktime preferences for the user */
  work_preferences;
  /** Overrides of the worktime preferences for the user */
  work_overrides;
  /** ID of the user's photo in the PlaceOS uploads service */
  photo_upload_id;
  /** Whether the user has opted in to location tracking */
  locatable;
  /** Password */
  password = "";
  /** Password */
  confirm_password = "";
  constructor(e = {}) {
    super(e), this.authority_id = e.authority_id || "", this.email = e.email || "", this.email_digest = e.email_digest || "", this.phone = e.phone || "", this.nickname = e.nickname || "", this.country = e.country || "", this.building = e.building || "", this.image = e.image || "", this.metadata = e.metadata || "", this.misc = e.misc || "", this.login_name = e.login_name || "", this.staff_id = e.staff_id || "", this.first_name = e.first_name || "", this.last_name = e.last_name || "", this.support = !!e.support, this.sys_admin = !!e.sys_admin, this.ui_theme = e.ui_theme || "", this.preferred_language = e.preferred_language || "", this.card_number = e.card_number || "", this.groups = e.groups || [], this.department = e.department || "", this.photo_upload_id = e.photo_upload_id || "", this.work_preferences = e.work_preferences || [], this.work_overrides = e.work_overrides || {}, this.locatable = e.locatable ?? true;
  }
};
var $o = /* @__PURE__ */ ((t) => (t[t.Certificate = 0] = "Certificate", t[t.NoAuth = 1] = "NoAuth", t[t.UserPassword = 2] = "UserPassword", t))($o || {});
var So = class extends B {
  /** Unique identifier for the Broker */
  id;
  /** Name of the Broker */
  name;
  /** Type of authentication used for connecting to the Broker */
  auth_type;
  /** Details of the Broker */
  description;
  /** Host name of the Broker endpoint */
  host;
  /** Port number of the Broker endpoint */
  port;
  /** Whether connection to the Broker endpoint has TLS */
  tls;
  /** Username to use for connecting to Broker */
  username;
  /** Password to use for connecting to Broker */
  password;
  /** Certificate details */
  certificate;
  /** User secret */
  secret;
  /**  */
  filters;
  constructor(e = {}) {
    super(), this.id = e.id || "", this.name = e.name || "", this.auth_type = e.auth_type || 2, this.description = e.description || "", this.host = e.host || "", this.port = e.port || 1883, this.tls = e.tls || false, this.username = e.username || "", this.password = e.password || "", this.certificate = e.certificate || "", this.secret = e.secret || "", this.filters = e.filters || [];
  }
};
var ct = "brokers";
function Jt(t) {
  return new So(t);
}
function Ju(t = {}) {
  return S({ query_params: t, fn: Jt, path: ct });
}
function ec(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Jt,
    path: ct
  });
}
function tc(t) {
  return U({ form_data: t, query_params: {}, fn: Jt, path: ct });
}
function nc(t, e = {}) {
  return O({ id: t, query_params: e, path: ct });
}
var ko = class {
  /** Unique identifier of the application */
  id;
  /** List of running drivers */
  compiled_drivers;
  /** List of running drivers */
  available_repositories;
  /** Number of actively running drivers */
  running_drivers;
  /** Number of actively running drivers */
  module_instances;
  /** List of repositories that are unavailable to the cluster */
  unavailable_repositories;
  /** List of drivers that are unavailable to the cluster */
  unavailable_drivers;
  /** Name of the cluster */
  hostname;
  /** Number of CPUs available on the host */
  cpu_count;
  /** Percentage of CPU usage by the cluster's root process */
  core_cpu;
  /** Percentage of CPU usage by the whole cluster */
  total_cpu;
  /** Total amount of available memory on the host in KB */
  memory_total;
  /** Total amount of memory used by the whole cluster in KB */
  memory_usage;
  /** Total amount of memory used by the cluster root process in KB */
  core_memory;
  /** Percentage of memory used by the cluster */
  memory_percentage;
  /** Display string for the memory usage */
  used_memory;
  /** Display string for the memory total */
  total_memory;
  /** List of edge nodes within the cluster */
  edge_nodes;
  run_counts;
  constructor(e = {}) {
    this.id = e.id || e.core_id || "", this.compiled_drivers = e.compiled_drivers || [], this.available_repositories = e.available_repositories || e.status?.available_repositories || [], this.running_drivers = e.running_drivers || e.status?.running_drivers || 0, this.module_instances = e.module_instances || e.status?.module_instances || 0, this.unavailable_repositories = e.unavailable_repositories || e.status?.unavailable_repositories || [], this.unavailable_drivers = e.unavailable_drivers || e.status?.unavailable_drivers || [], this.hostname = e.hostname || e.load?.local.hostname || "", this.cpu_count = e.cpu_count || e.load?.local.cpu_count || 0, this.core_cpu = e.core_cpu || e.load?.local.core_cpu || 0, this.total_cpu = e.total_cpu || e.load?.local.total_cpu || 0, this.memory_total = e.memory_total || e.load?.local.memory_total || 0, this.memory_usage = e.memory_usage || e.load?.local.memory_usage || 0, this.core_memory = e.core_memory || e.load?.local.core_memory || 0, this.run_counts = e.run_counts || e.status?.run_counts?.local || { modules: 0, drivers: 0 }, this.memory_percentage = +(this.memory_usage / this.memory_total * 100).toFixed(4), this.used_memory = Ct(this.memory_usage * 1024), this.total_memory = Ct(this.memory_total * 1024);
    const n = e.load?.edge || {};
    this.edge_nodes = e.edge_nodes || Object.keys(n).map((r) => __spreadProps(__spreadValues({
      id: r
    }, n[r]), {
      run_count: e.status?.run_count?.edge[r] || {}
    })) || [];
  }
};
var xo = class {
  /** ID of the cluster associated with the process */
  cluster_id;
  /** Unique identifier of the application */
  id;
  /** List of module IDs that are running in this process */
  modules;
  /** Whether the process is running */
  running;
  /** Number if modules instances running in this process */
  module_instances;
  /** Last exit code of the process */
  last_exit_code;
  /** Number of times this process has been launched */
  launch_count;
  /** Time that the latest instance of the process launched */
  launch_time;
  /** Current CPU usage of the process */
  cpu_usage;
  /** Total amount of available memory on the host in KB */
  memory_total;
  /** Total amount of memory used by the process in KB */
  memory_usage;
  /** Display string for the memory usage */
  used_memory;
  /** Display string for the memory total */
  total_memory;
  constructor(e, n = {}) {
    this.cluster_id = e, this.id = n.id || n.driver || "", this.modules = n.modules || [], this.running = n.running || false, this.module_instances = n.module_instances || n.edge?.status?.module_instances || n.local?.status?.module_instances || 0, this.last_exit_code = n.last_exit_code || n.edge?.status?.last_exit_code || n.local?.status?.last_exit_code || 0, this.launch_count = n.launch_count || n.edge?.status?.launch_count || n.local?.status?.launch_count || 0, this.launch_time = n.launch_time || n.edge?.status?.launch_time || n.local?.status?.launch_time || 0, this.cpu_usage = n.cpu_usage || n.percentage_cpu || n.edge?.status?.percentage_cpu || n.local?.status?.percentage_cpu || 0, this.memory_total = n.memory_total || n.edge?.status?.memory_total || n.local?.status?.memory_total || 0, this.memory_usage = n.memory_usage || n.edge?.status?.memory_usage || n.local?.status?.memory_usage || 0, this.used_memory = Ct(this.memory_usage * 1024), this.total_memory = Ct(this.memory_total * 1024);
  }
};
var Le = "cluster";
function ui(t) {
  return new ko(t);
}
function sc(t = {}) {
  return S({ query_params: t, fn: ui, path: Le });
}
function uc(t, e = {}) {
  return k({
    id: t,
    query_params: e,
    fn: (n) => n.map(
      (r) => new xo(t, r)
    ),
    path: Le
  });
}
function cc(t, e) {
  return O({ id: t, query_params: e, path: Le });
}
var Ao = class extends B {
  /** Domain name */
  domain;
  /** Login URL for the domain */
  login_url;
  /** Logout URL for the domain */
  logout_url;
  /** Description of the domain domain */
  description;
  /** Local configuration for the domain */
  config;
  /** Internal settings for the domain */
  internals;
  /** List of email domains associated with the domain */
  email_domains;
  constructor(e = {}) {
    super(e), this.description = e.description || "", this.domain = e.domain || "", this.login_url = e.login_url || "", this.logout_url = e.logout_url || "", this.config = e.config || {}, this.internals = e.internals || {}, this.email_domains = e.email_domains || [];
  }
};
var Be = "domains";
function Xt(t) {
  return new Ao(t);
}
function hc(t = {}) {
  return S({ query_params: t, fn: Xt, path: Be });
}
function fc(t) {
  return k({ id: t, query_params: {}, fn: Xt, path: Be });
}
function pc(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Xt,
    path: Be
  });
}
function dc(t) {
  return U({ form_data: t, query_params: {}, fn: Xt, path: Be });
}
function _c(t) {
  return O({ id: t, query_params: {}, path: Be });
}
var Ge = /* @__PURE__ */ ((t) => (t[t.None = 0] = "None", t[t.Support = 1] = "Support", t[t.Admin = 2] = "Admin", t[t.NeverDisplay = 3] = "NeverDisplay", t))(Ge || {});
var Ue = class extends B {
  /** ID of the parent zone/system/module/driver */
  parent_id;
  /** Unix timestamp in seconds of when the settings where last updated */
  updated_at;
  /** Access level for the settings data */
  encryption_level;
  /** Contents of the settings */
  settings_string;
  /** Top level keys for the parsed settings */
  keys;
  /** ID of the user that last modified the metadata */
  modified_by_id;
  /** Contents of the settings */
  get value() {
    return this.settings_string;
  }
  constructor(e = {}) {
    super(e), this.parent_id = e.parent_id || "", this.updated_at = e.updated_at || Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3), this.settings_string = e.settings_string || "", this.encryption_level = e.encryption_level || Ge.None, this.keys = e.keys || [], this.modified_by_id = e.modified_by_id || "";
  }
};
var Ht = /* @__PURE__ */ ((t) => (t[t.SSH = 0] = "SSH", t[t.Device = 1] = "Device", t[t.Service = 2] = "Service", t[t.Websocket = 3] = "Websocket", t[t.Logic = 99] = "Logic", t))(Ht || {});
var ci = class extends B {
  /** Place class name of the driver */
  class_name;
  /** Description of the driver functionality */
  description;
  /** Name to use for modules that inherit this driver */
  module_name;
  /** Role of the driver in engine */
  role;
  /** Default URI for the driver */
  default_uri;
  /** Default port number for the driver */
  default_port;
  /** ID of the repository the driver is from */
  repository_id;
  /** Name of the file from the repository to load the driver logic from */
  file_name;
  /** Version of the driver logic to use */
  commit;
  /** Ignore connection issues */
  ignore_connected;
  /** Whether newer version of driver is available */
  update_available;
  update_info;
  /**  */
  alert_level;
  /** Tuple of user settings of differring encryption levels for the driver */
  settings;
  constructor(e = {}) {
    super(e), this.description = e.description || "", this.module_name = e.module_name || "", this.role = e.role ?? Ht.Logic, this.default_uri = e.default_uri || "", this.default_port = e.default_port || 1, this.ignore_connected = e.ignore_connected || false, this.class_name = e.class_name || "", this.repository_id = e.repository_id || "", this.file_name = e.file_name || "", this.commit = e.commit || "", this.update_available = e.update_available || false, this.update_info = e.update_info, this.alert_level = e.alert_level || "medium", this.settings = e.settings || [null, null, null, null], typeof this.settings != "object" && (this.settings = [null, null, null, null]);
    for (const n in Ge)
      !isNaN(Number(n)) && !this.settings[n] && (this.settings[n] = new Ue({
        parent_id: this.id,
        encryption_level: +n
      }));
  }
};
var pe = "drivers";
function en(t) {
  return new ci(t);
}
function yc(t = {}) {
  return S({ query_params: t, fn: en, path: pe });
}
function gc(t, e = {}) {
  return k({ id: t, query_params: e, fn: en, path: pe });
}
function vc(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: en,
    path: pe
  });
}
function bc(t) {
  return U({ form_data: t, query_params: {}, fn: en, path: pe });
}
function $c(t) {
  return O({ id: t, query_params: {}, path: pe });
}
function Sc(t) {
  return g({ id: t, task_name: "recompile", path: pe });
}
function kc(t) {
  return g({ id: t, task_name: "reload", path: pe });
}
function Ac(t) {
  return g({ id: t, task_name: "readme", method: "get", path: pe });
}
var Io = class extends B {
  description;
  secret;
  x_api_key;
  online;
  last_seen;
  constructor(e = {}) {
    super(e), this.description = e.description || "", this.secret = e.secret || "", this.x_api_key = e.x_api_key || "", this.last_seen = (e.last_seen || 0) * 1e3 || Date.now(), this.online = e.online || false;
  }
  toJSON() {
    const e = super.toJSON();
    return delete e.last_seen, e;
  }
};
var N = "edges";
function tn(t) {
  return new Io(t);
}
function Ic(t = {}) {
  return S({ query_params: t, fn: tn, path: N });
}
function wc(t) {
  return k({ id: t, query_params: {}, fn: tn, path: N });
}
function Pc(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: tn,
    path: N
  });
}
function Ec(t) {
  return U({ form_data: t, query_params: {}, fn: tn, path: N });
}
function Tc(t) {
  return O({ id: t, query_params: {}, path: N });
}
function Oc(t) {
  return g({
    id: t,
    task_name: "token",
    form_data: {},
    method: "get",
    path: N
  });
}
var Kn = class {
  /** ISO8601 timestamp of the creation time of the group */
  created_at;
  /** ISO8601 timestamp of the last update time of the group */
  updated_at;
  /** Unique identifier of the group */
  id;
  /** Human readable name of the group */
  name;
  /** Description of the group's purpose */
  description;
  /** Subsystems this group participates in */
  subsystems;
  /** ID of the authority associated with the group */
  authority_id;
  /** ID of the parent group */
  parent_id;
  /** Count of child groups for this group */
  children_count;
  constructor(e = {}) {
    this.created_at = e.created_at || "", this.updated_at = e.updated_at || "", this.id = e.id || "", this.name = e.name || "", this.description = e.description || "", this.subsystems = e.subsystems || [], this.authority_id = e.authority_id || "", this.parent_id = e.parent_id || "", isFinite(Number(e.children_count)) && (this.children_count = e.children_count);
  }
};
var ai = class {
  /** ISO8601 timestamp of the creation time of the association */
  created_at;
  /** ISO8601 timestamp of the last update time of the association */
  updated_at;
  /** ID of the user associated with the group */
  user_id;
  /** ID of the group associated with the user */
  group_id;
  /** Permission bitmask granted by this association */
  permissions;
  /** Group details included by the API when available */
  group;
  /** User details included by the API when available */
  user;
  constructor(e = {}) {
    this.created_at = e.created_at || "", this.updated_at = e.updated_at || "", this.user_id = e.user_id || "", this.group_id = e.group_id || "", this.permissions = e.permissions || 0, this.group = e.group ? new Kn(e.group) : void 0, this.user = e.user ? new Vn(e.user) : void 0;
  }
};
var Ve = "groups";
function lt(t) {
  return new Kn(t);
}
function Vc(t = {}) {
  return S({ query_params: t, fn: lt, path: Ve });
}
function Kc(t) {
  const e = `${h()}/${Ve}/${encodeURIComponent(t)}`;
  return v(e).pipe(_((n) => lt(n)));
}
function Zc(t) {
  const e = `${h()}/${Ve}`;
  return T(e, t).pipe(_((n) => lt(n)));
}
function Yc(t, e, n = "patch") {
  const r = `${h()}/${Ve}/${encodeURIComponent(t)}`;
  return (n === "put" ? fe : be)(r, e).pipe(
    _((i) => lt(i))
  );
}
function Jc(t) {
  const e = `${h()}/${Ve}/${encodeURIComponent(t)}`;
  return ne(e, { response_type: "void" });
}
var Zn = "group_users";
function nn(t) {
  return new ai(t);
}
function Yn(t, e) {
  return `${Zn}/${encodeURIComponent(t)}/${encodeURIComponent(e)}`;
}
function oa(t = {}) {
  return S({ query_params: t, fn: nn, path: Zn });
}
function ca(t) {
  const e = `${h()}/${Zn}`;
  return T(e, t).pipe(_((n) => nn(n)));
}
function aa(t, e, n, r = "patch") {
  const i = `${h()}/${Yn(t, e)}`;
  return (r === "put" ? fe : be)(i, n).pipe(
    _((s) => nn(s))
  );
}
function la(t, e) {
  const n = `${h()}/${Yn(t, e)}`;
  return ne(n, { response_type: "void" });
}
var de = class extends B {
  /** Name of the system assocaited with the trigger */
  system_name;
  /** Number of times the trigger has been activated/triggered */
  activated_count;
  /** Description of the trigger */
  description;
  /** Duration with which to ignore sequential activations of the trigger */
  debounce_period;
  /** Whether the trigger should take priority */
  important;
  /** Whether trigger is enabled on the associated zone or system */
  enabled;
  /** Whether the trigger can call webhooks */
  enable_webhook;
  /** Whether the trigger instance can execute methods */
  exec_enabled;
  /** Auth key for trigger's webhook */
  webhook_secret;
  /** HTTP verbs supported by the webhook */
  supported_methods;
  /** ID of the system associated with the trigger */
  control_system_id;
  /** ID of the zone associated with the trigger */
  zone_id;
  /** ID of the Parent trigger */
  trigger_id;
  /** List of playlist IDs associated with the system */
  playlists;
  // Whether condition checks should match any single condition to pass or all of them
  any_match;
  /** ID of the system associated with the trigger */
  get system_id() {
    return this.control_system_id;
  }
  /** Actions to perform when the trigger is activated */
  get actions() {
    const e = this._actions, n = (e.functions || []).map((i) => __spreadProps(__spreadValues({}, i), {
      args: __spreadValues({}, i.args)
    })), r = (e.mailers || []).map((i) => __spreadProps(__spreadValues({}, i), {
      emails: [...i.emails]
    }));
    return { functions: n, mailers: r };
  }
  /** Conditions for activating the trigger */
  get conditions() {
    const e = this._conditions, n = (e.comparisons || []).map((i) => __spreadProps(__spreadValues({}, i), {
      left: typeof i.left == "object" ? __spreadValues({}, i.left) : i.left,
      right: typeof i.right == "object" ? __spreadValues({}, i.right) : i.right
    })), r = (e.time_dependents || []).map((i) => __spreadValues({}, i));
    return { comparisons: n, time_dependents: r };
  }
  /** Actions to perform when the trigger is activated */
  _actions;
  /** Conditions for activating the trigger */
  _conditions;
  constructor(e = {}) {
    super(e), this.description = e.description || "", this._actions = e.actions || { functions: [], mailers: [] }, this._conditions = e.conditions || {
      comparisons: [],
      time_dependents: []
    }, this.debounce_period = e.debounce_period || 0, this.important = e.important || false, this.enabled = e.enabled || false, this.webhook_secret = e.webhook_secret || "", this.control_system_id = e.system_id || e.control_system_id || "", this.zone_id = e.zone_id || "", this.system_name = e.system_name || (e.control_system ? e.control_system.name : ""), this.enable_webhook = e.enable_webhook || false, this.exec_enabled = e.exec_enabled || false, this.supported_methods = e.supported_methods || ["POST"], this.activated_count = e.activated_count || e.trigger_count || 0, this.playlists = e.playlists || [], this.trigger_id = e.trigger_id || "", this.any_match = e.any_match || false;
  }
};
var rn = class extends B {
  /** Tuple of user settings of differring encryption levels for the zone */
  settings = [null, null, null, null];
  /** Description of the zone's purpose */
  description;
  /** ID of the parent zone */
  parent_id;
  /** List of triggers associated with the zone */
  triggers;
  /** List of tags associated with the zone */
  tags;
  /** Geo-location details associated with the zone */
  location;
  /** Custom display name for the zone */
  display_name;
  /** Organisational code associated with the zone */
  code;
  /** Organisational categorisation of the zone */
  type;
  /** Count of resources associated with the zone */
  count;
  /** Count of child zones for this zone */
  children_count;
  /** Amount of physical capacity associated with the zone */
  capacity;
  /** ID or URL of or in a map associated with the zone */
  map_id;
  /** List of image URLs */
  images;
  /** Timezone of the associated real world location */
  timezone;
  /** List of playlist IDs associated with the system */
  playlists;
  /**
   * List of modules associated with the system.
   * Only available from the show method with the `complete` query parameter
   */
  trigger_list = [];
  constructor(e = {}) {
    super(e), this.description = e.description || "", this.tags = e.tags || [], this.triggers = e.triggers || [], this.settings = e.settings || [null, null, null, null], this.parent_id = e.parent_id || "", this.location = e.location || "", this.display_name = e.display_name || "", this.code = e.code || "", this.type = e.type || "", this.count = e.count || 0, this.capacity = e.capacity || 0, this.map_id = e.map_id || "", this.timezone = e.timezone || "", this.images = e.images || [], this.playlists = e.playlists || [], isFinite(Number(e.children_count)) && (this.children_count = e.children_count), typeof this.settings != "object" && (this.settings = [null, null, null, null]);
    for (const n in Ge)
      !isNaN(Number(n)) && !this.settings[n] && (this.settings[n] = new Ue({
        parent_id: this.id,
        encryption_level: +n
      }));
    e.trigger_data && e.trigger_data instanceof Array && (this.trigger_list = e.trigger_data.map(
      (n) => new de(n)
    ));
  }
};
var Eo = class {
  /** ISO8601 timestamp of the creation time of the association */
  created_at;
  /** ISO8601 timestamp of the last update time of the association */
  updated_at;
  /** ID of the group associated with the zone */
  group_id;
  /** ID of the zone associated with the group */
  zone_id;
  /** Permission bitmask granted by this association */
  permissions;
  /** Whether this association denies the permission bitmask */
  deny;
  /** Group details included by the API when available */
  group;
  /** Zone details included by the API when available */
  zone;
  constructor(e = {}) {
    this.created_at = e.created_at || "", this.updated_at = e.updated_at || "", this.group_id = e.group_id || "", this.zone_id = e.zone_id || "", this.permissions = e.permissions || 0, this.deny = !!e.deny, this.group = e.group ? new Kn(e.group) : void 0, this.zone = e.zone ? new rn(e.zone) : void 0;
  }
};
var Jn = "group_zones";
function sn(t) {
  return new Eo(t);
}
function Xn(t, e) {
  return `${Jn}/${encodeURIComponent(t)}/${encodeURIComponent(e)}`;
}
function ha(t = {}) {
  return S({ query_params: t, fn: sn, path: Jn });
}
function pa(t) {
  const e = `${h()}/${Jn}`;
  return T(e, t).pipe(_((n) => sn(n)));
}
function da(t, e, n, r = "patch") {
  const i = `${h()}/${Xn(t, e)}`;
  return (r === "put" ? fe : be)(i, n).pipe(
    _((s) => sn(s))
  );
}
function _a(t, e) {
  const n = `${h()}/${Xn(t, e)}`;
  return ne(n, { response_type: "void" });
}
var To = class extends B {
  /** Type of auth source */
  type = "ldap";
  /** ID of the authority associted with the auth method */
  authority_id;
  /** HTTP URL of the SSO provider */
  host;
  /** Application ID from the SSO provider providing the Ldap services */
  port;
  /** Application secret from the SSO provider providing the Ldap services */
  auth_method;
  /** Mapping of engine values to SSO provider values */
  uid;
  /** URL from the SSO provider for authorisation */
  base;
  /** Default DN to user when performing a user lookup */
  bind_dn;
  /** Password to access LDAP service */
  password;
  /**
   * LDAP Filter. Can be used instead of `uid`.
   * e.g. (&(uid=%{username})(memberOf=cn=myapp-users,ou=groups,dc=example,dc=com))
   */
  filter;
  constructor(e = {}) {
    super(e), this.authority_id = e.authority_id || "", this.host = e.host || "", this.port = e.port || 636, this.auth_method = e.auth_method || "ssl", this.uid = e.uid || "", this.base = e.base || "", this.bind_dn = e.bind_dn || "", this.password = e.password || "", this.filter = e.filter || "";
  }
};
var ht = "ldap_auths";
function on(t) {
  return new To(t);
}
function ma(t = {}) {
  return S({ query_params: t, fn: on, path: ht });
}
function ga(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: on,
    path: ht
  });
}
function va(t) {
  return U({ form_data: t, query_params: {}, fn: on, path: ht });
}
function ba(t) {
  return O({ id: t, query_params: {}, path: ht });
}
var fi = class {
  /** ID of the parent resource associated with the metadata */
  id;
  /** Name/ID of the zone metadata */
  name;
  /** Description of what this metadata represents */
  description;
  /** Metadata associated with this key. */
  details;
  /** List user groups allowed to edit the metadata */
  editors;
  /** JSON schema associated with the metadata details */
  schema;
  /** Unix timestamp that the metadata was last modified at */
  updated_at;
  /** ID of the user that last modified the metadata */
  modified_by_id;
  /** Version of the data */
  version;
  constructor(e = {}) {
    this.id = e.id || e.parent_id || "", this.name = e.name || "", this.description = e.description || "";
    try {
      this.details = (typeof e.details == "string" ? JSON.parse(e.details) : e.details) || {};
    } catch {
      this.details = e.details || {};
    }
    this.editors = e.editors || [], this.schema = e.schema || "", this.updated_at = (e.updated_at || 0) * 1e3 || Date.now(), this.modified_by_id = e.modified_by_id || "", this.version = e.version || 0;
  }
};
var $e = "metadata";
function Ke(t) {
  return new fi(t);
}
function $a(t, e = {}) {
  return k({
    id: t,
    query_params: e,
    fn: (n) => Object.keys(n).map((r) => Ke(n[r])),
    path: $e
  });
}
function Uo(t) {
  const e = [...t], n = [];
  for (; e.length; ) {
    const r = e.pop();
    Array.isArray(r) ? e.push(...r) : n.push(r);
  }
  return n.reverse();
}
function Sa(t, e = {}) {
  return g({
    id: t,
    task_name: "history",
    form_data: e,
    method: "get",
    callback: (n) => Uo(
      Object.keys(n).map(
        (r) => n[r].map((i) => Ke(i))
      )
    ),
    path: $e
  });
}
function ka(t, e) {
  return k({
    id: t,
    query_params: { name: e },
    fn: (n) => Ke(n[e]),
    path: $e
  });
}
function xa(t, e, n = "put") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Ke,
    path: $e
  });
}
function Ia(t, e) {
  return O({ id: t, query_params: e, path: $e });
}
var pi = class extends B {
  /** Tuple of user settings of differring encryption levels for the system */
  settings = [null, null, null, null];
  /** Display name of the system */
  display_name;
  /** Description of the system */
  description;
  /** Email address associated with the system */
  email;
  /** Email address associated with the system */
  code;
  /** Capacity of the space associated with the system */
  capacity;
  /** Features associated with the system */
  features;
  /** Whether system is bookable by end users */
  bookable;
  /** Whether system is public accessible */
  public;
  /** Count of UI devices attached to the system */
  installed_ui_devices;
  /** Support URL for the system */
  support_url;
  /** URL for the timetable UI linked to the system */
  timetable_url;
  /** URLs for requesting snapshots of the assosiated camera */
  camera_snapshot_url;
  /** URLs for requesting snapshots of the assosiated camera */
  camera_snapshot_urls;
  /** URL for managing the attached camera */
  camera_url;
  /** External booking URL for the system */
  room_booking_url;
  /** ID on the SVG Map associated with this system */
  map_id;
  /** List of module IDs that belong to the system */
  modules;
  /** List of images associated with the system */
  images;
  /** List of the zone IDs that the system belongs */
  zones;
  /** Timezone of the associated real world space */
  timezone;
  /**
   * List of modules associated with the system.
   * Only available from the show method with the `complete` query parameter
   */
  module_list = [];
  /** Whether the system has signage capabilities */
  signage;
  /** List of playlist IDs associated with the system */
  playlists;
  approval;
  /** Orientation of the signage system */
  orientation;
  constructor(e = {}) {
    super(e), this.display_name = e.display_name || "", this.description = e.description || "", this.email = e.email || "", this.code = e.code || "", this.capacity = e.capacity || 0, this.features = e.features || [], this.bookable = e.bookable || false, this.public = e.public ?? false, this.installed_ui_devices = e.installed_ui_devices || 0, this.support_url = e.support_url || "", this.camera_snapshot_url = e.camera_snapshot_url || "", this.camera_snapshot_urls = e.camera_snapshot_urls || [], this.camera_url = e.camera_url || "", this.timetable_url = e.timetable_url || "", this.room_booking_url = e.room_booking_url || "", this.map_id = e.map_id || "", this.modules = e.modules || [], this.images = e.images || [], this.zones = e.zones || [], this.settings = e.settings || [null, null, null, null], this.timezone = e.timezone || "", this.signage = e.signage || false, this.playlists = e.playlists || [], this.orientation = e.orientation || "unspecified", this.approval = e.approval || false, typeof this.settings != "object" && (this.settings = [null, null, null, null]);
    for (const n in Ge)
      !isNaN(Number(n)) && !this.settings[n] && (this.settings[n] = new Ue({
        parent_id: this.id,
        encryption_level: +n
      }));
    e.module_data && e.module_data instanceof Array && (this.module_list = e.module_data.map(
      (n) => new di(n)
    ));
  }
};
var di = class extends B {
  /** Whether the associated hardware is connected */
  connected;
  /** Whether the module driver is running */
  running;
  /** Timestamp of last update in ms since UTC epoch */
  updated_at;
  /** ID of the edge associated with the module */
  edge_id;
  /** ID of the driver associated with the module */
  driver_id;
  /** Driver/dependancy associated with the module */
  driver;
  /** ID of the system associated with the module */
  control_system_id;
  /** System associated with the module */
  system;
  /** IP address of the hardware associated with the module */
  ip;
  /** Whether the hardware connection requires TLS */
  tls;
  /** Whether the hardware connection is over UDP */
  udp;
  /** Port number connections to the hardware are made on */
  port;
  /**  */
  makebreak;
  /** URI associated with the module */
  uri;
  /** Custom name of the module */
  custom_name;
  /** Type of module */
  role;
  /** Notes associated with the module */
  notes;
  /** Ignore connection issues */
  ignore_connected;
  /** Tuple of user settings of differring encryption levels for the module */
  settings = [null, null, null, null];
  /** Whether the module has a runtime error */
  has_runtime_error;
  /** Timestamp of the last runtime error in ms since UTC epoch */
  error_timestamp;
  /**  */
  alert_level;
  /** ID of the system associated with the module */
  get system_id() {
    return this.control_system_id;
  }
  constructor(e = {}) {
    super(e), this.driver_id = e.driver_id || e.dependency_id || "", this.control_system_id = e.control_system_id || "", this.edge_id = e.edge_id || "", this.ip = e.ip || "", this.tls = e.tls || false, this.udp = e.udp || false, this.port = e.port || 1, this.makebreak = e.makebreak || false, this.uri = e.uri || "", this.custom_name = e.custom_name || "", this.role = e.role ?? Ht.Logic, this.notes = e.notes || "", this.ignore_connected = e.ignore_connected || false, this.connected = e.connected, this.running = e.running || false, this.updated_at = e.updated_at || 0, this.system = new pi(
      e.control_system || e.system
    ), this.has_runtime_error = e.has_runtime_error || false, this.error_timestamp = e.error_timestamp || 0, this.driver = new ci(e.dependency || e.driver), this.settings = e.settings || [null, null, null, null], this.alert_level = e.alert_level || "medium", typeof this.settings != "object" && (this.settings = [null, null, null, null]);
    for (const n in Ge)
      !isNaN(Number(n)) && !this.settings[n] && (this.settings[n] = new Ue({
        parent_id: this.id,
        encryption_level: +n
      }));
  }
  /**
   * Convert object into plain object
   */
  toJSON(e = false) {
    const n = super.toJSON();
    return (n.role !== Ht.Logic && !e || !n.control_system_id) && delete n.control_system_id, delete n.driver, delete n.system, delete n.error_timestamp, delete n.has_runtime_error, n;
  }
};
var Y = "modules";
function un(t) {
  return new di(t);
}
function Ea(t = {}) {
  return S({ query_params: t, fn: un, path: Y });
}
function Ta(t, e = {}) {
  return k({ id: t, query_params: e, fn: un, path: Y });
}
function Oa(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: un,
    path: Y
  });
}
function Ua(t) {
  return U({ form_data: t, query_params: {}, fn: un, path: Y });
}
function Ra(t) {
  return O({ id: t, query_params: {}, path: Y });
}
function qa(t) {
  return g({ id: t, task_name: "start", path: Y });
}
function Ca(t) {
  return g({ id: t, task_name: "stop", path: Y });
}
function Na(t) {
  return g({ id: t, task_name: "load", method: "post", path: Y });
}
function Ha(t) {
  return g({
    id: t,
    task_name: "settings",
    method: "get",
    callback: (e) => e.map((n) => new Ue(n)),
    path: Y
  });
}
function Fa(t) {
  return g({
    id: t,
    task_name: "error",
    method: "get",
    path: Y
  });
}
var Ro = class extends B {
  /** Type of auth source */
  type = "oauth";
  /** ID of the authority associted with the auth method */
  authority_id;
  /** Application ID from the SSO provider providing the OAuth services */
  client_id;
  /** Application secret from the SSO provider providing the OAuth services */
  client_secret;
  /** Mapping of engine values to SSO provider values */
  info_mappings;
  /** HTTP URL of the SSO provider */
  site;
  /** URL from the SSO provider for authorisation */
  authorize_url;
  /** HTTP Method used to generating tokens */
  token_method;
  /** URL for generating user tokens */
  token_url;
  /** Scheme used to authenticate the user */
  auth_scheme;
  /** Space seperated access scopes for the user */
  scope;
  /** URL to grab user's profile details with a valid token */
  raw_info_url;
  /** Additional params to be sent as part of the authorization reqest */
  authorize_params;
  /** Security checks to be made on the returned data */
  ensure_matching;
  constructor(e = {}) {
    super(e), this.authority_id = e.authority_id || "", this.client_id = e.client_id || "", this.client_secret = e.client_secret || "", this.info_mappings = e.info_mappings || {}, this.authorize_params = e.authorize_params || {}, this.ensure_matching = e.ensure_matching || {}, this.site = e.site || "", this.authorize_url = e.authorize_url || "oauth/authorize", this.token_method = e.token_method || "post", this.token_url = e.token_url || "oauth/token", this.auth_scheme = e.auth_scheme || "request_body", this.scope = e.scope || "", this.raw_info_url = e.raw_info_url || "", this.authorize_params = e.authorize_params || {}, this.ensure_matching = e.ensure_matching || {};
  }
};
var ft = "oauth_auths";
function cn(t) {
  return new Ro(t);
}
function ja(t = {}) {
  return S({ query_params: t, fn: cn, path: ft });
}
function La(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: cn,
    path: ft
  });
}
function Ba(t) {
  return U({ form_data: t, query_params: {}, fn: cn, path: ft });
}
function Ga(t) {
  return O({ id: t, query_params: {}, path: ft });
}
var yi = /* @__PURE__ */ ((t) => (t.Driver = "driver", t.Interface = "interface", t))(yi || {});
var qo = class extends B {
  /** Name of the folder on the server to pull the repository */
  folder_name;
  /** Description of the contents of the repository */
  description;
  /** URI that the repository can be pulled from */
  uri;
  /** Working branch for the repository */
  branch;
  /** Hash of the commit at the head of the repository */
  commit_hash;
  /** Repository type */
  repo_type;
  /** Username to connect to repository with */
  username;
  /** Password to connect to repository with */
  password;
  /** Root path of the repository to serve at the `folder_name` path */
  root_path;
  /** Repository type */
  get type() {
    return this.repo_type;
  }
  constructor(e = {}) {
    super(e), this.folder_name = e.folder_name || "", this.description = e.description || "", this.uri = e.uri || "", this.branch = e.branch || "", this.commit_hash = e.commit_hash || "", this.repo_type = e.repo_type || yi.Driver, this.username = e.username || "", this.password = e.password || "", this.root_path = e.root_path || "";
  }
};
var K = "repositories";
function an(t) {
  return new qo(t);
}
function el(t = {}) {
  return S({ query_params: t, fn: an, path: K });
}
function tl(t) {
  return k({ id: t, query_params: {}, fn: an, path: K });
}
function nl(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: an,
    path: K
  });
}
function rl(t) {
  return U({ form_data: t, query_params: {}, fn: an, path: K });
}
function il(t) {
  return O({ id: t, query_params: {}, path: K });
}
function sl() {
  return k({
    id: "interfaces",
    query_params: {},
    path: K
  });
}
function ol(t) {
  return k({
    id: "remote_default_branch",
    query_params: t,
    path: K
  });
}
function ul(t) {
  return k({
    id: "remote_branches",
    query_params: t,
    path: K
  });
}
function cl(t) {
  return k({
    id: "remote_commits",
    query_params: t,
    path: K
  });
}
function al(t, e) {
  return g({
    id: t,
    task_name: "drivers",
    form_data: e,
    method: "get",
    path: K
  });
}
function ll(t, e) {
  return g({
    id: t,
    task_name: "commits",
    form_data: e,
    method: "get",
    path: K
  });
}
function hl(t) {
  return g({
    id: t,
    task_name: "branches",
    method: "get",
    path: K
  });
}
function fl(t) {
  return g({
    id: t,
    task_name: "default_branch",
    method: "get",
    path: K
  });
}
function pl(t, e) {
  return g({
    id: t,
    task_name: "details",
    form_data: e,
    method: "get",
    path: K
  });
}
function dl(t, e) {
  return g({
    id: t,
    task_name: "pull",
    form_data: e,
    method: "post",
    path: K
  });
}
var Co = class extends B {
  /** Type of auth source */
  type = "saml";
  /** ID of the authority associted with the auth method */
  authority_id;
  /** Name of the application requesting auth */
  issuer;
  /**
   * Mapping of request params that exist during the request
   * phase of OmniAuth that should to be sent to the IdP
   */
  idp_sso_target_url_runtime_params;
  /** Describes the format of the username required by this application */
  name_identifier_format;
  /** Attribute that uniquely identifies the user */
  uid_attribute;
  /** URL at which the SAML assertion should be received (SSO Service => Place URL) */
  assertion_consumer_service_url;
  /** URL to which the authentication request should be sent (Place => SSO Service) */
  idp_sso_target_url;
  /** Identity provider's certificate in PEM format (this or fingerprint is required) */
  idp_cert;
  /** SHA1 fingerprint of the certificate */
  idp_cert_fingerprint;
  /** Name for the attribute service */
  attribute_service_name;
  /** Mapping of Attribute Names in a SAMLResponse to entries in the OmniAuth info hash */
  attribute_statements;
  /** Mapping of Attribute Names in a SAMLResponse to entries in the OmniAuth info hash */
  request_attributes;
  /** URL to which the single logout request and response should be sent */
  idp_slo_target_url;
  /** Value to use as default RelayState for single log outs */
  slo_default_relay_state;
  constructor(e = {}) {
    super(e), this.authority_id = e.authority_id || "", this.issuer = e.issuer || "", this.idp_sso_target_url_runtime_params = e.idp_sso_target_url_runtime_params || {}, this.name_identifier_format = e.name_identifier_format || "", this.uid_attribute = e.uid_attribute || "", this.assertion_consumer_service_url = e.assertion_consumer_service_url || "", this.idp_sso_target_url = e.idp_sso_target_url || "", this.idp_cert = e.idp_cert || "", this.idp_cert_fingerprint = e.idp_cert_fingerprint || "", this.attribute_service_name = e.attribute_service_name || "", this.attribute_statements = e.attribute_statements || {}, this.request_attributes = e.request_attributes || [], this.idp_slo_target_url = e.idp_slo_target_url || "", this.slo_default_relay_state = e.slo_default_relay_state || "";
  }
};
var pt = "saml_auths";
function ln(t) {
  return new Co(t);
}
function xl(t = {}) {
  return S({ query_params: t, fn: ln, path: pt });
}
function Il(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: ln,
    path: pt
  });
}
function wl(t) {
  return U({ form_data: t, query_params: {}, fn: ln, path: pt });
}
function Pl(t) {
  return O({ id: t, query_params: {}, path: pt });
}
var Qe = "settings";
function dt(t) {
  return new Ue(t);
}
function El(t = {}) {
  return S({ query_params: t, fn: dt, path: Qe });
}
function Ol(t, e, n = {}, r = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: n,
    method: r,
    fn: dt,
    path: Qe
  });
}
function Ul(t, e = {}) {
  return U({ form_data: t, query_params: e, fn: dt, path: Qe });
}
function ql(t, e = {}) {
  return g({
    id: t,
    task_name: "history",
    form_data: e,
    method: "get",
    callback: (n) => n.map((r) => dt(r)),
    path: Qe
  });
}
var D = "systems";
function Re(t) {
  return new pi(t);
}
function Cl(t = {}) {
  return S({ query_params: t, fn: Re, path: D });
}
function Ml(t) {
  return S({ query_params: t, fn: Re, path: `${D}/with_emails` });
}
function Dl(t, e = {}) {
  return k({ id: t, query_params: e, fn: Re, path: D });
}
function Nl(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Re,
    path: D
  });
}
function Hl(t) {
  return U({ form_data: t, query_params: {}, fn: Re, path: D });
}
function Fl(t) {
  return O({ id: t, query_params: {}, path: D });
}
function zl(t, e, n = {}) {
  return g({
    id: t,
    task_name: `module/${e}`,
    form_data: n,
    method: "put",
    callback: (r) => Re(r),
    path: D
  });
}
function jl(t, e) {
  return g({
    id: t,
    task_name: `module/${e}`,
    form_data: {},
    method: "del",
    callback: (n) => Re(n),
    path: D
  });
}
function Wl(t, e = {}) {
  return g({
    id: t,
    task_name: "start",
    form_data: e,
    path: D
  });
}
function Ll(t, e = {}) {
  return g({
    id: t,
    task_name: "stop",
    form_data: e,
    path: D
  });
}
function Bl(t, e, n, r = 1, i = []) {
  return g({
    id: t,
    task_name: `${n}_${r}/${encodeURIComponent(e)}`,
    form_data: i,
    path: D
  });
}
function Gl(t, e, n = 1) {
  return g({
    id: t,
    task_name: `${e}_${n}`,
    method: "get",
    path: D
  });
}
function Kl(t, e, n = 1) {
  return g({
    id: t,
    task_name: `functions/${e}_${n}`,
    method: "get",
    path: D
  });
}
function Zl(t) {
  return S({
    query_params: {},
    fn: (e) => new rn(e),
    path: `${D}/${t}/zones`
  });
}
function Yl(t, e = {}) {
  return S({
    query_params: e,
    fn: (n) => new de(n),
    path: `${D}/${t}/triggers`
  });
}
function Jl(t, e) {
  return g({
    id: t,
    task_name: "triggers",
    form_data: e,
    method: "post",
    callback: (n) => new de(n),
    path: D
  });
}
function Xl(t, e) {
  return g({
    id: t,
    task_name: `triggers/${e}`,
    method: "del",
    path: D
  });
}
function eh(t) {
  return g({
    id: t,
    task_name: "settings",
    method: "get",
    callback: (e) => e.map((n) => new Ue(n)),
    path: D
  });
}
var Ze = "triggers";
function hn(t) {
  return new de(t);
}
function sh(t = {}) {
  return S({ query_params: t, fn: hn, path: Ze });
}
function oh(t, e = {}) {
  return k({ id: t, query_params: e, fn: hn, path: Ze });
}
function uh(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: hn,
    path: Ze
  });
}
function ch(t) {
  return U({ form_data: t, query_params: {}, fn: hn, path: Ze });
}
function ah(t) {
  return O({ id: t, query_params: {}, path: Ze });
}
function lh(t) {
  return g({
    id: t,
    task_name: "instances",
    form_data: {},
    method: "get",
    callback: (e) => e.map((n) => new de(n)),
    path: Ze
  });
}
var Mo = /* @__PURE__ */ ((t) => (t.EQ = "equal", t.NEQ = "not_equal", t.GT = "greater_than", t.GTE = "greater_than_or_equal", t.LT = "less_than", t.LTE = "less_than_or_equal", t.AND = "and", t.OR = "or", t.XOR = "exclusive_or", t))(Mo || {});
var Do = /* @__PURE__ */ ((t) => (t.AT = "at", t.CRON = "cron", t))(Do || {});
var J = "users";
function qe(t) {
  return new Vn(t);
}
function fh(t = {}) {
  return S({ query_params: t, fn: qe, path: J });
}
function ph(t, e = {}) {
  return k({ id: t, query_params: e, fn: qe, path: J });
}
function dh(t = {}) {
  return k({ id: "current", query_params: t, fn: qe, path: J });
}
function _h(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: qe,
    path: J
  });
}
function mh(t) {
  return U({ form_data: t, query_params: {}, fn: qe, path: J });
}
function yh(t, e = {}) {
  return O({ id: t, query_params: e, path: J });
}
var _e = "zones";
function fn(t) {
  return new rn(t);
}
function Ah(t = {}) {
  return S({ query_params: t, fn, path: _e });
}
function Ih(t = {}) {
  return k({
    id: "tags",
    query_params: t,
    fn: (e) => e,
    path: _e
  });
}
function wh(t, e = {}) {
  return k({ id: t, query_params: e, fn, path: _e });
}
function Ph(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn,
    path: _e
  });
}
function Eh(t) {
  return U({ form_data: t, query_params: {}, fn, path: _e });
}
function Th(t) {
  return O({ id: t, query_params: {}, path: _e });
}
function Oh(t, e = {}) {
  return S({
    query_params: e,
    fn: (n) => new de(n),
    path: `${_e}/${t}/triggers`
  });
}
function Uh(t, e, n, r = 1, i = []) {
  return g({
    id: t,
    task_name: `exec/${encodeURIComponent(
      n + "_" + r
    )}/${encodeURIComponent(e)}`,
    form_data: i,
    path: _e
  });
}
var jo = class {
  id;
  created_at;
  updated_at;
  name;
  description;
  uri;
  playback_type;
  authority_id;
  enabled;
  params;
  defaults;
  constructor(e = {}) {
    this.id = e.id || "", this.created_at = e.created_at || 0, this.updated_at = e.updated_at || 0, this.name = e.name || "", this.description = e.description || "", this.uri = e.uri || "", this.playback_type = e.playback_type || "static", this.authority_id = e.authority_id || "", this.enabled = e.enabled ?? true, this.params = e.params || {}, this.defaults = e.defaults || {};
  }
};
var _t = "signage/plugins";
function _n(t) {
  return new jo(t);
}
function Xh(t = {}) {
  return S({ query_params: t, fn: _n, path: _t });
}
function tf(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: _n,
    path: _t
  });
}
function nf(t) {
  return U({
    form_data: t,
    query_params: {},
    fn: _n,
    path: _t
  });
}
function rf(t, e = {}) {
  return O({ id: t, query_params: e, path: _t });
}
var Qo = {
  url: "",
  deserializer: function(t) {
    return JSON.parse(t.data);
  },
  serializer: function(t) {
    return JSON.stringify(t);
  }
};
var Zo = "WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }";
var Yo = (function(t) {
  ie(e, t);
  function e(n, r) {
    var i = t.call(this) || this;
    if (i._socket = null, n instanceof F)
      i.destination = r, i.source = n;
    else {
      var s = i._config = nt({}, Qo);
      if (i._output = new Pe(), typeof n == "string")
        s.url = n;
      else
        for (var o in n)
          n.hasOwnProperty(o) && (s[o] = n[o]);
      if (!s.WebSocketCtor && WebSocket)
        s.WebSocketCtor = WebSocket;
      else if (!s.WebSocketCtor)
        throw new Error("no WebSocket constructor can be found");
      i.destination = new An();
    }
    return i;
  }
  return e.prototype.lift = function(n) {
    var r = new e(this._config, this.destination);
    return r.operator = n, r.source = this, r;
  }, e.prototype._resetState = function() {
    this._socket = null, this.source || (this.destination = new An()), this._output = new Pe();
  }, e.prototype.multiplex = function(n, r, i) {
    var s = this;
    return new F(function(o) {
      try {
        s.next(n());
      } catch (c) {
        o.error(c);
      }
      var u = s.subscribe({
        next: function(c) {
          try {
            i(c) && o.next(c);
          } catch (l) {
            o.error(l);
          }
        },
        error: function(c) {
          return o.error(c);
        },
        complete: function() {
          return o.complete();
        }
      });
      return function() {
        try {
          s.next(r());
        } catch (c) {
          o.error(c);
        }
        u.unsubscribe();
      };
    });
  }, e.prototype._connectSocket = function() {
    var n = this, r = this._config, i = r.WebSocketCtor, s = r.protocol, o = r.url, u = r.binaryType, c = this._output, l = null;
    try {
      l = s ? new i(o, s) : new i(o), this._socket = l, u && (this._socket.binaryType = u);
    } catch (b) {
      c.error(b);
      return;
    }
    var y = new Te(function() {
      n._socket = null, l && l.readyState === 1 && l.close();
    });
    l.onopen = function(b) {
      var m = n._socket;
      if (!m) {
        l.close(), n._resetState();
        return;
      }
      var a = n._config.openObserver;
      a && a.next(b);
      var d = n.destination;
      n.destination = Wt.create(function(f) {
        if (l.readyState === 1)
          try {
            var w = n._config.serializer;
            l.send(w(f));
          } catch (x) {
            n.destination.error(x);
          }
      }, function(f) {
        var w = n._config.closingObserver;
        w && w.next(void 0), f && f.code ? l.close(f.code, f.reason) : c.error(new TypeError(Zo)), n._resetState();
      }, function() {
        var f = n._config.closingObserver;
        f && f.next(void 0), l.close(), n._resetState();
      }), d && d instanceof An && y.add(d.subscribe(n.destination));
    }, l.onerror = function(b) {
      n._resetState(), c.error(b);
    }, l.onclose = function(b) {
      l === n._socket && n._resetState();
      var m = n._config.closeObserver;
      m && m.next(b), b.wasClean ? c.complete() : c.error(b);
    }, l.onmessage = function(b) {
      try {
        var m = n._config.deserializer;
        c.next(m(b));
      } catch (a) {
        c.error(a);
      }
    };
  }, e.prototype._subscribe = function(n) {
    var r = this, i = this.source;
    return i ? i.subscribe(n) : (this._socket || this._connectSocket(), this._output.subscribe(n), n.add(function() {
      var s = r._socket;
      r._output.observers.length === 0 && (s && (s.readyState === 1 || s.readyState === 0) && s.close(), r._resetState());
    }), n);
  }, e.prototype.unsubscribe = function() {
    var n = this._socket;
    n && (n.readyState === 1 || n.readyState === 0) && n.close(), this._resetState(), t.prototype.unsubscribe.call(this);
  }, e;
})(Un);
function Jo(t) {
  return new Yo(t);
}
var re = /* @__PURE__ */ ((t) => (t[t.PARSE_ERROR = 0] = "PARSE_ERROR", t[t.BAD_REQUEST = 1] = "BAD_REQUEST", t[t.ACCESS_DENIED = 2] = "ACCESS_DENIED", t[t.REQUEST_FAILED = 3] = "REQUEST_FAILED", t[t.UNKNOWN_CMD = 4] = "UNKNOWN_CMD", t[t.SYS_NOT_FOUND = 5] = "SYS_NOT_FOUND", t[t.MOD_NOT_FOUND = 6] = "MOD_NOT_FOUND", t[t.UNEXPECTED_FAILURE = 7] = "UNEXPECTED_FAILURE", t))(re || {});
var Si = /* @__PURE__ */ ((t) => (t.Info = "info", t.Debug = "debug", t.Warning = "warn", t.Error = "error", t.Fatal = "fatal", t.Trace = "trace", t))(Si || {});
var Ft = {};
function tu(t) {
  return Ft[t];
}
var ki = 15;
var kt = 0;
var X;
var xi = 0;
var V = {};
var nr = {};
var De = {};
var nu = {};
var Ae = new ve(false);
De._place_os_status = Ae.asObservable();
var Ai = new ve([0, 0]);
De._place_os_sync = Ai.asObservable();
var Ii = Date.now();
var He;
var zt = 0;
var me = null;
var Tt;
var rr = 0;
var xt = 10 * 1e3;
var wi = new Pe();
De._place_os_debug_events = wi.asObservable();
function In() {
  return h().indexOf("/control/") >= 0 ? "/control/websocket" : `${Kr()}/systems/control`;
}
function Pi() {
  return Ae.getValue();
}
function ru() {
  return De._place_os_status;
}
function iu(t, e = nr, n = De) {
  const r = `${t.sys}|${t.mod}_${t.index}|${t.name}`;
  return e[r] || (e[r] = new ve(void 0), n[r] = e[r].asObservable()), n[r];
}
function su(t, e = nr) {
  const n = `${t.sys}|${t.mod}_${t.index}|${t.name}`;
  if (e[n])
    return e[n].getValue();
}
function br(t, e = 0, n = Ye) {
  const r = __spreadValues({
    id: ++kt,
    cmd: "bind"
  }, t);
  return n(r, e);
}
function ou(t, e = 0, n = Ye) {
  const r = __spreadValues({
    id: ++kt,
    cmd: "unbind"
  }, t);
  return n(r, e);
}
function uu(t, e = xt, n = Ye) {
  const r = __spreadValues({
    id: ++kt,
    cmd: "exec"
  }, t);
  return n(r, e);
}
function yp(t, e = xt, n = Ye) {
  const r = __spreadValues({
    id: ++kt,
    cmd: "debug"
  }, t);
  return n(r, e);
}
function gp(t, e = xt, n = Ye) {
  const r = __spreadValues({
    id: ++kt,
    cmd: "ignore"
  }, t);
  return n(r, e);
}
function Ye(t, e = xt, n = 0) {
  const r = `${t.cmd}|${t.sys}|${t.mod}${t.index}|${t.name}|${t.args}|${Hs()}`;
  if (V[r])
    p("WS", "Request already in progress. Waiting...", t);
  else {
    const i = __spreadProps(__spreadValues({}, t), { key: r });
    i.promise = new Promise((s, o) => {
      const u = () => {
        delete V[r], V[r] = null, Ye(t, e, n).then(
          (c) => s(c),
          (c) => o(c)
        );
      };
      if (X && Pi()) {
        jn() && du(t, X, nu), i.resolve = s, i.reject = o;
        const c = `${t.sys}, ${t.mod}_${t.index}, ${t.name}`;
        p(
          "WS",
          `[${t.cmd.toUpperCase()}](${t.id}) ${c}`,
          t.args
        ), X.next(t), e > 0 && oe(
          `${r}`,
          () => {
            o("Request timed out."), delete V[r], V[r] = null;
          },
          e
        );
      } else me ? setTimeout(() => u(), 1e3) : ir().then(() => u());
    }), V[r] = i;
  }
  return V[r].promise;
}
function Ei(t) {
  if (t !== "pong" && t instanceof Object) {
    if (t.type === "notify" && t.meta)
      lu(t.meta, t.value);
    else if (t.type === "success")
      cu(t);
    else if (t.type === "debug") {
      p(
        "WS",
        `[DEBUG] ${t.mod}${t.klass || ""} \u2192`,
        t.msg
      );
      const e = t.meta || { mod: "", index: "" };
      wi.next({
        mod_id: t.mod || "<empty>",
        module: `${e.mod}_${e.index}`,
        class_name: t.klass || "<empty>",
        message: t.msg || "<empty>",
        level: t.level || Si.Debug,
        time: Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3)
      });
    } else t.type === "error" ? au(t) : t.cmd || p("WS", "Invalid websocket message", t, "error");
    Oe(`${t.id}`);
  } else t === "pong" && (rr = Date.now(), p("WS", "Pong!"));
}
function cu(t) {
  const e = Object.keys(V).map((n) => V[n]).find((n) => n?.id === t.id);
  p("WS", `[SUCCESS](${t.id})`), e && e.resolve && (e.resolve(t.value), delete V[e.key]);
}
function au(t) {
  let e = "UNEXPECTED FAILURE";
  switch (t.code) {
    case re.ACCESS_DENIED:
      e = "ACCESS DENIED";
      break;
    case re.BAD_REQUEST:
      e = "BAD REQUEST";
      break;
    case re.MOD_NOT_FOUND:
      e = "MODULE NOT FOUND";
      break;
    case re.SYS_NOT_FOUND:
      e = "SYSTEM NOT FOUND";
      break;
    case re.PARSE_ERROR:
      e = "PARSE ERROR";
      break;
    case re.REQUEST_FAILED:
      e = "REQUEST FAILED";
      break;
    case re.UNKNOWN_CMD:
      e = "UNKNOWN COMMAND";
      break;
  }
  p(
    "WS",
    `[ERROR] ${e}(${t.id}): ${t.msg}`,
    void 0,
    "error"
  );
  const n = Object.keys(V).map((r) => V[r]).filter((r) => r).find((r) => r.id === t.id);
  n && n.reject && (n.reject(t), Oe(`${n.key}`), delete V[n.key]);
}
function lu(t, e, n = nr, r = De) {
  const i = `${t.sys}|${t.mod}_${t.index}|${t.name}`;
  n[i] || (n[i] = new ve(null), r[i] = n[i].asObservable());
  const s = `${t.sys}, ${t.mod}_${t.index}, ${t.name}`;
  p("WS", `[NOTIFY] ${s} changed`, [
    n[i].getValue(),
    "\u2192",
    e
  ]), n[i].next(e);
}
function ir(t = 0) {
  return me == null && (me = new Promise((e) => {
    if (t > 40)
      return location.reload();
    zt++, Ii = Date.now(), X = jn() ? pu() : hu(), X ? (p("WS(Debug)", "Authority:", [Dt()]), p("WS", "Connecting to websocket..."), X.subscribe(
      (n) => {
        Ae.getValue() || (p("WS", "Connection established."), e()), Ae.next(true), zt = 0, wn(), Ei(n);
      },
      (n) => {
        X = void 0, me = null, Sr(), wn(), fu(n);
      },
      () => {
        X = void 0, me = null, Sr(), p("WS", "Connection closed by browser."), Ae.next(false), jt();
      }
    ), He && clearInterval(He), rr = Date.now(), $r(), He = setInterval(
      () => $r(),
      ki * 1e3
    ), wn(), xi += 1, Tt = setTimeout(() => {
      p("WS", "Unhealthy connection. Reconnecting..."), Ae.next(false), me = null, jt();
    }, 30 * 1e3)) : (X ? p(
      "WS",
      `Waiting on auth(${t}). Retrying in ${1e3 * Math.min(10, t + 1)}ms...`,
      [!!ee(), !!Dt()],
      "info"
    ) : p(
      "WS",
      `Failed to create websocket(${t}). Retrying in ${1e3 * Math.min(10, t + 1)}ms...`,
      void 0,
      "error"
    ), setTimeout(
      () => {
        me = null, ir(t).then((n) => e(n));
      },
      1e3 * Math.min(10, ++t)
    ));
  })), me;
}
function hu() {
  if (!Dt() || !ee()) return null;
  const t = Ys() || location.protocol.indexOf("https") >= 0;
  let e = `ws${t ? "s" : ""}://${qn()}${In()}${Qr() ? "?fixed_device=true" : ""}`;
  const n = ee();
  let r = n === "x-api-key" ? `api-key=${Gt()}` : `bearer_token=${n}`;
  return !Gs() && !Ds() ? (p("WS", "Authenticating through cookie..."), r += `;max-age=120;path=${In()};`, r += `${t ? "secure;" : ""}samesite=strict`, document.cookie = r, p("WS", "Cookies:", [document.cookie, r])) : (p("WS", "Authenticating through URL query parameter..."), e += `${e.indexOf("?") >= 0 ? "&" : "?"}${r}`), p(
    "WS",
    `Creating websocket connection to ws${t ? "s" : ""}://${qn()}${In()}`
  ), Jo({
    url: e,
    serializer: (i) => typeof i == "object" ? JSON.stringify(i) : i,
    deserializer: (i) => {
      let s = i.data;
      if (s === "pong") return s;
      try {
        return JSON.parse(i.data);
      } catch {
        return s;
      }
    }
  });
}
function jt() {
  Ai.next([xi, Date.now() - Ii]), X && Pi() && (X.complete(), He && (clearInterval(He), He = void 0)), p(
    "WS",
    `Reconnecting in ${Math.min(
      5e3,
      zt * 300 || 1e3
    )}ms...`
  ), oe(
    "reconnect",
    () => ir(),
    Math.min(5e3, (zt + 1) * 300 || 1e3)
  );
}
function $r() {
  if (Date.now() - rr > 4 * ki * 1e3)
    return jt();
  X?.next("ping");
}
function fu(t) {
  Ae.next(false), p("WS", "Websocket error:", t, void 0, "error"), t.status === 401 && Ln(), Zr(), jt();
}
function wn() {
  Tt && (clearTimeout(Tt), Tt = void 0);
}
function pu() {
  const t = new Pe();
  return t.subscribe(
    (e) => Ei(e)
  ), t;
}
function Pn(t, e) {
  const n = typeof e == "string" ? e : e?.message || e?.msg || "Mock realtime callback failed";
  return {
    id: t.id,
    type: "error",
    code: e?.code || re.UNEXPECTED_FAILURE,
    msg: n
  };
}
function du(t, e, n) {
  const r = `${t.sys}|${t.mod}_${t.index}|${t.name}`, i = tu(t.sys), s = i && i[t.mod] ? i[t.mod][t.index - 1 || 0] : null;
  if (s) {
    try {
      switch (t.cmd) {
        case "bind":
          n[r] = s.listen(t.name).subscribe({
            next: (o) => {
              setTimeout(
                () => {
                  e.next({
                    type: "notify",
                    value: o,
                    meta: t
                  });
                },
                Math.floor(Math.random() * 100 + 50)
                // Add natural delay before response
              );
            },
            error: (o) => {
              p(
                "WS",
                `[MOCK ERROR](${t.id}) listener failed`,
                o,
                "error"
              ), e.next(Pn(t, o));
            }
          });
          break;
        case "unbind":
          n[r] && (n[r].unsubscribe(), delete n[r], Oe(`${r}`));
          break;
      }
    } catch (o) {
      p("WS", `[MOCK ERROR](${t.id}) request failed`, o, "error"), oe(
        `${t.id}-error`,
        () => e.next(Pn(t, o)),
        10
      );
      return;
    }
    oe(
      `${t.id}-response`,
      () => {
        try {
          const o = {
            id: t.id,
            type: "success",
            value: t.cmd === "exec" ? s.call(t.name, t.args) : null
          };
          e.next(o);
        } catch (o) {
          p(
            "WS",
            `[MOCK ERROR](${t.id}) execute failed`,
            o,
            "error"
          ), e.next(Pn(t, o));
        }
      },
      10
    );
  } else
    oe(
      `${t.id}-error`,
      () => e.next({
        id: t.id,
        type: "error",
        code: i ? re.SYS_NOT_FOUND : re.MOD_NOT_FOUND
      }),
      10
    );
}
function Sr() {
  for (const t in V)
    V[t] && delete V[t];
}
var kr = class {
  constructor(e, n) {
    this._module = e, this.name = n, ru().pipe(vs()).subscribe((r) => {
      r && (this._stale_bindings || this._pending === 1) ? (p("VAR", "Re-binding to status variable", this.binding()), this.rebind()) : r || (Oe(
        `rebind:${JSON.stringify(this.binding())}`
      ), p(
        "VAR",
        "Binding dropped due to disconnection, re-binding when possible.",
        this.binding()
      ), this._stale_bindings = this._binding_count || this._stale_bindings, this._binding_count = 0);
    });
  }
  /** Status variable name */
  name;
  /** Active pending state of the variable binding */
  _pending = 0;
  /** Number of active bindings to this variable */
  _binding_count = 0;
  /** Number of bindings to restore on reconnection */
  _stale_bindings = 0;
  /** Number of bindings to this status variable */
  get count() {
    return this._binding_count;
  }
  /** Current value of the binding */
  get value() {
    return su(this.binding());
  }
  /**
   * Get an observable that emits the current value of the binding
   */
  listen() {
    return iu(this.binding());
  }
  /**
   * Subscribe to changes of the variable's binding value.
   * Note: Initial value emitted may be `undefined`
   * @param next Callback for changes to the bindings value
   */
  subscribe(e) {
    return this.listen().subscribe(e);
  }
  bindThenSubscribe(e) {
    const n = this.bind();
    return this.listen().subscribe({
      next: (r) => {
        try {
          e(r);
        } catch (i) {
          console.error(i);
        }
      },
      complete: () => n(),
      error: () => n()
    });
  }
  /**
   * Bind to the status variable's value
   */
  bind() {
    return (this._binding_count <= 0 && this._stale_bindings <= 0 || this._pending === 2) && (this._pending = 1, br(this.binding()).then(() => {
      this._binding_count++, this._pending = 0;
    }).catch(() => null)), () => this.unbind();
  }
  /**
   * Unbind from status variable
   */
  unbind() {
    this._binding_count === 1 && this._pending === 0 ? (this._pending = 2, ou(this.binding()).then(() => {
      this._pending === 2 && (this._pending = 0), this._binding_count--;
    })) : this._binding_count = Math.max(this._binding_count - 1, 0);
  }
  /**
   * Rebind to the status variable
   */
  async rebind() {
    !this._stale_bindings && this._pending !== 1 || oe(
      `rebind:${JSON.stringify(this.binding())}`,
      async () => {
        await br(this.binding()), this._binding_count = this._stale_bindings || 1, this._stale_bindings = 0;
      },
      100
    );
  }
  /**
   * Generate binding details for the status variable
   */
  binding() {
    return {
      sys: this._module.system.id,
      mod: this._module.name,
      index: this._module.index,
      name: this.name
    };
  }
};
var _u = class {
  constructor(e, n) {
    this._system = e, this._id = n;
  }
  /** Mapping of module bindings */
  _bindings = {};
  get id() {
    return `${this.name}_${this.index}`;
  }
  /** Parent system of the module */
  get system() {
    return this._system;
  }
  /** Module index */
  get index() {
    const n = this._id.split("_").pop();
    return parseInt(n || "", 10) || 1;
  }
  /** Module name */
  get name() {
    const e = this._id.split("_");
    return e.pop(), e.join("_");
  }
  /**
   * Get binding with the given name
   * @param name Name of the binding
   * @deprecated Use `variable` instead
   */
  binding(e) {
    return this._bindings[e] || (this._bindings[e] = new kr(this, e)), this._bindings[e];
  }
  /**
   * Get binding with the given name
   * @param name Name of the binding
   */
  variable(e) {
    return this._bindings[e] || (this._bindings[e] = new kr(this, e)), this._bindings[e];
  }
  /**
   * Execute method on the engine module
   * @param method Name of the method
   * @param args Array of arguments to pass to the method
   */
  execute(e, n, r = xt) {
    return uu(
      {
        sys: this._system.id,
        mod: this.name,
        index: this.index,
        name: e,
        args: n
      },
      r
    );
  }
};
var mu = class {
  /** Unique idetifier of the system */
  id;
  /** Mapping of engine modules within the system */
  _module_list = {};
  constructor(e) {
    this.id = e;
  }
  /**
   * Get binding interface for the given module
   * @param module_id ID of the module
   * @param index Index of the module within the system
   */
  module(e, n = 1) {
    if (!e)
      throw new Error("Invalid module ID");
    const r = e.split("_");
    r.length > 1 && Number.isInteger(+r[r.length - 1]) && (n = +r[r.length - 1], r.pop()), n < 1 && (n = 1);
    const i = r.join("_");
    for (this._module_list[i] || (this._module_list[i] = []); this._module_list[i].length < n; )
      this._module_list[i].push(
        new _u(
          this,
          `${i}_${this._module_list[i].length + 1}`
        )
      );
    return this._module_list[i][n - 1];
  }
};
var En = {};
function yu(t) {
  return En[t] || (En[t] = new mu(t)), En[t];
}
function vp(t, e, n = 1) {
  return yu(t).module(e, n);
}

export {
  Subscription,
  pipe,
  Observable,
  refCount,
  ConnectableObservable,
  Subject,
  BehaviorSubject,
  ReplaySubject,
  asapScheduler,
  animationFrameScheduler,
  EMPTY,
  from,
  of,
  throwError,
  isObservable,
  EmptyError,
  lastValueFrom,
  firstValueFrom,
  map,
  combineLatest,
  mergeMap,
  mergeAll,
  concat,
  defer,
  forkJoin,
  timer,
  interval,
  merge,
  NEVER,
  filter,
  auditTime,
  catchError,
  concatMap,
  debounceTime,
  defaultIfEmpty,
  take,
  delay,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  finalize,
  first,
  takeLast,
  last2 as last,
  pairwise,
  retry,
  scan,
  shareReplay,
  skip,
  skipWhile,
  startWith,
  switchMap,
  takeUntil,
  takeWhile,
  tap,
  Ct,
  Ms,
  h,
  vu,
  Gt,
  ee,
  Dt,
  bu,
  jn,
  $u,
  Su,
  Ln,
  Au,
  wu,
  v,
  T,
  fe,
  ne,
  go,
  S,
  U,
  R,
  O,
  zu,
  Wu,
  Lu,
  Bu,
  Vn,
  $o,
  So,
  Ju,
  ec,
  tc,
  nc,
  sc,
  uc,
  cc,
  Ao,
  hc,
  fc,
  pc,
  dc,
  _c,
  Ge,
  Ue,
  Ht,
  ci,
  yc,
  gc,
  vc,
  bc,
  $c,
  Sc,
  kc,
  Ac,
  Ic,
  wc,
  Pc,
  Ec,
  Tc,
  Oc,
  Kn,
  Vc,
  Kc,
  Zc,
  Yc,
  Jc,
  oa,
  ca,
  aa,
  la,
  de,
  rn,
  ha,
  pa,
  da,
  _a,
  To,
  ma,
  ga,
  va,
  ba,
  $a,
  Sa,
  ka,
  xa,
  Ia,
  pi,
  di,
  Ea,
  Ta,
  Oa,
  Ua,
  Ra,
  qa,
  Ca,
  Na,
  Ha,
  Fa,
  Ro,
  ja,
  La,
  Ba,
  Ga,
  yi,
  qo,
  el,
  tl,
  nl,
  rl,
  il,
  sl,
  ol,
  ul,
  cl,
  al,
  ll,
  hl,
  fl,
  pl,
  dl,
  Co,
  xl,
  Il,
  wl,
  Pl,
  El,
  Ol,
  Ul,
  ql,
  Cl,
  Ml,
  Dl,
  Nl,
  Hl,
  Fl,
  zl,
  jl,
  Wl,
  Ll,
  Bl,
  Gl,
  Kl,
  Zl,
  Yl,
  Jl,
  Xl,
  eh,
  sh,
  oh,
  uh,
  ch,
  ah,
  lh,
  Mo,
  Do,
  fh,
  ph,
  dh,
  _h,
  mh,
  yh,
  Ah,
  Ih,
  wh,
  Ph,
  Eh,
  Th,
  Oh,
  Uh,
  jo,
  Xh,
  tf,
  nf,
  rf,
  wi,
  yp,
  gp,
  vp
};
//# sourceMappingURL=chunk-Y5GQFF5E.js.map
