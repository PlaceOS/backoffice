import { ApplicationIcon } from './types';

/*=======================*\
||    GENERAL SETTINGS   ||
\*=======================*/

const general = {
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
    zones,
};

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
