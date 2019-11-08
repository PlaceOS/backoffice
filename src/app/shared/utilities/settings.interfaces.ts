import { HashMap } from './types.utilities';

export interface SettingsOptions {
    /** Whether to add debugging messages to the console */
    debug: boolean;
    /** Settings for initialising composer service */
    composer: ComposerOptions;
    /** Settings for the application */
    app: ApplicationSettings;
    /** Whether to use mock systems and services */
    mock?: boolean;
}

export interface ComposerOptions {
    /** Host name of the ACAEngine server */
    domain: string;
    /** Port number used on the ACAEngine server */
    port: string;
    /** Route that the root of the application lies */
    route: string;
    /** Protocol used by the ACAEngine server */
    protocol: 'http:' | 'https:';
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
    /** General settings for the application */
    general: GeneralApplicationSettings;
    /** Settings used for systems module of the application */
    systems: SystemsModuleSettings;
}

export interface GeneralApplicationSettings {
    /** List of available menu items for the application */
    menu_items: ApplicationLink[];
    /** Whether the application has global search in the header */
    global_search: boolean;
}

export interface SystemsModuleSettings {
    /** Maximum number of systems allowed to be created by the user. `0` for unlimited */
    licenses: number;
}

export interface ApplicationLink {
    /** Name of the tile */
    name: string;
    /** Application route the tile will navigate */
    route?: string;
    /** External link the tile will navigate */
    link?: string;
    /** Query parameters to add to the route being navigated to */
    query_params?: HashMap<string | number | boolean>;
    /** Icon associated with the tile */
    icon: ApplicationIcon;
    /** List of sub-links */
    children?: ApplicationLink[];
}

export interface ApplicationIcon {
    /** Type of icon */
    type: 'img' | 'icon';
    /** URL to the image used for the icon */
    src?: string;
    /** CSS class to add to icon element */
    class?: string;
    /** Contents to add to icon element */
    content?: string;
    /** Background color for icon */
    background?: string;
}
