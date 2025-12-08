import {
  __spreadProps,
  __spreadValues
} from "./chunk-VYXW4D3Z.js";

// node_modules/rxjs/dist/esm/internal/util/isFunction.js
function isFunction(value) {
  return typeof value === "function";
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
    var _a;
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
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
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
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
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
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
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
    var _a;
    return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
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
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  }
  error(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  }
  complete() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  _subscribe(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
  }
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
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
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
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v2) {
      return Promise.resolve(v2).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v2) {
        return new Promise(function(a, b2) {
          q.push([n, v2, a, b2]) > 1 || resume(n, v2);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  function resume(n, v2) {
    try {
      step(g[n](v2));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v2) {
    if (f(v2), q.shift(), q.length) resume(q[0][0], q[0][1]);
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
  function settle(resolve, reject, d2, v2) {
    Promise.resolve(v2).then(function(v3) {
      resolve({ value: v3, done: d2 });
    }, reject);
  }
}

// node_modules/rxjs/dist/esm/internal/util/isArrayLike.js
var isArrayLike = ((x) => x && typeof x.length === "number" && typeof x !== "function");

// node_modules/rxjs/dist/esm/internal/util/isPromise.js
function isPromise(value) {
  return isFunction(value === null || value === void 0 ? void 0 : value.then);
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
  var e_1, _a;
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
        if (asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)) yield _a.call(asyncIterable_1);
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
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      const { closed } = this;
      super.unsubscribe();
      !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
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
    var _a;
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
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay2);
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
function defaultCompare(a, b2) {
  return a === b2;
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
    return mergeMap((a, i) => map((b2, ii2) => resultSelector(a, b2, i, ii2))(innerFrom(project(a, i))), concurrent);
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
    var _a;
    (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
    let isUnsub = true;
    source.subscribe(createOperatorSubscriber(subscriber, (value) => {
      var _a2;
      (_a2 = tapObserver.next) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver, value);
      subscriber.next(value);
    }, () => {
      var _a2;
      isUnsub = false;
      (_a2 = tapObserver.complete) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
      subscriber.complete();
    }, (err) => {
      var _a2;
      isUnsub = false;
      (_a2 = tapObserver.error) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver, err);
      subscriber.error(err);
    }, () => {
      var _a2, _b;
      if (isUnsub) {
        (_a2 = tapObserver.unsubscribe) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
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
    var _a;
    if (delay2 != null ? delay2 > 0 : this.delay > 0) {
      return super.recycleAsyncId(scheduler, id, delay2);
    }
    const { actions } = scheduler;
    if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
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
    var _a;
    if (delay2 != null ? delay2 > 0 : this.delay > 0) {
      return super.recycleAsyncId(scheduler, id, delay2);
    }
    const { actions } = scheduler;
    if (id != null && id === scheduler._scheduled && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
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
  return distinctUntilChanged((x, y2) => compare ? compare(x[key], y2[key]) : x[key] === y2[key]);
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
      const p = prev;
      prev = value;
      hasPrev && subscriber.next([p, value]);
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
  return filter((_, index) => count <= index);
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
var on = function(t, e) {
  return on = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, on(t, e);
};
function Z(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  on(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var He = function() {
  return He = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, He.apply(this, arguments);
};
function Vr(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function Qr(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function u(_) {
      try {
        l(r.next(_));
      } catch (m) {
        s(m);
      }
    }
    function c(_) {
      try {
        l(r.throw(_));
      } catch (m) {
        s(m);
      }
    }
    function l(_) {
      _.done ? o(_.value) : i(_.value).then(u, c);
    }
    l((r = r.apply(t, e || [])).next());
  });
}
function Wn(t, e) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, i, o, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = u(0), s.throw = u(1), s.return = u(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function u(l) {
    return function(_) {
      return c([l, _]);
    };
  }
  function c(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, l[0] && (n = 0)), n; ) try {
      if (r = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done) return o;
      switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
        case 0:
        case 1:
          o = l;
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
          if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            n = 0;
            continue;
          }
          if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
            n.label = l[1];
            break;
          }
          if (l[0] === 6 && n.label < o[1]) {
            n.label = o[1], o = l;
            break;
          }
          if (o && n.label < o[2]) {
            n.label = o[2], n.ops.push(l);
            break;
          }
          o[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      l = e.call(t, n);
    } catch (_) {
      l = [6, _], i = 0;
    } finally {
      r = o = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: true };
  }
}
function Oe(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function mt(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n) return t;
  var r = n.call(t), i, o = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) o.push(i.value);
  } catch (u) {
    s = { error: u };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return o;
}
function yt(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, o; r < i; r++)
    (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
  return t.concat(o || Array.prototype.slice.call(e));
}
function Ae(t) {
  return this instanceof Ae ? (this.v = t, this) : new Ae(t);
}
function Yr(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, o = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", s), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(a) {
    return function(h) {
      return Promise.resolve(h).then(a, m);
    };
  }
  function u(a, h) {
    r[a] && (i[a] = function(f) {
      return new Promise(function(S, g) {
        o.push([a, f, S, g]) > 1 || c(a, f);
      });
    }, h && (i[a] = h(i[a])));
  }
  function c(a, h) {
    try {
      l(r[a](h));
    } catch (f) {
      p(o[0][3], f);
    }
  }
  function l(a) {
    a.value instanceof Ae ? Promise.resolve(a.value.v).then(_, m) : p(o[0][2], a);
  }
  function _(a) {
    c("next", a);
  }
  function m(a) {
    c("throw", a);
  }
  function p(a, h) {
    a(h), o.shift(), o.length && c(o[0][0], o[0][1]);
  }
}
function Jr(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Oe == "function" ? Oe(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(o) {
    n[o] = t[o] && function(s) {
      return new Promise(function(u, c) {
        s = t[o](s), i(u, c, s.done, s.value);
      });
    };
  }
  function i(o, s, u, c) {
    Promise.resolve(c).then(function(l) {
      o({ value: l, done: u });
    }, s);
  }
}
function T(t) {
  return typeof t == "function";
}
function Bn(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Xt = Bn(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function gt(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var ge = (function() {
  function t(e) {
    this.initialTeardown = e, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, n, r, i, o;
    if (!this.closed) {
      this.closed = true;
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var u = Oe(s), c = u.next(); !c.done; c = u.next()) {
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
          s.remove(this);
      var _ = this.initialTeardown;
      if (T(_))
        try {
          _();
        } catch (f) {
          o = f instanceof Xt ? f.errors : [f];
        }
      var m = this._finalizers;
      if (m) {
        this._finalizers = null;
        try {
          for (var p = Oe(m), a = p.next(); !a.done; a = p.next()) {
            var h = a.value;
            try {
              An(h);
            } catch (f) {
              o = o ?? [], f instanceof Xt ? o = yt(yt([], mt(o)), mt(f.errors)) : o.push(f);
            }
          }
        } catch (f) {
          r = { error: f };
        } finally {
          try {
            a && !a.done && (i = p.return) && i.call(p);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (o)
        throw new Xt(o);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        An(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && gt(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && gt(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = (function() {
    var e = new t();
    return e.closed = true, e;
  })(), t;
})();
var Vn = ge.EMPTY;
function Qn(t) {
  return t instanceof ge || t && "closed" in t && T(t.remove) && T(t.add) && T(t.unsubscribe);
}
function An(t) {
  T(t) ? t() : t.unsubscribe();
}
var Kr = {
  Promise: void 0
};
var Zr = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, yt([t, e], mt(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Yn(t) {
  Zr.setTimeout(function() {
    throw t;
  });
}
function wn() {
}
function dt(t) {
  t();
}
var Et = (function(t) {
  Z(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = false, n ? (r.destination = n, Qn(n) && n.add(r)) : r.destination = ei, r;
  }
  return e.create = function(n, r, i) {
    return new sn(n, r, i);
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
})(ge);
var Gr = (function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        ft(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        ft(r);
      }
    else
      ft(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        ft(n);
      }
  }, t;
})();
var sn = (function(t) {
  Z(e, t);
  function e(n, r, i) {
    var o = t.call(this) || this, s;
    return T(n) || !n ? s = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : s = n, o.destination = new Gr(s), o;
  }
  return e;
})(Et);
function ft(t) {
  Yn(t);
}
function Xr(t) {
  throw t;
}
var ei = {
  closed: true,
  next: wn,
  error: Xr,
  complete: wn
};
var ln = (function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
function fn(t) {
  return t;
}
function ti(t) {
  return t.length === 0 ? fn : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var D = (function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, o = ri(e) ? e : new sn(e, n, r);
    return dt(function() {
      var s = i, u = s.operator, c = s.source;
      o.add(u ? u.call(o, c) : c ? i._subscribe(o) : i._trySubscribe(o));
    }), o;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var r = this;
    return n = On(n), new n(function(i, o) {
      var s = new sn({
        next: function(u) {
          try {
            e(u);
          } catch (c) {
            o(c), s.unsubscribe();
          }
        },
        error: o,
        complete: i
      });
      r.subscribe(s);
    });
  }, t.prototype._subscribe = function(e) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
  }, t.prototype[ln] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return ti(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = On(e), new e(function(r, i) {
      var o;
      n.subscribe(function(s) {
        return o = s;
      }, function(s) {
        return i(s);
      }, function() {
        return r(o);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
})();
function On(t) {
  var e;
  return (e = t ?? Kr.Promise) !== null && e !== void 0 ? e : Promise;
}
function ni(t) {
  return t && T(t.next) && T(t.error) && T(t.complete);
}
function ri(t) {
  return t && t instanceof Et || ni(t) && Qn(t);
}
function ii(t) {
  return T(t?.lift);
}
function re(t) {
  return function(e) {
    if (ii(e))
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
function J(t, e, n, r, i) {
  return new oi(t, e, n, r, i);
}
var oi = (function(t) {
  Z(e, t);
  function e(n, r, i, o, s, u) {
    var c = t.call(this, n) || this;
    return c.onFinalize = s, c.shouldUnsubscribe = u, c._next = r ? function(l) {
      try {
        r(l);
      } catch (_) {
        n.error(_);
      }
    } : t.prototype._next, c._error = o ? function(l) {
      try {
        o(l);
      } catch (_) {
        n.error(_);
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
})(Et);
var si = Bn(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
});
var me = (function(t) {
  Z(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = false, n.currentObservers = null, n.observers = [], n.isStopped = false, n.hasError = false, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new un(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new si();
  }, e.prototype.next = function(n) {
    var r = this;
    dt(function() {
      var i, o;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = Oe(r.currentObservers), u = s.next(); !u.done; u = s.next()) {
            var c = u.value;
            c.next(n);
          }
        } catch (l) {
          i = { error: l };
        } finally {
          try {
            u && !u.done && (o = s.return) && o.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(n) {
    var r = this;
    dt(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = true, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    dt(function() {
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
    var r = this, i = this, o = i.hasError, s = i.isStopped, u = i.observers;
    return o || s ? Vn : (this.currentObservers = null, u.push(n), new ge(function() {
      r.currentObservers = null, gt(u, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, o = r.thrownError, s = r.isStopped;
    i ? n.error(o) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new D();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new un(n, r);
  }, e;
})(D);
var un = (function(t) {
  Z(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Vn;
  }, e;
})(me);
var le = (function(t) {
  Z(e, t);
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
    var n = this, r = n.hasError, i = n.thrownError, o = n._value;
    if (r)
      throw i;
    return this._throwIfClosed(), o;
  }, e.prototype.next = function(n) {
    t.prototype.next.call(this, this._value = n);
  }, e;
})(me);
var hn = {
  now: function() {
    return (hn.delegate || Date).now();
  },
  delegate: void 0
};
var en = (function(t) {
  Z(e, t);
  function e(n, r, i) {
    n === void 0 && (n = 1 / 0), r === void 0 && (r = 1 / 0), i === void 0 && (i = hn);
    var o = t.call(this) || this;
    return o._bufferSize = n, o._windowTime = r, o._timestampProvider = i, o._buffer = [], o._infiniteTimeWindow = true, o._infiniteTimeWindow = r === 1 / 0, o._bufferSize = Math.max(1, n), o._windowTime = Math.max(1, r), o;
  }
  return e.prototype.next = function(n) {
    var r = this, i = r.isStopped, o = r._buffer, s = r._infiniteTimeWindow, u = r._timestampProvider, c = r._windowTime;
    i || (o.push(n), !s && o.push(u.now() + c)), this._trimBuffer(), t.prototype.next.call(this, n);
  }, e.prototype._subscribe = function(n) {
    this._throwIfClosed(), this._trimBuffer();
    for (var r = this._innerSubscribe(n), i = this, o = i._infiniteTimeWindow, s = i._buffer, u = s.slice(), c = 0; c < u.length && !n.closed; c += o ? 1 : 2)
      n.next(u[c]);
    return this._checkFinalizedStatuses(n), r;
  }, e.prototype._trimBuffer = function() {
    var n = this, r = n._bufferSize, i = n._timestampProvider, o = n._buffer, s = n._infiniteTimeWindow, u = (s ? 1 : 2) * r;
    if (r < 1 / 0 && u < o.length && o.splice(0, o.length - u), !s) {
      for (var c = i.now(), l = 0, _ = 1; _ < o.length && o[_] <= c; _ += 2)
        l = _;
      l && o.splice(0, l + 1);
    }
  }, e;
})(me);
var ui = (function(t) {
  Z(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
})(ge);
var En = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, yt([t, e], mt(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
};
var ci = (function(t) {
  Z(e, t);
  function e(n, r) {
    var i = t.call(this, n, r) || this;
    return i.scheduler = n, i.work = r, i.pending = false, i;
  }
  return e.prototype.schedule = function(n, r) {
    var i;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = n;
    var o = this.id, s = this.scheduler;
    return o != null && (this.id = this.recycleAsyncId(s, o, r)), this.pending = true, this.delay = r, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(s, this.id, r), this;
  }, e.prototype.requestAsyncId = function(n, r, i) {
    return i === void 0 && (i = 0), En.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === false)
      return r;
    r != null && En.clearInterval(r);
  }, e.prototype.execute = function(n, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = false;
    var i = this._execute(n, r);
    if (i)
      return i;
    this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(n, r) {
    var i = false, o;
    try {
      this.work(n);
    } catch (s) {
      i = true, o = s || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), o;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var n = this, r = n.id, i = n.scheduler, o = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = false, gt(o, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
})(ui);
var In = (function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = hn.now, t;
})();
var ai = (function(t) {
  Z(e, t);
  function e(n, r) {
    r === void 0 && (r = In.now);
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
})(In);
var Jn = new ai(ci);
var li = Jn;
var fi = new D(function(t) {
  return t.complete();
});
function hi(t) {
  return t && T(t.schedule);
}
var Kn = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Zn(t) {
  return T(t?.then);
}
function Gn(t) {
  return T(t[ln]);
}
function Xn(t) {
  return Symbol.asyncIterator && T(t?.[Symbol.asyncIterator]);
}
function er(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function di() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var tr = di();
function nr(t) {
  return T(t?.[tr]);
}
function rr(t) {
  return Yr(this, arguments, function() {
    var n, r, i, o;
    return Wn(this, function(s) {
      switch (s.label) {
        case 0:
          n = t.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, Ae(n.read())];
        case 3:
          return r = s.sent(), i = r.value, o = r.done, o ? [4, Ae(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, Ae(i)];
        case 6:
          return [4, s.sent()];
        case 7:
          return s.sent(), [3, 2];
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
function ir(t) {
  return T(t?.getReader);
}
function ie(t) {
  if (t instanceof D)
    return t;
  if (t != null) {
    if (Gn(t))
      return pi(t);
    if (Kn(t))
      return _i(t);
    if (Zn(t))
      return mi(t);
    if (Xn(t))
      return or(t);
    if (nr(t))
      return yi(t);
    if (ir(t))
      return gi(t);
  }
  throw er(t);
}
function pi(t) {
  return new D(function(e) {
    var n = t[ln]();
    if (T(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function _i(t) {
  return new D(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function mi(t) {
  return new D(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Yn);
  });
}
function yi(t) {
  return new D(function(e) {
    var n, r;
    try {
      for (var i = Oe(t), o = i.next(); !o.done; o = i.next()) {
        var s = o.value;
        if (e.next(s), e.closed)
          return;
      }
    } catch (u) {
      n = { error: u };
    } finally {
      try {
        o && !o.done && (r = i.return) && r.call(i);
      } finally {
        if (n) throw n.error;
      }
    }
    e.complete();
  });
}
function or(t) {
  return new D(function(e) {
    bi(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function gi(t) {
  return or(rr(t));
}
function bi(t, e) {
  var n, r, i, o;
  return Qr(this, void 0, void 0, function() {
    var s, u;
    return Wn(this, function(c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), n = Jr(t), c.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = c.sent(), !!r.done) return [3, 4];
          if (s = r.value, e.next(s), e.closed)
            return [2];
          c.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return u = c.sent(), i = { error: u }, [3, 11];
        case 6:
          return c.trys.push([6, , 9, 10]), r && !r.done && (o = n.return) ? [4, o.call(n)] : [3, 8];
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
function pe(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = false);
  var o = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(o), !i)
    return o;
}
function sr(t, e) {
  return e === void 0 && (e = 0), re(function(n, r) {
    n.subscribe(J(r, function(i) {
      return pe(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return pe(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return pe(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function ur(t, e) {
  return e === void 0 && (e = 0), re(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function vi(t, e) {
  return ie(t).pipe(ur(e), sr(e));
}
function Si(t, e) {
  return ie(t).pipe(ur(e), sr(e));
}
function ki(t, e) {
  return new D(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function xi(t, e) {
  return new D(function(n) {
    var r;
    return pe(n, e, function() {
      r = t[tr](), pe(n, e, function() {
        var i, o, s;
        try {
          i = r.next(), o = i.value, s = i.done;
        } catch (u) {
          n.error(u);
          return;
        }
        s ? n.complete() : n.next(o);
      }, 0, true);
    }), function() {
      return T(r?.return) && r.return();
    };
  });
}
function cr(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new D(function(n) {
    pe(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      pe(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, true);
    });
  });
}
function $i(t, e) {
  return cr(rr(t), e);
}
function Ai(t, e) {
  if (t != null) {
    if (Gn(t))
      return vi(t, e);
    if (Kn(t))
      return ki(t, e);
    if (Zn(t))
      return Si(t, e);
    if (Xn(t))
      return cr(t, e);
    if (nr(t))
      return xi(t, e);
    if (ir(t))
      return $i(t, e);
  }
  throw er(t);
}
function wi(t, e) {
  return e ? Ai(t, e) : ie(t);
}
function ar(t, e) {
  var n = T(t) ? t : function() {
    return t;
  }, r = function(i) {
    return i.error(n());
  };
  return new D(r);
}
function Oi(t) {
  return t instanceof Date && !isNaN(t);
}
function I(t, e) {
  return re(function(n, r) {
    var i = 0;
    n.subscribe(J(r, function(o) {
      r.next(t.call(e, o, i++));
    }));
  });
}
function Ei(t, e, n, r, i, o, s, u) {
  var c = [], l = 0, _ = 0, m = false, p = function() {
    m && !c.length && !l && e.complete();
  }, a = function(f) {
    return l < r ? h(f) : c.push(f);
  }, h = function(f) {
    l++;
    var S = false;
    ie(n(f, _++)).subscribe(J(e, function(g) {
      e.next(g);
    }, function() {
      S = true;
    }, void 0, function() {
      if (S)
        try {
          l--;
          for (var g = function() {
            var k = c.shift();
            s || h(k);
          }; c.length && l < r; )
            g();
          p();
        } catch (k) {
          e.error(k);
        }
    }));
  };
  return t.subscribe(J(e, a, function() {
    m = true, p();
  })), function() {
  };
}
function lr(t, e, n) {
  return n === void 0 && (n = 1 / 0), T(e) ? lr(function(r, i) {
    return I(function(o, s) {
      return e(r, o, i, s);
    })(ie(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), re(function(r, i) {
    return Ei(r, i, t, n);
  }));
}
function fr(t, e, n) {
  t === void 0 && (t = 0), n === void 0 && (n = li);
  var r = -1;
  return e != null && (hi(e) ? n = e : r = e), new D(function(i) {
    var o = Oi(t) ? +t - n.now() : t;
    o < 0 && (o = 0);
    var s = 0;
    return n.schedule(function() {
      i.closed || (i.next(s++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, o);
  });
}
function Ii(t, e) {
  return re(function(n, r) {
    var i = 0;
    n.subscribe(J(r, function(o) {
      return t.call(e, o, i++) && r.next(o);
    }));
  });
}
function hr(t) {
  return t <= 0 ? function() {
    return fi;
  } : re(function(e, n) {
    var r = 0;
    e.subscribe(J(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function Pi(t) {
  return I(function() {
    return t;
  });
}
function Ti(t, e) {
  return lr(function(n, r) {
    return ie(t(n, r)).pipe(hr(1), Pi(n));
  });
}
function Mi(t, e) {
  e === void 0 && (e = Jn);
  var n = fr(t, e);
  return Ti(function() {
    return n;
  });
}
function Ri(t, e) {
  return e === void 0 && (e = fn), t = t ?? Di, re(function(n, r) {
    var i, o = true;
    n.subscribe(J(r, function(s) {
      var u = e(s);
      (o || !t(i, u)) && (o = false, i = u, r.next(s));
    }));
  });
}
function Di(t, e) {
  return t === e;
}
function Ui(t) {
  t === void 0 && (t = 1 / 0);
  var e;
  t && typeof t == "object" ? e = t : e = {
    count: t
  };
  var n = e.count, r = n === void 0 ? 1 / 0 : n, i = e.delay, o = e.resetOnSuccess, s = o === void 0 ? false : o;
  return r <= 0 ? fn : re(function(u, c) {
    var l = 0, _, m = function() {
      var p = false;
      _ = u.subscribe(J(c, function(a) {
        s && (l = 0), c.next(a);
      }, void 0, function(a) {
        if (l++ < r) {
          var h = function() {
            _ ? (_.unsubscribe(), _ = null, m()) : p = true;
          };
          if (i != null) {
            var f = typeof i == "number" ? fr(i) : ie(i(a, l)), S = J(c, function() {
              S.unsubscribe(), h();
            }, function() {
              c.complete();
            });
            f.subscribe(S);
          } else
            h();
        } else
          c.error(a);
      })), p && (_.unsubscribe(), _ = null, m());
    };
    m();
  });
}
function Pn(t, e) {
  return re(function(n, r) {
    var i = null, o = 0, s = false, u = function() {
      return s && !i && r.complete();
    };
    n.subscribe(J(r, function(c) {
      i?.unsubscribe();
      var l = 0, _ = o++;
      ie(t(c, _)).subscribe(i = J(r, function(m) {
        return r.next(e ? e(c, m, _, l++) : m);
      }, function() {
        i = null, u();
      }));
    }, function() {
      s = true, u();
    }));
  });
}
function dn(t, e) {
  e === void 0 && (e = {});
  var n = e.selector, r = Vr(e, ["selector"]);
  return new D(function(i) {
    var o = new AbortController(), s = o.signal, u = true, c = r.signal;
    if (c)
      if (c.aborted)
        o.abort();
      else {
        var l = function() {
          s.aborted || o.abort();
        };
        c.addEventListener("abort", l), i.add(function() {
          return c.removeEventListener("abort", l);
        });
      }
    var _ = He(He({}, r), { signal: s }), m = function(p) {
      u = false, i.error(p);
    };
    return fetch(t, _).then(function(p) {
      n ? ie(n(p)).subscribe(J(i, void 0, function() {
        u = false, i.complete();
      }, m)) : (u = false, i.next(p), i.complete());
    }).catch(m), function() {
      u && o.abort();
    };
  });
}
var te = [
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
var Tn = [
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
function ht(t) {
  if (t >= Tn.length)
    throw new Error("Unable to parse base64 string.");
  const e = Tn[t];
  if (e === 255)
    throw new Error("Unable to parse base64 string.");
  return e;
}
function dr(t) {
  let e = "", n, r = t.length;
  for (n = 2; n < r; n += 3)
    e += te[t[n - 2] >> 2], e += te[(t[n - 2] & 3) << 4 | t[n - 1] >> 4], e += te[(t[n - 1] & 15) << 2 | t[n] >> 6], e += te[t[n] & 63];
  return n === r + 1 && (e += te[t[n - 2] >> 2], e += te[(t[n - 2] & 3) << 4], e += "=="), n === r && (e += te[t[n - 2] >> 2], e += te[(t[n - 2] & 3) << 4 | t[n - 1] >> 4], e += te[(t[n - 1] & 15) << 2], e += "="), e;
}
function qi(t) {
  if (t.length % 4 !== 0)
    throw new Error("Unable to parse base64 string.");
  const e = t.indexOf("=");
  if (e !== -1 && e < t.length - 2)
    throw new Error("Unable to parse base64 string.");
  let n = t.endsWith("==") ? 2 : t.endsWith("=") ? 1 : 0, r = t.length, i = new Uint8Array(3 * (r / 4)), o;
  for (let s = 0, u = 0; s < r; s += 4, u += 3)
    o = ht(t.charCodeAt(s)) << 18 | ht(t.charCodeAt(s + 1)) << 12 | ht(t.charCodeAt(s + 2)) << 6 | ht(t.charCodeAt(s + 3)), i[u] = o >> 16, i[u + 1] = o >> 8 & 255, i[u + 2] = o & 255;
  return i.subarray(0, i.length - n);
}
function Ni(t, e = new TextEncoder()) {
  return dr(e.encode(t));
}
var pt = { exports: {} };
var Ci = pt.exports;
var Mn;
function ji() {
  return Mn || (Mn = 1, (function(t) {
    (function(e, n) {
      var r = {};
      n(r);
      var i = r.default;
      for (var o in r)
        i[o] = r[o];
      t.exports = i;
    })(Ci, function(e) {
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
      function r(p, a, h, f, S) {
        for (var g, k, x, W, q, E, G, N, j, C, Ce, je, lt; S >= 64; ) {
          for (g = a[0], k = a[1], x = a[2], W = a[3], q = a[4], E = a[5], G = a[6], N = a[7], C = 0; C < 16; C++)
            Ce = f + C * 4, p[C] = (h[Ce] & 255) << 24 | (h[Ce + 1] & 255) << 16 | (h[Ce + 2] & 255) << 8 | h[Ce + 3] & 255;
          for (C = 16; C < 64; C++)
            j = p[C - 2], je = (j >>> 17 | j << 15) ^ (j >>> 19 | j << 13) ^ j >>> 10, j = p[C - 15], lt = (j >>> 7 | j << 25) ^ (j >>> 18 | j << 14) ^ j >>> 3, p[C] = (je + p[C - 7] | 0) + (lt + p[C - 16] | 0);
          for (C = 0; C < 64; C++)
            je = (((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + (q & E ^ ~q & G) | 0) + (N + (n[C] + p[C] | 0) | 0) | 0, lt = ((g >>> 2 | g << 30) ^ (g >>> 13 | g << 19) ^ (g >>> 22 | g << 10)) + (g & k ^ g & x ^ k & x) | 0, N = G, G = E, E = q, q = W + je | 0, W = x, x = k, k = g, g = je + lt | 0;
          a[0] += g, a[1] += k, a[2] += x, a[3] += W, a[4] += q, a[5] += E, a[6] += G, a[7] += N, f += 64, S -= 64;
        }
        return f;
      }
      var i = (
        /** @class */
        (function() {
          function p() {
            this.digestLength = e.digestLength, this.blockSize = e.blockSize, this.state = new Int32Array(8), this.temp = new Int32Array(64), this.buffer = new Uint8Array(128), this.bufferLength = 0, this.bytesHashed = 0, this.finished = false, this.reset();
          }
          return p.prototype.reset = function() {
            return this.state[0] = 1779033703, this.state[1] = 3144134277, this.state[2] = 1013904242, this.state[3] = 2773480762, this.state[4] = 1359893119, this.state[5] = 2600822924, this.state[6] = 528734635, this.state[7] = 1541459225, this.bufferLength = 0, this.bytesHashed = 0, this.finished = false, this;
          }, p.prototype.clean = function() {
            for (var a = 0; a < this.buffer.length; a++)
              this.buffer[a] = 0;
            for (var a = 0; a < this.temp.length; a++)
              this.temp[a] = 0;
            this.reset();
          }, p.prototype.update = function(a, h) {
            if (h === void 0 && (h = a.length), this.finished)
              throw new Error("SHA256: can't update because hash was finished.");
            var f = 0;
            if (this.bytesHashed += h, this.bufferLength > 0) {
              for (; this.bufferLength < 64 && h > 0; )
                this.buffer[this.bufferLength++] = a[f++], h--;
              this.bufferLength === 64 && (r(this.temp, this.state, this.buffer, 0, 64), this.bufferLength = 0);
            }
            for (h >= 64 && (f = r(this.temp, this.state, a, f, h), h %= 64); h > 0; )
              this.buffer[this.bufferLength++] = a[f++], h--;
            return this;
          }, p.prototype.finish = function(a) {
            if (!this.finished) {
              var h = this.bytesHashed, f = this.bufferLength, S = h / 536870912 | 0, g = h << 3, k = h % 64 < 56 ? 64 : 128;
              this.buffer[f] = 128;
              for (var x = f + 1; x < k - 8; x++)
                this.buffer[x] = 0;
              this.buffer[k - 8] = S >>> 24 & 255, this.buffer[k - 7] = S >>> 16 & 255, this.buffer[k - 6] = S >>> 8 & 255, this.buffer[k - 5] = S >>> 0 & 255, this.buffer[k - 4] = g >>> 24 & 255, this.buffer[k - 3] = g >>> 16 & 255, this.buffer[k - 2] = g >>> 8 & 255, this.buffer[k - 1] = g >>> 0 & 255, r(this.temp, this.state, this.buffer, 0, k), this.finished = true;
            }
            for (var x = 0; x < 8; x++)
              a[x * 4 + 0] = this.state[x] >>> 24 & 255, a[x * 4 + 1] = this.state[x] >>> 16 & 255, a[x * 4 + 2] = this.state[x] >>> 8 & 255, a[x * 4 + 3] = this.state[x] >>> 0 & 255;
            return this;
          }, p.prototype.digest = function() {
            var a = new Uint8Array(this.digestLength);
            return this.finish(a), a;
          }, p.prototype._saveState = function(a) {
            for (var h = 0; h < this.state.length; h++)
              a[h] = this.state[h];
          }, p.prototype._restoreState = function(a, h) {
            for (var f = 0; f < this.state.length; f++)
              this.state[f] = a[f];
            this.bytesHashed = h, this.finished = false, this.bufferLength = 0;
          }, p;
        })()
      );
      e.Hash = i;
      var o = (
        /** @class */
        (function() {
          function p(a) {
            this.inner = new i(), this.outer = new i(), this.blockSize = this.inner.blockSize, this.digestLength = this.inner.digestLength;
            var h = new Uint8Array(this.blockSize);
            if (a.length > this.blockSize)
              new i().update(a).finish(h).clean();
            else
              for (var f = 0; f < a.length; f++)
                h[f] = a[f];
            for (var f = 0; f < h.length; f++)
              h[f] ^= 54;
            this.inner.update(h);
            for (var f = 0; f < h.length; f++)
              h[f] ^= 106;
            this.outer.update(h), this.istate = new Uint32Array(8), this.ostate = new Uint32Array(8), this.inner._saveState(this.istate), this.outer._saveState(this.ostate);
            for (var f = 0; f < h.length; f++)
              h[f] = 0;
          }
          return p.prototype.reset = function() {
            return this.inner._restoreState(this.istate, this.inner.blockSize), this.outer._restoreState(this.ostate, this.outer.blockSize), this;
          }, p.prototype.clean = function() {
            for (var a = 0; a < this.istate.length; a++)
              this.ostate[a] = this.istate[a] = 0;
            this.inner.clean(), this.outer.clean();
          }, p.prototype.update = function(a) {
            return this.inner.update(a), this;
          }, p.prototype.finish = function(a) {
            return this.outer.finished ? this.outer.finish(a) : (this.inner.finish(a), this.outer.update(a, this.digestLength).finish(a)), this;
          }, p.prototype.digest = function() {
            var a = new Uint8Array(this.digestLength);
            return this.finish(a), a;
          }, p;
        })()
      );
      e.HMAC = o;
      function s(p) {
        var a = new i().update(p), h = a.digest();
        return a.clean(), h;
      }
      e.hash = s, e.default = s;
      function u(p, a) {
        var h = new o(p).update(a), f = h.digest();
        return h.clean(), f;
      }
      e.hmac = u;
      function c(p, a, h, f) {
        var S = f[0];
        if (S === 0)
          throw new Error("hkdf: cannot expand more");
        a.reset(), S > 1 && a.update(p), h && a.update(h), a.update(f), a.finish(p), f[0]++;
      }
      var l = new Uint8Array(e.digestLength);
      function _(p, a, h, f) {
        a === void 0 && (a = l), f === void 0 && (f = 32);
        for (var S = new Uint8Array([1]), g = u(a, p), k = new o(g), x = new Uint8Array(k.digestLength), W = x.length, q = new Uint8Array(f), E = 0; E < f; E++)
          W === x.length && (c(x, k, h, S), W = 0), q[E] = x[W++];
        return k.clean(), x.fill(0), S.fill(0), q;
      }
      e.hkdf = _;
      function m(p, a, h, f) {
        for (var S = new o(p), g = S.digestLength, k = new Uint8Array(4), x = new Uint8Array(g), W = new Uint8Array(g), q = new Uint8Array(f), E = 0; E * g < f; E++) {
          var G = E + 1;
          k[0] = G >>> 24 & 255, k[1] = G >>> 16 & 255, k[2] = G >>> 8 & 255, k[3] = G >>> 0 & 255, S.reset(), S.update(a), S.update(k), S.finish(W);
          for (var N = 0; N < g; N++)
            x[N] = W[N];
          for (var N = 2; N <= h; N++) {
            S.reset(), S.update(W).finish(W);
            for (var j = 0; j < g; j++)
              x[j] ^= W[j];
          }
          for (var N = 0; N < g && E * g + N < f; N++)
            q[E * g + N] = x[N];
        }
        for (var E = 0; E < g; E++)
          x[E] = W[E] = 0;
        for (var E = 0; E < 4; E++)
          k[E] = 0;
        return S.clean(), q;
      }
      e.pbkdf2 = m;
    });
  })(pt)), pt.exports;
}
var Fi = ji();
var zi = new Int32Array(4);
var B = class _B {
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
  static onePassHasher = new _B();
  static _hex(e) {
    const n = _B.hexChars, r = _B.hexOut;
    let i, o, s, u;
    for (u = 0; u < 4; u += 1)
      for (o = u * 8, i = e[u], s = 0; s < 8; s += 2)
        r[o + 1 + s] = n.charAt(i & 15), i >>>= 4, r[o + 0 + s] = n.charAt(i & 15), i >>>= 4;
    return r.join("");
  }
  static _md5cycle(e, n) {
    let r = e[0], i = e[1], o = e[2], s = e[3];
    r += (i & o | ~i & s) + n[0] - 680876936 | 0, r = (r << 7 | r >>> 25) + i | 0, s += (r & i | ~r & o) + n[1] - 389564586 | 0, s = (s << 12 | s >>> 20) + r | 0, o += (s & r | ~s & i) + n[2] + 606105819 | 0, o = (o << 17 | o >>> 15) + s | 0, i += (o & s | ~o & r) + n[3] - 1044525330 | 0, i = (i << 22 | i >>> 10) + o | 0, r += (i & o | ~i & s) + n[4] - 176418897 | 0, r = (r << 7 | r >>> 25) + i | 0, s += (r & i | ~r & o) + n[5] + 1200080426 | 0, s = (s << 12 | s >>> 20) + r | 0, o += (s & r | ~s & i) + n[6] - 1473231341 | 0, o = (o << 17 | o >>> 15) + s | 0, i += (o & s | ~o & r) + n[7] - 45705983 | 0, i = (i << 22 | i >>> 10) + o | 0, r += (i & o | ~i & s) + n[8] + 1770035416 | 0, r = (r << 7 | r >>> 25) + i | 0, s += (r & i | ~r & o) + n[9] - 1958414417 | 0, s = (s << 12 | s >>> 20) + r | 0, o += (s & r | ~s & i) + n[10] - 42063 | 0, o = (o << 17 | o >>> 15) + s | 0, i += (o & s | ~o & r) + n[11] - 1990404162 | 0, i = (i << 22 | i >>> 10) + o | 0, r += (i & o | ~i & s) + n[12] + 1804603682 | 0, r = (r << 7 | r >>> 25) + i | 0, s += (r & i | ~r & o) + n[13] - 40341101 | 0, s = (s << 12 | s >>> 20) + r | 0, o += (s & r | ~s & i) + n[14] - 1502002290 | 0, o = (o << 17 | o >>> 15) + s | 0, i += (o & s | ~o & r) + n[15] + 1236535329 | 0, i = (i << 22 | i >>> 10) + o | 0, r += (i & s | o & ~s) + n[1] - 165796510 | 0, r = (r << 5 | r >>> 27) + i | 0, s += (r & o | i & ~o) + n[6] - 1069501632 | 0, s = (s << 9 | s >>> 23) + r | 0, o += (s & i | r & ~i) + n[11] + 643717713 | 0, o = (o << 14 | o >>> 18) + s | 0, i += (o & r | s & ~r) + n[0] - 373897302 | 0, i = (i << 20 | i >>> 12) + o | 0, r += (i & s | o & ~s) + n[5] - 701558691 | 0, r = (r << 5 | r >>> 27) + i | 0, s += (r & o | i & ~o) + n[10] + 38016083 | 0, s = (s << 9 | s >>> 23) + r | 0, o += (s & i | r & ~i) + n[15] - 660478335 | 0, o = (o << 14 | o >>> 18) + s | 0, i += (o & r | s & ~r) + n[4] - 405537848 | 0, i = (i << 20 | i >>> 12) + o | 0, r += (i & s | o & ~s) + n[9] + 568446438 | 0, r = (r << 5 | r >>> 27) + i | 0, s += (r & o | i & ~o) + n[14] - 1019803690 | 0, s = (s << 9 | s >>> 23) + r | 0, o += (s & i | r & ~i) + n[3] - 187363961 | 0, o = (o << 14 | o >>> 18) + s | 0, i += (o & r | s & ~r) + n[8] + 1163531501 | 0, i = (i << 20 | i >>> 12) + o | 0, r += (i & s | o & ~s) + n[13] - 1444681467 | 0, r = (r << 5 | r >>> 27) + i | 0, s += (r & o | i & ~o) + n[2] - 51403784 | 0, s = (s << 9 | s >>> 23) + r | 0, o += (s & i | r & ~i) + n[7] + 1735328473 | 0, o = (o << 14 | o >>> 18) + s | 0, i += (o & r | s & ~r) + n[12] - 1926607734 | 0, i = (i << 20 | i >>> 12) + o | 0, r += (i ^ o ^ s) + n[5] - 378558 | 0, r = (r << 4 | r >>> 28) + i | 0, s += (r ^ i ^ o) + n[8] - 2022574463 | 0, s = (s << 11 | s >>> 21) + r | 0, o += (s ^ r ^ i) + n[11] + 1839030562 | 0, o = (o << 16 | o >>> 16) + s | 0, i += (o ^ s ^ r) + n[14] - 35309556 | 0, i = (i << 23 | i >>> 9) + o | 0, r += (i ^ o ^ s) + n[1] - 1530992060 | 0, r = (r << 4 | r >>> 28) + i | 0, s += (r ^ i ^ o) + n[4] + 1272893353 | 0, s = (s << 11 | s >>> 21) + r | 0, o += (s ^ r ^ i) + n[7] - 155497632 | 0, o = (o << 16 | o >>> 16) + s | 0, i += (o ^ s ^ r) + n[10] - 1094730640 | 0, i = (i << 23 | i >>> 9) + o | 0, r += (i ^ o ^ s) + n[13] + 681279174 | 0, r = (r << 4 | r >>> 28) + i | 0, s += (r ^ i ^ o) + n[0] - 358537222 | 0, s = (s << 11 | s >>> 21) + r | 0, o += (s ^ r ^ i) + n[3] - 722521979 | 0, o = (o << 16 | o >>> 16) + s | 0, i += (o ^ s ^ r) + n[6] + 76029189 | 0, i = (i << 23 | i >>> 9) + o | 0, r += (i ^ o ^ s) + n[9] - 640364487 | 0, r = (r << 4 | r >>> 28) + i | 0, s += (r ^ i ^ o) + n[12] - 421815835 | 0, s = (s << 11 | s >>> 21) + r | 0, o += (s ^ r ^ i) + n[15] + 530742520 | 0, o = (o << 16 | o >>> 16) + s | 0, i += (o ^ s ^ r) + n[2] - 995338651 | 0, i = (i << 23 | i >>> 9) + o | 0, r += (o ^ (i | ~s)) + n[0] - 198630844 | 0, r = (r << 6 | r >>> 26) + i | 0, s += (i ^ (r | ~o)) + n[7] + 1126891415 | 0, s = (s << 10 | s >>> 22) + r | 0, o += (r ^ (s | ~i)) + n[14] - 1416354905 | 0, o = (o << 15 | o >>> 17) + s | 0, i += (s ^ (o | ~r)) + n[5] - 57434055 | 0, i = (i << 21 | i >>> 11) + o | 0, r += (o ^ (i | ~s)) + n[12] + 1700485571 | 0, r = (r << 6 | r >>> 26) + i | 0, s += (i ^ (r | ~o)) + n[3] - 1894986606 | 0, s = (s << 10 | s >>> 22) + r | 0, o += (r ^ (s | ~i)) + n[10] - 1051523 | 0, o = (o << 15 | o >>> 17) + s | 0, i += (s ^ (o | ~r)) + n[1] - 2054922799 | 0, i = (i << 21 | i >>> 11) + o | 0, r += (o ^ (i | ~s)) + n[8] + 1873313359 | 0, r = (r << 6 | r >>> 26) + i | 0, s += (i ^ (r | ~o)) + n[15] - 30611744 | 0, s = (s << 10 | s >>> 22) + r | 0, o += (r ^ (s | ~i)) + n[6] - 1560198380 | 0, o = (o << 15 | o >>> 17) + s | 0, i += (s ^ (o | ~r)) + n[13] + 1309151649 | 0, i = (i << 21 | i >>> 11) + o | 0, r += (o ^ (i | ~s)) + n[4] - 145523070 | 0, r = (r << 6 | r >>> 26) + i | 0, s += (i ^ (r | ~o)) + n[11] - 1120210379 | 0, s = (s << 10 | s >>> 22) + r | 0, o += (r ^ (s | ~i)) + n[2] + 718787259 | 0, o = (o << 15 | o >>> 17) + s | 0, i += (s ^ (o | ~r)) + n[9] - 343485551 | 0, i = (i << 21 | i >>> 11) + o | 0, e[0] = r + e[0] | 0, e[1] = i + e[1] | 0, e[2] = o + e[2] | 0, e[3] = s + e[3] | 0;
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
    return this._dataLength = 0, this._bufferLength = 0, this._state.set(_B.stateIdentity), this;
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
    let i = this._bufferLength, o, s;
    for (s = 0; s < e.length; s += 1) {
      if (o = e.charCodeAt(s), o < 128)
        n[i++] = o;
      else if (o < 2048)
        n[i++] = (o >>> 6) + 192, n[i++] = o & 63 | 128;
      else if (o < 55296 || o > 56319)
        n[i++] = (o >>> 12) + 224, n[i++] = o >>> 6 & 63 | 128, n[i++] = o & 63 | 128;
      else {
        if (o = (o - 55296) * 1024 + (e.charCodeAt(++s) - 56320) + 65536, o > 1114111)
          throw new Error(
            "Unicode standard supports code points up to U+10FFFF"
          );
        n[i++] = (o >>> 18) + 240, n[i++] = o >>> 12 & 63 | 128, n[i++] = o >>> 6 & 63 | 128, n[i++] = o & 63 | 128;
      }
      i >= 64 && (this._dataLength += 64, _B._md5cycle(this._state, r), i -= 64, r[0] = r[16]);
    }
    return this._bufferLength = i, this;
  }
  /**
   * Append an ASCII string to the hash buffer
   * @param str String to append
   */
  appendAsciiStr(e) {
    const n = this._buffer8, r = this._buffer32;
    let i = this._bufferLength, o, s = 0;
    for (; ; ) {
      for (o = Math.min(e.length - s, 64 - i); o--; )
        n[i++] = e.charCodeAt(s++);
      if (i < 64)
        break;
      this._dataLength += 64, _B._md5cycle(this._state, r), i = 0;
    }
    return this._bufferLength = i, this;
  }
  /**
   * Append a byte array to the hash buffer
   * @param input array to append
   */
  appendByteArray(e) {
    const n = this._buffer8, r = this._buffer32;
    let i = this._bufferLength, o, s = 0;
    for (; ; ) {
      for (o = Math.min(e.length - s, 64 - i); o--; )
        n[i++] = e[s++];
      if (i < 64)
        break;
      this._dataLength += 64, _B._md5cycle(this._state, r), i = 0;
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
    let o;
    for (this._dataLength = e.length, this._bufferLength = e.buflen, i[0] = r[0], i[1] = r[1], i[2] = r[2], i[3] = r[3], o = 0; o < n.length; o += 1)
      this._buffer8[o] = n.charCodeAt(o);
  }
  /**
   * Hash the current state of the hash buffer and return the result
   * @param raw Whether to return the value as an `Int32Array`
   */
  end(e = false) {
    const n = this._bufferLength, r = this._buffer8, i = this._buffer32, o = (n >> 2) + 1;
    this._dataLength += n;
    const s = this._dataLength * 8;
    if (r[n] = 128, r[n + 1] = r[n + 2] = r[n + 3] = 0, i.set(_B.buffer32Identity.subarray(o), o), n > 55 && (_B._md5cycle(this._state, i), i.set(_B.buffer32Identity)), s <= 4294967295)
      i[14] = s;
    else {
      const u = s.toString(16).match(/(.*?)(.{0,8})$/);
      if (u === null) return e ? zi : "";
      const c = parseInt(u[2], 16), l = parseInt(u[1], 16) || 0;
      i[14] = c, i[15] = l;
    }
    return _B._md5cycle(this._state, i), e ? this._state : _B._hex(this._state);
  }
};
if (B.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592")
  throw new Error("Md5 self test failed.");
var Hi = 36e5;
var Rn = Symbol.for("constructDateFrom");
function bt(t, e) {
  return typeof t == "function" ? t(e) : t && typeof t == "object" && Rn in t ? t[Rn](e) : t instanceof Date ? new t.constructor(e) : new Date(e);
}
function Le(t, e) {
  return bt(t, t);
}
function Li(t, e, n) {
  const r = Le(t);
  if (isNaN(e)) return bt(t, NaN);
  const i = r.getDate(), o = bt(t, r.getTime());
  o.setMonth(r.getMonth() + e + 1, 0);
  const s = o.getDate();
  return i >= s ? o : (r.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    i
  ), r);
}
function pr(t, e, n) {
  return bt(t, +Le(t) + e);
}
function Wi(t, e, n) {
  return pr(t, e * Hi);
}
function Bi(t, e, n) {
  return pr(t, e * 1e3);
}
function Vi(t, e, n) {
  return Li(t, e * 12);
}
function Qi(t, e) {
  return +Le(t) < +Le(e);
}
function d(t, e, n, r = "debug", i) {
  if (window.debug) {
    const s = ["color: #0288D1", `color:${i || "#009688"}`, "color: default"];
    n ? Un() ? console[r](
      `%c[PlaceOS]%c[${t}] %c${e}`,
      ...s,
      n
    ) : console[r](`[PlaceOS][${t}] ${e}`, n) : Un() ? console[r](`%c[PlaceOS]%c[${t}] %c${e}`, ...s) : console[r](`[PlaceOS][${t}] ${e}`);
  }
}
function Un() {
  return !(document.documentMode || /Edge/.test(navigator.userAgent));
}
function _r() {
  const t = window.location?.hash ? window.location?.hash.slice(1) : window.location?.href.split("#")[1] || "";
  let e = window.location?.search ? window.location?.search.slice(1) : window.location?.href.split("?")[1] || "", n = {};
  if (t)
    if (t.indexOf("?") >= 0) {
      const i = t.split("?");
      n = Fe(i[0]), e || (e = i[1]);
    } else
      n = Fe(t);
  let r = {};
  return e && (r = Fe(e)), __spreadValues(__spreadValues({}, n), r);
}
function Fe(t) {
  const e = {}, n = t.split("&");
  for (const r of n) {
    const i = r.split("=");
    i[1] && (e[decodeURIComponent(i[0])] = decodeURIComponent(
      i[1]
    ));
  }
  return e;
}
var qn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function Yi(t = 40) {
  let e = "";
  for (let n = 0; n < t; n++)
    e += qn.charAt(
      Math.floor(Math.random() * qn.length)
    );
  return e;
}
function he(t) {
  const e = (window.location?.hash || "").replace(new RegExp(`${t}[a-zA-Z0-9_+-.%=]*&?`, "g"), "").replace(/&&/g, "&").replace(/#&/g, "#").replace(/&$/g, "#"), n = (window.location?.search || "").replace(new RegExp(`${t}[a-zA-Z0-9_+-.%=]*&?`, "g"), "").replace(/&&/g, "&").replace(/\?&/g, "#").replace(/&$/g, "#");
  window.history?.replaceState && window.history?.replaceState(
    null,
    "",
    `${window.location?.pathname}${e}${n}`
  );
}
function vt(t, e = false) {
  const n = e ? 1e3 : 1024;
  if (t < n)
    return t + (e ? " iB" : " B");
  const r = Math.floor(Math.log(t) / Math.log(n)), i = (e ? "kMGTPE" : "KMGTPE").charAt(r - 1) + (e ? "iB" : "B");
  return (t / Math.pow(n, r)).toFixed(2) + " " + i;
}
function Ji(t) {
  if (t.length === 0)
    throw new Error("Input must not be of zero length");
  const e = t.split(","), n = {};
  for (const r of e) {
    const i = r.split(";");
    if (i.length !== 2)
      throw new Error("Section could not be split on ';'");
    const o = i[0].replace(/<(.*)>/, "$1").trim(), s = i[1].replace(/rel="(.*)"/, "$1").trim();
    n[s] = o;
  }
  return n;
}
function Ki(t, e) {
  for (const n in t)
    t.hasOwnProperty(n) && e.indexOf(t[n]) >= 0 && delete t[n];
  return t;
}
function Zi() {
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
function Gi() {
  return window.location !== window.parent.location;
}
function Xi(t = Date.now(), e = 60 * 1e3) {
  return Math.floor(t / e);
}
var eo = class {
  abort() {
    d("Stub", "Aborted");
  }
};
function z(t) {
  let e = "";
  if (t)
    for (const n in t)
      t.hasOwnProperty(n) && t[n] !== void 0 && t[n] !== null && (e += `${e ? "&" : ""}${n}=${encodeURIComponent(
        t[n]
      )}`);
  return e;
}
var _e = {};
function ne(t, e, n = 300) {
  if (t && e && e instanceof Function)
    be(t), _e[t] = setTimeout(() => {
      e(), delete _e[t];
    }, n);
  else
    throw new Error(
      t ? "Cannot create named timeout without a name" : "Cannot create a timeout without a callback"
    );
}
function be(t) {
  _e[t] && (clearTimeout(_e[t]), delete _e[t]);
}
var io = {
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
var b = {};
var w;
var F;
var v = {};
var O = "";
var ye = "";
var Ee = new le("");
var It = new le("");
var pn = "/api/engine/v2";
var ae = new le(false);
var oo = ae.asObservable();
var St = 0;
function ve() {
  return `${`${b.secure || window.location?.protocol.indexOf("https") >= 0 ? "https:" : "http:"}//${b.host || window.location?.host}`}${mr()}`;
}
function mr() {
  return b.version === "ACA Engine" ? "/control/api" : pn;
}
function so() {
  return !!b.token_header;
}
function uo() {
  return O;
}
function ks(t, e = true) {
  w.setItem(`${O}_x-api-key`, `${t}`), w.setItem("trusted", `${e}`), co("x-api-key", Vi(/* @__PURE__ */ new Date(), 5).valueOf());
}
function Pt() {
  return xt("x-api-key", false) || "";
}
function co(t, e = Wi(/* @__PURE__ */ new Date(), 2).valueOf()) {
  b.ignore_api_key && t === "x-api-key" || (w.setItem(`${O}_expires_at`, `${e}`), w.setItem(`${O}_access_token`, t));
}
function Y(t = true) {
  if (b.mock) return "mock-token";
  if (!w) return "";
  if (Pt() && !b.ignore_api_key) return "x-api-key";
  const e = w.getItem(`${O}_expires_at`) || "", n = Ee.getValue();
  return Qi(+e, /* @__PURE__ */ new Date()) && (d("Auth", "Token expired. Requesting new token..."), yn(), v.load_authority || (St += 1, ne(
    "re-authorise",
    () => br().catch(
      (r) => d("Auth", `Failed to get token: ${r}`)
    ),
    200 * Math.min(20, St)
  )), !t) ? "" : n || w.getItem(`${O}_access_token`) || "";
}
function cn() {
  return It.getValue() || w.getItem(`${O}_refresh_token`) || "";
}
function an() {
  return b.host || window.location?.host;
}
function ao() {
  return !!Y();
}
function lo() {
  return Ee.pipe(I((t) => !!ao()));
}
function kt() {
  return F;
}
function xs() {
  return ae.getValue();
}
function _n() {
  return !!b.mock;
}
function fo() {
  return !!b.secure;
}
function $s() {
  return oo;
}
function mn() {
  return xt("trust") === "true" || xt("trusted") === "true";
}
function yr() {
  return !!Pt() && !b.ignore_api_key || xt("fixed_device") === "true";
}
function xt(t, e = true) {
  let r = _r()[t];
  if (w) {
    const i = `${uo()}_${t}`;
    r = r || w.getItem(i) || w.getItem(t) || "", e && w.setItem(i, `${r}`);
  }
  return r;
}
function As(t) {
  return b = t || b, b.token_header = b.token_header ?? Gi(), window.AbortController || (window.AbortController = eo), w = b.storage === "session" ? sessionStorage : localStorage, O = B.hashStr(b.redirect_uri, false), gn();
}
function gr() {
  return d("Auth", "Refreshing authorty."), F = void 0, gn();
}
function yn() {
  d("Auth", "Invalidating tokens."), w.removeItem(`${O}_access_token`), w.removeItem(`${O}_expires_at`), Ee.getValue() && Ee.next("");
}
function br(t, e = F) {
  return v.authorise || (v.authorise = new Promise((n, r) => {
    if (!e)
      return delete v.authorise, r("Authority is not loaded");
    d("Auth", "Authorising user...");
    const i = () => {
      if (Y(false))
        d("Auth", "Valid token found."), delete v.authorise, n(Y());
      else {
        const o = [
          () => {
            d("Auth", "Successfully generated token."), n(Y()), delete v.authorise;
          },
          () => {
            d("Auth", "Failed to generate token."), r("Failed to generate token"), setTimeout(() => delete v.authorise, 200);
          }
        ];
        b && b.auth_type === "password" ? (d("Auth", "Logging in with credentials."), So(b).then(
          ...o
        ), St = 0) : ye || cn() ? (d(
          "Auth",
          `Generating token with ${ye ? "code" : "refresh token"}`
        ), Sr().then(...o), St = 0) : e.session ? (d(
          "Auth",
          "Users has session. Authorising application..."
        ), ho(t).then(...o)) : (d("Auth", "No user session"), vr(e), r("No user session"), setTimeout(() => delete v.authorise, 200));
      }
    };
    _o().then(i, i);
  })), v.authorise;
}
function Os() {
  const t = F ? F.logout_url : "/logout";
  fetch(t, {
    method: "GET",
    redirect: "manual",
    headers: {
      Authorization: "Bearer " + Y()
    }
  }).then((e) => {
    const n = e.headers.get("Location") || t;
    for (let r = 0; r < w.length; r++) {
      const i = w.key(r);
      i && i.indexOf(O) >= 0 && w.removeItem(i);
    }
    window.location?.assign(n);
  });
}
function gn(t = 0) {
  return v.load_authority || (v.load_authority = new Promise((e) => {
    if (ae.next(false), b.mock) {
      F = io, d("Auth", "System in mock mode"), ae.next(true), e();
      return;
    }
    d("Auth", `Fixed: ${yr()} | Trusted: ${mn()}`), d("Auth", "Loading authority...");
    const n = b.secure || window.location?.protocol.indexOf("https") >= 0, r = (i) => {
      d("Auth", `Failed to load authority(${i})`), ae.next(false), ne(
        "load_authority",
        () => {
          delete v.load_authority, gn(t).then((o) => e());
        },
        300 * Math.min(20, ++t)
      );
    };
    dn(
      `${n ? "https:" : "http:"}//${an()}/auth/authority`,
      {
        credentials: "same-origin"
      }
    ).subscribe(async (i) => {
      if (!i.ok)
        return r(await i.text().catch((s) => s));
      F = await i.json(), pn = /[2-9]\.[0-9]+\.[0-9]+/g.test(
        F.version || ""
      ) ? "/api/engine/v2" : "/control/api", d("Auth", "Loaded authority.", [], "group"), F && (d("Auth", `Name: ${F.name}`), d("Auth", `Version: ${F.version}`), d("Auth", `Domain: ${F.domain}`), d("Auth", `Session: ${F.session}`), d("Auth", `Production: ${F.production}`), d(
        "Auth",
        `Config Keys: ${Object.keys(F.config || {}).length}`
      )), d("Auth", "", [], "groupEnd");
      const o = () => {
        ae.next(true), d("Auth", "Application set online."), e();
      };
      delete v.load_authority, br("").then(o, o);
    }, r);
  })), v.load_authority;
}
async function ho(t) {
  const e = yo(t);
  if (b.use_iframe)
    return po(e);
  window.location?.assign(e);
}
function po(t) {
  return v.iframe_auth || (v.iframe_auth = new Promise((e, n) => {
    d("Auth", "Authorizing in an iFrame...");
    const r = document.createElement("iframe");
    r.style.position = "absolute", r.style.top = "0", r.style.left = "0", r.style.height = "1px", r.style.width = "1px", r.style.zIndex = "-1", r.id = "place-authorize", r.src = `${t}`;
    const i = (o) => {
      if (o.origin === window.location?.origin && o.data.type === "place-os") {
        const s = o.data;
        if (d("Auth", "Received credentials from iFrame..."), document.body.removeChild(r), be("iframe_auth"), window.removeEventListener("message", i), delete v.iframe_auth, s.token)
          return e(), bn(__spreadValues({
            access_token: s.token
          }, s));
        ye = s.code || "", Sr().then(
          (u) => e(u),
          (u) => n(u)
        );
      }
    };
    ne(
      "iframe_auth",
      () => {
        d("Auth", "Unable to resolve iFrame after 15 seconds..."), n();
      },
      15 * 1e3
    ), window.addEventListener("message", i), r.onerror = (o) => {
      d("Auth", "iFrame error.", o), delete v.iframe_auth, n();
    }, document.body.appendChild(r);
  })), v.iframe_auth;
}
var Nn = false;
function vr(t) {
  if (b.handle_login !== false && !Nn) {
    d("Auth", "Redirecting to login page...");
    const e = t.login_url?.replace(
      "{{url}}",
      encodeURIComponent(window.location?.href)
    );
    throw setTimeout(() => window.location?.assign(e), 300), Nn = true, new Error("Redirecting to login page...");
  } else
    d("Auth", "Login being handled locally.");
  delete v.authorise;
}
function _o() {
  return v.check_token || (v.check_token = new Promise(async (t, e) => {
    Y() ? (d("Auth", "Valid token found."), t(Y())) : (d("Auth", "No token. Checking URL for auth credentials..."), await mo() ? t(true) : e()), delete v.check_token;
  })), v.check_token;
}
function mo() {
  return v.check_params || (v.check_params = new Promise((t) => {
    d("Auth", "Checking for auth parameters...");
    let e = _r();
    if ((!e || Object.keys(e).length <= 0) && sessionStorage && (e = JSON.parse(
      sessionStorage.getItem("ENGINE.auth.params") || "{}"
    )), e && (e.code || e.access_token || e.refresh_token)) {
      e.code && (ye = e.code, he("code")), e.refresh_token && (w.setItem(
        `${O}_refresh_token`,
        e.refresh_token
      ), he("refresh_token"));
      const n = w.getItem(`${O}_nonce`) || "", r = (e.state || "").split(";");
      he("state"), he("token_type");
      const i = r[0];
      n === i ? (bn(e), t(!!e.access_token)) : t(false);
    } else
      t(false);
    ne(
      "check_params_promise",
      () => delete v.check_params,
      50
    );
  })), v.check_params;
}
function yo(t) {
  const e = ko();
  t = t ? `${e};${t}` : e;
  const n = b ? (b.auth_uri || "").indexOf("?") >= 0 : false, r = (b ? b.auth_uri : null) || "/auth/oauth/authorize", i = mn() || b.auth_type === "auth_code" ? "code" : "token";
  let o = `${r}${n ? "&" : "?"}response_type=${encodeURIComponent(i)}&client_id=${encodeURIComponent(O)}&state=${encodeURIComponent(t)}&redirect_uri=${encodeURIComponent(b.redirect_uri)}&scope=${encodeURIComponent(b.scope)}`;
  if (b.auth_type === "auth_code") {
    const { challenge: s, verify: u } = go();
    sessionStorage.setItem(`${O}_challenge`, s), o += "&code_challenge_method=S256", o += `&code_challenge=${u}`;
  }
  return o;
}
var Cn = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
function go(t = 43) {
  const e = new Array(t).fill(0).map(
    () => Cn[Math.floor(Math.random() * Cn.length)]
  ).join(""), n = qi(Ni(e)), r = dr(Fi.hash(n)).split("=")[0].replace(/\//g, "_").replace(/\+/g, "-");
  return { challenge: e, verify: r };
}
function bo() {
  let e = (b.token_uri || "/auth/token") + `?client_id=${encodeURIComponent(O)}`, n = "";
  if (e += `&redirect_uri=${encodeURIComponent(b.redirect_uri)}`, cn()) {
    e += `&refresh_token=${encodeURIComponent(cn())}`, e += "&grant_type=refresh_token";
    const r = e.split("?");
    e = r[0], n = r[1];
  } else {
    e += `&code=${encodeURIComponent(ye)}`, e += "&grant_type=authorization_code";
    const r = sessionStorage.getItem(`${O}_challenge`);
    r && (e += `&code_verifier=${r}`, sessionStorage.removeItem(`${O}_challenge`)), ye = "";
  }
  return [e, n];
}
function vo(t) {
  const e = t.token_uri || "/auth/token", n = z({
    grant_type: "password",
    client_id: O,
    client_secret: t.client_secret,
    redirect_uri: t.redirect_uri,
    authority: F?.id,
    scope: t.scope,
    username: t.username,
    password: t.password
  });
  return `${e}?${n}`;
}
function Sr() {
  return kr(...bo());
}
function So(t) {
  return kr(vo(t));
}
function kr(t, e = "") {
  return v.generate_tokens || (v.generate_tokens = new Promise((n, r) => {
    d("Auth", "Generating new token...");
    const i = (o) => {
      d("Auth", "Error generating new tokens.", o), w.removeItem(`${O}_refresh_token`), It.next(""), r(), delete v.generate_tokens;
    };
    dn(t, {
      method: "POST",
      body: e,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).subscribe(async (o) => {
      if (!o.ok) return i(o);
      const s = await o.json();
      bn(s), n(), delete v.generate_tokens;
    }, i);
  })), v.generate_tokens;
}
function bn(t) {
  const e = Bi(
    /* @__PURE__ */ new Date(),
    Math.max(60, parseInt(t.expires_in, 10) - 300)
  );
  d("Auth", "Tokens generated storing..."), mn() && (t.access_token && (w.setItem(
    `${O}_access_token`,
    t.access_token
  ), he("access_token")), t.refresh_token && (w.setItem(
    `${O}_refresh_token`,
    t.refresh_token
  ), he("refresh_token"))), t.expires_in && (w.setItem(`${O}_expires_at`, `${e.valueOf()}`), he("expires_in")), ae.next(true), Ee.next(t.access_token || ""), It.next(t.refresh_token || "");
}
function ko() {
  const t = Yi();
  return w.setItem(`${O}_nonce`, t), t;
}
var Tt = {};
var xr = (t, e) => {
  const n = new Error(`Mock endpoint not found: ${t} ${e}`);
  return n.status = 404, d("HTTP(M)", `404 ${t}:`, e), ar(n);
};
function Is(t, e = Tt) {
  xo(t.method, t.path, e);
  const n = `${t.method}|${t.path}`, r = t.path.replace(/(http|https):\/\/[a-zA-Z0-9.-]*:?([0-9]*)?/g, "").replace(/^\//, "").split("/"), i = __spreadProps(__spreadValues({}, t), {
    path_parts: r,
    path_structure: r.map(
      (o) => o[0] === ":" ? o.replace(":", "") : ""
    )
  });
  e[n] = i, d("HTTP(M)", `+ ${t.method} ${t.path}`);
}
function xo(t, e, n = Tt) {
  const r = `${t}|${e}`;
  n[r] && (delete n[r], d("HTTP(M)", `- ${t} ${e}`));
}
function $o(t, e, n, r = Tt) {
  const i = Ao(t, e, r);
  if (i) {
    const o = wo(e, i, n);
    return Oo(i, o);
  }
  return xr(t, e);
}
function Ao(t, e, n = Tt) {
  const i = e.replace(/(http|https):\/\/[a-zA-Z0-9.-]*:?([0-9]*)?/g, "").replace(/^\//, "").split("?")[0].split("/"), o = Object.keys(
    n
  ).reduce((s, u) => (u.indexOf(`${t}|`) === 0 && s.push(n[u]), s), []);
  for (const s of o)
    if (s.path_structure.length === i.length) {
      let u = true;
      for (let c = 0; c < s.path_structure.length; c++)
        if (!s.path_structure[c] && s.path_parts[c] !== i[c]) {
          u = false;
          break;
        }
      if (u)
        return s;
    }
  return null;
}
function wo(t, e, n) {
  const r = t.replace(/(http|https):\/\/[a-zA-Z0-9.-]*:?([0-9]*)?/g, "").split("?"), i = r[0].replace(/^\//, ""), o = r[1] || "", s = Fe(o), u = i.split("/"), c = {};
  for (let _ = 0; _ < e.path_structure.length; _++) {
    const m = e.path_structure[_];
    m && (c[m] = u[_]);
  }
  const l = {
    url: t,
    path: e.path,
    method: e.method,
    metadata: e.metadata,
    route_params: c,
    query_params: s,
    body: n
  };
  return d("HTTP(M)", `MATCHED ${l.method}:`, l), l;
}
function Oo(t, e) {
  let n;
  try {
    n = t.callback ? t.callback(e) : t.metadata;
  } catch (s) {
    throw d("HTTP(M)", `ERROR ${e.method}:`, [e.url, s]), s;
  }
  const r = t.delay_variance || 100, i = t.delay || 300, o = Math.floor(Math.random() * r - r / 2) + i;
  return d("HTTP(M)", `RESP ${e.method}:`, [e.url, n]), wi([n]).pipe(Mi(Math.max(200, o)));
}
var $r = {};
function Eo(t, e = $r) {
  return e[t] || {};
}
function ee(t, e, n = Ve) {
  return e || (e = { response_type: "json" }), n("GET", t, __spreadValues({ response_type: "json" }, e));
}
function Ie(t, e, n, r = Ve) {
  return n || (n = { response_type: "json" }), r("POST", t, __spreadValues({ body: e, response_type: "json" }, n));
}
function We(t, e, n, r = Ve) {
  return n || (n = { response_type: "json" }), r("PUT", t, __spreadValues({ body: e, response_type: "json" }, n));
}
function Mt(t, e, n, r = Ve) {
  return n || (n = { response_type: "json" }), r("PATCH", t, __spreadValues({ body: e, response_type: "json" }, n));
}
function Be(t, e, n = Ve) {
  return e || (e = { response_type: "void" }), n("DELETE", t, __spreadValues({ response_type: "void" }, e));
}
async function Io(t, e, n = $r) {
  if (t.headers) {
    const r = {};
    t.headers.forEach ? t.headers.forEach((i, o) => r[o.toLowerCase()] = i) : Object.keys(t.headers).forEach(
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
var Ar = () => (yn(), gr().then(
  () => Promise.resolve(),
  () => new Promise((t) => {
    setTimeout(() => {
      Ar().then(() => t());
    }, 1e3);
  })
));
function Ve(t, e, n, r = _n, i = $o, o = Io) {
  if (r()) {
    const s = i(t, e, n?.body);
    if (s) return s;
  }
  return n.headers = n.headers || {}, !n.headers["Content-Type"] && !n.headers["content-type"] && (n.headers["Content-Type"] = "application/json"), lo().pipe(
    Ii((s) => s),
    hr(1),
    Pn((s) => {
      Y() === "x-api-key" ? n.headers["X-API-Key"] = Pt() : n.headers.Authorization = `Bearer ${Y()}`;
      const u = __spreadProps(__spreadValues({}, n), {
        method: t,
        credentials: "same-origin"
      });
      return ["POST", "PUT", "PATCH"].includes(t) && n.body !== void 0 && (u.body = typeof n.body == "string" ? n.body : JSON.stringify(n.body)), dn(e, u);
    }),
    Pn((s) => s.ok ? o(s, n.response_type) : ar(s)),
    Ui({
      count: 4,
      delay: (s, u) => new D((c) => {
        if (s.status === 511) {
          vr(kt()), c.error(s);
          return;
        }
        if (s.status !== 401) {
          c.error(s || {});
          return;
        }
        d("HTTP", "Auth error", s);
        const l = Math.pow(2, u - 1) * 1e3;
        Ar().then(() => {
          c.next(l), c.complete();
        }).catch(() => {
          c.error(s);
        });
      })
    })
  );
}
var H = class {
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
    return e.version = this.version, delete e.created_at, Ki(e, [void 0, null, ""]);
  }
};
var Mo = class extends H {
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
  /** Skip authorization checks for the application */
  skip_authorization;
  /** Whether Client ID should be updated on changes */
  preserve_client_id;
  constructor(e = {}) {
    super(e), this.uid = e.uid || "", this.secret = e.secret || "", this.owner_id = e.owner_id || "", this.scopes = e.scopes || "", this.redirect_uri = e.redirect_uri || "", this.skip_authorization = e.skip_authorization || false, this.preserve_client_id = e.preserve_client_id || false;
  }
};
var wr = {};
var Or = {};
var jn = "";
var Dt = (t) => t;
function A(t) {
  const { query_params: e, fn: n, path: r, endpoint: i } = t, o = z(e), s = `${i || ve()}${r ? "/" + r : ""}${o ? "?" + o : ""}`;
  return ee(s).pipe(
    I((u) => {
      const c = Ro(s, o, r);
      return {
        total: c.total || 0,
        next: c.next ? () => A({
          query_params: c.next,
          fn: n,
          endpoint: i,
          path: r
        }) : null,
        data: u && u instanceof Array ? u.map((l) => (n || Dt)(l)) : u && !(u instanceof Array) && u.results ? u.results.map((l) => l) : []
      };
    })
  );
}
function $(t) {
  const { query_params: e, id: n, path: r, fn: i, options: o } = t, s = z(e), u = `${ve()}/${r}/${n}${s ? "?" + s : ""}`;
  return ee(u, o).pipe(I((c) => (i || Dt)(c)));
}
function M(t) {
  const { query_params: e, form_data: n, path: r, fn: i } = t, o = z(e), s = `${ve()}/${r}${o ? "?" + o : ""}`;
  return Ie(s, n).pipe(
    I((c) => (i || Dt)(c))
  );
}
function y(t) {
  const { id: e, task_name: n, form_data: r, method: i, path: o, callback: s } = t, u = z(r), c = `${ve()}/${o}/${e}/${n}`;
  return (i === "post" || i === "put" || !i ? (i === "put" ? We : Ie)(c, r) : (i === "del" ? Be : ee)(
    `${c}${u ? "?" + u : ""}`,
    {
      response_type: "json"
    }
  )).pipe(
    I((_) => (s || ((m) => m))(_))
  );
}
function R(t) {
  const { id: e, query_params: n, form_data: r, method: i, path: o, fn: s } = t, u = z(__spreadProps(__spreadValues({}, n), {
    version: r.version || 0
  })), c = `${ve()}/${o}/${e}${u ? "?" + u : ""}`;
  return (i === "put" ? We : Mt)(c, r).pipe(
    I((l) => (s || Dt)(l))
  );
}
function P(t) {
  const { id: e, query_params: n, path: r } = t, i = z(n), o = `${ve()}/${r}/${e}${i ? "?" + i : ""}`;
  return Be(o);
}
function Ro(t, e, n) {
  const r = Eo(
    t[0] === "/" ? `${location.origin}${t}` : t
  ), i = {
    total: 0,
    next: null
  };
  if (r && r["x-total-count"]) {
    const o = +(r["x-total-count"] || 0);
    (e.length < 2 || e.length < 12 && e.indexOf("offset=") >= 0) && (wr[n] = o), Or[n] = o, i.total = o;
  }
  return r && r.link && (jn = Ji(r.link || "").next, i.next = Fe(jn.split("?")[1])), i;
}
var Je = "oauth_apps";
function Ut(t) {
  return new Mo(t);
}
function Ls(t = {}) {
  return A({ query_params: t, fn: Ut, path: Je });
}
function Bs(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Ut,
    path: Je
  });
}
function Vs(t) {
  return M({ form_data: t, query_params: {}, fn: Ut, path: Je });
}
function Qs(t, e = {}) {
  return P({ id: t, query_params: e, path: Je });
}
var Do = /* @__PURE__ */ ((t) => (t[t.Certificate = 0] = "Certificate", t[t.NoAuth = 1] = "NoAuth", t[t.UserPassword = 2] = "UserPassword", t))(Do || {});
var Uo = class extends H {
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
var Ke = "brokers";
function qt(t) {
  return new Uo(t);
}
function Ys(t = {}) {
  return A({ query_params: t, fn: qt, path: Ke });
}
function Ks(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: qt,
    path: Ke
  });
}
function Zs(t) {
  return M({ form_data: t, query_params: {}, fn: qt, path: Ke });
}
function Gs(t, e = {}) {
  return P({ id: t, query_params: e, path: Ke });
}
var qo = class {
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
    this.id = e.id || e.core_id || "", this.compiled_drivers = e.compiled_drivers || [], this.available_repositories = e.available_repositories || e.status?.available_repositories || [], this.running_drivers = e.running_drivers || e.status?.running_drivers || 0, this.module_instances = e.module_instances || e.status?.module_instances || 0, this.unavailable_repositories = e.unavailable_repositories || e.status?.unavailable_repositories || [], this.unavailable_drivers = e.unavailable_drivers || e.status?.unavailable_drivers || [], this.hostname = e.hostname || e.load?.local.hostname || "", this.cpu_count = e.cpu_count || e.load?.local.cpu_count || 0, this.core_cpu = e.core_cpu || e.load?.local.core_cpu || 0, this.total_cpu = e.total_cpu || e.load?.local.total_cpu || 0, this.memory_total = e.memory_total || e.load?.local.memory_total || 0, this.memory_usage = e.memory_usage || e.load?.local.memory_usage || 0, this.core_memory = e.core_memory || e.load?.local.core_memory || 0, this.run_counts = e.run_counts || e.status?.run_counts?.local || { modules: 0, drivers: 0 }, this.memory_percentage = +(this.memory_usage / this.memory_total * 100).toFixed(4), this.used_memory = vt(this.memory_usage * 1024), this.total_memory = vt(this.memory_total * 1024);
    const n = e.load?.edge || {};
    this.edge_nodes = e.edge_nodes || Object.keys(n).map((r) => __spreadProps(__spreadValues({
      id: r
    }, n[r]), {
      run_count: e.status?.run_count?.edge[r] || {}
    })) || [];
  }
};
var No = class {
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
    this.cluster_id = e, this.id = n.id || n.driver || "", this.modules = n.modules || [], this.running = n.running || false, this.module_instances = n.module_instances || n.edge?.status?.module_instances || n.local?.status?.module_instances || 0, this.last_exit_code = n.last_exit_code || n.edge?.status?.last_exit_code || n.local?.status?.last_exit_code || 0, this.launch_count = n.launch_count || n.edge?.status?.launch_count || n.local?.status?.launch_count || 0, this.launch_time = n.launch_time || n.edge?.status?.launch_time || n.local?.status?.launch_time || 0, this.cpu_usage = n.cpu_usage || n.percentage_cpu || n.edge?.status?.percentage_cpu || n.local?.status?.percentage_cpu || 0, this.memory_total = n.memory_total || n.edge?.status?.memory_total || n.local?.status?.memory_total || 0, this.memory_usage = n.memory_usage || n.edge?.status?.memory_usage || n.local?.status?.memory_usage || 0, this.used_memory = vt(this.memory_usage * 1024), this.total_memory = vt(this.memory_total * 1024);
  }
};
var Nt = "cluster";
function Er(t) {
  return new qo(t);
}
function Xs(t = {}) {
  return A({ query_params: t, fn: Er, path: Nt });
}
function tu(t, e = {}) {
  return $({
    id: t,
    query_params: e,
    fn: (n) => n.map(
      (r) => new No(t, r)
    ),
    path: Nt
  });
}
function nu(t, e) {
  return P({ id: t, query_params: { driver: e }, path: Nt });
}
var Co = class extends H {
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
var Ze = "domains";
function Ct(t) {
  return new Co(t);
}
function ru(t = {}) {
  return A({ query_params: t, fn: Ct, path: Ze });
}
function iu(t, e = {}) {
  return $({ id: t, query_params: e, fn: Ct, path: Ze });
}
function ou(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Ct,
    path: Ze
  });
}
function su(t) {
  return M({ form_data: t, query_params: {}, fn: Ct, path: Ze });
}
function uu(t, e = {}) {
  return P({ id: t, query_params: e, path: Ze });
}
var Te = /* @__PURE__ */ ((t) => (t[t.None = 0] = "None", t[t.Support = 1] = "Support", t[t.Admin = 2] = "Admin", t[t.NeverDisplay = 3] = "NeverDisplay", t))(Te || {});
var Se = class extends H {
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
    super(e), this.parent_id = e.parent_id || "", this.updated_at = e.updated_at || Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3), this.settings_string = e.settings_string || "", this.encryption_level = e.encryption_level || Te.None, this.keys = e.keys || [], this.modified_by_id = e.modified_by_id || "";
  }
};
var $t = /* @__PURE__ */ ((t) => (t[t.SSH = 0] = "SSH", t[t.Device = 1] = "Device", t[t.Service = 2] = "Service", t[t.Websocket = 3] = "Websocket", t[t.Logic = 99] = "Logic", t))($t || {});
var Ir = class extends H {
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
  /** Tuple of user settings of differring encryption levels for the driver */
  settings;
  constructor(e = {}) {
    super(e), this.description = e.description || "", this.module_name = e.module_name || "", this.role = e.role ?? $t.Logic, this.default_uri = e.default_uri || "", this.default_port = e.default_port || 1, this.ignore_connected = e.ignore_connected || false, this.class_name = e.class_name || "", this.repository_id = e.repository_id || "", this.file_name = e.file_name || "", this.commit = e.commit || "", this.update_available = e.update_available || false, this.update_info = e.update_info, this.settings = e.settings || [null, null, null, null], typeof this.settings != "object" && (this.settings = [null, null, null, null]);
    for (const n in Te)
      !isNaN(Number(n)) && !this.settings[n] && (this.settings[n] = new Se({
        parent_id: this.id,
        encryption_level: +n
      }));
  }
};
var oe = "drivers";
function jt(t) {
  return new Ir(t);
}
function cu(t = {}) {
  return A({ query_params: t, fn: jt, path: oe });
}
function au(t, e = {}) {
  return $({ id: t, query_params: e, fn: jt, path: oe });
}
function lu(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: jt,
    path: oe
  });
}
function fu(t) {
  return M({ form_data: t, query_params: {}, fn: jt, path: oe });
}
function hu(t, e = {}) {
  return P({ id: t, query_params: e, path: oe });
}
function du(t) {
  return y({ id: t, task_name: "recompile", path: oe });
}
function pu(t) {
  return y({ id: t, task_name: "reload", path: oe });
}
function mu(t) {
  return y({ id: t, task_name: "readme", method: "get", path: oe });
}
var jo = class extends H {
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
var Me = "edges";
function Ft(t) {
  return new jo(t);
}
function yu(t = {}) {
  return A({ query_params: t, fn: Ft, path: Me });
}
function gu(t, e = {}) {
  return $({ id: t, query_params: e, fn: Ft, path: Me });
}
function bu(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Ft,
    path: Me
  });
}
function vu(t) {
  return M({ form_data: t, query_params: {}, fn: Ft, path: Me });
}
function Su(t, e = {}) {
  return P({ id: t, query_params: e, path: Me });
}
function ku(t, e = {}) {
  return y({
    id: t,
    task_name: "token",
    form_data: e,
    method: "get",
    path: Me
  });
}
var Fo = class extends H {
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
var Ge = "ldap_auths";
function zt(t) {
  return new Fo(t);
}
function xu(t = {}) {
  return A({ query_params: t, fn: zt, path: Ge });
}
function Au(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: zt,
    path: Ge
  });
}
function wu(t) {
  return M({ form_data: t, query_params: {}, fn: zt, path: Ge });
}
function Ou(t, e = {}) {
  return P({ id: t, query_params: e, path: Ge });
}
var Pr = class {
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
var Re = class extends H {
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
    }, this.debounce_period = e.debounce_period || 0, this.important = e.important || false, this.enabled = e.enabled || false, this.webhook_secret = e.webhook_secret || "", this.control_system_id = e.system_id || e.control_system_id || "", this.zone_id = e.zone_id || "", this.system_name = e.system_name || (e.control_system ? e.control_system.name : ""), this.enable_webhook = e.enable_webhook || false, this.exec_enabled = e.exec_enabled || false, this.supported_methods = e.supported_methods || ["POST"], this.activated_count = e.activated_count || e.trigger_count || 0, this.playlists = e.playlists || [], this.trigger_id = e.trigger_id || "";
  }
};
var vn = class extends H {
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
    super(e), this.description = e.description || "", this.tags = e.tags || [], this.triggers = e.triggers || [], this.settings = e.settings || [null, null, null, null], this.parent_id = e.parent_id || "", this.location = e.location || "", this.display_name = e.display_name || "", this.code = e.code || "", this.type = e.type || "", this.count = e.count || 0, this.capacity = e.capacity || 0, this.map_id = e.map_id || "", this.timezone = e.timezone || "", this.images = e.images || [], this.playlists = e.playlists || [], typeof this.settings != "object" && (this.settings = [null, null, null, null]);
    for (const n in Te)
      !isNaN(Number(n)) && !this.settings[n] && (this.settings[n] = new Se({
        parent_id: this.id,
        encryption_level: +n
      }));
    e.trigger_data && e.trigger_data instanceof Array && (this.trigger_list = e.trigger_data.map(
      (n) => new Re(n)
    ));
  }
};
var ke = "metadata";
function Xe(t) {
  return new Pr(t);
}
function Eu(t, e = {}) {
  return $({
    id: t,
    query_params: e,
    fn: (n) => Object.keys(n).map((r) => Xe(n[r])),
    path: ke
  });
}
function Ho(t) {
  const e = [...t], n = [];
  for (; e.length; ) {
    const r = e.pop();
    Array.isArray(r) ? e.push(...r) : n.push(r);
  }
  return n.reverse();
}
function Iu(t, e = {}) {
  return y({
    id: t,
    task_name: "history",
    form_data: e,
    method: "get",
    callback: (n) => Ho(
      Object.keys(n).map(
        (r) => n[r].map((i) => Xe(i))
      )
    ),
    path: ke
  });
}
function Pu(t, e, n = {}) {
  return $({
    id: t,
    query_params: __spreadProps(__spreadValues({}, n), { name: e }),
    fn: (r) => Xe(r[e]),
    path: ke
  });
}
function Tu(t, e, n = "put") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Xe,
    path: ke
  });
}
function Ru(t, e = {}) {
  return P({ id: t, query_params: e, path: ke });
}
var Tr = class extends H {
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
  /** URL for requesting snapshots of the assosiated camera */
  camera_snapshot_url;
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
    super(e), this.display_name = e.display_name || "", this.description = e.description || "", this.email = e.email || "", this.code = e.code || "", this.capacity = e.capacity || 0, this.features = e.features || [], this.bookable = e.bookable || false, this.public = e.public ?? false, this.installed_ui_devices = e.installed_ui_devices || 0, this.support_url = e.support_url || "", this.camera_snapshot_url = e.camera_snapshot_url || "", this.camera_url = e.camera_url || "", this.timetable_url = e.timetable_url || "", this.room_booking_url = e.room_booking_url || "", this.map_id = e.map_id || "", this.modules = e.modules || [], this.images = e.images || [], this.zones = e.zones || [], this.settings = e.settings || [null, null, null, null], this.timezone = e.timezone || "", this.signage = e.signage || false, this.playlists = e.playlists || [], this.orientation = e.orientation || "unspecified", this.approval = e.approval || false, typeof this.settings != "object" && (this.settings = [null, null, null, null]);
    for (const n in Te)
      !isNaN(Number(n)) && !this.settings[n] && (this.settings[n] = new Se({
        parent_id: this.id,
        encryption_level: +n
      }));
    e.module_data && e.module_data instanceof Array && (this.module_list = e.module_data.map(
      (n) => new Mr(n)
    ));
  }
};
var Mr = class extends H {
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
  /** ID of the system associated with the module */
  get system_id() {
    return this.control_system_id;
  }
  constructor(e = {}) {
    super(e), this.driver_id = e.driver_id || e.dependency_id || "", this.control_system_id = e.control_system_id || "", this.edge_id = e.edge_id || "", this.ip = e.ip || "", this.tls = e.tls || false, this.udp = e.udp || false, this.port = e.port || 1, this.makebreak = e.makebreak || false, this.uri = e.uri || "", this.custom_name = e.custom_name || "", this.role = e.role ?? $t.Logic, this.notes = e.notes || "", this.ignore_connected = e.ignore_connected || false, this.connected = e.connected, this.running = e.running || false, this.updated_at = e.updated_at || 0, this.system = new Tr(
      e.control_system || e.system
    ), this.has_runtime_error = e.has_runtime_error || false, this.error_timestamp = e.error_timestamp || 0, this.driver = new Ir(e.dependency || e.driver), this.settings = e.settings || [null, null, null, null], typeof this.settings != "object" && (this.settings = [null, null, null, null]);
    for (const n in Te)
      !isNaN(Number(n)) && !this.settings[n] && (this.settings[n] = new Se({
        parent_id: this.id,
        encryption_level: +n
      }));
  }
  /**
   * Convert object into plain object
   */
  toJSON(e = false) {
    const n = super.toJSON();
    return (n.role !== $t.Logic && !e || !n.control_system_id) && delete n.control_system_id, delete n.driver, delete n.system, delete n.error_timestamp, delete n.has_runtime_error, n;
  }
};
var K = "modules";
function Ht(t) {
  return new Mr(t);
}
function Uu(t = {}) {
  return A({ query_params: t, fn: Ht, path: K });
}
function qu(t, e = {}) {
  return $({ id: t, query_params: e, fn: Ht, path: K });
}
function Nu(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Ht,
    path: K
  });
}
function Cu(t) {
  return M({ form_data: t, query_params: {}, fn: Ht, path: K });
}
function ju(t, e = {}) {
  return P({ id: t, query_params: e, path: K });
}
function Fu(t) {
  return y({ id: t, task_name: "start", path: K });
}
function zu(t) {
  return y({ id: t, task_name: "stop", path: K });
}
function Wu(t) {
  return y({ id: t, task_name: "load", method: "post", path: K });
}
function Bu(t) {
  return y({
    id: t,
    task_name: "settings",
    method: "get",
    callback: (e) => e.map((n) => new Se(n)),
    path: K
  });
}
function Vu(t) {
  return y({
    id: t,
    task_name: "error",
    method: "get",
    path: K
  });
}
var Lo = class extends H {
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
var et = "oauth_auths";
function Lt(t) {
  return new Lo(t);
}
function Qu(t = {}) {
  return A({ query_params: t, fn: Lt, path: et });
}
function Ju(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Lt,
    path: et
  });
}
function Ku(t) {
  return M({ form_data: t, query_params: {}, fn: Lt, path: et });
}
function Zu(t, e = {}) {
  return P({ id: t, query_params: e, path: et });
}
var Rr = /* @__PURE__ */ ((t) => (t.Driver = "driver", t.Interface = "interface", t))(Rr || {});
var Wo = class extends H {
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
    super(e), this.folder_name = e.folder_name || "", this.description = e.description || "", this.uri = e.uri || "", this.branch = e.branch || "", this.commit_hash = e.commit_hash || "", this.repo_type = e.repo_type || Rr.Driver, this.username = e.username || "", this.password = e.password || "", this.root_path = e.root_path || "";
  }
};
var V = "repositories";
function Wt(t) {
  return new Wo(t);
}
function Gu(t = {}) {
  return A({ query_params: t, fn: Wt, path: V });
}
function Xu(t, e = {}) {
  return $({ id: t, query_params: e, fn: Wt, path: V });
}
function ec(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Wt,
    path: V
  });
}
function tc(t) {
  return M({ form_data: t, query_params: {}, fn: Wt, path: V });
}
function nc(t, e = {}) {
  return P({ id: t, query_params: e, path: V });
}
function rc(t = {}) {
  return $({
    id: "interfaces",
    query_params: t,
    path: V
  });
}
function ic(t) {
  return $({
    id: "remote_default_branch",
    query_params: t,
    path: V
  });
}
function oc(t) {
  return $({
    id: "remote_branches",
    query_params: t,
    path: V
  });
}
function sc(t) {
  return $({
    id: "remote_commits",
    query_params: t,
    path: V
  });
}
function uc(t, e) {
  return y({
    id: t,
    task_name: "drivers",
    form_data: e,
    method: "get",
    path: V
  });
}
function cc(t, e) {
  return y({
    id: t,
    task_name: "commits",
    form_data: e,
    method: "get",
    path: V
  });
}
function ac(t) {
  return y({
    id: t,
    task_name: "branches",
    method: "get",
    path: V
  });
}
function lc(t) {
  return y({
    id: t,
    task_name: "default_branch",
    method: "get",
    path: V
  });
}
function fc(t, e) {
  return y({
    id: t,
    task_name: "details",
    form_data: e,
    method: "get",
    path: V
  });
}
function hc(t, e) {
  return y({
    id: t,
    task_name: "pull",
    form_data: e,
    method: "post",
    path: V
  });
}
var Bo = class extends H {
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
var tt = "saml_auths";
function Bt(t) {
  return new Bo(t);
}
function dc(t = {}) {
  return A({ query_params: t, fn: Bt, path: tt });
}
function _c(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Bt,
    path: tt
  });
}
function mc(t) {
  return M({ form_data: t, query_params: {}, fn: Bt, path: tt });
}
function yc(t, e = {}) {
  return P({ id: t, query_params: e, path: tt });
}
var De = "settings";
function nt(t) {
  return new Se(t);
}
function gc(t = {}) {
  return A({ query_params: t, fn: nt, path: De });
}
function vc(t, e, n = {}, r = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: n,
    method: r,
    fn: nt,
    path: De
  });
}
function Sc(t, e = {}) {
  return M({ form_data: t, query_params: e, fn: nt, path: De });
}
function xc(t, e = {}) {
  return y({
    id: t,
    task_name: "history",
    form_data: e,
    method: "get",
    callback: (n) => n.map((r) => nt(r)),
    path: De
  });
}
var U = "systems";
function xe(t) {
  return new Tr(t);
}
function $c(t = {}) {
  return A({ query_params: t, fn: xe, path: U });
}
function Ac(t = {}) {
  return A({ query_params: t, fn: xe, path: `${U}/with_emails` });
}
function wc(t, e = {}) {
  return $({ id: t, query_params: e, fn: xe, path: U });
}
function Oc(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: xe,
    path: U
  });
}
function Ec(t) {
  return M({ form_data: t, query_params: {}, fn: xe, path: U });
}
function Ic(t, e = {}) {
  return P({ id: t, query_params: e, path: U });
}
function Pc(t, e, n = {}) {
  return y({
    id: t,
    task_name: `module/${e}`,
    form_data: n,
    method: "put",
    callback: (r) => xe(r),
    path: U
  });
}
function Tc(t, e) {
  return y({
    id: t,
    task_name: `module/${e}`,
    form_data: {},
    method: "del",
    callback: (n) => xe(n),
    path: U
  });
}
function Mc(t) {
  return y({
    id: t,
    task_name: "start",
    form_data: {},
    path: U
  });
}
function Rc(t) {
  return y({
    id: t,
    task_name: "stop",
    path: U
  });
}
function Dc(t, e, n, r = 1, i = []) {
  return y({
    id: t,
    task_name: `${n}_${r}/${encodeURIComponent(e)}`,
    form_data: i,
    path: U
  });
}
function Uc(t, e, n = 1) {
  return y({
    id: t,
    task_name: `${e}_${n}`,
    method: "get",
    path: U
  });
}
function Nc(t, e, n = 1) {
  return y({
    id: t,
    task_name: `functions/${e}_${n}`,
    method: "get",
    path: U
  });
}
function Cc(t) {
  return A({
    query_params: {},
    fn: (e) => new vn(e),
    path: `${U}/${t}/zones`
  });
}
function jc(t) {
  return A({
    query_params: {},
    fn: (e) => new Re(e),
    path: `${U}/${t}/triggers`
  });
}
function Fc(t, e) {
  return y({
    id: t,
    task_name: "triggers",
    form_data: e,
    method: "post",
    callback: (n) => new Re(n),
    path: U
  });
}
function zc(t, e) {
  return y({
    id: t,
    task_name: `triggers/${e}`,
    method: "del",
    path: U
  });
}
function Hc(t) {
  return y({
    id: t,
    task_name: "settings",
    method: "get",
    callback: (e) => e.map((n) => new Se(n)),
    path: U
  });
}
var Ue = "triggers";
function Vt(t) {
  return new Re(t);
}
function Lc(t = {}) {
  return A({ query_params: t, fn: Vt, path: Ue });
}
function Wc(t, e = {}) {
  return $({ id: t, query_params: e, fn: Vt, path: Ue });
}
function Bc(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Vt,
    path: Ue
  });
}
function Vc(t) {
  return M({ form_data: t, query_params: {}, fn: Vt, path: Ue });
}
function Qc(t, e = {}) {
  return P({ id: t, query_params: e, path: Ue });
}
function Yc(t) {
  return y({
    id: t,
    task_name: "instances",
    form_data: {},
    method: "get",
    callback: (e) => e.map((n) => new Re(n)),
    path: Ue
  });
}
var Vo = /* @__PURE__ */ ((t) => (t.EQ = "equal", t.NEQ = "not_equal", t.GT = "greater_than", t.GTE = "greater_than_or_equal", t.LT = "less_than", t.LTE = "less_than_or_equal", t.AND = "and", t.OR = "or", t.XOR = "exclusive_or", t))(Vo || {});
var Qo = /* @__PURE__ */ ((t) => (t.AT = "at", t.CRON = "cron", t))(Qo || {});
var Jo = class extends H {
  /** Hash of the email address of the user */
  email_digest;
  /** ID of the authority associated with the user */
  authority_id;
  /** Email address of the user */
  email;
  /** Phone number of the user */
  phone;
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
    super(e), this.authority_id = e.authority_id || "", this.email = e.email || "", this.email_digest = e.email_digest || "", this.phone = e.phone || "", this.country = e.country || "", this.building = e.building || "", this.image = e.image || "", this.metadata = e.metadata || "", this.login_name = e.login_name || "", this.staff_id = e.staff_id || "", this.first_name = e.first_name || "", this.last_name = e.last_name || "", this.support = !!e.support, this.sys_admin = !!e.sys_admin, this.ui_theme = e.ui_theme || "", this.card_number = e.card_number || "", this.groups = e.groups || [], this.department = e.department || "", this.photo_upload_id = e.photo_upload_id || "", this.work_preferences = e.work_preferences || [], this.work_overrides = e.work_overrides || {}, this.locatable = e.locatable ?? true;
  }
};
var qe = "users";
function rt(t) {
  return new Jo(t);
}
function Jc(t = {}) {
  return A({ query_params: t, fn: rt, path: qe });
}
function Kc(t, e = {}) {
  return $({ id: t, query_params: e, fn: rt, path: qe });
}
function Zc(t = {}) {
  return $({ id: "current", query_params: t, fn: rt, path: qe });
}
function Gc(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: rt,
    path: qe
  });
}
function Xc(t) {
  return M({ form_data: t, query_params: {}, fn: rt, path: qe });
}
function ea(t, e = {}) {
  return P({ id: t, query_params: e, path: qe });
}
var fe = "zones";
function Qt(t) {
  return new vn(t);
}
function ta(t = {}) {
  return A({ query_params: t, fn: Qt, path: fe });
}
function na(t = {}) {
  return $({
    id: "tags",
    query_params: t,
    fn: (e) => e,
    path: fe
  });
}
function ra(t, e = {}) {
  return $({ id: t, query_params: e, fn: Qt, path: fe });
}
function ia(t, e, n = "patch") {
  return R({
    id: t,
    form_data: e,
    query_params: {},
    method: n,
    fn: Qt,
    path: fe
  });
}
function oa(t) {
  return M({ form_data: t, query_params: {}, fn: Qt, path: fe });
}
function sa(t, e = {}) {
  return P({ id: t, query_params: e, path: fe });
}
function ua(t, e = {}) {
  return A({
    query_params: e,
    fn: (n) => new Re(n),
    path: `${fe}/${t}/triggers`
  });
}
function ca(t, e, n, r = 1, i = []) {
  return y({
    id: t,
    task_name: `exec/${encodeURIComponent(
      n + "_" + r
    )}/${encodeURIComponent(e)}`,
    form_data: i,
    path: fe
  });
}
var Go = {
  url: "",
  deserializer: function(t) {
    return JSON.parse(t.data);
  },
  serializer: function(t) {
    return JSON.stringify(t);
  }
};
var Xo = "WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }";
var es = (function(t) {
  Z(e, t);
  function e(n, r) {
    var i = t.call(this) || this;
    if (i._socket = null, n instanceof D)
      i.destination = r, i.source = n;
    else {
      var o = i._config = He({}, Go);
      if (i._output = new me(), typeof n == "string")
        o.url = n;
      else
        for (var s in n)
          n.hasOwnProperty(s) && (o[s] = n[s]);
      if (!o.WebSocketCtor && WebSocket)
        o.WebSocketCtor = WebSocket;
      else if (!o.WebSocketCtor)
        throw new Error("no WebSocket constructor can be found");
      i.destination = new en();
    }
    return i;
  }
  return e.prototype.lift = function(n) {
    var r = new e(this._config, this.destination);
    return r.operator = n, r.source = this, r;
  }, e.prototype._resetState = function() {
    this._socket = null, this.source || (this.destination = new en()), this._output = new me();
  }, e.prototype.multiplex = function(n, r, i) {
    var o = this;
    return new D(function(s) {
      try {
        o.next(n());
      } catch (c) {
        s.error(c);
      }
      var u = o.subscribe({
        next: function(c) {
          try {
            i(c) && s.next(c);
          } catch (l) {
            s.error(l);
          }
        },
        error: function(c) {
          return s.error(c);
        },
        complete: function() {
          return s.complete();
        }
      });
      return function() {
        try {
          o.next(r());
        } catch (c) {
          s.error(c);
        }
        u.unsubscribe();
      };
    });
  }, e.prototype._connectSocket = function() {
    var n = this, r = this._config, i = r.WebSocketCtor, o = r.protocol, s = r.url, u = r.binaryType, c = this._output, l = null;
    try {
      l = o ? new i(s, o) : new i(s), this._socket = l, u && (this._socket.binaryType = u);
    } catch (m) {
      c.error(m);
      return;
    }
    var _ = new ge(function() {
      n._socket = null, l && l.readyState === 1 && l.close();
    });
    l.onopen = function(m) {
      var p = n._socket;
      if (!p) {
        l.close(), n._resetState();
        return;
      }
      var a = n._config.openObserver;
      a && a.next(m);
      var h = n.destination;
      n.destination = Et.create(function(f) {
        if (l.readyState === 1)
          try {
            var S = n._config.serializer;
            l.send(S(f));
          } catch (g) {
            n.destination.error(g);
          }
      }, function(f) {
        var S = n._config.closingObserver;
        S && S.next(void 0), f && f.code ? l.close(f.code, f.reason) : c.error(new TypeError(Xo)), n._resetState();
      }, function() {
        var f = n._config.closingObserver;
        f && f.next(void 0), l.close(), n._resetState();
      }), h && h instanceof en && _.add(h.subscribe(n.destination));
    }, l.onerror = function(m) {
      n._resetState(), c.error(m);
    }, l.onclose = function(m) {
      l === n._socket && n._resetState();
      var p = n._config.closeObserver;
      p && p.next(m), m.wasClean ? c.complete() : c.error(m);
    }, l.onmessage = function(m) {
      try {
        var p = n._config.deserializer;
        c.next(p(m));
      } catch (a) {
        c.error(a);
      }
    };
  }, e.prototype._subscribe = function(n) {
    var r = this, i = this.source;
    return i ? i.subscribe(n) : (this._socket || this._connectSocket(), this._output.subscribe(n), n.add(function() {
      var o = r._socket;
      r._output.observers.length === 0 && (o && (o.readyState === 1 || o.readyState === 0) && o.close(), r._resetState());
    }), n);
  }, e.prototype.unsubscribe = function() {
    var n = this._socket;
    n && (n.readyState === 1 || n.readyState === 0) && n.close(), this._resetState(), t.prototype.unsubscribe.call(this);
  }, e;
})(un);
function ts(t) {
  return new es(t);
}
var X = /* @__PURE__ */ ((t) => (t[t.PARSE_ERROR = 0] = "PARSE_ERROR", t[t.BAD_REQUEST = 1] = "BAD_REQUEST", t[t.ACCESS_DENIED = 2] = "ACCESS_DENIED", t[t.REQUEST_FAILED = 3] = "REQUEST_FAILED", t[t.UNKNOWN_CMD = 4] = "UNKNOWN_CMD", t[t.SYS_NOT_FOUND = 5] = "SYS_NOT_FOUND", t[t.MOD_NOT_FOUND = 6] = "MOD_NOT_FOUND", t[t.UNEXPECTED_FAILURE = 7] = "UNEXPECTED_FAILURE", t))(X || {});
var Cr = /* @__PURE__ */ ((t) => (t.Info = "info", t.Debug = "debug", t.Warning = "warn", t.Error = "error", t.Fatal = "fatal", t.Trace = "trace", t))(Cr || {});
var At = {};
function is(t) {
  return At[t];
}
var jr = 15;
var ct = 0;
var Q;
var Fr = 0;
var L = {};
var kn = {};
var $e = {};
var os = {};
var de = new le(false);
$e._place_os_status = de.asObservable();
var zr = new le([0, 0]);
$e._place_os_sync = zr.asObservable();
var Hr = Date.now();
var we;
var wt = 0;
var ue = null;
var _t;
var xn = 0;
var at = 10 * 1e3;
var Lr = new me();
$e._place_os_debug_events = Lr.asObservable();
function tn() {
  return ve().indexOf("/control/") >= 0 ? "/control/websocket" : `${mr()}/systems/control`;
}
function Wr() {
  return de.getValue();
}
function ss() {
  return $e._place_os_status;
}
function us(t, e = kn, n = $e) {
  const r = `${t.sys}|${t.mod}_${t.index}|${t.name}`;
  return e[r] || (e[r] = new le(void 0), n[r] = e[r].asObservable()), n[r];
}
function cs(t, e = kn) {
  const n = `${t.sys}|${t.mod}_${t.index}|${t.name}`;
  if (e[n])
    return e[n].getValue();
}
function Fn(t, e = 0, n = Ne) {
  const r = __spreadValues({
    id: ++ct,
    cmd: "bind"
  }, t);
  return n(r, e);
}
function as(t, e = 0, n = Ne) {
  const r = __spreadValues({
    id: ++ct,
    cmd: "unbind"
  }, t);
  return n(r, e);
}
function ls(t, e = at, n = Ne) {
  const r = __spreadValues({
    id: ++ct,
    cmd: "exec"
  }, t);
  return n(r, e);
}
function Ba(t, e = at, n = Ne) {
  const r = __spreadValues({
    id: ++ct,
    cmd: "debug"
  }, t);
  return n(r, e);
}
function Va(t, e = at, n = Ne) {
  const r = __spreadValues({
    id: ++ct,
    cmd: "ignore"
  }, t);
  return n(r, e);
}
function Ne(t, e = at, n = 0) {
  const r = `${t.cmd}|${t.sys}|${t.mod}${t.index}|${t.name}|${t.args}|${Xi()}`;
  if (L[r])
    d("WS", "Request already in progress. Waiting...", t);
  else {
    const i = __spreadProps(__spreadValues({}, t), { key: r });
    i.promise = new Promise((o, s) => {
      const u = () => {
        delete L[r], L[r] = null, Ne(t, e, n).then(
          (c) => o(c),
          (c) => s(c)
        );
      };
      if (Q && Wr()) {
        _n() && ys(t, Q, os), i.resolve = o, i.reject = s;
        const c = `${t.sys}, ${t.mod}_${t.index}, ${t.name}`;
        d(
          "WS",
          `[${t.cmd.toUpperCase()}](${t.id}) ${c}`,
          t.args
        ), Q.next(t), e > 0 && ne(
          `${r}`,
          () => {
            s("Request timed out."), delete L[r], L[r] = null;
          },
          e
        );
      } else ue ? setTimeout(() => u(), 1e3) : $n().then(() => u());
    }), L[r] = i;
  }
  return L[r].promise;
}
function Br(t) {
  if (t !== "pong" && t instanceof Object) {
    if (t.type === "notify" && t.meta)
      ds(t.meta, t.value);
    else if (t.type === "success")
      fs(t);
    else if (t.type === "debug") {
      d(
        "WS",
        `[DEBUG] ${t.mod}${t.klass || ""} \u2192`,
        t.msg
      );
      const e = t.meta || { mod: "", index: "" };
      Lr.next({
        mod_id: t.mod || "<empty>",
        module: `${e.mod}_${e.index}`,
        class_name: t.klass || "<empty>",
        message: t.msg || "<empty>",
        level: t.level || Cr.Debug,
        time: Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3)
      });
    } else t.type === "error" ? hs(t) : t.cmd || d("WS", "Invalid websocket message", t, "error");
    be(`${t.id}`);
  } else t === "pong" && (xn = Date.now(), d("WS", "Pong!"));
}
function fs(t) {
  const e = Object.keys(L).map((n) => L[n]).find((n) => n?.id === t.id);
  d("WS", `[SUCCESS](${t.id})`), e && e.resolve && (e.resolve(t.value), delete L[e.key]);
}
function hs(t) {
  let e = "UNEXPECTED FAILURE";
  switch (t.code) {
    case X.ACCESS_DENIED:
      e = "ACCESS DENIED";
      break;
    case X.BAD_REQUEST:
      e = "BAD REQUEST";
      break;
    case X.MOD_NOT_FOUND:
      e = "MODULE NOT FOUND";
      break;
    case X.SYS_NOT_FOUND:
      e = "SYSTEM NOT FOUND";
      break;
    case X.PARSE_ERROR:
      e = "PARSE ERROR";
      break;
    case X.REQUEST_FAILED:
      e = "REQUEST FAILED";
      break;
    case X.UNKNOWN_CMD:
      e = "UNKNOWN COMMAND";
      break;
  }
  d(
    "WS",
    `[ERROR] ${e}(${t.id}): ${t.msg}`,
    void 0,
    "error"
  );
  const n = Object.keys(L).map((r) => L[r]).filter((r) => r).find((r) => r.id === t.id);
  n && n.reject && (n.reject(t), be(`${n.key}`), delete L[n.key]);
}
function ds(t, e, n = kn, r = $e) {
  const i = `${t.sys}|${t.mod}_${t.index}|${t.name}`;
  n[i] || (n[i] = new le(null), r[i] = n[i].asObservable());
  const o = `${t.sys}, ${t.mod}_${t.index}, ${t.name}`;
  d("WS", `[NOTIFY] ${o} changed`, [
    n[i].getValue(),
    "\u2192",
    e
  ]), n[i].next(e);
}
function $n(t = 0) {
  return ue == null && (ue = new Promise((e) => {
    if (t > 40)
      return location.reload();
    wt++, Hr = Date.now(), Q = _n() ? ms() : ps(), Q ? (d("WS(Debug)", "Authority:", [kt()]), d("WS", "Connecting to websocket..."), Q.subscribe(
      (n) => {
        de.getValue() || (d("WS", "Connection established."), e()), de.next(true), wt = 0, nn(), Br(n);
      },
      (n) => {
        Q = void 0, ue = null, Hn(), nn(), _s(n);
      },
      () => {
        Q = void 0, ue = null, Hn(), d("WS", "Connection closed by browser."), de.next(false), Ot();
      }
    ), we && clearInterval(we), xn = Date.now(), zn(), we = setInterval(
      () => zn(),
      jr * 1e3
    ), nn(), Fr += 1, _t = setTimeout(() => {
      d("WS", "Unhealthy connection. Reconnecting..."), de.next(false), ue = null, Ot();
    }, 30 * 1e3)) : (Q ? d(
      "WS",
      `Waiting on auth(${t}). Retrying in ${1e3 * Math.min(10, t + 1)}ms...`,
      [!!Y(), !!kt()],
      "info"
    ) : d(
      "WS",
      `Failed to create websocket(${t}). Retrying in ${1e3 * Math.min(10, t + 1)}ms...`,
      void 0,
      "error"
    ), setTimeout(
      () => {
        ue = null, $n(t).then((n) => e(n));
      },
      1e3 * Math.min(10, ++t)
    ));
  })), ue;
}
function ps() {
  if (!kt() || !Y()) return null;
  const t = fo() || location.protocol.indexOf("https") >= 0;
  let e = `ws${t ? "s" : ""}://${an()}${tn()}${yr() ? "?fixed_device=true" : ""}`;
  const n = Y();
  let r = n === "x-api-key" ? `api-key=${Pt()}` : `bearer_token=${n}`;
  return !so() && !Zi() ? (d("WS", "Authenticating through cookie..."), r += `;max-age=120;path=${tn()};`, r += `${t ? "secure;" : ""}samesite=strict`, document.cookie = r, d("WS", "Cookies:", [document.cookie, r])) : (d("WS", "Authenticating through URL query parameter..."), e += `${e.indexOf("?") >= 0 ? "&" : "?"}${r}`), d(
    "WS",
    `Creating websocket connection to ws${t ? "s" : ""}://${an()}${tn()}`
  ), ts({
    url: e,
    serializer: (i) => typeof i == "object" ? JSON.stringify(i) : i,
    deserializer: (i) => {
      let o = i.data;
      if (o === "pong") return o;
      try {
        return JSON.parse(i.data);
      } catch {
        return o;
      }
    }
  });
}
function Ot() {
  zr.next([Fr, Date.now() - Hr]), Q && Wr() && (Q.complete(), we && (clearInterval(we), we = void 0)), d(
    "WS",
    `Reconnecting in ${Math.min(
      5e3,
      wt * 300 || 1e3
    )}ms...`
  ), ne(
    "reconnect",
    () => $n(),
    Math.min(5e3, (wt + 1) * 300 || 1e3)
  );
}
function zn() {
  if (Date.now() - xn > 4 * jr * 1e3)
    return Ot();
  Q?.next("ping");
}
function _s(t) {
  de.next(false), d("WS", "Websocket error:", t, void 0, "error"), t.status === 401 && yn(), gr(), Ot();
}
function nn() {
  _t && (clearTimeout(_t), _t = void 0);
}
function ms() {
  const t = new me();
  return t.subscribe(
    (e) => Br(e)
  ), t;
}
function ys(t, e, n) {
  const r = `${t.sys}|${t.mod}_${t.index}|${t.name}`, i = is(t.sys), o = i && i[t.mod] ? i[t.mod][t.index - 1 || 0] : null;
  if (o) {
    switch (t.cmd) {
      case "bind":
        n[r] = o.listen(t.name).subscribe((s) => {
          setTimeout(
            () => {
              e.next({
                type: "notify",
                value: s,
                meta: t
              });
            },
            Math.floor(Math.random() * 100 + 50)
            // Add natural delay before response
          );
        });
        break;
      case "unbind":
        n[r] && (n[r].unsubscribe(), delete n[r], be(`${r}`));
        break;
    }
    ne(
      `${t.id}-response`,
      () => {
        const s = {
          id: t.id,
          type: "success",
          value: t.cmd === "exec" ? o.call(t.name, t.args) : null
        };
        e.next(s);
      },
      10
    );
  } else
    ne(
      `${t.id}-error`,
      () => e.next({
        id: t.id,
        type: "error",
        code: i ? X.SYS_NOT_FOUND : X.MOD_NOT_FOUND
      }),
      10
    );
}
function Hn() {
  for (const t in L)
    L[t] && delete L[t];
}
var Ln = class {
  constructor(e, n) {
    this._module = e, this.name = n, ss().pipe(Ri()).subscribe((r) => {
      r && (this._stale_bindings || this._pending === 1) ? (d("VAR", "Re-binding to status variable", this.binding()), this.rebind()) : r || (be(
        `rebind:${JSON.stringify(this.binding())}`
      ), d(
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
    return cs(this.binding());
  }
  /**
   * Get an observable that emits the current value of the binding
   */
  listen() {
    return us(this.binding());
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
      next: e,
      complete: () => n(),
      error: () => n()
    });
  }
  /**
   * Bind to the status variable's value
   */
  bind() {
    return (this._binding_count <= 0 && this._stale_bindings <= 0 || this._pending === 2) && (this._pending = 1, Fn(this.binding()).then(() => {
      this._binding_count++, this._pending = 0;
    }).catch(() => null)), () => this.unbind();
  }
  /**
   * Unbind from status variable
   */
  unbind() {
    this._binding_count === 1 && this._pending === 0 ? (this._pending = 2, as(this.binding()).then(() => {
      this._pending === 2 && (this._pending = 0), this._binding_count--;
    })) : this._binding_count = Math.max(this._binding_count - 1, 0);
  }
  /**
   * Rebind to the status variable
   */
  async rebind() {
    !this._stale_bindings && this._pending !== 1 || ne(
      `rebind:${JSON.stringify(this.binding())}`,
      async () => {
        await Fn(this.binding()), this._binding_count = this._stale_bindings || 1, this._stale_bindings = 0;
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
var gs = class {
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
    return this._bindings[e] || (this._bindings[e] = new Ln(this, e)), this._bindings[e];
  }
  /**
   * Get binding with the given name
   * @param name Name of the binding
   */
  variable(e) {
    return this._bindings[e] || (this._bindings[e] = new Ln(this, e)), this._bindings[e];
  }
  /**
   * Execute method on the engine module
   * @param method Name of the method
   * @param args Array of arguments to pass to the method
   */
  execute(e, n, r = at) {
    return ls(
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
var bs = class {
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
        new gs(
          this,
          `${i}_${this._module_list[i].length + 1}`
        )
      );
    return this._module_list[i][n - 1];
  }
};
var rn = {};
function vs(t) {
  return rn[t] || (rn[t] = new bs(t)), rn[t];
}
function Qa(t, e, n = 1) {
  return vs(t).module(e, n);
}

export {
  Subscription,
  pipe,
  Observable,
  refCount,
  ConnectableObservable,
  Subject,
  BehaviorSubject,
  asapScheduler,
  animationFrameScheduler,
  EMPTY,
  from,
  of,
  throwError,
  isObservable,
  EmptyError,
  lastValueFrom,
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
  vt,
  Ki,
  ve,
  ks,
  Pt,
  Y,
  kt,
  xs,
  _n,
  $s,
  As,
  yn,
  Os,
  Is,
  ee,
  Ie,
  We,
  Be,
  Mo,
  A,
  M,
  R,
  P,
  Ls,
  Bs,
  Vs,
  Qs,
  Do,
  Uo,
  Ys,
  Ks,
  Zs,
  Gs,
  Xs,
  tu,
  nu,
  Co,
  ru,
  iu,
  ou,
  su,
  uu,
  Te,
  Se,
  $t,
  Ir,
  cu,
  au,
  lu,
  fu,
  hu,
  du,
  pu,
  mu,
  yu,
  gu,
  bu,
  vu,
  Su,
  ku,
  Fo,
  xu,
  Au,
  wu,
  Ou,
  Re,
  vn,
  Eu,
  Iu,
  Pu,
  Tu,
  Ru,
  Tr,
  Mr,
  Uu,
  qu,
  Nu,
  Cu,
  ju,
  Fu,
  zu,
  Wu,
  Bu,
  Vu,
  Lo,
  Qu,
  Ju,
  Ku,
  Zu,
  Rr,
  Wo,
  Gu,
  Xu,
  ec,
  tc,
  nc,
  rc,
  ic,
  oc,
  sc,
  uc,
  cc,
  ac,
  lc,
  fc,
  hc,
  Bo,
  dc,
  _c,
  mc,
  yc,
  gc,
  vc,
  Sc,
  xc,
  $c,
  Ac,
  wc,
  Oc,
  Ec,
  Ic,
  Pc,
  Tc,
  Mc,
  Rc,
  Dc,
  Uc,
  Nc,
  Cc,
  jc,
  Fc,
  zc,
  Hc,
  Lc,
  Wc,
  Bc,
  Vc,
  Qc,
  Yc,
  Vo,
  Qo,
  Jo,
  Jc,
  Kc,
  Zc,
  Gc,
  Xc,
  ea,
  ta,
  na,
  ra,
  ia,
  oa,
  sa,
  ua,
  ca,
  Lr,
  Ba,
  Va,
  Qa
};
//# sourceMappingURL=chunk-72HWXKQ6.js.map
