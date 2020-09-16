import { Component } from '@angular/core';

import { BaseClass } from 'src/app/common/base.class';
import { SettingsService } from '../common/settings.service';

@Component({
    selector: 'app-engine',
    templateUrl: './engine.component.html',
    styleUrls: ['./engine.component.scss']
})
export class PlaceComponent extends BaseClass {

    constructor(private _settings: SettingsService) {
        super();
    }

    public ngOnInit(): void {;
        this._settings.title = 'Admin';
    }
}
