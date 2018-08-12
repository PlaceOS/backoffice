/*
 * @Author: alex.sorafumo
 * @Date:   2017-04-03 15:50:46
 * @Last Modified by: Alex Sorafumo
 * @Last Modified time: 2018-01-24 09:02:01
 */

import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import * as faker from 'faker';
import * as moment from 'moment';

export class MockCateringBackend {
    private state: BehaviorSubject<boolean>;
    private state_obs: any;

    constructor(private model) {
        this.state = new BehaviorSubject(false);
        this.state_obs = this.state.asObservable();
        this.init();
    }

    private listen(next: (state?: boolean) => void) {
        return this.state.subscribe(next);
    }
    private init() {
        this.generateCaterers();
        this.generateLocations();
    }

    get data() {
        return this.model;
    }

    private generateCaterers() {
        const caterers = [
            {
                'id': 'caterer-QjV4akz1jJ',
                'title': 'Cafe',
                'description': 'Masterfully-crafted brews and blends, sweets, sandwiches, cakes and soups.',
                'minimum_cost': 1400,
                'img_url': 'assets/img/caterer-01.jpg',
                'phone': '0292790950',
                'opening_hours': ['Mon: 09:00 - 17:30', 'Tue: 09:00 - 17:30', 'Wed: 09:00 - 17:30', 'Thu: 09:00 - 21:30', 'Fri: 09:00 - 17:30', 'Sat: 10:00 - 15:00', 'Sun: 11:00 - 15:00'],
                'default_cutoff_fixed_seconds': null,
                'default_cutoff_relative_seconds': 3600,
                'hour_open': 9,
                'minute_open': 0,
                'hour_close': 18,
                'minute_close': 0,
                'options': [
                    {
                        'id': 0,
                        'name': 'Platters',
                        'minimum_order': null,
                        'extra_information': '*gluten free options available!',
                        'items': [
                            { 'id': 0, 'name': 'Sandwich Platter', 'price': 3600, 'img_url': null, 'cutoff_relative_seconds': null, 'cutoff_fixed_seconds': null, 'minimum_order': null, 'description': 'Vegetarian and gluten free options available. Serves 4.', 'properties': [] },
                            { 'id': 1, 'name': 'Breakfast Platter', 'price': 3200, 'img_url': null, 'cutoff_relative_seconds': null, 'cutoff_fixed_seconds': 36000, 'minimum_order': null, 'description': 'Includes bacon \u0026 egg sliders, halloumi \u0026 egg sliders and bacon \u0026 egg wraps. Serves 4.', 'properties': [] },
                            { 'id': 2, 'name': 'Pastry Platter', 'price': 2400, 'img_url': null, 'cutoff_relative_seconds': null, 'cutoff_fixed_seconds': null, 'minimum_order': null, 'description': 'Includes house made chocolate brownies, citrus slices and house baked muffins. Serves 4.', 'properties': [] },
                            { 'id': 3, 'name': 'Fruit Platter', 'price': 2400, 'img_url': null, 'cutoff_relative_seconds': null, 'cutoff_fixed_seconds': null, 'minimum_order': null, 'description': 'A variety of season fresh fruits. Serves 4.', 'properties': [] }
                        ]
                    },
                    {
                        'id': 1,
                        'name': 'Coffee / Hot Drinks',
                        'minimum_order': 4,
                        'extra_information': null,
                        'items': [
                            { 'id': 4, 'name': 'Cappuccino', 'price': 350, 'img_url': null, 'cutoff_relative_seconds': 900, 'cutoff_fixed_seconds': null, 'minimum_order': null, 'description': '', 'properties': [{ 'id': 'coffee_size', 'name': 'Size', 'type': 1, 'values': [{ 'name': 'Regular', 'selected': true, 'id': 0 }, { 'name': 'Large', 'extra_price': 50, 'id': 1 }] }, { 'id': 'coffee_sugar', 'name': 'Sugar', 'type': 2, 'values': [{ 'name': 'White', 'min': 0, 'max': 10, 'step': 0.5, 'id': 0 }, { 'name': 'Brown', 'min': 0, 'max': 10, 'step': 0.5, 'id': 1 }, { 'name': 'Equal', 'min': 0, 'max': 10, 'step': 0.5, 'id': 2 }] }, { 'id': 'coffee_milk', 'name': 'Milk', 'type': 1, 'values': [{ 'name': 'Full Cream', 'selected': true, 'id': 0 }, { 'name': 'Soy', 'extra_price': 50, 'id': 1 }, { 'name': 'Almond', 'extra_price': 50, 'id': 2 }] }, { 'id': 'coffee_strength', 'name': 'Strength', 'type': 1, 'values': [{ 'name': 'Normal', 'selected': true, 'id': 0 }, { 'name': 'Extra Shot', 'extra_price': 50, 'id': 1 }, { 'name': 'Decaf', 'extra_price': 50, 'id': 2 }] }] },
                            { 'id': 5, 'name': 'Flat White', 'price': 350, 'img_url': null, 'cutoff_relative_seconds': 900, 'cutoff_fixed_seconds': null, 'minimum_order': null, 'description': '', 'properties': [{ 'id': 'coffee_size', 'name': 'Size', 'type': 1, 'values': [{ 'name': 'Regular', 'selected': true, 'id': 0 }, { 'name': 'Large', 'extra_price': 50, 'id': 1 }] }, { 'id': 'coffee_sugar', 'name': 'Sugar', 'type': 2, 'values': [{ 'name': 'White', 'min': 0, 'max': 10, 'step': 0.5, 'id': 0 }, { 'name': 'Brown', 'min': 0, 'max': 10, 'step': 0.5, 'id': 1 }, { 'name': 'Equal', 'min': 0, 'max': 10, 'step': 0.5, 'id': 2 }] }, { 'id': 'coffee_milk', 'name': 'Milk', 'type': 1, 'values': [{ 'name': 'Full Cream', 'selected': true, 'id': 0 }, { 'name': 'Soy', 'extra_price': 50, 'id': 1 }, { 'name': 'Almond', 'extra_price': 50, 'id': 2 }] }, { 'id': 'coffee_strength', 'name': 'Strength', 'type': 1, 'values': [{ 'name': 'Normal', 'selected': true, 'id': 0 }, { 'name': 'Extra Shot', 'extra_price': 50, 'id': 1 }, { 'name': 'Decaf', 'extra_price': 50, 'id': 2 }] }] },
                            { 'id': 6, 'name': 'Latte', 'price': 350, 'img_url': null, 'cutoff_relative_seconds': 900, 'cutoff_fixed_seconds': null, 'minimum_order': null, 'description': '', 'properties': [{ 'id': 'coffee_size', 'name': 'Size', 'type': 1, 'values': [{ 'name': 'Regular', 'selected': true, 'id': 0 }, { 'name': 'Large', 'extra_price': 50, 'id': 1 }] }, { 'id': 'coffee_sugar', 'name': 'Sugar', 'type': 2, 'values': [{ 'name': 'White', 'min': 0, 'max': 10, 'step': 0.5, 'id': 0 }, { 'name': 'Brown', 'min': 0, 'max': 10, 'step': 0.5, 'id': 1 }, { 'name': 'Equal', 'min': 0, 'max': 10, 'step': 0.5, 'id': 2 }] }, { 'id': 'coffee_milk', 'name': 'Milk', 'type': 1, 'values': [{ 'name': 'Full Cream', 'selected': true, 'id': 0 }, { 'name': 'Soy', 'extra_price': 50, 'id': 1 }, { 'name': 'Almond', 'extra_price': 50, 'id': 2 }] }, { 'id': 'coffee_strength', 'name': 'Strength', 'type': 1, 'values': [{ 'name': 'Normal', 'selected': true, 'id': 0 }, { 'name': 'Extra Shot', 'extra_price': 50, 'id': 1 }, { 'name': 'Decaf', 'extra_price': 50, 'id': 2 }] }] },
                            { 'id': 7, 'name': 'Long Black', 'price': 350, 'img_url': null, 'cutoff_relative_seconds': 900, 'cutoff_fixed_seconds': null, 'minimum_order': null, 'description': '', 'properties': [{ 'id': 'coffee_size', 'name': 'Size', 'type': 1, 'values': [{ 'name': 'Regular', 'selected': true, 'id': 0 }, { 'name': 'Large', 'extra_price': 50, 'id': 1 }] }, { 'id': 'coffee_sugar', 'name': 'Sugar', 'type': 2, 'values': [{ 'name': 'White', 'min': 0, 'max': 10, 'step': 0.5, 'id': 0 }, { 'name': 'Brown', 'min': 0, 'max': 10, 'step': 0.5, 'id': 1 }, { 'name': 'Equal', 'min': 0, 'max': 10, 'step': 0.5, 'id': 2 }] }, { 'id': 'coffee_strength', 'name': 'Strength', 'type': 1, 'values': [{ 'name': 'Normal', 'selected': true, 'id': 0 }, { 'name': 'Extra Shot', 'extra_price': 50, 'id': 1 }, { 'name': 'Decaf', 'extra_price': 50, 'id': 2 }] }] },
                            { 'id': 8, 'name': 'Piccolo', 'price': 350, 'img_url': null, 'cutoff_relative_seconds': 900, 'cutoff_fixed_seconds': null, 'minimum_order': null, 'description': '', 'properties': [{ 'id': 'coffee_size', 'name': 'Size', 'type': 1, 'values': [{ 'name': 'Regular', 'selected': true, 'id': 0 }, { 'name': 'Large', 'extra_price': 50, 'id': 1 }] }, { 'id': 'coffee_sugar', 'name': 'Sugar', 'type': 2, 'values': [{ 'name': 'White', 'min': 0, 'max': 10, 'step': 0.5, 'id': 0 }, { 'name': 'Brown', 'min': 0, 'max': 10, 'step': 0.5, 'id': 1 }, { 'name': 'Equal', 'min': 0, 'max': 10, 'step': 0.5, 'id': 2 }] }, { 'id': 'coffee_milk', 'name': 'Milk', 'type': 1, 'values': [{ 'name': 'Full Cream', 'selected': true, 'id': 0 }, { 'name': 'Soy', 'extra_price': 50, 'id': 1 }, { 'name': 'Almond', 'extra_price': 50, 'id': 2 }] }, { 'id': 'coffee_strength', 'name': 'Strength', 'type': 1, 'values': [{ 'name': 'Normal', 'selected': true, 'id': 0 }, { 'name': 'Extra Shot', 'extra_price': 50, 'id': 1 }, { 'name': 'Decaf', 'extra_price': 50, 'id': 2 }] }] },
                            { 'id': 9, 'name': 'Macchiato', 'price': 350, 'img_url': null, 'cutoff_relative_seconds': 900, 'cutoff_fixed_seconds': null, 'minimum_order': null, 'description': '', 'properties': [{ 'id': 'coffee_size', 'name': 'Size', 'type': 1, 'values': [{ 'name': 'Regular', 'selected': true, 'id': 0 }, { 'name': 'Large', 'extra_price': 50, 'id': 1 }] }, { 'id': 'coffee_sugar', 'name': 'Sugar', 'type': 2, 'values': [{ 'name': 'White', 'min': 0, 'max': 10, 'step': 0.5, 'id': 0 }, { 'name': 'Brown', 'min': 0, 'max': 10, 'step': 0.5, 'id': 1 }, { 'name': 'Equal', 'min': 0, 'max': 10, 'step': 0.5, 'id': 2 }] }, { 'id': 'coffee_milk', 'name': 'Milk', 'type': 1, 'values': [{ 'name': 'Full Cream', 'selected': true, 'id': 0 }, { 'name': 'Soy', 'extra_price': 50, 'id': 1 }, { 'name': 'Almond', 'extra_price': 50, 'id': 2 }] }, { 'id': 'coffee_strength', 'name': 'Strength', 'type': 1, 'values': [{ 'name': 'Normal', 'selected': true, 'id': 0 }, { 'name': 'Extra Shot', 'extra_price': 50, 'id': 1 }, { 'name': 'Decaf', 'extra_price': 50, 'id': 2 }] }] },
                            { 'id': 10, 'name': 'Espresso', 'price': 350, 'img_url': null, 'cutoff_relative_seconds': 900, 'cutoff_fixed_seconds': null, 'minimum_order': null, 'description': '', 'properties': [{ 'id': 'coffee_size', 'name': 'Size', 'type': 1, 'values': [{ 'name': 'Regular', 'selected': true, 'id': 0 }, { 'name': 'Large', 'extra_price': 50, 'id': 1 }] }, { 'id': 'coffee_sugar', 'name': 'Sugar', 'type': 2, 'values': [{ 'name': 'White', 'min': 0, 'max': 10, 'step': 0.5, 'id': 0 }, { 'name': 'Brown', 'min': 0, 'max': 10, 'step': 0.5, 'id': 1 }, { 'name': 'Equal', 'min': 0, 'max': 10, 'step': 0.5, 'id': 2 }] }, { 'id': 'coffee_strength', 'name': 'Strength', 'type': 1, 'values': [{ 'name': 'Normal', 'selected': true, 'id': 0 }, { 'name': 'Extra Shot', 'extra_price': 50, 'id': 1 }, { 'name': 'Decaf', 'extra_price': 50, 'id': 2 }] }] },
                            { 'id': 11, 'name': 'Chai Latte', 'price': 350, 'img_url': null, 'cutoff_relative_seconds': 900, 'cutoff_fixed_seconds': null, 'minimum_order': null, 'description': '', 'properties': [{ 'id': 'coffee_size', 'name': 'Size', 'type': 1, 'values': [{ 'name': 'Regular', 'selected': true, 'id': 0 }, { 'name': 'Large', 'extra_price': 50, 'id': 1 }] }, { 'id': 'coffee_sugar', 'name': 'Sugar', 'type': 2, 'values': [{ 'name': 'White', 'min': 0, 'max': 10, 'step': 0.5, 'id': 0 }, { 'name': 'Brown', 'min': 0, 'max': 10, 'step': 0.5, 'id': 1 }, { 'name': 'Equal', 'min': 0, 'max': 10, 'step': 0.5, 'id': 2 }] }] },
                            {
                                'id': 12, 'name': 'Tea', 'price': 350, 'img_url': null, 'cutoff_relative_seconds': 900, 'cutoff_fixed_seconds': null, 'minimum_order': null, 'description': '', 'properties': [{ 'id': 'coffee_size', 'name': 'Size', 'type': 1, 'values': [{ 'name': 'Regular', 'selected': true, 'id': 0 }, { 'name': 'Large', 'extra_price': 50, 'id': 1 }] }, { 'id': 'coffee_sugar', 'name': 'Sugar', 'type': 2, 'values': [{ 'name': 'White', 'min': 0, 'max': 10, 'step': 0.5, 'id': 0 }, { 'name': 'Brown', 'min': 0, 'max': 10, 'step': 0.5, 'id': 1 }, { 'name': 'Equal', 'min': 0, 'max': 10, 'step': 0.5, 'id': 2 }] }, { 'id': 'tea_types', 'name': 'Type', 'type': 1, 'values': [{ 'name': 'English Breakfast', 'selected': true, 'id': 0 }, { 'name': 'Earl Grey', 'id': 1 }, { 'name': 'Peppermint', 'id': 2 }, { 'name': 'Green Tea', 'id': 3 }] }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];
        caterers.push(JSON.parse(JSON.stringify(caterers[0])));
        caterers[1].title = 'Baked Fresh Yano';
        caterers[1].img_url = 'assets/img/caterer-02.jpg';
        caterers[1].description = 'Fresh panini baked daily with your choice of filling & sides.';
        caterers.push(JSON.parse(JSON.stringify(caterers[0])));
        caterers[2].title = 'Health Foodz';
        caterers[2].img_url = 'assets/img/caterer-03.jpg';
        caterers[2].description = 'The health shop everything from cold pressed juices to crunchy fresh salads';
        caterers.push(JSON.parse(JSON.stringify(caterers[0])));
        caterers[2].id = 'general';
        caterers[2].title = 'Internal Catering';
        caterers[2].img_url = 'assets/img/caterer-03.jpg';
        caterers[2].description = 'The health shop everything from cold pressed juices to crunchy fresh salads';
        MOCK_REQ_HANDLER.register(`/${this.model.api_route}/caterers`, caterers);
    }

    private generateLocations() {
        const locations = [
            'ACA Tenancy Location',
            'Studio', '2.31.02',
            'VC Meeting Room',
            'West Lounge Meeting Table'
        ];
        MOCK_REQ_HANDLER.register(`/${this.model.api_route}/caterers/locations`, locations);
    }
}
