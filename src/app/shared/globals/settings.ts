

/*=======================*\
||   COMPOSER SETTINGS   ||
\*=======================*/

const composer = {
    domain: '',
    route: '/backoffice',
    protocol: '',
    use_domain: false,
    local_login: false,
};


/*==========================*\
||     GENERAL SETTINGS     ||
\*==========================*/
const general = {
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
const systems = {
    can_create: true,
};

/*==========================*\
||      MODULE SETTINGS     ||
\*==========================*/
const modules = {
    can_create: true,
};

/*==========================*\
||       ZONE SETTINGS      ||
\*==========================*/
const zones = {
    can_create: true,
};

/*==========================*\
||      DRIVER SETTINGS     ||
\*==========================*/
const drivers = {
    can_create: true,
};

/*==========================*\
||       USER SETTINGS      ||
\*==========================*/
const users = {
    can_create: true,
};

/*==========================*\
||      DOMAIN SETTINGS     ||
\*==========================*/
const domains = {
    can_create: true,
};

/*==========================*\
||     TRIGGER SETTINGS     ||
\*==========================*/
const triggers = {
    can_create: true,
};

/*==========================*\
||       REPO SETTINGS      ||
\*==========================*/

const repositories = {
    can_create: true,
};

/*==========================*\
||   APPLICATION SETTINGS   ||
\*==========================*/

const app = {
    title: 'PlaceOS',
    name: 'PlaceOS',
    description: 'PlaceOS Frontend made in Angular 9.1+',
    short_name: 'Place',
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
    languages: [
        {
            name: 'English',
            locale: 'en-US',
            icon: { class: '', content: '🇬🇧' }
        }
    ],
    general,
    systems,
    modules,
    zones,
    drivers,
    repositories,
    users,
    domains,
    triggers
};

export const DEFAULT_SETTINGS = {
    env: 'staging',
    debug: true,
    mock: false,
    composer,
    app,
};
