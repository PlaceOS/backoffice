import {
  array,
  boolean,
  call,
  integer,
  json,
  literal,
  nullable,
  number,
  object,
  operation,
  parameters,
  record,
  string
} from "./chunk-4MDDUS4W.js";
import {
  __export
} from "./chunk-RQBZITXC.js";

// node_modules/@placeos/ts-client/dist/generated/staff/operations/place.js
var place_exports = {};
__export(place_exports, {
  query: () => query
});

// node_modules/@placeos/ts-client/dist/generated/staff/schemas.js
var Int64Schema = /* @__PURE__ */ integer();
var Int64 = Int64Schema;
var Office365OutlookGeoCoordinatesSchema = /* @__PURE__ */ object({
  altitudeAccuracy: /* @__PURE__ */ nullable(/* @__PURE__ */ number()),
  accuracy: /* @__PURE__ */ nullable(/* @__PURE__ */ number()),
  altitude: /* @__PURE__ */ nullable(/* @__PURE__ */ number()),
  latitude: /* @__PURE__ */ nullable(/* @__PURE__ */ number()),
  longitude: /* @__PURE__ */ nullable(/* @__PURE__ */ number())
});
var Office365OutlookGeoCoordinates = Office365OutlookGeoCoordinatesSchema;
var Office365PhysicalAddressSchema = /* @__PURE__ */ object({
  city: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  state: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  street: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  countryOrRegion: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  postalCode: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
});
var Office365PhysicalAddress = Office365PhysicalAddressSchema;
var Office365RoomBookingTypeSchema = /* @__PURE__ */ literal(["reserved", "standard"]);
var Office365RoomBookingType = Office365RoomBookingTypeSchema;
var Office365RoomSchema = /* @__PURE__ */ object({
  address: /* @__PURE__ */ nullable(Office365PhysicalAddress),
  displayName: /* @__PURE__ */ string(),
  geoCoordinates: /* @__PURE__ */ nullable(Office365OutlookGeoCoordinates),
  id: /* @__PURE__ */ string(),
  phone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  audioDeviceName: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  bookingType: /* @__PURE__ */ nullable(Office365RoomBookingType),
  building: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  capacity: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  displayDeviceName: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  emailAddress: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  floorLabel: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  floorNumber: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  isWheelChairAccessible: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  label: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  nickname: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  tags: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  videoDeviceName: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, ["displayName", "id"]);
var Office365Room = Office365RoomSchema;
var PlaceCalendarGroupSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ string(),
  name: /* @__PURE__ */ string(),
  email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, ["id", "name"]);
var PlaceCalendarGroup = PlaceCalendarGroupSchema;
var PlaceCalendarMemberSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ string(),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  email: /* @__PURE__ */ string(),
  phone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  username: /* @__PURE__ */ string(),
  suspended: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  unmapped: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ json()))
}, ["id", "email", "username"]);
var PlaceCalendarMember = PlaceCalendarMemberSchema;
var TenantOutlookConfigSchema = /* @__PURE__ */ object({
  app_id: /* @__PURE__ */ string(),
  base_path: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  app_domain: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  app_resource: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  source_location: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  version: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, ["app_id"]);
var TenantOutlookConfig = TenantOutlookConfigSchema;
var TenantResponderSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  domain: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  email_domain: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  platform: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  delegated: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  service_account: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  credentials: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  booking_limits: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  booking_range: /* @__PURE__ */ nullable(
    /* @__PURE__ */ record(/* @__PURE__ */ integer("UInt32"))
  ),
  booking_period: /* @__PURE__ */ nullable(
    /* @__PURE__ */ record(/* @__PURE__ */ integer("UInt32"))
  ),
  outlook_config: /* @__PURE__ */ nullable(TenantOutlookConfig),
  early_checkin: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
});
var TenantResponder = TenantResponderSchema;

// node_modules/@placeos/ts-client/dist/generated/staff/operations/place.js
function query(input = {}, options) {
  return call(QUERY, input, options);
}
var QUERY = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/place",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /**
     * optional comma separated list of room properties to return (maps to the graph `$select`
     * parameter)
     */
    match: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** optional filter using Azure AD filter syntax (maps to the graph `$filter` parameter) */
    filter: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * optional maximum number of rooms to return (maps to the graph `$top` parameter, graph
     * defaults to 100)
     */
    top: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
    /** optional number of rooms to skip, for paging (maps to the graph `$skip` parameter) */
    skip: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32"))
  }),
  body: null,
  response: /* @__PURE__ */ array(Office365Room),
  name: "staff.place.query"
});

