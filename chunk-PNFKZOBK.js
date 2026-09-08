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

export {
  addMinutes
};
//# sourceMappingURL=chunk-PNFKZOBK.js.map
