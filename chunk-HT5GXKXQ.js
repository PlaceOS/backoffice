import {
  toDate
} from "./chunk-TPDHL3PI.js";

// node_modules/date-fns/startOfDay.js
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

export {
  startOfDay
};
//# sourceMappingURL=chunk-HT5GXKXQ.js.map
