import {
  array,
  assert,
  boolean,
  call,
  decodeJson,
  fetchBody,
  integer,
  isRecord,
  json,
  literal,
  nullable,
  number,
  object,
  operation,
  parameters,
  parseResponse,
  record,
  scopedLog,
  string,
  tuple,
  union,
  unreachable
} from "./chunk-LD3K5ATK.js";
import {
  __export,
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// node_modules/@placeos/ts-client/dist/generated/schemas.js
var AdminConsentFlowStepSchema = /* @__PURE__ */ object({
  key: /* @__PURE__ */ string(),
  label: /* @__PURE__ */ string(),
  state: /* @__PURE__ */ string()
}, ["key", "label", "state"]);
var AdminConsentFlowStep = AdminConsentFlowStepSchema;
var AdminConsentFlowSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ string(),
  state: /* @__PURE__ */ string(),
  steps: /* @__PURE__ */ array(AdminConsentFlowStep),
  detail: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  error: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  redirect: /* @__PURE__ */ string(),
  authority_id: /* @__PURE__ */ string(),
  updated_at: /* @__PURE__ */ integer()
}, ["id", "state", "steps", "redirect", "authority_id", "updated_at"]);
var AdminConsentFlow = AdminConsentFlowSchema;
var TriggerConditionsComparisonOperatorSchema = /* @__PURE__ */ literal([
  "and",
  "equal",
  "exclusive_or",
  "greater_than",
  "greater_than_or_equal",
  "less_than",
  "less_than_or_equal",
  "not_equal",
  "or"
]);
var TriggerConditionsComparisonOperator = TriggerConditionsComparisonOperatorSchema;
var TriggerConditionsComparisonStatusVariableSchema = /* @__PURE__ */ object({
  mod: /* @__PURE__ */ string(),
  status: /* @__PURE__ */ string(),
  keys: /* @__PURE__ */ array(/* @__PURE__ */ string())
}, ["mod", "status", "keys"]);
var TriggerConditionsComparisonStatusVariable = TriggerConditionsComparisonStatusVariableSchema;
var TriggerConditionsComparisonSchema = /* @__PURE__ */ object({
  left: /* @__PURE__ */ nullable(
    /* @__PURE__ */ union([
      /* @__PURE__ */ boolean(),
      /* @__PURE__ */ number(),
      /* @__PURE__ */ integer(),
      TriggerConditionsComparisonStatusVariable,
      /* @__PURE__ */ string()
    ])
  ),
  operator: /* @__PURE__ */ nullable(TriggerConditionsComparisonOperator),
  right: /* @__PURE__ */ nullable(
    /* @__PURE__ */ union([
      /* @__PURE__ */ boolean(),
      /* @__PURE__ */ number(),
      /* @__PURE__ */ integer(),
      TriggerConditionsComparisonStatusVariable,
      /* @__PURE__ */ string()
    ])
  )
});
var TriggerConditionsComparison = TriggerConditionsComparisonSchema;
var TriggerConditionsTimeDependentTypeSchema = /* @__PURE__ */ literal(["at", "cron"]);
var TriggerConditionsTimeDependentType = TriggerConditionsTimeDependentTypeSchema;
var TriggerConditionsTimeDependentSchema = /* @__PURE__ */ object({
  type: /* @__PURE__ */ nullable(TriggerConditionsTimeDependentType),
  /** Unix time in seconds. */
  time: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  cron: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  timezone: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var TriggerConditionsTimeDependent = TriggerConditionsTimeDependentSchema;
var TriggerConditionsSchema = /* @__PURE__ */ object({
  comparisons: /* @__PURE__ */ nullable(/* @__PURE__ */ array(TriggerConditionsComparison)),
  time_dependents: /* @__PURE__ */ nullable(
    /* @__PURE__ */ array(TriggerConditionsTimeDependent)
  )
});
var TriggerConditions = TriggerConditionsSchema;
var ApiKeySchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  scopes: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  /** The number of the enum: 0 user, 1 support, 2 admin, 3 admin_support. */
  permissions: /* @__PURE__ */ nullable(/* @__PURE__ */ literal([0, 1, 2, 3])),
  secret: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  /** Unix time in seconds. */
  expires_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  ttl: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  user_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var ApiKey = ApiKeySchema;
var AuthoritySchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  domain: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  login_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  logout_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  internals: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ json())),
  config: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ json())),
  email_domains: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var Authority = AuthoritySchema;
var UserWorktimeBlockSchema = /* @__PURE__ */ object({
  start_time: /* @__PURE__ */ number(),
  end_time: /* @__PURE__ */ number(),
  location: /* @__PURE__ */ string()
}, ["start_time", "end_time", "location"]);
var UserWorktimeBlock = UserWorktimeBlockSchema;
var UserWorktimePreferenceSchema = /* @__PURE__ */ object({
  day_of_week: /* @__PURE__ */ integer("Int32"),
  blocks: /* @__PURE__ */ array(UserWorktimeBlock)
}, ["day_of_week", "blocks"]);
var UserWorktimePreference = UserWorktimePreferenceSchema;
var UserAdminResponseSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ integer(),
  name: /* @__PURE__ */ string(),
  nickname: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  email: /* @__PURE__ */ string(),
  phone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  country: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  image: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  ui_theme: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  misc: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  login_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  staff_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  first_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  last_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  building: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  department: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  preferred_language: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  email_digest: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  card_number: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  deleted: /* @__PURE__ */ boolean(),
  groups: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  sys_admin: /* @__PURE__ */ boolean(),
  support: /* @__PURE__ */ boolean(),
  locatable: /* @__PURE__ */ boolean(),
  login_count: /* @__PURE__ */ integer(),
  /** Unix time in seconds. */
  last_login: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  work_preferences: /* @__PURE__ */ array(UserWorktimePreference),
  work_overrides: /* @__PURE__ */ record(UserWorktimePreference),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  photo_upload_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, [
  "created_at",
  "name",
  "email",
  "deleted",
  "groups",
  "sys_admin",
  "support",
  "locatable",
  "login_count",
  "work_preferences",
  "work_overrides"
]);
var UserAdminResponse = UserAdminResponseSchema;
var UserJwtPermissionsSchema = /* @__PURE__ */ literal([
  "user",
  "support",
  "admin",
  "admin_support"
]);
var UserJwtPermissions = UserJwtPermissionsSchema;
var ApiKeysResponseSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  name: /* @__PURE__ */ string(),
  description: /* @__PURE__ */ string(),
  scopes: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  permissions: /* @__PURE__ */ nullable(UserJwtPermissions),
  user_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  created_at: /* @__PURE__ */ integer(),
  updated_at: /* @__PURE__ */ integer(),
  /** Unix time in seconds. */
  expires_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  x_api_key: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  user: /* @__PURE__ */ nullable(UserAdminResponse),
  authority: /* @__PURE__ */ nullable(Authority)
}, ["name", "description", "scopes", "created_at", "updated_at"]);
var ApiKeysResponse = ApiKeysResponseSchema;
var BrokerSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** The number of the enum: 0 certificate, 1 no_auth, 2 user_password. */
  auth_type: /* @__PURE__ */ nullable(/* @__PURE__ */ literal([0, 1, 2])),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  host: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  port: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  tls: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  username: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  password: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  certificate: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  secret: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  filters: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var Broker = BrokerSchema;
var BuildMonitorCancelStatusSchema = /* @__PURE__ */ object({
  status: /* @__PURE__ */ string(),
  message: /* @__PURE__ */ string()
}, ["status", "message"]);
var BuildMonitorCancelStatus = BuildMonitorCancelStatusSchema;
var BuildMonitorStateSchema = /* @__PURE__ */ literal([
  "pending",
  "running",
  "cancelled",
  "error",
  "done"
]);
var BuildMonitorState = BuildMonitorStateSchema;
var BuildMonitorTaskStatusSchema = /* @__PURE__ */ object({
  state: BuildMonitorState,
  id: /* @__PURE__ */ string(),
  message: /* @__PURE__ */ string(),
  driver: /* @__PURE__ */ string(),
  repo: /* @__PURE__ */ string(),
  branch: /* @__PURE__ */ string(),
  commit: /* @__PURE__ */ string(),
  timestamp: /* @__PURE__ */ string()
}, ["state", "id", "message", "driver", "repo", "branch", "commit", "timestamp"]);
var BuildMonitorTaskStatus = BuildMonitorTaskStatusSchema;
var DriverStatusMetadataSchema = /* @__PURE__ */ object({
  running: /* @__PURE__ */ boolean(),
  module_instances: /* @__PURE__ */ integer("Int32"),
  last_exit_code: /* @__PURE__ */ integer("Int32"),
  launch_count: /* @__PURE__ */ integer("Int32"),
  launch_time: /* @__PURE__ */ integer(),
  percentage_cpu: /* @__PURE__ */ nullable(/* @__PURE__ */ number()),
  memory_total: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  memory_usage: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
}, ["running", "module_instances", "last_exit_code", "launch_count", "launch_time"]);
var DriverStatusMetadata = DriverStatusMetadataSchema;
var ClusterDriverSchema = /* @__PURE__ */ object({
  modules: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  status: /* @__PURE__ */ nullable(DriverStatusMetadata)
}, ["modules"]);
var ClusterDriver = ClusterDriverSchema;
var ClusterDriverStatusSchema = /* @__PURE__ */ object({
  driver: /* @__PURE__ */ string(),
  local: ClusterDriver,
  edge: /* @__PURE__ */ record(ClusterDriver)
}, ["driver", "local", "edge"]);
var ClusterDriverStatus = ClusterDriverStatusSchema;
var CoreStatusErrorSchema = /* @__PURE__ */ object({
  name: /* @__PURE__ */ string(),
  reason: /* @__PURE__ */ string()
}, ["name", "reason"]);
var CoreStatusError = CoreStatusErrorSchema;
var CoreStatusCountSchema = /* @__PURE__ */ object({
  modules: /* @__PURE__ */ integer("Int32"),
  drivers: /* @__PURE__ */ integer("Int32")
}, ["modules", "drivers"]);
var CoreStatusCount = CoreStatusCountSchema;
var CoreStatusRunCountSchema = /* @__PURE__ */ object({
  local: CoreStatusCount,
  edge: /* @__PURE__ */ record(CoreStatusCount)
}, ["local", "edge"]);
var CoreStatusRunCount = CoreStatusRunCountSchema;
var CoreStatusSchema = /* @__PURE__ */ object({
  available_repositories: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  unavailable_repositories: /* @__PURE__ */ array(CoreStatusError),
  compiled_drivers: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  unavailable_drivers: /* @__PURE__ */ array(CoreStatusError),
  run_count: CoreStatusRunCount
}, [
  "available_repositories",
  "unavailable_repositories",
  "compiled_drivers",
  "unavailable_drivers",
  "run_count"
]);
var CoreStatus = CoreStatusSchema;
var SystemLoadSchema = /* @__PURE__ */ object({
  hostname: /* @__PURE__ */ string(),
  cpu_count: /* @__PURE__ */ integer("Int32"),
  core_cpu: /* @__PURE__ */ number(),
  total_cpu: /* @__PURE__ */ number(),
  memory_total: /* @__PURE__ */ integer(),
  memory_usage: /* @__PURE__ */ integer(),
  core_memory: /* @__PURE__ */ integer()
}, [
  "hostname",
  "cpu_count",
  "core_cpu",
  "total_cpu",
  "memory_total",
  "memory_usage",
  "core_memory"
]);
var SystemLoad = SystemLoadSchema;
var LoadSchema = /* @__PURE__ */ object({
  local: SystemLoad,
  edge: /* @__PURE__ */ record(SystemLoad)
}, ["local", "edge"]);
var Load = LoadSchema;
var ClusterNodeStatusSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ string(),
  uri: /* @__PURE__ */ string(),
  load: /* @__PURE__ */ nullable(Load),
  status: /* @__PURE__ */ nullable(CoreStatus)
}, ["id", "uri"]);
var ClusterNodeStatus = ClusterNodeStatusSchema;
var ClusterVersionsSchema = /* @__PURE__ */ object({
  old_version: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  new_version: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var ClusterVersions = ClusterVersionsSchema;
var ConnectionMetricsSchema = /* @__PURE__ */ object({
  edge_id: /* @__PURE__ */ string(),
  total_connections: /* @__PURE__ */ integer("Int32"),
  failed_connections: /* @__PURE__ */ integer("Int32"),
  average_uptime: /* @__PURE__ */ integer(),
  last_connection_attempt: /* @__PURE__ */ integer(),
  last_successful_connection: /* @__PURE__ */ integer()
}, [
  "edge_id",
  "total_connections",
  "failed_connections",
  "average_uptime",
  "last_connection_attempt",
  "last_successful_connection"
]);
var ConnectionMetrics = ConnectionMetricsSchema;
var TriggerActionsEmailSchema = /* @__PURE__ */ object({
  emails: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  content: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var TriggerActionsEmail = TriggerActionsEmailSchema;
var TriggerActionsFunctionSchema = /* @__PURE__ */ object({
  mod: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  method: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  args: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ json()))
});
var TriggerActionsFunction = TriggerActionsFunctionSchema;
var TriggerActionsSchema = /* @__PURE__ */ object({
  functions: /* @__PURE__ */ nullable(/* @__PURE__ */ array(TriggerActionsFunction)),
  mailers: /* @__PURE__ */ nullable(/* @__PURE__ */ array(TriggerActionsEmail))
});
var TriggerActions = TriggerActionsSchema;
var SystemTriggersControlSystemDetailsSchema = /* @__PURE__ */ object({
  name: /* @__PURE__ */ string(),
  id: /* @__PURE__ */ string()
}, ["name", "id"]);
var SystemTriggersControlSystemDetails = SystemTriggersControlSystemDetailsSchema;
var TriggerInstanceSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  enabled: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  triggered: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  important: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  exec_enabled: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  playlists: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  webhook_secret: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  trigger_count: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  control_system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  trigger_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  zone_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  control_system: /* @__PURE__ */ nullable(SystemTriggersControlSystemDetails),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var TriggerInstance = TriggerInstanceSchema;
var TriggerSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  actions: /* @__PURE__ */ nullable(TriggerActions),
  conditions: /* @__PURE__ */ nullable(TriggerConditions),
  debounce_period: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  important: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  enable_webhook: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  any_match: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  supported_methods: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  control_system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  trigger_instances: /* @__PURE__ */ nullable(/* @__PURE__ */ array(TriggerInstance)),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var Trigger = TriggerSchema;
var ZoneSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  tags: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  location: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  display_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  code: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  type: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  count: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  capacity: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  map_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  timezone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  triggers: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  images: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  playlists: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  place_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  parent_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  remove_triggers: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  add_triggers: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  trigger_data: /* @__PURE__ */ nullable(/* @__PURE__ */ array(Trigger)),
  children_count: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  update_systems: /* @__PURE__ */ boolean()
}, ["update_systems"]);
var Zone = ZoneSchema;
var ModulesControlSystemDetailsSchema = /* @__PURE__ */ object({
  name: /* @__PURE__ */ string(),
  zone_data: /* @__PURE__ */ array(Zone)
}, ["name", "zone_data"]);
var ModulesControlSystemDetails = ModulesControlSystemDetailsSchema;
var ModulesDriverDetailsSchema = /* @__PURE__ */ object({
  name: /* @__PURE__ */ string(),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  module_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, ["name"]);
var ModulesDriverDetails = ModulesDriverDetailsSchema;
var ModuleSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  ip: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  port: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  tls: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  udp: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  makebreak: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  uri: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  custom_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  /** The number of the enum: 0 ssh, 1 device, 2 service, 3 websocket, 99 logic. */
  role: /* @__PURE__ */ nullable(/* @__PURE__ */ literal([0, 1, 2, 3, 99])),
  /** the alert level for stagehand issues */
  alert_level: /* @__PURE__ */ nullable(
    /* @__PURE__ */ literal(["low", "medium", "high", "critical"])
  ),
  connected: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  running: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  notes: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  ignore_connected: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  ignore_startstop: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  has_runtime_error: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  /** Unix time in seconds. */
  error_timestamp: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  launch_on_execute: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  control_system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  driver_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  edge_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  driver: /* @__PURE__ */ nullable(ModulesDriverDetails),
  control_system: /* @__PURE__ */ nullable(ModulesControlSystemDetails),
  core_node: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var Module = ModuleSchema;
var GroupSchema = /* @__PURE__ */ object({
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  subsystems: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  default_permissions: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  ad_group_mappings: /* @__PURE__ */ nullable(
    /* @__PURE__ */ record(
      /* @__PURE__ */ tuple([/* @__PURE__ */ string(), /* @__PURE__ */ integer("Int32")])
    )
  ),
  features: /* @__PURE__ */ nullable(
    /* @__PURE__ */ record(/* @__PURE__ */ record(/* @__PURE__ */ json()))
  ),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  parent_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  children_count: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32"))
});
var Group = GroupSchema;
var PlaylistScheduleSchema = /* @__PURE__ */ object({
  play_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  play_at_local: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  valid_until: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  valid_from: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  play_takeover: /* @__PURE__ */ boolean(),
  play_period: /* @__PURE__ */ integer("Int32"),
  play_cron: /* @__PURE__ */ string(),
  mask: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, ["play_takeover", "play_period", "play_cron"]);
var PlaylistSchedule = PlaylistScheduleSchema;
var PlaylistSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  orientation: /* @__PURE__ */ nullable(
    /* @__PURE__ */ literal(["unspecified", "landscape", "portrait", "square"])
  ),
  play_count: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  play_through_count: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /**
   * The number of the enum: 0 default, 1 cut, 2 cross_fade, 3 slide_top, 4 slide_left, 5
   * slide_right, 6 slide_bottom.
   */
  default_animation: /* @__PURE__ */ nullable(/* @__PURE__ */ literal([0, 1, 2, 3, 4, 5, 6])),
  random: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  enabled: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  distribution: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  default_duration: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  valid_from: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  valid_until: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  schedules: /* @__PURE__ */ nullable(/* @__PURE__ */ array(PlaylistSchedule)),
  shared_with: /* @__PURE__ */ nullable(/* @__PURE__ */ array(Group)),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var Playlist = PlaylistSchema;
var PlaylistItemSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  tags: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  video_length: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  start_time: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  play_time: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  /**
   * The number of the enum: 0 default, 1 cut, 2 cross_fade, 3 slide_top, 4 slide_left, 5
   * slide_right, 6 slide_bottom.
   */
  animation: /* @__PURE__ */ nullable(/* @__PURE__ */ literal([0, 1, 2, 3, 4, 5, 6])),
  media_type: /* @__PURE__ */ nullable(
    /* @__PURE__ */ literal(["image", "video", "plugin", "webpage", "external_image"])
  ),
  orientation: /* @__PURE__ */ nullable(
    /* @__PURE__ */ literal(["unspecified", "landscape", "portrait", "square"])
  ),
  media_uri: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  media_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  thumbnail_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  plugin_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  plugin_params: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ json())),
  play_count: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  valid_from: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  valid_until: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  shared_with: /* @__PURE__ */ nullable(/* @__PURE__ */ array(Group)),
  playlists: /* @__PURE__ */ nullable(/* @__PURE__ */ array(Playlist)),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var PlaylistItem = PlaylistItemSchema;
var SignagePluginSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  uri: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  playback_type: /* @__PURE__ */ nullable(
    /* @__PURE__ */ literal(["static", "interactive", "playsthrough"])
  ),
  plugin_type: /* @__PURE__ */ nullable(/* @__PURE__ */ literal(["plugin", "widget"])),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  enabled: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  params: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ json())),
  defaults: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ json())),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var SignagePlugin = SignagePluginSchema;
var SignageTemplateLayoutPositionSchema = /* @__PURE__ */ literal([
  "top",
  "bottom",
  "left",
  "right",
  "floating"
]);
var SignageTemplateLayoutPosition = SignageTemplateLayoutPositionSchema;
var SignageTemplateLayoutSchema = /* @__PURE__ */ object({
  plugin_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  position: SignageTemplateLayoutPosition,
  x_pos: /* @__PURE__ */ nullable(/* @__PURE__ */ number()),
  y_pos: /* @__PURE__ */ nullable(/* @__PURE__ */ number()),
  plugin_params: /* @__PURE__ */ record(/* @__PURE__ */ json())
}, ["position", "plugin_params"]);
var SignageTemplateLayout = SignageTemplateLayoutSchema;
var SignageTemplateSchema = /* @__PURE__ */ object({
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  tags: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  background_item_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  layouts: /* @__PURE__ */ nullable(/* @__PURE__ */ array(SignageTemplateLayout)),
  full_screen_takeover: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  merge: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  approval_requested: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  requested_by_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  approved: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  approved_by_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  approved_by_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  approved_by_email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  live_template_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  background_media: /* @__PURE__ */ nullable(PlaylistItem),
  shared_with: /* @__PURE__ */ nullable(/* @__PURE__ */ array(Group))
});
var SignageTemplate = SignageTemplateSchema;
var SignageTemplateSystemTemplateSchema = /* @__PURE__ */ object({
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  control_system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  zone_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  template_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  schedule: /* @__PURE__ */ nullable(PlaylistSchedule),
  template_details: /* @__PURE__ */ nullable(SignageTemplate)
});
var SignageTemplateSystemTemplate = SignageTemplateSystemTemplateSchema;
var ControlSystemSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  features: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  bookable: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  public: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  display_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  code: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  type: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  capacity: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  map_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  approval: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  images: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  security_groups: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  timezone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  support_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  timetable_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  camera_snapshot_urls: /* @__PURE__ */ nullable(
    /* @__PURE__ */ array(/* @__PURE__ */ string())
  ),
  camera_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  room_booking_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  version: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  installed_ui_devices: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  zones: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  modules: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  orientation: /* @__PURE__ */ nullable(
    /* @__PURE__ */ literal(["unspecified", "landscape", "portrait", "square"])
  ),
  sign_height: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  sign_width: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  playlists: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  signage: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  /** Unix time in seconds. */
  signage_last_seen: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  playlist_item_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  space_config: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ json())),
  remove_zones: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  add_zones: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  zone_data: /* @__PURE__ */ nullable(/* @__PURE__ */ array(Zone)),
  module_data: /* @__PURE__ */ nullable(/* @__PURE__ */ array(Module)),
  playlist_mappings: /* @__PURE__ */ nullable(
    /* @__PURE__ */ record(/* @__PURE__ */ array(/* @__PURE__ */ string()))
  ),
  playlist_config: /* @__PURE__ */ nullable(
    /* @__PURE__ */ record(
      /* @__PURE__ */ tuple([Playlist, /* @__PURE__ */ array(/* @__PURE__ */ string())])
    )
  ),
  playlist_media: /* @__PURE__ */ nullable(/* @__PURE__ */ array(PlaylistItem)),
  signage_plugins: /* @__PURE__ */ nullable(/* @__PURE__ */ array(SignagePlugin)),
  template_schedules: /* @__PURE__ */ nullable(
    /* @__PURE__ */ array(SignageTemplateSystemTemplate)
  ),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  update_triggers: /* @__PURE__ */ boolean()
}, ["update_triggers"]);
var ControlSystem = ControlSystemSchema;
var DoorkeeperApplicationSchema = /* @__PURE__ */ object({
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  secret: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  scopes: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  owner_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  redirect_uri: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  confidential: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  skip_authorization: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  subsystems: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  uid: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
});
var DoorkeeperApplication = DoorkeeperApplicationSchema;
var DriverUpdateInfoSchema = /* @__PURE__ */ object({
  commit: /* @__PURE__ */ string(),
  message: /* @__PURE__ */ string(),
  author: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  date: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, ["commit", "message"]);
var DriverUpdateInfo = DriverUpdateInfoSchema;
var DriverSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  /** Schema data. JSON objects are encoded as JSON strings in responses. */
  json_schema: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  default_uri: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  default_port: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  /** The number of the enum: 0 ssh, 1 device, 2 service, 3 websocket, 99 logic. */
  role: /* @__PURE__ */ nullable(/* @__PURE__ */ literal([0, 1, 2, 3, 99])),
  /** the default alert level for stagehand issues */
  alert_level: /* @__PURE__ */ nullable(
    /* @__PURE__ */ literal(["low", "medium", "high", "critical"])
  ),
  file_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  commit: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  compilation_output: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  module_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  ignore_connected: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  update_available: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  update_info: /* @__PURE__ */ nullable(DriverUpdateInfo),
  repository_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  compilation_status: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ boolean())),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var Driver = DriverSchema;
