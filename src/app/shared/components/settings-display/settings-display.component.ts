
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

    public length = 0;
    public hover: any = {};
    
    public ngOnChanges(changes: any) {
        if (changes.model) {
            this.updateSettings();
        }
    }

    public updateSettings() {
        this.length = 0;
        this.settings = [];
        const formatted = JSON.stringify(this.model, null, 4);
        const lines = formatted.split('\n');
        for (const line of lines) {
            this.settings.push({
                index: lines.indexOf(line),
                value: line
            });
            this.length = line.length > this.length ? line.length : this.length;
        }
    }
}