// node_modules/@placeos/ts-client/dist/generated/staff/operations/tenants.js
var tenants_exports = {};
__export(tenants_exports, {
  create: () => create,
  currentEarlyCheckin: () => currentEarlyCheckin,
  currentLimits: () => currentLimits,
  destroy: () => destroy,
  query: () => query2,
  showEarlyCheckin: () => showEarlyCheckin,
  showLimits: () => showLimits,
  update: () => update,
  updateEarlyCheckin: () => updateEarlyCheckin,
  updateLimits: () => updateLimits
});
function create(input, options) {
  return call(CREATE, input, options);
}
var CREATE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/tenants",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: TenantResponder,
  response: TenantResponder,
  name: "staff.tenants.create"
});
function currentEarlyCheckin(input = {}, options) {
  return call(CURRENT_EARLY_CHECKIN, input, options);
}
var CURRENT_EARLY_CHECKIN = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/tenants/current_early_checkin",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: Int64,
  name: "staff.tenants.currentEarlyCheckin"
});
function currentLimits(input = {}, options) {
  return call(CURRENT_LIMITS, input, options);
}
var CURRENT_LIMITS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/tenants/current_limits",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: /* @__PURE__ */ record(/* @__PURE__ */ integer("Int32")),
  name: "staff.tenants.currentLimits"
});
function destroy(input, options) {
  return call(DESTROY, input, options);
}
var DESTROY = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/staff/v1/tenants/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer()
  }, ["id"]),
  body: null,
  response: "text",
  name: "staff.tenants.destroy"
});
function query2(input = {}, options) {
  return call(QUERY2, input, options);
}
var QUERY2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/tenants",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: /* @__PURE__ */ array(TenantResponder),
  name: "staff.tenants.query"
});
function showEarlyCheckin(input, options) {
  return call(SHOW_EARLY_CHECKIN, input, options);
}
var SHOW_EARLY_CHECKIN = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/tenants/{id}/early_checkin",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer()
  }, ["id"]),
  body: null,
  response: Int64,
  name: "staff.tenants.showEarlyCheckin"
});
function showLimits(input, options) {
  return call(SHOW_LIMITS, input, options);
}
var SHOW_LIMITS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/tenants/{id}/limits",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ record(/* @__PURE__ */ integer("Int32")),
  name: "staff.tenants.showLimits"
});
function update(input, options) {
  return call(UPDATE, input, options);
}
var UPDATE = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/staff/v1/tenants/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer()
  }, ["id"]),
  body: TenantResponder,
  response: TenantResponder,
  name: "staff.tenants.update"
});
function updateEarlyCheckin(input, options) {
  return call(UPDATE_EARLY_CHECKIN, input, options);
}
var UPDATE_EARLY_CHECKIN = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/tenants/{id}/early_checkin",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer()
  }, ["id"]),
  body: Int64,
  response: Int64,
  name: "staff.tenants.updateEarlyCheckin"
});
function updateLimits(input, options) {
  return call(UPDATE_LIMITS, input, options);
}
var UPDATE_LIMITS = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/tenants/{id}/limits",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer()
  }, ["id"]),
  body: /* @__PURE__ */ record(/* @__PURE__ */ integer("Int32")),
  response: /* @__PURE__ */ record(/* @__PURE__ */ integer("Int32")),
  name: "staff.tenants.updateLimits"
});

// node_modules/@placeos/ts-client/dist/generated/staff/operations/groups.js
var groups_exports = {};
__export(groups_exports, {
  members: () => members,
  query: () => query3,
  show: () => show
});
function members(input, options) {
  return call(MEMBERS, input, options);
}
var MEMBERS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/groups/{id}/members",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the directory group id */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(PlaceCalendarMember),
  name: "staff.groups.members"
});
function query3(input = {}, options) {
  return call(QUERY3, input, options);
}
var QUERY3 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/groups",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** optional search query, matches groups whose display name starts with this text */
    q: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(PlaceCalendarGroup),
  name: "staff.groups.query"
});
function show(input, options) {
  return call(SHOW, input, options);
}
var SHOW = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/groups/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the directory group id */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: PlaceCalendarGroup,
  name: "staff.groups.show"
});

export {
  TenantResponder,
  groups_exports,
  place_exports,
  tenants_exports
};
//# debugId=1175f3f5-a449-5798-8b81-1c91fa0507d5
//# sourceMappingURL=chunk-KP6LUFKO.js.map
