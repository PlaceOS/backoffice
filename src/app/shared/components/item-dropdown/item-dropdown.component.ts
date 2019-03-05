import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

import { BaseComponent } from '../base.component';
import { BaseService, IBaseObject } from '../../../services/data/base.service';

@Component({
    selector: 'engine-item-dropdown',
    templateUrl: './item-dropdown.component.html',
    styleUrls: ['./item-dropdown.component.scss']
})
export class EngineItemDropdownComponent extends BaseComponent implements OnInit, OnChanges {
    @Input() service: BaseService<any>;
    @Input() label: string;
    @Input() model: string;
    @Output() modelChange = new EventEmitter<string>();

    public items: IBaseObject[];
    public item: IBaseObject;
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
                    this.clearTimer('loading');
                    return this.timeout('loading', () => {
                        this.subs.timers.loading = null;
                        this.load(query);
                    });
                }
                this.loading = true;
                this.service.query({ q: query, offset: '0' }).then((list) => {
                    this.items = list;
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
