import {
  validateJSONString
} from "./chunk-BZKFKJMB.js";
import {
  required,
  validate
} from "./chunk-PTZ46HPL.js";
import {
  Validators
} from "./chunk-QRHAUA7K.js";
import {
  ir
} from "./chunk-DYV6NXUQ.js";
import {
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/triggers/triggers.utilities.ts
function generateTriggerFormModel(trigger) {
  return {
    name: trigger?.name || "",
    description: trigger?.description || "",
    enable_webhook: trigger?.enable_webhook || false,
    supported_methods: [...trigger?.supported_methods || []],
    debounce_period: Math.max(0, trigger?.debounce_period || 0)
  };
}
function applyTriggerFormSchema(path) {
  required(path.name);
}
function generateTriggerSettingsFormModel(trigger) {
  return {
    name: trigger?.name || "",
    playlists: [...trigger?.playlists || []],
    triggered: +trigger?.activated_count > 0,
    exec_enabled: !!trigger?.exec_enabled,
    enabled: !!trigger?.enabled,
    important: !!trigger?.important
  };
}
function generateTriggerConditionFormModel(condition = {}) {
  const type = condition.type ? "time" : "compare";
  const left = typeof condition.left === "object" ? __spreadValues({}, condition.left) : condition.left;
  const right = typeof condition.right === "object" ? __spreadValues({}, condition.right) : condition.right;
  return {
    condition_type: type,
    left: typeof left === "object" ? __spreadValues({}, left) : left ?? {},
    operator: condition.operator || ir.EQ,
    right: right ?? void 0,
    time_type: condition.type || "at",
    time: (+condition.time || 0) * 1e3 || Date.now(),
    cron: condition.cron || "",
    timezone: condition.timezone || ""
  };
}
function applyTriggerConditionFormSchema(path) {
  const valid_compare_value = (value) => {
    if (value instanceof Object) {
      return !value.mod ? { kind: "module", message: "Module is required" } : !value.status ? { kind: "status", message: "Status is required" } : void 0;
    }
    return validateJSONString({ value }) ? { kind: "json", message: "Valid JSON is required" } : void 0;
  };
  validate(path.left, ({ value, valueOf }) => valueOf(path.condition_type) === "compare" ? valid_compare_value(value()) : void 0);
  validate(path.right, ({ value, valueOf }) => valueOf(path.condition_type) === "compare" ? valid_compare_value(value()) : void 0);
}
function validateEmailList(control) {
  if (control.value && control.value instanceof Array) {
    const value = control.value;
    return value.reduce((valid, email) => valid && !Validators.email({ value: email }), true) ? null : { email: true };
  }
  return null;
}
function generateTriggerActionFormModel(action = {}) {
  const type = action && action?.emails ? "emails" : "function";
  return {
    action_type: type,
    emails: action?.emails || [],
    content: action?.content || "",
    method_call: action || null
  };
}
function applyTriggerActionFormSchema(path) {
  required(path.emails, {
    when({ valueOf }) {
      return valueOf(path.action_type) === "emails";
    }
  });
  validate(path.emails, ({ value, valueOf }) => valueOf(path.action_type) !== "emails" || validateEmailList({ value: value() }) === null ? void 0 : { kind: "email", message: "Invalid email address" });
  required(path.content, {
    when({ valueOf }) {
      return valueOf(path.action_type) === "emails";
    }
  });
  required(path.method_call, {
    when({ valueOf }) {
      return valueOf(path.action_type) === "function";
    }
  });
}

export {
  generateTriggerFormModel,
  applyTriggerFormSchema,
  generateTriggerSettingsFormModel,
  generateTriggerConditionFormModel,
  applyTriggerConditionFormSchema,
  generateTriggerActionFormModel,
  applyTriggerActionFormSchema
};
//# sourceMappingURL=chunk-JKZ2332N.js.map
