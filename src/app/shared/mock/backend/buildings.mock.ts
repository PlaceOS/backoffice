/*
 * @Author: alex.sorafumo
 * @Date:   2017-04-03 15:50:46
 * @Last Modified by: Alex Sorafumo
 * @Last Modified time: 2018-06-19 13:27:00
 */

import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';

import { BaseMockBackend } from './base.mock';
import { Utils } from '../../utility.class';

export class MockBuildingsBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
    }

    protected load() {
        MOCK_REQ_HANDLER.unregister(`/control/api/zones`);
        this.loadBuildings();
    }

    private loadBuildings() {
        if (this.model.log) { this.model.log('MOCK', 'Loading request for building list'); }
        // Add response for building zones
        this.model.bld_data = {
            'zone_bld-01': {
                id: 'zone_bld-01',
                name: 'Sydney',
                settings: {
                    discovery_info: {
                        timezone: 'Australia/Sydney',
                        phone: {
                            emergency: '0412345678',
                            av_help: '0412345678',
                            concierge: '0412345678'
                        },
                        locations: { },
                        desk_tracking: 'sys-B0',
                        messaging: 'sys-B0',
                        features: [],
                        catering: {},
                        levels: [
                            {
                                level_id: 'zone_lvl-01',
                                level_name: 'Level 1',
                                number: 1,
                                map_url: 'assets/maps/level_01.svg',
                                floor_type: 'staff',
                                desks: 6,
                            },
                            {
                                level_id: 'zone_lvl-02',
                                level_name: 'Level 2',
                                number: 2,
                                map_url: 'assets/maps/level_02.svg',
                                floor_type: 'client',
                                desks: 6,
                            },
                            {
                                level_id: 'zone_lvl-03',
                                level_name: 'Level 3',
                                number: 3,
                                map_url: 'assets/maps/level_03.svg',
                                floor_type: 'staff',
                                desks: 6,
                            },
                            {
                                level_id: 'zone_lvl-10',
                                level_name: 'Level 10',
                                number: 10,
                                map_url: 'assets/maps/level_10.svg',
                                floor_type: 'staff',
                                desks: 186,
                            }
                        ],
                        roles: {
                            'fire-warden': [
                                { name: 'Alex Sorafumo', email: `alex.sorafumo@${this.model.domain}`, phone: '0412345678' },
                                { name: 'Bob Jane', email: `bob.jane@${this.model.domain}`, phone: '0423456789' },
                                { name: 'Rupert', email: `rupert@${this.model.domain}`, phone: '0434567890' }
                            ],
                            'first-aider': [
                                { name: 'Ben Hoad', email: `ben.hoad@${this.model.domain}`, phone: '0412345678' },
                                { name: 'Kim Burgess', email: `kim.burgess@${this.model.domain}`, phone: '0423456789' },
                                { name: 'Mr Pop', email: `mr.pop@${this.model.domain}`, phone: '0434567890' }
                            ]
                        },
                        extras: [
                            { extra_id: 'VidConf', extra_name: 'Video Conference' },
                            { extra_id: 'AV', extra_name: 'AV' },
                            { extra_id: 'presentation', extra_name: 'Wireless Presentation' },
                            { extra_id: 'phone', extra_name: 'Conference Phone' },
                        ],
                        loan_items: [
                            { extra_id: 'ConfKit', extra_name: 'Conference Kit' },
                            { extra_id: 'Chairs', extra_name: 'Chairs' },
                        ],
                        terms: [
                            {
                                title: 'Room bookings',
                                details: 'Please release booked meeting rooms or spaces when you don\'t need them anymore, so everyone else knows they\'re free.'
                            },
                            {
                                title: 'Noise levels',
                                details: 'Please be considerate of others and keep the volume down when having conversations or conference calls.'
                            },
                            {
                                title: 'Be considerate',
                                details: 'When you\'ve finished using a space, please ensure it is left clean and tidy for the next person.'
                            },
                            {
                                title: 'Centralised waste management',
                                details: 'We\'re part of one of the most sustainable commercial precincts in the world. Please make an effort to place the right waste into the right bins, located in the Pantries.'
                            },
                            {
                                title: 'Lost and found',
                                details: 'Any personal or team items left behind in activity rooms or communal spaces will be taken to \'Lost and found\' at the concierge points.'
                            },
                            {
                                title: 'Invoice Statement',
                                details: 'For every confirmed booking, you will receive invoice statement via email for your record.'
                            },
                            {
                                title: 'Billing',
                                details: 'Monthly invoice will be issued by 20th of every month for previous month. Invoice is due by end of the month it is issued.'
                            }
                        ],
                        layouts: { },
                    },
                },
                levels: [],
            },
            'zone_bld-02': {
                id: 'zone_bld-02',
                name: 'Melbourne',
                settings: {
                    discovery_info: {
                        levels: [
                            {
                                level_id: 'zone_lvl-04',
                                level_name: 'Level 13',
                                number: 1,
                                map_url: 'assets/maps/level_01.svg',
                                floor_type: 'staff',
                                desks: 6,
                            },
                            {
                                level_id: 'zone_lvl-05',
                                level_name: 'Level 14',
                                number: 2,
                                map_url: 'assets/maps/level_02.svg',
                                floor_type: 'visitor',
                                desks: 6,
                            },
                            {
                                level_id: 'zone_lvl-06',
                                level_name: 'Level 15',
                                number: 3,
                                map_url: 'assets/maps/level_03.svg',
                                floor_type: 'staff',
                                desks: 6,
                            }
                        ],
                    }
                },
                levels: [],
            }
        };
        for (const bld in this.model.bld_data) {
            if (this.model.bld_data.hasOwnProperty(bld)) {
                this.model.bld_data[bld].levels = this.model.bld_data[bld].settings.discovery_info.levels;
                this.generateDesksForBuilding(this.model.bld_data[bld]);
            }
        }
        // Add response for Global zone
        MOCK_REQ_HANDLER.register(`/${this.model.api_route}/zones`, this.model.bld_data, (e) => this.handleZone(e));
        MOCK_REQ_HANDLER.register(`/control/api/zones`, this.model.bld_data, (e) => this.handleZone(e));
        this.state.next(true);
    }

    private handleZone(event) {
        if (event.fragment.type === 'org' || event.fragment.tags === 'org') {
            return [{
                settings: {
                    discovery_info: {
                        buildings: [{
                            name: this.model.city,
                            findme_id: this.model.city,
                            zone_id: 'zone_bld-01',
                            office_id: this.model.city,
                            location_code: 'bne',
                            orientations: { landscape: 0 },
                        }],
                        organisations: [
                            { name: 'ACA', id: '12' }
                        ],
                        attribute_orders: ['Sit-to-Stand Desk', 'Seated Desk', 'Dual Monitor', 'Single Monitor', 'No Monitor'],
                        layouts: {},
                    },
                },
            }];
        } else if (event.fragment.type === 'building' || event.fragment.tags === 'building') {
            const blds: any[] = [];
            for (const k in this.model.bld_data) {
                if (event.data.hasOwnProperty(k)) {
                    blds.push(this.model.bld_data[k]);
                }
            }
            return blds;
        } else if (event.fragment.type === 'level' || event.fragment.tags === 'level') {
            return {};
        }
        return null;
    }

    private generateDesksForBuilding(bld: any) {
        const system = (window as any).control.systems['sys-B0'];
        const dm = system.DeskManagement[0];
        for (const lvl of bld.levels) {
            if (lvl.level_id) {
                if (dm && !dm[`${lvl.level_id}`]) {
                    dm[`${lvl.level_id}`] = [];
                    dm[`${lvl.level_id}:desk_ids`] = [];
                    dm[`${lvl.level_id}:occupied_count`] = 0;
                    dm[`${lvl.level_id}:desk_count`] = lvl.desks;
                    dm[`${lvl.level_id}:free_count`] = lvl.desks;
                    dm[`${lvl.level_id}:manual_checkin`] = [];
                }
                for (let i = 1; i <= lvl.desks; i++) {
                    dm[`${lvl.level_id}:desk_ids`]
                        .push(`table-${Utils.padZero(lvl.number, 1)}.${Utils.padZero(i, 3)}`);
                }
                setInterval(() => {
                        // Update desk state every 10 seconds
                    const use = Math.floor(Math.random() * lvl.desks);
                    const desk_list: string[] = [];
                    dm[`${lvl.level_id}:occupied_count`] = use;
                    dm[`${lvl.level_id}:free_count`] = lvl.desks - use;
                    for (let d = 0; d < use; d++) {
                        const index = Math.floor(Math.random() * lvl.desks);
                        const id = dm[`${lvl.level_id}:desk_ids`][index];
                        desk_list.indexOf(id) < 0 ? desk_list.push(id) : d--;
                    }
                    desk_list.sort();
                    dm[`${lvl.level_id}`] = desk_list;
                }, 30 * 1000);
            }
        }
    }
}
