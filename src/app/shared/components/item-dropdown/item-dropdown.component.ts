import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { EngineResource } from '@acaprojects/ts-composer';

import { BaseAPIService } from '../../../services/data/base.service';
import { BaseDirective } from '../../globals/base.directive';

@Component({
    selector: 'engine-item-dropdown',
    templateUrl: './item-dropdown.component.html',
    styleUrls: ['./item-dropdown.component.scss']
})
export class EngineItemDropdownComponent extends BaseDirective implements OnInit, OnChanges {
    @Input() service: BaseAPIService<any>;
    @Input() label: string;
    @Input() model: string;
    @Output() modelChange = new EventEmitter<string>();

    public items: EngineResource<any>[];
    public item: EngineResource<any>;
    public count = -1;

    public loading = false;

    ngOnInit(): void { }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.service) {
            this.load();
        }
        if (changes.model && !this.model) {
            this.item = null;
            this.count--;
        }
    }

    public load(query: string = '') {
        this.timeout('search', () => {
            if (this.service) {
                if (this.loading) {
                    return this.timeout('loading', () => {
                        this.load(query);
                    });
                }
                this.loading = true;
                this.service.query({ q: query, offset: '0' }).then((list) => {
                    this.items = list as any[];
                    this.loading = false;
                }, () => this.loading = false);
            }
        });
    }

    public post(id: string) {
        this.model = id;
        this.item = this.items.find(i => i.id === id);
        this.modelChange.emit(this.model);
    }
}
