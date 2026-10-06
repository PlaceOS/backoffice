import {
  millisecondsInMinute,
  toDate
} from "./chunk-TPDHL3PI.js";

// node_modules/date-fns/addMinutes.js
function addMinutes(date, amount, options) {
  const _date = toDate(date, options?.in);
  _date.setTime(_date.getTime() + amount * millisecondsInMinute);
  return _date;
}

// node_modules/date-fns/startOfMinute.js
function startOfMinute(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setSeconds(0, 0);
  return date_;
}

export {
  addMinutes,
  startOfMinute
};
//# sourceMappingURL=chunk-PK6MWCXS.js.map
