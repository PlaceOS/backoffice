
import { Component, Input, TemplateRef, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

import { ApplicationService } from '../../../services/app.service';
import { BaseComponent } from '../../globals/base.component';
import { copyToClipboard } from '../../utilities/general.utilities';

@Component({
    selector: 'item-display',
    templateUrl: './item-display.template.html',
    styleUrls: ['./item-display.styles.scss']
})
export class ItemDisplayComponent extends BaseComponent implements OnInit, OnChanges {
    @Input() public name: string;
    @Input() public item: any;
    @Input() public loading: boolean;
    @Input() public has_change = true;
    @Input() public tabs: { id: string, name: string, icon: { class: string, value: string }, template: TemplateRef<any> }[] = [];
    @Input() public active = 'about';
    @Output() public event = new EventEmitter();

    public model: any = {};

    constructor(private service: ApplicationService) {
        super();
    }

    public ngOnInit() {
        if (this.active) {
            for (const tab of (this.tabs || [])) {
                if (tab.id === this.active) {
                    this.model.tab = this.active;
                }
            }
        }
        this.subscription('right', this.service.Hotkeys.listen(['ArrowRight'], () => this.changeTab(1)));
        this.subscription('left', this.service.Hotkeys.listen(['ArrowLeft'], () => this.changeTab(-1)));
    }

    public ngOnChanges(changes: any) {
        if (changes.tabs && this.tabs && this.tabs.length > 0) {
            this.model.tab = this.tabs[0].id;
            if (this.active) {
                for (const tab of this.tabs) {
                    if (tab.id === this.active) {
                        this.model.tab = this.active;
                    }
                }
            }
        }
        if (changes.active) {
            for (const tab of this.tabs) {
                if (tab.id === this.active) {
                    this.model.tab = this.active;
                }
            }
        }
    }

    public changeTab(offset: number) {
        if (!this.tabs || this.tabs.length === 0) { return; }
        let index = 0;
        for (const tab of this.tabs) {
            if (tab.id === this.model.tab) {
                index = this.tabs.indexOf(tab);
            }
        }
        index += offset;
        if (index >= this.tabs.length) { index = this.tabs.length - 1; }
        if (index < 0) { index = 0; }
        this.model.tab = this.tabs[index].id;
    }

    public copy() {
        if (this.item && this.item.id) {
            copyToClipboard(this.item.id);
            this.service.notifyInfo('ID copied to clipboard');
        }
    }
}
