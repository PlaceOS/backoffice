
import { Component, Input, SimpleChanges } from '@angular/core';
import { EngineZone } from '@acaprojects/ts-composer';

import { BaseDirective } from '../../../shared/globals/base.directive';

@Component({
    selector: 'zone-about',
    templateUrl: './zone-about.template.html',
    styleUrls: ['./zone-about.styles.scss']
})
export class ZoneAboutComponent extends BaseDirective {
    /** Item to render */
    @Input() public item: EngineZone;

    public get settings(): string {
        if (this.item && this.item.settings) {
            if (typeof this.item.settings === 'object') {
                return JSON.stringify(this.item.settings, null, 4);
            } else if (typeof this.item.settings === 'string') {
                return this.item.settings;
            }
        }
        return '{}';
    }

    /** List of tags associated with the zone */
    public get tag_list(): string[] {
        return [];
    }

}
