import { PlaceDriverRole } from '@placeos/ts-client';

export const SYSTEM_TEMPLATE: any = {
    name: 'A System',
    display_name: 'Your System',
    description: 'A description',
    email: 'system@place.tech',
    capacity: 10,
    features: ['vidConf'],
    bookable: true,
    installed_ui_devices: 4,
    support_url: 'https://place.tech/support/test',
    modules: ['mod-123'],
    zones: ['zone-123'],
    map_id: 'area-123',
    module_data: [{ id: 'mod-001', name: 'A Module' }],
};

export const MODULE_TEMPLATE: any = {
    name: 'A Module',
    driver_id: 'dep-001',
    control_system_id: 'sys-001',
    ip: '1.1.1.1',
    tls: false,
    udp: false,
    port: 32000,
    makebreak: false,
    uri: 'test.com',
    custom_name: 'mi-name',
    role: PlaceDriverRole.Device,
    notes: 'Clone wars',
    ignore_connected: false,
};

export const DRIVER_TEMPLATE: any = {
    name: 'A Driver',
    description: 'In a galaxy far far away...',
    module_name: 'SteamShip',
    role: PlaceDriverRole.Logic,
    default_uri: 'Sometimes we default',
    default_port: 1234,
    ignore_connected: false,
    settings: { settings_string: "{ today: false, future: 'Yeah!' }" },
    class_name: '::ACA::SolveProblem',
    repository_id: 'my-repo',
    file_name: 'fancy-driver.cr',
    commit: 'some-hash',
};

export const USER_TEMPLATE: any = {
    name: 'A User',
    authority_id: "On who's authority",
    email: 'jon@place.tech',
    phone: '+612000000000',
    country: 'Australia',
    image: '',
    metadata: 'there be none',
    login_name: 'elitedarklord',
    staff_id: 'PERSON_12345',
    first_name: 'Bob',
    last_name: 'Marley',
    card_number: '1234567890',
};

export const ZONE_TEMPLATE: any = {
    name: 'A Zone',
    description: 'In a galaxy far far away...',
    triggers: ['trig-001'],
    parent_id: 'zone-123',
    display_name: 'The Zone',
    tags: 'building,level,org',
    code: 'BLD-123',
    type: 'Client',
    count: 32,
    capacity: 2345,
    location: 'Somewhere close',
    map_id: 'a/url/to/my/map.svg',
};