var DriverRoleSchema = /* @__PURE__ */ literal([
  "ssh",
  "device",
  "service",
  "websocket",
  "logic"
]);
var DriverRole = DriverRoleSchema;
var EdgeSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  api_key_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  user_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  /** Unix time in seconds. */
  last_seen: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  online: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var Edge = EdgeSchema;
var EdgeCreateBodySchema = /* @__PURE__ */ object({
  name: /* @__PURE__ */ string(),
  user_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ string()
}, ["name", "description"]);
var EdgeCreateBody = EdgeCreateBodySchema;
var EdgeErrorSchema = /* @__PURE__ */ object({
  timestamp: /* @__PURE__ */ integer(),
  edge_id: /* @__PURE__ */ string(),
  error_type: /* @__PURE__ */ string(),
  message: /* @__PURE__ */ string(),
  context: /* @__PURE__ */ record(/* @__PURE__ */ string()),
  severity: /* @__PURE__ */ string()
}, ["timestamp", "edge_id", "error_type", "message", "context", "severity"]);
var EdgeError = EdgeErrorSchema;
var EdgeHealthSchema = /* @__PURE__ */ object({
  edge_id: /* @__PURE__ */ string(),
  connected: /* @__PURE__ */ boolean(),
  last_seen: /* @__PURE__ */ integer(),
  connection_uptime: /* @__PURE__ */ integer(),
  error_count_24h: /* @__PURE__ */ integer("Int32"),
  module_count: /* @__PURE__ */ integer("Int32"),
  failed_modules: /* @__PURE__ */ array(/* @__PURE__ */ string())
}, [
  "edge_id",
  "connected",
  "last_seen",
  "connection_uptime",
  "error_count_24h",
  "module_count",
  "failed_modules"
]);
var EdgeHealth = EdgeHealthSchema;
var EdgeKeyResponseSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ integer(),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ integer(),
  name: /* @__PURE__ */ string(),
  description: /* @__PURE__ */ string(),
  user_id: /* @__PURE__ */ string(),
  /** Unix time in seconds. */
  last_seen: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  online: /* @__PURE__ */ boolean(),
  x_api_key: /* @__PURE__ */ string()
}, ["created_at", "updated_at", "name", "description", "user_id", "online", "x_api_key"]);
var EdgeKeyResponse = EdgeKeyResponseSchema;
var EdgeModuleStatusSchema = /* @__PURE__ */ object({
  edge_id: /* @__PURE__ */ string(),
  total_modules: /* @__PURE__ */ integer("Int32"),
  running_modules: /* @__PURE__ */ integer("Int32"),
  failed_modules: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  initialization_errors: /* @__PURE__ */ array(
    /* @__PURE__ */ record(/* @__PURE__ */ json())
  )
}, ["edge_id", "total_modules", "running_modules", "failed_modules", "initialization_errors"]);
var EdgeModuleStatus = EdgeModuleStatusSchema;
var EdgeStatisticsSchema = /* @__PURE__ */ object({
  total_edges: /* @__PURE__ */ integer("Int32"),
  connected_edges: /* @__PURE__ */ integer("Int32"),
  edges_with_errors: /* @__PURE__ */ integer("Int32"),
  total_errors_24h: /* @__PURE__ */ integer("Int32"),
  total_modules: /* @__PURE__ */ integer("Int32"),
  failed_modules: /* @__PURE__ */ integer("Int32"),
  timestamp: /* @__PURE__ */ string()
}, [
  "total_edges",
  "connected_edges",
  "edges_with_errors",
  "total_errors_24h",
  "total_modules",
  "failed_modules",
  "timestamp"
]);
var EdgeStatistics = EdgeStatisticsSchema;
var GitRepositoryCommitSchema = /* @__PURE__ */ object({
  hash: /* @__PURE__ */ string(),
  subject: /* @__PURE__ */ string(),
  author: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  date: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  commit: /* @__PURE__ */ string()
}, ["hash", "subject", "commit"]);
var GitRepositoryCommit = GitRepositoryCommitSchema;
var UserPublicResponseSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ integer(),
  name: /* @__PURE__ */ string(),
  nickname: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  email: /* @__PURE__ */ string(),
  phone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  country: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  image: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  staff_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  first_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  last_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  building: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  department: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  preferred_language: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  email_digest: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  deleted: /* @__PURE__ */ boolean(),
  groups: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  locatable: /* @__PURE__ */ boolean(),
  login_count: /* @__PURE__ */ integer(),
  /** Unix time in seconds. */
  last_login: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  work_preferences: /* @__PURE__ */ array(UserWorktimePreference),
  work_overrides: /* @__PURE__ */ record(UserWorktimePreference),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  photo_upload_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, [
  "created_at",
  "name",
  "email",
  "deleted",
  "groups",
  "locatable",
  "login_count",
  "work_preferences",
  "work_overrides"
]);
var UserPublicResponse = UserPublicResponseSchema;
var GroupUserSchema = /* @__PURE__ */ object({
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  user_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  permissions: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  auto_assigned: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  group: /* @__PURE__ */ nullable(Group),
  user: /* @__PURE__ */ nullable(UserPublicResponse)
});
var GroupUser = GroupUserSchema;
var GroupZoneSchema = /* @__PURE__ */ object({
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  zone_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  permissions: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  deny: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  group: /* @__PURE__ */ nullable(Group),
  zone: /* @__PURE__ */ nullable(Zone)
});
var GroupZone = GroupZoneSchema;
var GroupsAdGroupSyncSchema = /* @__PURE__ */ object({
  user_id: /* @__PURE__ */ string(),
  ad_groups: /* @__PURE__ */ array(/* @__PURE__ */ string())
}, ["user_id", "ad_groups"]);
var GroupsAdGroupSync = GroupsAdGroupSyncSchema;
var GroupsCurrentGroupSchema = /* @__PURE__ */ object({
  group: Group,
  permissions: /* @__PURE__ */ integer("Int32")
}, ["group", "permissions"]);
var GroupsCurrentGroup = GroupsCurrentGroupSchema;
var HistorySchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  resource_type: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  resource_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  correlation_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  action: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  changed_fields: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  diff: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  snapshot: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  user_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  user_email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  context: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
});
var History = HistorySchema;
var ImageGenModelCapabilitiesSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ string(),
  name: /* @__PURE__ */ string(),
  generate: /* @__PURE__ */ boolean(),
  edit: /* @__PURE__ */ boolean(),
  enhance: /* @__PURE__ */ boolean(),
  max_references: /* @__PURE__ */ integer("Int32"),
  max_candidates: /* @__PURE__ */ integer("Int32"),
  qualities: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  aspect_ratios: /* @__PURE__ */ array(/* @__PURE__ */ string())
}, [
  "id",
  "name",
  "generate",
  "edit",
  "enhance",
  "max_references",
  "max_candidates",
  "qualities",
  "aspect_ratios"
]);
var ImageGenModelCapabilities = ImageGenModelCapabilitiesSchema;
var ImageGenProviderCapabilitiesSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ string(),
  name: /* @__PURE__ */ string(),
  provider: /* @__PURE__ */ string(),
  region: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  default_model: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  models: /* @__PURE__ */ array(ImageGenModelCapabilities)
}, ["id", "name", "provider", "models"]);
var ImageGenProviderCapabilities = ImageGenProviderCapabilitiesSchema;
var JsonSchemaSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  schema: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var JsonSchema = JsonSchemaSchema;
var LdapAuthenticationSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  port: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  auth_method: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  uid: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  host: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  base: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  bind_dn: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  password: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  filter: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var LdapAuthentication = LdapAuthenticationSchema;
var MetadataInterfaceSchema = /* @__PURE__ */ object({
  name: /* @__PURE__ */ string(),
  description: /* @__PURE__ */ string(),
  details: /* @__PURE__ */ json(),
  parent_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  schema_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  editors: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  modified_by_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  updated_at: /* @__PURE__ */ integer(),
  created_at: /* @__PURE__ */ integer()
}, ["name", "description", "details", "editors", "updated_at", "created_at"]);
var MetadataInterface = MetadataInterfaceSchema;
var MetadataChildrenSchema = /* @__PURE__ */ object({
  zone: Zone,
  metadata: /* @__PURE__ */ record(MetadataInterface)
}, ["zone", "metadata"]);
var MetadataChildren = MetadataChildrenSchema;
var MetadataRenameSchema = /* @__PURE__ */ object({
  current_name: /* @__PURE__ */ string(),
  new_name: /* @__PURE__ */ string()
}, ["current_name", "new_name"]);
var MetadataRename = MetadataRenameSchema;
var ModulesPingResultSchema = /* @__PURE__ */ object({
  host: /* @__PURE__ */ string(),
  pingable: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  warning: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  exception: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, ["host"]);
var ModulesPingResult = ModulesPingResultSchema;
var OauthAuthenticationSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  client_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  client_secret: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  info_mappings: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ string())),
  authorize_params: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ string())),
  ensure_matching: /* @__PURE__ */ nullable(
    /* @__PURE__ */ record(/* @__PURE__ */ array(/* @__PURE__ */ string()))
  ),
  site: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  authorize_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  token_method: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  auth_scheme: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  token_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  scope: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  raw_info_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var OauthAuthentication = OauthAuthenticationSchema;
var PlaylistApprovalMessageSchema = /* @__PURE__ */ object({
  message: /* @__PURE__ */ string()
}, ["message"]);
var PlaylistApprovalMessage = PlaylistApprovalMessageSchema;
var PlaylistApproverSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ string(),
  name: /* @__PURE__ */ string()
}, ["id", "name"]);
var PlaylistApprover = PlaylistApproverSchema;
var PlaylistItemScheduleSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  playlist_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  item_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  schedules: /* @__PURE__ */ nullable(/* @__PURE__ */ array(PlaylistSchedule)),
  media: /* @__PURE__ */ nullable(PlaylistItem),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var PlaylistItemSchedule = PlaylistItemScheduleSchema;
var PlaylistRevisionSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  user_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  user_email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  user_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  approval_requested: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  requested_by_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  approved: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  approved_by_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  approved_by_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  approved_by_email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  items: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  playlist_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  media: /* @__PURE__ */ nullable(/* @__PURE__ */ array(PlaylistItem)),
  schedules: /* @__PURE__ */ nullable(/* @__PURE__ */ array(PlaylistItemSchedule)),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var PlaylistRevision = PlaylistRevisionSchema;
var RepositorySchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  folder_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  uri: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  commit_hash: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  branch: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  deployed_commit_hash: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  release: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  username: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  password: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  repo_type: /* @__PURE__ */ nullable(/* @__PURE__ */ literal(["driver", "interface"])),
  root_path: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  has_runtime_error: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  error_message: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var Repository = RepositorySchema;
var RootPlatformInfoSchema = /* @__PURE__ */ object({
  version: /* @__PURE__ */ string(),
  changelog: /* @__PURE__ */ string()
}, ["version", "changelog"]);
var RootPlatformInfo = RootPlatformInfoSchema;
var RootSourceResyncStatusSchema = /* @__PURE__ */ object({
  state: /* @__PURE__ */ string(),
  clear: /* @__PURE__ */ boolean(),
  started_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  finished_at: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  cleared: /* @__PURE__ */ integer(),
  metadata: /* @__PURE__ */ integer("Int32"),
  error: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, ["state", "clear", "cleared", "metadata"]);
var RootSourceResyncStatus = RootSourceResyncStatusSchema;
var SamlAuthenticationSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  issuer: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  idp_sso_target_url_runtime_params: /* @__PURE__ */ nullable(
    /* @__PURE__ */ record(/* @__PURE__ */ string())
  ),
  name_identifier_format: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  uid_attribute: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  assertion_consumer_service_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  idp_sso_target_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  idp_cert: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  idp_cert_fingerprint: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  attribute_service_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  attribute_statements: /* @__PURE__ */ nullable(
    /* @__PURE__ */ record(/* @__PURE__ */ array(/* @__PURE__ */ string()))
  ),
  request_attributes: /* @__PURE__ */ nullable(
    /* @__PURE__ */ array(
      /* @__PURE__ */ object({
        name: /* @__PURE__ */ string(),
        name_format: /* @__PURE__ */ string(),
        friendly_name: /* @__PURE__ */ string()
      }, ["name", "name_format", "friendly_name"])
    )
  ),
  idp_slo_target_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  slo_default_relay_state: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var SamlAuthentication = SamlAuthenticationSchema;
var ScreenshotFormatSchema = /* @__PURE__ */ literal(["png", "jpeg", "webp"]);
var ScreenshotFormat = ScreenshotFormatSchema;
var SettingsSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  modified_by_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  settings_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  /** The number of the enum: 0 none, 1 support, 2 admin, 3 never_display. */
  encryption_level: /* @__PURE__ */ nullable(/* @__PURE__ */ literal([0, 1, 2, 3])),
  settings_string: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  keys: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  parent_type: /* @__PURE__ */ nullable(
    /* @__PURE__ */ literal(["control_system", "driver", "module", "zone"])
  ),
  parent_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var Settings = SettingsSchema;
var SignageAiCapabilitiesSchema = /* @__PURE__ */ object({
  enabled: /* @__PURE__ */ boolean(),
  reason: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  providers: /* @__PURE__ */ array(ImageGenProviderCapabilities),
  default_provider_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  aspect_ratios: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  qualities: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  max_candidates: /* @__PURE__ */ integer("Int32"),
  logo_layer: /* @__PURE__ */ boolean(),
  quota: /* @__PURE__ */ object({
    user_remaining_today: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
    domain_remaining_month: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32"))
  })
}, ["enabled", "providers", "aspect_ratios", "qualities", "max_candidates", "logo_layer", "quota"]);
var SignageAiCapabilities = SignageAiCapabilitiesSchema;
var SignageAiClaimParamsSchema = /* @__PURE__ */ object({
  upload_id: /* @__PURE__ */ string(),
  item_id: /* @__PURE__ */ string()
}, ["upload_id", "item_id"]);
var SignageAiClaimParams = SignageAiClaimParamsSchema;
var SignageAiEditParamsSchema = /* @__PURE__ */ object({
  prompt: /* @__PURE__ */ string(),
  aspect_ratio: /* @__PURE__ */ string(),
  quality: /* @__PURE__ */ string(),
  candidates: /* @__PURE__ */ integer("Int32"),
  references: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  include_logo: /* @__PURE__ */ boolean(),
  add_text_with_layer: /* @__PURE__ */ boolean(),
  use_branding: /* @__PURE__ */ boolean(),
  words: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  provider_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  model: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  idempotency_key: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  source_upload_id: /* @__PURE__ */ string(),
  source_item_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  parent_job_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, [
  "prompt",
  "aspect_ratio",
  "quality",
  "candidates",
  "references",
  "include_logo",
  "add_text_with_layer",
  "use_branding",
  "source_upload_id"
]);
var SignageAiEditParams = SignageAiEditParamsSchema;
var SignageAiGenerateParamsSchema = /* @__PURE__ */ object({
  prompt: /* @__PURE__ */ string(),
  aspect_ratio: /* @__PURE__ */ string(),
  quality: /* @__PURE__ */ string(),
  candidates: /* @__PURE__ */ integer("Int32"),
  references: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  include_logo: /* @__PURE__ */ boolean(),
  add_text_with_layer: /* @__PURE__ */ boolean(),
  use_branding: /* @__PURE__ */ boolean(),
  words: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  provider_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  model: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  idempotency_key: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, [
  "prompt",
  "aspect_ratio",
  "quality",
  "candidates",
  "references",
  "include_logo",
  "add_text_with_layer",
  "use_branding"
]);
var SignageAiGenerateParams = SignageAiGenerateParamsSchema;
var SignageAiJobResponseSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ string(),
  state: /* @__PURE__ */ string(),
  kind: /* @__PURE__ */ string(),
  provider: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  model: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  candidates: /* @__PURE__ */ integer("Int32"),
  images_produced: /* @__PURE__ */ integer("Int32"),
  parent_job_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  version: /* @__PURE__ */ integer("Int32"),
  prompt: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  images: /* @__PURE__ */ array(/* @__PURE__ */ json()),
  error_kind: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  error_message: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  cost_units: /* @__PURE__ */ nullable(/* @__PURE__ */ number()),
  latency_ms: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  finished_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
}, ["id", "state", "kind", "candidates", "images_produced", "version", "images"]);
var SignageAiJobResponse = SignageAiJobResponseSchema;
var SignageAiJobUsageRowSchema = /* @__PURE__ */ object({
  kind: /* @__PURE__ */ string(),
  provider: /* @__PURE__ */ string(),
  model: /* @__PURE__ */ string(),
  jobs: /* @__PURE__ */ integer(),
  candidates: /* @__PURE__ */ integer(),
  images_produced: /* @__PURE__ */ integer(),
  cost_units: /* @__PURE__ */ number()
}, ["kind", "provider", "model", "jobs", "candidates", "images_produced", "cost_units"]);
var SignageAiJobUsageRow = SignageAiJobUsageRowSchema;
var SignageAiProvidersProviderParamsSchema = /* @__PURE__ */ object({
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  provider: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  credentials: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  endpoint: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  location: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  default_model: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  text_model: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  allowed_models: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  enabled: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  is_default: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  quotas: /* @__PURE__ */ nullable(/* @__PURE__ */ json())
});
var SignageAiProvidersProviderParams = SignageAiProvidersProviderParamsSchema;
var SignageAiProvidersTestResultSchema = /* @__PURE__ */ object({
  ok: /* @__PURE__ */ boolean(),
  latency_ms: /* @__PURE__ */ integer(),
  model: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  error: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  kind: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, ["ok", "latency_ms"]);
var SignageAiProvidersTestResult = SignageAiProvidersTestResultSchema;
var SignagePluginPluginTypeSchema = /* @__PURE__ */ literal(["plugin", "widget"]);
var SignagePluginPluginType = SignagePluginPluginTypeSchema;
var StateSchema = /* @__PURE__ */ literal(["pending", "running", "cancelled", "error", "done"]);
var State = StateSchema;
var StorageSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  storage_type: /* @__PURE__ */ nullable(/* @__PURE__ */ literal(["s3", "azure", "google"])),
  bucket_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  region: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  access_key: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  access_secret: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  endpoint: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  is_default: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  ext_filter: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  mime_filter: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var Storage = StorageSchema;
var SystemTriggersUpdateParamsSchema = /* @__PURE__ */ object({
  enabled: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  important: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  exec_enabled: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  playlists: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string()))
});
var SystemTriggersUpdateParams = SystemTriggersUpdateParamsSchema;
var SystemsFunctionDetailsSchema = /* @__PURE__ */ object({
  arity: /* @__PURE__ */ integer("Int32"),
  params: /* @__PURE__ */ record(/* @__PURE__ */ json()),
  order: /* @__PURE__ */ array(/* @__PURE__ */ string())
}, ["arity", "params", "order"]);
var SystemsFunctionDetails = SystemsFunctionDetailsSchema;
var UploadSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  uploaded_email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  file_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  file_size: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  file_path: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  object_key: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  file_md5: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  cache_etag: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  cache_modified: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  public: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  permissions: /* @__PURE__ */ nullable(/* @__PURE__ */ literal(["none", "admin", "support"])),
  object_options: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ json())),
  resumable_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  resumable: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  part_list: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ integer("Int32"))),
  part_data: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ json())),
  upload_complete: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  tags: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  storage_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  uploaded_by: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var Upload = UploadSchema;
