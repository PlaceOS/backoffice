
import { Component, Input, OnInit } from '@angular/core';

import { BaseComponent } from '../../../shared/globals/base.component';
import { IEngineTrigger } from '../../../services/data/triggers.service';
import { ApplicationService } from '../../../services/app.service';

@Component({
    selector: 'trigger-about',
    templateUrl: './trigger-about.template.html',
    styleUrls: ['./trigger-about.styles.scss']
})
export class TriggerAboutComponent extends BaseComponent implements OnInit {
    @Input() public item: IEngineTrigger;

    public model: any = {};

    constructor(private service: ApplicationService) {
        super();
    }

    public ngOnInit() {

    }

    public init() {
        if (!this.service.is_ready) {
            return this.timeout('init', () => this.init());
        }
        this.loadSystems();
    }

    public select(system) {
        this.model.selected_system = system;
    }

    public addCondition() {
        this.service.Overlay.open('trigger-condition', { data: {
            trigger: this.item,
            system: this.model.selected_system
        } }, (e) => e.close());
    }

    public addAction() {
        this.service.Overlay.open('trigger-action', { data: {
            trigger: this.item,
            system: this.model.selected_system
        } }, (e) => e.close());
    }

    public loadSystems(query: string = '') {
        this.load(query, 'Systems');
    }

    private load(query: string = '', type: string = 'Zones') {
        if (this.model[`loading_${type}`]) {
            this.clearTimeout(type);
            return this.timeout('type', () => {
                this.clearTimeout(type);
                this.load(query, type);
            }, 300);
        }
        this.model[`loading_${type}`] = true;
        this.service[`${type}`].query({ q: query, offset: '0' }).then((list) => {
            this.model[`${(type || '').toLowerCase()}`] = list;
            this.model[`loading_${type}`] = false;
        }, () => this.model[`loading_${type}`] = false);
    }

}
