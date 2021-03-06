export const DRIVERS = [
    {
        name: 'ACA Device Probe',
        role: 1,
        description: 'Passthrough / comms logger for probing device protocols',
        default: null,
        class_name: '::Aca::DeviceProbe',
        module_name: 'Probe',
        settings: { hex: false },
        created_at: 1519091316,
        ignore_connected: false,
        id: 'dep-WaXdMkUcHg',
    },
    {
        name: 'ACA Meeting Room Logic',
        role: 99,
        description: null,
        default: null,
        class_name: '::Aca::MeetingRoom',
        module_name: 'System',
        settings: { joiner_driver: 'System' },
        created_at: 1494900906,
        ignore_connected: false,
        id: 'dep-KvMtm2DJm8',
    },
    {
        name: 'ACA Screen Logic Manual',
        role: 99,
        description: null,
        default: null,
        class_name: '::Aca::ScreenLogicManual',
        module_name: 'Screen Logic (for Doors)',
        settings: {},
        created_at: 1548202439,
        ignore_connected: false,
        id: 'dep-ke73zkMifp',
    },
    {
        name: 'AMX Acendo Vibe',
        role: 1,
        description: null,
        default: 4999,
        class_name: '::Amx::AcendoVibe',
        module_name: 'Mixer',
        settings: {},
        created_at: 1519795334,
        ignore_connected: false,
        id: 'dep-Wwdl4xCzvS',
    },
    {
        name: 'Exterity Avedia Player (R92xx)',
        role: 1,
        description: null,
        default: 23,
        class_name: '::Exterity::AvediaPlayer::R92xx',
        module_name: 'IPTV',
        settings: {},
        created_at: 1510209314,
        ignore_connected: false,
        id: 'dep-SHoK4QWyKY',
    },
    {
        name: 'Exterity Avedia Player (R93xx)',
        role: 1,
        description: null,
        default: 23,
        class_name: '::Exterity::AvediaPlayer::R93xx',
        module_name: 'IPTV',
        settings: {},
        created_at: 1510209261,
        ignore_connected: false,
        id: 'dep-SHoD1yqjUE',
    },
    {
        name: 'Extron Switcher DTP',
        role: 1,
        description: null,
        default: 23,
        class_name: '::Extron::Switcher::Dtp',
        module_name: 'Switcher',
        settings: {},
        created_at: 1529566728,
        ignore_connected: false,
        id: 'dep-beHIInWMV5',
    },
    {
        name: 'GlobalCache IO Gateway',
        role: 1,
        description: null,
        default: 4998,
        class_name: '::GlobalCache::Gc100',
        module_name: 'DigitalIO',
        settings: {},
        created_at: 1509941816,
        ignore_connected: false,
        id: 'dep-S9OfntF_TR',
    },
    {
        name: 'KNX BAOS Lighting',
        role: 1,
        description: null,
        default: 12004,
        class_name: '::Knx::BaosLighting',
        module_name: 'Lighting',
        settings: {},
        created_at: 1519367963,
        ignore_connected: false,
        id: 'dep-WjCyo9xO8H',
    },
    {
        name: 'Office365 Room Bookings',
        role: 99,
        description: null,
        default: null,
        class_name: '::Aca::OfficeBooking',
        module_name: 'Bookings',
        settings: {
            booking_hide_title: true,
            update_every: '30s',
            card_readers: ['reader_id_1', 'reader_id_2'],
            ldap_creds: {
                host: 'ldap.org.com',
                port: 636,
                encryption: {
                    method: 'simple_tls',
                    tls_options: { verify_mode: 0 },
                },
                auth: {
                    method: 'simple',
                    username: 'service account',
                    password: 'password',
                },
            },
            tree_base: 'ou=User,ou=Accounts,dc=org,dc=com',
            ews_creds: [
                'https://company.com/EWS/Exchange.asmx',
                'service account',
                'password',
                { http_opts: { ssl_verify_mode: 0 } },
            ],
            ews_room: 'room@email.address',
            office_client_id: '',
            office_secret: '',
            office_organiser_location: 'attendees',
            office_scope: 'https://graph.microsoft.com/.default',
            office_options: {
                site: 'https://login.microsoftonline.com',
                token_url: '/place.tech/oauth2/v2.0/token',
            },
            office_token_url: '/place.tech/oauth2/v2.0/token',
            office_site: 'https://login.microsoftonline.com',
            touch_enabled: false,
        },
        created_at: 1498005404,
        ignore_connected: false,
        id: 'dep-MOoiqDHI3E',
    },
    {
        name: 'Panasonic LCD Protocol 2',
        role: 1,
        description: null,
        default: 1024,
        class_name: '::Panasonic::LCD::Protocol2',
        module_name: 'Display',
        settings: { username: 'admin1', password: 'panasonic' },
        created_at: 1541653335,
        ignore_connected: false,
        id: 'dep-hTbe3LWKzB',
    },
    {
        name: 'Philips SICP Display',
        role: 1,
        description: null,
        default: 5000,
        class_name: '::Philips::Display::SicpProtocol',
        module_name: 'Display',
        settings: {},
        created_at: 1510209629,
        ignore_connected: false,
        id: 'dep-SHoznCS-MR',
    },
    {
        name: 'QSC Audio DSP (remote protocol)',
        role: 1,
        description: null,
        default: 1710,
        class_name: '::Qsc::QSysRemote',
        module_name: 'Mixer',
        settings: {},
        created_at: 1548204050,
        ignore_connected: false,
        id: 'dep-keAMXW0yae',
    },
    {
        name: 'QSC Audio DSP External Control',
        role: 1,
        description: null,
        default: 1702,
        class_name: '::Qsc::QSysControl',
        module_name: 'Mixer',
        settings: {},
        created_at: 1529567021,
        ignore_connected: false,
        id: 'dep-beHv9C413d',
    },
    {
        name: 'QSC PTZ Camera Proxy',
        role: 99,
        description: null,
        default: null,
        class_name: '::Qsc::QSysCamera',
        module_name: 'Camera',
        settings: {},
        created_at: 1542607423,
        ignore_connected: false,
        id: 'dep-hxXtCor9su',
    },
    {
        name: 'Samsung MD & DM Series LCD',
        role: 1,
        description:
            'For DM displays configure the following options:\n\n1. Network Standby = OFF (reduces the chance of a display crashing)\n2. Set Auto Standby = OFF\n3. Set Eco Solution, Auto Off = OFF\n\nHard Power off displays each night and wake on lan them in the morning.\n\n\ndefault port changed from 1515 to 4999 as they are all on globalcache itachs',
        default: '4999',
        class_name: '::Samsung::Displays::MdSeries',
        module_name: 'Display',
        settings: { display_id: 0, volume_min: 50 },
        created_at: 1509504361,
        ignore_connected: false,
        id: 'dep-RygISIbluK',
    },
    {
        name: 'Slack Concierge Connector',
        role: 99,
        description: null,
        default: null,
        class_name: '::Aca::SlackConcierge',
        module_name: 'Slack',
        settings: {
            building: 'barangaroo',
            channel: 'CEXEVA8Q7',
            slack_api_token: '',
        },
        created_at: 1503273843,
        ignore_connected: false,
        id: 'dep-Oy7km26GOB',
    },
    {
        name: 'Slack Connector',
        role: 99,
        description: null,
        default: null,
        class_name: '::Aca::Slack',
        module_name: 'Slack',
        settings: {
            building: 'barangaroo',
            channel: 'CEXEVA8Q7',
            slack_api_token: '',
        },
        created_at: 1502078764,
        ignore_connected: false,
        id: 'dep-OMdvwTiPU4',
    },
];
