import { Component, Input, OnDestroy } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import {
    PlaceDriverRole,
    queryDrivers,
    queryEdges,
    querySystems,
} from '@placeos/ts-client';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { map } from 'rxjs/operators';

@Component({
    selector: 'module-form',
    template: `
        <form module *ngIf="form" class="flex flex-col" [formGroup]="form">
            <div
                class="field"
                *ngIf="form.controls.driver && !form.controls.id.value"
            >
                <label
                    for="driver"
                    [class.error]="
                        form.controls.driver.invalid &&
                        form.controls.driver.touched
                    "
                >
                    {{ 'DRIVERS.SINGULAR' | translate }}<span>*</span>:
                </label>
                <item-search-field
                    name="driver"
                    [query_fn]="driver_query_fn"
                    formControlName="driver"
                ></item-search-field>
                <div
                    class="error"
                    *ngIf="
                        form.controls.driver.invalid &&
                        form.controls.driver.touched
                    "
                >
                    {{ 'MODULES.DRIVER_REQUIRED' | translate }}
                </div>
            </div>
            <ng-container
                *ngIf="!form.controls.driver || form.controls.driver.value"
            >
                <div
                    class="field"
                    *ngIf="form.controls.system && role === 'logic'"
                >
                    <label
                        for="system"
                        [class.error]="
                            form.controls.system.invalid &&
                            form.controls.system.touched
                        "
                    >
                        {{ 'MODULES.CONTROL_SYSTEM' | translate }}
                        <span *ngIf="role === 'logic'">*</span>:
                    </label>
                    <ng-container *ngIf="!readonly; else readonly_system">
                        <item-search-field
                            name="system"
                            [query_fn]="system_query_fn"
                            formControlName="system"
                        ></item-search-field>
                        <div
                            class="error"
                            *ngIf="
                                form.controls.system.invalid &&
                                form.controls.system.touched
                            "
                        >
                            {{ 'MODULES.SYSTEM_REQUIRED' | translate }}
                        </div>
                    </ng-container>
                    <ng-template #readonly_system>
                        <div class="value">
                            {{ form.controls.system.value?.name }}
                            <span>{{ form.controls.system.value?.id }}</span>
                        </div>
                    </ng-template>
                </div>
                <div
                    class="field"
                    *ngIf="
                        form.controls.uri &&
                        (role === 'service' || role === 'websocket')
                    "
                >
                    <label
                        for="uri"
                        [class.error]="
                            form.controls.uri.invalid &&
                            form.controls.uri.touched
                        "
                    >
                        {{ 'MODULES.URI' | translate }}<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="uri"
                            [placeholder]="'MODULES.URI' | translate"
                            formControlName="uri"
                        />
                        <mat-error>{{
                            'MODULES.URI_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="fieldset">
                    <div
                        class="field"
                        *ngIf="
                            form.controls.ip &&
                            !(role === 'service' || role === 'websocket')
                        "
                    >
                        <label
                            for="ip"
                            [class.error]="
                                form.controls.ip.invalid &&
                                form.controls.ip.touched
                            "
                        >
                            {{ 'MODULES.FIELD_IP' | translate }}
                            <span *ngIf="role === 'ssh' || role === 'device'"
                                >*</span
                            >:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="ip"
                                placeholder="IP Address"
                                formControlName="ip"
                            />
                            <mat-error *ngIf="form.controls.ip.invalid">
                                {{ 'MODULES.IP_REQUIRED' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                    <div
                        class="field"
                        *ngIf="
                            form.controls.port &&
                            !(role === 'service' || role === 'websocket')
                        "
                    >
                        <label
                            for="port-number"
                            [class.error]="
                                form.controls.port.invalid &&
                                form.controls.port.touched
                            "
                        >
                            {{ 'MODULES.PORT_NUMBER' | translate
                            }}<span *ngIf="role === 'ssh' || role === 'device'"
                                >*</span
                            >:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="port-number"
                                type="number"
                                [placeholder]="
                                    'MODULES.PORT_NUMBER' | translate
                                "
                                formControlName="port"
                            />
                            <mat-error *ngIf="form.controls.port.invalid">
                                {{ 'MODULES.PORT_REQUIRED' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex items-center flex-wrap mb-4 -mx-2">
                    <settings-toggle
                        *ngIf="
                            form.controls.tls &&
                            !(role === 'service' || role === 'websocket')
                        "
                        class="min-w-[40%] flex-1 max-w-1/2 m-2"
                        [name]="'COMMON.TLS' | translate"
                        formControlName="tls"
                    ></settings-toggle>
                    <settings-toggle
                        *ngIf="
                            form.controls.udp &&
                            !(role === 'service' || role === 'websocket')
                        "
                        class="min-w-[40%] flex-1 max-w-1/2 m-2"
                        [name]="'COMMON.UDP' | translate"
                        formControlName="udp"
                    ></settings-toggle>
                    <settings-toggle
                        *ngIf="form.controls.makebreak && role !== 'logic'"
                        class="min-w-[40%] flex-1 max-w-1/2 m-2"
                        [name]="'MODULES.MAKEBREAK' | translate"
                        formControlName="makebreak"
                    ></settings-toggle>
                    <settings-toggle
                        *ngIf="
                            form.controls.ignore_connected && role !== 'logic'
                        "
                        class="min-w-[40%] flex-1 max-w-1/2 m-2"
                        [name]="'MODULES.IGNORE_CONNECTED' | translate"
                        formControlName="ignore_connected"
                    ></settings-toggle>
                </div>
                <div class="field" *ngIf="form.controls.notes">
                    <label for="notes">{{ 'COMMON.NOTES' | translate }}:</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            name="notes"
                            [placeholder]="'COMMON.NOTES' | translate"
                            formControlName="notes"
                        ></textarea>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.custom_name">
                    <label for="custom-name">
                        {{ 'MODULES.CUSTOM_NAME' | translate }}:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="custom-name"
                            [placeholder]="'MODULES.CUSTOM_NAME' | translate"
                            formControlName="custom_name"
                        />
                    </mat-form-field>
                </div>
                <div
                    class="field"
                    *ngIf="form.controls.edge && !form.controls.id.value"
                >
                    <label for="driver">
                        {{ 'COMMON.EDGE' | translate }}:
                    </label>
                    <item-search-field
                        [placeholder]="'COMMON.EDGE_SEARCH' | translate"
                        [query_fn]="edge_query_fn"
                        formControlName="edge"
                    ></item-search-field>
                </div>
            </ng-container>
        </form>
    `,
    styles: [``],
})
export class ModuleFormComponent extends AsyncHandler implements OnDestroy {
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;
    /** Whether system is readonly */
    @Input() public readonly: boolean;

    public readonly driver_query_fn = (_: string) =>
        queryDrivers({ q: _ } as any).pipe(map((resp) => resp.data));

    public readonly system_query_fn = (_: string) =>
        querySystems({ q: _ }).pipe(map((resp) => resp.data));

    public readonly edge_query_fn = (_: string) =>
        queryEdges({ q: _ }).pipe(map((resp) => resp.data));

    /** Role of the selected driver */
    public get role(): string {
        const role =
            this.form.controls.driver?.value.role ||
            this.form.controls.role.value;
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