var UploadPermissionsSchema = /* @__PURE__ */ literal(["none", "admin", "support"]);
var UploadPermissions = UploadPermissionsSchema;
var UploadsPartInfoSchema = /* @__PURE__ */ object({
  md5: /* @__PURE__ */ string(),
  part: /* @__PURE__ */ integer("Int32")
}, ["md5", "part"]);
var UploadsPartInfo = UploadsPartInfoSchema;
var UploadsScreenshotInfoSchema = /* @__PURE__ */ object({
  url: /* @__PURE__ */ string(),
  width: /* @__PURE__ */ integer("Int32"),
  height: /* @__PURE__ */ integer("Int32"),
  scale: /* @__PURE__ */ number(),
  format: ScreenshotFormat,
  full_page: /* @__PURE__ */ boolean(),
  settle: /* @__PURE__ */ integer("Int32"),
  file_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  public: /* @__PURE__ */ boolean(),
  tags: /* @__PURE__ */ array(/* @__PURE__ */ string())
}, ["url", "width", "height", "scale", "format", "full_page", "settle", "public", "tags"]);
var UploadsScreenshotInfo = UploadsScreenshotInfoSchema;
var UploadsUpdateInfoSchema = /* @__PURE__ */ object({
  resumable_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  part_data: /* @__PURE__ */ nullable(/* @__PURE__ */ array(UploadsPartInfo)),
  part_list: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ integer("Int32")))
});
var UploadsUpdateInfo = UploadsUpdateInfoSchema;
var UploadsUploadInfoSchema = /* @__PURE__ */ object({
  file_name: /* @__PURE__ */ string(),
  file_size: /* @__PURE__ */ union([/* @__PURE__ */ integer(), /* @__PURE__ */ string()]),
  file_id: /* @__PURE__ */ string(),
  file_mime: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  file_path: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  permissions: UploadPermissions,
  public: /* @__PURE__ */ boolean(),
  expires: /* @__PURE__ */ integer("Int32"),
  tags: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  cache_etag: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  cache_modified: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, ["file_name", "file_size", "file_id", "permissions", "public", "expires", "tags"]);
var UploadsUploadInfo = UploadsUploadInfoSchema;
var UserAdminMetadataResponseSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ integer(),
  name: /* @__PURE__ */ string(),
  nickname: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  email: /* @__PURE__ */ string(),
  phone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  country: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  image: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  ui_theme: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  misc: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  login_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  staff_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  first_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  last_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  building: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  department: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  preferred_language: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  email_digest: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  card_number: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  deleted: /* @__PURE__ */ boolean(),
  groups: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  sys_admin: /* @__PURE__ */ boolean(),
  support: /* @__PURE__ */ boolean(),
  locatable: /* @__PURE__ */ boolean(),
  login_count: /* @__PURE__ */ integer(),
  /** Unix time in seconds. */
  last_login: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  work_preferences: /* @__PURE__ */ array(UserWorktimePreference),
  work_overrides: /* @__PURE__ */ record(UserWorktimePreference),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  photo_upload_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  associated_metadata: /* @__PURE__ */ record(MetadataInterface),
  subsystem_access: /* @__PURE__ */ array(/* @__PURE__ */ string())
}, [
  "created_at",
  "name",
  "email",
  "deleted",
  "groups",
  "sys_admin",
  "support",
  "locatable",
  "login_count",
  "work_preferences",
  "work_overrides",
  "associated_metadata",
  "subsystem_access"
]);
var UserAdminMetadataResponse = UserAdminMetadataResponseSchema;
var UserGroupResponseSchema = /* @__PURE__ */ object({
  groups: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, ["groups"]);
var UserGroupResponse = UserGroupResponseSchema;
var UserJwtMetadataSchema = /* @__PURE__ */ object({
  n: /* @__PURE__ */ string(),
  e: /* @__PURE__ */ string(),
  p: /* @__PURE__ */ literal([0, 1, 2, 3]),
  r: /* @__PURE__ */ array(/* @__PURE__ */ string())
}, ["n", "e", "p", "r"]);
var UserJwtMetadata = UserJwtMetadataSchema;
var UserJwtSchema = /* @__PURE__ */ object({
  iss: /* @__PURE__ */ string(),
  iat: /* @__PURE__ */ integer(),
  exp: /* @__PURE__ */ integer(),
  aud: /* @__PURE__ */ string(),
  sub: /* @__PURE__ */ string(),
  scope: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  u: UserJwtMetadata
}, ["iss", "iat", "exp", "aud", "sub", "scope", "u"]);
var UserJwt = UserJwtSchema;
var UserPublicMetadataResponseSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ integer(),
  name: /* @__PURE__ */ string(),
  nickname: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  email: /* @__PURE__ */ string(),
  phone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  country: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  image: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  staff_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  first_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  last_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  building: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  department: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  preferred_language: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  email_digest: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  deleted: /* @__PURE__ */ boolean(),
  groups: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  locatable: /* @__PURE__ */ boolean(),
  login_count: /* @__PURE__ */ integer(),
  /** Unix time in seconds. */
  last_login: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  work_preferences: /* @__PURE__ */ array(UserWorktimePreference),
  work_overrides: /* @__PURE__ */ record(UserWorktimePreference),
  authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  photo_upload_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  associated_metadata: /* @__PURE__ */ record(MetadataInterface)
}, [
  "created_at",
  "name",
  "email",
  "deleted",
  "groups",
  "locatable",
  "login_count",
  "work_preferences",
  "work_overrides",
  "associated_metadata"
]);
var UserPublicMetadataResponse = UserPublicMetadataResponseSchema;
var UserResourceTokenSchema = /* @__PURE__ */ object({
  token: /* @__PURE__ */ string(),
  expires: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
}, ["token"]);
var UserResourceToken = UserResourceTokenSchema;
var VersionSchema = /* @__PURE__ */ object({
  service: /* @__PURE__ */ string(),
  commit: /* @__PURE__ */ string(),
  version: /* @__PURE__ */ string(),
  build_time: /* @__PURE__ */ string(),
  platform_version: /* @__PURE__ */ string()
}, ["service", "commit", "version", "build_time", "platform_version"]);
var Version = VersionSchema;
var ZonesZoneExecResponseSchema = /* @__PURE__ */ object({
  success: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  failure: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  module_missing: /* @__PURE__ */ array(/* @__PURE__ */ string())
}, ["success", "failure", "module_missing"]);
var ZonesZoneExecResponse = ZonesZoneExecResponseSchema;

// node_modules/@placeos/ts-client/dist/generated/operations/brokers.js
var brokers_exports = {};
__export(brokers_exports, {
  collection: () => collection,
  create: () => create,
  destroy: () => destroy,
  show: () => show,
  update: () => update
});
function collection(input = {}, options) {
  return call(COLLECTION, input, options);
}
var COLLECTION = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/brokers",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: /* @__PURE__ */ array(Broker),
  name: "brokers.collection"
});
function create(input, options) {
  return call(CREATE, input, options);
}
var CREATE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/brokers",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: Broker,
  response: Broker,
  name: "brokers.create"
});
function destroy(input, options) {
  return call(DESTROY, input, options);
}
var DESTROY = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/brokers/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "brokers.destroy"
});
function show(input, options) {
  return call(SHOW, input, options);
}
var SHOW = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/brokers/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: Broker,
  name: "brokers.show"
});
function update(input, options) {
  return call(UPDATE, input, options);
}
var UPDATE = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/brokers/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: Broker,
  response: Broker,
  name: "brokers.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/build-monitor.js
var build_monitor_exports = {};
__export(build_monitor_exports, {
  cancel: () => cancel,
  monitor: () => monitor
});
function cancel(input, options) {
  return call(CANCEL, input, options);
}
var CANCEL = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/build/cancel/{job}",
  path_keys: ["job"],
  params: /* @__PURE__ */ parameters({
    /** ID of previously submitted compilation job */
    job: /* @__PURE__ */ string()
  }, ["job"]),
  body: null,
  response: BuildMonitorCancelStatus,
  name: "build_monitor.cancel"
});
function monitor(input = {}, options) {
  return call(MONITOR, input, options);
}
var MONITOR = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/build/monitor",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /**
     * state of job to return. One of [pending,running,cancelled error,done]. Defaults to
     * 'pending'
     */
    state: State
  }),
  body: null,
  response: /* @__PURE__ */ union([
    /* @__PURE__ */ array(BuildMonitorTaskStatus),
    /* @__PURE__ */ string()
  ]),
  name: "build_monitor.monitor"
});

// node_modules/@placeos/ts-client/dist/generated/operations/cluster.js
var cluster_exports = {};
__export(cluster_exports, {
  destroy: () => destroy2,
  nodes: () => nodes,
  rebalance: () => rebalance,
  show: () => show2
});
function destroy2(input, options) {
  return call(DESTROY2, input, options);
}
var DESTROY2 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/cluster/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** specifies the core node we want to send the request to */
    id: /* @__PURE__ */ string(),
    /** the name of the driver to terminate */
    driver: /* @__PURE__ */ string()
  }, ["id", "driver"]),
  body: null,
  response: "text",
  name: "cluster.destroy"
});
function nodes(input = {}, options) {
  return call(NODES, input, options);
}
var NODES = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/cluster",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** return the detailed status of the node including memory and CPU usage? */
    include_status: /* @__PURE__ */ boolean()
  }),
  body: null,
  response: /* @__PURE__ */ array(ClusterNodeStatus),
  name: "cluster.nodes"
});
function rebalance(input = {}, options) {
  return call(REBALANCE, input, options);
}
var REBALANCE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/cluster/rebalance",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: ClusterVersions,
  name: "cluster.rebalance"
});
function show2(input, options) {
  return call(SHOW2, input, options);
}
var SHOW2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/cluster/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** specifies the core node we want to send the request to */
    id: /* @__PURE__ */ string(),
    /** return the detailed status of the drivers running on the node? */
    include_status: /* @__PURE__ */ boolean()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(ClusterDriverStatus),
  name: "cluster.show"
});

// node_modules/@placeos/ts-client/dist/generated/operations/domains.js
var domains_exports = {};
__export(domains_exports, {
  create: () => create2,
  destroy: () => destroy3,
  lookup: () => lookup,
  query: () => query,
  show: () => show3,
  update: () => update2
});
function create2(input, options) {
  return call(CREATE2, input, options);
}
var CREATE2 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/domains",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: Authority,
  response: Authority,
  name: "domains.create"
});
function destroy3(input, options) {
  return call(DESTROY3, input, options);
}
var DESTROY3 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/domains/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "domains.destroy"
});
function lookup(input, options) {
  return call(LOOKUP, input, options);
}
var LOOKUP = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/domains/lookup/{email}",
  path_keys: ["email"],
  params: /* @__PURE__ */ parameters({
    /** User email to lookup domain for */
    email: /* @__PURE__ */ string()
  }, ["email"]),
  body: null,
  response: /* @__PURE__ */ string(),
  name: "domains.lookup"
});
function query(input = {}, options) {
  return call(QUERY, input, options);
}
var QUERY = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/domains",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(Authority),
  name: "domains.query"
});
function show3(input, options) {
  return call(SHOW3, input, options);
}
var SHOW3 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/domains/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: Authority,
  name: "domains.show"
});
function update2(input, options) {
  return call(UPDATE2, input, options);
}
var UPDATE2 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/domains/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: Authority,
  response: Authority,
  name: "domains.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/drivers.js
var drivers_exports = {};
__export(drivers_exports, {
  compiled: () => compiled,
  create: () => create3,
  destroy: () => destroy4,
  query: () => query2,
  readme: () => readme,
  recompile: () => recompile,
  reload: () => reload,
  show: () => show4,
  update: () => update3
});
function compiled(input, options) {
  return call(COMPILED, input, options);
}
var COMPILED = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/drivers/{id}/compiled",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "drivers.compiled"
});
function create3(input, options) {
  return call(CREATE3, input, options);
}
var CREATE3 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/drivers",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: Driver,
  response: Driver,
  name: "drivers.create"
});
function destroy4(input, options) {
  return call(DESTROY4, input, options);
}
var DESTROY4 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/drivers/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "drivers.destroy"
});
function query2(input = {}, options) {
  return call(QUERY2, input, options);
}
var QUERY2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/drivers",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** filter by the type of driver */
    role: /* @__PURE__ */ nullable(DriverRole),
    /** list only drivers for which update is available */
    update_available: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(Driver),
  name: "drivers.query"
});
function readme(input, options) {
  return call(README, input, options);
}
var README = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/drivers/{id}/readme",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ string(),
  name: "drivers.readme"
});
function recompile(input, options) {
  return call(RECOMPILE, input, options);
}
var RECOMPILE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/drivers/{id}/recompile",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "drivers.recompile"
});
function reload(input, options) {
  return call(RELOAD, input, options);
}
var RELOAD = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/drivers/{id}/reload",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "drivers.reload"
});
function show4(input, options) {
  return call(SHOW4, input, options);
}
var SHOW4 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/drivers/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** check if the driver is compiled? */
    compilation_status: /* @__PURE__ */ boolean()
  }, ["id"]),
  body: null,
  response: Driver,
  name: "drivers.show"
});
function update3(input, options) {
  return call(UPDATE3, input, options);
}
var UPDATE3 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/drivers/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: Driver,
  response: Driver,
  name: "drivers.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/edges.js
var edges_exports = {};
__export(edges_exports, {
  cleanupErrors: () => cleanupErrors,
  create: () => create4,
  destroy: () => destroy5,
  edgeConnections: () => edgeConnections,
  edgeErrors: () => edgeErrors,
  edgeHealth: () => edgeHealth,
  edgeModuleStatus: () => edgeModuleStatus,
  edgesConnections: () => edgesConnections,
  edgesErrors: () => edgesErrors,
  edgesHealth: () => edgesHealth,
  edgesModuleFailures: () => edgesModuleFailures,
  edgesStatistics: () => edgesStatistics,
  monitoringSummary: () => monitoringSummary,
  query: () => query3,
  show: () => show5,
  token: () => token,
  update: () => update4
});
function cleanupErrors(input = {}, options) {
  return call(CLEANUP_ERRORS, input, options);
}
var CLEANUP_ERRORS = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/edges/monitoring/cleanup",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** Hours of error history to retain */
    hours: /* @__PURE__ */ integer("Int32")
  }),
  body: null,
  response: /* @__PURE__ */ record(/* @__PURE__ */ record(/* @__PURE__ */ json())),
  name: "edges.cleanupErrors"
});
function create4(input, options) {
  return call(CREATE4, input, options);
}
var CREATE4 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/edges",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: EdgeCreateBody,
  response: EdgeKeyResponse,
  name: "edges.create"
});
function destroy5(input, options) {
  return call(DESTROY5, input, options);
}
var DESTROY5 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/edges/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "edges.destroy"
});
function edgeConnections(input, options) {
  return call(EDGE_CONNECTIONS, input, options);
}
var EDGE_CONNECTIONS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/edges/{id}/connections",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ nullable(ConnectionMetrics),
  name: "edges.edgeConnections"
});
function edgeErrors(input, options) {
  return call(EDGE_ERRORS, input, options);
}
var EDGE_ERRORS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/edges/{id}/errors",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** Number of recent errors to return */
    limit: /* @__PURE__ */ integer("Int32"),
    /** Error type filter */
    type: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(EdgeError),
  name: "edges.edgeErrors"
});
function edgeHealth(input, options) {
  return call(EDGE_HEALTH, input, options);
}
var EDGE_HEALTH = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/edges/{id}/health",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ nullable(EdgeHealth),
  name: "edges.edgeHealth"
});
function edgeModuleStatus(input, options) {
  return call(EDGE_MODULE_STATUS, input, options);
}
var EDGE_MODULE_STATUS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/edges/{id}/modules/status",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: EdgeModuleStatus,
  name: "edges.edgeModuleStatus"
});
function edgesConnections(input = {}, options) {
  return call(EDGES_CONNECTIONS, input, options);
}
var EDGES_CONNECTIONS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/edges/connections",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: /* @__PURE__ */ record(ConnectionMetrics),
  name: "edges.edgesConnections"
});
function edgesErrors(input = {}, options) {
  return call(EDGES_ERRORS, input, options);
}
var EDGES_ERRORS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/edges/errors",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** Number of recent errors to return */
    limit: /* @__PURE__ */ integer("Int32"),
    /** Error type filter */
    type: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ record(/* @__PURE__ */ array(EdgeError)),
  name: "edges.edgesErrors"
});
function edgesHealth(input = {}, options) {
  return call(EDGES_HEALTH, input, options);
}
var EDGES_HEALTH = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/edges/health",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: /* @__PURE__ */ record(EdgeHealth),
  name: "edges.edgesHealth"
});
function edgesModuleFailures(input = {}, options) {
  return call(EDGES_MODULE_FAILURES, input, options);
}
var EDGES_MODULE_FAILURES = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/edges/modules/failures",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: /* @__PURE__ */ record(
    /* @__PURE__ */ array(/* @__PURE__ */ record(/* @__PURE__ */ json()))
  ),
  name: "edges.edgesModuleFailures"
});
function edgesStatistics(input = {}, options) {
  return call(EDGES_STATISTICS, input, options);
}
var EDGES_STATISTICS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/edges/statistics",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: EdgeStatistics,
  name: "edges.edgesStatistics"
});
function monitoringSummary(input = {}, options) {
  return call(MONITORING_SUMMARY, input, options);
}
var MONITORING_SUMMARY = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/edges/monitoring/summary",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: /* @__PURE__ */ record(/* @__PURE__ */ record(/* @__PURE__ */ json())),
  name: "edges.monitoringSummary"
});
function query3(input = {}, options) {
  return call(QUERY3, input, options);
}
var QUERY3 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/edges",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(Edge),
  name: "edges.query"
});
function show5(input, options) {
  return call(SHOW5, input, options);
}
var SHOW5 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/edges/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: Edge,
  name: "edges.show"
});
function token(input, options) {
  return call(TOKEN, input, options);
}
var TOKEN = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/edges/{id}/token",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ object({
    token: /* @__PURE__ */ string()
  }, ["token"]),
  name: "edges.token"
});
function update4(input, options) {
  return call(UPDATE4, input, options);
}
var UPDATE4 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/edges/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: Edge,
  response: Edge,
  name: "edges.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/groups.js
var groups_exports = {};
__export(groups_exports, {
  create: () => create5,
  current: () => current,
  destroy: () => destroy6,
  features: () => features,
  query: () => query4,
  show: () => show6,
  syncAdGroups: () => syncAdGroups,
  update: () => update5
});
function create5(input, options) {
  return call(CREATE5, input, options);
}
var CREATE5 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/groups",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: Group,
  response: Group,
  name: "groups.create"
});
function current(input = {}, options) {
  return call(CURRENT, input, options);
}
var CURRENT = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/groups/current",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** filter to groups participating in this subsystem (e.g. 'signage') */
    subsystem: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(GroupsCurrentGroup),
  name: "groups.current"
});
function destroy6(input, options) {
  return call(DESTROY6, input, options);
}
var DESTROY6 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/groups/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "groups.destroy"
});
function features(input, options) {
  return call(FEATURES, input, options);
}
var FEATURES = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/groups/{id}/features",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** only return this subsystem's features */
    subsystem: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ record(/* @__PURE__ */ record(/* @__PURE__ */ json())),
  name: "groups.features"
});
function query4(input = {}, options) {
  return call(QUERY4, input, options);
}
var QUERY4 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/groups",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** filter by parent group id; pass 'root' for root-level groups */
    parent_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** case-insensitive substring search on name (SQL ILIKE) */
    q: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** include children_count for each group (useful for tree views) */
    include_children_count: /* @__PURE__ */ boolean(),
    limit: /* @__PURE__ */ integer("Int32"),
    offset: /* @__PURE__ */ integer("Int32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(Group),
  name: "groups.query"
});
function show6(input, options) {
  return call(SHOW6, input, options);
}
var SHOW6 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/groups/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: Group,
  name: "groups.show"
});
function syncAdGroups(input, options) {
  return call(SYNC_AD_GROUPS, input, options);
}
var SYNC_AD_GROUPS = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/groups/ad_groups/sync",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: GroupsAdGroupSync,
  response: /* @__PURE__ */ array(GroupUser),
  name: "groups.syncAdGroups"
});
function update5(input, options) {
  return call(UPDATE5, input, options);
}
var UPDATE5 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/groups/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: Group,
  response: Group,
  name: "groups.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/metadata.js
