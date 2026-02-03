import {
  millisecondsInMinute,
  toDate
} from "./chunk-W3GXKXZC.js";
import {
  i18n
} from "./chunk-CZ2LCIXT.js";
import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-TUZQ7R7Y.js";

// node_modules/date-fns/_lib/getRoundingMethod.js
function getRoundingMethod(method) {
  return (number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    return result === 0 ? 0 : result;
  };
}

// node_modules/date-fns/differenceInMilliseconds.js
function differenceInMilliseconds(laterDate, earlierDate) {
  return +toDate(laterDate) - +toDate(earlierDate);
}

// node_modules/date-fns/differenceInMinutes.js
function differenceInMinutes(dateLeft, dateRight, options) {
  const diff = differenceInMilliseconds(dateLeft, dateRight) / millisecondsInMinute;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// src/app/ui/pipes/date-from.pipe.ts
var DateFromPipe = class _DateFromPipe {
  transform(date) {
    const now = Date.now();
    let diff = differenceInMinutes(now, date);
    const direction = diff < 0;
    diff = Math.abs(diff);
    if (diff < 1) {
      return direction ? i18n("COMMON.DATE_FROM_IN_LESS_MINUTE") : i18n("COMMON.DATE_FROM_LESS_MINUTE_AGO");
    } else if (diff === 1) {
      return direction ? i18n("COMMON.DATE_FROM_IN_ABOUT_MINUTE") : i18n("COMMON.DATE_FROM_ABOUT_MINUTE_AGO");
    } else if (diff < 60) {
      return direction ? i18n("COMMON.DATE_FROM_IN_MINUTES", { minutes: diff }) : i18n("COMMON.DATE_FROM_MINUTES_AGO", { minutes: diff });
    } else if (diff < 24 * 60) {
      const hours = Math.floor(diff / 60);
      return direction ? i18n("COMMON.DATE_FROM_IN_HOURS", { hours }, hours) : i18n("COMMON.DATE_FROM_HOURS_AGO", { hours }, hours);
    } else if (diff < 30 * 24 * 60) {
      const days = Math.floor(diff / (24 * 60));
      return direction ? i18n("COMMON.DATE_FROM_IN_DAYS", { days }, days) : i18n("COMMON.DATE_FROM_DAYS_AGO", { days }, days);
    } else if (diff < 365 * 24 * 60) {
      const months = Math.floor(diff / (30 * 24 * 60));
      return direction ? i18n("COMMON.DATE_FROM_IN_MONTHS", { months }, months) : i18n("COMMON.DATE_FROM_MONTHS_AGO", { months }, months);
    } else if (diff >= 365 * 24 * 60) {
      const years = Math.floor(diff / (365 * 24 * 60));
      return direction ? i18n("COMMON.DATE_FROM_IN_YEARS", { years }, years) : i18n("COMMON.DATE_FROM_YEARS_AGO", { years }, years);
    }
    return i18n("COMMON.DATE_JUST_NOW");
  }
  static \u0275fac = function DateFromPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateFromPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "dateFrom", type: _DateFromPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateFromPipe, [{
    type: Pipe,
    args: [{
      name: "dateFrom"
    }]
  }], null, null);
})();

export {
  getRoundingMethod,
  DateFromPipe
};
//# sourceMappingURL=chunk-EIELCWDO.js.map
