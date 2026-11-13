import {
  Hp,
  Le,
  Mr,
  Os,
  ho,
  lo
} from "./chunk-LCM7Z6QA.js";
import {
  signal
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/mocks/common.mock.ts
var DOMAIN = "place.tech";
var API = "/api/engine/v2";
var STAFF_API = "/api/staff/v1";
var ENDPOINT_SIGNALS = {};
function createMockChangeSignal(initial_value) {
  const state = signal(initial_value);
  const listeners = /* @__PURE__ */ new Set();
  const original_set = state.set.bind(state);
  const original_update = state.update.bind(state);
  const emit = () => {
    const value = state();
    for (const listener of listeners) listener(value);
  };
  state.set = (value) => {
    original_set(value);
    emit();
  };
  state.update = (update_fn) => {
    original_update(update_fn);
    emit();
  };
  state.subscribe = (next) => {
    listeners.add(next);
    next(state());
    return { unsubscribe: () => listeners.delete(next) };
  };
  state.dispose = () => listeners.clear();
  return state;
}
var STORAGE_PREFIX = "PLACEOS.mocks.";
function loadFromSession(key, fallback) {
  try {
    const stored = sessionStorage.getItem(`${STORAGE_PREFIX}${key}`);
    if (stored) return JSON.parse(stored);
  } catch (e) {
    console.warn(`Failed to load mock data from session: ${key}`, e);
  }
  return fallback;
}
function saveToSession(key, data) {
  try {
    sessionStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(data));
  } catch (e) {
    console.warn(`Failed to save mock data to session: ${key}`, e);
  }
}
function createMockStore(key, seed) {
  const store = createMockChangeSignal(loadFromSession(key, seed));
  store.subscribe((value) => saveToSession(key, value));
  return store;
}
var AVAILABLE_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~".split("");
function generateID(length = 12, chars = AVAILABLE_CHARS) {
  const values = crypto.getRandomValues(new Uint32Array(length));
  return Array.from(values, (value) => chars[value % chars.length]).join("");
}
function now() {
  return Math.floor(Date.now() / 1e3);
}
function notFound(name = "Item") {
  throw { status: 404, message: `${name} not found` };
}
function nameFilter(item, q) {
  if (!q?.q) return true;
  return `${item.name || ""}`.toLowerCase().includes(`${q.q}`.toLowerCase());
}
function listenToHandlerChanges(endpoint) {
  return ENDPOINT_SIGNALS[endpoint];
}
function endpointData(endpoint) {
  return ENDPOINT_SIGNALS[endpoint]?.() || [];
}
function updateItem(endpoint, id, changes) {
  const store = listenToHandlerChanges(endpoint);
  const list = store?.() || [];
  const index = list.findIndex((item2) => item2.id === id);
  if (index < 0) return notFound();
  const item = __spreadProps(__spreadValues(__spreadValues({}, list[index]), changes), { updated_at: now() });
  store.set(list.map((old, idx) => idx === index ? item : old));
  return item;
}
function endpointToStorageKey(endpoint) {
  return endpoint.replace(/\//g, "_").replace(/^_/, "");
}
function generateBasicHandlers(endpoint, data, {
  filter = () => true,
  prepare = (item) => item,
  id_prefix = "item-"
} = {}) {
  ENDPOINT_SIGNALS[endpoint]?.dispose();
  const store = createMockStore(endpointToStorageKey(endpoint), data);
  ENDPOINT_SIGNALS[endpoint] = store;
  const list = () => store();
  const indexOf = (event) => {
    const index = list().findIndex((i) => i.id === event.route_params.id);
    return index >= 0 ? index : notFound();
  };
  lo({
    path: endpoint,
    method: "GET",
    callback: (event) => [...list()].sort(
      (a, b) => `${a.name || ""}`.localeCompare(`${b.name || ""}`)
    ).filter((item) => filter(item, event.query_params))
  });
  lo({
    path: `${endpoint}/:id`,
    method: "GET",
    callback: (event) => list()[indexOf(event)]
  });
  lo({
    path: endpoint,
    method: "POST",
    callback: (event) => {
      const item = prepare(__spreadProps(__spreadValues({}, event.body), {
        id: `${id_prefix}${generateID()}`,
        created_at: now(),
        updated_at: now()
      }));
      store.set([...store(), item]);
      return item;
    }
  });
  for (const method of ["PATCH", "PUT"]) {
    lo({
      path: `${endpoint}/:id`,
      method,
      callback: (event) => {
        const index = indexOf(event);
        const item = prepare(__spreadProps(__spreadValues(__spreadValues({}, list()[index]), event.body), {
          id: event.route_params.id,
          updated_at: now()
        }));
        store.set(
          list().map((old, idx) => idx === index ? item : old)
        );
        return item;
      }
    });
  }
  lo({
    path: `${endpoint}/:id`,
    method: "DELETE",
    callback: (event) => {
      const index = indexOf(event);
      const item = list()[index];
      store.set(list().filter((_, idx) => idx !== index));
      return item;
    }
  });
  return store;
}

// src/app/mocks/backend/domains.mock.ts
var AUTHORITY_ID = "mock-authority";
var DOMAIN_DATA = [
  {
    id: AUTHORITY_ID,
    name: "PlaceOS Global",
    domain: DOMAIN,
    email_domains: [DOMAIN]
  }
];
generateBasicHandlers(`${API}/domains`, DOMAIN_DATA, {
  filter: nameFilter,
  id_prefix: "authority-"
});
lo({
  path: `${API}/admin_consent/:id`,
  method: "GET",
  callback: () => ({ url: "about:blank" })
});

// src/app/mocks/data/drivers.ts
var DRIVERS = [
  {
    name: "ACA Device Probe",
    role: 1,
    description: "Passthrough / comms logger for probing device protocols",
    default: null,
    class_name: "::Aca::DeviceProbe",
    module_name: "Probe",
    settings: { hex: false },
    created_at: 1519091316,
    ignore_connected: false,
    id: "dep-WaXdMkUcHg"
  },
  {
    name: "ACA Meeting Room Logic",
    role: 99,
    description: null,
    default: null,
    class_name: "::Aca::MeetingRoom",
    module_name: "System",
    settings: { joiner_driver: "System" },
    created_at: 1494900906,
    ignore_connected: false,
    id: "dep-KvMtm2DJm8"
  },
  {
    name: "ACA Screen Logic Manual",
    role: 99,
    description: null,
    default: null,
    class_name: "::Aca::ScreenLogicManual",
    module_name: "Screen Logic (for Doors)",
    settings: {},
    created_at: 1548202439,
    ignore_connected: false,
    id: "dep-ke73zkMifp"
  },
  {
    name: "AMX Acendo Vibe",
    role: 1,
    description: null,
    default: 4999,
    class_name: "::Amx::AcendoVibe",
    module_name: "Mixer",
    settings: {},
    created_at: 1519795334,
    ignore_connected: false,
    id: "dep-Wwdl4xCzvS"
  },
  {
    name: "Exterity Avedia Player (R92xx)",
    role: 1,
    description: null,
    default: 23,
    class_name: "::Exterity::AvediaPlayer::R92xx",
    module_name: "IPTV",
    settings: {},
    created_at: 1510209314,
    ignore_connected: false,
    id: "dep-SHoK4QWyKY"
  },
  {
    name: "Exterity Avedia Player (R93xx)",
    role: 1,
    description: null,
    default: 23,
    class_name: "::Exterity::AvediaPlayer::R93xx",
    module_name: "IPTV",
    settings: {},
    created_at: 1510209261,
    ignore_connected: false,
    id: "dep-SHoD1yqjUE"
  },
  {
    name: "Extron Switcher DTP",
    role: 1,
    description: null,
    default: 23,
    class_name: "::Extron::Switcher::Dtp",
    module_name: "Switcher",
    settings: {},
    created_at: 1529566728,
    ignore_connected: false,
    id: "dep-beHIInWMV5"
  },
  {
    name: "GlobalCache IO Gateway",
    role: 1,
    description: null,
    default: 4998,
    class_name: "::GlobalCache::Gc100",
    module_name: "DigitalIO",
    settings: {},
    created_at: 1509941816,
    ignore_connected: false,
    id: "dep-S9OfntF_TR"
  },
  {
    name: "KNX BAOS Lighting",
    role: 1,
    description: null,
    default: 12004,
    class_name: "::Knx::BaosLighting",
    module_name: "Lighting",
    settings: {},
    created_at: 1519367963,
    ignore_connected: false,
    id: "dep-WjCyo9xO8H"
  },
  {
    name: "Office365 Room Bookings",
    role: 99,
    description: null,
    default: null,
    class_name: "::Aca::OfficeBooking",
    module_name: "Bookings",
    settings: {
      booking_hide_title: true,
      update_every: "30s",
      card_readers: ["reader_id_1", "reader_id_2"],
      ldap_creds: {
        host: "ldap.org.com",
        port: 636,
        encryption: {
          method: "simple_tls",
          tls_options: { verify_mode: 0 }
        },
        auth: {
          method: "simple",
          username: "service account",
          password: "password"
        }
      },
      tree_base: "ou=User,ou=Accounts,dc=org,dc=com",
      ews_creds: [
        "https://company.com/EWS/Exchange.asmx",
        "service account",
        "password",
        { http_opts: { ssl_verify_mode: 0 } }
      ],
      ews_room: "room@email.address",
      office_client_id: "",
      office_secret: "",
      office_organiser_location: "attendees",
      office_scope: "https://graph.microsoft.com/.default",
      office_options: {
        site: "https://login.microsoftonline.com",
        token_url: "/place.tech/oauth2/v2.0/token"
      },
      office_token_url: "/place.tech/oauth2/v2.0/token",
      office_site: "https://login.microsoftonline.com",
      touch_enabled: false
    },
    created_at: 1498005404,
    ignore_connected: false,
    id: "dep-MOoiqDHI3E"
  },
  {
    name: "Panasonic LCD Protocol 2",
    role: 1,
    description: null,
    default: 1024,
    class_name: "::Panasonic::LCD::Protocol2",
    module_name: "Display",
    settings: { username: "admin1", password: "panasonic" },
    created_at: 1541653335,
    ignore_connected: false,
    id: "dep-hTbe3LWKzB"
  },
  {
    name: "Philips SICP Display",
    role: 1,
    description: null,
    default: 5e3,
    class_name: "::Philips::Display::SicpProtocol",
    module_name: "Display",
    settings: {},
    created_at: 1510209629,
    ignore_connected: false,
    id: "dep-SHoznCS-MR"
  },
  {
    name: "QSC Audio DSP (remote protocol)",
    role: 1,
    description: null,
    default: 1710,
    class_name: "::Qsc::QSysRemote",
    module_name: "Mixer",
    settings: {},
    created_at: 1548204050,
    ignore_connected: false,
    id: "dep-keAMXW0yae"
  },
  {
    name: "QSC Audio DSP External Control",
    role: 1,
    description: null,
    default: 1702,
    class_name: "::Qsc::QSysControl",
    module_name: "Mixer",
    settings: {},
    created_at: 1529567021,
    ignore_connected: false,
    id: "dep-beHv9C413d"
  },
  {
    name: "QSC PTZ Camera Proxy",
    role: 99,
    description: null,
    default: null,
    class_name: "::Qsc::QSysCamera",
    module_name: "Camera",
    settings: {},
    created_at: 1542607423,
    ignore_connected: false,
    id: "dep-hxXtCor9su"
  },
  {
    name: "Samsung MD & DM Series LCD",
    role: 1,
    description: "For DM displays configure the following options:\n\n1. Network Standby = OFF (reduces the chance of a display crashing)\n2. Set Auto Standby = OFF\n3. Set Eco Solution, Auto Off = OFF\n\nHard Power off displays each night and wake on lan them in the morning.\n\n\ndefault port changed from 1515 to 4999 as they are all on globalcache itachs",
    default: "4999",
    class_name: "::Samsung::Displays::MdSeries",
    module_name: "Display",
    settings: { display_id: 0, volume_min: 50 },
    created_at: 1509504361,
    ignore_connected: false,
    id: "dep-RygISIbluK"
  },
  {
    name: "Slack Concierge Connector",
    role: 99,
    description: null,
    default: null,
    class_name: "::Aca::SlackConcierge",
    module_name: "Slack",
    settings: {
      building: "barangaroo",
      channel: "CEXEVA8Q7",
      slack_api_token: ""
    },
    created_at: 1503273843,
    ignore_connected: false,
    id: "dep-Oy7km26GOB"
  },
  {
    name: "Slack Connector",
    role: 99,
    description: null,
    default: null,
    class_name: "::Aca::Slack",
    module_name: "Slack",
    settings: {
      building: "barangaroo",
      channel: "CEXEVA8Q7",
      slack_api_token: ""
    },
    created_at: 1502078764,
    ignore_connected: false,
    id: "dep-OMdvwTiPU4"
  }
];

// src/app/mocks/backend/drivers.mock.ts
var FILTER_FN = (item, q) => {
  if (!q || Object.keys(q).length <= 0) {
    return true;
  }
  let match = true;
  if (q.q) {
    match = match && `${item.name || ""}`.toLowerCase().indexOf((q.q || "").toLowerCase()) >= 0;
  }
  if (q.repository_id) {
    match = match && item.repository_id === q.repository_id;
  }
  return match;
};
generateBasicHandlers(`${API}/drivers`, DRIVERS, {
  filter: FILTER_FN,
  id_prefix: "driver-"
});
lo({
  path: `${API}/drivers/:id/compiled`,
  metadata: DRIVERS,
  method: "GET",
  callback: (_event) => true
});
lo({
  path: `${API}/drivers/:id/recompile`,
  metadata: [],
  method: "POST",
  callback: (event) => {
    const driver = endpointData(`${API}/drivers`).find(
      (d) => d.id === event.route_params.id
    );
    if (driver) {
      return __spreadProps(__spreadValues({}, driver), { compilation_output: "Compilation successful" });
    }
    throw { status: 404, message: "Driver not found" };
  }
});
lo({
  path: `${API}/drivers/:id/reload`,
  metadata: [],
  method: "POST",
  callback: (event) => {
    const driver = endpointData(`${API}/drivers`).find(
      (d) => d.id === event.route_params.id
    );
    if (driver) {
      return driver;
    }
    throw { status: 404, message: "Driver not found" };
  }
});
lo({
  path: `${API}/drivers/:id/readme`,
  metadata: [],
  method: "GET",
  callback: (_event) => {
    return "# Mock Driver\n\nThis is a mock driver README for testing purposes.\n\n## Features\n\n- Feature 1\n- Feature 2\n\n## Usage\n\nRefer to the driver documentation.";
  }
});
lo({
  path: `${API}/drivers/:id/settings`,
  metadata: [],
  method: "GET",
  callback: (_event) => {
    return [];
  }
});

// src/app/mocks/data/ui-mocks.ts
var UI_MOCKS = {
  zones: [
    {
      id: "zone-org",
      name: "PlaceOS Global",
      display_name: "PlaceOS Global",
      description: "Global headquarters and innovation centers for PlaceOS technology solutions",
      tags: ["org", "headquarters", "technology"],
      count: 2,
      capacity: 4500,
      triggers: [],
      settings: {
        timezone: "Australia/Sydney",
        booking_rules: {
          advance_booking_days: 90,
          max_booking_duration: 480,
          auto_release_minutes: 15
        },
        work_hours: {
          start: "07:00",
          end: "19:00",
          days: [1, 2, 3, 4, 5]
        },
        features: [
          "wifi",
          "parking",
          "accessibility",
          "catering",
          "security"
        ]
      }
    },
    {
      id: "region-sydney",
      name: "Sydney Region",
      display_name: "Sydney Metropolitan Region",
      description: "Primary business region covering Sydney and surrounding areas",
      tags: ["region", "sydney", "metropolitan"],
      parent_id: "zone-org",
      count: 3,
      capacity: 2700,
      triggers: [],
      settings: {
        timezone: "Australia/Sydney",
        region_code: "SYD",
        business_hours: {
          start: "07:00",
          end: "19:00",
          timezone: "Australia/Sydney"
        }
      }
    },
    {
      id: "region-melbourne",
      name: "Melbourne Region",
      display_name: "Melbourne Metropolitan Region",
      description: "Secondary business region covering Melbourne and Victoria",
      tags: ["region", "melbourne", "metropolitan"],
      parent_id: "zone-org",
      count: 2,
      capacity: 1800,
      triggers: [],
      settings: {
        timezone: "Australia/Melbourne",
        region_code: "MEL",
        business_hours: {
          start: "07:30",
          end: "19:30",
          timezone: "Australia/Melbourne"
        }
      }
    },
    {
      id: "bld-01",
      name: "Innovation Hub",
      display_name: "Innovation Hub",
      description: "Modern workspace focused on collaboration and innovation with state-of-the-art facilities",
      tags: ["building", "innovation", "modern", "headquarters"],
      parent_id: "region-sydney",
      count: 4,
      capacity: 1200,
      location: "-33.8473,151.0647",
      triggers: [],
      settings: {}
    },
    {
      id: "bld-02",
      name: "Executive Center",
      display_name: "Executive Center",
      description: "Premium business center with executive suites, boardrooms, and high-end meeting facilities",
      tags: ["building", "executive", "premium", "business"],
      parent_id: "region-sydney",
      count: 5,
      capacity: 800,
      location: "-33.8688,151.2093",
      triggers: [],
      settings: {}
    },
    {
      id: "bld-03",
      name: "Creative Campus",
      display_name: "Creative Campus",
      description: "Flexible workspace designed for creative teams with open collaboration areas and maker spaces",
      tags: ["building", "creative", "flexible", "collaboration"],
      parent_id: "region-sydney",
      count: 3,
      capacity: 500,
      location: "-33.8688,151.1957",
      triggers: [],
      settings: {}
    },
    {
      id: "bld-04",
      name: "Melbourne Tower",
      display_name: "Melbourne Tower",
      description: "High-rise office building in Melbourne CBD with premium corporate facilities",
      tags: ["building", "corporate", "high-rise", "premium"],
      parent_id: "region-melbourne",
      count: 6,
      capacity: 1e3,
      location: "-37.8136,144.9631",
      triggers: [],
      settings: {}
    },
    {
      id: "bld-05",
      name: "Melbourne Innovation Lab",
      display_name: "Melbourne Innovation Lab",
      description: "State-of-the-art research and development facility with collaborative workspaces",
      tags: ["building", "innovation", "research", "lab"],
      parent_id: "region-melbourne",
      count: 3,
      capacity: 800,
      location: "-37.8103,144.9717",
      triggers: [],
      settings: {}
    },
    {
      id: "bld-01_lvl-G",
      name: "Ground Floor",
      display_name: "Ground Floor",
      description: "Ground Floor of Innovation Hub featuring reception, lobby, cafe, security",
      tags: ["level", "lobby", "innovation"],
      parent_id: "bld-01",
      code: "INN-G",
      type: "lobby",
      count: 10,
      capacity: 50,
      map_id: "assets/maps/level_G.svg",
      location: "-33.8473,151.0647",
      triggers: [],
      settings: {
        booking_enabled: true,
        public_access: true,
        after_hours_access: "restricted",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED standard", zones: 2 }
      }
    },
    {
      id: "bld-01_lvl-1",
      name: "Level 1",
      display_name: "Level 1",
      description: "Level 1 of Innovation Hub featuring workstations, meeting-rooms, collaboration-spaces",
      tags: ["level", "office", "innovation"],
      parent_id: "bld-01",
      code: "INN-1",
      type: "office",
      count: 10,
      capacity: 480,
      map_id: "assets/maps/level_1.svg",
      location: "-33.8473,151.0647",
      triggers: [],
      settings: {
        booking_enabled: true,
        public_access: false,
        after_hours_access: "keycard",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED with daylight sensors", zones: 16 }
      }
    },
    {
      id: "bld-01_lvl-2",
      name: "Level 2",
      display_name: "Level 2",
      description: "Level 2 of Innovation Hub featuring workstations, meeting-rooms, collaboration-spaces",
      tags: ["level", "office", "innovation"],
      parent_id: "bld-01",
      code: "INN-2",
      type: "office",
      count: 13,
      capacity: 480,
      map_id: "assets/maps/level_2.svg",
      location: "-33.8473,151.0647",
      triggers: [],
      settings: {
        booking_enabled: true,
        public_access: false,
        after_hours_access: "keycard",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED with daylight sensors", zones: 16 }
      }
    },
    {
      id: "bld-01_lvl-P1",
      name: "Parking Level 1",
      display_name: "Parking Level 1",
      description: "Parking Level 1 of Innovation Hub featuring parking, ev-charging, bike-storage",
      tags: ["level", "parking", "innovation"],
      parent_id: "bld-01",
      code: "INN-P1",
      type: "parking",
      count: 7,
      capacity: 360,
      map_id: "assets/maps/level_P1.svg",
      location: "-33.8473,151.0647",
      triggers: [],
      settings: {
        booking_enabled: false,
        public_access: false,
        after_hours_access: "restricted",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED standard", zones: 1 }
      }
    },
    {
      id: "bld-02_lvl-G",
      name: "Ground Floor",
      display_name: "Ground Floor",
      description: "Ground Floor of Executive Center featuring reception, lobby, cafe, security",
      tags: ["level", "lobby", "executive"],
      parent_id: "bld-02",
      code: "EXE-G",
      type: "lobby",
      count: 13,
      capacity: 50,
      map_id: "assets/maps/level_G.svg",
      location: "-33.8688,151.2093",
      triggers: [],
      settings: {
        booking_enabled: true,
        public_access: true,
        after_hours_access: "restricted",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED standard", zones: 2 }
      }
    },
    {
      id: "bld-02_lvl-2",
      name: "Level 2",
      display_name: "Level 2",
      description: "Level 2 of Executive Center featuring workstations, meeting-rooms, collaboration-spaces",
      tags: ["level", "office", "executive"],
      parent_id: "bld-02",
      code: "EXE-2",
      type: "office",
      count: 12,
      capacity: 320,
      map_id: "assets/maps/level_2.svg",
      location: "-33.8688,151.2093",
      triggers: [],
      settings: {
        booking_enabled: true,
        public_access: false,
        after_hours_access: "keycard",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED with daylight sensors", zones: 11 }
      }
    },
    {
      id: "bld-02_lvl-3",
      name: "Level 3",
      display_name: "Level 3",
      description: "Level 3 of Executive Center featuring workstations, meeting-rooms, collaboration-spaces",
      tags: ["level", "office", "executive"],
      parent_id: "bld-02",
      code: "EXE-3",
      type: "office",
      count: 8,
      capacity: 320,
      map_id: "assets/maps/level_3.svg",
      location: "-33.8688,151.2093",
      triggers: [],
      settings: {
        booking_enabled: true,
        public_access: false,
        after_hours_access: "keycard",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED with daylight sensors", zones: 11 }
      }
    },
    {
      id: "bld-02_lvl-4",
      name: "Level 4",
      display_name: "Level 4",
      description: "Level 4 of Executive Center featuring workstations, meeting-rooms, collaboration-spaces",
      tags: ["level", "office", "executive"],
      parent_id: "bld-02",
      code: "EXE-4",
      type: "office",
      count: 9,
      capacity: 320,
      map_id: "assets/maps/level_4.svg",
      location: "-33.8688,151.2093",
      triggers: [],
      settings: {
        booking_enabled: true,
        public_access: false,
        after_hours_access: "keycard",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED with daylight sensors", zones: 11 }
      }
    },
    {
      id: "bld-02_lvl-P1",
      name: "Parking Level 1",
      display_name: "Parking Level 1",
      description: "Parking Level 1 of Executive Center featuring parking, ev-charging, bike-storage",
      tags: ["level", "parking", "executive"],
      parent_id: "bld-02",
      code: "EXE-P1",
      type: "parking",
      count: 10,
      capacity: 240,
      map_id: "assets/maps/level_P1.svg",
      location: "-33.8688,151.2093",
      triggers: [],
      settings: {
        booking_enabled: false,
        public_access: false,
        after_hours_access: "restricted",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED standard", zones: 1 }
      }
    },
    {
      id: "bld-03_lvl-G",
      name: "Ground Floor",
      display_name: "Ground Floor",
      description: "Ground Floor of Creative Campus featuring reception, lobby, cafe, security",
      tags: ["level", "lobby", "creative"],
      parent_id: "bld-03",
      code: "CRE-G",
      type: "lobby",
      count: 13,
      capacity: 50,
      map_id: "assets/maps/level_G.svg",
      location: "-33.8688,151.1957",
      triggers: [],
      settings: {
        booking_enabled: true,
        public_access: true,
        after_hours_access: "restricted",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED standard", zones: 2 }
      }
    },
    {
      id: "bld-03_lvl-M",
      name: "Mezzanine",
      display_name: "Mezzanine",
      description: "Mezzanine of Creative Campus featuring meeting-rooms, break-areas, informal-seating",
      tags: ["level", "mixed-use", "creative"],
      parent_id: "bld-03",
      code: "CRE-M",
      type: "mixed-use",
      count: 13,
      capacity: 100,
      map_id: "assets/maps/level_M.svg",
      location: "-33.8688,151.1957",
      triggers: [],
      settings: {
        booking_enabled: true,
        public_access: false,
        after_hours_access: "restricted",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED standard", zones: 4 }
      }
    },
    {
      id: "bld-03_lvl-1",
      name: "Level 1",
      display_name: "Level 1",
      description: "Level 1 of Creative Campus featuring workstations, meeting-rooms, collaboration-spaces",
      tags: ["level", "office", "creative"],
      parent_id: "bld-03",
      code: "CRE-1",
      type: "office",
      count: 5,
      capacity: 200,
      map_id: "assets/maps/level_1.svg",
      location: "-33.8688,151.1957",
      triggers: [],
      settings: {
        booking_enabled: true,
        public_access: false,
        after_hours_access: "keycard",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED with daylight sensors", zones: 7 }
      }
    },
    {
      id: "bld-04_lvl-G",
      name: "Ground Floor",
      display_name: "Ground Floor",
      description: "Ground Floor of Melbourne Tower featuring reception, lobby, cafe, security",
      tags: ["level", "lobby", "corporate"],
      parent_id: "bld-04",
      code: "MEL-G",
      type: "lobby",
      count: 9,
      capacity: 50,
      map_id: "assets/maps/level_G.svg",
      location: "-37.8136,144.9631",
      triggers: [],
      settings: {
        booking_enabled: true,
        public_access: true,
        after_hours_access: "restricted",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED standard", zones: 2 }
      }
    },
    {
      id: "bld-04_lvl-1",
      name: "Level 1",
      display_name: "Level 1",
      description: "Level 1 of Melbourne Tower featuring workstations, meeting-rooms, collaboration-spaces",
      tags: ["level", "office", "corporate"],
      parent_id: "bld-04",
      code: "MEL-1",
      type: "office",
      count: 6,
      capacity: 400,
      map_id: "assets/maps/level_1.svg",
      location: "-37.8136,144.9631",
      triggers: [],
      settings: {
        booking_enabled: true,
        public_access: false,
        after_hours_access: "keycard",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED with daylight sensors", zones: 14 }
      }
    },
    {
      id: "bld-04_lvl-2",
      name: "Level 2",
      display_name: "Level 2",
      description: "Level 2 of Melbourne Tower featuring workstations, meeting-rooms, collaboration-spaces",
      tags: ["level", "office", "corporate"],
      parent_id: "bld-04",
      code: "MEL-2",
      type: "office",
      count: 13,
      capacity: 400,
      map_id: "assets/maps/level_2.svg",
      location: "-37.8136,144.9631",
      triggers: [],
      settings: {
        booking_enabled: true,
        public_access: false,
        after_hours_access: "keycard",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED with daylight sensors", zones: 14 }
      }
    },
    {
      id: "bld-04_lvl-3",
      name: "Level 3",
      display_name: "Level 3",
      description: "Level 3 of Melbourne Tower featuring workstations, meeting-rooms, collaboration-spaces",
      tags: ["level", "office", "corporate"],
      parent_id: "bld-04",
      code: "MEL-3",
      type: "office",
      count: 14,
      capacity: 400,
      map_id: "assets/maps/level_3.svg",
      location: "-37.8136,144.9631",
      triggers: [],
      settings: {
        booking_enabled: true,
        public_access: false,
        after_hours_access: "keycard",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED with daylight sensors", zones: 14 }
      }
    },
    {
      id: "bld-04_lvl-4",
      name: "Level 4",
      display_name: "Level 4",
      description: "Level 4 of Melbourne Tower featuring workstations, meeting-rooms, collaboration-spaces",
      tags: ["level", "office", "corporate"],
      parent_id: "bld-04",
      code: "MEL-4",
      type: "office",
      count: 6,
      capacity: 400,
      map_id: "assets/maps/level_4.svg",
      location: "-37.8136,144.9631",
      triggers: [],
      settings: {
        booking_enabled: true,
        public_access: false,
        after_hours_access: "keycard",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED with daylight sensors", zones: 14 }
      }
    },
    {
      id: "bld-04_lvl-P1",
      name: "Parking Level 1",
      display_name: "Parking Level 1",
      description: "Parking Level 1 of Melbourne Tower featuring parking, ev-charging, bike-storage",
      tags: ["level", "parking", "corporate"],
      parent_id: "bld-04",
      code: "MEL-P1",
      type: "parking",
      count: 13,
      capacity: 300,
      map_id: "assets/maps/level_P1.svg",
      location: "-37.8136,144.9631",
      triggers: [],
      settings: {
        booking_enabled: false,
        public_access: false,
        after_hours_access: "restricted",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED standard", zones: 1 }
      }
    },
    {
      id: "bld-05_lvl-G",
      name: "Ground Floor",
      display_name: "Ground Floor",
      description: "Ground Floor of Melbourne Innovation Lab featuring reception, lobby, cafe, security",
      tags: ["level", "lobby", "innovation"],
      parent_id: "bld-05",
      code: "MEL-G",
      type: "lobby",
      count: 12,
      capacity: 50,
      map_id: "assets/maps/level_G.svg",
      location: "-37.8103,144.9717",
      triggers: [],
      settings: {
        booking_enabled: true,
        public_access: true,
        after_hours_access: "restricted",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED standard", zones: 2 }
      }
    },
    {
      id: "bld-05_lvl-1",
      name: "Level 1",
      display_name: "Level 1",
      description: "Level 1 of Melbourne Innovation Lab featuring workstations, meeting-rooms, collaboration-spaces",
      tags: ["level", "office", "innovation"],
      parent_id: "bld-05",
      code: "MEL-1",
      type: "office",
      count: 9,
      capacity: 320,
      map_id: "assets/maps/level_1.svg",
      location: "-37.8103,144.9717",
      triggers: [],
      settings: {
        booking_enabled: true,
        public_access: false,
        after_hours_access: "keycard",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED with daylight sensors", zones: 11 }
      }
    },
    {
      id: "bld-05_lvl-2",
      name: "Level 2",
      display_name: "Level 2",
      description: "Level 2 of Melbourne Innovation Lab featuring workstations, meeting-rooms, collaboration-spaces",
      tags: ["level", "office", "innovation"],
      parent_id: "bld-05",
      code: "MEL-2",
      type: "office",
      count: 7,
      capacity: 320,
      map_id: "assets/maps/level_2.svg",
      location: "-37.8103,144.9717",
      triggers: [],
      settings: {
        booking_enabled: true,
        public_access: false,
        after_hours_access: "keycard",
        temperature_range: { min: 20, max: 26 },
        lighting: { type: "LED with daylight sensors", zones: 11 }
      }
    }
  ],
  systems: [
    {
      id: "space-1",
      name: "01.G.01 Sydney Harbour",
      display_name: "Sydney Harbour",
      email: "test.space.1@place.tech",
      capacity: 7,
      features: ["Display Screen"],
      bookable: true,
      map_id: "area-01.g.01-status",
      images: [
        "https://images.unsplash.com/photo-1500000000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "01.G.01",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-G"],
      modules: []
    },
    {
      id: "space-2",
      name: "01.G.02 Melbourne Cup",
      display_name: "Melbourne Cup",
      email: "test.space.2@place.tech",
      capacity: 7,
      features: ["Phone", "Display Screen"],
      bookable: true,
      map_id: "area-01.g.02-status",
      images: [
        "https://images.unsplash.com/photo-1500100000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "01.G.02",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-G"],
      modules: []
    },
    {
      id: "space-3",
      name: "01.G.03 Brisbane River",
      display_name: "Brisbane River",
      email: "test.space.3@place.tech",
      capacity: 4,
      features: ["Video Conference"],
      bookable: true,
      map_id: "area-01.g.03-status",
      images: [
        "https://images.unsplash.com/photo-1500200000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "01.G.03",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-G"],
      modules: []
    },
    {
      id: "space-4",
      name: "01.G.04 Perth Skyline",
      display_name: "Perth Skyline",
      email: "test.space.4@place.tech",
      capacity: 5,
      features: ["Phone", "Display Screen"],
      bookable: true,
      map_id: "area-01.g.04-status",
      images: [
        "https://images.unsplash.com/photo-1500300000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "01.G.04",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-G"],
      modules: []
    },
    {
      id: "space-5",
      name: "01.G.05 Adelaide Hills",
      display_name: "Adelaide Hills",
      email: "test.space.5@place.tech",
      capacity: 4,
      features: ["Display Screen", "Video Conference"],
      bookable: true,
      map_id: "area-01.g.05-status",
      images: [
        "https://images.unsplash.com/photo-1500400000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "01.G.05",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-G"],
      modules: []
    },
    {
      id: "space-6",
      name: "01.G.06 Darwin Sunset",
      display_name: "Darwin Sunset",
      email: "test.space.6@place.tech",
      capacity: 4,
      features: ["Whiteboard", "Phone"],
      bookable: true,
      map_id: "area-01.g.06-status",
      images: [
        "https://images.unsplash.com/photo-1500500000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "01.G.06",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-G"],
      modules: []
    },
    {
      id: "space-7",
      name: "01.G.07 Innovation Lab",
      display_name: "Innovation Lab",
      email: "test.space.7@place.tech",
      capacity: 10,
      features: ["Whiteboard", "Video Conference"],
      bookable: true,
      map_id: "area-01.g.07-status",
      images: [
        "https://images.unsplash.com/photo-1500600000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "01.G.07",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-G"],
      modules: []
    },
    {
      id: "space-8",
      name: "01.G.08 Strategy Center",
      display_name: "Strategy Center",
      email: "test.space.8@place.tech",
      capacity: 10,
      features: ["Audio System"],
      bookable: true,
      map_id: "area-01.g.08-status",
      images: [
        "https://images.unsplash.com/photo-1500700000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "01.G.08",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-G"],
      modules: []
    },
    {
      id: "space-9",
      name: "01.1.01 Think Tank",
      display_name: "Think Tank",
      email: "test.space.9@place.tech",
      capacity: 8,
      features: ["Phone", "Audio System"],
      bookable: true,
      map_id: "area-01.1.01-status",
      images: [
        "https://images.unsplash.com/photo-1500800000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "01.1.01",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-1"],
      modules: []
    },
    {
      id: "space-10",
      name: "01.1.02 Solution Studio",
      display_name: "Solution Studio",
      email: "test.space.10@place.tech",
      capacity: 9,
      features: ["Audio System", "Whiteboard"],
      bookable: true,
      map_id: "area-01.1.02-status",
      images: [
        "https://images.unsplash.com/photo-1500900000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "01.1.02",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-1"],
      modules: []
    },
    {
      id: "space-11",
      name: "01.1.03 Discovery Room",
      display_name: "Discovery Room",
      email: "test.space.11@place.tech",
      capacity: 10,
      features: ["Phone", "Audio System"],
      bookable: true,
      map_id: "area-01.1.03-status",
      images: [
        "https://images.unsplash.com/photo-1501000000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "01.1.03",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-1"],
      modules: []
    },
    {
      id: "space-12",
      name: "01.1.04 Vision Quest",
      display_name: "Vision Quest",
      email: "test.space.12@place.tech",
      capacity: 11,
      features: ["Video Conference", "Phone"],
      bookable: true,
      map_id: "area-01.1.04-status",
      images: [
        "https://images.unsplash.com/photo-1501100000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1501150000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "01.1.04",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-1"],
      modules: []
    },
    {
      id: "space-13",
      name: "01.1.05 Executive Boardroom",
      display_name: "Executive Boardroom",
      email: "test.space.13@place.tech",
      capacity: 14,
      features: ["Large Display", "Audio System"],
      bookable: true,
      map_id: "area-01.1.05-status",
      images: [
        "https://images.unsplash.com/photo-1501200000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1501250000?w=800&h=600&fit=crop"
      ],
      type: "Boardroom",
      code: "01.1.05",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-1"],
      modules: []
    },
    {
      id: "space-14",
      name: "01.1.06 Chairman's Suite",
      display_name: "Chairman's Suite",
      email: "test.space.14@place.tech",
      capacity: 12,
      features: ["Climate Control", "Executive Seating"],
      bookable: true,
      map_id: "area-01.1.06-status",
      images: [
        "https://images.unsplash.com/photo-1501300000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1501350000?w=800&h=600&fit=crop"
      ],
      type: "Boardroom",
      code: "01.1.06",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-1"],
      modules: []
    },
    {
      id: "space-15",
      name: "01.2.01 Directors Lounge",
      display_name: "Directors Lounge",
      email: "test.space.15@place.tech",
      capacity: 12,
      features: ["Large Display", "Climate Control"],
      bookable: true,
      map_id: "area-01.2.01-status",
      images: [
        "https://images.unsplash.com/photo-1501400000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1501450000?w=800&h=600&fit=crop"
      ],
      type: "Boardroom",
      code: "01.2.01",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-2"],
      modules: []
    },
    {
      id: "space-16",
      name: "01.2.02 Leadership Circle",
      display_name: "Leadership Circle",
      email: "test.space.16@place.tech",
      capacity: 11,
      features: ["Climate Control"],
      bookable: true,
      map_id: "area-01.2.02-status",
      images: [
        "https://images.unsplash.com/photo-1501500000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1501550000?w=800&h=600&fit=crop"
      ],
      type: "Boardroom",
      code: "01.2.02",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-2"],
      modules: []
    },
    {
      id: "space-17",
      name: "01.2.03 Learning Hub Alpha",
      display_name: "Learning Hub Alpha",
      email: "test.space.17@place.tech",
      capacity: 30,
      features: ["Audio System", "Whiteboard"],
      bookable: true,
      map_id: "area-01.2.03-status",
      images: [
        "https://images.unsplash.com/photo-1501600000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1501650000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "01.2.03",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-2"],
      modules: []
    },
    {
      id: "space-18",
      name: "01.2.04 Development Center Beta",
      display_name: "Development Center Beta",
      email: "test.space.18@place.tech",
      capacity: 24,
      features: ["Flipchart", "Audio System"],
      bookable: true,
      map_id: "area-01.2.04-status",
      images: [
        "https://images.unsplash.com/photo-1501700000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1501750000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "01.2.04",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-2"],
      modules: []
    },
    {
      id: "space-19",
      name: "01.2.05 Skills Workshop",
      display_name: "Skills Workshop",
      email: "test.space.19@place.tech",
      capacity: 16,
      features: ["Breakout Tables", "Whiteboard"],
      bookable: true,
      map_id: "area-01.2.05-status",
      images: [
        "https://images.unsplash.com/photo-1501800000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1501850000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "01.2.05",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-2"],
      modules: []
    },
    {
      id: "space-20",
      name: "01.2.06 Knowledge Exchange",
      display_name: "Knowledge Exchange",
      email: "test.space.20@place.tech",
      capacity: 30,
      features: ["Flipchart", "Audio System"],
      bookable: true,
      map_id: "area-01.2.06-status",
      images: [
        "https://images.unsplash.com/photo-1501900000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1501950000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "01.2.06",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-2"],
      modules: []
    },
    {
      id: "space-21",
      name: "01.2.07 Growth Academy",
      display_name: "Growth Academy",
      email: "test.space.21@place.tech",
      capacity: 30,
      features: ["Projector", "Flipchart"],
      bookable: true,
      map_id: "area-01.2.07-status",
      images: [
        "https://images.unsplash.com/photo-1502000000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502050000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "01.2.07",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-2"],
      modules: []
    },
    {
      id: "space-22",
      name: "01.2.08 Call Pod 1",
      display_name: "Call Pod 1",
      email: "test.space.22@place.tech",
      capacity: 1,
      features: ["Acoustic Privacy", "Power Outlet"],
      bookable: true,
      map_id: "area-01.2.08-status",
      images: [
        "https://images.unsplash.com/photo-1502100000?w=800&h=600&fit=crop"
      ],
      type: "Phone Booth",
      code: "01.2.08",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-2"],
      modules: []
    },
    {
      id: "space-23",
      name: "01.2.09 Call Pod 2",
      display_name: "Call Pod 2",
      email: "test.space.23@place.tech",
      capacity: 1,
      features: ["Power Outlet", "Acoustic Privacy"],
      bookable: true,
      map_id: "area-01.2.09-status",
      images: [
        "https://images.unsplash.com/photo-1502200000?w=800&h=600&fit=crop"
      ],
      type: "Phone Booth",
      code: "01.2.09",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-2"],
      modules: []
    },
    {
      id: "space-24",
      name: "01.2.10 Call Pod 3",
      display_name: "Call Pod 3",
      email: "test.space.24@place.tech",
      capacity: 1,
      features: ["Power Outlet", "Phone"],
      bookable: true,
      map_id: "area-01.2.10-status",
      images: [
        "https://images.unsplash.com/photo-1502300000?w=800&h=600&fit=crop"
      ],
      type: "Phone Booth",
      code: "01.2.10",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-2"],
      modules: []
    },
    {
      id: "space-25",
      name: "01.2.11 Call Pod 4",
      display_name: "Call Pod 4",
      email: "test.space.25@place.tech",
      capacity: 1,
      features: ["Acoustic Privacy"],
      bookable: true,
      map_id: "area-01.2.11-status",
      images: [
        "https://images.unsplash.com/photo-1502400000?w=800&h=600&fit=crop"
      ],
      type: "Phone Booth",
      code: "01.2.11",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-2"],
      modules: []
    },
    {
      id: "space-26",
      name: "01.2.12 Privacy Booth A",
      display_name: "Privacy Booth A",
      email: "test.space.26@place.tech",
      capacity: 1,
      features: ["Phone"],
      bookable: true,
      map_id: "area-01.2.12-status",
      images: [
        "https://images.unsplash.com/photo-1502500000?w=800&h=600&fit=crop"
      ],
      type: "Phone Booth",
      code: "01.2.12",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-2"],
      modules: []
    },
    {
      id: "space-27",
      name: "01.2.13 Privacy Booth B",
      display_name: "Privacy Booth B",
      email: "test.space.27@place.tech",
      capacity: 1,
      features: ["Phone"],
      bookable: true,
      map_id: "area-01.2.13-status",
      images: [
        "https://images.unsplash.com/photo-1502600000?w=800&h=600&fit=crop"
      ],
      type: "Phone Booth",
      code: "01.2.13",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-2"],
      modules: []
    },
    {
      id: "space-28",
      name: "01.2.14 Creative Corner",
      display_name: "Creative Corner",
      email: "test.space.28@place.tech",
      capacity: 7,
      features: ["Power Outlets", "Informal Seating"],
      bookable: true,
      map_id: "area-01.2.14-status",
      images: [
        "https://images.unsplash.com/photo-1502700000?w=800&h=600&fit=crop"
      ],
      type: "Collaboration Space",
      code: "01.2.14",
      zones: ["zone-org", "region-sydney", "bld-01", "bld-01_lvl-2"],
      modules: []
    },
    {
      id: "space-29",
      name: "02.G.01 Brainstorm Bay",
      display_name: "Brainstorm Bay",
      email: "test.space.29@place.tech",
      capacity: 6,
      features: ["Informal Seating"],
      bookable: false,
      map_id: "area-02.g.01-status",
      images: [
        "https://images.unsplash.com/photo-1502800000?w=800&h=600&fit=crop"
      ],
      type: "Collaboration Space",
      code: "02.G.01",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-G"],
      modules: []
    },
    {
      id: "space-30",
      name: "02.G.02 Idea Incubator",
      display_name: "Idea Incubator",
      email: "test.space.30@place.tech",
      capacity: 8,
      features: ["Whiteboard", "Moveable Furniture"],
      bookable: false,
      map_id: "area-02.g.02-status",
      images: [
        "https://images.unsplash.com/photo-1502900000?w=800&h=600&fit=crop"
      ],
      type: "Collaboration Space",
      code: "02.G.02",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-G"],
      modules: []
    },
    {
      id: "space-31",
      name: "02.G.03 Innovation Intersection",
      display_name: "Innovation Intersection",
      email: "test.space.31@place.tech",
      capacity: 6,
      features: ["Power Outlets", "Informal Seating"],
      bookable: true,
      map_id: "area-02.g.03-status",
      images: [
        "https://images.unsplash.com/photo-1503000000?w=800&h=600&fit=crop"
      ],
      type: "Collaboration Space",
      code: "02.G.03",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-G"],
      modules: []
    },
    {
      id: "space-32",
      name: "02.G.04 Design Den",
      display_name: "Design Den",
      email: "test.space.32@place.tech",
      capacity: 7,
      features: ["Power Outlets", "Informal Seating"],
      bookable: true,
      map_id: "area-02.g.04-status",
      images: [
        "https://images.unsplash.com/photo-1503100000?w=800&h=600&fit=crop"
      ],
      type: "Collaboration Space",
      code: "02.G.04",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-G"],
      modules: []
    },
    {
      id: "space-33",
      name: "02.G.05 Grand Auditorium",
      display_name: "Grand Auditorium",
      email: "test.space.33@place.tech",
      capacity: 94,
      features: ["Audio System"],
      bookable: true,
      map_id: "area-02.g.05-status",
      images: [
        "https://images.unsplash.com/photo-1503200000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1503250000?w=800&h=600&fit=crop"
      ],
      type: "Event Space",
      code: "02.G.05",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-G"],
      modules: []
    },
    {
      id: "space-34",
      name: "02.G.06 Conference Hall",
      display_name: "Conference Hall",
      email: "test.space.34@place.tech",
      capacity: 60,
      features: ["Catering Setup", "Audio System", "Stage/Platform"],
      bookable: true,
      map_id: "area-02.g.06-status",
      images: [
        "https://images.unsplash.com/photo-1503300000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1503350000?w=800&h=600&fit=crop"
      ],
      type: "Event Space",
      code: "02.G.06",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-G"],
      modules: []
    },
    {
      id: "space-35",
      name: "02.2.01 Presentation Theater",
      display_name: "Presentation Theater",
      email: "test.space.35@place.tech",
      capacity: 106,
      features: ["Flexible Seating", "Stage/Platform"],
      bookable: true,
      map_id: "area-02.2.01-status",
      images: [
        "https://images.unsplash.com/photo-1503400000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1503450000?w=800&h=600&fit=crop"
      ],
      type: "Event Space",
      code: "02.2.01",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-2"],
      modules: []
    },
    {
      id: "space-36",
      name: "02.2.02 Multi-Purpose Arena",
      display_name: "Multi-Purpose Arena",
      email: "test.space.36@place.tech",
      capacity: 75,
      features: ["Audio System", "Catering Setup", "Projector"],
      bookable: true,
      map_id: "area-02.2.02-status",
      images: [
        "https://images.unsplash.com/photo-1503500000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1503550000?w=800&h=600&fit=crop"
      ],
      type: "Event Space",
      code: "02.2.02",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-2"],
      modules: []
    },
    {
      id: "space-37",
      name: "02.2.03 Coffee Central",
      display_name: "Coffee Central",
      email: "test.space.37@place.tech",
      capacity: 14,
      features: ["Refrigerator", "Kitchen Facilities", "Microwave"],
      bookable: false,
      map_id: "area-02.2.03-status",
      images: [
        "https://images.unsplash.com/photo-1503600000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1503650000?w=800&h=600&fit=crop"
      ],
      type: "Break Room",
      code: "02.2.03",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-2"],
      modules: []
    },
    {
      id: "space-38",
      name: "02.2.04 Relaxation Station",
      display_name: "Relaxation Station",
      email: "test.space.38@place.tech",
      capacity: 15,
      features: ["Refrigerator"],
      bookable: false,
      map_id: "area-02.2.04-status",
      images: [
        "https://images.unsplash.com/photo-1503700000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1503750000?w=800&h=600&fit=crop"
      ],
      type: "Break Room",
      code: "02.2.04",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-2"],
      modules: []
    },
    {
      id: "space-39",
      name: "02.2.05 Social Hub",
      display_name: "Social Hub",
      email: "test.space.39@place.tech",
      capacity: 16,
      features: ["Seating", "Refrigerator", "Coffee Machine"],
      bookable: true,
      map_id: "area-02.2.05-status",
      images: [
        "https://images.unsplash.com/photo-1503800000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1503850000?w=800&h=600&fit=crop"
      ],
      type: "Break Room",
      code: "02.2.05",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-2"],
      modules: []
    },
    {
      id: "space-40",
      name: "02.2.06 Refresh & Recharge",
      display_name: "Refresh & Recharge",
      email: "test.space.40@place.tech",
      capacity: 17,
      features: ["Microwave", "Seating", "Coffee Machine"],
      bookable: false,
      map_id: "area-02.2.06-status",
      images: [
        "https://images.unsplash.com/photo-1503900000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1503950000?w=800&h=600&fit=crop"
      ],
      type: "Break Room",
      code: "02.2.06",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-2"],
      modules: []
    },
    {
      id: "space-41",
      name: "02.2.07 Community Kitchen",
      display_name: "Community Kitchen",
      email: "test.space.41@place.tech",
      capacity: 16,
      features: ["Refrigerator", "Kitchen Facilities"],
      bookable: false,
      map_id: "area-02.2.07-status",
      images: [
        "https://images.unsplash.com/photo-1504000000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504050000?w=800&h=600&fit=crop"
      ],
      type: "Break Room",
      code: "02.2.07",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-2"],
      modules: []
    },
    {
      id: "space-42",
      name: "02.2.08 Deep Work Den",
      display_name: "Deep Work Den",
      email: "test.space.42@place.tech",
      capacity: 1,
      features: ["Acoustic Privacy", "Natural Light"],
      bookable: false,
      map_id: "area-02.2.08-status",
      images: [
        "https://images.unsplash.com/photo-1504100000?w=800&h=600&fit=crop"
      ],
      type: "Focus Room",
      code: "02.2.08",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-2"],
      modules: []
    },
    {
      id: "space-43",
      name: "02.3.01 Concentration Cave",
      display_name: "Concentration Cave",
      email: "test.space.43@place.tech",
      capacity: 1,
      features: ["Natural Light", "Acoustic Privacy"],
      bookable: true,
      map_id: "area-02.3.01-status",
      images: [
        "https://images.unsplash.com/photo-1504200000?w=800&h=600&fit=crop"
      ],
      type: "Focus Room",
      code: "02.3.01",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-2"],
      modules: []
    },
    {
      id: "space-44",
      name: "02.3.02 Quiet Quarters",
      display_name: "Quiet Quarters",
      email: "test.space.44@place.tech",
      capacity: 1,
      features: ["Natural Light", "Desk"],
      bookable: false,
      map_id: "area-02.3.02-status",
      images: [
        "https://images.unsplash.com/photo-1504300000?w=800&h=600&fit=crop"
      ],
      type: "Focus Room",
      code: "02.3.02",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-2"],
      modules: []
    },
    {
      id: "space-45",
      name: "02.3.03 Focus Flow",
      display_name: "Focus Flow",
      email: "test.space.45@place.tech",
      capacity: 1,
      features: ["Acoustic Privacy", "Desk"],
      bookable: false,
      map_id: "area-02.3.03-status",
      images: [
        "https://images.unsplash.com/photo-1504400000?w=800&h=600&fit=crop"
      ],
      type: "Focus Room",
      code: "02.3.03",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-2"],
      modules: []
    },
    {
      id: "space-46",
      name: "02.3.04 Zen Zone",
      display_name: "Zen Zone",
      email: "test.space.46@place.tech",
      capacity: 1,
      features: ["Natural Light", "Desk"],
      bookable: true,
      map_id: "area-02.3.04-status",
      images: [
        "https://images.unsplash.com/photo-1504500000?w=800&h=600&fit=crop"
      ],
      type: "Focus Room",
      code: "02.3.04",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-2"],
      modules: []
    },
    {
      id: "space-47",
      name: "02.3.05 Demo Theater",
      display_name: "Demo Theater",
      email: "test.space.47@place.tech",
      capacity: 26,
      features: ["Large Display", "Tiered Seating"],
      bookable: true,
      map_id: "area-02.3.05-status",
      images: [
        "https://images.unsplash.com/photo-1504600000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504650000?w=800&h=600&fit=crop"
      ],
      type: "Presentation Room",
      code: "02.3.05",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-2"],
      modules: []
    },
    {
      id: "space-48",
      name: "02.3.06 Showcase Auditorium",
      display_name: "Showcase Auditorium",
      email: "test.space.48@place.tech",
      capacity: 73,
      features: ["Large Display", "Lighting Control"],
      bookable: true,
      map_id: "area-02.3.06-status",
      images: [
        "https://images.unsplash.com/photo-1504700000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504750000?w=800&h=600&fit=crop"
      ],
      type: "Presentation Room",
      code: "02.3.06",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-2"],
      modules: []
    },
    {
      id: "space-49",
      name: "02.3.07 Client Presentation Suite",
      display_name: "Client Presentation Suite",
      email: "test.space.49@place.tech",
      capacity: 67,
      features: ["Audio System", "Large Display"],
      bookable: true,
      map_id: "area-02.3.07-status",
      images: [
        "https://images.unsplash.com/photo-1504800000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504850000?w=800&h=600&fit=crop"
      ],
      type: "Presentation Room",
      code: "02.3.07",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-2"],
      modules: []
    },
    {
      id: "space-50",
      name: "02.4.01 Sydney Harbour",
      display_name: "Sydney Harbour",
      email: "test.space.50@place.tech",
      capacity: 5,
      features: ["Whiteboard"],
      bookable: true,
      map_id: "area-02.4.01-status",
      images: [
        "https://images.unsplash.com/photo-1504900000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "02.4.01",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-3"],
      modules: []
    },
    {
      id: "space-51",
      name: "02.4.02 Melbourne Cup",
      display_name: "Melbourne Cup",
      email: "test.space.51@place.tech",
      capacity: 4,
      features: ["Whiteboard", "Video Conference"],
      bookable: true,
      map_id: "area-02.4.02-status",
      images: [
        "https://images.unsplash.com/photo-1505000000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "02.4.02",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-3"],
      modules: []
    },
    {
      id: "space-52",
      name: "02.4.03 Brisbane River",
      display_name: "Brisbane River",
      email: "test.space.52@place.tech",
      capacity: 7,
      features: ["Phone", "Video Conference"],
      bookable: true,
      map_id: "area-02.4.03-status",
      images: [
        "https://images.unsplash.com/photo-1505100000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "02.4.03",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-3"],
      modules: []
    },
    {
      id: "space-53",
      name: "02.4.04 Perth Skyline",
      display_name: "Perth Skyline",
      email: "test.space.53@place.tech",
      capacity: 7,
      features: ["Phone", "Video Conference"],
      bookable: true,
      map_id: "area-02.4.04-status",
      images: [
        "https://images.unsplash.com/photo-1505200000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "02.4.04",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-3"],
      modules: []
    },
    {
      id: "space-54",
      name: "02.4.05 Adelaide Hills",
      display_name: "Adelaide Hills",
      email: "test.space.54@place.tech",
      capacity: 6,
      features: ["Video Conference", "Display Screen"],
      bookable: true,
      map_id: "area-02.4.05-status",
      images: [
        "https://images.unsplash.com/photo-1505300000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "02.4.05",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-3"],
      modules: []
    },
    {
      id: "space-55",
      name: "02.4.06 Darwin Sunset",
      display_name: "Darwin Sunset",
      email: "test.space.55@place.tech",
      capacity: 7,
      features: ["Whiteboard", "Display Screen"],
      bookable: true,
      map_id: "area-02.4.06-status",
      images: [
        "https://images.unsplash.com/photo-1505400000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "02.4.06",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-3"],
      modules: []
    },
    {
      id: "space-56",
      name: "02.4.07 Innovation Lab",
      display_name: "Innovation Lab",
      email: "test.space.56@place.tech",
      capacity: 8,
      features: ["Audio System", "Whiteboard"],
      bookable: true,
      map_id: "area-02.4.07-status",
      images: [
        "https://images.unsplash.com/photo-1505500000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "02.4.07",
      zones: ["zone-org", "region-sydney", "bld-02", "bld-02_lvl-3"],
      modules: []
    },
    {
      id: "space-57",
      name: "03.G.01 Strategy Center",
      display_name: "Strategy Center",
      email: "test.space.57@place.tech",
      capacity: 9,
      features: ["Video Conference"],
      bookable: true,
      map_id: "area-03.g.01-status",
      images: [
        "https://images.unsplash.com/photo-1505600000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "03.G.01",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-G"],
      modules: []
    },
    {
      id: "space-58",
      name: "03.G.02 Think Tank",
      display_name: "Think Tank",
      email: "test.space.58@place.tech",
      capacity: 9,
      features: ["Audio System", "Whiteboard"],
      bookable: true,
      map_id: "area-03.g.02-status",
      images: [
        "https://images.unsplash.com/photo-1505700000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "03.G.02",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-G"],
      modules: []
    },
    {
      id: "space-59",
      name: "03.G.03 Solution Studio",
      display_name: "Solution Studio",
      email: "test.space.59@place.tech",
      capacity: 11,
      features: ["Audio System", "Projector"],
      bookable: true,
      map_id: "area-03.g.03-status",
      images: [
        "https://images.unsplash.com/photo-1505800000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1505850000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "03.G.03",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-G"],
      modules: []
    },
    {
      id: "space-60",
      name: "03.G.04 Discovery Room",
      display_name: "Discovery Room",
      email: "test.space.60@place.tech",
      capacity: 9,
      features: ["Video Conference", "Whiteboard", "Audio System"],
      bookable: true,
      map_id: "area-03.g.04-status",
      images: [
        "https://images.unsplash.com/photo-1505900000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "03.G.04",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-G"],
      modules: []
    },
    {
      id: "space-61",
      name: "03.G.05 Vision Quest",
      display_name: "Vision Quest",
      email: "test.space.61@place.tech",
      capacity: 10,
      features: ["Video Conference", "Projector", "Whiteboard"],
      bookable: true,
      map_id: "area-03.g.05-status",
      images: [
        "https://images.unsplash.com/photo-1506000000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "03.G.05",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-G"],
      modules: []
    },
    {
      id: "space-62",
      name: "03.G.06 Executive Boardroom",
      display_name: "Executive Boardroom",
      email: "test.space.62@place.tech",
      capacity: 11,
      features: ["Video Conference", "Audio System", "Executive Seating"],
      bookable: true,
      map_id: "area-03.g.06-status",
      images: [
        "https://images.unsplash.com/photo-1506100000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506150000?w=800&h=600&fit=crop"
      ],
      type: "Boardroom",
      code: "03.G.06",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-G"],
      modules: []
    },
    {
      id: "space-63",
      name: "03.G.07 Chairman's Suite",
      display_name: "Chairman's Suite",
      email: "test.space.63@place.tech",
      capacity: 12,
      features: ["Whiteboard", "Executive Seating", "Video Conference"],
      bookable: true,
      map_id: "area-03.g.07-status",
      images: [
        "https://images.unsplash.com/photo-1506200000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506250000?w=800&h=600&fit=crop"
      ],
      type: "Boardroom",
      code: "03.G.07",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-G"],
      modules: []
    },
    {
      id: "space-64",
      name: "03.G.08 Directors Lounge",
      display_name: "Directors Lounge",
      email: "test.space.64@place.tech",
      capacity: 11,
      features: ["Video Conference", "Whiteboard"],
      bookable: true,
      map_id: "area-03.g.08-status",
      images: [
        "https://images.unsplash.com/photo-1506300000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506350000?w=800&h=600&fit=crop"
      ],
      type: "Boardroom",
      code: "03.G.08",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-G"],
      modules: []
    },
    {
      id: "space-65",
      name: "03.G.09 Leadership Circle",
      display_name: "Leadership Circle",
      email: "test.space.65@place.tech",
      capacity: 10,
      features: ["Climate Control", "Audio System"],
      bookable: true,
      map_id: "area-03.g.09-status",
      images: [
        "https://images.unsplash.com/photo-1506400000?w=800&h=600&fit=crop"
      ],
      type: "Boardroom",
      code: "03.G.09",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-G"],
      modules: []
    },
    {
      id: "space-66",
      name: "03.G.10 Learning Hub Alpha",
      display_name: "Learning Hub Alpha",
      email: "test.space.66@place.tech",
      capacity: 34,
      features: ["Whiteboard", "Breakout Tables"],
      bookable: true,
      map_id: "area-03.g.10-status",
      images: [
        "https://images.unsplash.com/photo-1506500000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506550000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "03.G.10",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-G"],
      modules: []
    },
    {
      id: "space-67",
      name: "03.M.01 Development Center Beta",
      display_name: "Development Center Beta",
      email: "test.space.67@place.tech",
      capacity: 15,
      features: ["Audio System", "Flipchart"],
      bookable: true,
      map_id: "area-03.m.01-status",
      images: [
        "https://images.unsplash.com/photo-1506600000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506650000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "03.M.01",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-68",
      name: "03.M.02 Skills Workshop",
      display_name: "Skills Workshop",
      email: "test.space.68@place.tech",
      capacity: 19,
      features: ["Projector"],
      bookable: true,
      map_id: "area-03.m.02-status",
      images: [
        "https://images.unsplash.com/photo-1506700000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506750000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "03.M.02",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-69",
      name: "03.M.03 Knowledge Exchange",
      display_name: "Knowledge Exchange",
      email: "test.space.69@place.tech",
      capacity: 19,
      features: ["Audio System", "Breakout Tables"],
      bookable: true,
      map_id: "area-03.m.03-status",
      images: [
        "https://images.unsplash.com/photo-1506800000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506850000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "03.M.03",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-70",
      name: "03.M.04 Growth Academy",
      display_name: "Growth Academy",
      email: "test.space.70@place.tech",
      capacity: 15,
      features: ["Audio System", "Projector"],
      bookable: true,
      map_id: "area-03.m.04-status",
      images: [
        "https://images.unsplash.com/photo-1506900000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506950000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "03.M.04",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-71",
      name: "03.M.05 Call Pod 1",
      display_name: "Call Pod 1",
      email: "test.space.71@place.tech",
      capacity: 1,
      features: ["Acoustic Privacy"],
      bookable: true,
      map_id: "area-03.m.05-status",
      images: [
        "https://images.unsplash.com/photo-1507000000?w=800&h=600&fit=crop"
      ],
      type: "Phone Booth",
      code: "03.M.05",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-72",
      name: "03.M.06 Call Pod 2",
      display_name: "Call Pod 2",
      email: "test.space.72@place.tech",
      capacity: 1,
      features: ["Acoustic Privacy", "Phone"],
      bookable: true,
      map_id: "area-03.m.06-status",
      images: [
        "https://images.unsplash.com/photo-1507100000?w=800&h=600&fit=crop"
      ],
      type: "Phone Booth",
      code: "03.M.06",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-73",
      name: "03.M.07 Call Pod 3",
      display_name: "Call Pod 3",
      email: "test.space.73@place.tech",
      capacity: 1,
      features: ["Power Outlet"],
      bookable: true,
      map_id: "area-03.m.07-status",
      images: [
        "https://images.unsplash.com/photo-1507200000?w=800&h=600&fit=crop"
      ],
      type: "Phone Booth",
      code: "03.M.07",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-74",
      name: "03.M.08 Call Pod 4",
      display_name: "Call Pod 4",
      email: "test.space.74@place.tech",
      capacity: 1,
      features: ["Power Outlet", "Acoustic Privacy"],
      bookable: true,
      map_id: "area-03.m.08-status",
      images: [
        "https://images.unsplash.com/photo-1507300000?w=800&h=600&fit=crop"
      ],
      type: "Phone Booth",
      code: "03.M.08",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-75",
      name: "03.M.09 Privacy Booth A",
      display_name: "Privacy Booth A",
      email: "test.space.75@place.tech",
      capacity: 1,
      features: ["Phone"],
      bookable: true,
      map_id: "area-03.m.09-status",
      images: [
        "https://images.unsplash.com/photo-1507400000?w=800&h=600&fit=crop"
      ],
      type: "Phone Booth",
      code: "03.M.09",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-76",
      name: "03.M.10 Privacy Booth B",
      display_name: "Privacy Booth B",
      email: "test.space.76@place.tech",
      capacity: 1,
      features: ["Phone", "Acoustic Privacy"],
      bookable: true,
      map_id: "area-03.m.10-status",
      images: [
        "https://images.unsplash.com/photo-1507500000?w=800&h=600&fit=crop"
      ],
      type: "Phone Booth",
      code: "03.M.10",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-77",
      name: "03.M.11 Creative Corner",
      display_name: "Creative Corner",
      email: "test.space.77@place.tech",
      capacity: 7,
      features: ["Power Outlets", "Whiteboard"],
      bookable: false,
      map_id: "area-03.m.11-status",
      images: [
        "https://images.unsplash.com/photo-1507600000?w=800&h=600&fit=crop"
      ],
      type: "Collaboration Space",
      code: "03.M.11",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-78",
      name: "03.M.12 Brainstorm Bay",
      display_name: "Brainstorm Bay",
      email: "test.space.78@place.tech",
      capacity: 6,
      features: ["Moveable Furniture", "Whiteboard"],
      bookable: false,
      map_id: "area-03.m.12-status",
      images: [
        "https://images.unsplash.com/photo-1507700000?w=800&h=600&fit=crop"
      ],
      type: "Collaboration Space",
      code: "03.M.12",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-79",
      name: "03.M.13 Idea Incubator",
      display_name: "Idea Incubator",
      email: "test.space.79@place.tech",
      capacity: 7,
      features: ["Power Outlets", "Informal Seating"],
      bookable: false,
      map_id: "area-03.m.13-status",
      images: [
        "https://images.unsplash.com/photo-1507800000?w=800&h=600&fit=crop"
      ],
      type: "Collaboration Space",
      code: "03.M.13",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-80",
      name: "03.M.14 Innovation Intersection",
      display_name: "Innovation Intersection",
      email: "test.space.80@place.tech",
      capacity: 6,
      features: ["Informal Seating"],
      bookable: false,
      map_id: "area-03.m.14-status",
      images: [
        "https://images.unsplash.com/photo-1507900000?w=800&h=600&fit=crop"
      ],
      type: "Collaboration Space",
      code: "03.M.14",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-81",
      name: "03.M.15 Design Den",
      display_name: "Design Den",
      email: "test.space.81@place.tech",
      capacity: 8,
      features: ["Moveable Furniture", "Power Outlets"],
      bookable: false,
      map_id: "area-03.m.15-status",
      images: [
        "https://images.unsplash.com/photo-1508000000?w=800&h=600&fit=crop"
      ],
      type: "Collaboration Space",
      code: "03.M.15",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-82",
      name: "03.1.01 Grand Auditorium",
      display_name: "Grand Auditorium",
      email: "test.space.82@place.tech",
      capacity: 135,
      features: ["Flexible Seating", "Catering Setup"],
      bookable: true,
      map_id: "area-03.1.01-status",
      images: [
        "https://images.unsplash.com/photo-1508100000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1508150000?w=800&h=600&fit=crop"
      ],
      type: "Event Space",
      code: "03.1.01",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-83",
      name: "03.1.02 Conference Hall",
      display_name: "Conference Hall",
      email: "test.space.83@place.tech",
      capacity: 95,
      features: ["Catering Setup", "Projector"],
      bookable: true,
      map_id: "area-03.1.02-status",
      images: [
        "https://images.unsplash.com/photo-1508200000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1508250000?w=800&h=600&fit=crop"
      ],
      type: "Event Space",
      code: "03.1.02",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-84",
      name: "03.1.03 Presentation Theater",
      display_name: "Presentation Theater",
      email: "test.space.84@place.tech",
      capacity: 81,
      features: ["Projector", "Audio System"],
      bookable: true,
      map_id: "area-03.1.03-status",
      images: [
        "https://images.unsplash.com/photo-1508300000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1508350000?w=800&h=600&fit=crop"
      ],
      type: "Event Space",
      code: "03.1.03",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-85",
      name: "03.1.04 Multi-Purpose Arena",
      display_name: "Multi-Purpose Arena",
      email: "test.space.85@place.tech",
      capacity: 149,
      features: ["Catering Setup", "Audio System"],
      bookable: true,
      map_id: "area-03.1.04-status",
      images: [
        "https://images.unsplash.com/photo-1508400000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1508450000?w=800&h=600&fit=crop"
      ],
      type: "Event Space",
      code: "03.1.04",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-86",
      name: "03.1.05 Coffee Central",
      display_name: "Coffee Central",
      email: "test.space.86@place.tech",
      capacity: 10,
      features: ["Refrigerator", "Microwave"],
      bookable: false,
      map_id: "area-03.1.05-status",
      images: [
        "https://images.unsplash.com/photo-1508500000?w=800&h=600&fit=crop"
      ],
      type: "Break Room",
      code: "03.1.05",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-87",
      name: "03.1.06 Relaxation Station",
      display_name: "Relaxation Station",
      email: "test.space.87@place.tech",
      capacity: 10,
      features: ["Coffee Machine", "Microwave"],
      bookable: true,
      map_id: "area-03.1.06-status",
      images: [
        "https://images.unsplash.com/photo-1508600000?w=800&h=600&fit=crop"
      ],
      type: "Break Room",
      code: "03.1.06",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-88",
      name: "03.1.07 Social Hub",
      display_name: "Social Hub",
      email: "test.space.88@place.tech",
      capacity: 11,
      features: ["Refrigerator", "Coffee Machine"],
      bookable: false,
      map_id: "area-03.1.07-status",
      images: [
        "https://images.unsplash.com/photo-1508700000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1508750000?w=800&h=600&fit=crop"
      ],
      type: "Break Room",
      code: "03.1.07",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-89",
      name: "03.1.08 Refresh & Recharge",
      display_name: "Refresh & Recharge",
      email: "test.space.89@place.tech",
      capacity: 18,
      features: ["Coffee Machine"],
      bookable: true,
      map_id: "area-03.1.08-status",
      images: [
        "https://images.unsplash.com/photo-1508800000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1508850000?w=800&h=600&fit=crop"
      ],
      type: "Break Room",
      code: "03.1.08",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-90",
      name: "03.1.09 Community Kitchen",
      display_name: "Community Kitchen",
      email: "test.space.90@place.tech",
      capacity: 16,
      features: ["Coffee Machine"],
      bookable: false,
      map_id: "area-03.1.09-status",
      images: [
        "https://images.unsplash.com/photo-1508900000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1508950000?w=800&h=600&fit=crop"
      ],
      type: "Break Room",
      code: "03.1.09",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-91",
      name: "03.1.10 Deep Work Den",
      display_name: "Deep Work Den",
      email: "test.space.91@place.tech",
      capacity: 1,
      features: ["Natural Light", "Power Outlets"],
      bookable: false,
      map_id: "area-03.1.10-status",
      images: [
        "https://images.unsplash.com/photo-1509000000?w=800&h=600&fit=crop"
      ],
      type: "Focus Room",
      code: "03.1.10",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-92",
      name: "03.1.11 Concentration Cave",
      display_name: "Concentration Cave",
      email: "test.space.92@place.tech",
      capacity: 1,
      features: ["Acoustic Privacy", "Power Outlets"],
      bookable: true,
      map_id: "area-03.1.11-status",
      images: [
        "https://images.unsplash.com/photo-1509100000?w=800&h=600&fit=crop"
      ],
      type: "Focus Room",
      code: "03.1.11",
      zones: ["zone-org", "region-sydney", "bld-03", "bld-03_lvl-1"],
      modules: []
    },
    {
      id: "space-93",
      name: "04.G.01 Quiet Quarters",
      display_name: "Quiet Quarters",
      email: "test.space.93@place.tech",
      capacity: 1,
      features: ["Natural Light", "Acoustic Privacy"],
      bookable: false,
      map_id: "area-04.g.01-status",
      images: [
        "https://images.unsplash.com/photo-1509200000?w=800&h=600&fit=crop"
      ],
      type: "Focus Room",
      code: "04.G.01",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-G"],
      modules: []
    },
    {
      id: "space-94",
      name: "04.G.02 Focus Flow",
      display_name: "Focus Flow",
      email: "test.space.94@place.tech",
      capacity: 1,
      features: ["Power Outlets", "Acoustic Privacy"],
      bookable: false,
      map_id: "area-04.g.02-status",
      images: [
        "https://images.unsplash.com/photo-1509300000?w=800&h=600&fit=crop"
      ],
      type: "Focus Room",
      code: "04.G.02",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-G"],
      modules: []
    },
    {
      id: "space-95",
      name: "04.G.03 Zen Zone",
      display_name: "Zen Zone",
      email: "test.space.95@place.tech",
      capacity: 1,
      features: ["Power Outlets"],
      bookable: false,
      map_id: "area-04.g.03-status",
      images: [
        "https://images.unsplash.com/photo-1509400000?w=800&h=600&fit=crop"
      ],
      type: "Focus Room",
      code: "04.G.03",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-G"],
      modules: []
    },
    {
      id: "space-96",
      name: "04.G.04 Demo Theater",
      display_name: "Demo Theater",
      email: "test.space.96@place.tech",
      capacity: 43,
      features: ["Lighting Control", "Audio System"],
      bookable: true,
      map_id: "area-04.g.04-status",
      images: [
        "https://images.unsplash.com/photo-1509500000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1509550000?w=800&h=600&fit=crop"
      ],
      type: "Presentation Room",
      code: "04.G.04",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-G"],
      modules: []
    },
    {
      id: "space-97",
      name: "04.G.05 Showcase Auditorium",
      display_name: "Showcase Auditorium",
      email: "test.space.97@place.tech",
      capacity: 58,
      features: ["Tiered Seating"],
      bookable: true,
      map_id: "area-04.g.05-status",
      images: [
        "https://images.unsplash.com/photo-1509600000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1509650000?w=800&h=600&fit=crop"
      ],
      type: "Presentation Room",
      code: "04.G.05",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-G"],
      modules: []
    },
    {
      id: "space-98",
      name: "04.1.01 Client Presentation Suite",
      display_name: "Client Presentation Suite",
      email: "test.space.98@place.tech",
      capacity: 58,
      features: ["Audio System", "Large Display"],
      bookable: true,
      map_id: "area-04.1.01-status",
      images: [
        "https://images.unsplash.com/photo-1509700000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1509750000?w=800&h=600&fit=crop"
      ],
      type: "Presentation Room",
      code: "04.1.01",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-1"],
      modules: []
    },
    {
      id: "space-99",
      name: "04.1.02 Sydney Harbour",
      display_name: "Sydney Harbour",
      email: "test.space.99@place.tech",
      capacity: 5,
      features: ["Video Conference", "Display Screen"],
      bookable: true,
      map_id: "area-04.1.02-status",
      images: [
        "https://images.unsplash.com/photo-1509800000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "04.1.02",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-1"],
      modules: []
    },
    {
      id: "space-100",
      name: "04.1.03 Melbourne Cup",
      display_name: "Melbourne Cup",
      email: "test.space.100@place.tech",
      capacity: 4,
      features: ["Video Conference"],
      bookable: true,
      map_id: "area-04.1.03-status",
      images: [
        "https://images.unsplash.com/photo-1509900000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "04.1.03",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-1"],
      modules: []
    },
    {
      id: "space-101",
      name: "04.1.04 Brisbane River",
      display_name: "Brisbane River",
      email: "test.space.101@place.tech",
      capacity: 7,
      features: ["Phone"],
      bookable: true,
      map_id: "area-04.1.04-status",
      images: [
        "https://images.unsplash.com/photo-1510000000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "04.1.04",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-1"],
      modules: []
    },
    {
      id: "space-102",
      name: "04.1.05 Perth Skyline",
      display_name: "Perth Skyline",
      email: "test.space.102@place.tech",
      capacity: 6,
      features: ["Phone", "Video Conference"],
      bookable: true,
      map_id: "area-04.1.05-status",
      images: [
        "https://images.unsplash.com/photo-1510100000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "04.1.05",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-1"],
      modules: []
    },
    {
      id: "space-103",
      name: "04.1.06 Adelaide Hills",
      display_name: "Adelaide Hills",
      email: "test.space.103@place.tech",
      capacity: 6,
      features: ["Phone", "Display Screen"],
      bookable: true,
      map_id: "area-04.1.06-status",
      images: [
        "https://images.unsplash.com/photo-1510200000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "04.1.06",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-1"],
      modules: []
    },
    {
      id: "space-104",
      name: "04.1.07 Darwin Sunset",
      display_name: "Darwin Sunset",
      email: "test.space.104@place.tech",
      capacity: 6,
      features: ["Display Screen", "Phone"],
      bookable: true,
      map_id: "area-04.1.07-status",
      images: [
        "https://images.unsplash.com/photo-1510300000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "04.1.07",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-1"],
      modules: []
    },
    {
      id: "space-105",
      name: "04.1.08 Innovation Lab",
      display_name: "Innovation Lab",
      email: "test.space.105@place.tech",
      capacity: 11,
      features: ["Phone", "Audio System"],
      bookable: true,
      map_id: "area-04.1.08-status",
      images: [
        "https://images.unsplash.com/photo-1510400000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1510450000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "04.1.08",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-1"],
      modules: []
    },
    {
      id: "space-106",
      name: "04.1.09 Strategy Center",
      display_name: "Strategy Center",
      email: "test.space.106@place.tech",
      capacity: 11,
      features: ["Audio System"],
      bookable: true,
      map_id: "area-04.1.09-status",
      images: [
        "https://images.unsplash.com/photo-1510500000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1510550000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "04.1.09",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-1"],
      modules: []
    },
    {
      id: "space-107",
      name: "04.2.01 Think Tank",
      display_name: "Think Tank",
      email: "test.space.107@place.tech",
      capacity: 9,
      features: ["Audio System", "Projector", "Phone"],
      bookable: true,
      map_id: "area-04.2.01-status",
      images: [
        "https://images.unsplash.com/photo-1510600000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "04.2.01",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-2"],
      modules: []
    },
    {
      id: "space-108",
      name: "04.2.02 Solution Studio",
      display_name: "Solution Studio",
      email: "test.space.108@place.tech",
      capacity: 9,
      features: ["Video Conference", "Phone", "Whiteboard"],
      bookable: true,
      map_id: "area-04.2.02-status",
      images: [
        "https://images.unsplash.com/photo-1510700000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "04.2.02",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-2"],
      modules: []
    },
    {
      id: "space-109",
      name: "04.2.03 Discovery Room",
      display_name: "Discovery Room",
      email: "test.space.109@place.tech",
      capacity: 9,
      features: ["Phone", "Audio System"],
      bookable: true,
      map_id: "area-04.2.03-status",
      images: [
        "https://images.unsplash.com/photo-1510800000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "04.2.03",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-2"],
      modules: []
    },
    {
      id: "space-110",
      name: "04.2.04 Vision Quest",
      display_name: "Vision Quest",
      email: "test.space.110@place.tech",
      capacity: 8,
      features: ["Phone"],
      bookable: true,
      map_id: "area-04.2.04-status",
      images: [
        "https://images.unsplash.com/photo-1510900000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "04.2.04",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-2"],
      modules: []
    },
    {
      id: "space-111",
      name: "04.2.05 Executive Boardroom",
      display_name: "Executive Boardroom",
      email: "test.space.111@place.tech",
      capacity: 14,
      features: ["Climate Control", "Audio System"],
      bookable: true,
      map_id: "area-04.2.05-status",
      images: [
        "https://images.unsplash.com/photo-1511000000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1511050000?w=800&h=600&fit=crop"
      ],
      type: "Boardroom",
      code: "04.2.05",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-2"],
      modules: []
    },
    {
      id: "space-112",
      name: "04.2.06 Chairman's Suite",
      display_name: "Chairman's Suite",
      email: "test.space.112@place.tech",
      capacity: 11,
      features: ["Large Display", "Executive Seating", "Climate Control"],
      bookable: true,
      map_id: "area-04.2.06-status",
      images: [
        "https://images.unsplash.com/photo-1511100000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1511150000?w=800&h=600&fit=crop"
      ],
      type: "Boardroom",
      code: "04.2.06",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-2"],
      modules: []
    },
    {
      id: "space-113",
      name: "04.2.07 Directors Lounge",
      display_name: "Directors Lounge",
      email: "test.space.113@place.tech",
      capacity: 11,
      features: ["Climate Control", "Video Conference"],
      bookable: true,
      map_id: "area-04.2.07-status",
      images: [
        "https://images.unsplash.com/photo-1511200000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1511250000?w=800&h=600&fit=crop"
      ],
      type: "Boardroom",
      code: "04.2.07",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-2"],
      modules: []
    },
    {
      id: "space-114",
      name: "04.2.08 Leadership Circle",
      display_name: "Leadership Circle",
      email: "test.space.114@place.tech",
      capacity: 11,
      features: ["Video Conference", "Whiteboard"],
      bookable: true,
      map_id: "area-04.2.08-status",
      images: [
        "https://images.unsplash.com/photo-1511300000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1511350000?w=800&h=600&fit=crop"
      ],
      type: "Boardroom",
      code: "04.2.08",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-2"],
      modules: []
    },
    {
      id: "space-115",
      name: "04.2.09 Learning Hub Alpha",
      display_name: "Learning Hub Alpha",
      email: "test.space.115@place.tech",
      capacity: 17,
      features: ["Audio System", "Flipchart"],
      bookable: true,
      map_id: "area-04.2.09-status",
      images: [
        "https://images.unsplash.com/photo-1511400000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1511450000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "04.2.09",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-2"],
      modules: []
    },
    {
      id: "space-116",
      name: "04.2.10 Development Center Beta",
      display_name: "Development Center Beta",
      email: "test.space.116@place.tech",
      capacity: 23,
      features: ["Whiteboard", "Breakout Tables"],
      bookable: true,
      map_id: "area-04.2.10-status",
      images: [
        "https://images.unsplash.com/photo-1511500000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1511550000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "04.2.10",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-2"],
      modules: []
    },
    {
      id: "space-117",
      name: "04.2.11 Skills Workshop",
      display_name: "Skills Workshop",
      email: "test.space.117@place.tech",
      capacity: 26,
      features: ["Audio System", "Flipchart"],
      bookable: true,
      map_id: "area-04.2.11-status",
      images: [
        "https://images.unsplash.com/photo-1511600000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1511650000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "04.2.11",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-2"],
      modules: []
    },
    {
      id: "space-118",
      name: "04.2.12 Knowledge Exchange",
      display_name: "Knowledge Exchange",
      email: "test.space.118@place.tech",
      capacity: 16,
      features: ["Flipchart", "Whiteboard", "Audio System"],
      bookable: true,
      map_id: "area-04.2.12-status",
      images: [
        "https://images.unsplash.com/photo-1511700000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1511750000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "04.2.12",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-2"],
      modules: []
    },
    {
      id: "space-119",
      name: "04.2.13 Growth Academy",
      display_name: "Growth Academy",
      email: "test.space.119@place.tech",
      capacity: 23,
      features: ["Projector", "Whiteboard"],
      bookable: true,
      map_id: "area-04.2.13-status",
      images: [
        "https://images.unsplash.com/photo-1511800000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1511850000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "04.2.13",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-2"],
      modules: []
    },
    {
      id: "space-120",
      name: "04.2.14 Call Pod 1",
      display_name: "Call Pod 1",
      email: "test.space.120@place.tech",
      capacity: 1,
      features: ["Acoustic Privacy"],
      bookable: true,
      map_id: "area-04.2.14-status",
      images: [
        "https://images.unsplash.com/photo-1511900000?w=800&h=600&fit=crop"
      ],
      type: "Phone Booth",
      code: "04.2.14",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-2"],
      modules: []
    },
    {
      id: "space-121",
      name: "04.2.15 Call Pod 2",
      display_name: "Call Pod 2",
      email: "test.space.121@place.tech",
      capacity: 1,
      features: ["Power Outlet"],
      bookable: true,
      map_id: "area-04.2.15-status",
      images: [
        "https://images.unsplash.com/photo-1512000000?w=800&h=600&fit=crop"
      ],
      type: "Phone Booth",
      code: "04.2.15",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-2"],
      modules: []
    },
    {
      id: "space-122",
      name: "04.3.01 Call Pod 3",
      display_name: "Call Pod 3",
      email: "test.space.122@place.tech",
      capacity: 1,
      features: ["Power Outlet", "Phone"],
      bookable: true,
      map_id: "area-04.3.01-status",
      images: [
        "https://images.unsplash.com/photo-1512100000?w=800&h=600&fit=crop"
      ],
      type: "Phone Booth",
      code: "04.3.01",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-3"],
      modules: []
    },
    {
      id: "space-123",
      name: "04.3.02 Call Pod 4",
      display_name: "Call Pod 4",
      email: "test.space.123@place.tech",
      capacity: 1,
      features: ["Phone"],
      bookable: true,
      map_id: "area-04.3.02-status",
      images: [
        "https://images.unsplash.com/photo-1512200000?w=800&h=600&fit=crop"
      ],
      type: "Phone Booth",
      code: "04.3.02",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-3"],
      modules: []
    },
    {
      id: "space-124",
      name: "04.3.03 Privacy Booth A",
      display_name: "Privacy Booth A",
      email: "test.space.124@place.tech",
      capacity: 1,
      features: ["Acoustic Privacy"],
      bookable: true,
      map_id: "area-04.3.03-status",
      images: [
        "https://images.unsplash.com/photo-1512300000?w=800&h=600&fit=crop"
      ],
      type: "Phone Booth",
      code: "04.3.03",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-3"],
      modules: []
    },
    {
      id: "space-125",
      name: "04.3.04 Privacy Booth B",
      display_name: "Privacy Booth B",
      email: "test.space.125@place.tech",
      capacity: 1,
      features: ["Acoustic Privacy"],
      bookable: true,
      map_id: "area-04.3.04-status",
      images: [
        "https://images.unsplash.com/photo-1512400000?w=800&h=600&fit=crop"
      ],
      type: "Phone Booth",
      code: "04.3.04",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-3"],
      modules: []
    },
    {
      id: "space-126",
      name: "04.3.05 Creative Corner",
      display_name: "Creative Corner",
      email: "test.space.126@place.tech",
      capacity: 8,
      features: ["Informal Seating", "Power Outlets"],
      bookable: false,
      map_id: "area-04.3.05-status",
      images: [
        "https://images.unsplash.com/photo-1512500000?w=800&h=600&fit=crop"
      ],
      type: "Collaboration Space",
      code: "04.3.05",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-3"],
      modules: []
    },
    {
      id: "space-127",
      name: "04.3.06 Brainstorm Bay",
      display_name: "Brainstorm Bay",
      email: "test.space.127@place.tech",
      capacity: 8,
      features: ["Whiteboard"],
      bookable: false,
      map_id: "area-04.3.06-status",
      images: [
        "https://images.unsplash.com/photo-1512600000?w=800&h=600&fit=crop"
      ],
      type: "Collaboration Space",
      code: "04.3.06",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-3"],
      modules: []
    },
    {
      id: "space-128",
      name: "04.3.07 Idea Incubator",
      display_name: "Idea Incubator",
      email: "test.space.128@place.tech",
      capacity: 8,
      features: ["Informal Seating", "Moveable Furniture"],
      bookable: false,
      map_id: "area-04.3.07-status",
      images: [
        "https://images.unsplash.com/photo-1512700000?w=800&h=600&fit=crop"
      ],
      type: "Collaboration Space",
      code: "04.3.07",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-3"],
      modules: []
    },
    {
      id: "space-129",
      name: "04.3.08 Innovation Intersection",
      display_name: "Innovation Intersection",
      email: "test.space.129@place.tech",
      capacity: 6,
      features: ["Moveable Furniture"],
      bookable: false,
      map_id: "area-04.3.08-status",
      images: [
        "https://images.unsplash.com/photo-1512800000?w=800&h=600&fit=crop"
      ],
      type: "Collaboration Space",
      code: "04.3.08",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-3"],
      modules: []
    },
    {
      id: "space-130",
      name: "04.3.09 Design Den",
      display_name: "Design Den",
      email: "test.space.130@place.tech",
      capacity: 6,
      features: ["Moveable Furniture", "Power Outlets"],
      bookable: true,
      map_id: "area-04.3.09-status",
      images: [
        "https://images.unsplash.com/photo-1512900000?w=800&h=600&fit=crop"
      ],
      type: "Collaboration Space",
      code: "04.3.09",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-3"],
      modules: []
    },
    {
      id: "space-131",
      name: "04.4.01 Grand Auditorium",
      display_name: "Grand Auditorium",
      email: "test.space.131@place.tech",
      capacity: 116,
      features: ["Stage/Platform", "Catering Setup"],
      bookable: true,
      map_id: "area-04.4.01-status",
      images: [
        "https://images.unsplash.com/photo-1513000000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513050000?w=800&h=600&fit=crop"
      ],
      type: "Event Space",
      code: "04.4.01",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-4"],
      modules: []
    },
    {
      id: "space-132",
      name: "04.4.02 Conference Hall",
      display_name: "Conference Hall",
      email: "test.space.132@place.tech",
      capacity: 51,
      features: ["Audio System", "Stage/Platform"],
      bookable: true,
      map_id: "area-04.4.02-status",
      images: [
        "https://images.unsplash.com/photo-1513100000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513150000?w=800&h=600&fit=crop"
      ],
      type: "Event Space",
      code: "04.4.02",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-4"],
      modules: []
    },
    {
      id: "space-133",
      name: "04.4.03 Presentation Theater",
      display_name: "Presentation Theater",
      email: "test.space.133@place.tech",
      capacity: 73,
      features: ["Audio System", "Catering Setup"],
      bookable: true,
      map_id: "area-04.4.03-status",
      images: [
        "https://images.unsplash.com/photo-1513200000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513250000?w=800&h=600&fit=crop"
      ],
      type: "Event Space",
      code: "04.4.03",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-4"],
      modules: []
    },
    {
      id: "space-134",
      name: "04.4.04 Multi-Purpose Arena",
      display_name: "Multi-Purpose Arena",
      email: "test.space.134@place.tech",
      capacity: 121,
      features: ["Projector", "Audio System"],
      bookable: true,
      map_id: "area-04.4.04-status",
      images: [
        "https://images.unsplash.com/photo-1513300000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513350000?w=800&h=600&fit=crop"
      ],
      type: "Event Space",
      code: "04.4.04",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-4"],
      modules: []
    },
    {
      id: "space-135",
      name: "04.4.05 Coffee Central",
      display_name: "Coffee Central",
      email: "test.space.135@place.tech",
      capacity: 19,
      features: ["Kitchen Facilities", "Refrigerator"],
      bookable: false,
      map_id: "area-04.4.05-status",
      images: [
        "https://images.unsplash.com/photo-1513400000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513450000?w=800&h=600&fit=crop"
      ],
      type: "Break Room",
      code: "04.4.05",
      zones: ["zone-org", "region-melbourne", "bld-04", "bld-04_lvl-4"],
      modules: []
    },
    {
      id: "space-136",
      name: "05.G.01 Relaxation Station",
      display_name: "Relaxation Station",
      email: "test.space.136@place.tech",
      capacity: 14,
      features: ["Coffee Machine", "Microwave"],
      bookable: false,
      map_id: "area-05.g.01-status",
      images: [
        "https://images.unsplash.com/photo-1513500000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513550000?w=800&h=600&fit=crop"
      ],
      type: "Break Room",
      code: "05.G.01",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-G"],
      modules: []
    },
    {
      id: "space-137",
      name: "05.G.02 Social Hub",
      display_name: "Social Hub",
      email: "test.space.137@place.tech",
      capacity: 10,
      features: ["Kitchen Facilities", "Microwave"],
      bookable: false,
      map_id: "area-05.g.02-status",
      images: [
        "https://images.unsplash.com/photo-1513600000?w=800&h=600&fit=crop"
      ],
      type: "Break Room",
      code: "05.G.02",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-G"],
      modules: []
    },
    {
      id: "space-138",
      name: "05.G.03 Refresh & Recharge",
      display_name: "Refresh & Recharge",
      email: "test.space.138@place.tech",
      capacity: 10,
      features: ["Seating", "Microwave"],
      bookable: true,
      map_id: "area-05.g.03-status",
      images: [
        "https://images.unsplash.com/photo-1513700000?w=800&h=600&fit=crop"
      ],
      type: "Break Room",
      code: "05.G.03",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-G"],
      modules: []
    },
    {
      id: "space-139",
      name: "05.G.04 Community Kitchen",
      display_name: "Community Kitchen",
      email: "test.space.139@place.tech",
      capacity: 11,
      features: ["Coffee Machine"],
      bookable: false,
      map_id: "area-05.g.04-status",
      images: [
        "https://images.unsplash.com/photo-1513800000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513850000?w=800&h=600&fit=crop"
      ],
      type: "Break Room",
      code: "05.G.04",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-G"],
      modules: []
    },
    {
      id: "space-140",
      name: "05.G.05 Deep Work Den",
      display_name: "Deep Work Den",
      email: "test.space.140@place.tech",
      capacity: 1,
      features: ["Natural Light", "Power Outlets"],
      bookable: true,
      map_id: "area-05.g.05-status",
      images: [
        "https://images.unsplash.com/photo-1513900000?w=800&h=600&fit=crop"
      ],
      type: "Focus Room",
      code: "05.G.05",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-G"],
      modules: []
    },
    {
      id: "space-141",
      name: "05.G.06 Concentration Cave",
      display_name: "Concentration Cave",
      email: "test.space.141@place.tech",
      capacity: 1,
      features: ["Natural Light", "Power Outlets"],
      bookable: false,
      map_id: "area-05.g.06-status",
      images: [
        "https://images.unsplash.com/photo-1514000000?w=800&h=600&fit=crop"
      ],
      type: "Focus Room",
      code: "05.G.06",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-G"],
      modules: []
    },
    {
      id: "space-142",
      name: "05.G.07 Quiet Quarters",
      display_name: "Quiet Quarters",
      email: "test.space.142@place.tech",
      capacity: 1,
      features: ["Power Outlets", "Natural Light"],
      bookable: false,
      map_id: "area-05.g.07-status",
      images: [
        "https://images.unsplash.com/photo-1514100000?w=800&h=600&fit=crop"
      ],
      type: "Focus Room",
      code: "05.G.07",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-G"],
      modules: []
    },
    {
      id: "space-143",
      name: "05.G.08 Focus Flow",
      display_name: "Focus Flow",
      email: "test.space.143@place.tech",
      capacity: 1,
      features: ["Natural Light"],
      bookable: false,
      map_id: "area-05.g.08-status",
      images: [
        "https://images.unsplash.com/photo-1514200000?w=800&h=600&fit=crop"
      ],
      type: "Focus Room",
      code: "05.G.08",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-G"],
      modules: []
    },
    {
      id: "space-144",
      name: "05.G.09 Zen Zone",
      display_name: "Zen Zone",
      email: "test.space.144@place.tech",
      capacity: 1,
      features: ["Desk", "Acoustic Privacy"],
      bookable: false,
      map_id: "area-05.g.09-status",
      images: [
        "https://images.unsplash.com/photo-1514300000?w=800&h=600&fit=crop"
      ],
      type: "Focus Room",
      code: "05.G.09",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-G"],
      modules: []
    },
    {
      id: "space-145",
      name: "05.G.10 Demo Theater",
      display_name: "Demo Theater",
      email: "test.space.145@place.tech",
      capacity: 72,
      features: ["Large Display", "Audio System"],
      bookable: true,
      map_id: "area-05.g.10-status",
      images: [
        "https://images.unsplash.com/photo-1514400000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1514450000?w=800&h=600&fit=crop"
      ],
      type: "Presentation Room",
      code: "05.G.10",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-G"],
      modules: []
    },
    {
      id: "space-146",
      name: "05.G.11 Showcase Auditorium",
      display_name: "Showcase Auditorium",
      email: "test.space.146@place.tech",
      capacity: 77,
      features: ["Large Display"],
      bookable: true,
      map_id: "area-05.g.11-status",
      images: [
        "https://images.unsplash.com/photo-1514500000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1514550000?w=800&h=600&fit=crop"
      ],
      type: "Presentation Room",
      code: "05.G.11",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-G"],
      modules: []
    },
    {
      id: "space-147",
      name: "05.G.12 Client Presentation Suite",
      display_name: "Client Presentation Suite",
      email: "test.space.147@place.tech",
      capacity: 42,
      features: ["Lighting Control"],
      bookable: true,
      map_id: "area-05.g.12-status",
      images: [
        "https://images.unsplash.com/photo-1514600000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1514650000?w=800&h=600&fit=crop"
      ],
      type: "Presentation Room",
      code: "05.G.12",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-G"],
      modules: []
    },
    {
      id: "space-148",
      name: "05.1.01 Sydney Harbour",
      display_name: "Sydney Harbour",
      email: "test.space.148@place.tech",
      capacity: 7,
      features: ["Display Screen", "Video Conference"],
      bookable: true,
      map_id: "area-05.1.01-status",
      images: [
        "https://images.unsplash.com/photo-1514700000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "05.1.01",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-1"],
      modules: []
    },
    {
      id: "space-149",
      name: "05.1.02 Melbourne Cup",
      display_name: "Melbourne Cup",
      email: "test.space.149@place.tech",
      capacity: 7,
      features: ["Whiteboard", "Display Screen"],
      bookable: true,
      map_id: "area-05.1.02-status",
      images: [
        "https://images.unsplash.com/photo-1514800000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "05.1.02",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-1"],
      modules: []
    },
    {
      id: "space-150",
      name: "05.1.03 Brisbane River",
      display_name: "Brisbane River",
      email: "test.space.150@place.tech",
      capacity: 5,
      features: ["Video Conference", "Phone"],
      bookable: true,
      map_id: "area-05.1.03-status",
      images: [
        "https://images.unsplash.com/photo-1514900000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "05.1.03",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-1"],
      modules: []
    },
    {
      id: "space-151",
      name: "05.1.04 Perth Skyline",
      display_name: "Perth Skyline",
      email: "test.space.151@place.tech",
      capacity: 7,
      features: ["Phone", "Whiteboard"],
      bookable: true,
      map_id: "area-05.1.04-status",
      images: [
        "https://images.unsplash.com/photo-1515000000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "05.1.04",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-1"],
      modules: []
    },
    {
      id: "space-152",
      name: "05.1.05 Adelaide Hills",
      display_name: "Adelaide Hills",
      email: "test.space.152@place.tech",
      capacity: 5,
      features: ["Phone", "Video Conference"],
      bookable: true,
      map_id: "area-05.1.05-status",
      images: [
        "https://images.unsplash.com/photo-1515100000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "05.1.05",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-1"],
      modules: []
    },
    {
      id: "space-153",
      name: "05.1.06 Darwin Sunset",
      display_name: "Darwin Sunset",
      email: "test.space.153@place.tech",
      capacity: 7,
      features: ["Video Conference", "Phone"],
      bookable: true,
      map_id: "area-05.1.06-status",
      images: [
        "https://images.unsplash.com/photo-1515200000?w=800&h=600&fit=crop"
      ],
      type: "Meeting Room",
      code: "05.1.06",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-1"],
      modules: []
    },
    {
      id: "space-154",
      name: "05.1.07 Innovation Lab",
      display_name: "Innovation Lab",
      email: "test.space.154@place.tech",
      capacity: 8,
      features: ["Phone", "Video Conference", "Projector"],
      bookable: true,
      map_id: "area-05.1.07-status",
      images: [
        "https://images.unsplash.com/photo-1515300000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "05.1.07",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-1"],
      modules: []
    },
    {
      id: "space-155",
      name: "05.2.01 Strategy Center",
      display_name: "Strategy Center",
      email: "test.space.155@place.tech",
      capacity: 10,
      features: ["Projector", "Whiteboard"],
      bookable: true,
      map_id: "area-05.2.01-status",
      images: [
        "https://images.unsplash.com/photo-1515400000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "05.2.01",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-2"],
      modules: []
    },
    {
      id: "space-156",
      name: "05.2.02 Think Tank",
      display_name: "Think Tank",
      email: "test.space.156@place.tech",
      capacity: 8,
      features: ["Whiteboard"],
      bookable: true,
      map_id: "area-05.2.02-status",
      images: [
        "https://images.unsplash.com/photo-1515500000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "05.2.02",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-2"],
      modules: []
    },
    {
      id: "space-157",
      name: "05.2.03 Solution Studio",
      display_name: "Solution Studio",
      email: "test.space.157@place.tech",
      capacity: 8,
      features: ["Phone"],
      bookable: true,
      map_id: "area-05.2.03-status",
      images: [
        "https://images.unsplash.com/photo-1515600000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "05.2.03",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-2"],
      modules: []
    },
    {
      id: "space-158",
      name: "05.2.04 Discovery Room",
      display_name: "Discovery Room",
      email: "test.space.158@place.tech",
      capacity: 10,
      features: ["Whiteboard", "Projector"],
      bookable: true,
      map_id: "area-05.2.04-status",
      images: [
        "https://images.unsplash.com/photo-1515700000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "05.2.04",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-2"],
      modules: []
    },
    {
      id: "space-159",
      name: "05.2.05 Vision Quest",
      display_name: "Vision Quest",
      email: "test.space.159@place.tech",
      capacity: 10,
      features: ["Phone", "Audio System"],
      bookable: true,
      map_id: "area-05.2.05-status",
      images: [
        "https://images.unsplash.com/photo-1515800000?w=800&h=600&fit=crop"
      ],
      type: "Conference Room",
      code: "05.2.05",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-2"],
      modules: []
    },
    {
      id: "space-160",
      name: "05.2.06 Executive Boardroom",
      display_name: "Executive Boardroom",
      email: "test.space.160@place.tech",
      capacity: 12,
      features: ["Executive Seating", "Audio System"],
      bookable: true,
      map_id: "area-05.2.06-status",
      images: [
        "https://images.unsplash.com/photo-1515900000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515950000?w=800&h=600&fit=crop"
      ],
      type: "Boardroom",
      code: "05.2.06",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-2"],
      modules: []
    },
    {
      id: "space-161",
      name: "05.2.07 Chairman's Suite",
      display_name: "Chairman's Suite",
      email: "test.space.161@place.tech",
      capacity: 13,
      features: ["Audio System", "Video Conference", "Climate Control"],
      bookable: true,
      map_id: "area-05.2.07-status",
      images: [
        "https://images.unsplash.com/photo-1516000000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516050000?w=800&h=600&fit=crop"
      ],
      type: "Boardroom",
      code: "05.2.07",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-2"],
      modules: []
    },
    {
      id: "space-162",
      name: "05.2.08 Directors Lounge",
      display_name: "Directors Lounge",
      email: "test.space.162@place.tech",
      capacity: 14,
      features: ["Executive Seating", "Audio System"],
      bookable: true,
      map_id: "area-05.2.08-status",
      images: [
        "https://images.unsplash.com/photo-1516100000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516150000?w=800&h=600&fit=crop"
      ],
      type: "Boardroom",
      code: "05.2.08",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-2"],
      modules: []
    },
    {
      id: "space-163",
      name: "05.2.09 Leadership Circle",
      display_name: "Leadership Circle",
      email: "test.space.163@place.tech",
      capacity: 14,
      features: ["Large Display", "Whiteboard"],
      bookable: true,
      map_id: "area-05.2.09-status",
      images: [
        "https://images.unsplash.com/photo-1516200000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516250000?w=800&h=600&fit=crop"
      ],
      type: "Boardroom",
      code: "05.2.09",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-2"],
      modules: []
    },
    {
      id: "space-164",
      name: "05.2.10 Learning Hub Alpha",
      display_name: "Learning Hub Alpha",
      email: "test.space.164@place.tech",
      capacity: 28,
      features: ["Flipchart", "Whiteboard"],
      bookable: true,
      map_id: "area-05.2.10-status",
      images: [
        "https://images.unsplash.com/photo-1516300000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516350000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "05.2.10",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-2"],
      modules: []
    },
    {
      id: "space-165",
      name: "05.2.11 Development Center Beta",
      display_name: "Development Center Beta",
      email: "test.space.165@place.tech",
      capacity: 33,
      features: ["Flipchart", "Projector"],
      bookable: true,
      map_id: "area-05.2.11-status",
      images: [
        "https://images.unsplash.com/photo-1516400000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516450000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "05.2.11",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-2"],
      modules: []
    },
    {
      id: "space-166",
      name: "05.2.12 Skills Workshop",
      display_name: "Skills Workshop",
      email: "test.space.166@place.tech",
      capacity: 21,
      features: ["Flipchart", "Breakout Tables"],
      bookable: true,
      map_id: "area-05.2.12-status",
      images: [
        "https://images.unsplash.com/photo-1516500000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516550000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "05.2.12",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-2"],
      modules: []
    },
    {
      id: "space-167",
      name: "05.2.13 Knowledge Exchange",
      display_name: "Knowledge Exchange",
      email: "test.space.167@place.tech",
      capacity: 27,
      features: ["Flipchart", "Projector"],
      bookable: true,
      map_id: "area-05.2.13-status",
      images: [
        "https://images.unsplash.com/photo-1516600000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516650000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "05.2.13",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-2"],
      modules: []
    },
    {
      id: "space-168",
      name: "05.2.14 Growth Academy",
      display_name: "Growth Academy",
      email: "test.space.168@place.tech",
      capacity: 22,
      features: ["Projector", "Audio System", "Breakout Tables"],
      bookable: true,
      map_id: "area-05.2.14-status",
      images: [
        "https://images.unsplash.com/photo-1516700000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516750000?w=800&h=600&fit=crop"
      ],
      type: "Training Room",
      code: "05.2.14",
      zones: ["zone-org", "region-melbourne", "bld-05", "bld-05_lvl-2"],
      modules: []
    }
  ],
  users: [
    {
      id: "staff-1",
      name: "Sarah Chen",
      email: "sarah.chen@place.tech",
      first_name: "Sarah",
      last_name: "Chen",
      phone: "+61 3 1143 9640",
      department: "Engineering",
      groups: ["staff", "engineering", "manager"],
      staff_id: "EMP0001",
      image: "https://images.unsplash.com/photo-1500000000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: true
    },
    {
      id: "staff-2",
      name: "Michael Rodriguez",
      email: "michael.rodriguez@place.tech",
      first_name: "Michael",
      last_name: "Rodriguez",
      phone: "+61 9 2326 8103",
      department: "Product",
      groups: ["staff", "product", "manager"],
      staff_id: "EMP0002",
      image: "https://images.unsplash.com/photo-1500001000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-3",
      name: "Emily Johnson",
      email: "emily.johnson@place.tech",
      first_name: "Emily",
      last_name: "Johnson",
      phone: "+61 2 3050 8555",
      department: "Design",
      groups: ["staff", "design"],
      staff_id: "EMP0003",
      image: "https://images.unsplash.com/photo-1500002000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-4",
      name: "David Park",
      email: "david.park@place.tech",
      first_name: "David",
      last_name: "Park",
      phone: "+61 4 4411 6471",
      department: "Engineering",
      groups: ["staff", "engineering", "manager"],
      staff_id: "EMP0004",
      image: "https://images.unsplash.com/photo-1500003000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-5",
      name: "Jessica Thompson",
      email: "jessica.thompson@place.tech",
      first_name: "Jessica",
      last_name: "Thompson",
      phone: "+61 4 3481 3532",
      department: "Marketing",
      groups: ["staff", "marketing", "manager"],
      staff_id: "EMP0005",
      image: "https://images.unsplash.com/photo-1500004000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-6",
      name: "Alex Kumar",
      email: "alex.kumar@place.tech",
      first_name: "Alex",
      last_name: "Kumar",
      phone: "+61 8 7155 9943",
      department: "Sales",
      groups: ["staff", "sales"],
      staff_id: "EMP0006",
      image: "https://images.unsplash.com/photo-1500005000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-7",
      name: "Rachel Williams",
      email: "rachel.williams@place.tech",
      first_name: "Rachel",
      last_name: "Williams",
      phone: "+61 8 5908 5863",
      department: "Human Resources",
      groups: ["staff", "human-resources"],
      staff_id: "EMP0007",
      image: "https://images.unsplash.com/photo-1500006000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-8",
      name: "James O'Connor",
      email: "james.oconnor@place.tech",
      first_name: "James",
      last_name: "O'Connor",
      phone: "+61 5 1947 9977",
      department: "Finance",
      groups: ["staff", "finance"],
      staff_id: "EMP0008",
      image: "https://images.unsplash.com/photo-1500007000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-9",
      name: "Lisa Zhang",
      email: "lisa.zhang@place.tech",
      first_name: "Lisa",
      last_name: "Zhang",
      phone: "+61 9 4353 5624",
      department: "Operations",
      groups: ["staff", "operations", "manager"],
      staff_id: "EMP0009",
      image: "https://images.unsplash.com/photo-1500008000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-10",
      name: "Tom Mitchell",
      email: "tom.mitchell@place.tech",
      first_name: "Tom",
      last_name: "Mitchell",
      phone: "+61 6 5360 4856",
      department: "Engineering",
      groups: ["staff", "engineering"],
      staff_id: "EMP0010",
      image: "https://images.unsplash.com/photo-1500009000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-11",
      name: "Amanda Foster",
      email: "amanda.foster@place.tech",
      first_name: "Amanda",
      last_name: "Foster",
      phone: "+61 3 7006 3712",
      department: "Customer Success",
      groups: ["staff", "customer-success", "manager"],
      staff_id: "EMP0011",
      image: "https://images.unsplash.com/photo-1500010000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-12",
      name: "Chris Anderson",
      email: "chris.anderson@place.tech",
      first_name: "Chris",
      last_name: "Anderson",
      phone: "+61 4 7459 7499",
      department: "IT",
      groups: ["staff", "it"],
      staff_id: "EMP0012",
      image: "https://images.unsplash.com/photo-1500011000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-13",
      name: "Priya Sharma",
      email: "priya.sharma@place.tech",
      first_name: "Priya",
      last_name: "Sharma",
      phone: "+61 9 3409 6838",
      department: "Research & Development",
      groups: ["staff", "research-&-development"],
      staff_id: "EMP0013",
      image: "https://images.unsplash.com/photo-1500012000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-14",
      name: "Mark Davis",
      email: "mark.davis@place.tech",
      first_name: "Mark",
      last_name: "Davis",
      phone: "+61 7 2807 7668",
      department: "Sales",
      groups: ["staff", "sales", "manager"],
      staff_id: "EMP0014",
      image: "https://images.unsplash.com/photo-1500013000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-15",
      name: "Sophie Taylor",
      email: "sophie.taylor@place.tech",
      first_name: "Sophie",
      last_name: "Taylor",
      phone: "+61 7 3865 1713",
      department: "Design",
      groups: ["staff", "design", "manager"],
      staff_id: "EMP0015",
      image: "https://images.unsplash.com/photo-1500014000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-16",
      name: "Daniel Lee",
      email: "daniel.lee@place.tech",
      first_name: "Daniel",
      last_name: "Lee",
      phone: "+61 8 6859 9580",
      department: "Engineering",
      groups: ["staff", "engineering"],
      staff_id: "EMP0016",
      image: "https://images.unsplash.com/photo-1500015000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-17",
      name: "Olivia Brown",
      email: "olivia.brown@place.tech",
      first_name: "Olivia",
      last_name: "Brown",
      phone: "+61 6 2835 5105",
      department: "Marketing",
      groups: ["staff", "marketing"],
      staff_id: "EMP0017",
      image: "https://images.unsplash.com/photo-1500016000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-18",
      name: "Ryan Wilson",
      email: "ryan.wilson@place.tech",
      first_name: "Ryan",
      last_name: "Wilson",
      phone: "+61 2 6093 1061",
      department: "Product",
      groups: ["staff", "product"],
      staff_id: "EMP0018",
      image: "https://images.unsplash.com/photo-1500017000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-19",
      name: "Grace Martinez",
      email: "grace.martinez@place.tech",
      first_name: "Grace",
      last_name: "Martinez",
      phone: "+61 6 2110 2487",
      department: "Legal",
      groups: ["staff", "legal"],
      staff_id: "EMP0019",
      image: "https://images.unsplash.com/photo-1500018000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-20",
      name: "Ben Clarke",
      email: "ben.clarke@place.tech",
      first_name: "Ben",
      last_name: "Clarke",
      phone: "+61 7 2044 3553",
      department: "Engineering",
      groups: ["staff", "engineering"],
      staff_id: "EMP0020",
      image: "https://images.unsplash.com/photo-1500019000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-21",
      name: "Natasha Petrov",
      email: "natasha.petrov@place.tech",
      first_name: "Natasha",
      last_name: "Petrov",
      phone: "+61 5 8348 7343",
      department: "Engineering",
      groups: ["staff", "engineering", "manager"],
      staff_id: "EMP0021",
      image: "https://images.unsplash.com/photo-1500020000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-22",
      name: "Carlos Silva",
      email: "carlos.silva@place.tech",
      first_name: "Carlos",
      last_name: "Silva",
      phone: "+61 6 5818 4330",
      department: "Sales",
      groups: ["staff", "sales", "manager"],
      staff_id: "EMP0022",
      image: "https://images.unsplash.com/photo-1500021000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-23",
      name: "Maya Patel",
      email: "maya.patel@place.tech",
      first_name: "Maya",
      last_name: "Patel",
      phone: "+61 9 6335 4577",
      department: "Design",
      groups: ["staff", "design"],
      staff_id: "EMP0023",
      image: "https://images.unsplash.com/photo-1500022000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-24",
      name: "Jacob Nielsen",
      email: "jacob.nielsen@place.tech",
      first_name: "Jacob",
      last_name: "Nielsen",
      phone: "+61 2 5782 4421",
      department: "Marketing",
      groups: ["staff", "marketing", "manager"],
      staff_id: "EMP0024",
      image: "https://images.unsplash.com/photo-1500023000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-25",
      name: "Isabella Romano",
      email: "isabella.romano@place.tech",
      first_name: "Isabella",
      last_name: "Romano",
      phone: "+61 8 3259 1671",
      department: "Human Resources",
      groups: ["staff", "human-resources", "manager"],
      staff_id: "EMP0025",
      image: "https://images.unsplash.com/photo-1500024000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-26",
      name: "Hassan Ahmed",
      email: "hassan.ahmed@place.tech",
      first_name: "Hassan",
      last_name: "Ahmed",
      phone: "+61 2 8998 8839",
      department: "Finance",
      groups: ["staff", "finance", "manager"],
      staff_id: "EMP0026",
      image: "https://images.unsplash.com/photo-1500025000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-27",
      name: "Elena Popov",
      email: "elena.popov@place.tech",
      first_name: "Elena",
      last_name: "Popov",
      phone: "+61 5 3129 8039",
      department: "Operations",
      groups: ["staff", "operations"],
      staff_id: "EMP0027",
      image: "https://images.unsplash.com/photo-1500026000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-28",
      name: "Nathan Campbell",
      email: "nathan.campbell@place.tech",
      first_name: "Nathan",
      last_name: "Campbell",
      phone: "+61 5 7214 4480",
      department: "Engineering",
      groups: ["staff", "engineering"],
      staff_id: "EMP0028",
      image: "https://images.unsplash.com/photo-1500027000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-29",
      name: "Zoe Walker",
      email: "zoe.walker@place.tech",
      first_name: "Zoe",
      last_name: "Walker",
      phone: "+61 6 1492 6853",
      department: "Product",
      groups: ["staff", "product"],
      staff_id: "EMP0029",
      image: "https://images.unsplash.com/photo-1500028000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-30",
      name: "Adrian Kowalski",
      email: "adrian.kowalski@place.tech",
      first_name: "Adrian",
      last_name: "Kowalski",
      phone: "+61 6 7070 4557",
      department: "IT",
      groups: ["staff", "it"],
      staff_id: "EMP0030",
      image: "https://images.unsplash.com/photo-1500029000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-31",
      name: "Samantha Brooks",
      email: "samantha.brooks@place.tech",
      first_name: "Samantha",
      last_name: "Brooks",
      phone: "+61 5 6480 9337",
      department: "Customer Success",
      groups: ["staff", "customer-success"],
      staff_id: "EMP0031",
      image: "https://images.unsplash.com/photo-1500030000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-32",
      name: "Lucas Garcia",
      email: "lucas.garcia@place.tech",
      first_name: "Lucas",
      last_name: "Garcia",
      phone: "+61 4 9919 4490",
      department: "Research & Development",
      groups: ["staff", "research-&-development"],
      staff_id: "EMP0032",
      image: "https://images.unsplash.com/photo-1500031000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-33",
      name: "Aisha Johnson",
      email: "aisha.johnson@place.tech",
      first_name: "Aisha",
      last_name: "Johnson",
      phone: "+61 6 6150 8321",
      department: "Legal",
      groups: ["staff", "legal"],
      staff_id: "EMP0033",
      image: "https://images.unsplash.com/photo-1500032000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-34",
      name: "Marcus Stone",
      email: "marcus.stone@place.tech",
      first_name: "Marcus",
      last_name: "Stone",
      phone: "+61 4 6889 3081",
      department: "Engineering",
      groups: ["staff", "engineering", "manager"],
      staff_id: "EMP0034",
      image: "https://images.unsplash.com/photo-1500033000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-35",
      name: "Lily Watson",
      email: "lily.watson@place.tech",
      first_name: "Lily",
      last_name: "Watson",
      phone: "+61 8 2670 1833",
      department: "Design",
      groups: ["staff", "design"],
      staff_id: "EMP0035",
      image: "https://images.unsplash.com/photo-1500034000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-36",
      name: "Oscar Murphy",
      email: "oscar.murphy@place.tech",
      first_name: "Oscar",
      last_name: "Murphy",
      phone: "+61 3 7473 4544",
      department: "Sales",
      groups: ["staff", "sales", "manager"],
      staff_id: "EMP0036",
      image: "https://images.unsplash.com/photo-1500035000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-37",
      name: "Chloe Edwards",
      email: "chloe.edwards@place.tech",
      first_name: "Chloe",
      last_name: "Edwards",
      phone: "+61 9 2149 7403",
      department: "Marketing",
      groups: ["staff", "marketing"],
      staff_id: "EMP0037",
      image: "https://images.unsplash.com/photo-1500036000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-38",
      name: "Ethan Roberts",
      email: "ethan.roberts@place.tech",
      first_name: "Ethan",
      last_name: "Roberts",
      phone: "+61 3 5592 8787",
      department: "Finance",
      groups: ["staff", "finance"],
      staff_id: "EMP0038",
      image: "https://images.unsplash.com/photo-1500037000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-39",
      name: "Mia Turner",
      email: "mia.turner@place.tech",
      first_name: "Mia",
      last_name: "Turner",
      phone: "+61 8 3058 7000",
      department: "Human Resources",
      groups: ["staff", "human-resources"],
      staff_id: "EMP0039",
      image: "https://images.unsplash.com/photo-1500038000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-40",
      name: "Logan Phillips",
      email: "logan.phillips@place.tech",
      first_name: "Logan",
      last_name: "Phillips",
      phone: "+61 9 3232 1464",
      department: "Operations",
      groups: ["staff", "operations"],
      staff_id: "EMP0040",
      image: "https://images.unsplash.com/photo-1500039000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-41",
      name: "Aria Cooper",
      email: "aria.cooper@place.tech",
      first_name: "Aria",
      last_name: "Cooper",
      phone: "+61 2 3753 4450",
      department: "Engineering",
      groups: ["staff", "engineering"],
      staff_id: "EMP0041",
      image: "https://images.unsplash.com/photo-1500040000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-42",
      name: "Felix Morgan",
      email: "felix.morgan@place.tech",
      first_name: "Felix",
      last_name: "Morgan",
      phone: "+61 3 2832 8074",
      department: "Product",
      groups: ["staff", "product", "manager"],
      staff_id: "EMP0042",
      image: "https://images.unsplash.com/photo-1500041000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-43",
      name: "Ruby Bailey",
      email: "ruby.bailey@place.tech",
      first_name: "Ruby",
      last_name: "Bailey",
      phone: "+61 3 6794 6974",
      department: "Customer Success",
      groups: ["staff", "customer-success", "manager"],
      staff_id: "EMP0043",
      image: "https://images.unsplash.com/photo-1500042000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-44",
      name: "Caleb Reed",
      email: "caleb.reed@place.tech",
      first_name: "Caleb",
      last_name: "Reed",
      phone: "+61 4 5484 7922",
      department: "IT",
      groups: ["staff", "it"],
      staff_id: "EMP0044",
      image: "https://images.unsplash.com/photo-1500043000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-45",
      name: "Luna Howard",
      email: "luna.howard@place.tech",
      first_name: "Luna",
      last_name: "Howard",
      phone: "+61 4 8438 7444",
      department: "Design",
      groups: ["staff", "design"],
      staff_id: "EMP0045",
      image: "https://images.unsplash.com/photo-1500044000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-46",
      name: "Mason Cox",
      email: "mason.cox@place.tech",
      first_name: "Mason",
      last_name: "Cox",
      phone: "+61 9 4723 1620",
      department: "Research & Development",
      groups: ["staff", "research-&-development"],
      staff_id: "EMP0046",
      image: "https://images.unsplash.com/photo-1500045000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-47",
      name: "Hazel Ward",
      email: "hazel.ward@place.tech",
      first_name: "Hazel",
      last_name: "Ward",
      phone: "+61 4 7339 8711",
      department: "Legal",
      groups: ["staff", "legal", "manager"],
      staff_id: "EMP0047",
      image: "https://images.unsplash.com/photo-1500046000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-48",
      name: "Theo Torres",
      email: "theo.torres@place.tech",
      first_name: "Theo",
      last_name: "Torres",
      phone: "+61 7 7472 1448",
      department: "Sales",
      groups: ["staff", "sales"],
      staff_id: "EMP0048",
      image: "https://images.unsplash.com/photo-1500047000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-49",
      name: "Violet Peterson",
      email: "violet.peterson@place.tech",
      first_name: "Violet",
      last_name: "Peterson",
      phone: "+61 7 6345 3077",
      department: "Marketing",
      groups: ["staff", "marketing", "manager"],
      staff_id: "EMP0049",
      image: "https://images.unsplash.com/photo-1500048000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-50",
      name: "Julian Gray",
      email: "julian.gray@place.tech",
      first_name: "Julian",
      last_name: "Gray",
      phone: "+61 2 4701 5065",
      department: "Finance",
      groups: ["staff", "finance"],
      staff_id: "EMP0050",
      image: "https://images.unsplash.com/photo-1500049000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-51",
      name: "Nova James",
      email: "nova.james@place.tech",
      first_name: "Nova",
      last_name: "James",
      phone: "+61 9 9102 1375",
      department: "Human Resources",
      groups: ["staff", "human-resources"],
      staff_id: "EMP0051",
      image: "https://images.unsplash.com/photo-1500050000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-52",
      name: "Blake Watson",
      email: "blake.watson@place.tech",
      first_name: "Blake",
      last_name: "Watson",
      phone: "+61 7 5269 5672",
      department: "Operations",
      groups: ["staff", "operations"],
      staff_id: "EMP0052",
      image: "https://images.unsplash.com/photo-1500051000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-53",
      name: "Ivy Brooks",
      email: "ivy.brooks@place.tech",
      first_name: "Ivy",
      last_name: "Brooks",
      phone: "+61 3 9071 1173",
      department: "Engineering",
      groups: ["staff", "engineering"],
      staff_id: "EMP0053",
      image: "https://images.unsplash.com/photo-1500052000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-54",
      name: "Axel Fisher",
      email: "axel.fisher@place.tech",
      first_name: "Axel",
      last_name: "Fisher",
      phone: "+61 4 6715 5037",
      department: "Product",
      groups: ["staff", "product"],
      staff_id: "EMP0054",
      image: "https://images.unsplash.com/photo-1500053000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-55",
      name: "Sage Bennett",
      email: "sage.bennett@place.tech",
      first_name: "Sage",
      last_name: "Bennett",
      phone: "+61 5 6785 1386",
      department: "Customer Success",
      groups: ["staff", "customer-success"],
      staff_id: "EMP0055",
      image: "https://images.unsplash.com/photo-1500054000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-56",
      name: "Kai Powell",
      email: "kai.powell@place.tech",
      first_name: "Kai",
      last_name: "Powell",
      phone: "+61 7 4862 6517",
      department: "IT",
      groups: ["staff", "it"],
      staff_id: "EMP0056",
      image: "https://images.unsplash.com/photo-1500055000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-57",
      name: "Raven Long",
      email: "raven.long@place.tech",
      first_name: "Raven",
      last_name: "Long",
      phone: "+61 2 7457 8470",
      department: "Design",
      groups: ["staff", "design"],
      staff_id: "EMP0057",
      image: "https://images.unsplash.com/photo-1500056000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-58",
      name: "Phoenix Hughes",
      email: "phoenix.hughes@place.tech",
      first_name: "Phoenix",
      last_name: "Hughes",
      phone: "+61 4 4318 6192",
      department: "Research & Development",
      groups: ["staff", "research-&-development"],
      staff_id: "EMP0058",
      image: "https://images.unsplash.com/photo-1500057000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-59",
      name: "River Price",
      email: "river.price@place.tech",
      first_name: "River",
      last_name: "Price",
      phone: "+61 7 4114 2176",
      department: "Legal",
      groups: ["staff", "legal"],
      staff_id: "EMP0059",
      image: "https://images.unsplash.com/photo-1500058000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-60",
      name: "Atlas Sanders",
      email: "atlas.sanders@place.tech",
      first_name: "Atlas",
      last_name: "Sanders",
      phone: "+61 6 5471 6487",
      department: "Sales",
      groups: ["staff", "sales"],
      staff_id: "EMP0060",
      image: "https://images.unsplash.com/photo-1500059000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-61",
      name: "Willow Ross",
      email: "willow.ross@place.tech",
      first_name: "Willow",
      last_name: "Ross",
      phone: "+61 4 7935 7555",
      department: "Marketing",
      groups: ["staff", "marketing", "manager"],
      staff_id: "EMP0061",
      image: "https://images.unsplash.com/photo-1500060000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-62",
      name: "Orion Morris",
      email: "orion.morris@place.tech",
      first_name: "Orion",
      last_name: "Morris",
      phone: "+61 5 2089 6410",
      department: "Finance",
      groups: ["staff", "finance"],
      staff_id: "EMP0062",
      image: "https://images.unsplash.com/photo-1500061000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-63",
      name: "Ember Rogers",
      email: "ember.rogers@place.tech",
      first_name: "Ember",
      last_name: "Rogers",
      phone: "+61 4 7464 7600",
      department: "Human Resources",
      groups: ["staff", "human-resources"],
      staff_id: "EMP0063",
      image: "https://images.unsplash.com/photo-1500062000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-64",
      name: "Juno Reed",
      email: "juno.reed@place.tech",
      first_name: "Juno",
      last_name: "Reed",
      phone: "+61 3 7533 7510",
      department: "Operations",
      groups: ["staff", "operations", "manager"],
      staff_id: "EMP0064",
      image: "https://images.unsplash.com/photo-1500063000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-65",
      name: "Zara Cook",
      email: "zara.cook@place.tech",
      first_name: "Zara",
      last_name: "Cook",
      phone: "+61 7 3885 8250",
      department: "Engineering",
      groups: ["staff", "engineering"],
      staff_id: "EMP0065",
      image: "https://images.unsplash.com/photo-1500064000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-66",
      name: "Leo Morgan",
      email: "leo.morgan@place.tech",
      first_name: "Leo",
      last_name: "Morgan",
      phone: "+61 8 8564 2359",
      department: "Product",
      groups: ["staff", "product"],
      staff_id: "EMP0066",
      image: "https://images.unsplash.com/photo-1500065000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-67",
      name: "Iris Bailey",
      email: "iris.bailey@place.tech",
      first_name: "Iris",
      last_name: "Bailey",
      phone: "+61 3 7753 8687",
      department: "Customer Success",
      groups: ["staff", "customer-success"],
      staff_id: "EMP0067",
      image: "https://images.unsplash.com/photo-1500066000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-68",
      name: "Finn Rivera",
      email: "finn.rivera@place.tech",
      first_name: "Finn",
      last_name: "Rivera",
      phone: "+61 3 4359 9147",
      department: "IT",
      groups: ["staff", "it"],
      staff_id: "EMP0068",
      image: "https://images.unsplash.com/photo-1500067000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-69",
      name: "Aurora Cooper",
      email: "aurora.cooper@place.tech",
      first_name: "Aurora",
      last_name: "Cooper",
      phone: "+61 4 9317 5501",
      department: "Design",
      groups: ["staff", "design"],
      staff_id: "EMP0069",
      image: "https://images.unsplash.com/photo-1500068000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-70",
      name: "Xavier Richardson",
      email: "xavier.richardson@place.tech",
      first_name: "Xavier",
      last_name: "Richardson",
      phone: "+61 4 9342 1129",
      department: "Research & Development",
      groups: ["staff", "research-&-development"],
      staff_id: "EMP0070",
      image: "https://images.unsplash.com/photo-1500069000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-71",
      name: "Skye Cox",
      email: "skye.cox@place.tech",
      first_name: "Skye",
      last_name: "Cox",
      phone: "+61 9 6377 1026",
      department: "Legal",
      groups: ["staff", "legal"],
      staff_id: "EMP0071",
      image: "https://images.unsplash.com/photo-1500070000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-72",
      name: "Knox Howard",
      email: "knox.howard@place.tech",
      first_name: "Knox",
      last_name: "Howard",
      phone: "+61 5 4027 2941",
      department: "Sales",
      groups: ["staff", "sales", "manager"],
      staff_id: "EMP0072",
      image: "https://images.unsplash.com/photo-1500071000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-73",
      name: "Luna Ward",
      email: "luna.ward@place.tech",
      first_name: "Luna",
      last_name: "Ward",
      phone: "+61 8 4923 9758",
      department: "Marketing",
      groups: ["staff", "marketing", "manager"],
      staff_id: "EMP0073",
      image: "https://images.unsplash.com/photo-1500072000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-74",
      name: "Sage Torres",
      email: "sage.torres@place.tech",
      first_name: "Sage",
      last_name: "Torres",
      phone: "+61 3 4057 7666",
      department: "Finance",
      groups: ["staff", "finance"],
      staff_id: "EMP0074",
      image: "https://images.unsplash.com/photo-1500073000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-75",
      name: "Phoenix Peterson",
      email: "phoenix.peterson@place.tech",
      first_name: "Phoenix",
      last_name: "Peterson",
      phone: "+61 9 2835 9956",
      department: "Human Resources",
      groups: ["staff", "human-resources"],
      staff_id: "EMP0075",
      image: "https://images.unsplash.com/photo-1500074000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-76",
      name: "River Gray",
      email: "river.gray@place.tech",
      first_name: "River",
      last_name: "Gray",
      phone: "+61 8 6501 8906",
      department: "Operations",
      groups: ["staff", "operations", "manager"],
      staff_id: "EMP0076",
      image: "https://images.unsplash.com/photo-1500075000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-77",
      name: "Atlas James",
      email: "atlas.james@place.tech",
      first_name: "Atlas",
      last_name: "James",
      phone: "+61 6 1125 6409",
      department: "Engineering",
      groups: ["staff", "engineering"],
      staff_id: "EMP0077",
      image: "https://images.unsplash.com/photo-1500076000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-78",
      name: "Willow Watson",
      email: "willow.watson@place.tech",
      first_name: "Willow",
      last_name: "Watson",
      phone: "+61 7 6277 6529",
      department: "Product",
      groups: ["staff", "product", "manager"],
      staff_id: "EMP0078",
      image: "https://images.unsplash.com/photo-1500077000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-79",
      name: "Orion Brooks",
      email: "orion.brooks@place.tech",
      first_name: "Orion",
      last_name: "Brooks",
      phone: "+61 8 9921 5081",
      department: "Customer Success",
      groups: ["staff", "customer-success", "manager"],
      staff_id: "EMP0079",
      image: "https://images.unsplash.com/photo-1500078000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-80",
      name: "Ember Fisher",
      email: "ember.fisher@place.tech",
      first_name: "Ember",
      last_name: "Fisher",
      phone: "+61 3 7877 4824",
      department: "IT",
      groups: ["staff", "it", "manager"],
      staff_id: "EMP0080",
      image: "https://images.unsplash.com/photo-1500079000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-81",
      name: "Juno Bennett",
      email: "juno.bennett@place.tech",
      first_name: "Juno",
      last_name: "Bennett",
      phone: "+61 2 3665 3421",
      department: "Design",
      groups: ["staff", "design"],
      staff_id: "EMP0081",
      image: "https://images.unsplash.com/photo-1500080000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-82",
      name: "Nova Powell",
      email: "nova.powell@place.tech",
      first_name: "Nova",
      last_name: "Powell",
      phone: "+61 6 7608 9921",
      department: "Research & Development",
      groups: ["staff", "research-&-development", "manager"],
      staff_id: "EMP0082",
      image: "https://images.unsplash.com/photo-1500081000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-83",
      name: "Blake Long",
      email: "blake.long@place.tech",
      first_name: "Blake",
      last_name: "Long",
      phone: "+61 4 5983 8988",
      department: "Legal",
      groups: ["staff", "legal", "manager"],
      staff_id: "EMP0083",
      image: "https://images.unsplash.com/photo-1500082000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-84",
      name: "Ivy Hughes",
      email: "ivy.hughes@place.tech",
      first_name: "Ivy",
      last_name: "Hughes",
      phone: "+61 5 2373 4109",
      department: "Sales",
      groups: ["staff", "sales", "manager"],
      staff_id: "EMP0084",
      image: "https://images.unsplash.com/photo-1500083000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "staff-85",
      name: "Axel Price",
      email: "axel.price@place.tech",
      first_name: "Axel",
      last_name: "Price",
      phone: "+61 3 3161 4638",
      department: "Marketing",
      groups: ["staff", "marketing", "manager"],
      staff_id: "EMP0085",
      image: "https://images.unsplash.com/photo-1500084000000?w=150&h=150&fit=crop&crop=face",
      sys_admin: false
    },
    {
      id: "current",
      name: "Sarah Chen",
      email: "sarah.chen@place.tech",
      first_name: "Sarah",
      last_name: "Chen",
      phone: "+61 2 9876 5432",
      department: "Engineering",
      groups: ["staff", "engineering", "senior"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b9ce2c62?w=150&h=150&fit=crop&crop=face",
      sys_admin: true
    }
  ],
  current_user_id: "staff-1"
};

// src/app/mocks/backend/groups.mock.ts
var SEED_TIME = "2024-03-01T09:00:00.000Z";
var GROUP_DATA = [
  {
    id: "group-facilities",
    name: "Facilities",
    description: "Building and facilities staff",
    authority_id: AUTHORITY_ID,
    subsystems: ["bookings"],
    default_permissions: 1,
    ad_group_mappings: {},
    created_at: SEED_TIME,
    updated_at: SEED_TIME
  },
  {
    id: "group-av-technicians",
    name: "AV Technicians",
    description: "Maintains the meeting room AV equipment",
    authority_id: AUTHORITY_ID,
    parent_id: "group-facilities",
    subsystems: ["bookings", "control"],
    default_permissions: 1 | 16,
    ad_group_mappings: {},
    created_at: SEED_TIME,
    updated_at: SEED_TIME
  },
  {
    id: "group-reception",
    name: "Reception",
    description: "Front desk and visitor management",
    authority_id: AUTHORITY_ID,
    subsystems: ["visitors"],
    default_permissions: 1,
    ad_group_mappings: {},
    created_at: SEED_TIME,
    updated_at: SEED_TIME
  }
];
var GROUP_USER_SEED = [
  ["staff-9", "group-facilities", 1 | 4],
  // Lisa Zhang
  ["staff-12", "group-av-technicians", 1 | 16],
  // Chris Anderson
  [UI_MOCKS.current_user_id, "group-reception", 255]
];
var GROUP_ZONE_SEED = [
  ["group-facilities", "bld-01", 1, false],
  // Innovation Hub
  ["group-av-technicians", "bld-01_lvl-1", 1 | 16, false],
  // Level 1
  ["group-av-technicians", "bld-01_lvl-2", 0, true]
  // Level 2
];
var GROUP_FILTER_FN = (item, q) => {
  if (q.q) {
    const search = `${q.q}`.toLowerCase();
    if (!item.name.toLowerCase().includes(search)) return false;
  }
  if (q.parent_id) {
    const parent_id = item.parent_id || "";
    if (q.parent_id === "root" ? !!parent_id : q.parent_id !== parent_id)
      return false;
  }
  if (q.authority_id && item.authority_id !== q.authority_id) return false;
  return true;
};
lo({
  path: `${API}/groups/current`,
  method: "GET",
  callback: (event) => {
    const { subsystem } = event.query_params;
    return group_users().filter(({ user_id }) => user_id === "current").map((row) => ({
      group: findGroup(row.group_id),
      permissions: row.permissions
    })).filter(
      ({ group }) => group && (!subsystem || group.subsystems.includes(subsystem))
    );
  }
});
var groups = generateBasicHandlers(`${API}/groups`, GROUP_DATA, {
  filter: GROUP_FILTER_FN,
  id_prefix: "group-"
});
function withChildCount(group) {
  const children_count = groups().filter(
    ({ parent_id }) => parent_id === group.id
  ).length;
  return __spreadProps(__spreadValues({}, group), { children_count });
}
lo({
  path: `${API}/groups/:id`,
  metadata: GROUP_DATA,
  method: "GET",
  callback: (event) => {
    const group = groups().find(({ id }) => id === event.route_params.id);
    if (!group) throw { status: 404, message: "Not found" };
    return withChildCount(group);
  }
});
function generateJoinHandlers(endpoint, keys, seed, create, expand) {
  const rows = createMockStore(endpointToStorageKey(endpoint), seed);
  const list = () => rows();
  const save2 = (next) => rows.set(next);
  const matches = (row, ids) => keys.every((key) => !ids[key] || `${row[key]}` === ids[key]);
  const indexOf = (event) => {
    const index = list().findIndex(
      (row) => keys.every((key) => `${row[key]}` === event.route_params[key])
    );
    if (index < 0) throw { status: 404, message: "Not found" };
    return index;
  };
  const item_path = `${endpoint}/:${keys[0]}/:${keys[1]}`;
  lo({
    path: endpoint,
    method: "GET",
    callback: (event) => list().filter((row) => matches(row, event.query_params)).map(expand)
  });
  lo({
    path: endpoint,
    method: "POST",
    callback: (event) => {
      const row = create(event.body);
      const ids = {
        [keys[0]]: `${row[keys[0]]}`,
        [keys[1]]: `${row[keys[1]]}`
      };
      if (list().some((existing) => matches(existing, ids)))
        throw { status: 409, message: "Already exists" };
      save2([...list(), row]);
      return expand(row);
    }
  });
  lo({
    path: item_path,
    method: "GET",
    callback: (event) => expand(list()[indexOf(event)])
  });
  for (const method of ["PATCH", "PUT"]) {
    lo({
      path: item_path,
      method,
      callback: (event) => {
        const index = indexOf(event);
        const next = [...list()];
        next[index] = __spreadProps(__spreadValues(__spreadValues({}, next[index]), event.body), {
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        });
        save2(next);
        return expand(next[index]);
      }
    });
  }
  lo({
    path: item_path,
    method: "DELETE",
    callback: (event) => {
      const index = indexOf(event);
      save2(list().filter((_, idx) => idx !== index));
      return null;
    }
  });
  return rows;
}
function findGroup(group_id) {
  return groups().find(({ id }) => id === group_id);
}
var group_users = generateJoinHandlers(
  `${API}/group_users`,
  ["user_id", "group_id"],
  GROUP_USER_SEED.map(([user_id, group_id, permissions]) => ({
    user_id,
    group_id,
    permissions,
    auto_assigned: "",
    created_at: SEED_TIME,
    updated_at: SEED_TIME
  })),
  (body) => {
    const now2 = (/* @__PURE__ */ new Date()).toISOString();
    return {
      user_id: body.user_id || "",
      group_id: body.group_id || "",
      // Users added without permissions get the group defaults
      permissions: body.permissions ?? findGroup(body.group_id || "")?.default_permissions ?? 0,
      auto_assigned: "",
      created_at: now2,
      updated_at: now2
    };
  },
  (row) => __spreadProps(__spreadValues({}, row), {
    user: endpointData(`${API}/users`).find(({ id }) => id === row.user_id),
    group: findGroup(row.group_id)
  })
);
generateJoinHandlers(
  `${API}/group_zones`,
  ["group_id", "zone_id"],
  GROUP_ZONE_SEED.map(([group_id, zone_id, permissions, deny]) => ({
    group_id,
    zone_id,
    permissions,
    deny,
    created_at: SEED_TIME,
    updated_at: SEED_TIME
  })),
  (body) => {
    const now2 = (/* @__PURE__ */ new Date()).toISOString();
    return {
      group_id: body.group_id || "",
      zone_id: body.zone_id || "",
      permissions: body.permissions || 0,
      deny: !!body.deny,
      created_at: now2,
      updated_at: now2
    };
  },
  (row) => __spreadProps(__spreadValues({}, row), {
    zone: endpointData(`${API}/zones`).find(({ id }) => id === row.zone_id),
    group: findGroup(row.group_id)
  })
);

// src/app/mocks/data/modules.ts
var MODULES = [
  {
    driver_id: "dep-WjCyo9xO8H",
    control_system_id: null,
    edge_id: "edge-KiBexw2DWK",
    ip: "10.1.1.250",
    tls: false,
    udp: false,
    port: 12004,
    makebreak: false,
    uri: null,
    custom_name: null,
    settings: {},
    updated_at: 1587079791,
    created_at: 1551149982,
    role: 1,
    connected: true,
    running: true,
    notes: null,
    ignore_connected: false,
    ignore_startstop: false,
    id: "mod-m2dku__78J",
    edge: { name: "Master Node", description: null },
    name: "KNX BAOS Lighting",
    description: null,
    module_name: "Lighting"
  },
  {
    driver_id: "dep-WjCyo9xO8H",
    control_system_id: null,
    edge_id: "edge-KiBexw2DWK",
    ip: "10.1.1.250",
    tls: false,
    udp: false,
    port: 12004,
    makebreak: false,
    uri: null,
    custom_name: null,
    settings: {},
    updated_at: 1587080422,
    created_at: 1551149966,
    role: 1,
    connected: true,
    running: true,
    notes: null,
    ignore_connected: false,
    ignore_startstop: false,
    id: "mod-m2dikgBoVz",
    name: "KNX BAOS Lighting",
    description: null,
    module_name: "Lighting"
  },
  {
    driver_id: "dep-WjCyo9xO8H",
    control_system_id: null,
    edge_id: "edge-KiBexw2DWK",
    ip: "10.1.1.169",
    tls: false,
    udp: false,
    port: 12004,
    makebreak: false,
    uri: null,
    custom_name: null,
    settings: {},
    updated_at: 1587079371,
    created_at: 1551144140,
    role: 1,
    connected: true,
    running: true,
    notes: null,
    ignore_connected: false,
    ignore_startstop: false,
    id: "mod-m2RqG32afs",
    name: "KNX BAOS Lighting",
    description: null,
    module_name: "Lighting"
  },
  {
    driver_id: "dep-WjCyo9xO8H",
    control_system_id: null,
    edge_id: "edge-KiBexw2DWK",
    ip: "10.1.1.169",
    tls: false,
    udp: false,
    port: 12004,
    makebreak: false,
    uri: null,
    custom_name: null,
    settings: {},
    updated_at: 1587441693,
    created_at: 1551144074,
    role: 1,
    connected: true,
    running: true,
    notes: null,
    ignore_connected: false,
    ignore_startstop: false,
    id: "mod-m2RhX0-JNm",
    name: "KNX BAOS Lighting",
    description: null,
    module_name: "Lighting"
  },
  {
    driver_id: "dep-WjCyo9xO8H",
    control_system_id: null,
    edge_id: "edge-KiBexw2DWK",
    ip: "10.1.1.169",
    tls: false,
    udp: false,
    port: 12004,
    makebreak: false,
    uri: null,
    custom_name: null,
    settings: {},
    updated_at: 1587436473,
    created_at: 1551143972,
    role: 1,
    connected: true,
    running: true,
    notes: null,
    ignore_connected: false,
    ignore_startstop: false,
    id: "mod-m2RT_5-NeO",
    name: "KNX BAOS Lighting",
    description: null,
    module_name: "Lighting"
  },
  {
    driver_id: "dep-WjCyo9xO8H",
    control_system_id: null,
    edge_id: "edge-KiBexw2DWK",
    ip: "10.1.1.169",
    tls: false,
    udp: false,
    port: 12004,
    makebreak: false,
    uri: null,
    custom_name: null,
    settings: {},
    updated_at: 1587080422,
    created_at: 1551143894,
    role: 1,
    connected: true,
    running: true,
    notes: null,
    ignore_connected: false,
    ignore_startstop: false,
    id: "mod-m2RJg7Z-YD",
    name: "KNX BAOS Lighting",
    description: null,
    module_name: "Lighting"
  },
  {
    driver_id: "dep-KvMtm2DJm8",
    control_system_id: "space-8",
    edge_id: "edge-KiBexw2DWK",
    ip: null,
    tls: null,
    udp: null,
    port: null,
    makebreak: false,
    uri: null,
    custom_name: null,
    settings: {
      joined: { initiator: "space-8", rooms: ["space-8"] }
    },
    updated_at: 1587515684,
    created_at: 1549322820,
    role: 3,
    connected: true,
    running: true,
    notes: null,
    ignore_connected: false,
    ignore_startstop: false,
    id: "mod-lAHXR38sRX",
    name: "ACA Meeting Room Logic",
    description: null,
    module_name: "System"
  },
  {
    driver_id: "dep-RygISIbluK",
    control_system_id: null,
    edge_id: "edge-KiBexw2DWK",
    ip: "n/a",
    tls: false,
    udp: false,
    port: 4999,
    makebreak: false,
    uri: null,
    custom_name: null,
    settings: {},
    updated_at: 1549344031,
    created_at: 1549242155,
    role: 1,
    connected: null,
    running: false,
    notes: null,
    ignore_connected: false,
    ignore_startstop: false,
    id: "mod-l7l-m0gK7G",
    name: "Samsung MD & DM Series LCD",
    description: "For DM displays configure the following options:\n\n1. Network Standby = OFF (reduces the chance of a display crashing)\n2. Set Auto Standby = OFF\n3. Set Eco Solution, Auto Off = OFF\n\nHard Power off displays each night and wake on lan them in the morning.\n\n\ndefault port changed from 1515 to 4999 as they are all on globalcache itachs",
    module_name: "Display"
  },
  {
    driver_id: "dep-hxXtCor9su",
    control_system_id: "space-12",
    edge_id: "edge-KiBexw2DWK",
    ip: null,
    tls: null,
    udp: null,
    port: null,
    makebreak: false,
    uri: null,
    custom_name: null,
    settings: {
      ids: {
        tilt_down: "3122-RGHT-PTZ-12x72TiltDown",
        tilt_up: "3122-RGHT-PTZ-12x72TiltUp",
        pan_left: "3122-RGHT-PTZ-12x72PanLeft",
        pan_right: "3122-RGHT-PTZ-12x72PanRight",
        zoom_in: "3122-RGHT-PTZ-12x72ZoomIn",
        zoom_out: "3122-RGHT-PTZ-12x72ZoomOut",
        preset_home_load: "3122-RGHT-PTZ-12x72Home",
        power: "3122-RGHT-PTZ-12x72PrivacyMode"
      }
    },
    updated_at: 1587515684,
    created_at: 1548297502,
    role: 3,
    connected: true,
    running: true,
    notes: null,
    ignore_connected: false,
    ignore_startstop: false,
    id: "mod-kh5_cqZdkx",
    name: "QSC PTZ Camera Proxy",
    description: null,
    module_name: "Camera"
  },
  {
    driver_id: "dep-hxXtCor9su",
    control_system_id: "space-11",
    edge_id: "edge-KiBexw2DWK",
    ip: null,
    tls: null,
    udp: null,
    port: null,
    makebreak: false,
    uri: null,
    custom_name: null,
    settings: {
      ids: {
        tilt_down: "3122-LEFT-PTZ-12x72TiltDown",
        tilt_up: "3122-LEFT-PTZ-12x72TiltUp",
        pan_left: "3122-LEFT-PTZ-12x72PanLeft",
        pan_right: "3122-LEFT-PTZ-12x72PanRight",
        zoom_in: "3122-LEFT-PTZ-12x72ZoomIn",
        zoom_out: "3122-LEFT-PTZ-12x72ZoomOut",
        preset_home_load: "3122-LEFT-PTZ-12x72Home",
        power: "3122-LEFT-PTZ-12x72PrivacyMode"
      }
    },
    updated_at: 1587515684,
    created_at: 1548297284,
    role: 3,
    connected: true,
    running: true,
    notes: null,
    ignore_connected: false,
    ignore_startstop: false,
    id: "mod-kh5Ym9MnQB",
    name: "QSC PTZ Camera Proxy",
    description: null,
    module_name: "Camera"
  },
  {
    driver_id: "dep-S9OfntF_TR",
    control_system_id: null,
    edge_id: "edge-KiBexw2DWK",
    ip: "10.1.1.83",
    tls: false,
    udp: false,
    port: 4998,
    makebreak: false,
    uri: null,
    custom_name: "Door",
    settings: {},
    updated_at: 1580144611,
    created_at: 1548202944,
    role: 1,
    connected: true,
    running: true,
    notes: null,
    ignore_connected: false,
    ignore_startstop: false,
    id: "mod-ke85vi5csE",
    name: "GlobalCache IO Gateway",
    description: null,
    module_name: "DigitalIO"
  },
  {
    driver_id: "dep-S9OfntF_TR",
    control_system_id: null,
    edge_id: "edge-KiBexw2DWK",
    ip: "10.1.1.82",
    tls: false,
    udp: false,
    port: 4998,
    makebreak: false,
    uri: null,
    custom_name: "Door",
    settings: {},
    updated_at: 1580144613,
    created_at: 1548202920,
    role: 1,
    connected: true,
    running: true,
    notes: null,
    ignore_connected: false,
    ignore_startstop: false,
    id: "mod-ke82maU_gO",
    name: "GlobalCache IO Gateway",
    description: null,
    module_name: "DigitalIO"
  },
  {
    driver_id: "dep-S9OfntF_TR",
    control_system_id: null,
    edge_id: "edge-KiBexw2DWK",
    ip: "10.1.1.84",
    tls: false,
    udp: false,
    port: 4998,
    makebreak: false,
    uri: null,
    custom_name: "Door",
    settings: {},
    updated_at: 1580144611,
    created_at: 1548202823,
    role: 1,
    connected: true,
    running: true,
    notes: null,
    ignore_connected: false,
    ignore_startstop: false,
    id: "mod-ke7sqoaUYx",
    name: "GlobalCache IO Gateway",
    description: null,
    module_name: "DigitalIO"
  }
];

// src/app/mocks/backend/modules.mock.ts
var FILTER_FN2 = (item, q) => {
  if (!q || Object.keys(q).length <= 0) {
    return true;
  }
  let match = true;
  if (q.q) {
    match = match && `${item.name || ""} ${item.custom_name || ""}`.toLowerCase().indexOf((q.q || "").toLowerCase()) >= 0;
  }
  if (q.control_system_id) {
    const system = endpointData(`${API}/systems`).find(
      (sys) => sys.id === q.control_system_id
    );
    match = match && (item.control_system_id === q.control_system_id || system && system.modules.includes(item.id));
  }
  if (q.driver_id) {
    match = match && item.driver_id === q.driver_id;
  }
  return match;
};
generateBasicHandlers(`${API}/modules`, MODULES, {
  filter: FILTER_FN2,
  id_prefix: "mod-"
});
lo({
  path: `${API}/modules/:id/start`,
  method: "POST",
  callback: (event) => updateItem(`${API}/modules`, event.route_params.id, { running: true })
});
lo({
  path: `${API}/modules/:id/stop`,
  method: "POST",
  callback: (event) => updateItem(`${API}/modules`, event.route_params.id, { running: false })
});
lo({
  path: `${API}/modules/:id/load`,
  method: "POST",
  callback: (event) => updateItem(`${API}/modules`, event.route_params.id, { running: true })
});
lo({
  path: `${API}/modules/:id/ping`,
  method: "POST",
  callback: () => ({ host: "localhost", pingable: true, warning: null })
});
lo({
  path: `${API}/modules/:id/settings`,
  method: "GET",
  callback: (event) => endpointData(`${API}/settings`).filter(
    (setting) => setting.parent_id === event.route_params.id
  )
});
lo({
  path: `${API}/modules/:id/state`,
  method: "GET",
  callback: (event) => {
    const module = findModule(event.route_params.id);
    return {
      connected: module.connected ?? true,
      running: !!module.running
    };
  }
});
lo({
  path: `${API}/modules/:id/error`,
  method: "GET",
  callback: (event) => findModule(event.route_params.id).has_runtime_error ? [
    JSON.stringify({
      message: "Connection refused",
      backtrace: ["mock.cr:1"]
    })
  ] : []
});
function findModule(id) {
  return endpointData(`${API}/modules`).find((mod) => mod.id === id) || notFound("Module");
}

// src/app/mocks/data/discovery.ts
var DISCOVERY = [
  {
    name: "3M Wall Display",
    role: "device",
    description: "        Display control is via RS-232 only. Ensure IP -> RS-232 converter has\n        been configured to provide comms at 9600,N,8,1.\n",
    default: 4999,
    class_name: "::X3m::Displays::WallDisplay",
    module_name: "Display",
    makebreak: null,
    settings: {},
    created_at: 1519091301,
    file_exists: true,
    id: "disc-::X3m::Displays::WallDisplay"
  },
  {
    name: "ACA Blind Control Logic",
    role: "logic",
    description: null,
    default: null,
    class_name: "::Aca::BlindLogic",
    module_name: "Blinds",
    makebreak: false,
    settings: {},
    created_at: 1494775225,
    file_exists: true,
    id: "disc-::Aca::BlindLogic"
  },
  {
    name: "ACA Demo Logic",
    role: "logic",
    description: null,
    default: null,
    class_name: "::Aca::DemoLogic",
    module_name: "Demo",
    makebreak: null,
    settings: {},
    created_at: 1503273826,
    file_exists: true,
    id: "disc-::Aca::DemoLogic"
  },
  {
    name: "ACA Desk Management",
    role: "logic",
    description: null,
    default: null,
    class_name: "::Aca::Tracking::DeskManagement",
    module_name: "DeskManagement",
    makebreak: null,
    settings: {
      mappings: { switch_ip: { port_id: "desk_id" } },
      checkin: { level_id: [] },
      timezone: "Singapore",
      desk_hold_time: 300,
      desk_reserve_time: 7200,
      manual_reserve_time: 7200,
      user_identifier: "login_name"
    },
    created_at: 1519795318,
    file_exists: true,
    id: "disc-::Aca::Tracking::DeskManagement"
  },
  {
    name: "ACA Device Config Manager",
    role: "logic",
    description: "Utility module for executing device setup actions when connectivity is\nestablished.\n\nActions may be specified under the `device_config` setting. This should\nbe of the form:\n\n    mod => { method => args }\n\nOr, if a method must be executed multiple times\n\n    mod => [{ method => args }]\n",
    default: null,
    class_name: "::Aca::DeviceConfig",
    module_name: "DeviceConfig",
    makebreak: null,
    settings: { device_config: {} },
    created_at: 1541653138,
    file_exists: true,
    id: "disc-::Aca::DeviceConfig"
  },
  {
    name: "ACA Device Probe",
    role: "device",
    description: "Passthrough / comms logger for probing device protocols",
    default: null,
    class_name: "::Aca::DeviceProbe",
    module_name: "Probe",
    makebreak: null,
    settings: { hex: false },
    created_at: 1519091301,
    file_exists: true,
    id: "disc-::Aca::DeviceProbe"
  },
  {
    name: "ACA Manual Lighting Logic",
    role: "logic",
    description: null,
    default: null,
    class_name: "::Aca::LightingManual",
    module_name: "Lighting",
    makebreak: false,
    settings: { light_levels: [{ zones: [], level: 0 }] },
    created_at: 1494775225,
    file_exists: true,
    id: "disc-::Aca::LightingManual"
  },
  {
    name: "ACA Meeting Room Logic",
    role: "logic",
    description: null,
    default: null,
    class_name: "::Aca::MeetingRoom",
    module_name: "System",
    makebreak: false,
    settings: { joiner_driver: "System" },
    created_at: 1494775225,
    file_exists: true,
    id: "disc-::Aca::MeetingRoom"
  },
  {
    name: "ACA MyTurn Switching Logic",
    role: "logic",
    description: null,
    default: null,
    class_name: "::Aca::MyTurn",
    module_name: "MyTurn",
    makebreak: false,
    settings: {},
    created_at: 1494775225,
    file_exists: true,
    id: "disc-::Aca::MyTurn"
  },
  {
    name: "ACA PC Control Interface",
    role: "device",
    description: null,
    default: 443,
    class_name: "::Aca::PcControl",
    module_name: "Computer",
    makebreak: false,
    settings: { domain: ".", username: "service", password: "account" },
    created_at: 1494775225,
    file_exists: true,
    id: "disc-::Aca::PcControl"
  },
  {
    name: "ACA People Count",
    role: "logic",
    description: null,
    default: null,
    class_name: "::Aca::Tracking::PeopleCounter",
    module_name: "Count",
    makebreak: null,
    settings: {},
    created_at: 1548201724,
    file_exists: true,
    id: "disc-::Aca::Tracking::PeopleCounter"
  },
  {
    name: "ACA Room Joining Logic",
    role: "logic",
    description: null,
    default: null,
    class_name: "::Aca::Joiner",
    module_name: "Joiner",
    makebreak: false,
    settings: {},
    created_at: 1494775225,
    file_exists: true,
    id: "disc-::Aca::Joiner"
  },
  {
    name: "ACA Signal Router",
    role: "logic",
    description: "Signal distribution management for handling routing across multiple\ndevices and complex/layered switching infrastructure.\n",
    default: null,
    class_name: "::Aca::Router",
    module_name: "Router",
    makebreak: null,
    settings: { connections: {} },
    created_at: 1548201724,
    file_exists: true,
    id: "disc-::Aca::Router"
  },
  {
    name: "ACA Skype Logic",
    role: "logic",
    description: null,
    default: null,
    class_name: "::Aca::SkypeLogic",
    module_name: "Skype",
    makebreak: false,
    settings: {},
    created_at: 1497402745,
    file_exists: true,
    id: "disc-::Aca::SkypeLogic"
  },
  {
    name: "ACA Streaming Recorder",
    role: "service",
    description: null,
    default: null,
    class_name: "::Aca::Recorder",
    module_name: "Recorder",
    makebreak: false,
    settings: {},
    created_at: 1494775225,
    file_exists: true,
    id: "disc-::Aca::Recorder"
  },
  {
    name: "ACA Television Logic",
    role: "logic",
    description: null,
    default: null,
    class_name: "::Aca::TelevisionLogic",
    module_name: "Television",
    makebreak: false,
    settings: {},
    created_at: 1494775225,
    file_exists: true,
    id: "disc-::Aca::TelevisionLogic"
  },
  {
    name: "AMX Acendo Vibe",
    role: "device",
    description: null,
    default: 4999,
    class_name: "::Amx::AcendoVibe",
    module_name: "Mixer",
    makebreak: null,
    settings: {},
    created_at: 1519795318,
    file_exists: true,
    id: "disc-::Amx::AcendoVibe"
  },
  {
    name: "AMX SVSI N-Series Decoder",
    role: "device",
    description: null,
    default: 50002,
    class_name: "::Amx::Svsi::NSeriesDecoder",
    module_name: "Decoder",
    makebreak: false,
    settings: {},
    created_at: 1494775225,
    file_exists: true,
    id: "disc-::Amx::Svsi::NSeriesDecoder"
  },
  {
    name: "AMX SVSI N-Series Encoder",
    role: "device",
    description: null,
    default: 50002,
    class_name: "::Amx::Svsi::NSeriesEncoder",
    module_name: "Encoder",
    makebreak: false,
    settings: {},
    created_at: 1494775225,
    file_exists: true,
    id: "disc-::Amx::Svsi::NSeriesEncoder"
  },
  {
    name: "AMX SVSI N-Series Switcher",
    role: "device",
    description: null,
    default: 50020,
    class_name: "::Amx::Svsi::NSeriesSwitcher",
    module_name: "Switcher",
    makebreak: false,
    settings: {},
    created_at: 1494775225,
    file_exists: true,
    id: "disc-::Amx::Svsi::NSeriesSwitcher"
  }
];

// src/app/mocks/backend/repositories.mock.ts
var REPO_DATA = [
  {
    id: "repo-placeos-drivers",
    name: "PlaceOS Drivers",
    folder_name: "drivers/placeos",
    uri: "https://github.com/PlaceOS/drivers",
    branch: "master",
    commit_hash: "HEAD",
    repo_type: Os.Driver
  },
  {
    id: "repo-placeos-interfaces",
    name: "PlaceOS Interfaces",
    folder_name: "interfaces/placeos",
    uri: "https://github.com/PlaceOS/interfaces",
    branch: "main",
    commit_hash: "HEAD",
    repo_type: Os.Interface
  }
];
var BRANCHES = ["master", "main", "develop", "release/2.0"];
var DRIVER_LIST = DISCOVERY.map(
  (driver) => driver.id
);
var DAY = 24 * 60 * 60 * 1e3;
var COMMIT_LIST = [
  "feat(drivers): cleanup drivers",
  "chore(readme): update readme",
  "refactor(drivers): cleanup lighting driver",
  "test(drivers): update test coverage"
].map((subject, idx) => ({
  commit: generateID(6, "1234567890abcdef".split("")),
  date: new Date(Date.now() - (idx + 1) * 3 * DAY).toISOString(),
  author: "dev@place.tech",
  subject
}));
var INTERFACE_FILES = ["weather/index.html", "clock/index.html"];
lo({
  path: `${API}/repositories/interfaces`,
  method: "GET",
  callback: () => endpointData(`${API}/repositories`).filter((repo) => repo.repo_type === Os.Interface).map((repo) => repo.name)
});
lo({
  path: `${API}/repositories/remote_branches`,
  method: "GET",
  callback: () => BRANCHES
});
lo({
  path: `${API}/repositories/remote_default_branch`,
  method: "GET",
  callback: () => "master"
});
lo({
  path: `${API}/repositories/remote_commits`,
  method: "GET",
  callback: () => COMMIT_LIST
});
generateBasicHandlers(`${API}/repositories`, REPO_DATA, {
  filter: nameFilter,
  id_prefix: "repo-"
});
function findRepo(id) {
  return endpointData(`${API}/repositories`).find((repo) => repo.id === id) || notFound("Repository");
}
function repoDetail(name, value) {
  lo({
    path: `${API}/repositories/:id/${name}`,
    method: "GET",
    callback: (event) => value(findRepo(event.route_params.id))
  });
}
repoDetail("drivers", () => DRIVER_LIST);
repoDetail("commits", () => COMMIT_LIST);
repoDetail("branches", () => BRANCHES);
repoDetail("default_branch", (repo) => repo.branch || "master");
repoDetail(
  "files",
  (repo) => repo.repo_type === Os.Interface ? INTERFACE_FILES : []
);
lo({
  path: `${API}/repositories/:id/details`,
  method: "GET",
  callback: (event) => {
    findRepo(event.route_params.id);
    const driver = DISCOVERY.find(
      ({ id }) => id === event.query_params.driver
    );
    if (!driver) return notFound("Driver");
    return __spreadProps(__spreadValues({}, driver), {
      default_settings: JSON.stringify(driver.settings || {})
    });
  }
});
lo({
  path: `${API}/repositories/:id/pull`,
  method: "POST",
  callback: (event) => {
    findRepo(event.route_params.id);
    const commit_hash = COMMIT_LIST[0].commit;
    updateItem(`${API}/repositories`, event.route_params.id, {
      commit_hash
    });
    return { commit_hash };
  }
});

// src/app/mocks/data/systems.ts
var AV_SETUPS = {
  "space-1": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: [
      "mod-h4g~vwlgiC",
      "mod-hxOq9VU66_",
      "mod-hxXdF12~qo",
      "mod-h-5bNcMQmz",
      "mod-hxXwFf9Ye4",
      "mod-h-5nphanFl",
      "mod-h-7g_zN-~b",
      "mod-kZ9xn_KdNy",
      "mod-ke5B24tto7",
      "mod-m2RqG32afs"
    ],
    settings: {
      ignore_modes: true,
      defaults: {
        default_mode: "powerup_mode",
        shutdown_mode: "shutdown_mode"
      },
      touch_enabled: false,
      discovery_info: {},
      number: 30,
      map_id: "2.30.08",
      extra_features: "",
      cost_hour: 21e3,
      ideal_for: "Havin a swell time",
      contains: "Cheese",
      lighting_group: 6,
      lights: {
        levels: [
          { name: "High", trigger: 0 },
          { name: "Meeting", trigger: 1 },
          { name: "Presentation", trigger: 2 }
        ],
        present: 2,
        shutdown: 3
      },
      modes: {
        powerup_mode: {},
        shutdown_mode: {
          execute: [
            {
              module: "Lighting_1",
              func: "lighting",
              args: [5, false]
            }
          ]
        }
      },
      inputs: ["Wireless", "Laptop", "Web Conference", "Camera"],
      Laptop: ["laptop_hdmi", "laptop_hdmi_rear"],
      Wireless: ["wepresent"],
      "Web Conference": ["webconf"],
      "Tele Conference": ["teleconference"],
      Camera: ["camera"],
      sources: {
        wepresent: {
          title: "Clickshare",
          source: "hdmi",
          input: 5,
          type: "wireless"
        },
        laptop_hdmi: {
          title: "Laptop Front",
          source: "hdmi",
          input: 3,
          type: "aux_hdmi"
        },
        laptop_hdmi_rear: {
          title: "Laptop Rear",
          source: "hdmi",
          input: 4,
          type: "aux_hdmi"
        },
        webconf: {
          title: "Web Conference",
          source: "hdmi",
          input: 3,
          type: "aux_hdmi",
          custom_tasks: [
            { module: "Mixer_1", method: "source", args: ["usb"] }
          ]
        },
        camera: {
          title: "Camera front",
          type: "vc-camera",
          mod: "Camera",
          index: 1,
          ignore: true
        }
      },
      outputs: {
        Display_1: {
          title: "Display",
          type: "lcd",
          pri: 1,
          basic_mixer: true,
          mixer_id: "3025 Speakers:Gain",
          mute_id: "3025 Speakers:Mute",
          output: 1,
          custom_tasks: [
            { module: "Display_1", method: "power", args: [true] }
          ]
        }
      },
      vol_min: -400,
      vol_max: 200,
      doors: [{ title: "Door", module: "Door_1", feedback: "relay1" }]
    },
    support_url: "https://control.place.tech/meeting/#/?ctrl=space-1",
    created_at: 1506944220
  },
  "space-2": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: [
      "mod-h4hCj7uTt9",
      "mod-hzYH2sYSXw",
      "mod-hzZ2NXAo8h",
      "mod-hzeFJgODpo",
      "mod-hzv2sB0lry",
      "mod-iggnWpl~Br",
      "mod-kZ9zP4anK3",
      "mod-m2RJg7Z-YD"
    ],
    settings: {
      ignore_modes: true,
      defaults: {
        default_mode: "powerup_mode",
        shutdown_mode: "shutdown_mode"
      },
      touch_enabled: false,
      discovery_info: {},
      number: 31,
      map_id: "2.30.09",
      extra_features: "",
      cost_hour: 17e3,
      ideal_for: "Havin a swell time",
      contains: "Cheese",
      lights: {
        levels: [
          { name: "High", trigger: 9 },
          { name: "Meeting", trigger: 10 },
          { name: "Presentation", trigger: 11 }
        ],
        present: 11,
        shutdown: 10
      },
      modes: {
        powerup_mode: {},
        shutdown_mode: {
          execute: [
            {
              module: "Lighting_1",
              func: "lighting",
              args: [5, false]
            }
          ]
        }
      }
    },
    support_url: "https://control.place.tech/meeting/#/?ctrl=space-2",
    created_at: 1506944410
  },
  "space-3": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: [
      "mod-h4hIdyCaGK",
      "mod-hzpSvfLsFV",
      "mod-hzpV5CUmsG",
      "mod-hzpWakxU-h",
      "mod-hzpYU_Xbhg",
      "mod-hzt25TR267",
      "mod-kZ9_The7vG",
      "mod-m2RT_5-NeO"
    ],
    settings: {
      ignore_modes: true,
      defaults: {
        default_mode: "powerup_mode",
        shutdown_mode: "shutdown_mode"
      },
      map_id: "2.30.10",
      extra_features: "",
      cost_hour: 11e3,
      ideal_for: "Havin a swell time",
      contains: "Cheese",
      lights: {
        levels: [
          { name: "High", trigger: 6 },
          { name: "Meeting", trigger: 7 },
          { name: "Presentation", trigger: 8 }
        ],
        present: 8,
        shutdown: 7
      },
      modes: {
        powerup_mode: {},
        shutdown_mode: {
          execute: [
            {
              module: "Lighting_1",
              func: "lighting",
              args: [4, false]
            }
          ]
        }
      }
    },
    support_url: "https://control.place.tech/meeting/#/?ctrl=space-3",
    created_at: 1506944465
  },
  "space-4": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: [
      "mod-h4hOgsNLpF",
      "mod-hztigUu7_J",
      "mod-hztjoDmZSR",
      "mod-hztlL_5GwR",
      "mod-hztmY0y-eO",
      "mod-hztnXihHQa",
      "mod-kZA064UhEG",
      "mod-m2RhX0-JNm"
    ],
    settings: {
      ignore_modes: true,
      defaults: {
        default_mode: "powerup_mode",
        shutdown_mode: "shutdown_mode"
      },
      map_id: "2.30.11",
      extra_features: "",
      cost_hour: 11e3,
      ideal_for: "Havin a swell time",
      contains: "Cheese",
      lights: {
        levels: [
          { name: "High", trigger: 3 },
          { name: "Meeting", trigger: 4 },
          { name: "Presentation", trigger: 5 }
        ],
        present: 5,
        shutdown: 4
      },
      modes: {
        powerup_mode: {},
        shutdown_mode: {
          execute: [
            {
              module: "Lighting_1",
              func: "lighting",
              args: [3, false]
            }
          ]
        }
      }
    },
    support_url: "https://control.place.tech/meeting/#/?ctrl=space-4",
    created_at: 1506944529
  },
  "space-5": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: ["mod-R8pIEBAOS0", "mod-SXos0Y6_16"],
    settings: {
      map_id: "2.30.12",
      extra_features: "",
      cost_hour: 17e3,
      ideal_for: "Havin a swell time",
      contains: "Cheese"
    },
    support_url: null,
    created_at: 1506944616
  },
  "space-6": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: ["mod-kZFFJhqTZc"],
    settings: {
      map_id: "2.30.13",
      extra_features: "",
      cost_hour: 11e3,
      ideal_for: "Havin a swell time",
      contains: "Cheese"
    },
    support_url: null,
    created_at: 1506944690
  },
  "space-7": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: [
      "mod-hTbiw7m1x~",
      "mod-hTbkuuyqt-",
      "mod-hTbmXj5nRu",
      "mod-kZFHNHYXRJ"
    ],
    settings: {
      map_id: "2.30.14",
      extra_features: "",
      cost_hour: 17e3,
      ideal_for: "Havin a swell time",
      contains: "Cheese"
    },
    support_url: null,
    created_at: 1506944778
  },
  "space-8": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: ["mod-l7l-m0gK7G", "mod-lAHXR38sRX"],
    settings: {
      inputs: ["Laptop"],
      Laptop: ["laptop_hdmi"],
      sources: {
        laptop_hdmi: {
          title: "Laptop",
          source: "hdmi",
          type: "aux_hdmi"
        }
      },
      outputs: {
        Display_1: {
          title: "Display",
          type: "lcd",
          pri: 1,
          basic_mixer: true,
          mixer_id: "output",
          custom_tasks: [
            {
              module: "Display_1",
              method: "volume",
              args: ["100"]
            }
          ]
        }
      },
      vol_min: 0,
      vol_max: 100,
      defaults: { output_level: 80 },
      lighting_group: 1,
      touch_enabled: false
    },
    support_url: "https://control.place.tech/meeting/#/?ctrl=space-8",
    created_at: 1549242116
  },
  "space-9": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: ["mod-SHo_IR~Dhf", "mod-SHp8z9U30R"],
    settings: { ideal_for: "Havin a swell time", contains: "Cheese" },
    support_url: null,
    created_at: 1510209559
  },
  "space-10": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: [],
    settings: {
      access_group: "BB T1 CARPE DIEM Meeting Room 01 Level 31",
      linked_rooms: ["space-11", "space-12"],
      ignore_modes: true,
      map_id: "2.31.01A",
      extra_features: "presentation_screen video_conference",
      cost_hour: 21e3,
      ideal_for: "Workshopping, ideation, collaboration and formal meetings for 10 to 20 people.",
      contains: "Working Kit (markers, butcher\u2019s paper, etc)<br>Reconfigurable furniture<br>AV Screen with Plug n Play<br>Operable wall<br>Writable walls",
      defaults: { default_mode: "standalone" },
      join_modes: {
        joined: { rooms: ["space-11", "space-12"], mode: "joined" }
      },
      modes: {
        standalone: {
          audio_preset: "3122RoomCombiningDivided",
          outputs: {
            Display_1: {
              title: "31.22 Display",
              type: "lcd",
              pri: 1,
              output: 3,
              basic_mixer: true,
              mixer_id: "3122 SpeakersL:Gain",
              mute_id: "3122 SpeakersL:Mute"
            }
          }
        },
        joined: {
          Laptop: ["floorbox_left", "floorbox_right"],
          audio_preset: "3122RoomCombiningDivided",
          outputs_clobber: true,
          outputs: {
            Display_1: {
              title: "Left Display",
              type: "lcd",
              pri: 1,
              output: 3,
              basic_mixer: true,
              mixer_id: [
                "3122 SpeakersL:Gain",
                "3122 SpeakersR:Gain",
                "3122 SpeakerC:Gain"
              ],
              mute_id: [
                "3122 SpeakersL:Mute",
                "3122 SpeakersL:Mute",
                "3122 SpeakerC:Mute"
              ]
            },
            Display_2: {
              title: "Right Display",
              type: "lcd",
              pri: 2,
              output: 4,
              no_audio: true
            }
          }
        }
      }
    },
    support_url: "https://control.place.tech/meeting/#/?ctrl=space-10",
    created_at: 1532266169
  },
  "space-11": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: [
      "mod-beGTIJ6WjN",
      "mod-beHKasXG~1",
      "mod-beHQAZgqOj",
      "mod-beJ7fPdhcy",
      "mod-beHxMFgTG1",
      "mod-botygMcvnC",
      "mod-ke82maU_gO",
      "mod-kh5Ym9MnQB",
      "mod-m2dikgBoVz",
      "mod-ke85vi5csE"
    ],
    settings: {
      access_group: "BB T1 CARPE DIEM Meeting Room 01A Level 31",
      lighting_group: 6,
      lights: {
        levels: [
          { name: "High", trigger: 4 },
          { name: "Meeting", trigger: 5 },
          { name: "Presentation", trigger: 6 }
        ],
        present: 6,
        shutdown: 7
      },
      linked_rooms: ["space-10"],
      ignore_modes: true,
      map_id: "2.31.01A",
      extra_features: "presentation_screen video_conference",
      cost_hour: 21e3,
      ideal_for: "Workshopping, ideation, collaboration and formal meetings for 10 to 20 people.",
      contains: "Working Kit (markers, butcher\u2019s paper, etc)<br>Reconfigurable furniture<br>AV Screen with Plug n Play<br>Operable wall<br>Writable walls",
      blinds: [
        {
          title: "Door",
          module: "Door_1",
          feedback: "connected",
          manual: true,
          up: { func: "relay", args: [1, true] },
          down: { func: "relay", args: [1, false] }
        }
      ],
      defaults: { default_mode: "standalone" },
      join_modes: {
        joined: { rooms: ["space-11", "space-12"], mode: "joined" }
      },
      modes: {
        standalone: {
          audio_preset: "3122RoomCombiningDivided",
          outputs: {
            Display_1: {
              title: "31.22 Display",
              type: "lcd",
              pri: 1,
              output: 3,
              basic_mixer: true,
              mixer_id: "3122 SpeakersL:Gain",
              mute_id: "3122 SpeakersL:Mute"
            }
          }
        },
        joined: {
          Laptop: ["floorbox_left", "floorbox_right"],
          audio_preset: "3122RoomCombiningDivided",
          outputs_clobber: true,
          outputs: {
            Display_1: {
              title: "Left Display",
              type: "lcd",
              pri: 1,
              output: 3,
              basic_mixer: true,
              mixer_id: [
                "3122 SpeakersL:Gain",
                "3122 SpeakersR:Gain",
                "3122 SpeakerC:Gain"
              ],
              mute_id: [
                "3122 SpeakersL:Mute",
                "3122 SpeakersR:Mute",
                "3122 SpeakerC:Mute"
              ]
            },
            Display_2: {
              title: "Right Display",
              type: "lcd",
              pri: 2,
              output: 4,
              no_audio: true
            }
          },
          doors: [
            {
              title: "Right Doors",
              module: "Door_1",
              feedback: "relay1"
            },
            {
              title: "Left Doors",
              module: "Door_2",
              feedback: "relay1"
            }
          ],
          blinds: [
            {
              title: "Door",
              module: "Door_1",
              feedback: "connected",
              manual: true,
              up: { func: "relay", args: [1, true] },
              down: { func: "relay", args: [1, false] }
            },
            {
              title: "Door2",
              module: "Door_2",
              feedback: "connected",
              manual: true,
              up: { func: "relay", args: [1, true] },
              down: { func: "relay", args: [1, false] }
            }
          ]
        }
      }
    },
    support_url: "https://control.place.tech/meeting/#/?ctrl=space-11",
    created_at: 1529566281
  },
  "space-12": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: [
      "mod-beJ5HHkTd5",
      "mod-beHxMFgTG1",
      "mod-beHKasXG~1",
      "mod-beHQAZgqOj",
      "mod-beJ7fPdhcy",
      "mod-bovQLgPM-I",
      "mod-ke85vi5csE",
      "mod-kh5_cqZdkx",
      "mod-m2dku__78J",
      "mod-ke82maU_gO"
    ],
    settings: {
      access_group: "BB T1 CARPE DIEM Meeting Room 01B Level 31",
      lighting_group: 6,
      lights: {
        levels: [
          { name: "High", trigger: 0 },
          { name: "Meeting", trigger: 1 },
          { name: "Presentation", trigger: 2 }
        ],
        present: 2,
        shutdown: 3
      },
      linked_rooms: ["space-10"],
      is_slave_system: true,
      Laptop: ["floorbox_right"],
      Wireless: ["wepresent_right"],
      touch_enabled: false,
      outputs: {
        Display_2: {
          title: "31.22 Display",
          type: "lcd",
          pri: 1,
          output: 4,
          basic_mixer: true,
          mixer_id: "3122 SpeakersR:Gain",
          mute_id: "3122 SpeakersR:Mute"
        }
      },
      blinds: [
        {
          title: "Door",
          module: "Door_1",
          feedback: "connected",
          manual: true,
          up: { func: "relay", args: [1, true] },
          down: { func: "relay", args: [1, false] }
        }
      ],
      map_id: "2.31.01B",
      extra_features: "presentation_screen video_conference",
      cost_hour: 21e3,
      ideal_for: "Workshopping, ideation, collaboration and formal meetings for 10 to 20 people.",
      contains: "Working Kit (markers, butcher\u2019s paper, etc)<br>Reconfigurable furniture<br>AV Screen with Plug n Play<br>Operable wall<br>Writable walls"
    },
    support_url: "https://control.place.tech/meeting/#/?ctrl=space-12",
    created_at: 1529567580
  },
  "space-13": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 2,
    modules: [
      "mod-R8yjCCzYu~",
      "mod-RyikzoKtfs",
      "mod-S9OFPs3raQ",
      "mod-S9OhlIfmWC",
      "mod-SHoOJ~REWd",
      "mod-WaXIoc15U4",
      "mod-WjC~IvI_wy",
      "mod-WwdnPc4s7F"
    ],
    settings: {
      access_group: "BB T1 CARPE DIEM Meeting Room 02 Level 31",
      ignore_modes: true,
      defaults: {
        default_mode: "powerup_mode",
        shutdown_mode: "shutdown_mode"
      },
      modes: {
        powerup_mode: {},
        shutdown_mode: {
          execute: [
            {
              module: "Lighting_1",
              func: "lighting",
              args: [5, false]
            }
          ]
        }
      },
      inputs: [
        "Wireless",
        "Laptop",
        "Laptop",
        "Web Conference",
        "Tele Conference"
      ],
      Laptop: ["laptop_1_hdmi"],
      Wireless: ["wepresent"],
      "Web Conference": ["webconf"],
      "Tele Conference": ["teleconference"],
      sources: {
        wepresent: {
          title: "Clickshare",
          source: "hdmi2",
          type: "wireless",
          custom_tasks: [
            { module: "Mixer_1", method: "source", args: ["aux"] }
          ]
        },
        laptop_1_hdmi: {
          title: "Laptop",
          source: "hdmi",
          type: "aux_hdmi",
          custom_tasks: [
            { module: "Mixer_1", method: "source", args: ["aux"] }
          ]
        },
        webconf: {
          title: "Web Conference",
          source: "hdmi",
          type: "aux_hdmi",
          custom_tasks: [
            { module: "Mixer_1", method: "source", args: ["aux"] }
          ]
        },
        teleconference: {
          title: "Tele Conference",
          source: "hdmi",
          type: "aux_hdmi",
          custom_tasks: [
            {
              module: "Mixer_1",
              method: "source",
              args: ["bluetooth"]
            }
          ]
        }
      },
      touch_enabled: false,
      outputs: {
        Display_1: {
          title: "Display",
          type: "lcd",
          pri: 1,
          basic_mixer: true,
          mixer_id: "output"
        }
      },
      vol_min: 0,
      vol_max: 100,
      lighting_group: 1,
      lights: {
        levels: [
          { name: "High", trigger: 9 },
          { name: "Meeting", trigger: 10 },
          { name: "Presentation", trigger: 11 }
        ],
        present: 11,
        shutdown: 9
      },
      map_id: "2.31.02",
      extra_features: "presentation_screen video_conference",
      cost_hour: 17e3,
      ideal_for: "Workshopping, ideation and formal meetings for 6 to 8 people.",
      contains: "Working Kit (markers, butcher\u2019s paper, etc)<br>Reconfigurable furniture (jellybean tables and stools)<br>AV Screen with Plug n Play"
    },
    support_url: "https://control.place.tech/meeting/#/?ctrl=space-13",
    created_at: 1506945358
  },
  "space-14": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 2,
    modules: [
      "mod-R8ykXZ6wm1",
      "mod-RyimFWj0FM",
      "mod-S9OucBcRve",
      "mod-SHoaNTRE_W",
      "mod-WaXDuTwzuY",
      "mod-WjC~IvI_wy",
      "mod-WwmSM~bA79"
    ],
    settings: {
      access_group: "BB T1 CARPE DIEM Meeting Room 03 Level 31",
      ignore_modes: true,
      defaults: {
        default_mode: "powerup_mode",
        shutdown_mode: "shutdown_mode"
      },
      modes: {
        powerup_mode: {},
        shutdown_mode: {
          execute: [
            {
              module: "Lighting_1",
              func: "lighting",
              args: [4, false]
            }
          ]
        }
      },
      lights: {
        levels: [
          { name: "High", trigger: 6 },
          { name: "Meeting", trigger: 7 },
          { name: "Presentation", trigger: 8 }
        ],
        present: 8,
        shutdown: 7
      },
      map_id: "2.31.03",
      extra_features: "presentation_screen video_conference",
      cost_hour: 17e3,
      ideal_for: "Workshopping, ideation and formal meetings for 6 to 8 people.",
      contains: "Working Kit (markers, butcher\u2019s paper, etc)<br>Reconfigurable furniture (jellybean tables and stools)<br>AV Screen with Plug n Play"
    },
    support_url: "https://control.place.tech/meeting/#/?ctrl=space-14",
    created_at: 1506945430
  },
  "space-15": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 2,
    modules: [
      "mod-R8ym4MgENL",
      "mod-Ryin8Cj0Mr",
      "mod-SH9JhlK-3O",
      "mod-WaXB678Ma-",
      "mod-WjC~IvI_wy",
      "mod-WwmVnLhBam"
    ],
    settings: {
      access_group: "BB T1 CARPE DIEM Meeting Room 05 Level 31",
      ignore_modes: true,
      defaults: {
        default_mode: "powerup_mode",
        shutdown_mode: "shutdown_mode"
      },
      lights: {
        levels: [
          { name: "High", trigger: 3 },
          { name: "Meeting", trigger: 4 },
          { name: "Presentation", trigger: 5 }
        ],
        present: 5,
        shutdown: 4
      },
      modes: {
        powerup_mode: {},
        shutdown_mode: {
          execute: [
            {
              module: "Lighting_1",
              func: "lighting",
              args: [3, false]
            }
          ]
        }
      },
      map_id: "2.31.04",
      extra_features: "presentation_screen video_conference",
      cost_hour: 17e3,
      ideal_for: "Collaboration, formal meetings, and video conference for 6 people.",
      contains: "Working Kit (markers, butcher\u2019s paper, etc)<br>Fixed furniture<br>AV Screen with Plug n Play"
    },
    support_url: "https://control.place.tech/meeting/#/?ctrl=space-15",
    created_at: 1506945552
  },
  "space-16": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 2,
    modules: [
      "mod-R8ynUyr4kp",
      "mod-Ryg~d3Ri1d",
      "mod-S9O-t~DRyo",
      "mod-WaX3EaJSaC",
      "mod-WjC~IvI_wy",
      "mod-WwmY1DsY08"
    ],
    settings: {
      access_group: "BB T1 CARPE DIEM Meeting Room 04 Level 31",
      ignore_modes: true,
      defaults: {
        default_mode: "powerup_mode",
        shutdown_mode: "shutdown_mode"
      },
      lights: {
        levels: [
          { name: "High", trigger: 0 },
          { name: "Meeting", trigger: 1 },
          { name: "Presentation", trigger: 2 }
        ],
        present: 2,
        shutdown: 1
      },
      modes: {
        powerup_mode: {},
        shutdown_mode: {
          execute: [
            {
              module: "Lighting_1",
              func: "lighting",
              args: [2, false]
            }
          ]
        }
      },
      map_id: "2.31.05",
      extra_features: "presentation_screen video_conference",
      cost_hour: 17e3,
      ideal_for: "Collaboration, formal meetings, and video conference for 6 to 8 people.",
      contains: "Working Kit (markers, butcher\u2019s paper, etc)<br>Fixed furniture<br>AV Screen with Plug n Play"
    },
    support_url: "https://control.place.tech/meeting/#/?ctrl=space-16",
    created_at: 1506945648
  },
  "space-17": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: [
      "mod-h4fNMjyy~D",
      "mod-hxA4MQLRfz",
      "mod-k2fS9GfBMe",
      "mod-ke7okyLnHV"
    ],
    settings: {
      map_id: "2.31.06",
      extra_features: "",
      access_group: "BB T1 CARPE DIEM Meeting Room 06 Level 31",
      cost_hour: 17e3,
      ideal_for: "Collaboration, formal meetings, and workshopping for 4 to 6 people.",
      contains: "Working Kit (markers, butcher\u2019s paper, etc)<br>Analog Room (No AV)"
    },
    support_url: null,
    created_at: 1506945741
  },
  "space-18": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: [
      "mod-h4fQniTgxj",
      "mod-hTMwXPSGXn",
      "mod-hTMzHruYBy",
      "mod-hxA1_nFNIq",
      "mod-k2bpR-UrG2",
      "mod-k2bso1IHjl",
      "mod-k2fU4IGidt",
      "mod-ke7sqoaUYx"
    ],
    settings: {
      map_id: "2.31.07",
      extra_features: "",
      access_group: "BB T1 CARPE DIEM Meeting Room 07 Level 31",
      cost_hour: 17e3,
      ideal_for: "Collaboration, formal meetings, and video conferencing for 4 to 6 people.",
      contains: "Working Kit (markers, butcher\u2019s paper, etc)<br>Fixed Furniture<br>AV Screen with Plug n Play",
      doors: [{ title: "Door", module: "Door_1", feedback: "relay1" }]
    },
    support_url: "https://control.place.tech/meeting/#/?ctrl=space-18",
    created_at: 1506945810
  },
  "space-19": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: ["mod-OMdzmCZQHy", "mod-Oy7lt3wbhB"],
    settings: {
      terms: "assets/terms.html",
      extra_features: "",
      ideal_for: "Havin a swell time",
      contains: "Cheese"
    },
    support_url: null,
    created_at: 1501635849
  },
  "space-20": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: ["mod-c9he5pLs8H"],
    settings: { ideal_for: "Havin a swell time", contains: "Cheese" },
    support_url: null,
    created_at: 1510790671
  },
  "space-21": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: ["mod-MOom7Q4xeI"],
    settings: {
      extra_features: "presentation_screen",
      map_id: "41.SRBR",
      cost_hour: 21e3,
      ideal_for: "Havin a swell time",
      contains: "Cheese"
    },
    support_url: null,
    created_at: 1494911022
  },
  "space-33": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: [],
    settings: {
      map_id: "38.SWMT",
      extra_features: "presentation_screen",
      cost_hour: 27e3,
      ideal_for: "Havin a swell time",
      contains: "Cheese"
    },
    support_url: null,
    created_at: 1498199348
  },
  "space-34": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: [],
    settings: { cost_hour: 0 },
    support_url: null,
    created_at: 1545104999
  },
  "space-35": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: ["mod-R8p-DweT5-"],
    settings: {
      extra_features: "presentation_screen cisco_video_conference",
      map_id: "30.VCMR",
      ideal_for: "Havin a swell time",
      contains: "Cheese"
    },
    support_url: null,
    created_at: 1494911090
  },
  "space-36": {
    edge_id: "edge-KiBexw2DWK",
    installed_ui_devices: 0,
    modules: [],
    settings: {
      extra_features: "presentation_screen",
      map_id: "38.WLMT",
      cost_hour: 0,
      ideal_for: "Havin a swell time",
      contains: "Cheese"
    },
    support_url: null,
    created_at: 1494911112
  }
};

