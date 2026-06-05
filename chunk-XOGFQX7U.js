import {
  toDate
} from "./chunk-TPDHL3PI.js";

// node_modules/date-fns/startOfMinute.js
function startOfMinute(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setSeconds(0, 0);
  return date_;
}

export {
  startOfMinute
};
//# sourceMappingURL=chunk-XOGFQX7U.js.map
