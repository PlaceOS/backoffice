import {
  readError
} from "./chunk-T3O7QHHC.js";
import {
  notifyError
} from "./chunk-PK5A7L3I.js";
import {
  i18n
} from "./chunk-II4DDLQO.js";

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
//# sourceMappingURL=chunk-SKNZQY2S.js.map