// src/app/mocks/backend/triggers.mock.ts
var SEED_TIME2 = 1709283600;
var TRIGGER_DATA = [
  {
    id: "trigger-room-occupied",
    name: "Room Occupied",
    description: "Turns the lights on when people are in the room",
    conditions: {
      comparisons: [
        {
          left: { mod: "Sensor_1", status: "people_count", keys: [] },
          operator: "greater_than",
          right: 0
        }
      ],
      time_dependents: []
    },
    actions: {
      functions: [
        { mod: "Lighting_1", method: "power", args: { state: true } }
      ],
      mailers: []
    },
    debounce_period: 0,
    important: false,
    enable_webhook: false,
    supported_methods: ["POST"],
    created_at: SEED_TIME2,
    updated_at: SEED_TIME2
  },
  {
    id: "trigger-after-hours",
    name: "After Hours",
    description: "Powers off displays every evening",
    conditions: {
      comparisons: [],
      time_dependents: [
        { type: "cron", cron: "0 19 * * 1-5", timezone: "UTC" }
      ]
    },
    actions: {
      functions: [
        { mod: "Display_1", method: "power", args: { state: false } }
      ],
      mailers: []
    },
    debounce_period: 0,
    important: true,
    enable_webhook: true,
    supported_methods: ["POST"],
    created_at: SEED_TIME2,
    updated_at: SEED_TIME2
  }
];
generateBasicHandlers(`${API}/triggers`, TRIGGER_DATA, {
  filter: nameFilter,
  id_prefix: "trigger-"
});
var TRIGGER_INSTANCES = createMockStore(
  "trigger_instances",
  [
    {
      id: "inst-room-occupied",
      trigger_id: "trigger-room-occupied",
      control_system_id: "space-1",
      enabled: true,
      important: false,
      triggered: false,
      trigger_count: 3,
      exec_enabled: true,
      webhook_secret: "mock-secret",
      created_at: SEED_TIME2,
      updated_at: SEED_TIME2
    }
  ]
);
function expandInstance(instance) {
  const trigger = endpointData(`${API}/triggers`).find(
    ({ id }) => id === instance.trigger_id
  );
  return __spreadValues(__spreadValues({}, trigger), instance);
}
lo({
  path: `${API}/triggers/:id/instances`,
  method: "GET",
  callback: (event) => TRIGGER_INSTANCES().filter(({ trigger_id }) => trigger_id === event.route_params.id).map(expandInstance)
});

