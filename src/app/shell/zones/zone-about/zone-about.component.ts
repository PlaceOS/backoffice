
import { Component, Input } from '@angular/core';
import { EngineZone } from '@acaprojects/ts-composer';

import { BaseDirective } from '../../../shared/globals/base.directive';

@Component({
    selector: 'zone-about',
    templateUrl: './zone-about.template.html',
    styleUrls: ['./zone-about.styles.scss']
})
export class ZoneAboutComponent extends BaseDirective {
    @Input() public item: EngineZone;

    /** List of tags associated with the zone */
    public get tag_list(): string[] {
        return [];
    }

}
