
import { Component, Input, SimpleChanges, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { EngineZone, EngineSystem } from '@acaengine/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';

@Component({
    selector: 'zone-about',
    templateUrl: './zone-about.template.html',
    styleUrls: ['./zone-about.styles.scss']
})
export class ZoneAboutComponent extends BaseDirective implements OnInit, OnChanges {
    /** Item to render */
    @Input() public item: EngineZone;
    /** List of systems associated with the zone */
    public system_list: EngineSystem[];
    /** Selected system */
    public active_system: EngineSystem;

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item', item => {
                this.item = item;
                this.ngOnChanges({ item: new SimpleChange(null, this.item, false) });
            })
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.item && this.item) {
            this.loadSystems();
        }
    }

    public get settings(): string {
        return this.item.settings.settings_string;
    }

    public loadSystems(offset: number = 0) {
        this._service.Systems.query({ offset, zone_id: this.item.id, limit: 500 }).then((list) => {
            this.system_list = list;
        });
    }

    /** List of tags associated with the zone */
    public get tag_list(): string[] {
        return this.item && this.item.tags ? this.item.tags.split(',') : [];
    }

}