// src/app/mocks/backend/systems.mock.ts
var FILTER_FN3 = (item, q) => {
  if (!q || Object.keys(q).length <= 0) {
    return true;
  }
  let match = true;
  if (q.q) {
    match = match && `${item.name || ""}`.toLowerCase().indexOf((q.q || "").toLowerCase()) >= 0;
  }
  if (q.zone_id) {
    match = match && (item.zones || []).includes(q.zone_id);
  }
  if (q.module_id) {
    match = match && (item.modules || []).includes(q.module_id);
  }
  return match;
};
lo({
  path: `${API}/systems/with_emails`,
  method: "GET",
  callback: (event) => {
    const emails = `${event.query_params.in || ""}`.toLowerCase().split(",");
    return endpointData(`${API}/systems`).filter(
      (sys) => emails.includes(`${sys.email || ""}`.toLowerCase())
    );
  }
});
var SYSTEM_DATA = UI_MOCKS.systems.map((room) => __spreadValues(__spreadValues({}, room), AV_SETUPS[room.id]));
generateBasicHandlers(`${API}/systems`, SYSTEM_DATA, {
  filter: FILTER_FN3,
  id_prefix: "sys-"
});
function findSystem(id) {
  return endpointData(`${API}/systems`).find((sys) => sys.id === id) || notFound("System");
}
lo({
  path: `${API}/systems/:id/zones`,
  method: "GET",
  callback: (event) => {
    const system = findSystem(event.route_params.id);
    return endpointData(`${API}/zones`).filter(
      (zone) => system.zones.includes(zone.id)
    );
  }
});
lo({
  path: `${API}/systems/:id/modules`,
  method: "GET",
  callback: (event) => {
    const system = findSystem(event.route_params.id);
    return endpointData(`${API}/modules`).filter(
      (mod) => system.modules.includes(mod.id)
    );
  }
});
lo({
  path: `${API}/systems/:id/module/:module_id`,
  method: "PUT",
  callback: (event) => {
    const { id, module_id } = event.route_params;
    const system = findSystem(id);
    if (system.modules.includes(module_id)) return system;
    return updateItem(`${API}/systems`, id, {
      modules: [...system.modules, module_id]
    });
  }
});
lo({
  path: `${API}/systems/:id/module/:module_id`,
  method: "DELETE",
  callback: (event) => {
    const { id, module_id } = event.route_params;
    const system = findSystem(id);
    return updateItem(`${API}/systems`, id, {
      modules: system.modules.filter((mod) => mod !== module_id)
    });
  }
});
lo({
  path: `${API}/systems/:id/triggers`,
  method: "GET",
  callback: (event) => {
    const { id } = findSystem(event.route_params.id);
    return TRIGGER_INSTANCES().filter(({ control_system_id }) => control_system_id === id).map(expandInstance);
  }
});
lo({
  path: `${API}/systems/:id/triggers`,
  method: "POST",
  callback: (event) => {
    const { id } = findSystem(event.route_params.id);
    const instance = __spreadProps(__spreadValues({
      enabled: true,
      important: false,
      triggered: false,
      trigger_count: 0,
      exec_enabled: false,
      webhook_secret: generateID(32)
    }, event.body), {
      id: `inst-${generateID()}`,
      control_system_id: id,
      created_at: now(),
      updated_at: now()
    });
    TRIGGER_INSTANCES.set([...TRIGGER_INSTANCES(), instance]);
    return expandInstance(instance);
  }
});
function findInstance(system_id, id) {
  return TRIGGER_INSTANCES().find(
    (item) => item.id === id && item.control_system_id === system_id
  ) || notFound("Trigger");
}
for (const method of ["PUT", "PATCH"]) {
  lo({
    path: `${API}/systems/:id/triggers/:trigger_id`,
    method,
    callback: (event) => {
      const { id, trigger_id } = event.route_params;
      const old = findInstance(id, trigger_id);
      const { enabled, important, exec_enabled } = __spreadValues(__spreadValues({}, old), event.body);
      const instance = __spreadProps(__spreadValues({}, old), {
        enabled,
        important,
        exec_enabled,
        updated_at: now()
      });
      TRIGGER_INSTANCES.set(
        TRIGGER_INSTANCES().map(
          (item) => item === old ? instance : item
        )
      );
      return expandInstance(instance);
    }
  });
}
lo({
  path: `${API}/systems/:id/triggers/:trigger_id`,
  method: "DELETE",
  callback: (event) => {
    const { id, trigger_id } = event.route_params;
    const old = findInstance(id, trigger_id);
    TRIGGER_INSTANCES.set(
      TRIGGER_INSTANCES().filter((item) => item !== old)
    );
    return null;
  }
});
lo({
  path: `${API}/systems/:id/settings`,
  method: "GET",
  callback: (event) => {
    const system = findSystem(event.route_params.id);
    const drivers = endpointData(`${API}/modules`).filter((mod) => system.modules.includes(mod.id)).map((mod) => mod.driver_id);
    const parents = [
      system.id,
      ...system.zones,
      ...system.modules,
      ...drivers
    ];
    return endpointData(`${API}/settings`).filter(
      (setting) => parents.includes(setting.parent_id)
    );
  }
});
function setRunning(system_id, running) {
  const system = findSystem(system_id);
  for (const id of system.modules) {
    if (endpointData(`${API}/modules`).some((mod) => mod.id === id)) {
      updateItem(`${API}/modules`, id, { running });
    }
  }
  return null;
}
lo({
  path: `${API}/systems/:id/start`,
  method: "POST",
  callback: (event) => setRunning(event.route_params.id, true)
});
lo({
  path: `${API}/systems/:id/stop`,
  method: "POST",
  callback: (event) => setRunning(event.route_params.id, false)
});

