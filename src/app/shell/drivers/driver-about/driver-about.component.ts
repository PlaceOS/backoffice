
import { Component, Input } from '@angular/core';
import { EngineDriver } from '@acaprojects/ts-composer';

import { BaseDirective } from '../../../shared/globals/base.directive';

@Component({
    selector: 'driver-about',
    templateUrl: './driver-about.template.html',
    styleUrls: ['./driver-about.styles.scss']
})
export class DriverAboutComponent extends BaseDirective {
    /** Item to render */
    @Input() public item: EngineDriver;

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

}
