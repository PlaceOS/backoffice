
import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';

import { BaseComponent } from '../../../shared/components/base.component';
import { IEngineSystem } from '../../../services/data/systems.service';
import { AppService } from '../../../services/app.service';

@Component({
    selector: 'system-zones',
    templateUrl: './system-zones.template.html',
    styleUrls: ['./system-zones.styles.scss']
})
export class SystemZonesComponent extends BaseComponent implements OnInit, OnChanges {
    @Input() public item: IEngineSystem;
    @Output() public loading = new EventEmitter<boolean | string>();

    public model: any = {};

    constructor(private service: AppService) {
        super();
    }

    public ngOnInit(): void {
        this.model.zone_service = this.service.Zones;
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.load();
        }
    }

    public load(offset: number = 0) {
        this.service.Zones.query({ sys_id: this.item.id, offset }).then((list) => {
            list.sort((a, b) => this.item.zones.indexOf(a.id) - this.item.zones.indexOf(b.id));
            this.model.zones = list;
        }, () => null);
    }

    public drop(event) {
        if (event && event.previousIndex !== event.currentIndex) {
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

    public joinZone() {
        if (this.model.new_zone) {
            if (this.item.zones.indexOf(this.model.new_zone) < 0) {
                const new_list = [ ...this.item.zones, this.model.new_zone ].filter(i => !!i);
                const updated_item = { ...this.item, zones: new_list };
                this.loading.emit(true);
                this.service.confirm({
                    title: 'Add zone',
                    message: `Add zone "${this.model.new_zone}" to system "${this.item.id}"`,
                    icon: 'cloud_upload',
                    accept: 'Ok',
                    cancel: true
                }, (e) => {
                    if (e.type === 'Accept') {
                        this.service.Systems.updateItem(this.item.id, updated_item).then(() => {
                            this.model.new_zone = null;
                            this.loading.emit(false);
                            this.service.success(`Addeed zone "${this.model.new_zone}" to system`);
                            this.item = updated_item;
                            this.load();
                        }, () => {
                            this.loading.emit(false);
                            this.service.error(`Error adding zone "${this.model.new_zone}"`);
                        });
                    } else {
                        this.loading.emit(false);
                    }
                    e.close();
                });
            } else {
                this.service.info('The selected zone is already linked to this system');
            }
        }
    }
}