// src/app/mocks/backend/users.mock.ts
var FILTER_FN4 = (item, q) => {
  if (!q || Object.keys(q).length <= 0) {
    return true;
  }
  let match = true;
  if (q.q) {
    match = match && `${item.name || ""}`.toLowerCase().indexOf((q.q || "").toLowerCase()) >= 0;
  }
  if (q.authority_id) {
    match = match && item.authority_id === q.authority_id;
  }
  return match;
};
function withNames(user) {
  if (user.first_name || user.last_name) {
    const name = `${user.first_name || ""} ${user.last_name || ""}`;
    return __spreadProps(__spreadValues({}, user), { name: name.trim() });
  }
  const [first_name, ...rest] = `${user.name || ""}`.split(" ");
  return __spreadProps(__spreadValues({}, user), { first_name, last_name: rest.join(" ") });
}
var USER_DATA = UI_MOCKS.users.map((user) => __spreadProps(__spreadValues({}, user), {
  authority_id: AUTHORITY_ID,
  support: user.department === "IT"
}));
lo({
  path: `${API}/users/current`,
  method: "GET",
  callback: () => endpointData(`${API}/users`).find(
    ({ id }) => id === UI_MOCKS.current_user_id
  ) || notFound("User")
});
generateBasicHandlers(`${API}/users`, USER_DATA.map(withNames), {
  filter: FILTER_FN4,
  prepare: withNames,
  id_prefix: "user-"
});
lo({
  path: `${API}/users/:id/revive`,
  method: "POST",
  callback: (event) => updateItem(`${API}/users`, event.route_params.id, { deleted: false })
});

