import {
  validateJSONString
} from "./chunk-F45UEFFY.js";
import {
  required,
  validate
} from "./chunk-LMCXBYGC.js";
import {
  Validators
} from "./chunk-TUWOEI35.js";
import {
  ar
} from "./chunk-P3FA5CPP.js";
import {
  __spreadValues
} from "./chunk-RQBZITXC.js";

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
    operator: condition.operator || ar.EQ,
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
function buildCronString(period, parts) {
  const minute = parts.minute % 60;
  const { hour, day_of_week, day_of_month, month } = parts;
  switch (period) {
    case "minute":
      return minute ? `*/${minute} * * * *` : "* * * * *";
    case "hour":
      return hour ? `${minute} */${hour} * * *` : `${minute} * * * *`;
    case "day":
      return `${minute} ${hour} * * *`;
    case "week":
      return `${minute} ${hour} * * ${day_of_week}`;
    case "month":
      return `${minute} ${hour} ${day_of_month} * *`;
    case "year":
      return `${minute} ${hour} ${day_of_month} ${month} *`;
  }
  return null;
}
function parseCronString(cron) {
  const cron_str = (cron || "").trim() || "* * * * *";
  const [minute, hour, day, month, weekday] = cron_str.split(/\s+/);
  const parts = {
    minute: +minute || 0,
    hour: +hour || 0,
    day_of_week: +weekday || 0,
    day_of_month: +day || 1,
    month: +month || 1
  };
  if (/[-/,]/.test(cron_str))
    return { period: "custom", parts };
  const is_set = (value) => !!value && value !== "*";
  const period = is_set(month) ? "year" : is_set(day) ? "month" : is_set(weekday) ? "week" : is_set(hour) ? "day" : is_set(minute) ? "hour" : "minute";
  return { period, parts };
}

export {
  generateTriggerFormModel,
  applyTriggerFormSchema,
  generateTriggerSettingsFormModel,
  generateTriggerConditionFormModel,
  applyTriggerConditionFormSchema,
  generateTriggerActionFormModel,
  applyTriggerActionFormSchema,
  buildCronString,
  parseCronString
};
//# sourceMappingURL=chunk-WEBXIC2Q.js.map