var metadata_exports = {};
__export(metadata_exports, {
  bulkFetch: () => bulkFetch,
  childrenMetadata: () => childrenMetadata,
  destroy: () => destroy7,
  history: () => history,
  merge: () => merge,
  rename: () => rename,
  show: () => show7,
  update: () => update6
});
function bulkFetch(input, options) {
  return call(BULK_FETCH, input, options);
}
var BULK_FETCH = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/metadata/{name}/bulk",
  path_keys: ["name"],
  params: /* @__PURE__ */ parameters({
    /** the name of the metadata key to fetch */
    name: /* @__PURE__ */ string(),
    /** comma-separated list of parent IDs (zones, systems, users, etc.) */
    parent_ids: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }, ["name", "parent_ids"]),
  body: null,
  response: /* @__PURE__ */ record(/* @__PURE__ */ nullable(MetadataInterface)),
  name: "metadata.bulkFetch"
});
function childrenMetadata(input, options) {
  return call(CHILDREN_METADATA, input, options);
}
var CHILDREN_METADATA = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/metadata/{id}/children",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the parent id of the metadata to be returned */
    id: /* @__PURE__ */ string(),
    /** the parent metadata is included in the results by default */
    include_parent: /* @__PURE__ */ boolean(),
    /** filter for a particular metadata key */
    name: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(MetadataChildren),
  name: "metadata.childrenMetadata"
});
function destroy7(input, options) {
  return call(DESTROY7, input, options);
}
var DESTROY7 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/metadata/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the parent id of the metadata to be returned */
    id: /* @__PURE__ */ string(),
    /** the name of the metadata key */
    name: /* @__PURE__ */ string()
  }, ["id", "name"]),
  body: null,
  response: "text",
  name: "metadata.destroy"
});
function history(input, options) {
  return call(HISTORY, input, options);
}
var HISTORY = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/metadata/{id}/history",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the parent id of the metadata to be returned */
    id: /* @__PURE__ */ string(),
    /** the name of the metadata key */
    name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("Int32"),
    /** the starting offset of the result set. Used to implement pagination */
    offset: /* @__PURE__ */ integer("Int32")
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ record(/* @__PURE__ */ array(MetadataInterface)),
  name: "metadata.history"
});
function merge(input, options) {
  return call(MERGE, input, options);
}
var MERGE = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/metadata/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the parent id of the metadata to be updated */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: MetadataInterface,
  response: MetadataInterface,
  name: "metadata.merge"
});
function rename(input, options) {
  return call(RENAME, input, options);
}
var RENAME = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/metadata/{id}/name",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the parent id of the metadata to be renamed */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: MetadataRename,
  response: MetadataInterface,
  name: "metadata.rename"
});
function show7(input, options) {
  return call(SHOW7, input, options);
}
var SHOW7 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/metadata/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the parent id of the metadata to be returned */
    id: /* @__PURE__ */ string(),
    /** the name of the metadata key */
    name: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ record(MetadataInterface),
  name: "metadata.show"
});
function update6(input, options) {
  return call(UPDATE6, input, options);
}
var UPDATE6 = /* @__PURE__ */ operation({
  method: "PUT",
  path: "/api/engine/v2/metadata/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the parent id of the metadata to be replaced */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: MetadataInterface,
  response: MetadataInterface,
  name: "metadata.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/modules.js
var modules_exports = {};
__export(modules_exports, {
  create: () => create6,
  destroy: () => destroy8,
  execute: () => execute,
  load: () => load,
  logs: () => logs,
  ping: () => ping,
  query: () => query5,
  settings: () => settings,
  show: () => show8,
  showError: () => showError,
  start: () => start,
  state: () => state,
  stateLookup: () => stateLookup,
  stateValue: () => stateValue,
  stop: () => stop,
  update: () => update7
});
function create6(input, options) {
  return call(CREATE6, input, options);
}
var CREATE6 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/modules",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** add the new module to this control system */
    system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }),
  body: Module,
  response: Module,
  name: "modules.create"
});
function destroy8(input, options) {
  return call(DESTROY8, input, options);
}
var DESTROY8 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/modules/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "modules.destroy"
});
function execute(input, options) {
  return call(EXECUTE, input, options);
}
var EXECUTE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/modules/{id}/exec/{method}",
  path_keys: ["id", "method"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** the name of the methodm we want to execute */
    method: /* @__PURE__ */ string()
  }, ["id", "method"]),
  body: /* @__PURE__ */ array(/* @__PURE__ */ json()),
  response: /* @__PURE__ */ json(),
  name: "modules.execute"
});
function load(input, options) {
  return call(LOAD, input, options);
}
var LOAD = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/modules/{id}/load",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ boolean(),
  name: "modules.load"
});
function logs(input, options) {
  return call(LOGS, input, options);
}
var LOGS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/modules/{id}/logs",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** how long to capture logs for, in seconds, up to 129600 (36 hours) */
    seconds: /* @__PURE__ */ integer("Int32"),
    /**
     * the minimum level of the lines captured: trace, debug, info, notice, warn, error or
     * fatal
     */
    level: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "modules.logs"
});
function ping(input, options) {
  return call(PING, input, options);
}
var PING = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/modules/{id}/ping",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: ModulesPingResult,
  name: "modules.ping"
});
function query5(input = {}, options) {
  return call(QUERY5, input, options);
}
var QUERY5 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/modules",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** only return modules updated before this time (unix epoch) */
    as_of: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /**
     * only return modules running in this system (query params are ignored if this is provided)
     */
    control_system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** only return instances of this driver */
    driver_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** do not return logic modules (return only modules that can exist in multiple systems) */
    no_logic: /* @__PURE__ */ boolean(),
    /** return only running modules */
    running: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(Module),
  name: "modules.query"
});
function settings(input, options) {
  return call(SETTINGS, input, options);
}
var SETTINGS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/modules/{id}/settings",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(Settings),
  name: "modules.settings"
});
function show8(input, options) {
  return call(SHOW8, input, options);
}
var SHOW8 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/modules/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** return the driver details along with the module? */
    complete: /* @__PURE__ */ boolean()
  }, ["id"]),
  body: null,
  response: Module,
  name: "modules.show"
});
function showError(input, options) {
  return call(SHOW_ERROR, input, options);
}
var SHOW_ERROR = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/modules/{id}/error",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  name: "modules.showError"
});
function start(input, options) {
  return call(START, input, options);
}
var START = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/modules/{id}/start",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "modules.start"
});
function state(input, options) {
  return call(STATE, input, options);
}
var STATE = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/modules/{id}/state",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ record(/* @__PURE__ */ string()),
  name: "modules.state"
});
function stateLookup(input, options) {
  return call(STATE_LOOKUP, input, options);
}
var STATE_LOOKUP = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/modules/{id}/state/{key}",
  path_keys: ["id", "key"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** that name of the status we are after */
    key: /* @__PURE__ */ string()
  }, ["id", "key"]),
  body: null,
  response: /* @__PURE__ */ string(),
  name: "modules.stateLookup"
});
function stateValue(input, options) {
  return call(STATE_VALUE, input, options);
}
var STATE_VALUE = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/modules/{id}/state/{key}/value",
  path_keys: ["id", "key"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** the name of the status variable */
    key: /* @__PURE__ */ string()
  }, ["id", "key"]),
  body: null,
  response: /* @__PURE__ */ json(),
  name: "modules.stateValue"
});
function stop(input, options) {
  return call(STOP, input, options);
}
var STOP = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/modules/{id}/stop",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "modules.stop"
});
function update7(input, options) {
  return call(UPDATE7, input, options);
}
var UPDATE7 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/modules/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: Module,
  response: Module,
  name: "modules.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/playlist.js
var playlist_exports = {};
__export(playlist_exports, {
  approveMedia: () => approveMedia,
  approvers: () => approvers,
  create: () => create7,
  destroy: () => destroy9,
  history: () => history2,
  media: () => media,
  mediaRevisions: () => mediaRevisions,
  query: () => query6,
  requestApproval: () => requestApproval,
  scheduleMedia: () => scheduleMedia,
  share: () => share,
  show: () => show9,
  update: () => update8,
  updateMedia: () => updateMedia,
  updateSchedule: () => updateSchedule
});
function approveMedia(input, options) {
  return call(APPROVE_MEDIA, input, options);
}
var APPROVE_MEDIA = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/playlists/{id}/media/approve",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ boolean(),
  name: "playlist.approveMedia"
});
function approvers(input, options) {
  return call(APPROVERS, input, options);
}
var APPROVERS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/playlists/approvers",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** group to find approvers for */
    group_id: /* @__PURE__ */ string()
  }, ["group_id"]),
  body: null,
  response: /* @__PURE__ */ array(PlaylistApprover),
  name: "playlist.approvers"
});
function create7(input, options) {
  return call(CREATE7, input, options);
}
var CREATE7 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/playlists",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** group id to auto-link the new playlist to (required for non-admin callers) */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }),
  body: Playlist,
  response: Playlist,
  name: "playlist.create"
});
function destroy9(input, options) {
  return call(DESTROY9, input, options);
}
var DESTROY9 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/signage/playlists/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /**
     * remove the playlist from this group instead of deleting it outright (caller needs
     * Delete or
     * Manage on the group); the playlist is deleted if no group links remain
     */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id"]),
  body: null,
  response: "text",
  name: "playlist.destroy"
});
function history2(input, options) {
  return call(HISTORY2, input, options);
}
var HISTORY2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/playlists/{id}/history",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /**
     * only return changes to these resource types: playlists, playlist_revisions or
     * playlist_item_schedules
     */
    resource_types: /* @__PURE__ */ nullable(
      /* @__PURE__ */ array(/* @__PURE__ */ string())
    ),
    /**
     * only return changes to this resource, such as a revision or item schedule of the
     * playlist
     */
    resource_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** only return these kinds of change: create, update, delete, approve or restore */
    actions: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
    /** only return changes made at or after this time, as a unix epoch */
    period_start: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** only return changes made before this time, as a unix epoch */
    period_end: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("Int32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("Int32")
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(History),
  name: "playlist.history"
});
function media(input, options) {
  return call(MEDIA, input, options);
}
var MEDIA = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/playlists/{id}/media",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: PlaylistRevision,
  name: "playlist.media"
});
function mediaRevisions(input, options) {
  return call(MEDIA_REVISIONS, input, options);
}
var MEDIA_REVISIONS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/playlists/{id}/media/revisions",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    limit: /* @__PURE__ */ integer("Int32")
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(PlaylistRevision),
  name: "playlist.mediaRevisions"
});
function query6(input = {}, options) {
  return call(QUERY6, input, options);
}
var QUERY6 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/playlists",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** filter to playlists linked to this group (caller must have Read on the group) */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** with group_id, also include playlists linked to readable descendant groups */
    include_child_data: /* @__PURE__ */ boolean(),
    /** case-insensitive substring search on name and description (SQL ILIKE) */
    q: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    limit: /* @__PURE__ */ integer("Int32"),
    offset: /* @__PURE__ */ integer("Int32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(Playlist),
  name: "playlist.query"
});
function requestApproval(input, options) {
  return call(REQUEST_APPROVAL, input, options);
}
var REQUEST_APPROVAL = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/playlists/{id}/media/request_approval",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** group whose approvers should be notified */
    group_id: /* @__PURE__ */ string(),
    /** notify only this approver (must have approve or manage permission in the group) */
    approver_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id", "group_id"]),
  body: PlaylistApprovalMessage,
  response: "text",
  name: "playlist.requestApproval"
});
function scheduleMedia(input, options) {
  return call(SCHEDULE_MEDIA, input, options);
}
var SCHEDULE_MEDIA = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/playlists/{id}/media/schedule",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: PlaylistItemSchedule,
  response: PlaylistRevision,
  name: "playlist.scheduleMedia"
});
function share(input, options) {
  return call(SHARE, input, options);
}
var SHARE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/playlists/share",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** comma-separated playlist ids to share into the target group */
    items: /* @__PURE__ */ array(/* @__PURE__ */ string()),
    /** target group id (must participate in the 'signage' subsystem) */
    to: /* @__PURE__ */ string()
  }, ["items", "to"]),
  body: null,
  response: /* @__PURE__ */ object({
    linked: /* @__PURE__ */ array(/* @__PURE__ */ string()),
    already_present: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }, ["linked", "already_present"]),
  name: "playlist.share"
});
function show9(input, options) {
  return call(SHOW9, input, options);
}
var SHOW9 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/playlists/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: Playlist,
  name: "playlist.show"
});
function update8(input, options) {
  return call(UPDATE8, input, options);
}
var UPDATE8 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/signage/playlists/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: Playlist,
  response: Playlist,
  name: "playlist.update"
});
function updateMedia(input, options) {
  return call(UPDATE_MEDIA, input, options);
}
var UPDATE_MEDIA = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/playlists/{id}/media",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  response: PlaylistRevision,
  name: "playlist.updateMedia"
});
function updateSchedule(input, options) {
  return call(UPDATE_SCHEDULE, input, options);
}
var UPDATE_SCHEDULE = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/signage/playlists/{id}/media/schedule/{item_id}",
  path_keys: ["id", "item_id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    item_id: /* @__PURE__ */ string()
  }, ["id", "item_id"]),
  body: PlaylistItemSchedule,
  response: PlaylistItemSchedule,
  name: "playlist.updateSchedule"
});

// node_modules/@placeos/ts-client/dist/generated/operations/repositories.js
var repositories_exports = {};
__export(repositories_exports, {
  branches: () => branches,
  commits: () => commits,
  create: () => create8,
  defaultBranch: () => defaultBranch,
  destroy: () => destroy10,
  details: () => details,
  drivers: () => drivers,
  files: () => files,
  folders: () => folders,
  loadedInterfaces: () => loadedInterfaces,
  pull: () => pull,
  query: () => query7,
  releases: () => releases,
  remoteBranches: () => remoteBranches,
  remoteCommits: () => remoteCommits,
  remoteDefaultBranch: () => remoteDefaultBranch,
  remoteTags: () => remoteTags,
  show: () => show10,
  tags: () => tags,
  update: () => update9
});
function branches(input, options) {
  return call(BRANCHES, input, options);
}
var BRANCHES = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/repositories/{id}/branches",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  name: "repositories.branches"
});
function commits(input, options) {
  return call(COMMITS, input, options);
}
var COMMITS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/repositories/{id}/commits",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** the maximum number of commits to return */
    limit: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
    /** the path to the file we want commits for */
    driver: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the branch to grab commits from */
    branch: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(GitRepositoryCommit),
  name: "repositories.commits"
});
function create8(input, options) {
  return call(CREATE8, input, options);
}
var CREATE8 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/repositories",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: Repository,
  response: Repository,
  name: "repositories.create"
});
function defaultBranch(input, options) {
  return call(DEFAULT_BRANCH, input, options);
}
var DEFAULT_BRANCH = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/repositories/{id}/default_branch",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ string(),
  name: "repositories.defaultBranch"
});
function destroy10(input, options) {
  return call(DESTROY10, input, options);
}
var DESTROY10 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/repositories/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "repositories.destroy"
});
function details(input, options) {
  return call(DETAILS, input, options);
}
var DETAILS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/repositories/{id}/details",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** the file we would like metadata for */
    driver: /* @__PURE__ */ string(),
    /** the commit level of the file */
    commit: /* @__PURE__ */ string()
  }, ["id", "driver", "commit"]),
  body: null,
  response: "text",
  name: "repositories.details"
});
function drivers(input, options) {
  return call(DRIVERS, input, options);
}
var DRIVERS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/repositories/{id}/drivers",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  name: "repositories.drivers"
});
function files(input, options) {
  return call(FILES, input, options);
}
var FILES = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/repositories/{id}/files",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /**
     * glob pattern. Without a `/` it matches file names at any depth, otherwise the full
     * path (use
     * `**` to recurse)
     */
    pattern: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  name: "repositories.files"
});
function folders(input, options) {
  return call(FOLDERS, input, options);
}
var FOLDERS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/repositories/{id}/folders",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** include dots folders, default to false */
    include_dots: /* @__PURE__ */ boolean()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  name: "repositories.folders"
});
function loadedInterfaces(input = {}, options) {
  return call(LOADED_INTERFACES, input, options);
}
var LOADED_INTERFACES = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/repositories/interfaces",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: /* @__PURE__ */ record(/* @__PURE__ */ string()),
  name: "repositories.loadedInterfaces"
});
function pull(input, options) {
  return call(PULL, input, options);
}
var PULL = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/repositories/{id}/pull",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ object({
    commit_hash: /* @__PURE__ */ string()
  }, ["commit_hash"]),
  name: "repositories.pull"
});
function query7(input = {}, options) {
  return call(QUERY7, input, options);
}
var QUERY7 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/repositories",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(Repository),
  name: "repositories.query"
});
function releases(input, options) {
  return call(RELEASES, input, options);
}
var RELEASES = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/repositories/{id}/releases",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  name: "repositories.releases"
});
function remoteBranches(input, options) {
  return call(REMOTE_BRANCHES, input, options);
}
var REMOTE_BRANCHES = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/repositories/remote_branches",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** the git url that represents the repository */
    repository_url: /* @__PURE__ */ string(),
    /** a username for access if required */
    username: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the password or access token as required */
    password: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["repository_url"]),
  body: null,
  response: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  name: "repositories.remoteBranches"
});
function remoteCommits(input, options) {
  return call(REMOTE_COMMITS, input, options);
}
var REMOTE_COMMITS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/repositories/remote_commits",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** the branch to grab commits from */
    branch: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the number of commits to return */
    depth: /* @__PURE__ */ integer("Int32"),
    /** the git url that represents the repository */
    repository_url: /* @__PURE__ */ string(),
    /** a username for access if required */
    username: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the password or access token as required */
    password: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["repository_url"]),
  body: null,
  response: /* @__PURE__ */ array(GitRepositoryCommit),
  name: "repositories.remoteCommits"
});
function remoteDefaultBranch(input, options) {
  return call(REMOTE_DEFAULT_BRANCH, input, options);
}
var REMOTE_DEFAULT_BRANCH = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/repositories/remote_default_branch",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** the git url that represents the repository */
    repository_url: /* @__PURE__ */ string(),
    /** a username for access if required */
    username: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the password or access token as required */
    password: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["repository_url"]),
  body: null,
  response: /* @__PURE__ */ string(),
  name: "repositories.remoteDefaultBranch"
});
function remoteTags(input, options) {
  return call(REMOTE_TAGS, input, options);
}
var REMOTE_TAGS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/repositories/remote_tags",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** the git url that represents the repository */
    repository_url: /* @__PURE__ */ string(),
    /** a username for access if required */
    username: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the password or access token as required */
    password: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["repository_url"]),
  body: null,
  response: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  name: "repositories.remoteTags"
});
function show10(input, options) {
  return call(SHOW10, input, options);
}
var SHOW10 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/repositories/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: Repository,
  name: "repositories.show"
});
function tags(input, options) {
  return call(TAGS, input, options);
}
var TAGS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/repositories/{id}/tags",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  name: "repositories.tags"
});
function update9(input, options) {
  return call(UPDATE9, input, options);
}
var UPDATE9 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/repositories/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: Repository,
  response: Repository,
  name: "repositories.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/root.js
var root_exports = {};
__export(root_exports, {
  clusterVersion: () => clusterVersion,
  platformInfo: () => platformInfo,
  root: () => root,
  scopes: () => scopes,
  signal: () => signal,
  sourceResync: () => sourceResync,
  sourceResyncStatus: () => sourceResyncStatus,
  version: () => version
});
function clusterVersion(input = {}, options) {
  return call(CLUSTER_VERSION, input, options);
}
var CLUSTER_VERSION = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/cluster/versions",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: /* @__PURE__ */ array(Version),
  name: "root.clusterVersion"
});
function platformInfo(input = {}, options) {
  return call(PLATFORM_INFO, input, options);
}
var PLATFORM_INFO = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/platform",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: RootPlatformInfo,
  name: "root.platformInfo"
});
function root(input = {}, options) {
  return call(ROOT, input, options);
}
var ROOT = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: "text",
  name: "root.root"
});
function scopes(input = {}, options) {
  return call(SCOPES, input, options);
}
var SCOPES = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/scopes",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  name: "root.scopes"
});
function signal(input, options) {
  return call(SIGNAL, input, options);
}
var SIGNAL = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signal",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** the path we would like to send data to */
    channel: /* @__PURE__ */ string()
  }, ["channel"]),
  body: null,
  response: "text",
  name: "root.signal"
});
function sourceResync(input = {}, options) {
  return call(SOURCE_RESYNC, input, options);
}
var SOURCE_RESYNC = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/source/resync",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** remove everything source publishes from the brokers first */
    clear: /* @__PURE__ */ boolean()
  }),
  body: null,
  response: RootSourceResyncStatus,
  name: "root.sourceResync"
});
function sourceResyncStatus(input = {}, options) {
  return call(SOURCE_RESYNC_STATUS, input, options);
}
var SOURCE_RESYNC_STATUS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/source/resync",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: RootSourceResyncStatus,
  name: "root.sourceResyncStatus"
});
function version(input = {}, options) {
  return call(VERSION, input, options);
}
var VERSION = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/version",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: Version,
  name: "root.version"
});

// node_modules/@placeos/ts-client/dist/generated/operations/schema.js
var schema_exports = {};
__export(schema_exports, {
  create: () => create9,
  destroy: () => destroy11,
  query: () => query8,
  show: () => show11,
  update: () => update10
});
function create9(input, options) {
  return call(CREATE9, input, options);
}
var CREATE9 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/schema",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: JsonSchema,
  response: JsonSchema,
  name: "schema.create"
});
function destroy11(input, options) {
  return call(DESTROY11, input, options);
}
var DESTROY11 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/schema/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "schema.destroy"
});
function query8(input = {}, options) {
  return call(QUERY8, input, options);
}
var QUERY8 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/schema",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(JsonSchema),
  name: "schema.query"
});
function show11(input, options) {
  return call(SHOW11, input, options);
}
var SHOW11 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/schema/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: JsonSchema,
  name: "schema.show"
});
function update10(input, options) {
  return call(UPDATE10, input, options);
}
var UPDATE10 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/schema/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: JsonSchema,
  response: JsonSchema,
  name: "schema.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/settings.js
var settings_exports = {};
__export(settings_exports, {
  create: () => create10,
  destroy: () => destroy12,
  history: () => history3,
  query: () => query9,
  show: () => show12,
  update: () => update11
});
function create10(input, options) {
  return call(CREATE10, input, options);
}
var CREATE10 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/settings",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: Settings,
  response: Settings,
  name: "settings.create"
});
function destroy12(input, options) {
  return call(DESTROY12, input, options);
}
var DESTROY12 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/settings/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "settings.destroy"
});
function history3(input, options) {
  return call(HISTORY3, input, options);
}
var HISTORY3 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/settings/{id}/history",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("Int32"),
    /** the starting offset of the result set. Used to implement pagination */
    offset: /* @__PURE__ */ integer("Int32")
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(Settings),
  name: "settings.history"
});
function query9(input = {}, options) {
  return call(QUERY9, input, options);
}
var QUERY9 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/settings",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    parent_id: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(Settings),
  name: "settings.query"
});
function show12(input, options) {
  return call(SHOW12, input, options);
}
var SHOW12 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/settings/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: Settings,
  name: "settings.show"
});
function update11(input, options) {
  return call(UPDATE11, input, options);
}
var UPDATE11 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/settings/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: Settings,
  response: Settings,
  name: "settings.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/signage-plugins.js
var signage_plugins_exports = {};
__export(signage_plugins_exports, {
  create: () => create11,
  destroy: () => destroy13,
  query: () => query10,
  show: () => show13,
  update: () => update12
});
function create11(input, options) {
  return call(CREATE11, input, options);
}
var CREATE11 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/plugins",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: SignagePlugin,
  response: SignagePlugin,
  name: "signage_plugins.create"
});
function destroy13(input, options) {
  return call(DESTROY13, input, options);
}
var DESTROY13 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/signage/plugins/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "signage_plugins.destroy"
});
function query10(input = {}, options) {
  return call(QUERY10, input, options);
}
var QUERY10 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/plugins",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** only return plugins that are enabled */
    enabled: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /** only return plugins of this type */
    plugin_type: /* @__PURE__ */ nullable(SignagePluginPluginType),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(SignagePlugin),
  name: "signage_plugins.query"
});
function show13(input, options) {
  return call(SHOW13, input, options);
}
var SHOW13 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/plugins/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: SignagePlugin,
  name: "signage_plugins.show"
});
function update12(input, options) {
  return call(UPDATE12, input, options);
}
var UPDATE12 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/signage/plugins/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: SignagePlugin,
  response: SignagePlugin,
  name: "signage_plugins.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/systems.js
