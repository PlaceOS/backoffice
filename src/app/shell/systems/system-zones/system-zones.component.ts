
import { Component, Input, OnChanges } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';

import { BaseComponent } from '../../../shared/components/base.component';
import { IEngineSystem } from '../../../services/data/systems.service';
import { AppService } from '../../../services/app.service';

@Component({
    selector: 'system-zones',
    templateUrl: './system-zones.template.html',
    styleUrls: ['./system-zones.styles.scss']
})
export class SystemZonesComponent extends BaseComponent implements OnChanges {
    @Input() public item: IEngineSystem;

    public model: any = {};

    constructor(private service: AppService) {
        super();
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.load();
        }
    }

    public load(offset: number = 0) {
        this.service.Zones.query({ sys_id: this.item.id, offset }).then((list) => {
            this.model.zones = list;
        }, () => null);
    }

    public drop(event) {
        console.log('Drop:', event);
        this.service.confirm({
            icon: 'autorenew',
            title: 'Change order?',
            message: 'Are you sure you want to change the zone priority?<br>Settings will be updated immediately for the system.',
            accept: 'Ok',
            cancel: true
        }, (e) => {
            if (e.type === 'Accept') {
                const list: string[] = [];
                for (const item of this.model.zones) { list.push(item.id); }
                moveItemInArray(list, event.previousIndex, event.currentIndex);
                e.data.loading = true;
                this.service.Systems.updateItem(this.item.id, { zones: list })
                    .then(() => {
                        moveItemInArray(this.model.zones, event.previousIndex, event.currentIndex);
                        moveItemInArray(this.item.zones, event.previousIndex, event.currentIndex);
                        e.close();
                    }, () => e.data.loading = false);
            } else {
                e.close();
            }
        });
    }

    public goto(item, link?: string) {
        if (link) {
            if (link.indexOf('http://') < 0 && link.indexOf('https://') < 0) {
                link = `http${item.tls}://${link}${item.port ? ':' + item.port : ''}`;
            }
            window.open(item, '_blank');
        } else {
            this.service.navigate(['zones', encodeURIComponent(item.id)]);
        }
    }
}
