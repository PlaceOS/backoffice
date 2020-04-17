var SETTINGS = {
    env: 'dev',
    debug: true,
    mock: false,
    composer: {},
    app: {},
};

/*=======================*\
||   COMPOSER SETTINGS   ||
\*=======================*/

SETTINGS.composer = {
    domain: '',
    route: '',
    protocol: '',
    use_domain: false,
    local_login: false,
};

/*==========================*\
||   APPLICATION SETTINGS   ||
\*==========================*/

SETTINGS.app = {
    title: 'PlaceOS',
    name: 'PlaceOS',
    description: 'PlaceOS Frontend made in Angular 9.1+',
    short_name: 'Engine',
    code: 'ENGINE',
    copyright: 'Copyright 2018 ACA Projects',
    login: {
        forgot: false,
    },
    analytics: {
        enabled: false,
        tracking_id: '',
    },
    logo_light: {
        type: 'img',
        src: 'assets/img/logo.svg',
        background: '',
    },
};

/*==========================*\
||   GENERAL SETTINGS   ||
\*==========================*/

SETTINGS.app.general = {
    menu: [
        {
            name: 'Systems',
            route: '/systems',
            icon: {
                type: 'icon',
                class: 'backoffice-documents',
                content: '',
            },
        },
        {
            name: 'Modules',
            route: '/modules',
            icon: {
                type: 'icon',
                class: 'backoffice-tablet',
                content: '',
            },
        },
        {
            name: 'Zones',
            route: '/zones',
            icon: {
                type: 'icon',
                class: 'backoffice-layers',
                content: '',
            },
        },
        {
            name: 'Drivers',
            route: '/drivers',
            icon: {
                type: 'icon',
                class: 'backoffice-tools',
                content: '',
            },
        },
        {
            name: 'Repos',
            route: '/repositories',
            icon: {
                type: 'icon',
                class: 'backoffice-package',
                content: '',
            },
        },
        {
            name: 'Triggers',
            route: '/triggers',
            icon: {
                type: 'icon',
                class: 'backoffice-stopwatch',
                content: '',
            },
        },
        {
            name: 'Metrics',
            route: '/metrics',
            icon: {
                type: 'icon',
                class: 'backoffice-line-graph',
                content: '',
            },
        },
        {
            name: 'Users',
            route: '/users',
            icon: {
                type: 'icon',
                class: 'backoffice-users',
                content: '',
            },
        },
        {
            name: 'Domains',
            route: '/domains',
            icon: {
                type: 'icon',
                class: 'backoffice-browser',
                content: '',
            },
        },
        {
            name: 'Admin',
            route: '/admin',
            needs_role: 'sys_admin',
            icon: {
                type: 'icon',
                class: 'backoffice-classic-computer',
                content: '',
            },
        },
    ],
    global_search: true,
};

/*==========================*\
||      SYSTEM SETTINGS     ||
\*==========================*/

SETTINGS.app.systems = {
    can_create: true,
};

/*==========================*\
||      MODULE SETTINGS     ||
\*==========================*/

SETTINGS.app.modules = {
    can_create: true,
};

/*==========================*\
||       ZONE SETTINGS      ||
\*==========================*/

SETTINGS.app.zones = {
    can_create: true,
};

/*==========================*\
||      DRIVER SETTINGS     ||
\*==========================*/

SETTINGS.app.drivers = {
    can_create: true,
};

/*==========================*\
||       USER SETTINGS      ||
\*==========================*/

SETTINGS.app.users = {
    can_create: true,
};

/*==========================*\
||      DOMAIN SETTINGS     ||
\*==========================*/

SETTINGS.app.domains = {
    can_create: true,
};

/*==========================*\
||     TRIGGER SETTINGS     ||
\*==========================*/

SETTINGS.app.triggers = {
    can_create: true,
};

/*==========================*\
||       REPO SETTINGS      ||
\*==========================*/

SETTINGS.app.repositories = {
    can_create: true,
};

/** Add settings to the global space */
window['settings.json'] = SETTINGS;

console.log('Embbeded settings.json');
