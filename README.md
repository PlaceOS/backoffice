# ACA Angular Starter Kit

## Setup

1. Install [NodeJS](https://nodejs.org/en/download/current/)
1. Run `npm install` in the root folder
1. Run `npm install --global gulp-cli` to Install [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
1. Run `npm install --global @angular/cli` to Install [Angular CLI](https://github.com/angular/angular-cli)

## Development

To run the dev server use the command `gulp serve`
This will spin up a dev web server which will proxy all API requests to the live Engine domain configured in settings.json.

If you wish to use mock data (i.e. no backend integration yet) run `gulp serve --mock`

## Compilation

Compile the application into static files using `gulp build`

The command takes the arguments `--prod` to minify the resulting build and `--aot` to compile the angular code using the angular Ahead of Time compiler.

Application/Runtime settings can be found in `assets/settings.json`.

## Settings

Settings for colours and other style based settings are configured in the global SASS settings file located at `app/src/shared/shared.styles.scss`.

Most of the basic layout and image configuration is done through the global settings file located at `app/assets/settings.json`.
The structure for the file is as follows.

```Typescript
interface Settings {
    version: string; // Version number of the application
    build: number | string; // Build time of the application
    env: string; // Build environment prod/dev
    debug: boolean; // Enable debugging console logs
    composer: {
        domain: string; // API Domain
        route: string; // APP Route base
        protocol: string;
        use_domain: boolean;
        local_login: boolean; // Authentication login is handled by the application
    };
    app: {
        title: string; // Page title
        name: string; // Application name
        description: string; // Application Description
        short_name: string;
        code: string; // APP Debug code
        analytics: {
            enabled: boolean; // Enable Google analytics
            tracking_id: string; // Analytics tracking code
        },
        logo: {
            type: string; // Type of logo img or icon
            src: string; // URL of the logo image
            login: string; // Alternate logo resource for use with the login form
            background: string; //Background colour of the logo
            icon: {
                class: string; // Class to apply to the logo icon element
                value: string; // Value to set the contents of the logo icon element
            }
        },
        banner: {
            header: boolean; // Enable banner on all pages with titles
            home: string; // 
            type: string;
            background: string; // Banner background image
            color: string; // CSS colour for the background overlay
            links: { // Buttons to display in the banner
                id: string; // Route to link
                name: string; // Text content of banner link
            }[]
        },
        copyright: string; // Copyright to display on sidebar menu
        routing: string; // Show routing breadcrumbs
        style: {
            popout: boolean; // Enable popout style of several elements
        },
        users: {
            visitors: boolean; // Enable creation of visitors
            external: boolean; // Enable adding of external users
            can_add: true,
            custom_orgs: boolean; // Enable adding of custom organisations
        },
        schedule: {
            enabled: boolean; // Enable preloading of schedule data
        },
        menu: {
            type: b,
            footer: n,
            named: false,
            list: {
                id: string; // Route to link menu item
                name: string; // Display text for menu item
                link: string; // External URL to link menu item
                items: {
                    id: string; // Route to link menu item
                    name: string; // Display text for menu item
                    link: string; // External URL to link menu item
                }[]
            }[]
        },
        hide: {
            heading: boolean; // Hide headings from topbar
        },
        page_titles: {
            <route>:<route_title>
        }
        home: {
            background: string; // Background image to display behind home tiles
            disclaimer: string; // Text to display at the bottom of the home page
        },
        tiles: {
            id: string; // Route to link the tile
            name: string; // Text to display on tile
            color: string; // Background colour of the tile
            img: string; // Icon image to use on the tile
            icon: {
                class: string; // Class to apply to the tile icon element
                value: string; // Value to set the contents of the tile icon element
            },
            settings: string; // Name of the object on app key with the settings for this tile/route
        }[],
        zones: {
            enabled: boolean; // Enable desk zones
            toggle: string; // Name of key set to swap with
        },
        booking: {
            min_attendees: number; // Minimumn number of attendees in a booking
            recurrence: boolean; // Enable recurrence
            limit: number; // Max number of months ahead bookings can occur
            max_length: number; // Maximum length of a booking
            min_length: number; // Minimum length of a booking
            room_select: boolean;
            title_prefix: string; // String to append to the beginning of a booking name
            charge: boolean; // Charge user for bookings
            terms: boolean; // Enable T&C check before booking
            fields: {
                id: string; // Field ID, key passed to backend
                name: string; // Display name of field
                icon: {
                    class: string; // Class to apply to the tile icon element
                    value: string; // Value to set the contents of the tile icon element
                }
                description: string; // Description of the field
                type: string; // Type of field. text or select
                edit: boolean; // Enable editing of field when editing bookings
                required: boolean; // Is field required
            }[];
            banner: {
                enabled: boolean; // Enable localised page banner
                src: string; // Background image of banner
                color: string; // CSS colour for the background overlay
                links: { // Buttons to display in the banner
                    id: string; // Route to link
                    name: string; // Text content of banner link
                }[]
            }
        },
        explore: {
            old_overlay: boolean; // Enable old style overlays
            banner: {
                people: {
                    enabled: boolean; // Enable localised page banner
                    src: string; // Background image of banner
                    color: string; // CSS colour for the background overlay
                },
                enabled: boolean; // Enable localised page banner
                src: string; // Background image of banner
                links: { // Buttons to display in the banner
                    id: string; // Route to link
                    name: string; // Text content of banner link
                }[]
            }
        },
        control: {
            banner: {
                enabled: boolean; // Enable localised page banner
                src: string; // Background image of banner
                color: string; // CSS colour for the background overlay
            }
        },
        people_min_char: number; // Minimum number of characters needed to perform a people search
        catering: {
            enabled: boolean; // Enable loading of catering data
        },
        colors: {
            rooms: {
                available: string; // Colour of rooms when available
                unavailable: string; // Colour of rooms when unavailable
                not-bookable: string; // Colour of rooms when not bookable
                pin: string; // Colour of pin when marking a room
            },
            desks: {
                available-fill: string; // Colour of desks when available
                available-stroke: string; // Colour of desk outlines when available
                unavailable-fill: string; // Colour of desks when unavailable
                unavailable-stroke: string; // Colour of desk outlines when unavailable
                not-bookable-fill: string; // Colour of desks when not bookable
                not-bookable-stroke: string; // Colour of desk outlines when not bookable
            }
        },
        help: {
            type: string; // Display style for help tiles. btn or null
            disclaimer: string; // Text to display a top of help page
            tiles: {
                id: string; // Route to link
                name: string; // Tile heading
                description: string; // Tile description/button content
                src: string; // Background image of tile
                color: string; // Background colour of image
                link: string; // External link
                query: map; // Hash map of query to pass to linked route
            }[]
        },
        map: {
            simple: true,
            info: true,
            settings: true,
            bookings: boolean; // Enable booking from rendered maps
            keys: { // Map keys
                <name>: {
                    id: string; // Map key ID
                    name: string; // Display text
                    image: string; // URL of map key icon
                    icon: {
                        class: string; // Class to apply to the map key icon element
                        value: string; // Value to set the contents of the map key icon element
                    }
                }[]
            }
        }
    },
    mock: boolean; // Enable use of mock date
}
```

Configuration for buildings is done through backoffice zone settings.
The structure of the building data is as follows.

```Typescript
interface Building {
    levels: {
        level_id: string; // ID of the level
        level_name: string; // Display name of the level
        map_url: string; // URL to the level's SVG map
    }[];
    phone: {
        emergency: string; // Local emergency phone number
        av_help: string; // Phone number for AV Help
        concierge: string; // Concierge phone number
    },
    extras: {
        extra_id: string; // ID of extra
        extra_name: string; // Display name of extra
    }[];
    loan_items: {
        extra_id: string; // ID of loan item
        extra_name: string; // Display name of loan item
    }[];
    terms: {
        title: string; // Term heading
        details: string; // Term content
    }[];
}
```