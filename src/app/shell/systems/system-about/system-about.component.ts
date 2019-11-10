
import { Component, Input, OnChanges, ViewChildren, QueryList, ElementRef, SimpleChanges } from '@angular/core';
import { EngineSystem } from '@acaprojects/ts-composer';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';

import * as merge from 'deepmerge';
import { IOverlayEvent } from '@acaprojects/ngx-overlays';

@Component({
    selector: 'system-about',
    templateUrl: './system-about.template.html',
    styleUrls: ['./system-about.styles.scss']
})
export class SystemAboutComponent extends BaseDirective implements OnChanges {
    @Input() public item: EngineSystem;

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
            config: 'modal',
            data: {
                title: 'Start system?',
                body: `Are you sure you want to start this system?<br>All stopped modules within the system will boot up.`,
                icon: { class: 'material-icons', value: 'play_arrow' }
            }
        }, (e: IOverlayEvent<void>) => {
            if (e.type === 'finish') {
                this.service.Systems.start(this.item.id)
                    .then(
                        (result) => null,
                        (err) => this.service.notifyError(`Failed to start system: ${err.message || err}`)
                    );
            }
        });
    }

    public stop() {
        this.service.Overlay.open('confirm', {
            config: 'modal',
            data: {
                title: 'Stop system?',
                body: `Are you sure you want to stop this system?<br>All modules will be immediately stopped regardless of any other systems they may be in.`,
                icon: { class: 'material-icons', value: 'stop' }
            }
        }, (e: IOverlayEvent<void>) => {
            if (e.type === 'finish') {
                this.service.Systems.stop(this.item.id)
                    .then(
                        (result) => null,
                        (err) => this.service.notifyError(`Failed to stop system: ${err.message || err}`)
                    );
            }
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
