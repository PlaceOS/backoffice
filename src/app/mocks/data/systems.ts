/**
 * Room control setup of the UI rooms that have AV equipment, by system ID.
 * The rooms come from `./ui-mocks`. Module IDs are from `./modules`
 */
export const AV_SETUPS: Record<string, AvSetup> = {
    'space-1': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: [
            'mod-h4g~vwlgiC',
            'mod-hxOq9VU66_',
            'mod-hxXdF12~qo',
            'mod-h-5bNcMQmz',
            'mod-hxXwFf9Ye4',
            'mod-h-5nphanFl',
            'mod-h-7g_zN-~b',
            'mod-kZ9xn_KdNy',
            'mod-ke5B24tto7',
            'mod-m2RqG32afs',
        ],
        settings: {
            ignore_modes: true,
            defaults: {
                default_mode: 'powerup_mode',
                shutdown_mode: 'shutdown_mode',
            },
            touch_enabled: false,
            discovery_info: {},
            number: 30,
            map_id: '2.30.08',
            extra_features: '',
            cost_hour: 21000,
            ideal_for: 'Havin a swell time',
            contains: 'Cheese',
            lighting_group: 6,
            lights: {
                levels: [
                    { name: 'High', trigger: 0 },
                    { name: 'Meeting', trigger: 1 },
                    { name: 'Presentation', trigger: 2 },
                ],
                present: 2,
                shutdown: 3,
            },
            modes: {
                powerup_mode: {},
                shutdown_mode: {
                    execute: [
                        {
                            module: 'Lighting_1',
                            func: 'lighting',
                            args: [5, false],
                        },
                    ],
                },
            },
            inputs: ['Wireless', 'Laptop', 'Web Conference', 'Camera'],
            Laptop: ['laptop_hdmi', 'laptop_hdmi_rear'],
            Wireless: ['wepresent'],
            'Web Conference': ['webconf'],
            'Tele Conference': ['teleconference'],
            Camera: ['camera'],
            sources: {
                wepresent: {
                    title: 'Clickshare',
                    source: 'hdmi',
                    input: 5,
                    type: 'wireless',
                },
                laptop_hdmi: {
                    title: 'Laptop Front',
                    source: 'hdmi',
                    input: 3,
                    type: 'aux_hdmi',
                },
                laptop_hdmi_rear: {
                    title: 'Laptop Rear',
                    source: 'hdmi',
                    input: 4,
                    type: 'aux_hdmi',
                },
                webconf: {
                    title: 'Web Conference',
                    source: 'hdmi',
                    input: 3,
                    type: 'aux_hdmi',
                    custom_tasks: [
                        { module: 'Mixer_1', method: 'source', args: ['usb'] },
                    ],
                },
                camera: {
                    title: 'Camera front',
                    type: 'vc-camera',
                    mod: 'Camera',
                    index: 1,
                    ignore: true,
                },
            },
            outputs: {
                Display_1: {
                    title: 'Display',
                    type: 'lcd',
                    pri: 1,
                    basic_mixer: true,
                    mixer_id: '3025 Speakers:Gain',
                    mute_id: '3025 Speakers:Mute',
                    output: 1,
                    custom_tasks: [
                        { module: 'Display_1', method: 'power', args: [true] },
                    ],
                },
            },
            vol_min: -400,
            vol_max: 200,
            doors: [{ title: 'Door', module: 'Door_1', feedback: 'relay1' }],
        },
        support_url: 'https://control.place.tech/meeting/#/?ctrl=space-1',
        created_at: 1506944220,
    },
    'space-2': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: [
            'mod-h4hCj7uTt9',
            'mod-hzYH2sYSXw',
            'mod-hzZ2NXAo8h',
            'mod-hzeFJgODpo',
            'mod-hzv2sB0lry',
            'mod-iggnWpl~Br',
            'mod-kZ9zP4anK3',
            'mod-m2RJg7Z-YD',
        ],
        settings: {
            ignore_modes: true,
            defaults: {
                default_mode: 'powerup_mode',
                shutdown_mode: 'shutdown_mode',
            },
            touch_enabled: false,
            discovery_info: {},
            number: 31,
            map_id: '2.30.09',
            extra_features: '',
            cost_hour: 17000,
            ideal_for: 'Havin a swell time',
            contains: 'Cheese',
            lights: {
                levels: [
                    { name: 'High', trigger: 9 },
                    { name: 'Meeting', trigger: 10 },
                    { name: 'Presentation', trigger: 11 },
                ],
                present: 11,
                shutdown: 10,
            },
            modes: {
                powerup_mode: {},
                shutdown_mode: {
                    execute: [
                        {
                            module: 'Lighting_1',
                            func: 'lighting',
                            args: [5, false],
                        },
                    ],
                },
            },
        },
        support_url: 'https://control.place.tech/meeting/#/?ctrl=space-2',
        created_at: 1506944410,
    },
    'space-3': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: [
            'mod-h4hIdyCaGK',
            'mod-hzpSvfLsFV',
            'mod-hzpV5CUmsG',
            'mod-hzpWakxU-h',
            'mod-hzpYU_Xbhg',
            'mod-hzt25TR267',
            'mod-kZ9_The7vG',
            'mod-m2RT_5-NeO',
        ],
        settings: {
            ignore_modes: true,
            defaults: {
                default_mode: 'powerup_mode',
                shutdown_mode: 'shutdown_mode',
            },
            map_id: '2.30.10',
            extra_features: '',
            cost_hour: 11000,
            ideal_for: 'Havin a swell time',
            contains: 'Cheese',
            lights: {
                levels: [
                    { name: 'High', trigger: 6 },
                    { name: 'Meeting', trigger: 7 },
                    { name: 'Presentation', trigger: 8 },
                ],
                present: 8,
                shutdown: 7,
            },
            modes: {
                powerup_mode: {},
                shutdown_mode: {
                    execute: [
                        {
                            module: 'Lighting_1',
                            func: 'lighting',
                            args: [4, false],
                        },
                    ],
                },
            },
        },
        support_url: 'https://control.place.tech/meeting/#/?ctrl=space-3',
        created_at: 1506944465,
    },
    'space-4': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: [
            'mod-h4hOgsNLpF',
            'mod-hztigUu7_J',
            'mod-hztjoDmZSR',
            'mod-hztlL_5GwR',
            'mod-hztmY0y-eO',
            'mod-hztnXihHQa',
            'mod-kZA064UhEG',
            'mod-m2RhX0-JNm',
        ],
        settings: {
            ignore_modes: true,
            defaults: {
                default_mode: 'powerup_mode',
                shutdown_mode: 'shutdown_mode',
            },
            map_id: '2.30.11',
            extra_features: '',
            cost_hour: 11000,
            ideal_for: 'Havin a swell time',
            contains: 'Cheese',
            lights: {
                levels: [
                    { name: 'High', trigger: 3 },
                    { name: 'Meeting', trigger: 4 },
                    { name: 'Presentation', trigger: 5 },
                ],
                present: 5,
                shutdown: 4,
            },
            modes: {
                powerup_mode: {},
                shutdown_mode: {
                    execute: [
                        {
                            module: 'Lighting_1',
                            func: 'lighting',
                            args: [3, false],
                        },
                    ],
                },
            },
        },
        support_url: 'https://control.place.tech/meeting/#/?ctrl=space-4',
        created_at: 1506944529,
    },
    'space-5': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: ['mod-R8pIEBAOS0', 'mod-SXos0Y6_16'],
        settings: {
            map_id: '2.30.12',
            extra_features: '',
            cost_hour: 17000,
            ideal_for: 'Havin a swell time',
            contains: 'Cheese',
        },
        support_url: null,
        created_at: 1506944616,
    },
    'space-6': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: ['mod-kZFFJhqTZc'],
        settings: {
            map_id: '2.30.13',
            extra_features: '',
            cost_hour: 11000,
            ideal_for: 'Havin a swell time',
            contains: 'Cheese',
        },
        support_url: null,
        created_at: 1506944690,
    },
    'space-7': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: [
            'mod-hTbiw7m1x~',
            'mod-hTbkuuyqt-',
            'mod-hTbmXj5nRu',
            'mod-kZFHNHYXRJ',
        ],
        settings: {
            map_id: '2.30.14',
            extra_features: '',
            cost_hour: 17000,
            ideal_for: 'Havin a swell time',
            contains: 'Cheese',
        },
        support_url: null,
        created_at: 1506944778,
    },
    'space-8': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: ['mod-l7l-m0gK7G', 'mod-lAHXR38sRX'],
        settings: {
            inputs: ['Laptop'],
            Laptop: ['laptop_hdmi'],
            sources: {
                laptop_hdmi: {
                    title: 'Laptop',
                    source: 'hdmi',
                    type: 'aux_hdmi',
                },
            },
            outputs: {
                Display_1: {
                    title: 'Display',
                    type: 'lcd',
                    pri: 1,
                    basic_mixer: true,
                    mixer_id: 'output',
                    custom_tasks: [
                        {
                            module: 'Display_1',
                            method: 'volume',
                            args: ['100'],
                        },
                    ],
                },
            },
            vol_min: 0,
            vol_max: 100,
            defaults: { output_level: 80 },
            lighting_group: 1,
            touch_enabled: false,
        },
        support_url: 'https://control.place.tech/meeting/#/?ctrl=space-8',
        created_at: 1549242116,
    },
    'space-9': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: ['mod-SHo_IR~Dhf', 'mod-SHp8z9U30R'],
        settings: { ideal_for: 'Havin a swell time', contains: 'Cheese' },
        support_url: null,
        created_at: 1510209559,
    },
    'space-10': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: [],
        settings: {
            access_group: 'BB T1 CARPE DIEM Meeting Room 01 Level 31',
            linked_rooms: ['space-11', 'space-12'],
            ignore_modes: true,
            map_id: '2.31.01A',
            extra_features: 'presentation_screen video_conference',
            cost_hour: 21000,
            ideal_for:
                'Workshopping, ideation, collaboration and formal meetings for 10 to 20 people.',
            contains:
                'Working Kit (markers, butcher’s paper, etc)<br>Reconfigurable furniture<br>AV Screen with Plug n Play<br>Operable wall<br>Writable walls',
            defaults: { default_mode: 'standalone' },
            join_modes: {
                joined: { rooms: ['space-11', 'space-12'], mode: 'joined' },
            },
            modes: {
                standalone: {
                    audio_preset: '3122RoomCombiningDivided',
                    outputs: {
                        Display_1: {
                            title: '31.22 Display',
                            type: 'lcd',
                            pri: 1,
                            output: 3,
                            basic_mixer: true,
                            mixer_id: '3122 SpeakersL:Gain',
                            mute_id: '3122 SpeakersL:Mute',
                        },
                    },
                },
                joined: {
                    Laptop: ['floorbox_left', 'floorbox_right'],
                    audio_preset: '3122RoomCombiningDivided',
                    outputs_clobber: true,
                    outputs: {
                        Display_1: {
                            title: 'Left Display',
                            type: 'lcd',
                            pri: 1,
                            output: 3,
                            basic_mixer: true,
                            mixer_id: [
                                '3122 SpeakersL:Gain',
                                '3122 SpeakersR:Gain',
                                '3122 SpeakerC:Gain',
                            ],
                            mute_id: [
                                '3122 SpeakersL:Mute',
                                '3122 SpeakersL:Mute',
                                '3122 SpeakerC:Mute',
                            ],
                        },
                        Display_2: {
                            title: 'Right Display',
                            type: 'lcd',
                            pri: 2,
                            output: 4,
                            no_audio: true,
                        },
                    },
                },
            },
        },
        support_url: 'https://control.place.tech/meeting/#/?ctrl=space-10',
        created_at: 1532266169,
    },
    'space-11': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: [
            'mod-beGTIJ6WjN',
            'mod-beHKasXG~1',
            'mod-beHQAZgqOj',
            'mod-beJ7fPdhcy',
            'mod-beHxMFgTG1',
            'mod-botygMcvnC',
            'mod-ke82maU_gO',
            'mod-kh5Ym9MnQB',
            'mod-m2dikgBoVz',
            'mod-ke85vi5csE',
        ],
        settings: {
            access_group: 'BB T1 CARPE DIEM Meeting Room 01A Level 31',
            lighting_group: 6,
            lights: {
                levels: [
                    { name: 'High', trigger: 4 },
                    { name: 'Meeting', trigger: 5 },
                    { name: 'Presentation', trigger: 6 },
                ],
                present: 6,
                shutdown: 7,
            },
            linked_rooms: ['space-10'],
            ignore_modes: true,
            map_id: '2.31.01A',
            extra_features: 'presentation_screen video_conference',
            cost_hour: 21000,
            ideal_for:
                'Workshopping, ideation, collaboration and formal meetings for 10 to 20 people.',
            contains:
                'Working Kit (markers, butcher’s paper, etc)<br>Reconfigurable furniture<br>AV Screen with Plug n Play<br>Operable wall<br>Writable walls',
            blinds: [
                {
                    title: 'Door',
                    module: 'Door_1',
                    feedback: 'connected',
                    manual: true,
                    up: { func: 'relay', args: [1, true] },
                    down: { func: 'relay', args: [1, false] },
                },
            ],
            defaults: { default_mode: 'standalone' },
            join_modes: {
                joined: { rooms: ['space-11', 'space-12'], mode: 'joined' },
            },
            modes: {
                standalone: {
                    audio_preset: '3122RoomCombiningDivided',
                    outputs: {
                        Display_1: {
                            title: '31.22 Display',
                            type: 'lcd',
                            pri: 1,
                            output: 3,
                            basic_mixer: true,
                            mixer_id: '3122 SpeakersL:Gain',
                            mute_id: '3122 SpeakersL:Mute',
                        },
                    },
                },
                joined: {
                    Laptop: ['floorbox_left', 'floorbox_right'],
                    audio_preset: '3122RoomCombiningDivided',
                    outputs_clobber: true,
                    outputs: {
                        Display_1: {
                            title: 'Left Display',
                            type: 'lcd',
                            pri: 1,
                            output: 3,
                            basic_mixer: true,
                            mixer_id: [
                                '3122 SpeakersL:Gain',
                                '3122 SpeakersR:Gain',
                                '3122 SpeakerC:Gain',
                            ],
                            mute_id: [
                                '3122 SpeakersL:Mute',
                                '3122 SpeakersR:Mute',
                                '3122 SpeakerC:Mute',
                            ],
                        },
                        Display_2: {
                            title: 'Right Display',
                            type: 'lcd',
                            pri: 2,
                            output: 4,
                            no_audio: true,
                        },
                    },
                    doors: [
                        {
                            title: 'Right Doors',
                            module: 'Door_1',
                            feedback: 'relay1',
                        },
                        {
                            title: 'Left Doors',
                            module: 'Door_2',
                            feedback: 'relay1',
                        },
                    ],
                    blinds: [
                        {
                            title: 'Door',
                            module: 'Door_1',
                            feedback: 'connected',
                            manual: true,
                            up: { func: 'relay', args: [1, true] },
                            down: { func: 'relay', args: [1, false] },
                        },
                        {
                            title: 'Door2',
                            module: 'Door_2',
                            feedback: 'connected',
                            manual: true,
                            up: { func: 'relay', args: [1, true] },
                            down: { func: 'relay', args: [1, false] },
                        },
                    ],
                },
            },
        },
        support_url: 'https://control.place.tech/meeting/#/?ctrl=space-11',
        created_at: 1529566281,
    },
    'space-12': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: [
            'mod-beJ5HHkTd5',
            'mod-beHxMFgTG1',
            'mod-beHKasXG~1',
            'mod-beHQAZgqOj',
            'mod-beJ7fPdhcy',
            'mod-bovQLgPM-I',
            'mod-ke85vi5csE',
            'mod-kh5_cqZdkx',
            'mod-m2dku__78J',
            'mod-ke82maU_gO',
        ],
        settings: {
            access_group: 'BB T1 CARPE DIEM Meeting Room 01B Level 31',
            lighting_group: 6,
            lights: {
                levels: [
                    { name: 'High', trigger: 0 },
                    { name: 'Meeting', trigger: 1 },
                    { name: 'Presentation', trigger: 2 },
                ],
                present: 2,
                shutdown: 3,
            },
            linked_rooms: ['space-10'],
            is_slave_system: true,
            Laptop: ['floorbox_right'],
            Wireless: ['wepresent_right'],
            touch_enabled: false,
            outputs: {
                Display_2: {
                    title: '31.22 Display',
                    type: 'lcd',
                    pri: 1,
                    output: 4,
                    basic_mixer: true,
                    mixer_id: '3122 SpeakersR:Gain',
                    mute_id: '3122 SpeakersR:Mute',
                },
            },
            blinds: [
                {
                    title: 'Door',
                    module: 'Door_1',
                    feedback: 'connected',
                    manual: true,
                    up: { func: 'relay', args: [1, true] },
                    down: { func: 'relay', args: [1, false] },
                },
            ],
            map_id: '2.31.01B',
            extra_features: 'presentation_screen video_conference',
            cost_hour: 21000,
            ideal_for:
                'Workshopping, ideation, collaboration and formal meetings for 10 to 20 people.',
            contains:
                'Working Kit (markers, butcher’s paper, etc)<br>Reconfigurable furniture<br>AV Screen with Plug n Play<br>Operable wall<br>Writable walls',
        },
        support_url: 'https://control.place.tech/meeting/#/?ctrl=space-12',
        created_at: 1529567580,
    },
    'space-13': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 2,
        modules: [
            'mod-R8yjCCzYu~',
            'mod-RyikzoKtfs',
            'mod-S9OFPs3raQ',
            'mod-S9OhlIfmWC',
            'mod-SHoOJ~REWd',
            'mod-WaXIoc15U4',
            'mod-WjC~IvI_wy',
            'mod-WwdnPc4s7F',
        ],
        settings: {
            access_group: 'BB T1 CARPE DIEM Meeting Room 02 Level 31',
            ignore_modes: true,
            defaults: {
                default_mode: 'powerup_mode',
                shutdown_mode: 'shutdown_mode',
            },
            modes: {
                powerup_mode: {},
                shutdown_mode: {
                    execute: [
                        {
                            module: 'Lighting_1',
                            func: 'lighting',
                            args: [5, false],
                        },
                    ],
                },
            },
            inputs: [
                'Wireless',
                'Laptop',
                'Laptop',
                'Web Conference',
                'Tele Conference',
            ],
            Laptop: ['laptop_1_hdmi'],
            Wireless: ['wepresent'],
            'Web Conference': ['webconf'],
            'Tele Conference': ['teleconference'],
            sources: {
                wepresent: {
                    title: 'Clickshare',
                    source: 'hdmi2',
                    type: 'wireless',
                    custom_tasks: [
                        { module: 'Mixer_1', method: 'source', args: ['aux'] },
                    ],
                },
                laptop_1_hdmi: {
                    title: 'Laptop',
                    source: 'hdmi',
                    type: 'aux_hdmi',
                    custom_tasks: [
                        { module: 'Mixer_1', method: 'source', args: ['aux'] },
                    ],
                },
                webconf: {
                    title: 'Web Conference',
                    source: 'hdmi',
                    type: 'aux_hdmi',
                    custom_tasks: [
                        { module: 'Mixer_1', method: 'source', args: ['aux'] },
                    ],
                },
                teleconference: {
                    title: 'Tele Conference',
                    source: 'hdmi',
                    type: 'aux_hdmi',
                    custom_tasks: [
                        {
                            module: 'Mixer_1',
                            method: 'source',
                            args: ['bluetooth'],
                        },
                    ],
                },
            },
            touch_enabled: false,
            outputs: {
                Display_1: {
                    title: 'Display',
                    type: 'lcd',
                    pri: 1,
                    basic_mixer: true,
                    mixer_id: 'output',
                },
            },
            vol_min: 0,
            vol_max: 100,
            lighting_group: 1,
            lights: {
                levels: [
                    { name: 'High', trigger: 9 },
                    { name: 'Meeting', trigger: 10 },
                    { name: 'Presentation', trigger: 11 },
                ],
                present: 11,
                shutdown: 9,
            },
            map_id: '2.31.02',
            extra_features: 'presentation_screen video_conference',
            cost_hour: 17000,
            ideal_for:
                'Workshopping, ideation and formal meetings for 6 to 8 people.',
            contains:
                'Working Kit (markers, butcher’s paper, etc)<br>Reconfigurable furniture (jellybean tables and stools)<br>AV Screen with Plug n Play',
        },
        support_url: 'https://control.place.tech/meeting/#/?ctrl=space-13',
        created_at: 1506945358,
    },
    'space-14': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 2,
        modules: [
            'mod-R8ykXZ6wm1',
            'mod-RyimFWj0FM',
            'mod-S9OucBcRve',
            'mod-SHoaNTRE_W',
            'mod-WaXDuTwzuY',
            'mod-WjC~IvI_wy',
            'mod-WwmSM~bA79',
        ],
        settings: {
            access_group: 'BB T1 CARPE DIEM Meeting Room 03 Level 31',
            ignore_modes: true,
            defaults: {
                default_mode: 'powerup_mode',
                shutdown_mode: 'shutdown_mode',
            },
            modes: {
                powerup_mode: {},
                shutdown_mode: {
                    execute: [
                        {
                            module: 'Lighting_1',
                            func: 'lighting',
                            args: [4, false],
                        },
                    ],
                },
            },
            lights: {
                levels: [
                    { name: 'High', trigger: 6 },
                    { name: 'Meeting', trigger: 7 },
                    { name: 'Presentation', trigger: 8 },
                ],
                present: 8,
                shutdown: 7,
            },
            map_id: '2.31.03',
            extra_features: 'presentation_screen video_conference',
            cost_hour: 17000,
            ideal_for:
                'Workshopping, ideation and formal meetings for 6 to 8 people.',
            contains:
                'Working Kit (markers, butcher’s paper, etc)<br>Reconfigurable furniture (jellybean tables and stools)<br>AV Screen with Plug n Play',
        },
        support_url: 'https://control.place.tech/meeting/#/?ctrl=space-14',
        created_at: 1506945430,
    },
    'space-15': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 2,
        modules: [
            'mod-R8ym4MgENL',
            'mod-Ryin8Cj0Mr',
            'mod-SH9JhlK-3O',
            'mod-WaXB678Ma-',
            'mod-WjC~IvI_wy',
            'mod-WwmVnLhBam',
        ],
        settings: {
            access_group: 'BB T1 CARPE DIEM Meeting Room 05 Level 31',
            ignore_modes: true,
            defaults: {
                default_mode: 'powerup_mode',
                shutdown_mode: 'shutdown_mode',
            },
            lights: {
                levels: [
                    { name: 'High', trigger: 3 },
                    { name: 'Meeting', trigger: 4 },
                    { name: 'Presentation', trigger: 5 },
                ],
                present: 5,
                shutdown: 4,
            },
            modes: {
                powerup_mode: {},
                shutdown_mode: {
                    execute: [
                        {
                            module: 'Lighting_1',
                            func: 'lighting',
                            args: [3, false],
                        },
                    ],
                },
            },
            map_id: '2.31.04',
            extra_features: 'presentation_screen video_conference',
            cost_hour: 17000,
            ideal_for:
                'Collaboration, formal meetings, and video conference for 6 people.',
            contains:
                'Working Kit (markers, butcher’s paper, etc)<br>Fixed furniture<br>AV Screen with Plug n Play',
        },
        support_url: 'https://control.place.tech/meeting/#/?ctrl=space-15',
        created_at: 1506945552,
    },
    'space-16': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 2,
        modules: [
            'mod-R8ynUyr4kp',
            'mod-Ryg~d3Ri1d',
            'mod-S9O-t~DRyo',
            'mod-WaX3EaJSaC',
            'mod-WjC~IvI_wy',
            'mod-WwmY1DsY08',
        ],
        settings: {
            access_group: 'BB T1 CARPE DIEM Meeting Room 04 Level 31',
            ignore_modes: true,
            defaults: {
                default_mode: 'powerup_mode',
                shutdown_mode: 'shutdown_mode',
            },
            lights: {
                levels: [
                    { name: 'High', trigger: 0 },
                    { name: 'Meeting', trigger: 1 },
                    { name: 'Presentation', trigger: 2 },
                ],
                present: 2,
                shutdown: 1,
            },
            modes: {
                powerup_mode: {},
                shutdown_mode: {
                    execute: [
                        {
                            module: 'Lighting_1',
                            func: 'lighting',
                            args: [2, false],
                        },
                    ],
                },
            },
            map_id: '2.31.05',
            extra_features: 'presentation_screen video_conference',
            cost_hour: 17000,
            ideal_for:
                'Collaboration, formal meetings, and video conference for 6 to 8 people.',
            contains:
                'Working Kit (markers, butcher’s paper, etc)<br>Fixed furniture<br>AV Screen with Plug n Play',
        },
        support_url: 'https://control.place.tech/meeting/#/?ctrl=space-16',
        created_at: 1506945648,
    },
    'space-17': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: [
            'mod-h4fNMjyy~D',
            'mod-hxA4MQLRfz',
            'mod-k2fS9GfBMe',
            'mod-ke7okyLnHV',
        ],
        settings: {
            map_id: '2.31.06',
            extra_features: '',
            access_group: 'BB T1 CARPE DIEM Meeting Room 06 Level 31',
            cost_hour: 17000,
            ideal_for:
                'Collaboration, formal meetings, and workshopping for 4 to 6 people.',
            contains:
                'Working Kit (markers, butcher’s paper, etc)<br>Analog Room (No AV)',
        },
        support_url: null,
        created_at: 1506945741,
    },
    'space-18': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: [
            'mod-h4fQniTgxj',
            'mod-hTMwXPSGXn',
            'mod-hTMzHruYBy',
            'mod-hxA1_nFNIq',
            'mod-k2bpR-UrG2',
            'mod-k2bso1IHjl',
            'mod-k2fU4IGidt',
            'mod-ke7sqoaUYx',
        ],
        settings: {
            map_id: '2.31.07',
            extra_features: '',
            access_group: 'BB T1 CARPE DIEM Meeting Room 07 Level 31',
            cost_hour: 17000,
            ideal_for:
                'Collaboration, formal meetings, and video conferencing for 4 to 6 people.',
            contains:
                'Working Kit (markers, butcher’s paper, etc)<br>Fixed Furniture<br>AV Screen with Plug n Play',
            doors: [{ title: 'Door', module: 'Door_1', feedback: 'relay1' }],
        },
        support_url: 'https://control.place.tech/meeting/#/?ctrl=space-18',
        created_at: 1506945810,
    },
    'space-19': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: ['mod-OMdzmCZQHy', 'mod-Oy7lt3wbhB'],
        settings: {
            terms: 'assets/terms.html',
            extra_features: '',
            ideal_for: 'Havin a swell time',
            contains: 'Cheese',
        },
        support_url: null,
        created_at: 1501635849,
    },
    'space-20': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: ['mod-c9he5pLs8H'],
        settings: { ideal_for: 'Havin a swell time', contains: 'Cheese' },
        support_url: null,
        created_at: 1510790671,
    },
    'space-21': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: ['mod-MOom7Q4xeI'],
        settings: {
            extra_features: 'presentation_screen',
            map_id: '41.SRBR',
            cost_hour: 21000,
            ideal_for: 'Havin a swell time',
            contains: 'Cheese',
        },
        support_url: null,
        created_at: 1494911022,
    },
    'space-33': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: [],
        settings: {
            map_id: '38.SWMT',
            extra_features: 'presentation_screen',
            cost_hour: 27000,
            ideal_for: 'Havin a swell time',
            contains: 'Cheese',
        },
        support_url: null,
        created_at: 1498199348,
    },
    'space-34': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: [],
        settings: { cost_hour: 0 },
        support_url: null,
        created_at: 1545104999,
    },
    'space-35': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: ['mod-R8p-DweT5-'],
        settings: {
            extra_features: 'presentation_screen cisco_video_conference',
            map_id: '30.VCMR',
            ideal_for: 'Havin a swell time',
            contains: 'Cheese',
        },
        support_url: null,
        created_at: 1494911090,
    },
    'space-36': {
        edge_id: 'edge-KiBexw2DWK',
        installed_ui_devices: 0,
        modules: [],
        settings: {
            extra_features: 'presentation_screen',
            map_id: '38.WLMT',
            cost_hour: 0,
            ideal_for: 'Havin a swell time',
            contains: 'Cheese',
        },
        support_url: null,
        created_at: 1494911112,
    },
};

/** Fields of a system that the UI rooms do not have */
export interface AvSetup {
    edge_id: string;
    installed_ui_devices: number;
    modules: string[];
    settings: Record<string, unknown>;
    support_url: string;
    created_at: number;
}
