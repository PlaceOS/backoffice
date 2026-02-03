import {
  startOfMinute
} from "./chunk-CPCRYORI.js";
import {
  addMinutes,
  subMinutes
} from "./chunk-J533RESC.js";
import "./chunk-W3GXKXZC.js";
import {
  BehaviorSubject,
  He,
  Ko,
  Vr
} from "./chunk-74QWELJT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VYXW4D3Z.js";

// src/app/mocks/common.mock.ts
var DOMAIN = "place.tech";
var API = "/api/engine/v2";
var ENDPOINT_SUBJECTS = {};
var ENDPOINT_OBSERVABLES = {};
var STORAGE_PREFIX = "PLACEOS.mocks.";
function loadFromSession(key, fallback) {
  try {
    const stored = sessionStorage.getItem(`${STORAGE_PREFIX}${key}`);
    if (stored) {
      return JSON.parse(stored);
    }
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
var AVAILABLE_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~".split("");
function generateID(length = 12, chars = AVAILABLE_CHARS) {
  let id = "";
  while (id.length < length) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}
function listenToHandlerChanges(endpoint) {
  return ENDPOINT_OBSERVABLES[endpoint];
}
function endpointData(endpoint) {
  return (ENDPOINT_SUBJECTS[endpoint] ? ENDPOINT_SUBJECTS[endpoint].getValue() : null) || [];
}
function endpointToStorageKey(endpoint) {
  return endpoint.replace(/\//g, "_").replace(/^_/, "");
}
function generateBasicHandlers(endpoint, data, filter = (_, _q) => true) {
  const storage_key = endpointToStorageKey(endpoint);
  if (ENDPOINT_SUBJECTS[endpoint]) {
    ENDPOINT_SUBJECTS[endpoint].complete();
    delete ENDPOINT_SUBJECTS[endpoint];
    delete ENDPOINT_OBSERVABLES[endpoint];
  }
  const initial_data = loadFromSession(storage_key, data);
  ENDPOINT_SUBJECTS[endpoint] = new BehaviorSubject(initial_data);
  ENDPOINT_OBSERVABLES[endpoint] = ENDPOINT_SUBJECTS[endpoint].asObservable();
  Ko({
    path: `${endpoint}`,
    metadata: data,
    method: "GET",
    callback: (event) => {
      const list = ENDPOINT_SUBJECTS[endpoint].getValue() || [];
      list.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
      return list.filter((item) => filter(item, event.query_params));
    }
  });
  Ko({
    path: `${endpoint}/:id`,
    metadata: data,
    method: "GET",
    callback: (event) => {
      const list = ENDPOINT_SUBJECTS[endpoint].getValue() || [];
      return list.find((item) => item.id === event.route_params.id && filter(item, event.query_params));
    }
  });
  Ko({
    path: `${endpoint}`,
    metadata: data,
    method: "POST",
    callback: (event) => {
      const item = __spreadValues({}, event.body);
      item.id = `item-${generateID()}`;
      item.created_at = Date.now() / 1e3;
      item.updated_at = Date.now() / 1e3;
      const list = ENDPOINT_SUBJECTS[endpoint].getValue() || [];
      list.push(item);
      ENDPOINT_SUBJECTS[endpoint].next(list);
      saveToSession(storage_key, list);
      return item;
    }
  });
  const action = {
    path: `${endpoint}/:id`,
    metadata: data,
    method: "PATCH",
    callback: (event) => {
      const item = event.body;
      const list = ENDPOINT_SUBJECTS[endpoint].getValue() || [];
      const index = list.findIndex((an_item) => an_item.id === event.route_params.id);
      if (index >= 0) {
        const old_item = list[index];
        const updated_item = __spreadProps(__spreadValues(__spreadValues({}, old_item), item), {
          updated_at: Date.now() / 1e3
        });
        list.splice(index, 1, updated_item);
        ENDPOINT_SUBJECTS[endpoint].next(list);
        saveToSession(storage_key, list);
        return updated_item;
      } else {
        throw { status: 404, message: "Not found" };
      }
    }
  };
  Ko(action);
  Ko(__spreadProps(__spreadValues({}, action), { method: "PUT" }));
  Ko({
    path: `${endpoint}/:id`,
    metadata: data,
    method: "DELETE",
    callback: (event) => {
      const list = ENDPOINT_SUBJECTS[endpoint].getValue() || [];
      const index = list.findIndex((an_item) => an_item.id === event.route_params.id);
      if (index >= 0) {
        const deleted_item = list[index];
        list.splice(index, 1);
        ENDPOINT_SUBJECTS[endpoint].next(list);
        saveToSession(storage_key, list);
        return deleted_item;
      } else {
        throw { status: 404, message: "Not found" };
      }
    }
  });
  return ENDPOINT_OBSERVABLES[endpoint];
}

// src/app/mocks/backend/domains.mock.ts
var FILTER_FN = (item, q) => {
  if (!q || Object.keys(q).length <= 0) {
    return true;
  }
  let match = true;
  if (q.q) {
    match = match && `${item.name || ""}`.toLowerCase().indexOf((q.q || "").toLowerCase()) >= 0;
  }
  return match;
};
var DOMAIN_DATA = [];
generateBasicHandlers(`${API}/domains`, DOMAIN_DATA, FILTER_FN);

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
var FILTER_FN2 = (item, q) => {
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
generateBasicHandlers(`${API}/drivers`, DRIVERS, FILTER_FN2);
Ko({
  path: `${API}/drivers/:id/compiled`,
  metadata: DRIVERS,
  method: "GET",
  callback: (_event) => true
});
Ko({
  path: `${API}/drivers/:id/recompile`,
  metadata: [],
  method: "POST",
  callback: (event) => {
    const driver = endpointData(`${API}/drivers`).find((d) => d.id === event.route_params.id);
    if (driver) {
      return __spreadProps(__spreadValues({}, driver), { compilation_output: "Compilation successful" });
    }
    throw { status: 404, message: "Driver not found" };
  }
});
Ko({
  path: `${API}/drivers/:id/reload`,
  metadata: [],
  method: "POST",
  callback: (event) => {
    const driver = endpointData(`${API}/drivers`).find((d) => d.id === event.route_params.id);
    if (driver) {
      return driver;
    }
    throw { status: 404, message: "Driver not found" };
  }
});
Ko({
  path: `${API}/drivers/:id/readme`,
  metadata: [],
  method: "GET",
  callback: (_event) => {
    return "# Mock Driver\n\nThis is a mock driver README for testing purposes.\n\n## Features\n\n- Feature 1\n- Feature 2\n\n## Usage\n\nRefer to the driver documentation.";
  }
});
Ko({
  path: `${API}/drivers/:id/settings`,
  metadata: [],
  method: "GET",
  callback: (_event) => {
    return [];
  }
});

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
    control_system_id: "sys-l7lvddob4I",
    edge_id: "edge-KiBexw2DWK",
    ip: null,
    tls: null,
    udp: null,
    port: null,
    makebreak: false,
    uri: null,
    custom_name: null,
    settings: {
      joined: { initiator: "sys-l7lvddob4I", rooms: ["sys-l7lvddob4I"] }
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
    control_system_id: "sys-beJ1G79tKo",
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
    control_system_id: "sys-beGO1NjTjy",
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
var FILTER_FN3 = (item, q) => {
  if (!q || Object.keys(q).length <= 0) {
    return true;
  }
  let match = true;
  if (q.q) {
    match = match && `${item.name || ""}`.toLowerCase().indexOf((q.q || "").toLowerCase()) >= 0;
  }
  if (q.control_system_id) {
    const system = endpointData(`${API}/systems`).find((sys) => sys.id === q.control_system_id);
    match = match && (item.control_system_id === q.control_system_id || system && system.modules.includes(item.id));
  }
  if (q.driver_id) {
    match = match && item.driver_id === q.driver_id;
  }
  return match;
};
generateBasicHandlers(`${API}/modules`, MODULES, FILTER_FN3);
Ko({
  path: `${API}/modules/:id/start`,
  metadata: [],
  method: "POST",
  callback: (event) => {
    if (event.route_params.id) {
      const module = endpointData(`${API}/modules`).find((mod) => mod.id === event.route_params.id);
      if (module) {
        module.running = true;
        return module;
      }
    }
    throw { status: 404, message: "Module not found" };
  }
});
Ko({
  path: `${API}/modules/:id/stop`,
  metadata: [],
  method: "POST",
  callback: (event) => {
    if (event.route_params.id) {
      const module = endpointData(`${API}/modules`).find((mod) => mod.id === event.route_params.id);
      if (module) {
        module.running = false;
        return module;
      }
    }
    throw { status: 404, message: "Module not found" };
  }
});
Ko({
  path: `${API}/modules/:id/ping`,
  metadata: [],
  method: "POST",
  callback: (_event) => {
    return { host: "localhost", pingable: true, warning: null };
  }
});
Ko({
  path: `${API}/modules/:id/settings`,
  metadata: [],
  method: "GET",
  callback: (_event) => {
    return [];
  }
});
Ko({
  path: `${API}/modules/:id/state`,
  metadata: [],
  method: "GET",
  callback: (_event) => {
    return { connected: true, running: true };
  }
});

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
var FILTER_FN4 = (item, q) => {
  if (!q || Object.keys(q).length <= 0) {
    return true;
  }
  let match = true;
  if (q.q) {
    match = match && `${item.name || ""}`.toLowerCase().indexOf((q.q || "").toLowerCase()) >= 0;
  }
  return match;
};
var REPO_DATA = [
  {
    id: `repo-${generateID()}`,
    name: "PlaceOS Drivers",
    folder_name: "drivers/placeos",
    uri: "https://github.com/PlaceOS/drivers",
    commit_hash: "HEAD",
    type: Vr.Driver
  }
];
var DRIVER_LIST = DISCOVERY.map((driver) => driver.id);
var COMMIT_LIST = [
  {
    commit: generateID(6, "1234567890abcdef".split("")),
    date: subMinutes(Date.now(), Math.floor(Math.random() * 30 * 24 * 60)).valueOf(),
    author: "alex@place.tech",
    subject: "feat(drivers): cleanup drivers"
  },
  {
    commit: generateID(6, "1234567890abcdef".split("")),
    date: subMinutes(Date.now(), Math.floor(Math.random() * 30 * 24 * 60)).valueOf(),
    author: "alex@place.tech",
    subject: "chore(readme): update readme"
  },
  {
    commit: generateID(6, "1234567890abcdef".split("")),
    date: subMinutes(Date.now(), Math.floor(Math.random() * 30 * 24 * 60)).valueOf(),
    author: "alex@place.tech",
    subject: "refactor(drivers): cleanup lighting driver"
  },
  {
    commit: generateID(6, "1234567890abcdef".split("")),
    date: subMinutes(Date.now(), Math.floor(Math.random() * 30 * 24 * 60)).valueOf(),
    author: "alex@place.tech",
    subject: "test(drivers): update test coverage"
  }
];
COMMIT_LIST.sort((a, b) => b.date - a.date);
Ko({
  path: `${API}/repositories/interfaces`,
  metadata: REPO_DATA,
  method: "GET",
  callback: (_) => REPO_DATA.filter((repo) => repo.type === Vr.Interface).map((repo) => repo.name)
});
generateBasicHandlers(`${API}/repositories`, REPO_DATA, FILTER_FN4);
Ko({
  path: `${API}/repositories/:id/drivers`,
  metadata: [],
  method: "GET",
  callback: (event) => {
    if (event.route_params.id) {
      return DRIVER_LIST;
    }
    throw { status: 404, message: "System not found" };
  }
});
Ko({
  path: `${API}/repositories/:id/commits`,
  metadata: [],
  method: "GET",
  callback: (_event) => {
    if (_event.route_params.id) {
      return COMMIT_LIST;
    }
    throw { status: 404, message: "System not found" };
  }
});
Ko({
  path: `${API}/repositories/:id/details`,
  metadata: [],
  method: "GET",
  callback: (event) => {
    if (event.route_params.id) {
      return DISCOVERY.find((driver) => driver.id === event.query_params.driver);
    }
    throw { status: 404, message: "System not found" };
  }
});

// src/app/mocks/data/systems.ts
var SYSTEMS = [
  {
    edge_id: "edge-KiBexw2DWK",
    name: "2.30.08 - Activity Space",
    description: "https://bookings.place.tech/bookings/#/sys-QjJvCH7_dA?trust=true&fixed_device=true",
    email: "room-2.30.08@place.tech",
    capacity: 12,
    features: "System Display DigitalIO Camera Switcher Mixer Bookings Door Lighting",
    bookable: true,
    installed_ui_devices: 0,
    zones: [
      "zone-iIdF20naW0",
      "zone-LEHeo501Er",
      "zone-Kl0HN~nDwc",
      "zone-Kl0E0HmCJ3"
    ],
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
    created_at: 1506944220,
    support_url: "https://control.place.tech/meeting/#/?ctrl=sys-QjJvCH7_dA",
    id: "sys-QjJvCH7_dA"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "2.30.09 - Activity Space",
    description: "https://bookings.place.tech/bookings/#/sys-QjKHN-ai1O?trust=true&fixed_device=true",
    email: "room-2.30.09@place.tech",
    capacity: 6,
    features: "DigitalIO System Mixer Display Bookings Lighting",
    bookable: true,
    installed_ui_devices: 0,
    zones: [
      "zone-iIdF20naW0",
      "zone-LEHeo501Er",
      "zone-Kl0HN~nDwc",
      "zone-Kl0E0HmCJ3"
    ],
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
    created_at: 1506944410,
    support_url: "https://control.place.tech/meeting/#/?ctrl=sys-QjKHN-ai1O",
    id: "sys-QjKHN-ai1O"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "2.30.10 - Activity Space",
    description: "https://bookings.place.tech/bookings/#/sys-QjKOiqWK8c?trust=true&fixed_device=true",
    email: "room-2.30.10@place.tech",
    capacity: 6,
    features: "System Display DigitalIO Mixer Bookings Lighting",
    bookable: true,
    installed_ui_devices: 0,
    zones: [
      "zone-iIdF20naW0",
      "zone-LEHeo501Er",
      "zone-Kl0HN~nDwc",
      "zone-Kl0E0HmCJ3"
    ],
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
    created_at: 1506944465,
    support_url: "https://control.place.tech/meeting/#/?ctrl=sys-QjKOiqWK8c",
    id: "sys-QjKOiqWK8c"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "2.30.11 - Activity Space",
    description: "https://bookings.place.tech/bookings/#/sys-QjKX8Lv9AH?trust=true&fixed_device=true",
    email: "room-2.30.11@place.tech",
    capacity: 4,
    features: "Display DigitalIO Mixer System Bookings Lighting",
    bookable: true,
    installed_ui_devices: 0,
    zones: [
      "zone-iIdF20naW0",
      "zone-LEHeo501Er",
      "zone-Kl0HN~nDwc",
      "zone-Kl0E0HmCJ3"
    ],
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
    created_at: 1506944529,
    support_url: "https://control.place.tech/meeting/#/?ctrl=sys-QjKX8Lv9AH",
    id: "sys-QjKX8Lv9AH"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "2.30.12",
    description: "No Control: Cisco VC Room\nhttps://bookings.place.tech/bookings/#/sys-QjKij0qSn8?trust=true&fixed_device=true",
    email: "room-2.30.12@place.tech",
    capacity: 8,
    features: "Bookings System",
    bookable: false,
    installed_ui_devices: 0,
    zones: ["zone-LEHeo501Er", "zone-Kl0HN~nDwc", "zone-Kl0E0HmCJ3"],
    modules: ["mod-R8pIEBAOS0", "mod-SXos0Y6_16"],
    settings: {
      map_id: "2.30.12",
      extra_features: "",
      cost_hour: 17e3,
      ideal_for: "Havin a swell time",
      contains: "Cheese"
    },
    created_at: 1506944616,
    support_url: null,
    id: "sys-QjKij0qSn8"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "2.30.13",
    description: "No Control: Crestron Control Room\nhttps://bookings.place.tech/bookings/#/sys-QjKsYeL1NZ?trust=true&fixed_device=true",
    email: "room-2.30.13@place.tech",
    capacity: 4,
    features: "Bookings",
    bookable: false,
    installed_ui_devices: 0,
    zones: ["zone-LEHeo501Er", "zone-Kl0HN~nDwc", "zone-Kl0E0HmCJ3"],
    modules: ["mod-kZFFJhqTZc"],
    settings: {
      map_id: "2.30.13",
      extra_features: "",
      cost_hour: 11e3,
      ideal_for: "Havin a swell time",
      contains: "Cheese"
    },
    created_at: 1506944690,
    support_url: null,
    id: "sys-QjKsYeL1NZ"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "2.30.14",
    description: "No Control: Analogue Room\nhttps://bookings.place.tech/bookings/#/sys-QjL1Dac8-K?trust=true&fixed_device=true",
    email: "room-2.30.14@place.tech",
    capacity: 5,
    features: "Display Bookings",
    bookable: false,
    installed_ui_devices: 0,
    zones: ["zone-LEHeo501Er", "zone-Kl0HN~nDwc", "zone-Kl0E0HmCJ3"],
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
    created_at: 1506944778,
    support_url: null,
    id: "sys-QjL1Dac8-K"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "2.30.Central-Core",
    description: null,
    email: "example@placeos.com",
    capacity: 0,
    features: null,
    bookable: false,
    installed_ui_devices: 0,
    zones: ["zone-LEHeo501Er", "zone-Kl0HN~nDwc"],
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
    created_at: 1549242116,
    support_url: "https://control.place.tech/meeting/#/?ctrl=sys-l7lvddob4I",
    id: "sys-l7lvddob4I"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "2.30.DS2",
    description: null,
    email: null,
    capacity: 0,
    features: null,
    bookable: false,
    installed_ui_devices: 0,
    zones: ["zone-LEHeo501Er", "zone-Kl0HN~nDwc", "zone-Kl0E0HmCJ3"],
    modules: ["mod-SHo_IR~Dhf", "mod-SHp8z9U30R"],
    settings: { ideal_for: "Havin a swell time", contains: "Cheese" },
    created_at: 1510209559,
    support_url: null,
    id: "sys-SHoqafKa7Q"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "2.31.01 - Activity Space (A & B 20 pax)",
    description: null,
    email: "room-2.31.01ab@place.tech",
    capacity: 20,
    features: " presentation_screen video_conference",
    bookable: true,
    installed_ui_devices: 0,
    zones: ["zone-QjLXbYUxuC", "zone-Kl0HN~nDwc", "zone-Kl0E0HmCJ3"],
    modules: [],
    settings: {
      access_group: "BB T1 CARPE DIEM Meeting Room 01 Level 31",
      linked_rooms: ["sys-beGO1NjTjy", "sys-beJ1G79tKo"],
      ignore_modes: true,
      map_id: "2.31.01A",
      extra_features: "presentation_screen video_conference",
      cost_hour: 21e3,
      ideal_for: "Workshopping, ideation, collaboration and formal meetings for 10 to 20 people.",
      contains: "Working Kit (markers, butcher\u2019s paper, etc)<br>Reconfigurable furniture<br>AV Screen with Plug n Play<br>Operable wall<br>Writable walls",
      defaults: { default_mode: "standalone" },
      join_modes: {
        joined: {
          rooms: ["sys-beGO1NjTjy", "sys-beJ1G79tKo"],
          mode: "joined"
        }
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
    created_at: 1532266169,
    support_url: "https://control.place.tech/meeting/#/?ctrl=sys-cx_shjA9zd",
    id: "sys-cx_shjA9zd"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "2.31.01 A (Left Only 10 pax)",
    description: "https://bookings.place.tech/bookings/#/sys-beGO1NjTjy?trust=true&fixed_device=true",
    email: "room-2.31.01a@place.tech",
    capacity: 10,
    features: "System Switcher Display Mixer Bookings Door Camera Lighting presentation_screen video_conference",
    bookable: true,
    installed_ui_devices: 0,
    zones: [
      "zone-beI-19FMdl",
      "zone-QjLXbYUxuC",
      "zone-Kl0HN~nDwc",
      "zone-Kl0E0HmCJ3"
    ],
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
      linked_rooms: ["sys-cx_shjA9zd"],
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
        joined: {
          rooms: ["sys-beGO1NjTjy", "sys-beJ1G79tKo"],
          mode: "joined"
        }
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
    created_at: 1529566281,
    support_url: "https://control.place.tech/meeting/#/?ctrl=sys-beGO1NjTjy",
    id: "sys-beGO1NjTjy"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "2.31.01 B (Right Only 10 pax)",
    description: "https://bookings.place.tech/bookings/#/sys-beJ1G79tKo?trust=true&fixed_device=true",
    email: "room-2.31.01b@place.tech",
    capacity: 10,
    features: "System Mixer Switcher Display Bookings Door Camera Lighting presentation_screen video_conference",
    bookable: true,
    installed_ui_devices: 0,
    zones: [
      "zone-beI-19FMdl",
      "zone-QjLXbYUxuC",
      "zone-Kl0HN~nDwc",
      "zone-Kl0E0HmCJ3"
    ],
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
      linked_rooms: ["sys-cx_shjA9zd"],
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
    created_at: 1529567580,
    support_url: "https://control.place.tech/meeting/#/?ctrl=sys-beJ1G79tKo",
    id: "sys-beJ1G79tKo"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "2.31.02 - Activity Space",
    description: "AV System Type 2/C\nArchitectural ID 31.05\nhttps://bookings.place.tech/bookings/#/sys-QjMD6Hns-x?trust=true&fixed_device=true",
    email: "room-2.31.02@place.tech",
    capacity: 8,
    features: "Bookings System Display DigitalIO IPTV Lighting Mixer presentation_screen video_conference",
    bookable: true,
    installed_ui_devices: 2,
    zones: [
      "zone-WjDE_sLQy8",
      "zone-QjLXbYUxuC",
      "zone-Kl0HN~nDwc",
      "zone-Kl0E0HmCJ3"
    ],
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
    created_at: 1506945358,
    support_url: "https://control.place.tech/meeting/#/?ctrl=sys-QjMD6Hns-x",
    id: "sys-QjMD6Hns-x"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "2.31.03 - Activity Space",
    description: "AV System Type 2/B2\nArchitectural ID 31.06\nhttps://bookings.place.tech/bookings/#/sys-QjMMehsWRl?trust=true&fixed_device=true",
    email: "room-2.31.03@place.tech",
    capacity: 6,
    features: "Bookings System Display IPTV DigitalIO Lighting Mixer presentation_screen video_conference",
    bookable: true,
    installed_ui_devices: 2,
    zones: [
      "zone-WjDE_sLQy8",
      "zone-QjLXbYUxuC",
      "zone-Kl0HN~nDwc",
      "zone-Kl0E0HmCJ3"
    ],
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
    created_at: 1506945430,
    support_url: "https://control.place.tech/meeting/#/?ctrl=sys-QjMMehsWRl",
    id: "sys-QjMMehsWRl"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "2.31.04 - Activity Space",
    description: "AV System Type 2/B1\nArchitectural ID 31.07\nhttps://bookings.place.tech/bookings/#/sys-QjMct7gBbm?trust=true&fixed_device=true",
    email: "room-2.31.04@place.tech",
    capacity: 6,
    features: "Bookings System Display DigitalIO Lighting Mixer presentation_screen video_conference",
    bookable: true,
    installed_ui_devices: 2,
    zones: [
      "zone-WjDE_sLQy8",
      "zone-QjLXbYUxuC",
      "zone-Kl0HN~nDwc",
      "zone-Kl0E0HmCJ3"
    ],
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
    created_at: 1506945552,
    support_url: "https://control.place.tech/meeting/#/?ctrl=sys-QjMct7gBbm",
    id: "sys-QjMct7gBbm"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "2.31.05 - Activity Space",
    description: "AV System Type 2/A\nArchitectural ID 31.08\nhttps://bookings.place.tech/bookings/#/sys-QjMpUFeI_U?trust=true&fixed_device=true",
    email: "room-2.31.05@place.tech",
    capacity: 8,
    features: "Bookings System Display DigitalIO Lighting Mixer presentation_screen video_conference",
    bookable: true,
    installed_ui_devices: 2,
    zones: [
      "zone-WjDE_sLQy8",
      "zone-QjLXbYUxuC",
      "zone-Kl0HN~nDwc",
      "zone-Kl0E0HmCJ3"
    ],
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
    created_at: 1506945648,
    support_url: "https://control.place.tech/meeting/#/?ctrl=sys-QjMpUFeI_U",
    id: "sys-QjMpUFeI_U"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "2.31.06 - Activity Space",
    description: "Booking only. No control.\nhttps://bookings.place.tech/bookings/#/sys-QjM_tz-YSt?trust=true&fixed_device=true",
    email: "room-2.31.06@place.tech",
    capacity: 4,
    features: "System Bookings Door",
    bookable: true,
    installed_ui_devices: 0,
    zones: [
      "zone-WjDE_sLQy8",
      "zone-QjLXbYUxuC",
      "zone-Kl0HN~nDwc",
      "zone-Kl0E0HmCJ3"
    ],
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
    created_at: 1506945741,
    support_url: null,
    id: "sys-QjM_tz-YSt"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "2.31.07 - Activity Space",
    description: "https://bookings.place.tech/bookings/#/sys-QjN7-t7y5n?trust=true&fixed_device=true",
    email: "room-2.31.07@place.tech",
    capacity: 4,
    features: "DigitalIO System Mixer Display Bookings Door",
    bookable: true,
    installed_ui_devices: 0,
    zones: [
      "zone-kG8cn_fkH9",
      "zone-QjLXbYUxuC",
      "zone-Kl0HN~nDwc",
      "zone-Kl0E0HmCJ3"
    ],
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
    created_at: 1506945810,
    support_url: "https://control.place.tech/meeting/#/?ctrl=sys-QjN7-t7y5n",
    id: "sys-QjN7-t7y5n"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "Barangaroo Tower 2",
    description: null,
    email: null,
    capacity: 0,
    features: null,
    bookable: false,
    installed_ui_devices: 0,
    zones: ["zone-Kl0E0HmCJ3"],
    modules: ["mod-OMdzmCZQHy", "mod-Oy7lt3wbhB"],
    settings: {
      terms: "assets/terms.html",
      extra_features: "",
      ideal_for: "Havin a swell time",
      contains: "Cheese"
    },
    created_at: 1501635849,
    support_url: null,
    id: "sys-O8kPamShYv"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "Level 31 Foyer",
    description: null,
    email: null,
    capacity: 0,
    features: null,
    bookable: false,
    installed_ui_devices: 0,
    zones: ["zone-QjLXbYUxuC", "zone-Kl0HN~nDwc", "zone-Kl0E0HmCJ3"],
    modules: ["mod-c9he5pLs8H"],
    settings: { ideal_for: "Havin a swell time", contains: "Cheese" },
    created_at: 1510790671,
    support_url: null,
    id: "sys-Sa1DsnvHbM"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "Sky Rise Board Room",
    description: null,
    email: "mr-l41-br@place.tech",
    capacity: 20,
    features: "Bookings presentation_screen",
    bookable: false,
    installed_ui_devices: 0,
    zones: ["zone-Kl0HN~nDwc", "zone-Kl0E0HmCJ3"],
    modules: ["mod-MOom7Q4xeI"],
    settings: {
      extra_features: "presentation_screen",
      map_id: "41.SRBR",
      cost_hour: 21e3,
      ideal_for: "Havin a swell time",
      contains: "Cheese"
    },
    created_at: 1494911022,
    support_url: null,
    id: "sys-KvhW3sI7z0"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "South West Meeting Table",
    description: null,
    email: "mr-l38-sw@place.tech",
    capacity: 12,
    features: " presentation_screen",
    bookable: false,
    installed_ui_devices: 0,
    zones: ["zone-Kl0HN~nDwc", "zone-Kl0E0HmCJ3"],
    modules: [],
    settings: {
      map_id: "38.SWMT",
      extra_features: "presentation_screen",
      cost_hour: 27e3,
      ideal_for: "Havin a swell time",
      contains: "Cheese"
    },
    created_at: 1498199348,
    support_url: null,
    id: "sys-MUuKLCkZCJ"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "Tower Two",
    description: null,
    email: "towertwovisitors@place.tech",
    capacity: 0,
    features: null,
    bookable: false,
    installed_ui_devices: 0,
    zones: ["zone-QjLXbYUxuC", "zone-Kl0HN~nDwc", "zone-Kl0E0HmCJ3"],
    modules: [],
    settings: { cost_hour: 0 },
    created_at: 1545104999,
    support_url: null,
    id: "sys-j7wemZ_tPs"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "VC Meeting Room",
    description: null,
    email: "mr-l30-vc@place.tech",
    capacity: 8,
    features: " presentation_screen cisco_video_conference",
    bookable: false,
    installed_ui_devices: 0,
    zones: ["zone-LEHeo501Er", "zone-Kl0HN~nDwc", "zone-Kl0E0HmCJ3"],
    modules: ["mod-R8p-DweT5-"],
    settings: {
      extra_features: "presentation_screen cisco_video_conference",
      map_id: "30.VCMR",
      ideal_for: "Havin a swell time",
      contains: "Cheese"
    },
    created_at: 1494911090,
    support_url: null,
    id: "sys-Kvhf1pPGNY"
  },
  {
    edge_id: "edge-KiBexw2DWK",
    name: "West Lounge Meeting Table",
    description: null,
    email: "mr-l38-wl@place.tech",
    capacity: 12,
    features: " presentation_screen",
    bookable: false,
    installed_ui_devices: 0,
    zones: ["zone-Kl0HN~nDwc", "zone-Kl0E0HmCJ3"],
    modules: [],
    settings: {
      extra_features: "presentation_screen",
      map_id: "38.WLMT",
      cost_hour: 0,
      ideal_for: "Havin a swell time",
      contains: "Cheese"
    },
    created_at: 1494911112,
    support_url: null,
    id: "sys-Kvhi3KT033"
  }
];

// src/app/mocks/backend/systems.mock.ts
var FILTER_FN5 = (item, q) => {
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
generateBasicHandlers(`${API}/systems`, SYSTEMS, FILTER_FN5);
Ko({
  path: `${API}/systems/:id/zones`,
  metadata: [],
  method: "GET",
  callback: (event) => {
    if (event.route_params.id) {
      const system = endpointData(`${API}/systems`).find((sys) => sys.id === event.route_params.id);
      if (system) {
        const zones = endpointData(`${API}/zones`);
        return zones.filter((item) => system.zones.includes(item.id));
      }
    }
    throw { status: 404, message: "System not found" };
  }
});
Ko({
  path: `${API}/systems/:id/modules`,
  metadata: [],
  method: "GET",
  callback: (event) => {
    if (event.route_params.id) {
      const system = endpointData(`${API}/systems`).find((sys) => sys.id === event.route_params.id);
      if (system) {
        const modules = endpointData(`${API}/modules`);
        return modules.filter((item) => system.modules.includes(item.id));
      }
    }
    throw { status: 404, message: "System not found" };
  }
});
Ko({
  path: `${API}/systems/:id/triggers`,
  metadata: [],
  method: "GET",
  callback: (_event) => {
    if (_event.route_params.id) {
      return [];
    }
    throw { status: 404, message: "System not found" };
  }
});
Ko({
  path: `${API}/systems/:id/settings`,
  metadata: [],
  method: "GET",
  callback: (event) => {
    if (event.route_params.id) {
      const settings = endpointData(`${API}/settings`).filter((sys) => sys.id === event.route_params.id);
      return settings.reduce((map, item) => __spreadValues(__spreadValues({}, map), JSON.parse(item.settings_string)));
    }
    throw { status: 404, message: "System not found" };
  }
});
Ko({
  path: `${API}/systems/:id/start`,
  metadata: [],
  method: "POST",
  callback: (event) => {
    if (event.route_params.id) {
      const system = endpointData(`${API}/systems`).find((sys) => sys.id === event.route_params.id);
      if (system) {
        system.running = true;
        return system;
      }
    }
    throw { status: 404, message: "System not found" };
  }
});
Ko({
  path: `${API}/systems/:id/stop`,
  metadata: [],
  method: "POST",
  callback: (event) => {
    if (event.route_params.id) {
      const system = endpointData(`${API}/systems`).find((sys) => sys.id === event.route_params.id);
      if (system) {
        system.running = false;
        return system;
      }
    }
    throw { status: 404, message: "System not found" };
  }
});
Ko({
  path: `${API}/systems/:id/exec/:module/:index/:method`,
  metadata: [],
  method: "POST",
  callback: (_event) => {
    return { result: "ok" };
  }
});
Ko({
  path: `${API}/systems/:id/funcs/:module/:index`,
  metadata: [],
  method: "GET",
  callback: (_event) => {
    return {
      functions: {
        power: { arity: 1, params: ["state"] },
        volume: { arity: 1, params: ["level"] },
        mute: { arity: 1, params: ["state"] }
      }
    };
  }
});
Ko({
  path: `${API}/systems/count`,
  metadata: [],
  method: "GET",
  callback: (_event) => {
    return { count: endpointData(`${API}/systems`).length };
  }
});

// src/app/mocks/backend/triggers.mock.ts
var FILTER_FN6 = (item, q) => {
  if (!q || Object.keys(q).length <= 0) {
    return true;
  }
  let match = true;
  if (q.q) {
    match = match && `${item.name || ""}`.toLowerCase().indexOf((q.q || "").toLowerCase()) >= 0;
  }
  return match;
};
var TRIGGER_DATA = [];
generateBasicHandlers(`${API}/triggers`, TRIGGER_DATA, FILTER_FN6);

// src/app/mocks/backend/users.mock.ts
var FILTER_FN7 = (item, q) => {
  if (!q || Object.keys(q).length <= 0) {
    return true;
  }
  let match = true;
  if (q.q) {
    match = match && `${item.name || ""}`.toLowerCase().indexOf((q.q || "").toLowerCase()) >= 0;
  }
  return match;
};
var PREDFINED_USERS = [
  "Alex Sorafumo",
  "Jonathan McFarlane",
  "Stephen von Takach",
  "Alexandre Chuvand",
  "Jeremy West",
  "Phil Kheav",
  "Sravani Kotha"
].map((name) => ({
  id: `user-${generateID()}`,
  name,
  email: `${name.split(" ").join(".")}@place.tech`,
  support: Math.floor(Math.random() * 999999) % 10 === 0,
  sys_admin: Math.floor(Math.random() * 999999) % 10 === 0
}));
var USER_DATA = Array(0).fill(0).map((_, idx) => {
  const name = `No. ${idx}`;
  return {
    id: `user-${generateID()}`,
    name,
    email: `${name.split(" ").join(".")}@place.tech`,
    support: Math.floor(Math.random() * 999999) % 10 === 0,
    sys_admin: Math.floor(Math.random() * 999999) % 10 === 0
  };
}).concat(PREDFINED_USERS);
var CURRENT_USER = {
  id: `current`,
  name: "Place Admin",
  email: `admin@place.tech`,
  support: Math.floor(Math.random() * 999999) % 10 === 0,
  sys_admin: true
};
generateBasicHandlers(`${API}/users`, [...USER_DATA, CURRENT_USER], FILTER_FN7);

// src/app/mocks/data/zones.ts
var ZONES = [
  {
    name: "Place Technology",
    description: "org",
    tags: "org",
    settings: {
      touch_enabled: false,
      discovery_info: {
        settings: {
          title: "Place Technology",
          name: "Place Technology",
          description: "Place Technology Staff Application made in Angular 5+",
          short_name: "Towers",
          code: "TOWERS",
          login: { forgot: false },
          analytics: { enabled: false, tracking_id: "" },
          logo: {
            type: "icon",
            src: "icon-Logo-Long",
            background: ""
          },
          copyright: "Copyright 2018 PlaceOS",
          routing: false,
          orgs: true,
          style: { popout: false },
          users: {
            visitors: false,
            external: true,
            can_add: true,
            custom_orgs: false,
            locate: true,
            store: false
          },
          schedule: {
            hide_visitor_bookings: true,
            enabled: true,
            visitors: true,
            new_visitors: false,
            edit_visitors: true,
            contacts: false,
            popout: false
          },
          route_settings: { book: "booking" },
          lockers: { enabled: true, simple_filters: false },
          hide: { heading: false },
          home: { background: "", disclaimer: "" },
          wifi: { background: "assets/img/skyline.jpg" },
          tiles: [
            {
              id: "book/room",
              name: "Spaces",
              color: "#fff",
              img: "assets/img/menu/book.svg",
              settings: "booking",
              query: { back: false }
            },
            {
              id: "schedule",
              name: "My Activities",
              color: "#fff",
              img: "assets/img/menu/schedule.svg"
            },
            {
              id: "catering",
              name: "Services",
              color: "#fff",
              img: "assets/img/menu/services.svg",
              settings: "catering"
            },
            {
              id: "chat",
              name: "Concierge",
              color: "#fff",
              img: "assets/img/menu/concierge.svg"
            },
            {
              id: "visitor",
              name: "Visitors",
              color: "#fff",
              icon: { value: "face" },
              settings: "visitors"
            },
            {
              id: "explore/spaces",
              name: "Way finding",
              color: "#fff",
              img: "assets/img/menu/explore.svg",
              settings: "explore"
            },
            {
              id: "control",
              name: "Control",
              color: "#fff",
              icon: {
                value: "settings_remote"
              }
            }
          ],
          zones: { enabled: false, toggle: "room" },
          booking: {
            min_attendees: 1,
            external_visitors: false,
            recurrence: false,
            limit: 12,
            max_length: 480,
            min_length: 15,
            room_select: false,
            title_prefix: "",
            charge: true,
            terms: true,
            old_filters: false,
            privacy: false,
            control: false,
            lock_cancel: 120,
            external_floors: [],
            return_id: "schedule",
            banner: { enabled: true, links: [] }
          },
          visitors: {
            banner: {
              enabled: false,
              src: "assets/img/banner2.jpg",
              links: [
                {
                  id: "book/room",
                  name: "Book Spaces",
                  query: { back: false }
                },
                { id: "catering", name: "Book Catering" },
                { id: "lockers", name: "Book Lockers" }
              ]
            }
          },
          explore: {
            old_overlay: false,
            cblf: false,
            control: false,
            banner: {
              search: true,
              roles: true,
              src: "assets/img/banner.jpg"
            }
          },
          control: {
            banner: { search: false, src: "assets/img/banner.jpg" }
          },
          people_min_char: 0,
          catering: { enabled: true, banner: { links: [] } },
          colors: {
            rooms: {
              available: "#9cbe82",
              unavailable: "#be8c64",
              "not-bookable": "#e6e6e6",
              pin: "#e96e20"
            },
            desks: {
              "available-fill": "#8cd4da",
              "available-stroke": "#6ab2af",
              "unavailable-fill": "#ec9d99",
              "unavailable-stroke": "#ca7b77",
              "reserved-fill": "#FF9800",
              "reserved-stroke": "#E65100",
              "not-bookable-fill": "#e6e6e6",
              "not-bookable-stroke": "#c4c4c4"
            }
          },
          help: {
            type: "",
            banner: { enabled: false },
            disclaimer: "",
            tiles: [
              {
                name: "AV Support",
                description: "",
                src: "",
                color: "",
                link: "https://www.google.com"
              },
              {
                name: "IT Help",
                description: "",
                src: "",
                color: "",
                link: "https://www.acaprojects.com"
              },
              {
                name: "Emergency Contact",
                description: "",
                src: "",
                color: "",
                link: "https://www.ses.nsw.gov.au"
              },
              {
                name: "Website",
                description: "",
                src: "",
                color: "",
                link: "https://www.acaprojects.com"
              }
            ]
          },
          map: {
            simple: true,
            info: false,
            settings: false,
            bookings: false,
            keys: {}
          }
        },
        buildings: [
          {
            name: "Barangaroo Tower 2",
            zone_id: "zone-Kl0HN~nDwc",
            orientations: { landscape: 0 }
          }
        ]
      }
    },
    triggers: [],
    created_at: 1494571161,
    id: "zone-Kl0E0HmCJ3"
  },
  {
    name: "L30 Activity Spaces",
    description: null,
    tags: null,
    settings: {
      mics: [{ name: "Soundbar Mic", id: "mic", basic_mixer: true }],
      inputs: ["Wireless", "Laptop", "Web Conference", "Tele Conference"],
      Laptop: ["laptop_hdmi"],
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
        laptop_hdmi: {
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
          mixer_id: "output",
          custom_tasks: [
            {
              module: "Display_1",
              method: "volume",
              args: ["100"]
            },
            {
              module: "Display_1",
              method: "speaker_select",
              args: ["external"]
            }
          ],
          shutdown: {
            module: "Display_1",
            method: "speaker_select",
            args: ["internal"]
          }
        }
      },
      vol_min: 0,
      vol_max: 100,
      defaults: { output_level: 80 },
      lighting_group: 1
    },
    triggers: [],
    created_at: 1543374809,
    id: "zone-iIdF20naW0"
  },
  {
    name: "L31 Activity Spaces",
    description: "",
    tags: "",
    settings: {
      mics: [{ name: "Soundbar Mic", id: "mic", basic_mixer: true }],
      inputs: ["Wireless", "Laptop", "Web Conference", "Tele Conference"],
      Laptop: ["laptop_hdmi"],
      Wireless: ["wepresent"],
      "Web Conference": ["webconf"],
      "Tele Conference": ["teleconference"],
      sources: {
        wepresent: {
          title: "Clickshare",
          source: "dvi",
          type: "wireless",
          custom_tasks: [
            { module: "Mixer_1", method: "source", args: ["aux"] }
          ]
        },
        laptop_hdmi: {
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
            { module: "Mixer_1", method: "source", args: ["usb"] }
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
          mixer_id: "output",
          custom_tasks: [
            {
              module: "Display_1",
              method: "volume",
              args: ["100"]
            },
            {
              module: "Display_1",
              method: "speaker_select",
              args: ["external"]
            }
          ],
          shutdown: {
            module: "Display_1",
            method: "speaker_select",
            args: ["internal"]
          }
        }
      },
      vol_min: 0,
      vol_max: 100,
      lighting_group: 1
    },
    triggers: ["trigger-WzXonXrB4G"],
    created_at: 1519368108,
    id: "zone-WjDE_sLQy8"
  },
  {
    name: "L31 Multifunction: 31.22",
    description: null,
    tags: null,
    settings: {
      rooms: ["sys-beGO1NjTjy", "sys-beJ1G79tKo"],
      ignore_modes: true,
      ignore_joining: true,
      inputs: ["Wireless", "Laptop", "Web Conference", "Camera"],
      Laptop: ["floorbox_left"],
      Wireless: ["wepresent_left"],
      "Web Conference": ["webconf"],
      Camera: ["camera"],
      sources: {
        wepresent_left: {
          title: "Clickshare",
          input: 1,
          type: "wireless"
        },
        wepresent_right: {
          title: "Clickshare",
          input: 2,
          type: "wireless"
        },
        floorbox_left: {
          title: "Left Table Input",
          type: "aux_hdmi",
          input: 7
        },
        floorbox_right: {
          title: "Right Table Input",
          type: "aux_hdmi",
          input: 8
        },
        webconf: {
          title: "Web Conference",
          source: "hdmi",
          input: 7,
          type: "aux_hdmi"
        },
        camera: {
          title: "Camera front",
          type: "vc-camera",
          mod: "Camera",
          index: 1,
          ignore: true
        }
      },
      touch_enabled: false,
      vol_min: -400,
      vol_mx: 200,
      doors: [{ title: "Doors", module: "Door_1", feedback: "relay1" }]
    },
    triggers: [],
    created_at: 1529567548,
    id: "zone-beI-19FMdl"
  },
  {
    name: "L31 R7 Activity Space",
    description: null,
    tags: null,
    settings: {
      mics: [{ name: "Soundbar Mic", id: "mic", basic_mixer: true }],
      inputs: ["Wireless", "Laptop", "Web Conference", "Tele Conference"],
      Laptop: ["laptop_hdmi"],
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
        laptop_hdmi: {
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
            { module: "Mixer_1", method: "source", args: ["usb"] }
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
          mixer_id: "output",
          custom_tasks: [
            {
              module: "Display_1",
              method: "volume",
              args: ["100"]
            },
            {
              module: "Display_1",
              method: "speaker_select",
              args: ["external"]
            }
          ],
          shutdown: {
            module: "Display_1",
            method: "speaker_select",
            args: ["internal"]
          }
        }
      },
      vol_min: 0,
      vol_max: 100,
      lighting_group: 1
    },
    triggers: [],
    created_at: 1547438444,
    id: "zone-kG8cn_fkH9"
  },
  {
    name: "Level 30",
    description: "level",
    tags: "level",
    settings: { discovery_info: {}, number: 30 },
    triggers: [],
    created_at: 1495599360,
    id: "zone-LEHeo501Er"
  },
  {
    name: "Level 31",
    description: "level",
    tags: "level",
    settings: { number: 31, discovery_info: {} },
    triggers: [],
    created_at: 1506945022,
    id: "zone-QjLXbYUxuC"
  },
  {
    name: "New Zone",
    description: null,
    tags: null,
    settings: { booking_max_duration: 900 },
    triggers: [],
    created_at: 1550546496,
    id: "zone-lmhh_hVfz0"
  },
  {
    name: "Tower 2",
    description: "building",
    tags: "building",
    settings: {
      discovery_info: {
        locker_locations: {
          "zone-QjLXbYUxuC": { West: [100, 200], East: [201, 300] }
        },
        concierge_phone: "+61431485594",
        messaging: "sys-O8kPamShYv",
        visitor_space: "towertwovisitors@place.tech",
        locker_structure: {
          "zone-Mhr8gKmcSS": {
            City: {
              personal: [
                ["31001", "31002", "31003", "31004"],
                ["31005", "31006", "31007", "31008"],
                [false, false, "31011", "31012"],
                ["31013", "31014", "31015", "31016"],
                ["31017", "31018", "31019", "31020"],
                ["31021", "31022", "31023", "31024"],
                ["31025", "31026", "31027", "31028"],
                ["31029", "31030", "31031", "31032"],
                ["31033", "31034", "31035", "31036"],
                [false, false, "31039", "31040"],
                ["31041", "31042", "31043", "31044"],
                ["31045", "31046", "31047", "31048"],
                ["31049", "31050", "31051", "31052"],
                ["31053", "31054", "31055", "31056"],
                ["31057", "31058", "31059", "31060"],
                ["31061", "31062", "31063", "31064"],
                ["31065", "31066", "31067", "31068"],
                ["31069", "31070", "31071", "31072"],
                ["31073", "31074", "31075", "31076"],
                ["31077", "31078", "31079", "31080"],
                ["31081", "31082", "31083", "31084"],
                ["31085", "31086", "31087", "31088"],
                ["31089", "31090", "31091", "31092"],
                ["31093", "31094", "31095", "31096"],
                ["31097", "31098", "31099", "31100"],
                ["31101", "31102", "31103", "31104"],
                ["31105", "31106", "31107", "31108"],
                ["31109", "31110", "31111", "31112"],
                ["31113", "31114", "31115", "31116"],
                [false, false, "31119", "31120"],
                ["31121", "31122", "31123", "31124"],
                ["31125", "31126", "31127", "31128"]
              ],
              pantry: [
                ["31501", "31502"],
                ["31503", "31504"],
                ["31505", "31506"],
                ["31507", false, false, false, false],
                ["31508", false, false, false, false],
                ["31509", false, false, false, false],
                ["31510", false, false, false, false],
                ["31511", false, false, false, false],
                ["31512", false, false, false, false],
                ["31513", false, false, "31515", false],
                ["31514", false, false, "31516", false],
                ["31517", "31518"],
                ["31519", "31520"],
                ["31521"],
                ["31522"]
              ]
            },
            Harbour: {
              personal: [
                ["31129", "31130", "31131", "31132"],
                ["31133", "31134", "31135", "31136"],
                [false, false, "31139", "31140"],
                ["31141", "31142", "31143", "31144"],
                ["31145", "31146", "31147", "31148"],
                ["31149", "31150", "31151", "31152"],
                ["31153", "31154", "31155", "31156"],
                ["31157", "31158", "31159", "31160"],
                ["31161", "31162", "31163", "31164"],
                ["31165", "31166", "31167", "31168"],
                ["31169", "31170", "31171", "31172"],
                ["31173", "31174", "31175", "31176"],
                ["31177", "31178", "31179", "31180"],
                ["31181", "31182", "31183", "31184"],
                ["31185", "31186", "31187", "31188"],
                ["31189", "31190", "31191", "31192"],
                ["31193", "31194", "31195", "31196"],
                ["31197", "31198", "31199", "31200"],
                ["31201", "31202", "31203", "31204"],
                ["31205", "31206", "31207", "31208"],
                ["31209", "31210", "31211", "31212"],
                ["31213", "31214", "31215", "31216"],
                [false, false, "31219", "31220"],
                ["31221", "31222", "31223", "31224"],
                ["31225", "31226", "31227", "31228"]
              ]
            }
          }
        },
        terms: [
          {
            title: "Room bookings",
            details: "Please release booked meeting rooms or spaces when you don't need them anymore, so everyone else knows they're free."
          },
          {
            title: "Noise levels",
            details: "Please be considerate of others and keep the volume down when having conversations or conference calls."
          },
          {
            title: "Be considerate",
            details: "When you've finished using a space, please ensure it is left clean and tidy for the next person."
          },
          {
            title: "Centralised waste management",
            details: "We're part of one of the most sustainable commercial precincts in the world. Please make an effort to place the right waste into the right bins, located in the Pantries."
          },
          {
            title: "Lost and found",
            details: 'Any personal or team items left behind in activity rooms or communal spaces will be taken to "Lost and found" at the concierge points.'
          },
          {
            title: "Invoice Statement",
            details: "For every confirmed booking, you will receive invoice statement via email for your record."
          },
          {
            title: "Billing",
            details: "Monthly invoice will be issued by 20th of every month for previous month. Invoice is due by end of the month it is issued."
          }
        ],
        levels: [
          {
            level_id: "zone-QjLXbYUxuC",
            level_name: "Level 31",
            map_url: "assets/maps/barangaroo_tower_2/level_31.svg"
          },
          {
            level_id: "zone-LEHeo501Er",
            level_name: "Level 30",
            map_url: "assets/maps/barangaroo_tower_2/level_30.svg"
          }
        ],
        extras: [
          {
            extra_id: "video_conference",
            extra_name: "Video Conference"
          },
          {
            extra_id: "presentation_screen",
            extra_name: "Presentation Screen"
          }
        ],
        catering: {
          coffee: [
            {
              items: [
                "Cappucino",
                "Expresso",
                "Flat White",
                "Mocha"
              ]
            },
            {
              items: [
                "Hot Choc",
                "Macciato",
                "Latte",
                "Long Black"
              ]
            },
            {
              items: [
                "Green Tea",
                "Camomile",
                "English Tea",
                "Black Tea"
              ]
            },
            {
              items: ["Almond", "Skim", "Soy", "Full Cream"],
              tag: "milk"
            },
            {
              items: ["Brown", "Equal", "Honey", "White"],
              tag: "sugar",
              amount: 0.5
            }
          ],
          drinks: [
            { items: ["Coke", "Sprite", "Fanta", "Lift"] },
            {
              items: [
                "Orange Juice",
                "Apple Juice",
                "Breakfast Juice",
                "Prune Juice"
              ]
            },
            {
              items: [
                "Tap Water",
                "Still Water",
                "Sparkling Water",
                "Mineral Water"
              ]
            },
            { items: ["Beer", "Light Beer", "Wine", "Champagne"] }
          ],
          food: [
            {
              items: [
                "Bruschetta",
                "Chicken Burger",
                "Eggs Blini",
                "French Toast"
              ]
            },
            {
              items: [
                "Spaghetti Bolognese",
                "Linguine Pesto",
                "Chorizo Farfalle",
                "Chicken Tortellini"
              ]
            },
            {
              items: [
                "Scallop Ceviche",
                "Herb Gnicchi",
                "Duck Salad",
                "Beef Brisket"
              ]
            },
            {
              items: [
                "Rainbow Roll",
                "Tiger Roll",
                "Spider Roll",
                "Ocean Roll"
              ]
            }
          ]
        }
      }
    },
    triggers: [],
    created_at: 1494571187,
    id: "zone-Kl0HN~nDwc"
  }
];

// src/app/mocks/backend/zones.mock.ts
var FILTER_FN8 = (item, q) => {
  if (!q || Object.keys(q).length <= 0) {
    return true;
  }
  let match = true;
  if (q.q) {
    match = match && `${item.name || ""}`.toLowerCase().indexOf((q.q || "").toLowerCase()) >= 0;
  }
  if (q.parent) {
    match = match && item.parent_id === q.parent;
  }
  if (q.control_system_id) {
    const system = endpointData(`${API}/systems`).find((sys) => sys.id === q.control_system_id);
    match = match && system && system.zones.includes(item.id);
  }
  return match;
};
generateBasicHandlers(`${API}/zones`, ZONES, FILTER_FN8);

// src/app/mocks/backend/admin.mock.ts
var API_KEYS = loadFromSession("api_keys", []);
var BROKERS = loadFromSession("brokers", []);
var EDGES = loadFromSession("edges", []);
var APPLICATIONS = loadFromSession("applications", []);
var UPLOADS = loadFromSession("uploads", []);
var STORAGE_PROVIDERS = loadFromSession("storage_providers", []);
var createFilter = (items) => (q) => {
  if (!q || Object.keys(q).length <= 0) {
    return items;
  }
  return items.filter((item) => {
    let match = true;
    if (q.authority_id) {
      match = match && item.authority_id === q.authority_id;
    }
    if (q.q) {
      match = match && (item.name || "").toLowerCase().indexOf((q.q || "").toLowerCase()) >= 0;
    }
    return match;
  });
};
Ko({
  path: `${API}/api_keys`,
  metadata: [],
  method: "GET",
  callback: (event) => createFilter(API_KEYS)(event.query_params)
});
Ko({
  path: `${API}/api_keys/:id`,
  metadata: [],
  method: "GET",
  callback: (event) => {
    const key = API_KEYS.find((k) => k.id === event.route_params.id);
    if (key)
      return key;
    throw { status: 404, message: "API key not found" };
  }
});
Ko({
  path: `${API}/api_keys`,
  metadata: [],
  method: "POST",
  callback: (event) => {
    const key = __spreadProps(__spreadValues({
      id: `api_key-${generateID()}`
    }, event.body), {
      x_api_key: `sk_${generateID(32)}`,
      created_at: Date.now() / 1e3,
      updated_at: Date.now() / 1e3
    });
    API_KEYS.push(key);
    saveToSession("api_keys", API_KEYS);
    return key;
  }
});
Ko({
  path: `${API}/api_keys/:id`,
  metadata: [],
  method: "PATCH",
  callback: (event) => {
    const index = API_KEYS.findIndex((k) => k.id === event.route_params.id);
    if (index >= 0) {
      const updated_key = __spreadProps(__spreadValues(__spreadValues({}, API_KEYS[index]), event.body), {
        updated_at: Date.now() / 1e3
      });
      API_KEYS[index] = updated_key;
      saveToSession("api_keys", API_KEYS);
      return updated_key;
    }
    throw { status: 404, message: "API key not found" };
  }
});
Ko({
  path: `${API}/api_keys/:id`,
  metadata: [],
  method: "DELETE",
  callback: (event) => {
    const index = API_KEYS.findIndex((k) => k.id === event.route_params.id);
    if (index >= 0) {
      API_KEYS.splice(index, 1);
      saveToSession("api_keys", API_KEYS);
      return {};
    }
    throw { status: 404, message: "API key not found" };
  }
});
Ko({
  path: `${API}/brokers`,
  metadata: [],
  method: "GET",
  callback: (event) => createFilter(BROKERS)(event.query_params)
});
Ko({
  path: `${API}/brokers/:id`,
  metadata: [],
  method: "GET",
  callback: (event) => {
    const broker = BROKERS.find((b) => b.id === event.route_params.id);
    if (broker)
      return broker;
    throw { status: 404, message: "Broker not found" };
  }
});
Ko({
  path: `${API}/brokers`,
  metadata: [],
  method: "POST",
  callback: (event) => {
    const broker = __spreadProps(__spreadValues({
      id: `broker-${generateID()}`
    }, event.body), {
      created_at: Date.now() / 1e3,
      updated_at: Date.now() / 1e3
    });
    BROKERS.push(broker);
    saveToSession("brokers", BROKERS);
    return broker;
  }
});
Ko({
  path: `${API}/brokers/:id`,
  metadata: [],
  method: "PUT",
  callback: (event) => {
    const index = BROKERS.findIndex((b) => b.id === event.route_params.id);
    if (index >= 0) {
      BROKERS[index] = __spreadProps(__spreadValues(__spreadValues({}, BROKERS[index]), event.body), {
        updated_at: Date.now() / 1e3
      });
      saveToSession("brokers", BROKERS);
      return BROKERS[index];
    }
    throw { status: 404, message: "Broker not found" };
  }
});
Ko({
  path: `${API}/brokers/:id`,
  metadata: [],
  method: "PATCH",
  callback: (event) => {
    const index = BROKERS.findIndex((b) => b.id === event.route_params.id);
    if (index >= 0) {
      BROKERS[index] = __spreadProps(__spreadValues(__spreadValues({}, BROKERS[index]), event.body), {
        updated_at: Date.now() / 1e3
      });
      saveToSession("brokers", BROKERS);
      return BROKERS[index];
    }
    throw { status: 404, message: "Broker not found" };
  }
});
Ko({
  path: `${API}/brokers/:id`,
  metadata: [],
  method: "DELETE",
  callback: (event) => {
    const index = BROKERS.findIndex((b) => b.id === event.route_params.id);
    if (index >= 0) {
      BROKERS.splice(index, 1);
      saveToSession("brokers", BROKERS);
      return {};
    }
    throw { status: 404, message: "Broker not found" };
  }
});
Ko({
  path: `${API}/edges`,
  metadata: [],
  method: "GET",
  callback: (event) => createFilter(EDGES)(event.query_params)
});
Ko({
  path: `${API}/edges/:id`,
  metadata: [],
  method: "GET",
  callback: (event) => {
    const edge = EDGES.find((e) => e.id === event.route_params.id);
    if (edge)
      return edge;
    throw { status: 404, message: "Edge not found" };
  }
});
Ko({
  path: `${API}/edges`,
  metadata: [],
  method: "POST",
  callback: (event) => {
    const edge = __spreadProps(__spreadValues({
      id: `edge-${generateID()}`
    }, event.body), {
      created_at: Date.now() / 1e3,
      updated_at: Date.now() / 1e3
    });
    EDGES.push(edge);
    saveToSession("edges", EDGES);
    return edge;
  }
});
Ko({
  path: `${API}/edges/:id`,
  metadata: [],
  method: "PUT",
  callback: (event) => {
    const index = EDGES.findIndex((e) => e.id === event.route_params.id);
    if (index >= 0) {
      EDGES[index] = __spreadProps(__spreadValues(__spreadValues({}, EDGES[index]), event.body), {
        updated_at: Date.now() / 1e3
      });
      saveToSession("edges", EDGES);
      return EDGES[index];
    }
    throw { status: 404, message: "Edge not found" };
  }
});
Ko({
  path: `${API}/edges/:id`,
  metadata: [],
  method: "PATCH",
  callback: (event) => {
    const index = EDGES.findIndex((e) => e.id === event.route_params.id);
    if (index >= 0) {
      EDGES[index] = __spreadProps(__spreadValues(__spreadValues({}, EDGES[index]), event.body), {
        updated_at: Date.now() / 1e3
      });
      saveToSession("edges", EDGES);
      return EDGES[index];
    }
    throw { status: 404, message: "Edge not found" };
  }
});
Ko({
  path: `${API}/edges/:id`,
  metadata: [],
  method: "DELETE",
  callback: (event) => {
    const index = EDGES.findIndex((e) => e.id === event.route_params.id);
    if (index >= 0) {
      EDGES.splice(index, 1);
      saveToSession("edges", EDGES);
      return {};
    }
    throw { status: 404, message: "Edge not found" };
  }
});
Ko({
  path: `${API}/edges/:id/token`,
  metadata: [],
  method: "GET",
  callback: (_event) => {
    return { token: `edge_token_${generateID(32)}` };
  }
});
Ko({
  path: `${API}/doorkeeper/applications`,
  metadata: [],
  method: "GET",
  callback: (event) => createFilter(APPLICATIONS)(event.query_params)
});
Ko({
  path: `${API}/doorkeeper/applications/:id`,
  metadata: [],
  method: "GET",
  callback: (event) => {
    const app = APPLICATIONS.find((a) => a.id === event.route_params.id);
    if (app)
      return app;
    throw { status: 404, message: "Application not found" };
  }
});
Ko({
  path: `${API}/doorkeeper/applications`,
  metadata: [],
  method: "POST",
  callback: (event) => {
    const app = __spreadProps(__spreadValues({
      id: `app-${generateID()}`,
      uid: generateID(32),
      secret: generateID(64)
    }, event.body), {
      created_at: Date.now() / 1e3,
      updated_at: Date.now() / 1e3
    });
    APPLICATIONS.push(app);
    saveToSession("applications", APPLICATIONS);
    return app;
  }
});
Ko({
  path: `${API}/doorkeeper/applications/:id`,
  metadata: [],
  method: "PUT",
  callback: (event) => {
    const index = APPLICATIONS.findIndex((a) => a.id === event.route_params.id);
    if (index >= 0) {
      APPLICATIONS[index] = __spreadProps(__spreadValues(__spreadValues({}, APPLICATIONS[index]), event.body), {
        updated_at: Date.now() / 1e3
      });
      saveToSession("applications", APPLICATIONS);
      return APPLICATIONS[index];
    }
    throw { status: 404, message: "Application not found" };
  }
});
Ko({
  path: `${API}/doorkeeper/applications/:id`,
  metadata: [],
  method: "PATCH",
  callback: (event) => {
    const index = APPLICATIONS.findIndex((a) => a.id === event.route_params.id);
    if (index >= 0) {
      APPLICATIONS[index] = __spreadProps(__spreadValues(__spreadValues({}, APPLICATIONS[index]), event.body), {
        updated_at: Date.now() / 1e3
      });
      saveToSession("applications", APPLICATIONS);
      return APPLICATIONS[index];
    }
    throw { status: 404, message: "Application not found" };
  }
});
Ko({
  path: `${API}/doorkeeper/applications/:id`,
  metadata: [],
  method: "DELETE",
  callback: (event) => {
    const index = APPLICATIONS.findIndex((a) => a.id === event.route_params.id);
    if (index >= 0) {
      APPLICATIONS.splice(index, 1);
      saveToSession("applications", APPLICATIONS);
      return {};
    }
    throw { status: 404, message: "Application not found" };
  }
});
Ko({
  path: `${API}/uploads`,
  metadata: [],
  method: "GET",
  callback: (event) => createFilter(UPLOADS)(event.query_params)
});
Ko({
  path: `${API}/uploads/:id`,
  metadata: [],
  method: "GET",
  callback: (event) => {
    const upload = UPLOADS.find((u) => u.id === event.route_params.id);
    if (upload)
      return upload;
    throw { status: 404, message: "Upload not found" };
  }
});
Ko({
  path: `${API}/uploads`,
  metadata: [],
  method: "POST",
  callback: (event) => {
    const upload = __spreadProps(__spreadValues({
      id: `upload-${generateID()}`
    }, event.body), {
      file_path: `/uploads/${generateID()}.bin`,
      created_at: Date.now() / 1e3,
      updated_at: Date.now() / 1e3
    });
    UPLOADS.push(upload);
    saveToSession("uploads", UPLOADS);
    return upload;
  }
});
Ko({
  path: `${API}/uploads/:id`,
  metadata: [],
  method: "DELETE",
  callback: (event) => {
    const index = UPLOADS.findIndex((u) => u.id === event.route_params.id);
    if (index >= 0) {
      UPLOADS.splice(index, 1);
      saveToSession("uploads", UPLOADS);
      return {};
    }
    throw { status: 404, message: "Upload not found" };
  }
});
Ko({
  path: `${API}/storages`,
  metadata: [],
  method: "GET",
  callback: (event) => createFilter(STORAGE_PROVIDERS)(event.query_params)
});
Ko({
  path: `${API}/storages/:id`,
  metadata: [],
  method: "GET",
  callback: (event) => {
    const provider = STORAGE_PROVIDERS.find((p) => p.id === event.route_params.id);
    if (provider)
      return provider;
    throw { status: 404, message: "Storage provider not found" };
  }
});
Ko({
  path: `${API}/storages`,
  metadata: [],
  method: "POST",
  callback: (event) => {
    const provider = __spreadProps(__spreadValues({
      id: `storage-${generateID()}`
    }, event.body), {
      created_at: Date.now() / 1e3,
      updated_at: Date.now() / 1e3
    });
    STORAGE_PROVIDERS.push(provider);
    saveToSession("storage_providers", STORAGE_PROVIDERS);
    return provider;
  }
});
Ko({
  path: `${API}/storages/:id`,
  metadata: [],
  method: "PUT",
  callback: (event) => {
    const index = STORAGE_PROVIDERS.findIndex((p) => p.id === event.route_params.id);
    if (index >= 0) {
      STORAGE_PROVIDERS[index] = __spreadProps(__spreadValues(__spreadValues({}, STORAGE_PROVIDERS[index]), event.body), {
        updated_at: Date.now() / 1e3
      });
      saveToSession("storage_providers", STORAGE_PROVIDERS);
      return STORAGE_PROVIDERS[index];
    }
    throw { status: 404, message: "Storage provider not found" };
  }
});
Ko({
  path: `${API}/storages/:id`,
  metadata: [],
  method: "PATCH",
  callback: (event) => {
    const index = STORAGE_PROVIDERS.findIndex((p) => p.id === event.route_params.id);
    if (index >= 0) {
      STORAGE_PROVIDERS[index] = __spreadProps(__spreadValues(__spreadValues({}, STORAGE_PROVIDERS[index]), event.body), {
        updated_at: Date.now() / 1e3
      });
      saveToSession("storage_providers", STORAGE_PROVIDERS);
      return STORAGE_PROVIDERS[index];
    }
    throw { status: 404, message: "Storage provider not found" };
  }
});
Ko({
  path: `${API}/storages/:id`,
  metadata: [],
  method: "DELETE",
  callback: (event) => {
    const index = STORAGE_PROVIDERS.findIndex((p) => p.id === event.route_params.id);
    if (index >= 0) {
      STORAGE_PROVIDERS.splice(index, 1);
      saveToSession("storage_providers", STORAGE_PROVIDERS);
      return {};
    }
    throw { status: 404, message: "Storage provider not found" };
  }
});
Ko({
  path: `${API}/cluster/details`,
  metadata: [],
  method: "GET",
  callback: (_event) => {
    return {
      compiled_drivers: ["driver-1", "driver-2"],
      available_repositories: ["repo-1"],
      running_drivers: 5,
      module_instances: 10,
      unavailable_repositories: [],
      unavailable_drivers: []
    };
  }
});
Ko({
  path: `${API}/cluster/processes`,
  metadata: [],
  method: "GET",
  callback: (_event) => {
    return [];
  }
});
Ko({
  path: `${API}/cluster/core_load`,
  metadata: [],
  method: "GET",
  callback: (_event) => {
    return {
      local: {
        hostname: "localhost",
        cpu_count: 4,
        core_cpu: 5.2,
        total_cpu: 12.5,
        memory_total: 16e9,
        memory_usage: 8e9,
        core_memory: 5e8
      }
    };
  }
});

// src/app/mocks/backend/auth-sources.mock.ts
var OAUTH_SOURCES = loadFromSession("oauth_sources", []);
var SAML_SOURCES = loadFromSession("saml_sources", []);
var LDAP_SOURCES = loadFromSession("ldap_sources", []);
var createFilter2 = (items) => (q) => {
  if (!q || Object.keys(q).length <= 0) {
    return items;
  }
  return items.filter((item) => {
    let match = true;
    if (q.authority_id) {
      match = match && item.authority_id === q.authority_id;
    }
    if (q.q) {
      match = match && `${item.name || ""}`.toLowerCase().indexOf((q.q || "").toLowerCase()) >= 0;
    }
    return match;
  });
};
Ko({
  path: `${API}/oauth_auths`,
  metadata: [],
  method: "GET",
  callback: (event) => createFilter2(OAUTH_SOURCES)(event.query_params)
});
Ko({
  path: `${API}/oauth_auths/:id`,
  metadata: [],
  method: "GET",
  callback: (event) => {
    const source = OAUTH_SOURCES.find((s) => s.id === event.route_params.id);
    if (source)
      return source;
    throw { status: 404, message: "OAuth source not found" };
  }
});
Ko({
  path: `${API}/oauth_auths`,
  metadata: [],
  method: "POST",
  callback: (event) => {
    const source = __spreadProps(__spreadValues({
      id: `oauth-${generateID()}`
    }, event.body), {
      created_at: Date.now() / 1e3,
      updated_at: Date.now() / 1e3
    });
    OAUTH_SOURCES.push(source);
    saveToSession("oauth_sources", OAUTH_SOURCES);
    return source;
  }
});
Ko({
  path: `${API}/oauth_auths/:id`,
  metadata: [],
  method: "PUT",
  callback: (event) => {
    const index = OAUTH_SOURCES.findIndex((s) => s.id === event.route_params.id);
    if (index >= 0) {
      OAUTH_SOURCES[index] = __spreadProps(__spreadValues(__spreadValues({}, OAUTH_SOURCES[index]), event.body), {
        updated_at: Date.now() / 1e3
      });
      saveToSession("oauth_sources", OAUTH_SOURCES);
      return OAUTH_SOURCES[index];
    }
    throw { status: 404, message: "OAuth source not found" };
  }
});
Ko({
  path: `${API}/oauth_auths/:id`,
  metadata: [],
  method: "PATCH",
  callback: (event) => {
    const index = OAUTH_SOURCES.findIndex((s) => s.id === event.route_params.id);
    if (index >= 0) {
      OAUTH_SOURCES[index] = __spreadProps(__spreadValues(__spreadValues({}, OAUTH_SOURCES[index]), event.body), {
        updated_at: Date.now() / 1e3
      });
      saveToSession("oauth_sources", OAUTH_SOURCES);
      return OAUTH_SOURCES[index];
    }
    throw { status: 404, message: "OAuth source not found" };
  }
});
Ko({
  path: `${API}/oauth_auths/:id`,
  metadata: [],
  method: "DELETE",
  callback: (event) => {
    const index = OAUTH_SOURCES.findIndex((s) => s.id === event.route_params.id);
    if (index >= 0) {
      OAUTH_SOURCES.splice(index, 1);
      saveToSession("oauth_sources", OAUTH_SOURCES);
      return {};
    }
    throw { status: 404, message: "OAuth source not found" };
  }
});
Ko({
  path: `${API}/saml_auths`,
  metadata: [],
  method: "GET",
  callback: (event) => createFilter2(SAML_SOURCES)(event.query_params)
});
Ko({
  path: `${API}/saml_auths/:id`,
  metadata: [],
  method: "GET",
  callback: (event) => {
    const source = SAML_SOURCES.find((s) => s.id === event.route_params.id);
    if (source)
      return source;
    throw { status: 404, message: "SAML source not found" };
  }
});
Ko({
  path: `${API}/saml_auths`,
  metadata: [],
  method: "POST",
  callback: (event) => {
    const source = __spreadProps(__spreadValues({
      id: `saml-${generateID()}`
    }, event.body), {
      created_at: Date.now() / 1e3,
      updated_at: Date.now() / 1e3
    });
    SAML_SOURCES.push(source);
    saveToSession("saml_sources", SAML_SOURCES);
    return source;
  }
});
Ko({
  path: `${API}/saml_auths/:id`,
  metadata: [],
  method: "PUT",
  callback: (event) => {
    const index = SAML_SOURCES.findIndex((s) => s.id === event.route_params.id);
    if (index >= 0) {
      SAML_SOURCES[index] = __spreadProps(__spreadValues(__spreadValues({}, SAML_SOURCES[index]), event.body), {
        updated_at: Date.now() / 1e3
      });
      saveToSession("saml_sources", SAML_SOURCES);
      return SAML_SOURCES[index];
    }
    throw { status: 404, message: "SAML source not found" };
  }
});
Ko({
  path: `${API}/saml_auths/:id`,
  metadata: [],
  method: "PATCH",
  callback: (event) => {
    const index = SAML_SOURCES.findIndex((s) => s.id === event.route_params.id);
    if (index >= 0) {
      SAML_SOURCES[index] = __spreadProps(__spreadValues(__spreadValues({}, SAML_SOURCES[index]), event.body), {
        updated_at: Date.now() / 1e3
      });
      saveToSession("saml_sources", SAML_SOURCES);
      return SAML_SOURCES[index];
    }
    throw { status: 404, message: "SAML source not found" };
  }
});
Ko({
  path: `${API}/saml_auths/:id`,
  metadata: [],
  method: "DELETE",
  callback: (event) => {
    const index = SAML_SOURCES.findIndex((s) => s.id === event.route_params.id);
    if (index >= 0) {
      SAML_SOURCES.splice(index, 1);
      saveToSession("saml_sources", SAML_SOURCES);
      return {};
    }
    throw { status: 404, message: "SAML source not found" };
  }
});
Ko({
  path: `${API}/ldap_auths`,
  metadata: [],
  method: "GET",
  callback: (event) => createFilter2(LDAP_SOURCES)(event.query_params)
});
Ko({
  path: `${API}/ldap_auths/:id`,
  metadata: [],
  method: "GET",
  callback: (event) => {
    const source = LDAP_SOURCES.find((s) => s.id === event.route_params.id);
    if (source)
      return source;
    throw { status: 404, message: "LDAP source not found" };
  }
});
Ko({
  path: `${API}/ldap_auths`,
  metadata: [],
  method: "POST",
  callback: (event) => {
    const source = __spreadProps(__spreadValues({
      id: `ldap-${generateID()}`
    }, event.body), {
      created_at: Date.now() / 1e3,
      updated_at: Date.now() / 1e3
    });
    LDAP_SOURCES.push(source);
    saveToSession("ldap_sources", LDAP_SOURCES);
    return source;
  }
});
Ko({
  path: `${API}/ldap_auths/:id`,
  metadata: [],
  method: "PUT",
  callback: (event) => {
    const index = LDAP_SOURCES.findIndex((s) => s.id === event.route_params.id);
    if (index >= 0) {
      LDAP_SOURCES[index] = __spreadProps(__spreadValues(__spreadValues({}, LDAP_SOURCES[index]), event.body), {
        updated_at: Date.now() / 1e3
      });
      saveToSession("ldap_sources", LDAP_SOURCES);
      return LDAP_SOURCES[index];
    }
    throw { status: 404, message: "LDAP source not found" };
  }
});
Ko({
  path: `${API}/ldap_auths/:id`,
  metadata: [],
  method: "PATCH",
  callback: (event) => {
    const index = LDAP_SOURCES.findIndex((s) => s.id === event.route_params.id);
    if (index >= 0) {
      LDAP_SOURCES[index] = __spreadProps(__spreadValues(__spreadValues({}, LDAP_SOURCES[index]), event.body), {
        updated_at: Date.now() / 1e3
      });
      saveToSession("ldap_sources", LDAP_SOURCES);
      return LDAP_SOURCES[index];
    }
    throw { status: 404, message: "LDAP source not found" };
  }
});
Ko({
  path: `${API}/ldap_auths/:id`,
  metadata: [],
  method: "DELETE",
  callback: (event) => {
    const index = LDAP_SOURCES.findIndex((s) => s.id === event.route_params.id);
    if (index >= 0) {
      LDAP_SOURCES.splice(index, 1);
      saveToSession("ldap_sources", LDAP_SOURCES);
      return {};
    }
    throw { status: 404, message: "LDAP source not found" };
  }
});

// src/app/mocks/backend/general.mock.ts
Ko({
  path: `${API}/version`,
  method: "GET",
  callback: () => ({
    api: "mock-api",
    build_time: (/* @__PURE__ */ new Date()).toISOString(),
    version: "n/a",
    commit: "n/a"
  })
});
Ko({
  path: `${API}/clusters`,
  method: "GET",
  callback: () => []
});

// src/app/mocks/backend/history.mock.ts
function generateHistory(parent_id, count = 5) {
  const actions = ["create", "update", "delete"];
  const users = ["admin@place.tech", "user@place.tech", "system"];
  return Array(count).fill(0).map((_, i) => ({
    id: `history-${generateID()}`,
    parent_id,
    action: actions[Math.floor(Math.random() * actions.length)],
    user_id: `user-${i}`,
    user_email: users[Math.floor(Math.random() * users.length)],
    changes: {
      name: { from: "Old Name", to: "New Name" }
    },
    created_at: Date.now() / 1e3 - i * 86400
    // One day apart
  }));
}
var PARENT_TYPES = [
  "systems",
  "zones",
  "drivers",
  "modules",
  "users",
  "triggers",
  "repositories"
];
PARENT_TYPES.forEach((parent_type) => {
  Ko({
    path: `${API}/${parent_type}/:id/history`,
    metadata: [],
    method: "GET",
    callback: (event) => {
      const parent_id = event.route_params.id;
      const limit = parseInt(event.query_params?.limit) || 10;
      return generateHistory(parent_id, limit);
    }
  });
});
Ko({
  path: `${API}/settings/:id/history`,
  metadata: [],
  method: "GET",
  callback: (event) => {
    const parent_id = event.route_params.id;
    return generateHistory(parent_id, 5).map((h) => __spreadProps(__spreadValues({}, h), {
      settings_string: "{}"
    }));
  }
});

// src/app/mocks/backend/metadata.mock.ts
var METADATA_STORE = {};
function getMetadata(parent_id) {
  if (!METADATA_STORE[parent_id]) {
    METADATA_STORE[parent_id] = {};
  }
  return Object.entries(METADATA_STORE[parent_id]).map(([name, data]) => ({
    id: `${parent_id}_${name}`,
    name,
    parent_id,
    details: data.details || {},
    description: data.description || "",
    editors: data.editors || [],
    schema: data.schema || {},
    modified_by_id: "current",
    created_at: Date.now() / 1e3,
    updated_at: Date.now() / 1e3
  }));
}
function setMetadata(parent_id, name, data) {
  if (!METADATA_STORE[parent_id]) {
    METADATA_STORE[parent_id] = {};
  }
  METADATA_STORE[parent_id][name] = data;
  return {
    id: `${parent_id}_${name}`,
    name,
    parent_id,
    details: data.details || {},
    description: data.description || "",
    editors: data.editors || [],
    schema: data.schema || {},
    modified_by_id: "current",
    created_at: Date.now() / 1e3,
    updated_at: Date.now() / 1e3
  };
}
function deleteMetadata(parent_id, name) {
  if (METADATA_STORE[parent_id]) {
    delete METADATA_STORE[parent_id][name];
  }
}
var PARENT_TYPES2 = ["systems", "zones", "drivers", "users"];
PARENT_TYPES2.forEach((parent_type) => {
  Ko({
    path: `${API}/${parent_type}/:id/metadata`,
    metadata: [],
    method: "GET",
    callback: (event) => {
      const parent_id = event.route_params.id;
      return getMetadata(parent_id);
    }
  });
  Ko({
    path: `${API}/${parent_type}/:id/metadata/:name`,
    metadata: [],
    method: "GET",
    callback: (event) => {
      const parent_id = event.route_params.id;
      const name = event.route_params.name;
      const all_metadata = getMetadata(parent_id);
      const metadata = all_metadata.find((m) => m.name === name);
      if (metadata) {
        return metadata;
      }
      throw { status: 404, message: "Metadata not found" };
    }
  });
  Ko({
    path: `${API}/${parent_type}/:id/metadata`,
    metadata: [],
    method: "POST",
    callback: (event) => {
      const parent_id = event.route_params.id;
      const data = event.body;
      return setMetadata(parent_id, data.name, data);
    }
  });
  Ko({
    path: `${API}/${parent_type}/:id/metadata/:name`,
    metadata: [],
    method: "PUT",
    callback: (event) => {
      const parent_id = event.route_params.id;
      const name = event.route_params.name;
      const data = event.body;
      return setMetadata(parent_id, name, data);
    }
  });
  Ko({
    path: `${API}/${parent_type}/:id/metadata/:name`,
    metadata: [],
    method: "PATCH",
    callback: (event) => {
      const parent_id = event.route_params.id;
      const name = event.route_params.name;
      const data = event.body;
      return setMetadata(parent_id, name, data);
    }
  });
  Ko({
    path: `${API}/${parent_type}/:id/metadata/:name`,
    metadata: [],
    method: "DELETE",
    callback: (event) => {
      const parent_id = event.route_params.id;
      const name = event.route_params.name;
      deleteMetadata(parent_id, name);
      return {};
    }
  });
});
Ko({
  path: `${API}/metadata/:id/history`,
  metadata: [],
  method: "GET",
  callback: (_event) => {
    return [];
  }
});

// src/app/mocks/backend/settings.mock.ts
var FILTER_FN9 = (item, q) => {
  if (!q || Object.keys(q).length <= 0) {
    return true;
  }
  let match = true;
  if (q.q) {
    match = match && `${item.name || ""}`.toLowerCase().indexOf((q.q || "").toLowerCase()) >= 0;
  }
  if (q.parent_id) {
    match = match && item.parent_id === q.parent_id;
  }
  return match;
};
var SETTINGS_DATA = [];
var handle_items_fn = (list) => {
  list.forEach((item) => {
    if (item.settings && !SETTINGS_DATA.find((s) => s.parent_id === item.id)) {
      SETTINGS_DATA.push({
        id: `setting-${generateID()}`,
        parent_id: item.id,
        encryption_level: He.None,
        settings_string: item.settings instanceof Object ? JSON.stringify(item.settings) : item.settings
      });
    }
  });
};
var obs = listenToHandlerChanges(`${API}/systems`);
if (obs) {
  obs.subscribe(handle_items_fn);
}
obs = listenToHandlerChanges(`${API}/modules`);
if (obs) {
  obs.subscribe(handle_items_fn);
}
obs = listenToHandlerChanges(`${API}/zones`);
if (obs) {
  obs.subscribe(handle_items_fn);
}
obs = listenToHandlerChanges(`${API}/drivers`);
if (obs) {
  obs.subscribe(handle_items_fn);
}
generateBasicHandlers(`${API}/settings`, SETTINGS_DATA, FILTER_FN9);

// src/app/mocks/backend/staff-api.mock.ts
var STAFF_API = "/api/staff/v1";
var DEFAULT_TENANTS = [
  {
    id: "tenant-default",
    name: "Default Tenant",
    domain: DOMAIN,
    platform: "google",
    credentials: "{}",
    booking_limits: {},
    early_checkin: 30,
    secret_expiry: null,
    created_at: Date.now() / 1e3,
    updated_at: Date.now() / 1e3
  }
];
var TENANTS = loadFromSession("tenants", DEFAULT_TENANTS);
var createFilter3 = (items) => (q) => {
  if (!q || Object.keys(q).length <= 0) {
    return items;
  }
  return items.filter((item) => {
    let match = true;
    if (q.domain) {
      match = match && item.domain === q.domain;
    }
    if (q.q) {
      match = match && `${item.name || ""}`.toLowerCase().indexOf((q.q || "").toLowerCase()) >= 0;
    }
    return match;
  });
};
Ko({
  path: `${STAFF_API}/tenants`,
  metadata: [],
  method: "GET",
  callback: (event) => createFilter3(TENANTS)(event.query_params)
});
Ko({
  path: `${STAFF_API}/tenants/:id`,
  metadata: [],
  method: "GET",
  callback: (event) => {
    const tenant = TENANTS.find((t) => t.id === event.route_params.id);
    if (tenant)
      return tenant;
    throw { status: 404, message: "Tenant not found" };
  }
});
Ko({
  path: `${STAFF_API}/tenants`,
  metadata: [],
  method: "POST",
  callback: (event) => {
    const tenant = __spreadProps(__spreadValues({
      id: `tenant-${generateID()}`
    }, event.body), {
      created_at: Date.now() / 1e3,
      updated_at: Date.now() / 1e3
    });
    TENANTS.push(tenant);
    saveToSession("tenants", TENANTS);
    return tenant;
  }
});
Ko({
  path: `${STAFF_API}/tenants/:id`,
  metadata: [],
  method: "PUT",
  callback: (event) => {
    const index = TENANTS.findIndex((t) => t.id === event.route_params.id);
    if (index >= 0) {
      TENANTS[index] = __spreadProps(__spreadValues(__spreadValues({}, TENANTS[index]), event.body), {
        updated_at: Date.now() / 1e3
      });
      saveToSession("tenants", TENANTS);
      return TENANTS[index];
    }
    throw { status: 404, message: "Tenant not found" };
  }
});
Ko({
  path: `${STAFF_API}/tenants/:id`,
  metadata: [],
  method: "PATCH",
  callback: (event) => {
    const index = TENANTS.findIndex((t) => t.id === event.route_params.id);
    if (index >= 0) {
      TENANTS[index] = __spreadProps(__spreadValues(__spreadValues({}, TENANTS[index]), event.body), {
        updated_at: Date.now() / 1e3
      });
      saveToSession("tenants", TENANTS);
      return TENANTS[index];
    }
    throw { status: 404, message: "Tenant not found" };
  }
});
Ko({
  path: `${STAFF_API}/tenants/:id`,
  metadata: [],
  method: "DELETE",
  callback: (event) => {
    const index = TENANTS.findIndex((t) => t.id === event.route_params.id);
    if (index >= 0) {
      TENANTS.splice(index, 1);
      saveToSession("tenants", TENANTS);
      return {};
    }
    throw { status: 404, message: "Tenant not found" };
  }
});
Ko({
  path: `${STAFF_API}/tenants/:id/limits`,
  metadata: [],
  method: "GET",
  callback: (event) => {
    const tenant = TENANTS.find((t) => t.id === event.route_params.id);
    if (tenant)
      return tenant.booking_limits || {};
    throw { status: 404, message: "Tenant not found" };
  }
});
Ko({
  path: `${STAFF_API}/tenants/:id/limits`,
  metadata: [],
  method: "PUT",
  callback: (event) => {
    const index = TENANTS.findIndex((t) => t.id === event.route_params.id);
    if (index >= 0) {
      TENANTS[index].booking_limits = event.body;
      saveToSession("tenants", TENANTS);
      return TENANTS[index].booking_limits;
    }
    throw { status: 404, message: "Tenant not found" };
  }
});
Ko({
  path: `${STAFF_API}/users/current`,
  metadata: [],
  method: "GET",
  callback: (_event) => {
    return {
      id: "current",
      name: "Place Admin",
      email: "admin@place.tech",
      sys_admin: true,
      support: true,
      groups: []
    };
  }
});

// src/app/mocks/system.mockup.ts
window.systemData = window.systemData || {};
window.control = window.control || {};
window.control.systems = window.control.systems || {};
window.control.systems["sys-B0"] = {
  System: [
    {
      name: "Demo System"
    }
  ],
  Demo: [
    {
      volume: 0,
      mute: false,
      views: 0,
      state: "Idle",
      $play() {
        this.state = "Playing";
      },
      $stop() {
        this.state = "Stopped";
      },
      $volume(value) {
        this.volume = value;
        if (this.volume > 100) {
          this.volume = 100;
        } else if (this.volume < 0) {
          this.volume = 0;
        }
      },
      $mute(state) {
        this.mute = state;
      },
      $state(status) {
        this.state = status;
      }
    }
  ]
};
setTimeout(() => initMessages(), 500);
function initMessages() {
  if (window.backend && window.backend.model.user) {
    const messages = [
      "Testing",
      "Response to Testing",
      `Hello I'm ${window.backend.model.user.name}`,
      `Hello ${window.backend.model.user.name}, this is the concierge`,
      "Can I book a room for tomorrow at 9:30am?",
      "Sure, how does Activity Space 31.04 sound?",
      "That's exactly what I'm looking for, thanks",
      "Alright, you now have a booking for Activity Space 31.04 at 9:30am tomorrow."
    ];
    let time = startOfMinute(addMinutes(Date.now(), -messages.length * 30));
    let index = 0;
    for (const msg of messages) {
      window.control.systems["sys-B0"].Slack[0].threads.local.push({
        text: msg,
        username: index % 2 === 0 ? window.backend.model.user.name : "",
        ts: time.valueOf()
      });
      index++;
      time = addMinutes(time, 30);
    }
  } else {
    setTimeout(() => initMessages(), 500);
  }
}
window.systemData["sys-B0"] = window.control.systems["sys-B0"];
//# sourceMappingURL=chunk-MPI6KKFY.js.map
