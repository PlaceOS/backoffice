
import { Component, Input, OnChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { BaseComponent } from '../../../shared/components/base.component';
import { AppService } from '../../../services/app.service';
import { IEngineSystem } from '../../../services/data/systems.service';
import { ContextMenuComponent } from '../../../shared/components/context-menu/context-menu.component';
import { IEngineModule } from '../../../services/data/modules.service';

@Component({
    selector: 'system-devices',
    templateUrl: './system-devices.template.html',
    styleUrls: ['./system-devices.styles.scss']
})
export class SystemDevicesComponent extends BaseComponent implements OnChanges {
    @Input() public item: IEngineSystem;

    public model: any = {};

    public context_menu = ContextMenuComponent;

    constructor(private service: AppService) {
        super();
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.load();
        }
    }

    public load(offset: number = 0) {
        this.service.Modules.query({ sys_id: this.item.id, offset }).then((list) => {
            this.model.devices = list;
        }, () => null);
    }

    public goto(item, link?: string) {
        if (link) {
            if (link.indexOf('http://') < 0 && link.indexOf('https://') < 0) {
                link = `http${item.tls}://${link}${item.port ? ':' + item.port : ''}`;
            }
            window.open(item, '_blank');
        } else {
            this.service.navigate(['devices', encodeURIComponent(item.id), 'systems']);
        }
    }

    public event(e, device) {
        if (e.value) {
            switch (e.value.id) {
                case 'power':
                    this.power(device);
                    break;
                case 'state':
                    this.viewState(device);
                    break;
                case 'reload':
                    this.reloadModule(device);
                    break;
                case 'remove':
                    this.remove(device);
                    break;
            }
        }
    }

    public power(device: IEngineModule) {
        if (device.running) {
            this.service.Modules.stop(device.id).then(() => {
                this.service.success('Module successfully stopped');
                this.reload(device);
            }, (err) => {
                if (typeof err === 'string' && err.length < 64) {
                    this.service.error(err);
                } else {
                    this.service.error(`Failed to stop device '${device.id}'.<br>View Error?`, 'View', () => {
                        // console.log('View error:', err);
                    });
                }
            });
        } else {
            this.service.Modules.start(device.id).then(() => {
                this.service.success('Module successfully stopped');
                this.reload(device);
            }, (err) => {
                if (typeof err === 'string' && err.length < 64) {
                    this.service.error(err);
                } else {
                    this.service.error(`Failed to stop device '${device.id}'.<br>View Error?`, 'View', () => {
                        // console.log('View error:', err);
                    });
                }
            });
        }
    }

    public reload(device: IEngineModule) {
        this.service.Modules.show(device.id).then((item) => {
            for (const k in item) {
                if (item.hasOwnProperty(k)) {
                    device[k] = item[k];
                }
            }
        }, () => null);
    }

    public viewState(device: IEngineModule) {
        this.service.Overlay.openModal('view-module-state', { data: { system: this.item, module: device } }, (e) => {
            e.close();
        });
    }

    public reloadModule(device: IEngineModule) {
        this.service.confirm({
            icon: 'refresh',
            title: 'Reload module?',
            message: 'New driver code will be loaded and the device settings will be reloaded.',
            accept: 'Ok',
            cancel: true
        }, (e) => {
            if (e.type === 'Accept') {
                this.service.Drivers.reload(device.dependency.id)
                    .then(
                        (result) => this.service.success(result.message || result),
                        (err) => this.service.error(err.message || err)
                    );
            }
            e.close();
        });
    }

    public drop(event: CdkDragDrop<any[]>) {
        this.service.confirm({
            icon: 'autorenew',
            title: 'Change order?',
            message: 'Are you sure you want to change the module priority?<br>Settings will be updated immediately for the system.',
            accept: 'Ok',
            cancel: true
        }, (e) => {
            if (e.type === 'Accept') {
                const list = JSON.parse(JSON.stringify(this.item.modules));
                moveItemInArray(list, event.previousIndex, event.currentIndex);
                e.data.loading = true;
                this.service.Systems.updateItem(this.item.id, { modules: list })
                    .then(() => {
                        moveItemInArray(this.model.devices, event.previousIndex, event.currentIndex);
                        e.close();
                    }, () => e.data.loading = false);
            } else {
                e.close();
            }
        });
    }

    public remove(device: IEngineModule) {
        this.service.confirm({
            icon: 'delete',
            title: 'Remove module?',
            message: `Remove ${device.dependency.module_name} from this system?<br>If this is not used elsewhere the associated data will be removed immediately.`,
            accept: 'Ok',
            cancel: true
        }, (e) => {
            if (e.type === 'Accept') {

            }
            e.close();
        });
    }


}
