
import { Component, Input, OnChanges, ViewChildren, QueryList, ElementRef, SimpleChanges } from '@angular/core';

import { BaseComponent } from '../../../shared/globals/base.component';
import { IEngineSystem } from '../../../services/data/systems.service';
import { ApplicationService } from '../../../services/app.service';

import * as merge from 'deepmerge';

@Component({
    selector: 'system-about',
    templateUrl: './system-about.template.html',
    styleUrls: ['./system-about.styles.scss']
})
export class SystemAboutComponent extends BaseComponent implements OnChanges {
    @Input() public item: IEngineSystem;

    public model: any = {};

    @ViewChildren('argument') private arg_list: QueryList<ElementRef>;

    constructor(private service: ApplicationService) {
        super();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.item && this.item) {
            this.loadZones();
        }
    }

    public start() {
        this.service.Overlay.open('confirm', {
            data: {
                icon: 'play_arrow',
                title: 'Start system?',
                message: 'Are you sure you want to start this system?<br>All stopped modules within the system will boot up.',
                accept: 'Ok',
                cancel: true
            }
        }, (e) => {
            if (e.type === 'Accept') {
                this.service.Systems.start(this.item.id)
                    .then(
                        (result) => null,
                        (err) => this.service.notifyError(err.message || err)
                    );
            }
            e.close();
        });
    }

    public stop() {
        this.service.Overlay.open('confirm', {
            data: {
                icon: 'stop',
                title: 'Stop system?',
                message: 'Are you sure you want to stop this system?<br>All modules will be immediately stopped regardless of any other systems they may be in.',
                accept: 'Ok',
                cancel: true
            }
        }, (e) => {
            if (e.type === 'Accept') {
                this.service.Systems.start(this.item.id)
                    .then(
                        (result) => null,
                        (err) => this.service.notifyError(err.message || err)
                    );
            }
            e.close();
        });
    }

    public logs() {

    }

    public toggleSettings() {
        this.model.merged = this.model.merged === false ? true : false;
        this.updateSettings();
    }

    public updateSettings() {
        if (!this.item) { return; }
        if (this.model.merged !== false) {
            this.model.settings = merge({}, this.item.settings);
            for (const zone of this.model.zones) {
                this.model.settings = merge(this.model.settings, zone.settings);
            }
        } else {
            this.model.settings = this.item.settings;
        }
    }

    public loadZones() {
        this.service.Zones.query({ sys_id: this.item.id, offset: 0 }).then((list) => {
            list.sort((a, b) => this.item.zones.indexOf(b.id) - this.item.zones.indexOf(a.id));
            this.model.zones = list;
            this.updateSettings();
        }, () => null);
    }
}
