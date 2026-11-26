import {
  isAborted,
  readError
} from "./chunk-HS2B2TZM.js";
import {
  notifyError
} from "./chunk-V2X4XHND.js";
import {
  i18n
} from "./chunk-2BK6GMG5.js";

// src/app/common/load-error.ts
function reportLoadError(empty) {
  return async (error) => {
    if (isAborted(error)) return empty;
    notifyError(
      i18n("COMMON.LOAD_ERROR", { error: await readError(error) })
    );
    return empty;
  };
}

export {
  reportLoadError
};
//# debugId=20948533-39ce-5222-9def-6305dde748cb
//# sourceMappingURL=chunk-GVPYT7HY.js.map
