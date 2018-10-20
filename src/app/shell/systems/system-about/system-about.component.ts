
import { Component, Input, OnChanges, ViewChildren, QueryList, ElementRef } from '@angular/core';

import { BaseComponent } from '../../../shared/components/base.component';
import { IEngineSystem } from '../../../services/data/systems.service';
import { AppService } from '../../../services/app.service';

@Component({
    selector: 'system-about',
    templateUrl: './system-about.template.html',
    styleUrls: ['./system-about.styles.scss']
})
export class SystemAboutComponent extends BaseComponent {
    @Input() public item: IEngineSystem;

    public model: any = {};

    @ViewChildren('argument') private arg_list: QueryList<ElementRef>;

    constructor(private service: AppService) {
        super();
    }

    public start() {
        this.service.confirm({
            icon: 'play_arrow',
            title: 'Start system?',
            message: 'Are you sure you want to start this system?<br>All stopped modules within the system will boot up.',
            accept: 'Ok',
            cancel: true
        }, (e) => {
            if (e.type === 'Accept') {
                this.service.Systems.start(this.item.id)
                    .then(
                        (result) => null,
                        (err) => this.service.error(err.message || err)
                    );
            }
            e.close();
        });
    }

    public stop() {
        this.service.confirm({
            icon: 'stop',
            title: 'Stop system?',
            message: 'Are you sure you want to stop this system?<br>All modules will be immediately stopped regardless of any other systems they may be in.',
            accept: 'Ok',
            cancel: true
        }, (e) => {
            if (e.type === 'Accept') {
                this.service.Systems.start(this.item.id)
                    .then(
                        (result) => null,
                        (err) => this.service.error(err.message || err)
                    );
            }
            e.close();
        });
    }

    public logs() {

    }
}
