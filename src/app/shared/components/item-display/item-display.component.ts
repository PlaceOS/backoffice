
import { Component, Input, TemplateRef, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

import { BaseComponent } from '../base.component';
import { AppService } from '../../../services/app.service';
import { Utils } from '../../utility.class';

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

    constructor(private service: AppService) {
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
        this.subs.obs.right = this.service.Hotkey.listen(['ArrowRight'], () => this.changeTab(1));
        this.subs.obs.left = this.service.Hotkey.listen(['ArrowLeft'], () => this.changeTab(-1));
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
            Utils.copyToClipboard(this.item.id);
            this.service.info('ID copied to clipboard');
        }
    }
}
