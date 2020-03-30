import { Component, OnInit } from '@angular/core';

import { EngineDebugService } from 'src/app/services/debug.service';
import { ANIMATION_SHOW_CONTRACT_EXPAND_BIDIR } from '../../globals/angular-animations';
import { BaseDirective } from '../../globals/base.directive';

@Component({
    selector: 'app-debug-output',
    templateUrl: './debug-output.component.html',
    styleUrls: ['./debug-output.component.scss'],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND_BIDIR]
})
export class DebugOutputComponent extends BaseDirective implements OnInit {
    /** Whether display output is shown */
    public show_content: boolean = true;
    /** Display string for debug logs */
    public logs: string;

    /** Whether user is listening for debug information */
    public get is_enabled(): boolean {
        return this._service.is_listening;
    }
    constructor(private _service: EngineDebugService) {
        super();
    }

    public ngOnInit() {
        this.subscription('changes', this._service.events.subscribe((_) => {
            this.logs = this._service.terminal_string;
        }));
    }
}