var systems_exports = {};
__export(systems_exports, {
  addModule: () => addModule,
  create: () => create12,
  destroy: () => destroy14,
  execute: () => execute2,
  findByEmail: () => findByEmail,
  functions: () => functions,
  metadata: () => metadata,
  query: () => query11,
  removeModule: () => removeModule,
  settings: () => settings2,
  show: () => show14,
  start: () => start2,
  state: () => state2,
  stateLookup: () => stateLookup2,
  stop: () => stop2,
  sysZones: () => sysZones,
  types: () => types,
  update: () => update13
});
function addModule(input, options) {
  return call(ADD_MODULE, input, options);
}
var ADD_MODULE = /* @__PURE__ */ operation({
  method: "PUT",
  path: "/api/engine/v2/systems/{sys_id}/module/{module_id}",
  path_keys: ["sys_id", "module_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    module_id: /* @__PURE__ */ string()
  }, ["sys_id", "module_id"]),
  body: null,
  response: ControlSystem,
  name: "systems.addModule"
});
function create12(input, options) {
  return call(CREATE12, input, options);
}
var CREATE12 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/systems",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: ControlSystem,
  response: ControlSystem,
  name: "systems.create"
});
function destroy14(input, options) {
  return call(DESTROY14, input, options);
}
var DESTROY14 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/systems/{sys_id}",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string()
  }, ["sys_id"]),
  body: null,
  response: "text",
  name: "systems.destroy"
});
function execute2(input, options) {
  return call(EXECUTE2, input, options);
}
var EXECUTE2 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/systems/{sys_id}/{module_slug}/{method}",
  path_keys: ["sys_id", "module_slug", "method"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    /** the combined module class and index, index is optional and defaults to 1 */
    module_slug: /* @__PURE__ */ string(),
    /** the method to execute on the module */
    method: /* @__PURE__ */ string()
  }, ["sys_id", "module_slug", "method"]),
  body: /* @__PURE__ */ array(/* @__PURE__ */ json()),
  response: /* @__PURE__ */ json(),
  name: "systems.execute"
});
function findByEmail(input, options) {
  return call(FIND_BY_EMAIL, input, options);
}
var FIND_BY_EMAIL = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/with_emails",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** comma seperated list of emails */
    in: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }, ["in"]),
  body: null,
  response: /* @__PURE__ */ array(ControlSystem),
  name: "systems.findByEmail"
});
function functions(input, options) {
  return call(FUNCTIONS, input, options);
}
var FUNCTIONS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/{sys_id}/functions/{module_slug}",
  path_keys: ["sys_id", "module_slug"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    /** the combined module class and index, index is optional and defaults to 1 */
    module_slug: /* @__PURE__ */ string()
  }, ["sys_id", "module_slug"]),
  body: null,
  response: /* @__PURE__ */ record(SystemsFunctionDetails),
  name: "systems.functions"
});
function metadata(input, options) {
  return call(METADATA, input, options);
}
var METADATA = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/{sys_id}/metadata",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    name: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["sys_id"]),
  body: null,
  response: /* @__PURE__ */ record(MetadataInterface),
  name: "systems.metadata"
});
function query11(input = {}, options) {
  return call(QUERY11, input, options);
}
var QUERY11 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** return only bookable or non-bookable rooms (returns both when not specified) */
    bookable: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /** return only rooms with capacity equal or greater than that provided */
    capacity: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
    /** return only systems whos resource address match one of the emails provided */
    email: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
    /** return only rooms who have all of the features requested */
    features: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
    /** return only systems which have the module id provided */
    module_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** return systems which are using the trigger id provided */
    trigger_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** return systems which are in the zones provided */
    zone_id: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
    /**
     * return systems anchored by this group's GroupZone rows; non-support callers must have
     * Read on
     * the group
     */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * return systems in any zone the caller can reach (transitively) within the given subsystem
     * code, e.g. 'signage'
     */
    subsystem: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** return systems which are public */
    public: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /** return systems which are signage */
    signage: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(ControlSystem),
  name: "systems.query"
});
function removeModule(input, options) {
  return call(REMOVE_MODULE, input, options);
}
var REMOVE_MODULE = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/systems/{sys_id}/module/{module_id}",
  path_keys: ["sys_id", "module_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    module_id: /* @__PURE__ */ string()
  }, ["sys_id", "module_id"]),
  body: null,
  response: ControlSystem,
  name: "systems.removeModule"
});
function settings2(input, options) {
  return call(SETTINGS2, input, options);
}
var SETTINGS2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/{sys_id}/settings",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string()
  }, ["sys_id"]),
  body: null,
  response: /* @__PURE__ */ array(Settings),
  name: "systems.settings"
});
function show14(input, options) {
  return call(SHOW14, input, options);
}
var SHOW14 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/{sys_id}",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    /** return the system with the zone, module and driver information collected */
    complete: /* @__PURE__ */ boolean()
  }, ["sys_id"]),
  body: null,
  response: ControlSystem,
  name: "systems.show"
});
function start2(input, options) {
  return call(START2, input, options);
}
var START2 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/systems/{sys_id}/start",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    /** start modules that only occur in the selected system */
    single_occurrence: /* @__PURE__ */ boolean()
  }, ["sys_id"]),
  body: null,
  response: "text",
  name: "systems.start"
});
function state2(input, options) {
  return call(STATE2, input, options);
}
var STATE2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/{sys_id}/{module_slug}",
  path_keys: ["sys_id", "module_slug"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    /** the combined module class and index, index is optional and defaults to 1 */
    module_slug: /* @__PURE__ */ string()
  }, ["sys_id", "module_slug"]),
  body: null,
  response: /* @__PURE__ */ record(/* @__PURE__ */ string()),
  name: "systems.state"
});
function stateLookup2(input, options) {
  return call(STATE_LOOKUP2, input, options);
}
var STATE_LOOKUP2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/{sys_id}/{module_slug}/{key}",
  path_keys: ["sys_id", "module_slug", "key"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    /** the combined module class and index, index is optional and defaults to 1 */
    module_slug: /* @__PURE__ */ string(),
    /** the status key we are interested in */
    key: /* @__PURE__ */ string()
  }, ["sys_id", "module_slug", "key"]),
  body: null,
  response: /* @__PURE__ */ json(),
  name: "systems.stateLookup"
});
function stop2(input, options) {
  return call(STOP2, input, options);
}
var STOP2 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/systems/{sys_id}/stop",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    /** stop modules that only occur in the selected system */
    single_occurrence: /* @__PURE__ */ boolean()
  }, ["sys_id"]),
  body: null,
  response: "text",
  name: "systems.stop"
});
function sysZones(input, options) {
  return call(SYS_ZONES, input, options);
}
var SYS_ZONES = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/{sys_id}/zones",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string()
  }, ["sys_id"]),
  body: null,
  response: /* @__PURE__ */ array(Zone),
  name: "systems.sysZones"
});
function types(input, options) {
  return call(TYPES, input, options);
}
var TYPES = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/{sys_id}/types",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string()
  }, ["sys_id"]),
  body: null,
  response: /* @__PURE__ */ record(/* @__PURE__ */ integer("Int32")),
  name: "systems.types"
});
function update13(input, options) {
  return call(UPDATE13, input, options);
}
var UPDATE13 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/systems/{sys_id}",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    /**
     * must be provided to prevent overwriting newer config with old, in the case where
     * multiple
     * people might be editing a system
     */
    version: /* @__PURE__ */ integer("Int32")
  }, ["sys_id", "version"]),
  body: ControlSystem,
  response: ControlSystem,
  name: "systems.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/uploads.js
var uploads_exports = {};
__export(uploads_exports, {
  create: () => create13,
  destroy: () => destroy15,
  downloadProxyFileContents: () => downloadProxyFileContents,
  downloadSimpleRoute: () => downloadSimpleRoute,
  downloadSimpleRouteWithoutFileName: () => downloadSimpleRouteWithoutFileName,
  edit: () => edit,
  finished: () => finished,
  getLink: () => getLink,
  query: () => query12,
  screenshot: () => screenshot,
  storageName: () => storageName,
  update: () => update14
});
function create13(input, options) {
  return call(CREATE13, input, options);
}
var CREATE13 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/uploads",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: UploadsUploadInfo,
  response: /* @__PURE__ */ union([
    /* @__PURE__ */ object({
      type: /* @__PURE__ */ string(),
      signature: /* @__PURE__ */ object({
        verb: /* @__PURE__ */ string(),
        url: /* @__PURE__ */ string(),
        headers: /* @__PURE__ */ record(/* @__PURE__ */ string())
      }, ["verb", "url", "headers"]),
      part_list: /* @__PURE__ */ array(/* @__PURE__ */ integer("Int32")),
      part_data: /* @__PURE__ */ record(/* @__PURE__ */ json()),
      upload_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
      residence: /* @__PURE__ */ string()
    }, ["type", "signature", "part_list", "part_data", "residence"]),
    /* @__PURE__ */ object({
      type: /* @__PURE__ */ string(),
      signature: /* @__PURE__ */ object({
        verb: /* @__PURE__ */ string(),
        url: /* @__PURE__ */ string(),
        headers: /* @__PURE__ */ record(/* @__PURE__ */ string())
      }, ["verb", "url", "headers"]),
      upload_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
      residence: /* @__PURE__ */ string()
    }, ["type", "signature", "residence"])
  ]),
  name: "uploads.create"
});
function destroy15(input, options) {
  return call(DESTROY15, input, options);
}
var DESTROY15 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/uploads/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** upload id of the upload */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "uploads.destroy"
});
function downloadProxyFileContents(input, options) {
  return call(DOWNLOAD_PROXY_FILE_CONTENTS, input, options);
}
var DOWNLOAD_PROXY_FILE_CONTENTS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/uploads/{id}/download",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** upload id of the upload */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "bytes",
  name: "uploads.downloadProxyFileContents"
});
function downloadSimpleRoute(input, options) {
  return call(DOWNLOAD_SIMPLE_ROUTE, input, options);
}
var DOWNLOAD_SIMPLE_ROUTE = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/uploads/{id}/download/{api_key}/{inline}/{file_name}",
  path_keys: ["id", "api_key", "inline", "file_name"],
  params: /* @__PURE__ */ parameters({
    /** upload id of the upload */
    id: /* @__PURE__ */ string(),
    api_key: /* @__PURE__ */ string(),
    inline: /* @__PURE__ */ boolean(),
    file_name: /* @__PURE__ */ string()
  }, ["id", "api_key", "inline", "file_name"]),
  body: null,
  response: "bytes",
  name: "uploads.downloadSimpleRoute"
});
function downloadSimpleRouteWithoutFileName(input, options) {
  return call(DOWNLOAD_SIMPLE_ROUTE_WITHOUT_FILE_NAME, input, options);
}
var DOWNLOAD_SIMPLE_ROUTE_WITHOUT_FILE_NAME = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/uploads/{id}/download/{api_key}/{inline}",
  path_keys: ["id", "api_key", "inline"],
  params: /* @__PURE__ */ parameters({
    /** upload id of the upload */
    id: /* @__PURE__ */ string(),
    api_key: /* @__PURE__ */ string(),
    inline: /* @__PURE__ */ boolean()
  }, ["id", "api_key", "inline"]),
  body: null,
  response: "bytes",
  name: "uploads.downloadSimpleRouteWithoutFileName"
});
function edit(input, options) {
  return call(EDIT, input, options);
}
var EDIT = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/uploads/{id}/edit",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** upload id of the upload */
    id: /* @__PURE__ */ string(),
    /** file part which will be uploaded to cloud storage */
    part: /* @__PURE__ */ string(),
    /** MD5 of the part which will be uploaded to cloud storage */
    file_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id", "part"]),
  body: null,
  response: /* @__PURE__ */ object({
    type: /* @__PURE__ */ string(),
    signature: /* @__PURE__ */ object({
      verb: /* @__PURE__ */ string(),
      url: /* @__PURE__ */ string(),
      headers: /* @__PURE__ */ record(/* @__PURE__ */ string())
    }, ["verb", "url", "headers"]),
    upload_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    body: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["type", "signature"]),
  name: "uploads.edit"
});
function finished(input, options) {
  return call(FINISHED, input, options);
}
var FINISHED = /* @__PURE__ */ operation({
  method: "PUT",
  path: "/api/engine/v2/uploads/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** upload id of the upload */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ object({
    ok: /* @__PURE__ */ boolean()
  }, ["ok"]),
  name: "uploads.finished"
});
function getLink(input, options) {
  return call(GET_LINK, input, options);
}
var GET_LINK = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/uploads/{id}/url",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** upload id of the upload */
    id: /* @__PURE__ */ string(),
    /** Link expiry period in minutes. */
    expiry: /* @__PURE__ */ integer("Int32")
  }, ["id"]),
  body: null,
  response: "bytes",
  name: "uploads.getLink"
});
function query12(input = {}, options) {
  return call(QUERY12, input, options);
}
var QUERY12 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/uploads",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** filters results to returns ones where file_name contains this search string */
    file_search: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("Int32"),
    /** the starting offset of the result set. Used to implement pagination */
    offset: /* @__PURE__ */ integer("Int32"),
    /** return uploads with particular tags */
    tags: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
    /** storage id to list uploads from (defaults to authority's default storage) */
    storage_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(Upload),
  name: "uploads.query"
});
function screenshot(input, options) {
  return call(SCREENSHOT, input, options);
}
var SCREENSHOT = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/uploads/screenshot",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: UploadsScreenshotInfo,
  response: Upload,
  name: "uploads.screenshot"
});
function storageName(input, options) {
  return call(STORAGE_NAME, input, options);
}
var STORAGE_NAME = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/uploads/new",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** Name of file which will be uploaded to cloud storage */
    file_name: /* @__PURE__ */ string(),
    /** Size of file which will be uploaded to cloud storage */
    file_size: /* @__PURE__ */ integer(),
    /** Mime-Type of file which will be uploaded to cloud storage */
    file_mime: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["file_name", "file_size"]),
  body: null,
  response: /* @__PURE__ */ object({
    residence: /* @__PURE__ */ string()
  }, ["residence"]),
  name: "uploads.storageName"
});
function update14(input, options) {
  return call(UPDATE14, input, options);
}
var UPDATE14 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/uploads/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** upload id of the upload */
    id: /* @__PURE__ */ string(),
    /** the next file part which we need a signed URL for */
    part: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** MD5 of the next part */
    file_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id"]),
  body: UploadsUpdateInfo,
  response: /* @__PURE__ */ union([
    /* @__PURE__ */ object({
      ok: /* @__PURE__ */ boolean()
    }, ["ok"]),
    /* @__PURE__ */ object({
      type: /* @__PURE__ */ string(),
      signature: /* @__PURE__ */ object({
        verb: /* @__PURE__ */ string(),
        url: /* @__PURE__ */ string(),
        headers: /* @__PURE__ */ record(/* @__PURE__ */ string())
      }, ["verb", "url", "headers"]),
      upload_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
      body: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
    }, ["type", "signature"])
  ]),
  name: "uploads.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/zones.js
var zones_exports = {};
__export(zones_exports, {
  create: () => create14,
  destroy: () => destroy16,
  metadata: () => metadata2,
  query: () => query13,
  show: () => show15,
  tags: () => tags2,
  triggerInstances: () => triggerInstances,
  update: () => update15,
  zoneExecute: () => zoneExecute
});
function create14(input, options) {
  return call(CREATE14, input, options);
}
var CREATE14 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/zones",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: Zone,
  response: Zone,
  name: "zones.create"
});
function destroy16(input, options) {
  return call(DESTROY16, input, options);
}
var DESTROY16 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/zones/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "zones.destroy"
});
function metadata2(input, options) {
  return call(METADATA2, input, options);
}
var METADATA2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/zones/{id}/metadata",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** only return the metadata key we are interested in */
    name: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ record(MetadataInterface),
  name: "zones.metadata"
});
function query13(input = {}, options) {
  return call(QUERY13, input, options);
}
var QUERY13 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/zones",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /**
     * only return zones who have this zone as a parent (supports comma-separated list). Use
     * 'root'
     * to get zones with no parent
     */
    parent_id: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
    /** return zones with particular tags */
    tags: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
    /**
     * filter to zones a group has direct GroupZone anchors on; non-support callers must have
     * Read
     * on the group. Forces include_children_count=true so callers can drill down.
     */
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** include children_count for each zone (useful for tree views) */
    include_children_count: /* @__PURE__ */ boolean(),
    /** with group_id, include anchor zones and their descendants, excluding denied subtrees */
    descendants: /* @__PURE__ */ boolean(),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(Zone),
  name: "zones.query"
});
function show15(input, options) {
  return call(SHOW15, input, options);
}
var SHOW15 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/zones/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** also return any triggers associated with the zone */
    complete: /* @__PURE__ */ boolean()
  }, ["id"]),
  body: null,
  response: Zone,
  name: "zones.show"
});
function tags2(input = {}, options) {
  return call(TAGS2, input, options);
}
var TAGS2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/zones/tags",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  name: "zones.tags"
});
function triggerInstances(input, options) {
  return call(TRIGGER_INSTANCES, input, options);
}
var TRIGGER_INSTANCES = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/zones/{id}/triggers",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(Trigger),
  name: "zones.triggerInstances"
});
function update15(input, options) {
  return call(UPDATE15, input, options);
}
var UPDATE15 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/zones/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: Zone,
  response: Zone,
  name: "zones.update"
});
function zoneExecute(input, options) {
  return call(ZONE_EXECUTE, input, options);
}
var ZONE_EXECUTE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/zones/{id}/exec/{module_slug}/{method}",
  path_keys: ["id", "module_slug", "method"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** the combined module class and index, index is optional and defaults to 1 */
    module_slug: /* @__PURE__ */ string(),
    /** the method to execute on the module */
    method: /* @__PURE__ */ string()
  }, ["id", "module_slug", "method"]),
  body: /* @__PURE__ */ array(/* @__PURE__ */ json()),
  response: ZonesZoneExecResponse,
  name: "zones.zoneExecute"
});

// node_modules/@placeos/ts-client/dist/generated/operations/api-keys.js
var api_keys_exports = {};
__export(api_keys_exports, {
  create: () => create15,
  destroy: () => destroy17,
  inspectKey: () => inspectKey,
  query: () => query14,
  show: () => show16,
  update: () => update16
});
function create15(input, options) {
  return call(CREATE15, input, options);
}
var CREATE15 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/api_keys",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: ApiKey,
  response: ApiKeysResponse,
  name: "api_keys.create"
});
function destroy17(input, options) {
  return call(DESTROY17, input, options);
}
var DESTROY17 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/api_keys/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "api_keys.destroy"
});
function inspectKey(input = {}, options) {
  return call(INSPECT_KEY, input, options);
}
var INSPECT_KEY = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/api_keys/inspect",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: UserJwt,
  name: "api_keys.inspectKey"
});
function query14(input = {}, options) {
  return call(QUERY14, input, options);
}
var QUERY14 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/api_keys",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** the ID of the domain to be listed */
    authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(ApiKeysResponse),
  name: "api_keys.query"
});
function show16(input, options) {
  return call(SHOW16, input, options);
}
var SHOW16 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/api_keys/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: ApiKeysResponse,
  name: "api_keys.show"
});
function update16(input, options) {
  return call(UPDATE16, input, options);
}
var UPDATE16 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/api_keys/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: ApiKey,
  response: ApiKeysResponse,
  name: "api_keys.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/groups-users.js
var groups_users_exports = {};
__export(groups_users_exports, {
  create: () => create16,
  destroy: () => destroy18,
  query: () => query15,
  show: () => show17,
  update: () => update17
});
function create16(input, options) {
  return call(CREATE16, input, options);
}
var CREATE16 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/group_users",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: GroupUser,
  response: GroupUser,
  name: "groups_users.create"
});
function destroy18(input, options) {
  return call(DESTROY18, input, options);
}
var DESTROY18 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/group_users/{user_id}/{group_id}",
  path_keys: ["user_id", "group_id"],
  params: /* @__PURE__ */ parameters({
    user_id: /* @__PURE__ */ string(),
    group_id: /* @__PURE__ */ string()
  }, ["user_id", "group_id"]),
  body: null,
  response: "text",
  name: "groups_users.destroy"
});
function query15(input = {}, options) {
  return call(QUERY15, input, options);
}
var QUERY15 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/group_users",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    user_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    limit: /* @__PURE__ */ integer("Int32"),
    offset: /* @__PURE__ */ integer("Int32"),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(GroupUser),
  name: "groups_users.query"
});
function show17(input, options) {
  return call(SHOW17, input, options);
}
var SHOW17 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/group_users/{user_id}/{group_id}",
  path_keys: ["user_id", "group_id"],
  params: /* @__PURE__ */ parameters({
    user_id: /* @__PURE__ */ string(),
    group_id: /* @__PURE__ */ string()
  }, ["user_id", "group_id"]),
  body: null,
  response: GroupUser,
  name: "groups_users.show"
});
function update17(input, options) {
  return call(UPDATE17, input, options);
}
var UPDATE17 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/group_users/{user_id}/{group_id}",
  path_keys: ["user_id", "group_id"],
  params: /* @__PURE__ */ parameters({
    user_id: /* @__PURE__ */ string(),
    group_id: /* @__PURE__ */ string()
  }, ["user_id", "group_id"]),
  body: GroupUser,
  response: GroupUser,
  name: "groups_users.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/groups-zones.js