// src/app/mocks/backend/zones.mock.ts
var FILTER_FN5 = (item, q) => {
  if (!q || Object.keys(q).length <= 0) {
    return true;
  }
  let match = true;
  if (q.q) {
    match = match && `${item.name || ""}`.toLowerCase().indexOf((q.q || "").toLowerCase()) >= 0;
  }
  if (q.parent_id) {
    const parents = `${q.parent_id}`.split(",").filter((_) => !!_);
    const parent_id = `${item.parent_id || ""}`;
    match = match && parents.some(
      (parent) => parent === "root" ? !parent_id : parent === parent_id
    );
  }
  if (q.control_system_id) {
    const system = endpointData(`${API}/systems`).find(
      (sys) => sys.id === q.control_system_id
    );
    match = match && system && system.zones.includes(item.id);
  }
  return match;
};
lo({
  path: `${API}/zones/tags`,
  method: "GET",
  callback: () => [
    ...new Set(
      endpointData(`${API}/zones`).flatMap((zone) => zone.tags || [])
    )
  ].sort()
});
generateBasicHandlers(`${API}/zones`, UI_MOCKS.zones, {
  filter: FILTER_FN5,
  id_prefix: "zone-"
});
lo({
  path: `${API}/zones/:id/triggers`,
  method: "GET",
  callback: (event) => {
    const zone = endpointData(`${API}/zones`).find(
      ({ id }) => id === event.route_params.id
    ) || notFound("Zone");
    return endpointData(`${API}/triggers`).filter(
      ({ id }) => (zone.triggers || []).includes(id)
    );
  }
});

