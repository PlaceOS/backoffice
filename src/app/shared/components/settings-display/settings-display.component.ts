
import { Component, Input, OnChanges } from '@angular/core';

import { BaseComponent } from '../base.component';

@Component({
    selector: 'settings-display',
    templateUrl: './settings-display.template.html',
    styleUrls: ['./settings-display.styles.scss']
})
export class SettingsDisplayComponent extends BaseComponent implements OnChanges {
    @Input() public model: any;
    @Input() public group = '';
    @Input() public show = true;
    @Input() public sub = false;

    public settings = [];
    
    public ngOnChanges(changes: any) {
        if (changes.model) {
            this.updateSettings();
        }
    }

    public updateSettings() {
        this.settings = [];
        for (const key in this.model) {
            if (this.model.hasOwnProperty(key) && this.model[key] !== undefined && this.model[key] !== null) {
                this.settings.push({
                    key,
                    type: typeof this.model[key],
                    value: this.model[key],
                    show: this.show
                });
            }
        }
    }
}
