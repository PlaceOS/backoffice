
import { Component, Input, TemplateRef, Output, EventEmitter } from '@angular/core';

import { BaseComponent } from '../base.component';

@Component({
    selector: 'item-display',
    templateUrl: './item-display.template.html',
    styleUrls: ['./item-display.styles.scss']
})
export class ItemDisplayComponent extends BaseComponent {
    @Input() public name: string;
    @Input() public item: any;
    @Input() public loading: boolean;
    @Input() public tabs: { id: string, name: string, icon: { class: string, value: string }, template: TemplateRef<any> }[] = [];
    @Output() public event = new EventEmitter();

    public model: any = {};

    constructor() {
        super();
    }

    public ngOnInit() {

    }

    public ngOnChanges(changes: any) {
        if (changes.tabs && this.tabs && this.tabs.length > 0) {
            this.model.tab = this.tabs[0].id;
        }
    }
}