var groups_zones_exports = {};
__export(groups_zones_exports, {
  create: () => create17,
  destroy: () => destroy19,
  query: () => query16,
  show: () => show18,
  update: () => update18
});
function create17(input, options) {
  return call(CREATE17, input, options);
}
var CREATE17 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/group_zones",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: GroupZone,
  response: GroupZone,
  name: "groups_zones.create"
});
function destroy19(input, options) {
  return call(DESTROY19, input, options);
}
var DESTROY19 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/group_zones/{group_id}/{zone_id}",
  path_keys: ["group_id", "zone_id"],
  params: /* @__PURE__ */ parameters({
    group_id: /* @__PURE__ */ string(),
    zone_id: /* @__PURE__ */ string()
  }, ["group_id", "zone_id"]),
  body: null,
  response: "text",
  name: "groups_zones.destroy"
});
function query16(input = {}, options) {
  return call(QUERY16, input, options);
}
var QUERY16 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/group_zones",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    group_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    zone_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    limit: /* @__PURE__ */ integer("Int32"),
    offset: /* @__PURE__ */ integer("Int32"),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(GroupZone),
  name: "groups_zones.query"
});
function show18(input, options) {
  return call(SHOW18, input, options);
}
var SHOW18 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/group_zones/{group_id}/{zone_id}",
  path_keys: ["group_id", "zone_id"],
  params: /* @__PURE__ */ parameters({
    group_id: /* @__PURE__ */ string(),
    zone_id: /* @__PURE__ */ string()
  }, ["group_id", "zone_id"]),
  body: null,
  response: GroupZone,
  name: "groups_zones.show"
});
function update18(input, options) {
  return call(UPDATE18, input, options);
}
var UPDATE18 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/group_zones/{group_id}/{zone_id}",
  path_keys: ["group_id", "zone_id"],
  params: /* @__PURE__ */ parameters({
    group_id: /* @__PURE__ */ string(),
    zone_id: /* @__PURE__ */ string()
  }, ["group_id", "zone_id"]),
  body: GroupZone,
  response: GroupZone,
  name: "groups_zones.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/ldap-authentications.js
var ldap_authentications_exports = {};
__export(ldap_authentications_exports, {
  create: () => create18,
  destroy: () => destroy20,
  query: () => query17,
  show: () => show19,
  update: () => update19
});
function create18(input, options) {
  return call(CREATE18, input, options);
}
var CREATE18 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/ldap_auths",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: LdapAuthentication,
  response: LdapAuthentication,
  name: "ldap_authentications.create"
});
function destroy20(input, options) {
  return call(DESTROY20, input, options);
}
var DESTROY20 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/ldap_auths/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "ldap_authentications.destroy"
});
function query17(input = {}, options) {
  return call(QUERY17, input, options);
}
var QUERY17 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/ldap_auths",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** return authentications that belong to the provided domain */
    authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(LdapAuthentication),
  name: "ldap_authentications.query"
});
function show19(input, options) {
  return call(SHOW19, input, options);
}
var SHOW19 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/ldap_auths/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: LdapAuthentication,
  name: "ldap_authentications.show"
});
function update19(input, options) {
  return call(UPDATE19, input, options);
}
var UPDATE19 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/ldap_auths/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: LdapAuthentication,
  response: LdapAuthentication,
  name: "ldap_authentications.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/oauth-applications.js
var oauth_applications_exports = {};
__export(oauth_applications_exports, {
  create: () => create19,
  destroy: () => destroy21,
  query: () => query18,
  show: () => show20,
  update: () => update20
});
function create19(input, options) {
  return call(CREATE19, input, options);
}
var CREATE19 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/oauth_apps",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: DoorkeeperApplication,
  response: DoorkeeperApplication,
  name: "oauth_applications.create"
});
function destroy21(input, options) {
  return call(DESTROY21, input, options);
}
var DESTROY21 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/oauth_apps/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer()
  }, ["id"]),
  body: null,
  response: "text",
  name: "oauth_applications.destroy"
});
function query18(input = {}, options) {
  return call(QUERY18, input, options);
}
var QUERY18 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/oauth_apps",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /**
     * the ID of the domain to be listed; ignored for non-admin/support callers (forced to their
     * own
     * authority)
     */
    authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(/* @__PURE__ */ json()),
  name: "oauth_applications.query"
});
function show20(input, options) {
  return call(SHOW20, input, options);
}
var SHOW20 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/oauth_apps/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer()
  }, ["id"]),
  body: null,
  response: DoorkeeperApplication,
  name: "oauth_applications.show"
});
function update20(input, options) {
  return call(UPDATE20, input, options);
}
var UPDATE20 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/oauth_apps/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer()
  }, ["id"]),
  body: DoorkeeperApplication,
  response: DoorkeeperApplication,
  name: "oauth_applications.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/oauth-authentications.js
var oauth_authentications_exports = {};
__export(oauth_authentications_exports, {
  create: () => create20,
  destroy: () => destroy22,
  query: () => query19,
  show: () => show21,
  update: () => update21
});
function create20(input, options) {
  return call(CREATE20, input, options);
}
var CREATE20 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/oauth_auths",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: OauthAuthentication,
  response: OauthAuthentication,
  name: "oauth_authentications.create"
});
function destroy22(input, options) {
  return call(DESTROY22, input, options);
}
var DESTROY22 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/oauth_auths/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "oauth_authentications.destroy"
});
function query19(input = {}, options) {
  return call(QUERY19, input, options);
}
var QUERY19 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/oauth_auths",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** return authentications that belong to the provided domain */
    authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(OauthAuthentication),
  name: "oauth_authentications.query"
});
function show21(input, options) {
  return call(SHOW21, input, options);
}
var SHOW21 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/oauth_auths/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: OauthAuthentication,
  name: "oauth_authentications.show"
});
function update21(input, options) {
  return call(UPDATE21, input, options);
}
var UPDATE21 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/oauth_auths/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: OauthAuthentication,
  response: OauthAuthentication,
  name: "oauth_authentications.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/saml-authentications.js
var saml_authentications_exports = {};
__export(saml_authentications_exports, {
  create: () => create21,
  destroy: () => destroy23,
  query: () => query20,
  show: () => show22,
  update: () => update22
});
function create21(input, options) {
  return call(CREATE21, input, options);
}
var CREATE21 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/saml_auths",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: SamlAuthentication,
  response: SamlAuthentication,
  name: "saml_authentications.create"
});
function destroy23(input, options) {
  return call(DESTROY23, input, options);
}
var DESTROY23 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/saml_auths/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "saml_authentications.destroy"
});
function query20(input = {}, options) {
  return call(QUERY20, input, options);
}
var QUERY20 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/saml_auths",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** return authentications that belong to the provided domain */
    authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(SamlAuthentication),
  name: "saml_authentications.query"
});
function show22(input, options) {
  return call(SHOW22, input, options);
}
var SHOW22 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/saml_auths/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: SamlAuthentication,
  name: "saml_authentications.show"
});
function update22(input, options) {
  return call(UPDATE22, input, options);
}
var UPDATE22 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/saml_auths/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: SamlAuthentication,
  response: SamlAuthentication,
  name: "saml_authentications.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/signage-ai.js
var signage_ai_exports = {};
__export(signage_ai_exports, {
  cancel: () => cancel2,
  capabilities: () => capabilities,
  claim: () => claim,
  edit: () => edit2,
  generate: () => generate,
  indexJobs: () => indexJobs,
  showJob: () => showJob,
  usage: () => usage
});
function cancel2(input, options) {
  return call(CANCEL2, input, options);
}
var CANCEL2 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/ai/jobs/{id}/cancel",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: SignageAiJobResponse,
  name: "signage_ai.cancel"
});
function capabilities(input = {}, options) {
  return call(CAPABILITIES, input, options);
}
var CAPABILITIES = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/ai/capabilities",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: SignageAiCapabilities,
  name: "signage_ai.capabilities"
});
function claim(input, options) {
  return call(CLAIM, input, options);
}
var CLAIM = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/ai/jobs/{id}/claim",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: SignageAiClaimParams,
  response: SignageAiJobResponse,
  name: "signage_ai.claim"
});
function edit2(input, options) {
  return call(EDIT2, input, options);
}
var EDIT2 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/ai/edit",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: SignageAiEditParams,
  response: SignageAiJobResponse,
  name: "signage_ai.edit"
});
function generate(input, options) {
  return call(GENERATE, input, options);
}
var GENERATE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/ai/generate",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: SignageAiGenerateParams,
  response: SignageAiJobResponse,
  name: "signage_ai.generate"
});
function indexJobs(input = {}, options) {
  return call(INDEX_JOBS, input, options);
}
var INDEX_JOBS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/ai/jobs",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** only the caller's own jobs */
    mine: /* @__PURE__ */ boolean(),
    limit: /* @__PURE__ */ integer("Int32"),
    /** generate, edit or map_edit; the image kinds when left out */
    kind: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(SignageAiJobResponse),
  name: "signage_ai.indexJobs"
});
function showJob(input, options) {
  return call(SHOW_JOB, input, options);
}
var SHOW_JOB = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/ai/jobs/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** seconds to hold the request open, 0 to answer immediately */
    wait: /* @__PURE__ */ integer("Int32"),
    /** the version the caller already has */
    since: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32"))
  }, ["id"]),
  body: null,
  response: SignageAiJobResponse,
  name: "signage_ai.showJob"
});
function usage(input = {}, options) {
  return call(USAGE, input, options);
}
var USAGE = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/ai/usage",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** unix seconds, defaults to 30 days ago */
    from: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** unix seconds, defaults to now */
    to: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
  }),
  body: null,
  response: /* @__PURE__ */ array(SignageAiJobUsageRow),
  name: "signage_ai.usage"
});

// node_modules/@placeos/ts-client/dist/generated/operations/signage-ai-providers.js
var signage_ai_providers_exports = {};
__export(signage_ai_providers_exports, {
  create: () => create22,
  destroy: () => destroy24,
  query: () => query21,
  show: () => show23,
  test: () => test,
  update: () => update23
});
function create22(input, options) {
  return call(CREATE22, input, options);
}
var CREATE22 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/ai/providers",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: SignageAiProvidersProviderParams,
  response: /* @__PURE__ */ object({
    id: /* @__PURE__ */ string(),
    name: /* @__PURE__ */ string(),
    provider: /* @__PURE__ */ string(),
    authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    endpoint: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    location: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    default_model: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    text_model: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    allowed_models: /* @__PURE__ */ array(/* @__PURE__ */ string()),
    enabled: /* @__PURE__ */ boolean(),
    is_default: /* @__PURE__ */ boolean(),
    quotas: /* @__PURE__ */ json(),
    created_at: /* @__PURE__ */ integer(),
    updated_at: /* @__PURE__ */ integer()
  }, [
    "id",
    "name",
    "provider",
    "allowed_models",
    "enabled",
    "is_default",
    "quotas",
    "created_at",
    "updated_at"
  ]),
  name: "signage_ai_providers.create"
});
function destroy24(input, options) {
  return call(DESTROY24, input, options);
}
var DESTROY24 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/signage/ai/providers/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "signage_ai_providers.destroy"
});
function query21(input = {}, options) {
  return call(QUERY21, input, options);
}
var QUERY21 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/ai/providers",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** include the shared fallback row */
    include_shared: /* @__PURE__ */ boolean(),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(
    /* @__PURE__ */ object({
      id: /* @__PURE__ */ string(),
      name: /* @__PURE__ */ string(),
      provider: /* @__PURE__ */ string(),
      authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
      endpoint: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
      location: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
      default_model: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
      text_model: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
      allowed_models: /* @__PURE__ */ array(/* @__PURE__ */ string()),
      enabled: /* @__PURE__ */ boolean(),
      is_default: /* @__PURE__ */ boolean(),
      quotas: /* @__PURE__ */ json(),
      created_at: /* @__PURE__ */ integer(),
      updated_at: /* @__PURE__ */ integer()
    }, [
      "id",
      "name",
      "provider",
      "allowed_models",
      "enabled",
      "is_default",
      "quotas",
      "created_at",
      "updated_at"
    ])
  ),
  name: "signage_ai_providers.query"
});
function show23(input, options) {
  return call(SHOW23, input, options);
}
var SHOW23 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/signage/ai/providers/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ object({
    id: /* @__PURE__ */ string(),
    name: /* @__PURE__ */ string(),
    provider: /* @__PURE__ */ string(),
    authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    endpoint: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    location: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    default_model: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    text_model: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    allowed_models: /* @__PURE__ */ array(/* @__PURE__ */ string()),
    enabled: /* @__PURE__ */ boolean(),
    is_default: /* @__PURE__ */ boolean(),
    quotas: /* @__PURE__ */ json(),
    created_at: /* @__PURE__ */ integer(),
    updated_at: /* @__PURE__ */ integer()
  }, [
    "id",
    "name",
    "provider",
    "allowed_models",
    "enabled",
    "is_default",
    "quotas",
    "created_at",
    "updated_at"
  ]),
  name: "signage_ai_providers.show"
});
function test(input, options) {
  return call(TEST, input, options);
}
var TEST = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/signage/ai/providers/{id}/test",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** image (the default) or text */
    kind: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: SignageAiProvidersTestResult,
  name: "signage_ai_providers.test"
});
function update23(input, options) {
  return call(UPDATE23, input, options);
}
var UPDATE23 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/signage/ai/providers/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: SignageAiProvidersProviderParams,
  response: /* @__PURE__ */ object({
    id: /* @__PURE__ */ string(),
    name: /* @__PURE__ */ string(),
    provider: /* @__PURE__ */ string(),
    authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    endpoint: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    location: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    default_model: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    text_model: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    allowed_models: /* @__PURE__ */ array(/* @__PURE__ */ string()),
    enabled: /* @__PURE__ */ boolean(),
    is_default: /* @__PURE__ */ boolean(),
    quotas: /* @__PURE__ */ json(),
    created_at: /* @__PURE__ */ integer(),
    updated_at: /* @__PURE__ */ integer()
  }, [
    "id",
    "name",
    "provider",
    "allowed_models",
    "enabled",
    "is_default",
    "quotas",
    "created_at",
    "updated_at"
  ]),
  name: "signage_ai_providers.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/storages.js
var storages_exports = {};
__export(storages_exports, {
  create: () => create23,
  destroy: () => destroy25,
  query: () => query22,
  show: () => show24,
  update: () => update24
});
function create23(input, options) {
  return call(CREATE23, input, options);
}
var CREATE23 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/storages",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: Storage,
  response: Storage,
  name: "storages.create"
});
function destroy25(input, options) {
  return call(DESTROY25, input, options);
}
var DESTROY25 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/storages/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "storages.destroy"
});
function query22(input = {}, options) {
  return call(QUERY22, input, options);
}
var QUERY22 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/storages",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** return storages which are in the authority provided */
    auth_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(Storage),
  name: "storages.query"
});
function show24(input, options) {
  return call(SHOW24, input, options);
}
var SHOW24 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/storages/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: Storage,
  name: "storages.show"
});
function update24(input, options) {
  return call(UPDATE24, input, options);
}
var UPDATE24 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/storages/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: Storage,
  response: Storage,
  name: "storages.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/system-triggers.js
var system_triggers_exports = {};
__export(system_triggers_exports, {
  create: () => create24,
  destroy: () => destroy26,
  query: () => query23,
  show: () => show25,
  update: () => update25
});
function create24(input, options) {
  return call(CREATE24, input, options);
}
var CREATE24 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/systems/{sys_id}/triggers",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    /** the id of the system */
    sys_id: /* @__PURE__ */ string()
  }, ["sys_id"]),
  body: TriggerInstance,
  response: TriggerInstance,
  name: "system_triggers.create"
});
function destroy26(input, options) {
  return call(DESTROY26, input, options);
}
var DESTROY26 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/systems/{sys_id}/triggers/{trig_id}",
  path_keys: ["sys_id", "trig_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    /** the id of the trigger */
    trig_id: /* @__PURE__ */ string()
  }, ["sys_id", "trig_id"]),
  body: null,
  response: "text",
  name: "system_triggers.destroy"
});
function query23(input, options) {
  return call(QUERY23, input, options);
}
var QUERY23 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/{sys_id}/triggers",
  path_keys: ["sys_id"],
  params: /* @__PURE__ */ parameters({
    /** the system to filter on */
    sys_id: /* @__PURE__ */ string(),
    /** provide the control system details? */
    complete: /* @__PURE__ */ boolean(),
    /** only return triggers marked as important? */
    important: /* @__PURE__ */ boolean(),
    /** only return triggers that have recently been triggered? */
    triggered: /* @__PURE__ */ boolean(),
    /** filter by a particular trigger type */
    trigger_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** return triggers updated before the time specified, unix epoch */
    as_of: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /**
     * filters results by the given text: a record matches when any word matches its
     * searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you
     * type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }, ["sys_id"]),
  body: null,
  response: /* @__PURE__ */ array(TriggerInstance),
  name: "system_triggers.query"
});
function show25(input, options) {
  return call(SHOW25, input, options);
}
var SHOW25 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/systems/{sys_id}/triggers/{trig_id}",
  path_keys: ["sys_id", "trig_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    /** the id of the trigger */
    trig_id: /* @__PURE__ */ string(),
    complete: /* @__PURE__ */ boolean()
  }, ["sys_id", "trig_id"]),
  body: null,
  response: TriggerInstance,
  name: "system_triggers.show"
});
function update25(input, options) {
  return call(UPDATE25, input, options);
}
var UPDATE25 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/systems/{sys_id}/triggers/{trig_id}",
  path_keys: ["sys_id", "trig_id"],
  params: /* @__PURE__ */ parameters({
    sys_id: /* @__PURE__ */ string(),
    /** the id of the trigger */
    trig_id: /* @__PURE__ */ string()
  }, ["sys_id", "trig_id"]),
  body: SystemTriggersUpdateParams,
  response: TriggerInstance,
  name: "system_triggers.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/tenant-consent.js
var tenant_consent_exports = {};
__export(tenant_consent_exports, {
  azureAdminConsentCallback: () => azureAdminConsentCallback,
  flowStatus: () => flowStatus,
  query: () => query24
});
function azureAdminConsentCallback(input = {}, options) {
  return call(AZURE_ADMIN_CONSENT_CALLBACK, input, options);
}
var AZURE_ADMIN_CONSENT_CALLBACK = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/admin_consent/callback",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** Azure AD tenant identifier */
    tenant: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** Indicates if admin consent was granted */
    admin_consent: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /** Custom state (sent in state param) */
    state: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** Error code if consent failed */
    error: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** Description of the error */
    error_description: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }),
  body: null,
  response: "text",
  name: "tenant_consent.azureAdminConsentCallback"
});
function flowStatus(input, options) {
  return call(FLOW_STATUS, input, options);
}
var FLOW_STATUS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/admin_consent/flow/{flow_id}",
  path_keys: ["flow_id"],
  params: /* @__PURE__ */ parameters({
    /** Flow identifier issued by the consent callback */
    flow_id: /* @__PURE__ */ string()
  }, ["flow_id"]),
  body: null,
  response: AdminConsentFlow,
  name: "tenant_consent.flowStatus"
});
function query24(input, options) {
  return call(QUERY24, input, options);
}
var QUERY24 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/admin_consent/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /**
     * filters results by the given text: a record matches when any word matches its
     * searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you
     * type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ object({
    url: /* @__PURE__ */ string()
  }, ["url"]),
  name: "tenant_consent.query"
});

// node_modules/@placeos/ts-client/dist/generated/operations/triggers.js
var triggers_exports = {};
__export(triggers_exports, {
  create: () => create25,
  destroy: () => destroy27,
  instances: () => instances,
  query: () => query25,
  show: () => show26,
  update: () => update26
});
function create25(input, options) {
  return call(CREATE25, input, options);
}
var CREATE25 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/triggers",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: Trigger,
  response: Trigger,
  name: "triggers.create"
});
function destroy27(input, options) {
  return call(DESTROY27, input, options);
}
var DESTROY27 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/triggers/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "triggers.destroy"
});
function instances(input, options) {
  return call(INSTANCES, input, options);
}
var INSTANCES = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/triggers/{id}/instances",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(TriggerInstance),
  name: "triggers.instances"
});
function query25(input = {}, options) {
  return call(QUERY25, input, options);
}
var QUERY25 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/triggers",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(Trigger),
  name: "triggers.query"
});
function show26(input, options) {
  return call(SHOW26, input, options);
}
var SHOW26 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/triggers/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string(),
    /** return the instances associated with this trigger */
    instances: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean())
  }, ["id"]),
  body: null,
  response: Trigger,
  name: "triggers.show"
});
function update26(input, options) {
  return call(UPDATE26, input, options);
}
var UPDATE26 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/triggers/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: Trigger,
  response: Trigger,
  name: "triggers.update"
});

