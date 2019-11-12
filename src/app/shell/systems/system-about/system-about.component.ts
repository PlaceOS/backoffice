
import { Component, Input, OnChanges, ViewChildren, QueryList, ElementRef, SimpleChanges } from '@angular/core';
import { EngineSystem, HashMap, EngineZone } from '@acaprojects/ts-composer';

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
    /** System to render */
    @Input() public item: EngineSystem;
    /** Whether to show the settings merged with zone and modules */
    public merged: boolean;
    /** Settings map for the item */
    public settings: HashMap;
    /** List of zones for the active system */
    public zones: EngineZone[];

    /** List of module ids associated with the system */
    public modules(): string[] {
        return this.item.modules || [];
    }

    constructor(private service: ApplicationService) {
        super();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.item && this.item) {
            this.loadZones();
        }
    }

    /**
     * Open confirmation modal for starting the active system
     */
    public start() {
        this.service.Overlay.open('confirm', {
            config: 'modal',
            data: {
                title: 'Start system?',
                body: `Are you sure you want to start this system?<br>All stopped modules within the system will boot up.`,
                icon: { class: 'backoffice-controller-play' }
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

    /**
     * Open confirmation modal for stopping the active system
     */
    public stop() {
        this.service.Overlay.open('confirm', {
            config: 'modal',
            data: {
                title: 'Stop system?',
                body: `Are you sure you want to stop this system?<br>All modules will be immediately stopped regardless of any other systems they may be in.`,
                icon: { class: 'backoffice-controller-stop' }
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
        this.service.Overlay.open('system-logs', { config: 'modal', data: { sys_id: this.item.id } })
    }

    public toggleSettings() {
        this.merged = this.merged === false ? true : false;
        this.updateSettings();
    }

    public updateSettings() {
        if (!this.item) { return; }
        if (this.merged !== false) {
            this.settings = merge({}, this.item.settings);
            for (const zone of this.zones) {
                this.settings = merge(this.settings, zone.settings);
            }
        } else {
            this.settings = this.item.settings;
        }
    }

    public loadZones() {
        this.service.Zones.query({ sys_id: this.item.id, offset: 0 }).then((list) => {
            list.sort((a, b) => this.item.zones.indexOf(b.id) - this.item.zones.indexOf(a.id));
            this.zones = list;
            this.updateSettings();
        }, () => null);
    }
}
