
import { ApplicationIcon } from './types';

export interface SettingsOptions {
    /** Whether to add debugging messages to the console */
    debug: boolean;
    /** Settings for initialising composer service */
    composer: ComposerSettings;
    /** Settings for the application */
    app: ApplicationSettings;
    /** Whether to use mock systems and services */
    mock?: boolean;
}

export interface ComposerSettings {
    /** Host name of the ACAEngine server */
    domain: string;
    /** Port number used on the ACAEngine server */
    port: string;
    /** Route that the root of the application lies */
    route: string;
    /** Protocol used by the ACAEngine server */
    protocol: 'http:' | 'https:' | '';
    /** Whether login is handled locally inside the application */
    local_login?: boolean;
    /** Whether composer should use the settings domain instead of the origin */
    use_domain?: boolean;
}

export interface ApplicationSettings {
    /** Name of the application */
    title: string;
    /** Description of the application */
    description: string;
    /** Short name of the application */
    short_name: string;
    /** Logo to use on dark background */
    logo_dark: ApplicationIcon;
    /** Logo to use on light background */
    logo_light?: ApplicationIcon;
    /** Generalised settings for the application */
    general: GeneralAppSettings;
}

export interface GeneralAppSettings { }

/*=======================*\
||    GENERAL SETTINGS   ||
\*=======================*/

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

/*=======================*\
||  APPLICATION SETTINGS ||
\*=======================*/

const app = {
    title: 'Backoffice',
    name: 'Backoffice',
    description: 'PlaceOS Backoffice made in Angular 9.1+',
    short_name: 'Backoffice',
    code: 'BACKOFFICE',
    copyright: 'Copyright 2018 Place Technology',
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
    topbar: false,
    show_status_when_disconnected: false,
    general,
    domains,
    drivers,
    modules,
    repositories,
    systems,
    triggers,
    users,
    zones
}

/*=======================*\
||   COMPOSER SETTINGS   ||
\*=======================*/

const composer = {
    domain: '',
    route: '/backoffice',
    protocol: '',
    use_domain: false,
    local_login: false,
}


/**
 * ROOT SETTIGNS
 */
export const DEFAULT_SETTINGS = {
    env: 'prod',
    debug: true,
    mock: false,
    composer,
    app,
};

