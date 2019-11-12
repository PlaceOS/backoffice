import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { EngineResource } from '@acaprojects/ts-composer';

import { BaseAPIService } from '../../../services/data/base.service';
import { BaseDirective } from '../../globals/base.directive';

@Component({
    selector: 'engine-item-dropdown',
    templateUrl: './item-dropdown.component.html',
    styleUrls: ['./item-dropdown.component.scss']
})
export class EngineItemDropdownComponent extends BaseDirective implements OnChanges {
    /** Service to grab the list data */
    @Input() service: BaseAPIService<any>;
    /** Placeholder of the dropdown */
    @Input() label: string;
    /** ID of the active item */
    @Input() model: string;
    /** Emitter for changes to the */
    @Output() modelChange = new EventEmitter<string>();
    /** List of items to show on the dropdown */
    public items: EngineResource<any>[];
    /** Active item */
    public item: EngineResource<any>;
    /**  */
    public count = -1;
    /** Whether the list data is loading */
    public loading = false;

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.service) {
            this.load();
        }
        if (changes.model && !this.model) {
            this.item = null;
            this.count--;
        }
    }

    /**
     * Load the item data to populate the dropdown
     * @param query Filter string for the item list
     */
    public load(query: string = '') {
        this.timeout('search', () => {
            if (this.service) {
                if (this.loading) {
                    return this.timeout('loading', () => this.load(query));
                }
                this.loading = true;
                this.service.query({ q: query, offset: '0', limit: 100 }).then((list) => {
                    this.items = list as any[];
                    this.loading = false;
                }, () => this.loading = false);
            }
        });
    }

    /**
     * Post change to the active item
     * @param id ID of the active item
     */
    public post(item: EngineResource<any>) {
        this.model = item.id;
        this.item = item;
        this.modelChange.emit(this.model);
    }
}
