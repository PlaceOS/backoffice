import { Component, OnInit } from '@angular/core';

import { EngineDebugService } from 'src/app/services/debug.service';
import { ANIMATION_SHOW_CONTRACT_EXPAND_BIDIR } from '../../globals/angular-animations';

@Component({
    selector: 'app-debug-output',
    templateUrl: './debug-output.component.html',
    styleUrls: ['./debug-output.component.scss'],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND_BIDIR]
})
export class DebugOutputComponent implements OnInit {
    /** Whether display output is shown */
    public show_content: boolean = true;

    /** Whether user is listening for debug information */
    public get is_enabled(): boolean {
        return this._service.is_listening;
    }

    /** String of debug event details */
    public get logs(): string {
        return this._service.terminal_string;
    }

    constructor(private _service: EngineDebugService) {}

    public ngOnInit() {}
}