// node_modules/@placeos/ts-client/dist/generated/operations/users.js
var users_exports = {};
__export(users_exports, {
  create: () => create26,
  current: () => current2,
  deleteResourceToken: () => deleteResourceToken,
  destroy: () => destroy28,
  groups: () => groups,
  metadata: () => metadata3,
  query: () => query26,
  resourceToken: () => resourceToken,
  revive: () => revive,
  search: () => search,
  show: () => show27,
  update: () => update27,
  userResourceToken: () => userResourceToken
});
function create26(input, options) {
  return call(CREATE26, input, options);
}
var CREATE26 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/users",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: /* @__PURE__ */ json(),
  response: /* @__PURE__ */ union([
    UserAdminMetadataResponse,
    UserAdminResponse,
    UserPublicMetadataResponse,
    UserPublicResponse
  ]),
  name: "users.create"
});
function current2(input = {}, options) {
  return call(CURRENT2, input, options);
}
var CURRENT2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/users/current",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: UserAdminMetadataResponse,
  name: "users.current"
});
function deleteResourceToken(input, options) {
  return call(DELETE_RESOURCE_TOKEN, input, options);
}
var DELETE_RESOURCE_TOKEN = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/users/{id}/resource_token",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the id of the user */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "users.deleteResourceToken"
});
function destroy28(input, options) {
  return call(DESTROY28, input, options);
}
var DESTROY28 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/engine/v2/users/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the id of the user */
    id: /* @__PURE__ */ string(),
    force_removal: /* @__PURE__ */ boolean()
  }, ["id"]),
  body: null,
  response: "text",
  name: "users.destroy"
});
function groups(input, options) {
  return call(GROUPS, input, options);
}
var GROUPS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/users/groups",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** the user emails whos group membership we are interested */
    emails: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }, ["emails"]),
  body: null,
  response: /* @__PURE__ */ array(UserGroupResponse),
  name: "users.groups"
});
function metadata3(input, options) {
  return call(METADATA3, input, options);
}
var METADATA3 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/users/{id}/metadata",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the id of the user */
    id: /* @__PURE__ */ string(),
    /** filter metadata by a particular entry */
    name: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ record(MetadataInterface),
  name: "users.metadata"
});
function query26(input = {}, options) {
  return call(QUERY26, input, options);
}
var QUERY26 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/users",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** include soft deleted users in the results */
    include_deleted: /* @__PURE__ */ boolean(),
    /** include user metadata in the response */
    include_metadata: /* @__PURE__ */ boolean(),
    /** admin users can view other domains, ignored for other users */
    authority_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * filters results by the given text: a record matches when any word matches its searchable
     * fields as a whole word, and the last word also matches as a prefix (search as you type)
     */
    q: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("UInt32"),
    /** the starting offset of the result set, used to implement pagination */
    offset: /* @__PURE__ */ integer("UInt32"),
    /** deprecated, ignored — pagination follows the `Link` header's offset */
    ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** deprecated, ignored — search covers the resource's indexed fields */
    fields: /* @__PURE__ */ array(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(
    /* @__PURE__ */ union([
      UserAdminMetadataResponse,
      UserAdminResponse,
      UserPublicMetadataResponse,
      UserPublicResponse
    ])
  ),
  name: "users.query"
});
function resourceToken(input = {}, options) {
  return call(RESOURCE_TOKEN, input, options);
}
var RESOURCE_TOKEN = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/users/resource_token",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: UserResourceToken,
  name: "users.resourceToken"
});
function revive(input, options) {
  return call(REVIVE, input, options);
}
var REVIVE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/users/{id}/revive",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the id of the user */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "text",
  name: "users.revive"
});
function search(input, options) {
  return call(SEARCH, input, options);
}
var SEARCH = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/users/metadata/search",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** filter expression in JSONPath format */
    filter: /* @__PURE__ */ string(),
    /** the maximum number of results to return */
    limit: /* @__PURE__ */ integer("Int32"),
    /** the starting offset of the result set. Used to implement pagination */
    offset: /* @__PURE__ */ integer("Int32")
  }, ["filter"]),
  body: null,
  response: /* @__PURE__ */ array(
    /* @__PURE__ */ union([
      UserAdminMetadataResponse,
      UserAdminResponse,
      UserPublicMetadataResponse,
      UserPublicResponse
    ])
  ),
  name: "users.search"
});
function show27(input, options) {
  return call(SHOW27, input, options);
}
var SHOW27 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/engine/v2/users/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the id of the user */
    id: /* @__PURE__ */ string(),
    /** include user metadata in the response */
    include_metadata: /* @__PURE__ */ boolean()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ union([
    UserAdminMetadataResponse,
    UserAdminResponse,
    UserPublicMetadataResponse,
    UserPublicResponse
  ]),
  name: "users.show"
});
function update27(input, options) {
  return call(UPDATE27, input, options);
}
var UPDATE27 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/engine/v2/users/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the id of the user */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: /* @__PURE__ */ json(),
  response: /* @__PURE__ */ union([
    UserAdminMetadataResponse,
    UserAdminResponse,
    UserPublicMetadataResponse,
    UserPublicResponse
  ]),
  name: "users.update"
});
function userResourceToken(input, options) {
  return call(USER_RESOURCE_TOKEN, input, options);
}
var USER_RESOURCE_TOKEN = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/engine/v2/users/{id}/resource_token",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the id of the user */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: UserResourceToken,
  name: "users.userResourceToken"
});

// node_modules/@placeos/ts-client/dist/auth/environment.js
var FRAME_MESSAGE_TYPE = "place-os";
function browserEnvironment(storage = "local") {
  assert(typeof window !== "undefined", "browserEnvironment runs in a browser");
  const session_store = webStorageStore(() => window.sessionStorage);
  return {
    fetch: (url, init) => globalThis.fetch(url, init),
    storage: storage === "session" ? session_store : webStorageStore(() => window.localStorage),
    session_storage: session_store,
    currentUrl: () => window.location.href,
    replaceUrl: (url) => window.history.replaceState(window.history.state, "", url),
    navigate: (url) => window.location.assign(url),
    now: () => Date.now(),
    randomValues: (bytes) => {
      crypto.getRandomValues(bytes);
    },
    wait: (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds)),
    authorizeInFrame,
    onForeground: (listener) => {
      const onVisible = () => {
        if (document.visibilityState === "visible")
          listener();
      };
      window.addEventListener("focus", onVisible);
      document.addEventListener("visibilitychange", onVisible);
      return () => {
        window.removeEventListener("focus", onVisible);
        document.removeEventListener("visibilitychange", onVisible);
      };
    }
  };
}
function memoryStore() {
  const values = /* @__PURE__ */ new Map();
  return {
    get: (key) => values.get(key) ?? null,
    set: (key, value) => {
      values.set(key, value);
    },
    remove: (key) => {
      values.delete(key);
    },
    keys: () => [...values.keys()]
  };
}
function webStorageStore(getStorage) {
  const refused = memoryStore();
  const storageOrNull = () => {
    try {
      return getStorage();
    } catch {
      return null;
    }
  };
  return {
    get: (key) => {
      const kept = refused.get(key);
      if (kept !== null)
        return kept;
      const store = storageOrNull();
      if (store === null)
        return null;
      try {
        return store.getItem(key);
      } catch {
        return null;
      }
    },
    set: (key, value) => {
      const store = storageOrNull();
      if (store !== null && trySetItem(store, key, value)) {
        refused.remove(key);
        return;
      }
      refused.set(key, value);
    },
    remove: (key) => {
      refused.remove(key);
      try {
        storageOrNull()?.removeItem(key);
      } catch {
      }
    },
    keys: () => {
      const keys = new Set(refused.keys());
      const store = storageOrNull();
      if (store === null)
        return [...keys];
      try {
        for (let index = 0; index < store.length; index += 1) {
          const key = store.key(index);
          if (key !== null)
            keys.add(key);
        }
      } catch {
      }
      return [...keys];
    }
  };
}
function trySetItem(store, key, value) {
  try {
    store.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}
function authorizeInFrame(url, timeout_ms) {
  return new Promise((resolve) => {
    const frame = document.createElement("iframe");
    frame.id = "place-authorize";
    frame.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;border:0;z-index:-1";
    const finish = (result) => {
      clearTimeout(timer);
      window.removeEventListener("message", onMessage);
      frame.remove();
      resolve(result);
    };
    const onMessage = (event) => {
      if (event.origin !== window.location.origin)
        return;
      if (event.source !== frame.contentWindow)
        return;
      finish({ ok: true, value: event.data });
    };
    const timer = setTimeout(() => finish({ ok: false, error: "timeout" }), timeout_ms);
    frame.addEventListener("error", () => finish({ ok: false, error: "frame_error" }));
    window.addEventListener("message", onMessage);
    frame.src = url;
    document.body.appendChild(frame);
  });
}

// node_modules/@placeos/ts-client/dist/auth/hash.js
var HASH_INPUT_BYTES_MAX = 64 * 1024;
function md5Hex(text) {
  const input = new TextEncoder().encode(text);
  assert(input.length <= HASH_INPUT_BYTES_MAX, "the hash input is less than HASH_INPUT_BYTES_MAX");
  const blocks = padBlocks(input, "little");
  const state3 = new Uint32Array([1732584193, 4023233417, 2562383102, 271733878]);
  const words = new Uint32Array(16);
  for (let offset = 0; offset < blocks.length; offset += 64) {
    for (let index = 0; index < 16; index += 1) {
      words[index] = readUint32(blocks, offset + index * 4, "little");
    }
    let a = state3[0] ?? 0;
    let b = state3[1] ?? 0;
    let c = state3[2] ?? 0;
    let d = state3[3] ?? 0;
    for (let step = 0; step < 64; step += 1) {
      let mix;
      let word_index;
      if (step < 16) {
        mix = b & c | ~b & d;
        word_index = step;
      } else if (step < 32) {
        mix = d & b | ~d & c;
        word_index = (5 * step + 1) % 16;
      } else if (step < 48) {
        mix = b ^ c ^ d;
        word_index = (3 * step + 5) % 16;
      } else {
        mix = c ^ (b | ~d);
        word_index = 7 * step % 16;
      }
      const sum = a + mix + (MD5_CONSTANTS[step] ?? 0) + (words[word_index] ?? 0) | 0;
      a = d;
      d = c;
      c = b;
      b = b + rotateLeft(sum, MD5_SHIFTS[step] ?? 0) | 0;
    }
    state3[0] = (state3[0] ?? 0) + a;
    state3[1] = (state3[1] ?? 0) + b;
    state3[2] = (state3[2] ?? 0) + c;
    state3[3] = (state3[3] ?? 0) + d;
  }
  let hex = "";
  for (const word of state3) {
    for (let byte = 0; byte < 4; byte += 1) {
      hex += (word >>> byte * 8 & 255).toString(16).padStart(2, "0");
    }
  }
  return hex;
}
function sha256(input) {
  assert(input.length <= HASH_INPUT_BYTES_MAX, "the hash input is less than HASH_INPUT_BYTES_MAX");
  const blocks = padBlocks(input, "big");
  const state3 = new Uint32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]);
  const words = new Uint32Array(64);
  for (let offset = 0; offset < blocks.length; offset += 64) {
    for (let index = 0; index < 16; index += 1) {
      words[index] = readUint32(blocks, offset + index * 4, "big");
    }
    for (let index = 16; index < 64; index += 1) {
      const w15 = words[index - 15] ?? 0;
      const w2 = words[index - 2] ?? 0;
      const s0 = rotateRight(w15, 7) ^ rotateRight(w15, 18) ^ w15 >>> 3;
      const s1 = rotateRight(w2, 17) ^ rotateRight(w2, 19) ^ w2 >>> 10;
      words[index] = (words[index - 16] ?? 0) + s0 + (words[index - 7] ?? 0) + s1;
    }
    let a = state3[0] ?? 0;
    let b = state3[1] ?? 0;
    let c = state3[2] ?? 0;
    let d = state3[3] ?? 0;
    let e = state3[4] ?? 0;
    let f = state3[5] ?? 0;
    let g = state3[6] ?? 0;
    let h = state3[7] ?? 0;
    for (let index = 0; index < 64; index += 1) {
      const s1 = rotateRight(e, 6) ^ rotateRight(e, 11) ^ rotateRight(e, 25);
      const choice = e & f ^ ~e & g;
      const t1 = h + s1 + choice + (SHA256_CONSTANTS[index] ?? 0) + (words[index] ?? 0) | 0;
      const s0 = rotateRight(a, 2) ^ rotateRight(a, 13) ^ rotateRight(a, 22);
      const majority = a & b ^ a & c ^ b & c;
      const t2 = s0 + majority | 0;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    const results = [a, b, c, d, e, f, g, h];
    for (let index = 0; index < 8; index += 1) {
      state3[index] = (state3[index] ?? 0) + (results[index] ?? 0);
    }
  }
  const output = new Uint8Array(32);
  for (let index = 0; index < 8; index += 1) {
    const word = state3[index] ?? 0;
    output[index * 4] = word >>> 24;
    output[index * 4 + 1] = word >>> 16 & 255;
    output[index * 4 + 2] = word >>> 8 & 255;
    output[index * 4 + 3] = word & 255;
  }
  return output;
}
function base64Url(bytes) {
  let binary = "";
  for (const byte of bytes)
    binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}
function padBlocks(input, endian) {
  const block_count = Math.ceil((input.length + 9) / 64);
  const blocks = new Uint8Array(block_count * 64);
  blocks.set(input);
  blocks[input.length] = 128;
  const bit_length = input.length * 8;
  assert(bit_length < 2 ** 32, "the bit length fits in 32 bits");
  const length_offset = blocks.length - 8;
  for (let byte = 0; byte < 4; byte += 1) {
    const value = bit_length >>> byte * 8 & 255;
    if (endian === "little") {
      blocks[length_offset + byte] = value;
    } else {
      blocks[blocks.length - 1 - byte] = value;
    }
  }
  return blocks;
}
function readUint32(bytes, offset, endian) {
  const b0 = bytes[offset] ?? 0;
  const b1 = bytes[offset + 1] ?? 0;
  const b2 = bytes[offset + 2] ?? 0;
  const b3 = bytes[offset + 3] ?? 0;
  if (endian === "little")
    return (b0 | b1 << 8 | b2 << 16 | b3 << 24) >>> 0;
  return (b0 << 24 | b1 << 16 | b2 << 8 | b3) >>> 0;
}
function rotateLeft(value, count) {
  return value << count | value >>> 32 - count;
}
function rotateRight(value, count) {
  return value >>> count | value << 32 - count;
}
var MD5_SHIFTS = [
  7,
  12,
  17,
  22,
  7,
  12,
  17,
  22,
  7,
  12,
  17,
  22,
  7,
  12,
  17,
  22,
  5,
  9,
  14,
  20,
  5,
  9,
  14,
  20,
  5,
  9,
  14,
  20,
  5,
  9,
  14,
  20,
  4,
  11,
  16,
  23,
  4,
  11,
  16,
  23,
  4,
  11,
  16,
  23,
  4,
  11,
  16,
  23,
  6,
  10,
  15,
  21,
  6,
  10,
  15,
  21,
  6,
  10,
  15,
  21,
  6,
  10,
  15,
  21
];
var MD5_CONSTANTS = Array.from({ length: 64 }, (_, index) => Math.floor(Math.abs(Math.sin(index + 1)) * 2 ** 32) | 0);
var SHA256_CONSTANTS = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
];

