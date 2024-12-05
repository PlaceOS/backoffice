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
        <form
            module
            *ngIf="form"
            class="flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]"
            [formGroup]="form"
        >
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
                    Driver<span>*</span>:
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
                    Driver is required
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
                        >Control System<span *ngIf="role === 'logic'">*</span>:
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
                            Control System is required
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
                        URI<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="uri"
                            placeholder="Module URI"
                            formControlName="uri"
                        />
                        <mat-error>A valid URI is required</mat-error>
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
                            IP Address or FQDN<span
                                *ngIf="role === 'ssh' || role === 'device'"
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
                                A valid IP address is required
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
                            Port Number<span
                                *ngIf="role === 'ssh' || role === 'device'"
                                >*</span
                            >:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="port-number"
                                type="number"
                                placeholder="Port Number"
                                formControlName="port"
                            />
                            <mat-error *ngIf="form.controls.port.invalid">
                                A valid port number between 1 - 65535 is
                                required
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
                        name="TLS"
                        formControlName="tls"
                    ></settings-toggle>
                    <settings-toggle
                        *ngIf="
                            form.controls.udp &&
                            !(role === 'service' || role === 'websocket')
                        "
                        class="min-w-[40%] flex-1 max-w-1/2 m-2"
                        name="UDP"
                        formControlName="udp"
                    ></settings-toggle>
                    <settings-toggle
                        *ngIf="form.controls.makebreak && role !== 'logic'"
                        class="min-w-[40%] flex-1 max-w-1/2 m-2"
                        name="Makebreak"
                        formControlName="makebreak"
                    ></settings-toggle>
                    <settings-toggle
                        *ngIf="
                            form.controls.ignore_connected && role !== 'logic'
                        "
                        class="min-w-[40%] flex-1 max-w-1/2 m-2"
                        name="Ignore Connected"
                        formControlName="ignore_connected"
                    ></settings-toggle>
                </div>
                <div class="field" *ngIf="form.controls.notes">
                    <label for="notes">Notes:</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            name="notes"
                            placeholder="Module Notes"
                            i18n-placholder="@@notePlaceholder"
                            formControlName="notes"
                        ></textarea>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.custom_name">
                    <label for="custom-name">Custom Name:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="custom-name"
                            placeholder="Custom Name"
                            i18n-placholder="@@customNamePlaceholder"
                            formControlName="custom_name"
                        />
                    </mat-form-field>
                </div>
                <div
                    class="field"
                    *ngIf="form.controls.edge && !form.controls.id.value"
                >
                    <label for="driver"> Edge: </label>
                    <item-search-field
                        name="edge"
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