// src/app/mocks/backend/admin.mock.ts
var AUTHORITY_FILTER = (item, q) => nameFilter(item, q) && (!q.authority_id || item.authority_id === q.authority_id);
lo({
  path: `${API}/scopes`,
  method: "GET",
  callback: () => [
    "public",
    "read",
    "write",
    "systems",
    "zones",
    "users",
    "admin"
  ]
});
generateBasicHandlers(`${API}/api_keys`, [], {
  filter: AUTHORITY_FILTER,
  id_prefix: "api_key-",
  prepare: (item) => __spreadValues({ x_api_key: `sk_${generateID(32)}` }, item)
});
generateBasicHandlers(`${API}/brokers`, [], {
  filter: AUTHORITY_FILTER,
  id_prefix: "broker-"
});
var EDGE_DATA = [
  {
    id: "edge-KiBexw2DWK",
    name: "Master Node",
    description: "Edge in the server room",
    created_at: 1551149982,
    updated_at: 1551149982
  }
];
generateBasicHandlers(`${API}/edges`, EDGE_DATA, {
  filter: nameFilter,
  id_prefix: "edge-"
});
lo({
  path: `${API}/edges/:id/token`,
  method: "GET",
  callback: () => ({ token: `edge_token_${generateID(32)}` })
});
generateBasicHandlers(`${API}/oauth_apps`, [], {
  filter: AUTHORITY_FILTER,
  id_prefix: "app-",
  prepare: (item) => __spreadValues({
    uid: generateID(32),
    secret: generateID(64)
  }, item)
});
generateBasicHandlers(`${API}/uploads`, [], {
  filter: AUTHORITY_FILTER,
  id_prefix: "upload-",
  prepare: (item) => __spreadValues({ file_path: `/uploads/${generateID()}.bin` }, item)
});
generateBasicHandlers(`${API}/storages`, [], {
  filter: AUTHORITY_FILTER,
  id_prefix: "storage-"
});
generateBasicHandlers(`${API}/signage/plugins`, [], {
  filter: AUTHORITY_FILTER,
  id_prefix: "plugin-"
});
var PLAYLIST_DATA = ["Lobby", "Cafe Specials", "Safety Notices"].map(
  (name) => ({
    id: `playlist-${name.toLowerCase().replace(/\W+/g, "-")}`,
    name,
    description: "",
    authority_id: AUTHORITY_ID,
    default_animation: "cut",
    orientation: "landscape",
    play_count: 0,
    play_through_count: 0,
    created_at: 1709283600,
    updated_at: 1709283600
  })
);
generateBasicHandlers(`${API}/signage/playlists`, PLAYLIST_DATA, {
  filter: AUTHORITY_FILTER,
  id_prefix: "playlist-"
});
lo({
  path: `${API}/signage/ai/providers/:id/test`,
  method: "POST",
  callback: () => ({ ok: true, latency_ms: 420, model: "mock-image-1" })
});
generateBasicHandlers(`${API}/signage/ai/providers`, [], {
  filter: AUTHORITY_FILTER,
  id_prefix: "ai-provider-"
});
lo({
  path: `${API}/signage/ai/usage`,
  method: "GET",
  callback: () => []
});
var BUILD_API = "/api/build/v1";
var build_jobs = createMockStore("build_jobs", [
  {
    id: `job-${generateID()}`,
    state: "running",
    message: "Compiling",
    driver: "drivers/place/meet.cr",
    repo: "https://github.com/PlaceOS/drivers",
    branch: "master",
    commit: "HEAD",
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: `job-${generateID()}`,
    state: "done",
    message: "Compiled",
    driver: "drivers/place/bookings.cr",
    repo: "https://github.com/PlaceOS/drivers",
    branch: "master",
    commit: "HEAD",
    timestamp: new Date(Date.now() - 36e5).toISOString()
  }
]);
lo({
  path: `${BUILD_API}/monitor`,
  method: "GET",
  callback: (event) => ({
    data: build_jobs().filter(
      (job) => !event.query_params.state || job.state === event.query_params.state
    )
  })
});
lo({
  path: `${BUILD_API}/cancel/:id`,
  method: "DELETE",
  callback: (event) => {
    const job = build_jobs().find(({ id }) => id === event.route_params.id);
    if (!job) return notFound("Build job");
    build_jobs.set(
      build_jobs().map(
        (item) => item === job ? __spreadProps(__spreadValues({}, item), { state: "cancelled", message: "Cancelled" }) : item
      )
    );
    return null;
  }
});