// node_modules/@placeos/ts-client/dist/auth/session.js
var AUTHORIZE_PATH_DEFAULT = "/auth/oauth/authorize";
var TOKEN_PATH_DEFAULT = "/auth/oauth/token";
var AUTHORITY_PATH = "/auth/authority";
var LOGOUT_PATH_DEFAULT = "/logout";
var AUTHORITY_ATTEMPTS_MAX = 5;
var AUTHORITY_RETRY_MS = 300;
var AUTH_TIMEOUT_MS = 15e3;
var AUTH_RESPONSE_BYTES_MAX = 1024 * 1024;
var FRAME_TIMEOUT_MS = 15e3;
var TOKEN_EXPIRY_MARGIN_SECONDS = 300;
var TOKEN_LIFETIME_MIN_SECONDS = 60;
var TOKEN_LIFETIME_DEFAULT_SECONDS = 2 * 60 * 60;
var NONCE_LENGTH = 40;
var VERIFIER_LENGTH = 64;
var LISTENERS_MAX = 64;
var URL_LENGTH_MAX = 16 * 1024;
var DEEP_LINK_KEY = "ENGINE.auth.params";
var LOGIN_PARAMS = /* @__PURE__ */ new Set([
  "access_token",
  "code",
  "error",
  "error_description",
  "expires_in",
  "refresh_token",
  "scope",
  "state",
  "token_type",
  "x-api-key"
]);
var DEVICE_PARAMS = ["x-api-key", "trust", "trusted", "fixed_device"];
var NONCE_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var RANDOM_ROUNDS_MAX = 16;
var DomainAuthoritySchema = object({
  id: nullable(string()),
  name: string(),
  description: nullable(string()),
  /** The domain of the authority, without a port. */
  domain: string(),
  /** The login page. `{{url}}` is the URL to come back to. */
  login_url: string(),
  logout_url: string(),
  /** `true` when the user has a session on the server. */
  session: boolean(),
  production: nullable(boolean()),
  config: nullable(record(json())),
  version: nullable(string()),
  metrics: nullable(string()),
  sentry_dsn: nullable(string()),
  email_domains: nullable(array(string()))
}, ["id", "name", "domain", "login_url", "logout_url", "session"]);
var DomainAuthority = DomainAuthoritySchema;
var TokenResponse = object({
  access_token: string(),
  refresh_token: nullable(string()),
  expires_in: nullable(union([integer(), string()]))
}, ["access_token"]);
var FrameMessage = object({ type: literal([FRAME_MESSAGE_TYPE]), params: record(string()) }, [
  "type",
  "params"
]);
var NO_TOKENS = { access_token: null, refresh_token: null, expires_at_ms: 0 };
function createAuthSession(config) {
  assert(!config.base_url.endsWith("/"), "the base_url has no trailing slash");
  assert(config.redirect_uri.length > 0, "the redirect_uri is not empty");
  const environment = config.environment ?? browserEnvironment();
  const storage = environment.storage;
  const client_id = md5Hex(config.redirect_uri);
  const handle_login = config.handle_login ?? true;
  const headers = __spreadProps(__spreadValues({}, config.headers), { "X-App-Id": client_id });
  const limits = { timeout_ms: AUTH_TIMEOUT_MS, bytes_max: AUTH_RESPONSE_BYTES_MAX };
  const storageKey = (name) => `${client_id}_${name}`;
  const log = scopedLog("auth", { sink: config.log ?? null });
  let authority = null;
  let status = { kind: "stopped" };
  let memory_tokens = NO_TOKENS;
  let pending_code = null;
  let authorizing = null;
  let loading_authority = null;
  let renewing = null;
  let foreground_check = null;
  let removeForegroundListener = null;
  let halted = null;
  let epoch = 0;
  let logouts_pending = 0;
  const listeners = /* @__PURE__ */ new Set();
  const session = {
    client_id,
    client_auth: {
      kind: "credential",
      credential: credentialForRequest,
      rejected
    },
    start: start3,
    stop: stop3,
    authorize,
    credential: currentCredential,
    status: () => status,
    subscribe,
    authority: () => authority,
    reloadAuthority: loadAuthority,
    handleRedirect,
    useToken,
    useRefreshToken,
    useApiKey,
    invalidateToken,
    logout,
    isTrusted,
    isFixedDevice
  };
  return session;
  async function start3() {
    if (removeForegroundListener === null) {
      removeForegroundListener = environment.onForeground(onForeground);
    }
    if (status.kind === "stopped")
      setStatus({ kind: "loading" });
    log.info("start", { fixed_device: isFixedDevice(), trusted: isTrusted() });
    halted = null;
    return authorize();
  }
  function stop3() {
    removeForegroundListener?.();
    removeForegroundListener = null;
    setStatus({ kind: "stopped" });
  }
  function authorize() {
    if (logouts_pending > 0) {
      return Promise.resolve({ ok: false, error: { kind: "logged_out" } });
    }
    if (authorizing !== null)
      return authorizing;
    const attempt_epoch = epoch;
    const attempt = Promise.resolve().then(() => runAuthorize(attempt_epoch)).finally(() => {
      authorizing = null;
    });
    authorizing = attempt;
    return attempt;
  }
  async function runAuthorize(attempt_epoch) {
    if (epoch !== attempt_epoch)
      return failed({ kind: "logged_out" });
    const redirect_outcome = readRedirectParams();
    if (redirect_outcome.kind === "denied") {
      halted = redirect_outcome.error;
      return failed(redirect_outcome.error);
    }
    if (authority === null) {
      const loaded = await loadAuthority();
      if (epoch !== attempt_epoch)
        return failed({ kind: "logged_out" });
      if (!loaded.ok)
        return failed(loaded.error);
    }
    const known = await tokenFromKnownCredentials(attempt_epoch);
    if (epoch !== attempt_epoch)
      return failed({ kind: "logged_out" });
    if (known !== null)
      return known;
    const grant = config.grant;
    switch (grant.kind) {
      case "password": {
        log.debug("logging in with the password grant");
        const result = await requestTokens(attempt_epoch, __spreadValues({
          grant_type: "password",
          client_id,
          redirect_uri: config.redirect_uri,
          scope: config.scope,
          username: grant.username,
          password: grant.password,
          authority: authority?.id ?? ""
        }, grant.client_secret === void 0 ? {} : { client_secret: grant.client_secret }));
        return result.ok ? signedIn(result.value) : failed(result.error);
      }
      case "entra": {
        log.debug("exchanging the Entra token");
        const subject_token = await grant.entraToken();
        if (epoch !== attempt_epoch)
          return failed({ kind: "logged_out" });
        if (subject_token === null)
          return failed({ kind: "entra_token_missing" });
        const result = await requestTokens(attempt_epoch, __spreadValues({
          grant_type: "urn:ietf:params:oauth:grant-type:token-exchange",
          client_id,
          subject_token,
          subject_token_type: "urn:ietf:params:oauth:token-type:access_token",
          scope: config.scope
        }, grant.client_secret === void 0 ? {} : { client_secret: grant.client_secret }));
        return result.ok ? signedIn(result.value) : failed(result.error);
      }
      case "code":
      case "implicit":
        break;
      default:
        return unreachable(grant);
    }
    const late = applyLoginParams(readDeepLink());
    if (late.kind === "denied") {
      halted = late.error;
      return failed(late.error);
    }
    if (late.kind === "applied") {
      log.debug("using the parameters of a deep link");
      const from_link = await tokenFromKnownCredentials(attempt_epoch);
      if (epoch !== attempt_epoch)
        return failed({ kind: "logged_out" });
      if (from_link !== null)
        return from_link;
    }
    if (halted !== null)
      return failed(halted);
    if (status.kind === "redirecting")
      return { ok: false, error: status };
    const current3 = authority;
    assert(current3 !== null, "the authority is loaded");
    if (current3.session) {
      const url = createAuthorizeUrl();
      if (config.use_frame !== true)
        return redirect(url);
      log.debug("authorizing in a hidden frame");
      const framed = await environment.authorizeInFrame(url, FRAME_TIMEOUT_MS);
      if (epoch !== attempt_epoch)
        return failed({ kind: "logged_out" });
      if (!framed.ok)
        return failed({ kind: "frame_failed", reason: framed.error });
      const message = parseResponse(FrameMessage, framed.value);
      if (!message.ok)
        return failed({ kind: "frame_failed", reason: "message_invalid" });
      const applied = applyLoginParams(new Map(Object.entries(message.value.params)));
      switch (applied.kind) {
        case "none":
          return failed({ kind: "frame_failed", reason: "message_invalid" });
        case "state_mismatch":
          return failed({ kind: "frame_failed", reason: "state_mismatch" });
        case "denied":
          halted = applied.error;
          return failed(applied.error);
        case "applied":
          break;
        default:
          return unreachable(applied);
      }
      const from_frame = await tokenFromKnownCredentials(attempt_epoch);
      if (epoch !== attempt_epoch)
        return failed({ kind: "logged_out" });
      if (from_frame !== null)
        return from_frame;
      return failed({ kind: "frame_failed", reason: "message_invalid" });
    }
    if (!handle_login) {
      log.info("no session: the application shows its login");
      return failed({ kind: "login_required" });
    }
    return redirect(loginUrl(current3));
  }
  async function tokenFromKnownCredentials(attempt_epoch) {
    const current3 = currentCredential();
    if (current3 !== null) {
      log.debug("a valid credential is found", { credential: current3.kind });
      return signedIn(current3);
    }
    if (pending_code !== null) {
      log.debug("exchanging the code of the redirect");
      const code = pending_code;
      pending_code = null;
      const verifier = environment.session_storage.get(storageKey("code_verifier"));
      environment.session_storage.remove(storageKey("code_verifier"));
      const result = await requestTokens(attempt_epoch, __spreadValues({
        grant_type: "authorization_code",
        client_id,
        redirect_uri: config.redirect_uri,
        code
      }, verifier === null ? {} : { code_verifier: verifier }));
      if (result.ok)
        return signedIn(result.value);
      halted = result.error;
      return failed(result.error);
    }
    const refresh_token = readTokens().refresh_token;
    if (refresh_token !== null) {
      log.debug("refreshing the access token");
      const shared = () => readTokens().refresh_token === refresh_token;
      const result = await requestTokens(attempt_epoch, {
        grant_type: "refresh_token",
        client_id,
        redirect_uri: config.redirect_uri,
        refresh_token
      }, shared);
      if (result.ok)
        return signedIn(result.value);
      if (!shared()) {
        const current4 = currentCredential();
        if (current4 !== null)
          return signedIn(current4);
        return failed({ kind: "logged_out" });
      }
      if (!isRefusal(result.error))
        return failed(result.error);
      log.warn("the server refused the refresh token");
      writeTokens(__spreadProps(__spreadValues({}, readTokens()), { refresh_token: null }));
    }
    return null;
  }
  async function requestTokens(attempt_epoch, params, current3 = () => true) {
    const fetched = await fetchBody(environment.fetch, serverUrl(config.token_path ?? TOKEN_PATH_DEFAULT), {
      method: "POST",
      headers: __spreadProps(__spreadValues({}, headers), {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      }),
      body: new URLSearchParams(params).toString(),
      // A 307 or a 308 sends the body again, with the secrets of the grant. The token
      // endpoint has no redirect, so a redirect is an error.
      redirect: "error"
    }, limits);
    if (epoch !== attempt_epoch || !current3())
      return { ok: false, error: { kind: "logged_out" } };
    const grant = params["grant_type"] ?? "";
    if (!fetched.ok) {
      log.error("the token request failed", { grant, error: fetched.error.kind });
      return { ok: false, error: { kind: "token_unavailable", error: fetched.error } };
    }
    const decoded = decodeJson(fetched.value.bytes);
    if (!fetched.value.ok) {
      const message = decoded.ok ? errorMessage(decoded.value) : null;
      const error = {
        kind: "token_rejected",
        status: fetched.value.status,
        message
      };
      log.warn("the server refused the token request", {
        grant,
        status: error.status,
        message
      });
      return { ok: false, error };
    }
    if (!decoded.ok) {
      return { ok: false, error: { kind: "token_invalid", path: "$", expected: "JSON" } };
    }
    const parsed = parseResponse(TokenResponse, decoded.value);
    if (!parsed.ok)
      return { ok: false, error: __spreadValues({ kind: "token_invalid" }, parsed.error) };
    const tokens = parsed.value;
    const expires_in = tokens.expires_in === null ? null : parseSeconds(String(tokens.expires_in));
    storeTokens(tokens.access_token, tokens.refresh_token, expires_in);
    log.info("got new tokens", { grant, expires_in_seconds: expires_in });
    return { ok: true, value: { kind: "bearer", token: tokens.access_token } };
  }
  function storeTokens(access_token, refresh_token, expires_in_seconds) {
    const lifetime_seconds = expires_in_seconds === null ? TOKEN_LIFETIME_DEFAULT_SECONDS : Math.max(TOKEN_LIFETIME_MIN_SECONDS, expires_in_seconds - TOKEN_EXPIRY_MARGIN_SECONDS);
    writeTokens({
      access_token,
      // A refresh grant can answer without a new refresh token. Keep the one we have.
      refresh_token: refresh_token ?? readTokens().refresh_token,
      expires_at_ms: environment.now() + lifetime_seconds * 1e3
    });
  }
  function currentCredential() {
    const api_key = config.ignore_api_key === true ? null : deviceValue("x-api-key");
    if (api_key !== null && api_key.length > 0)
      return { kind: "api_key", key: api_key };
    const tokens = readTokens();
    if (tokens.access_token === null)
      return null;
    if (environment.now() >= tokens.expires_at_ms)
      return null;
    return { kind: "bearer", token: tokens.access_token };
  }
  async function credentialForRequest() {
    const current3 = currentCredential();
    if (current3 !== null)
      return current3;
    const result = await authorize();
    return result.ok ? result.value : null;
  }
  function rejected(status2, used) {
    const current3 = currentCredential();
    if (current3 !== null && !sameCredential(current3, used))
      return Promise.resolve(true);
    if (renewing !== null)
      return renewing;
    const attempt = renew(status2, used).finally(() => {
      renewing = null;
    });
    renewing = attempt;
    return attempt;
  }
  async function renew(status2, used) {
    if (used.kind === "api_key")
      return false;
    log.warn("the server refused the credential", { status: status2 });
    invalidateToken();
    if (status2 === 511) {
      if (handle_login && authority !== null)
        redirect(loginUrl(authority));
      else
        failed({ kind: "login_required" });
      return false;
    }
    const renew_epoch = epoch;
    const reloaded = await loadAuthority();
    if (!reloaded.ok)
      return false;
    if (epoch !== renew_epoch)
      return false;
    const result = await authorize();
    return result.ok;
  }
  function loadAuthority() {
    if (loading_authority !== null)
      return loading_authority;
    const attempt = runLoadAuthority().finally(() => {
      loading_authority = null;
    });
    loading_authority = attempt;
    return attempt;
  }
  async function runLoadAuthority() {
    if (authority === null && status.kind !== "redirecting")
      setStatus({ kind: "loading" });
    log.debug("loading the authority");
    let reason = "";
    for (let attempt = 0; attempt < AUTHORITY_ATTEMPTS_MAX; attempt += 1) {
      if (attempt > 0) {
        log.warn("the authority did not load: trying again", { attempt, reason });
        await environment.wait(AUTHORITY_RETRY_MS * attempt);
      }
      const fetched = await fetchBody(environment.fetch, serverUrl(AUTHORITY_PATH), {
        method: "GET",
        headers: __spreadProps(__spreadValues({}, headers), { Accept: "application/json" }),
        credentials: "same-origin"
      }, limits);
      if (!fetched.ok) {
        reason = fetched.error.kind;
        continue;
      }
      if (!fetched.value.ok) {
        reason = `status ${fetched.value.status}`;
        continue;
      }
      const decoded = decodeJson(fetched.value.bytes);
      if (!decoded.ok) {
        reason = "the body is not JSON";
        continue;
      }
      const parsed = parseResponse(DomainAuthority, decoded.value);
      if (!parsed.ok)
        return failed(__spreadValues({ kind: "authority_invalid" }, parsed.error));
      authority = parsed.value;
      const { id, name, version: version2, domain, session: session2, production } = parsed.value;
      log.group("the authority is loaded", { id });
      log.print(`name: ${name}`);
      log.print(`version: ${version2 ?? "unknown"}`);
      log.print(`domain: ${domain}`);
      log.print(`session: ${session2}`);
      log.print(`production: ${production ?? "unknown"}`);
      log.groupEnd();
      return { ok: true, value: parsed.value };
    }
    log.error("the authority is unavailable", { attempts: AUTHORITY_ATTEMPTS_MAX, reason });
    return failed({ kind: "authority_unavailable", reason });
  }
  function readRedirectParams() {
    const url = environment.currentUrl();
    const params = urlParams(url);
    for (const name of DEVICE_PARAMS) {
      const value = params.get(name);
      if (value !== void 0)
        storage.set(storageKey(name), value);
    }
    if (hasLoginParams(params) || params.has("x-api-key")) {
      environment.replaceUrl(withoutParams(url, LOGIN_PARAMS));
    }
    return applyLoginParams(hasLoginParams(params) ? params : readDeepLink());
  }
  function readDeepLink() {
    const text = environment.session_storage.get(DEEP_LINK_KEY);
    environment.session_storage.remove(DEEP_LINK_KEY);
    if (text === null)
      return /* @__PURE__ */ new Map();
    const decoded = decodeJson(new TextEncoder().encode(text));
    if (!decoded.ok)
      return /* @__PURE__ */ new Map();
    const parsed = parseResponse(record(string()), decoded.value);
    if (!parsed.ok)
      return /* @__PURE__ */ new Map();
    return new Map(Object.entries(parsed.value));
  }
  function applyLoginParams(params) {
    if (!hasLoginParams(params))
      return { kind: "none" };
    const nonce = (params.get("state") ?? "").split(";")[0] ?? "";
    const saved = storage.get(storageKey("nonce"));
    if (saved === null || saved !== nonce) {
      log.warn("the state of the login parameters is not the nonce of this client");
      return { kind: "state_mismatch" };
    }
    storage.remove(storageKey("nonce"));
    const denial = params.get("error");
    if (denial !== void 0) {
      const description = params.get("error_description") ?? null;
      log.warn("the server refused the login", { error: denial, description });
      return {
        kind: "denied",
        error: { kind: "authorization_denied", error: denial, description }
      };
    }
    const code = params.get("code");
    if (code !== void 0)
      pending_code = code;
    const access_token = params.get("access_token");
    const refresh_token = params.get("refresh_token") ?? null;
    log.debug("got the login parameters", {
      code: code !== void 0,
      access_token: access_token !== void 0
    });
    if (access_token !== void 0) {
      storeTokens(access_token, refresh_token, parseSeconds(params.get("expires_in") ?? null));
    } else if (refresh_token !== null) {
      writeTokens(__spreadProps(__spreadValues({}, readTokens()), { refresh_token }));
    }
    if (status.kind === "redirecting")
      setStatus({ kind: "loading" });
    return { kind: "applied" };
  }
  function createAuthorizeUrl() {
    const nonce = randomString(NONCE_LENGTH);
    storage.set(storageKey("nonce"), nonce);
    const response_type = isTrusted() || config.grant.kind === "code" ? "code" : "token";
    const params = new URLSearchParams({
      response_type,
      client_id,
      state: nonce,
      redirect_uri: config.redirect_uri,
      scope: config.scope
    });
    if (response_type === "code") {
      const verifier = randomString(VERIFIER_LENGTH);
      environment.session_storage.set(storageKey("code_verifier"), verifier);
      const challenge = base64Url(sha256(new TextEncoder().encode(verifier)));
      params.set("code_challenge_method", "S256");
      params.set("code_challenge", challenge);
    }
    const base = serverUrl(config.authorize_path ?? AUTHORIZE_PATH_DEFAULT);
    return `${base}${base.includes("?") ? "&" : "?"}${params.toString()}`;
  }
  function loginUrl(current3) {
    const back = encodeURIComponent(environment.currentUrl());
    return serverUrl(current3.login_url.replace("{{url}}", back));
  }
  function serverUrl(path) {
    if (/^https?:\/\//.test(path))
      return path;
    return `${config.base_url}${path}`;
  }
  function redirect(url) {
    if (!isWebUrl(url, environment.currentUrl()))
      return failed({ kind: "navigation_refused" });
    log.info("redirecting", { path: new URL(url, "http://base.invalid").pathname });
    setStatus({ kind: "redirecting", url });
    environment.navigate(url);
    return { ok: false, error: { kind: "redirecting", url } };
  }
  function signedIn(credential) {
    assert(credential.kind !== "none", "a session credential is a token or a key");
    if (status.kind !== "signed_in")
      log.info("signed in", { credential: credential.kind });
    setStatus({ kind: "signed_in", credential: credential.kind });
    return { ok: true, value: credential };
  }
  function failed(error) {
    log.warn("not signed in", { error });
    if (status.kind !== "redirecting")
      setStatus({ kind: "signed_out", error });
    return { ok: false, error };
  }
  async function handleRedirect(url) {
    const params = urlParams(url);
    if (!hasLoginParams(params))
      return { ok: false, error: { kind: "redirect_invalid" } };
    log.debug("got a deep link");
    environment.session_storage.set(DEEP_LINK_KEY, JSON.stringify(Object.fromEntries(params)));
    if (authorizing !== null) {
      const link_epoch = epoch;
      const running = await authorizing;
      if (epoch !== link_epoch) {
        environment.session_storage.remove(DEEP_LINK_KEY);
        return { ok: false, error: { kind: "logged_out" } };
      }
      if (environment.session_storage.get(DEEP_LINK_KEY) === null)
        return running;
    }
    if (status.kind === "redirecting")
      setStatus({ kind: "loading" });
    halted = null;
    return authorize();
  }
  function onForeground() {
    if (foreground_check !== null)
      return;
    foreground_check = checkAfterForeground().finally(() => {
      foreground_check = null;
    });
  }
  async function checkAfterForeground() {
    if (authority === null)
      return;
    if (authority.session)
      return;
    if (currentCredential() !== null)
      return;
    log.debug("the application is in the foreground without a session");
    if (status.kind === "redirecting")
      setStatus({ kind: "loading" });
    const has_new_credentials = environment.session_storage.get(DEEP_LINK_KEY) !== null || pending_code !== null || readTokens().refresh_token !== null;
    if (!has_new_credentials) {
      const check_epoch = epoch;
      const reloaded = await loadAuthority();
      if (!reloaded.ok)
        return;
      if (epoch !== check_epoch)
        return;
    }
    await authorize();
  }
  function useToken(token2, expires_at_ms) {
    assert(token2.length > 0, "the token is not empty");
    const expires_at = expires_at_ms ?? environment.now() + TOKEN_LIFETIME_DEFAULT_SECONDS * 1e3;
    writeTokens(__spreadProps(__spreadValues({}, readTokens()), { access_token: token2, expires_at_ms: expires_at }));
    halted = null;
    log.info("using a token of the application");
    setStatus({ kind: "signed_in", credential: "bearer" });
  }
  function useRefreshToken(refresh_token) {
    assert(refresh_token.length > 0, "the refresh token is not empty");
    writeTokens(__spreadProps(__spreadValues({}, readTokens()), { refresh_token }));
    halted = null;
    log.info("using a refresh token of the application");
  }
  function useApiKey(key, options = {}) {
    assert(key.length > 0, "the API key is not empty");
    storage.set(storageKey("x-api-key"), key);
    storage.set(storageKey("trusted"), String(options.trusted ?? true));
    halted = null;
    log.info("using an API key of the application");
    setStatus({ kind: "signed_in", credential: "api_key" });
  }
  function invalidateToken() {
    log.debug("invalidating the access token");
    writeTokens(__spreadProps(__spreadValues({}, readTokens()), { access_token: null, expires_at_ms: 0 }));
  }
  async function logout() {
    const url = authority === null ? serverUrl(LOGOUT_PATH_DEFAULT) : serverUrl(authority.logout_url);
    log.info("logging out");
    epoch += 1;
    logouts_pending += 1;
    const page = environment.currentUrl();
    const same_origin = URL.canParse(url, page) && new URL(url, page).origin === new URL(serverUrl("/"), page).origin;
    const request_headers = same_origin ? __spreadValues({}, headers) : {};
    const access_token = readTokens().access_token;
    if (access_token !== null && same_origin) {
      request_headers["Authorization"] = `Bearer ${access_token}`;
    }
    const fetched = await fetchBody(environment.fetch, url, { method: "GET", headers: request_headers, redirect: "manual" }, limits);
    const location = fetched.ok ? fetched.value.headers.get("location") : null;
    clearCredentials();
    logouts_pending -= 1;
    setStatus({ kind: "signed_out", error: null });
    const target = location ?? url;
    if (isWebUrl(target, page))
      environment.navigate(target);
    else
      log.warn("the logout page is not an http or https URL");
  }
  function clearCredentials() {
    for (const store of [storage, environment.session_storage]) {
      for (const key of store.keys()) {
        if (key.includes(client_id))
          store.remove(key);
      }
    }
    environment.session_storage.remove(DEEP_LINK_KEY);
    memory_tokens = NO_TOKENS;
    pending_code = null;
  }
  function isTrusted() {
    return deviceValue("trust") === "true" || deviceValue("trusted") === "true";
  }
  function isFixedDevice() {
    const api_key = deviceValue("x-api-key");
    if (config.ignore_api_key !== true && api_key !== null && api_key.length > 0)
      return true;
    return deviceValue("fixed_device") === "true";
  }
  function deviceValue(name) {
    return storage.get(storageKey(name)) ?? storage.get(name);
  }
  function readTokens() {
    if (!isTrusted())
      return memory_tokens;
    return {
      access_token: storage.get(storageKey("access_token")),
      refresh_token: storage.get(storageKey("refresh_token")),
      expires_at_ms: parseStoredMs(storage.get(storageKey("expires_at")))
    };
  }
  function writeTokens(tokens) {
    if (!isTrusted()) {
      memory_tokens = tokens;
      return;
    }
    writeStored(storageKey("access_token"), tokens.access_token);
    writeStored(storageKey("refresh_token"), tokens.refresh_token);
    writeStored(storageKey("expires_at"), String(tokens.expires_at_ms));
  }
  function writeStored(key, value) {
    if (value === null) {
      storage.remove(key);
    } else {
      storage.set(key, value);
    }
  }
  function setStatus(next) {
    status = next;
    for (const listener of [...listeners])
      listener(next);
  }
  function subscribe(listener) {
    assert(listeners.size < LISTENERS_MAX, "the session has less than LISTENERS_MAX listeners");
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }
  function randomString(length) {
    const limit = 256 - 256 % NONCE_ALPHABET.length;
    const bytes = new Uint8Array(length * 2);
    let text = "";
    for (let round = 0; round < RANDOM_ROUNDS_MAX && text.length < length; round += 1) {
      environment.randomValues(bytes);
      for (const byte of bytes) {
        if (byte < limit && text.length < length) {
          text += NONCE_ALPHABET.charAt(byte % NONCE_ALPHABET.length);
        }
      }
    }
    assert(text.length === length, "the random source gives enough values");
    return text;
  }
}
function isWebUrl(url, page) {
  if (!URL.canParse(url, page))
    return false;
  const protocol = new URL(url, page).protocol;
  return protocol === "http:" || protocol === "https:";
}
function urlParams(url) {
  const params = /* @__PURE__ */ new Map();
  if (url.length > URL_LENGTH_MAX)
    return params;
  if (!URL.canParse(url))
    return params;
  const parsed = new URL(url);
  const hash = parsed.hash.slice(1);
  const query_start = hash.indexOf("?");
  const hash_main = query_start >= 0 ? hash.slice(0, query_start) : hash;
  const hash_query = query_start >= 0 ? hash.slice(query_start + 1) : "";
  for (const part of [hash_main, hash_query, parsed.search.slice(1)]) {
    if (!part.includes("="))
      continue;
    for (const [key, value] of new URLSearchParams(part)) {
      if (value.length > 0)
        params.set(key, value);
    }
  }
  return params;
}
function withoutParams(url, names) {
  if (!URL.canParse(url))
    return url;
  const parsed = new URL(url);
  parsed.search = removeNames(parsed.search.slice(1), names);
  const hash = parsed.hash.slice(1);
  const query_start = hash.indexOf("?");
  let hash_main = query_start >= 0 ? hash.slice(0, query_start) : hash;
  const hash_query = removeNames(query_start >= 0 ? hash.slice(query_start + 1) : "", names);
  if (hash_main.includes("="))
    hash_main = removeNames(hash_main, names);
  parsed.hash = hash_query.length > 0 ? `${hash_main}?${hash_query}` : hash_main;
  return parsed.toString();
}
function removeNames(text, names) {
  if (text.length === 0)
    return "";
  const params = new URLSearchParams(text);
  for (const name of names)
    params.delete(name);
  return params.toString();
}
function hasLoginParams(params) {
  if (params.has("code") || params.has("access_token") || params.has("refresh_token")) {
    return true;
  }
  return params.has("error") && params.has("state");
}
function isRefusal(error) {
  if (error.kind !== "token_rejected")
    return false;
  if (error.status === 408 || error.status === 429)
    return false;
  return error.status >= 400 && error.status < 500;
}
function sameCredential(a, b) {
  if (a.kind === "bearer" && b.kind === "bearer")
    return a.token === b.token;
  if (a.kind === "api_key" && b.kind === "api_key")
    return a.key === b.key;
  return a.kind === b.kind;
}
function errorMessage(body) {
  if (!isRecord(body))
    return null;
  const description = body["error_description"];
  if (typeof description === "string")
    return description;
  const error = body["error"];
  return typeof error === "string" ? error : null;
}
function parseSeconds(text) {
  if (text === null)
    return null;
  const seconds = Number(text);
  if (!Number.isSafeInteger(seconds))
    return null;
  if (seconds < 0)
    return null;
  return seconds;
}
function parseStoredMs(text) {
  if (text === null)
    return 0;
  const milliseconds = Number(text);
  return Number.isSafeInteger(milliseconds) ? milliseconds : 0;
}

export {
  createAuthSession,
  ApiKey,
  Authority,
  Broker,
  Trigger,
  Zone,
  Module,
  Group,
  SignagePlugin,
  ControlSystem,
  DoorkeeperApplication,
  Driver,
  Edge,
  EdgeCreateBody,
  LdapAuthentication,
  MetadataInterface,
  OauthAuthentication,
  Repository,
  SamlAuthentication,
  Settings,
  SignageAiProvidersProviderParams,
  Storage,
  SystemTriggersUpdateParams,
  UserAdminMetadataResponse,
  api_keys_exports,
  brokers_exports,
  build_monitor_exports,
  cluster_exports,
  domains_exports,
  drivers_exports,
  edges_exports,
  groups_exports,
  groups_users_exports,
  groups_zones_exports,
  ldap_authentications_exports,
  metadata_exports,
  modules_exports,
  oauth_applications_exports,
  oauth_authentications_exports,
  playlist_exports,
  repositories_exports,
  root_exports,
  saml_authentications_exports,
  schema_exports,
  settings_exports,
  signage_ai_exports,
  signage_ai_providers_exports,
  signage_plugins_exports,
  storages_exports,
  system_triggers_exports,
  systems_exports,
  tenant_consent_exports,
  triggers_exports,
  uploads_exports,
  users_exports,
  zones_exports
};
//# debugId=21101513-75de-5ca9-8991-f5742b497d43
//# sourceMappingURL=chunk-PRQVSGD2.js.map
