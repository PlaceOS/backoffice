
import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';

import { BaseMockBackend } from './base.mock';
import { padZero } from '../../utilities/general.utilities';

import * as faker from 'faker';

export class MockTestsBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
    }

    protected load() {
        this.model.log('TESTS', 'Loading mock data for tests...');
        this.loadTests();
    }

    private loadTests() {
        const zone_list = [];
        const count = Math.ceil(Math.floor(Math.random() * 10 + 5) * this.model.scale);
        for (let i = 0; i < count; i++) {
            const company = faker.company.companyName().toLowerCase().split(' ').join('_');
            zone_list.push(`/home/aca-apps/aca-device-modules/modules/${company}/module_${i + 1}`);
        }
        this.model.tests = zone_list;
        MOCK_REQ_HANDLER.register('/control/api/tests', this.model.tests, (event) => {
            return this.search(event.data, event.fragment);
        });
        MOCK_REQ_HANDLER.register('/control/api/tests/:id', this.model.tests, (event) => {
            if (event && event.params && event.params.id) {
                const id = decodeURIComponent(event.params.id);
                if (this.model.tests.indexOf(id) >= 0) {
                    const company = faker.company.companyName().toLowerCase().split(' ').join('_');
                    const parts = id.split('/');
                    return {
                        details: {
                            module_name: ``,
                            name: `Test Module ${parts[parts.length - 1].split('_')[1]}`,
                            role: 'logic',
                            settings: this.generateSettings()
                        },
                        documentation: [
                            'https://acaprojects.com',
                            'https://developer.acaprojects.com',
                            'https://www.google.com'
                        ],
                        klass: `${company}::Module::Driver_${padZero(+parts[parts.length - 1].split('_')[1], 4)}`
                    };
                }
            }
            return null;
        });
        this.state.next(true);
    }

    public generateSettings(level: number = 1) {
        if (level > 4) { return null; }
        const data: any = {};
        const count = Math.floor(Math.random() * (10 - level) + (5 - level) * 2);
        const types = ['string', 'number', 'boolean', 'object'];
        for (let i = 0; i < count; i++) {
            const type = types[Math.floor(Math.random() * types.length)];
            switch(type) {
                case 'string':
                    data[`field_level_${level}_${i}`] = faker.lorem.sentence();
                    break;
                case 'number':
                    data[`field_level_${level}_${i}`] = Math.floor(Math.random() * 9999);
                    break;
                case 'boolean':
                    data[`field_level_${level}_${i}`] = Math.floor(Math.random() * 9999) % 2 === 0;
                    break;
                case 'object':
                    data[`field_level_${level}_${i}`] = this.generateSettings(level + 1);
                    break;
            }
        }
        return data;
    }
}
