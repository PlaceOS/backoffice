
import { Component, Input, SimpleChanges, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { PlaceZone, PlaceSystem, EncryptionLevel, querySystems } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';

import * as marked from 'marked';
import { Identity } from 'src/app/shared/utilities/types.utilities';

@Component({
    selector: 'zone-about',
    templateUrl: './zone-about.template.html',
    styleUrls: ['./zone-about.styles.scss']
})
export class ZoneAboutComponent extends BaseDirective implements OnInit, OnChanges {
    /** Item to render */
    @Input() public item: PlaceZone;
    /** List of systems associated with the zone */
    public system_list: PlaceSystem[];
    /** Selected system */
    public active_system: PlaceSystem;

    /** Whether application is loading settings for item */
    public get loading_settings(): boolean {
        return this._service.get('loading_settings');
    }

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item').subscribe(item => {
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

    public get parsed_description() {
        if (!this.item) { return ''; }
        return marked(this.item.description);
    }

    public loadSystems(offset: number = 0) {
        querySystems({ offset, zone_id: this.item.id, limit: 500 }).subscribe((list) => {
            this.system_list = list;
        });
    }

    /** List of tags associated with the zone */
    public get tag_list(): string[] {
        return this.item ? this.item.tags : [];
    }

}