// src/app/mocks/backend/auth-sources.mock.ts
var FILTER_FN6 = (item, q) => nameFilter(item, q) && (!q.authority_id || item.authority_id === q.authority_id);
generateBasicHandlers(`${API}/oauth_auths`, [], {
  filter: FILTER_FN6,
  id_prefix: "oauth-"
});
generateBasicHandlers(`${API}/saml_auths`, [], {
  filter: FILTER_FN6,
  id_prefix: "saml-"
});
generateBasicHandlers(`${API}/ldap_auths`, [], {
  filter: FILTER_FN6,
  id_prefix: "ldap-"
});

// src/app/mocks/backend/general.mock.ts
lo({
  path: `${API}/version`,
  method: "GET",
  callback: () => ({
    api: "mock-api",
    build_time: (/* @__PURE__ */ new Date()).toISOString(),
    version: "n/a",
    commit: "n/a"
  })
});
lo({
  path: `${API}/platform`,
  method: "GET",
  callback: () => ({ version: "mock", changelog: "" })
});
generateBasicHandlers(`${API}/schema`, [], { id_prefix: "schema-" });
var CLUSTER_ID = "core-mock";
lo({
  path: `${API}/cluster/versions`,
  method: "GET",
  callback: () => []
});
var terminated = createMockStore("cluster_terminated", []);
function clusterProcesses() {
  const modules = endpointData(`${API}/modules`);
  return endpointData(`${API}/drivers`).filter((driver) => !terminated().includes(driver.file_name)).map((driver, idx) => {
    const driver_modules = modules.filter((mod) => mod.driver_id === driver.id).map((mod) => mod.id);
    return {
      id: driver.file_name || driver.id,
      modules: driver_modules,
      running: true,
      module_instances: driver_modules.length,
      last_exit_code: 0,
      launch_count: 1,
      launch_time: now() - idx * 3600,
      percentage_cpu: idx % 5 * 0.4,
      memory_total: 16e6,
      memory_usage: 4e4 + idx * 2e3
    };
  });
}
lo({
  path: `${API}/cluster`,
  method: "GET",
  callback: () => [
    {
      id: CLUSTER_ID,
      compiled_drivers: clusterProcesses().map(({ id }) => id),
      available_repositories: endpointData(`${API}/repositories`).map(
        ({ folder_name }) => folder_name
      ),
      running_drivers: clusterProcesses().length,
      module_instances: endpointData(`${API}/modules`).length,
      unavailable_repositories: [],
      unavailable_drivers: [],
      hostname: "core.place.tech",
      cpu_count: 4,
      core_cpu: 5.2,
      total_cpu: 12.5,
      memory_total: 16e6,
      memory_usage: 8e6,
      core_memory: 5e5
    }
  ]
});
lo({
  path: `${API}/cluster/:id`,
  method: "GET",
  callback: (event) => event.route_params.id === CLUSTER_ID ? clusterProcesses() : notFound("Cluster")
});
lo({
  path: `${API}/cluster/:id`,
  method: "DELETE",
  callback: (event) => {
    const driver = event.query_params.driver;
    if (!driver) throw { status: 400, message: "driver is required" };
    terminated.set([...terminated(), driver]);
    return null;
  }
});
var resync = createMockStore("source_resync", {
  state: "idle"
});
lo({
  path: `${API}/source/resync`,
  method: "GET",
  callback: () => resync()
});
lo({
  path: `${API}/source/resync`,
  method: "POST",
  callback: (event) => {
    const clear = event.query_params.clear === "true";
    resync.set({
      state: "complete",
      clear,
      cleared: clear ? 42 : 0,
      started_at: (/* @__PURE__ */ new Date()).toISOString(),
      finished_at: (/* @__PURE__ */ new Date()).toISOString()
    });
    return resync();
  }
});

