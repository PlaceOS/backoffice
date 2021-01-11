import { Component, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlaceDriverRole, queryDrivers, queryEdges, querySystems } from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';
import { map } from 'rxjs/operators';

@Component({
    selector: 'module-form',
    templateUrl: './module-form.component.html',
    styleUrls: ['./module-form.component.scss']
})
export class ModuleFormComponent extends BaseClass implements OnDestroy {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** Whether system is readonly */
    @Input() public readonly: boolean;

    public readonly driver_query_fn = (_: string) => queryDrivers({ q: _ } as any).pipe(map(resp => resp.data));

    public readonly system_query_fn = (_: string) => querySystems({ q: _ }).pipe(map(resp => resp.data));

    public readonly edge_query_fn = (_: string) => queryEdges({ q: _ }).pipe(map(resp => resp.data));

    /** Role of the selected driver */
    public get role(): string {
        const role = this.form.controls.driver?.value.role || this.form.controls.role.value;
        switch (role) {
            case PlaceDriverRole.SSH:
                return 'ssh';
            case PlaceDriverRole.Device:
                return 'device';
            case PlaceDriverRole.Service:
                return 'service';
            case PlaceDriverRole.Websocket:
                return 'websocket';
        }
        return 'logic';
    }
}
