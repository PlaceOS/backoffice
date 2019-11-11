import { Component, OnInit } from '@angular/core';
import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { OverlayItem } from '@acaprojects/ngx-overlays';
import { ApplicationService } from 'src/app/services/app.service';
import { OVERLAY_REGISTER } from 'src/app/shared/globals/overlay-register';
import { HashMap, EngineModule, EngineSystem } from '@acaprojects/ts-composer';

@Component({
    selector: 'view-module-state-modal',
    templateUrl: './view-module-state.template.html',
    styleUrls: ['./view-module-state.styles.scss']
})
export class ViewModuleStateModalComponent extends BaseDirective implements OnInit {
    /** Parent system of the module */
    public system: EngineSystem;
    /** Currently selected module */
    public module: EngineModule;
    /** Current state of the selected module */
    public state: HashMap;

    /** Settings for the item */
    public get settings(): string {
        if (this.state) {
            if (typeof this.state === 'object') {
                return JSON.stringify(this.state, null, 4);
            } else if (typeof this.state === 'string') {
                return this.state;
            }
        }
        return '{}';
    }

    constructor(private _item: OverlayItem, private _service: ApplicationService) {
        super();
    }

    public ngOnInit() {
        this.system = this._item.data.system;
        this.module = this._item.data.module;
        this.updateState();
    }

    public updateState() {
        if (this.system && this.module) {
            this._service.Systems.state(this.system.id, this.module.driver.module_name, this.module.role + 1).then(
                state => (this.state = state),
                err => this._service.notifyError(err.message || err)
            );
        }
    }
}

OVERLAY_REGISTER.push({ id: 'view-module-state', config: { content: ViewModuleStateModalComponent, config: 'modal' } });
