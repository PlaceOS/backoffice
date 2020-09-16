import { Component, Input, SimpleChanges, OnInit, OnChanges } from '@angular/core';
import { PlaceZone, PlaceSystem, querySystems } from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import { BaseClass } from 'src/app/common/base.class';

import * as marked from 'marked';

@Component({
    selector: 'zone-about',
    templateUrl: './zone-about.template.html',
    styleUrls: ['./zone-about.styles.scss'],
})
export class ZoneAboutComponent extends BaseClass implements OnChanges {
    /** Item to render */
    @Input() public item: PlaceZone;
    /** List of systems associated with the zone */
    public system_list: PlaceSystem[];
    /** Selected system */
    public active_system: PlaceSystem;

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.item && this.item) {
            this.loadSystems();
        }
    }

    public get parsed_description() {
        if (!this.item) {
            return '';
        }
        return marked(this.item.description);
    }

    public loadSystems(offset: number = 0) {
        querySystems({ offset, zone_id: this.item.id, limit: 500 })
            .pipe(map((resp) => resp.data))
            .subscribe((list) => {
                this.system_list = list;
            });
    }

    /** List of tags associated with the zone */
    public get tag_list(): string[] {
        return this.item ? this.item.tags : [];
    }
}
