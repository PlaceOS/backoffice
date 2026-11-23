import {
  readError
} from "./chunk-N7V3DZSR.js";
import {
  notifyError
} from "./chunk-V2X4XHND.js";
import {
  i18n
} from "./chunk-MSK6KGG6.js";

// src/app/common/load-error.ts
function reportLoadError(empty) {
  return async (error) => {
    notifyError(
      i18n("COMMON.LOAD_ERROR", { error: await readError(error) })
    );
    return empty;
  };
}

export {
  reportLoadError
};
//# debugId=44928881-7871-5d8c-b2b5-8570c522b23c
//# sourceMappingURL=chunk-6S6AGDRG.js.map
