
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { EngineSystem, EngineModule } from '@acaprojects/ts-composer';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { ContextMenuComponent } from '../../../shared/components/context-menu/context-menu.component';

@Component({
    selector: 'system-devices',
    templateUrl: './system-devices.template.html',
    styleUrls: ['./system-devices.styles.scss']
})
export class SystemDevicesComponent extends BaseDirective implements OnInit, OnChanges {
    @Input() public item: EngineSystem;

    public model: any = {};

    public context_menu = ContextMenuComponent;

    constructor(private service: ApplicationService) {
        super();
    }

    public ngOnInit(): void {
        this.model.module_service = this.service.Modules;
        if (this.service.Nodes.list.length <= 0) {
            this.service.Nodes.query();
        }
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.load();
        }
    }

    public load(offset: number = 0) {
        this.service.Modules.query({ system_id: this.item.id, offset }).then((list) => {
            list.sort((a, b) => this.item.modules.indexOf(a.id) - this.item.modules.indexOf(b.id));
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

    public power(device: EngineModule) {
        if (device.running) {
            this.service.Modules.stop(device.id).then(() => {
                this.service.notifySuccess('Module successfully stopped');
                this.reload(device);
            }, (err) => {
                if (typeof err === 'string' && err.length < 64) {
                    this.service.notifyError(err);
                } else {
                    this.service.notifyError(`Failed to stop device '${device.id}'.<br>View Error?`, 'View', () => {
                        // console.log('View error:', err);
                    });
                }
            });
        } else {
            this.service.Modules.start(device.id).then(() => {
                this.service.notifySuccess('Module successfully stopped');
                this.reload(device);
            }, (err) => {
                if (typeof err === 'string' && err.length < 64) {
                    this.service.notifyError(err);
                } else {
                    this.service.notifyError(`Failed to stop device '${device.id}'.<br>View Error?`, 'View', () => {
                        // console.log('View error:', err);
                    });
                }
            });
        }
    }

    public reload(device: EngineModule) {
        this.service.Modules.show(device.id).then((item) => {
            for (const k in item) {
                if (item.hasOwnProperty(k)) {
                    device[k] = item[k];
                }
            }
        }, () => null);
    }

    public viewState(device: EngineModule) {
        this.service.Overlay.open('view-module-state', { data: { system: this.item, module: device } }, (e) => {
            e.close();
        });
    }

    public reloadModule(device: EngineModule) {
        this.service.Overlay.open('confirm', {
            data: {
                icon: 'refresh',
                title: 'Reload module?',
                message: 'New driver code will be loaded and the device settings will be reloaded.',
                accept: 'Ok',
                cancel: true
            }
        }, (e) => {
            if (e.type === 'Accept') {
                this.service.Drivers.reload(device.dependency_id)
                    .then(
                        (result) => this.service.notifySuccess('Driver successfully reloaded.'),
                        (err) => this.service.notifyError(err.message || err)
                    );
            }
            e.close();
        });
    }

    public drop(event: CdkDragDrop<any[]>) {
        if (event && event.previousIndex !== event.currentIndex) {
            this.service.Overlay.open('confirm', {
                data: {
                    icon: 'autorenew',
                    title: 'Change order?',
                    message: 'Are you sure you want to change the module priority?<br>Settings will be updated immediately for the system.',
                    accept: 'Ok',
                    cancel: true
                }
            }, (e) => {
                if (e.type === 'Accept') {
                    const list: string[] = [];
                    for (const item of this.model.devices) { list.push(item.id); }
                    moveItemInArray(list, event.previousIndex, event.currentIndex);
                    e.data.loading = true;
                    this.service.Systems.update(this.item.id, { modules: list })
                        .then(() => {
                            moveItemInArray(this.model.devices, event.previousIndex, event.currentIndex);
                            moveItemInArray(this.item.modules, event.previousIndex, event.currentIndex);
                            e.close();
                        }, () => e.data.loading = false);
                } else {
                    e.close();
                }
            });
        }
    }

    public remove(device: EngineModule) {
        this.service.Overlay.open('confirm', {
            data: {
                icon: 'delete',
                title: 'Remove module?',
                message: `Remove ${device.dependency_id} from this system?<br>If this is not used elsewhere the associated data will be removed immediately.`,
                accept: 'Ok',
                cancel: true
            }
        }, (e) => {
            if (e.type === 'Accept') {

            }
            e.close();
        });
    }

    public newDevice() {
        this.service.Modules.add({
            control_system: this.item,
            edge: this.service.Nodes.item(this.item.edge_id)
        }).then((item) => {
            console.log('Item:', item);
            this.service.notifySuccess('Created new device');
            this.joinDevice(item.id);
        }, () => {
            this.service.notifyError('Error creating new device');
        });
    }

    public addDevice() {
        if (this.model.new_module) {
            this.joinDevice(this.model.new_module);
            this.model.new_module = '';
        }
    }

    public joinDevice(id: string) {
        const mod_list = this.item.modules;
        if (mod_list.indexOf(id) < 0) {
            mod_list.push(id);
        }
        const new_item = { ...this.item, modules: mod_list };
        this.service.Systems.update(this.item.id, new_item).then(() => {
            this.service.notifySuccess('Successfully added device to system');
            this.load();
        }, () => {
            this.service.notifyError('Failed to add module to system');
        });
    }
}
