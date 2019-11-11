
import { Component, Input } from '@angular/core';
import { EngineModule } from '@acaprojects/ts-composer';

import { BaseDirective } from '../../../shared/globals/base.directive';

@Component({
    selector: 'device-about',
    templateUrl: './device-about.template.html',
    styleUrls: ['./device-about.styles.scss']
})
export class DeviceAboutComponent extends BaseDirective {
    /** Item to render */
    @Input() public item: EngineModule;

    /** Settings for the item */
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

    public get system() {
        return null;
    }

}