// src/app/mocks/backend/metadata.mock.ts
var HISTORY_LIMIT = 20;
var metadata = createMockStore("metadata", []);
var history = createMockStore("metadata_history", []);
function byName(list) {
  return Object.fromEntries(list.map((item) => [item.name, item]));
}
function listFor(parent_id, name) {
  const result = byName(
    metadata().filter(
      (item) => item.parent_id === parent_id && (!name || item.name === name)
    )
  );
  const delay = Number(
    sessionStorage.getItem("PLACEOS.mocks.metadata_delay") || 0
  );
  if (!delay) return result;
  return new Promise((resolve) => setTimeout(() => resolve(result), delay));
}
function save(parent_id, body) {
  if (!body.name) throw { status: 400, message: "name is required" };
  const old = metadata().find(
    (item2) => item2.parent_id === parent_id && item2.name === body.name
  );
  const item = __spreadProps(__spreadValues(__spreadValues({
    description: "",
    details: {},
    editors: [],
    schema: "",
    created_at: now()
  }, old), body), {
    id: `${parent_id}_${body.name}`,
    parent_id,
    name: body.name,
    modified_by_id: "current",
    updated_at: now()
  });
  if (old) {
    const versions = history().filter((v) => v.id === old.id);
    const others = history().filter((v) => v.id !== old.id);
    history.set([old, ...versions].slice(0, HISTORY_LIMIT).concat(others));
  }
  metadata.set([...metadata().filter((i) => i !== old), item]);
  return item;
}
lo({
  path: `${API}/metadata/:id`,
  method: "GET",
  callback: (event) => listFor(event.route_params.id, event.query_params.name)
});
lo({
  path: `${API}/metadata`,
  method: "POST",
  callback: (event) => save(event.body.parent_id, event.body)
});
for (const method of ["PUT", "PATCH"]) {
  lo({
    path: `${API}/metadata/:id`,
    method,
    callback: (event) => save(event.route_params.id, event.body)
  });
}
lo({
  path: `${API}/metadata/:id`,
  method: "DELETE",
  callback: (event) => {
    const { id } = event.route_params;
    const { name } = event.query_params;
    metadata.set(
      metadata().filter(
        (item) => !(item.parent_id === id && item.name === name)
      )
    );
    return null;
  }
});
lo({
  path: `${API}/metadata/:id/history`,
  method: "GET",
  callback: (event) => {
    const { id } = event.route_params;
    const { name } = event.query_params;
    const groups2 = {};
    for (const item of history()) {
      if (item.parent_id !== id || name && item.name !== name) continue;
      (groups2[item.name] ||= []).push(item);
    }
    return groups2;
  }
});

// src/app/mocks/backend/settings.mock.ts
var HISTORY_LIMIT2 = 200;
var FILTER_FN7 = (item, q) => nameFilter(item, q) && (!q.parent_id || `${q.parent_id}`.split(",").includes(`${item.parent_id}`));
var SETTINGS_DATA = ["systems", "modules", "zones", "drivers"].flatMap((type) => endpointData(`${API}/${type}`)).filter(
  (item) => typeof item.settings === "string" || Object.keys(item.settings || {}).length
).map((item) => ({
  id: `setting-${item.id}`,
  parent_id: item.id,
  encryption_level: Le.None,
  settings_string: typeof item.settings === "string" ? item.settings : JSON.stringify(item.settings),
  keys: Object.keys(
    typeof item.settings === "object" ? item.settings : {}
  )
}));
var settings = generateBasicHandlers(
  `${API}/settings`,
  SETTINGS_DATA,
  {
    filter: FILTER_FN7,
    id_prefix: "setting-"
  }
);
var history2 = createMockStore("settings_history", []);
var previous = settings();
settings.subscribe((list) => {
  const changed = previous.filter((old) => {
    const item = list.find(({ id }) => id === old.id);
    return item && item.settings_string !== old.settings_string;
  });
  previous = list;
  if (changed.length) {
    history2.set([...changed, ...history2()].slice(0, HISTORY_LIMIT2));
  }
});
lo({
  path: `${API}/settings/:id/history`,
  method: "GET",
  callback: (event) => history2().filter(({ id }) => id === event.route_params.id)
});

// src/app/mocks/backend/staff-api.mock.ts
var TENANT_DATA = [
  {
    id: "tenant-default",
    name: "Default Tenant",
    domain: DOMAIN,
    platform: "google",
    credentials: "{}",
    booking_limits: {},
    early_checkin: 30,
    secret_expiry: null,
    created_at: 1709283600,
    updated_at: 1709283600
  }
];
var TENANT_FILTER = (item, q) => nameFilter(item, q) && (!q.domain || item.domain === q.domain);
generateBasicHandlers(`${STAFF_API}/tenants`, TENANT_DATA, {
  filter: TENANT_FILTER,
  id_prefix: "tenant-"
});
function findTenant(id) {
  const tenant = endpointData(`${STAFF_API}/tenants`).find(
    (item) => item.id === id
  );
  if (!tenant) throw { status: 404, message: "Tenant not found" };
  return tenant;
}
lo({
  path: `${STAFF_API}/tenants/:id/limits`,
  method: "GET",
  callback: (event) => findTenant(event.route_params.id).booking_limits || {}
});
lo({
  path: `${STAFF_API}/tenants/:id/limits`,
  method: "PUT",
  callback: (event) => updateItem(
    `${STAFF_API}/tenants`,
    findTenant(event.route_params.id).id,
    {
      booking_limits: event.body
    }
  ).booking_limits
});
var DIRECTORY_GROUPS = [
  "All Staff",
  "Facilities",
  "IT Support",
  "Reception",
  "Executive Assistants"
].map((name) => ({
  id: `directory-group-${name.toLowerCase().replace(/\W+/g, "-")}`,
  name,
  email: `${name.toLowerCase().replace(/\W+/g, ".")}@${DOMAIN}`,
  description: `${name} directory group`
}));
lo({
  path: `${STAFF_API}/groups`,
  method: "GET",
  callback: (event) => DIRECTORY_GROUPS.filter(
    (group) => nameFilter(group, event.query_params)
  )
});
var ROOM_RESOURCES = [
  ["2.30.08 - Activity Space", "room-2.30.08", 12],
  ["Board Room", "room-board", 20],
  ["Focus Room 1", "room-focus-1", 2],
  ["Focus Room 2", "room-focus-2", 2]
].map(([name, user, capacity]) => ({
  id: `resource-${user}`,
  displayName: name,
  emailAddress: `${user}@${DOMAIN}`,
  capacity,
  bookingType: "standard",
  isWheelChairAccessible: true,
  nickname: name,
  phone: "",
  tags: []
}));
lo({
  path: `${STAFF_API}/place`,
  method: "GET",
  callback: () => ROOM_RESOURCES
});
lo({
  path: `${STAFF_API}/users/current`,
  method: "GET",
  callback: () => endpointData(`${API}/users`).find(
    ({ id }) => id === UI_MOCKS.current_user_id
  )
});

// src/app/mocks/backend/system-control.mock.ts
var FUNCTIONS = {
  power: { arity: 1, params: { state: ["Bool"] }, order: ["state"] },
  volume: { arity: 1, params: { level: ["Int32", 50] }, order: ["level"] },
  mute: { arity: 1, params: { state: ["Bool", true] }, order: ["state"] }
};
var changed_state = createMockStore(
  "module_state",
  {}
);
function systemModules(system) {
  const modules = listenToHandlerChanges(`${API}/modules`)?.() || [];
  const counts = {};
  return (system.modules || []).flatMap((id) => {
    const module = modules.find((mod) => mod.id === id);
    if (!module) return [];
    const name = `${module.custom_name || module.name || "Blank"}`;
    const index = counts[name] = (counts[name] || 0) + 1;
    return [{ key: `${name}_${index}`, name, index, module }];
  });
}
function findModule2(event) {
  const system = findSystem(event.route_params.id);
  const key = decodeURIComponent(event.route_params.module);
  const found = systemModules(system).find((mod) => mod.key === key);
  return found ? { system, found } : notFound("Module");
}
function stateOf(system_id, { key, module }) {
  return __spreadValues({
    connected: module.connected ?? true,
    running: module.running ?? false,
    power: false,
    volume: 50,
    mute: false
  }, changed_state()[`${system_id}|${key}`]);
}
function execute(system_id, mod, method, args) {
  if (!(method in FUNCTIONS)) return notFound("Function");
  const value = args[0] ?? null;
  const id = `${system_id}|${mod.key}`;
  changed_state.set(__spreadProps(__spreadValues({}, changed_state()), {
    [id]: __spreadProps(__spreadValues({}, changed_state()[id]), { [method]: value })
  }));
  const binding = Mr(system_id)?.[mod.name]?.[mod.index - 1];
  if (binding) binding[method] = value;
  return value;
}
function registerRealtime() {
  const systems = listenToHandlerChanges(`${API}/systems`)?.() || [];
  for (const system of systems) {
    const classes = {};
    for (const mod of systemModules(system)) {
      const methods = Object.fromEntries(
        Object.keys(FUNCTIONS).map((name) => [
          name,
          (...args) => execute(system.id, mod, name, args)
        ])
      );
      (classes[mod.name] ||= []).push(__spreadValues(__spreadValues({}, stateOf(system.id, mod)), methods));
    }
    const triggers = TRIGGER_INSTANCES().filter(
      ({ control_system_id }) => control_system_id === system.id
    );
    classes["_TRIGGER_"] = [
      Object.fromEntries(
        triggers.map((trigger) => [
          trigger.id,
          {
            triggered: !!trigger.triggered,
            trigger_count: trigger.trigger_count || 0,
            action_errors: 0,
            comparison_errors: 0,
            conditions: {}
          }
        ])
      )
    ];
    Hp(system.id, classes);
  }
}
listenToHandlerChanges(`${API}/systems`)?.subscribe(registerRealtime);
listenToHandlerChanges(`${API}/modules`)?.subscribe(registerRealtime);
TRIGGER_INSTANCES.subscribe(registerRealtime);
lo({
  path: `${API}/systems/:id/functions/:module`,
  method: "GET",
  callback: (event) => {
    findModule2(event);
    return FUNCTIONS;
  }
});
lo({
  path: `${API}/systems/:id/:module`,
  method: "GET",
  callback: (event) => {
    const { system, found } = findModule2(event);
    return stateOf(system.id, found);
  }
});
lo({
  path: `${API}/systems/:id/:module/:method`,
  method: "POST",
  callback: (event) => {
    const { system, found } = findModule2(event);
    const args = Array.isArray(event.body) ? event.body : Object.values(event.body || {});
    return execute(system.id, found, event.route_params.method, args);
  }
});

// src/app/mocks/index.ts
ho((method, url) => {
  console.warn(`[mock] No handler for ${method} ${url}`);
  const error = new Error(`Mock endpoint not found: ${method} ${url}`);
  error.status = 404;
  return Promise.reject(error);
});
//# debugId=36423993-4177-5353-86c8-d8548f8a1ac7
//# sourceMappingURL=chunk-USBC5BBR.js.map
