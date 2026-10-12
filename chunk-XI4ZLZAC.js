import {
  constructFrom,
  toDate
} from "./chunk-TPDHL3PI.js";

// node_modules/date-fns/addDays.js
function addDays(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) return _date;
  _date.setDate(_date.getDate() + amount);
  return _date;
}

export {
  addDays
};
//# debugId=37fdb729-eefe-5cd0-8540-a71463c554f1
//# sourceMappingURL=chunk-XI4ZLZAC.js.map
