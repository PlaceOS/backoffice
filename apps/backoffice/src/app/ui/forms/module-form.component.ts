import { Component, OnDestroy, input } from '@angular/core';
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
        @if (form()) {
            <form module class="flex flex-col" [formGroup]="form()">
                @if (form().controls.driver && !form().controls.id.value) {
                    <div class="field">
                        <label
                            for="driver"
                            [class.error]="
                                form().controls.driver.invalid &&
                                form().controls.driver.touched
                            "
                        >
                            {{ 'DRIVERS.SINGULAR' | translate }}<span>*</span>
                        </label>
                        <item-search-field
                            name="driver"
                            [query_fn]="driver_query_fn"
                            formControlName="driver"
                        ></item-search-field>
                        @if (
                            form().controls.driver.invalid &&
                            form().controls.driver.touched
                        ) {
                            <div class="error">
                                {{ 'MODULES.DRIVER_REQUIRED' | translate }}
                            </div>
                        }
                    </div>
                }
                @if (!form().controls.driver || form().controls.driver.value) {
                    @if (form().controls.system && role === 'logic') {
                        <div class="field">
                            <label
                                for="system"
                                [class.error]="
                                    form().controls.system.invalid &&
                                    form().controls.system.touched
                                "
                            >
                                {{ 'MODULES.CONTROL_SYSTEM' | translate }}
                                @if (role === 'logic') {
                                    <span>*</span>
                                }
                            </label>
                            @if (!readonly()) {
                                <item-search-field
                                    name="system"
                                    [query_fn]="system_query_fn"
                                    formControlName="system"
                                ></item-search-field>
                                @if (
                                    form().controls.system.invalid &&
                                    form().controls.system.touched
                                ) {
                                    <div class="error">
                                        {{
                                            'MODULES.SYSTEM_REQUIRED'
                                                | translate
                                        }}
                                    </div>
                                }
                            } @else {
                                <div class="value">
                                    {{ form().controls.system.value?.name }}
                                    <span>{{
                                        form().controls.system.value?.id
                                    }}</span>
                                </div>
                            }
                        </div>
                    }
                    @if (
                        form().controls.uri &&
                        (role === 'service' || role === 'websocket')
                    ) {
                        <div class="field">
                            <label
                                for="uri"
                                [class.error]="
                                    form().controls.uri.invalid &&
                                    form().controls.uri.touched
                                "
                            >
                                {{ 'MODULES.URI' | translate }}<span>*</span>
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
                    }
                    <div class="fieldset">
                        @if (
                            form().controls.ip &&
                            !(role === 'service' || role === 'websocket')
                        ) {
                            <div class="field">
                                <label
                                    for="ip"
                                    [class.error]="
                                        form().controls.ip.invalid &&
                                        form().controls.ip.touched
                                    "
                                >
                                    {{ 'MODULES.FIELD_IP' | translate }}
                                    @if (role === 'ssh' || role === 'device') {
                                        <span> * </span>
                                    }
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="ip"
                                        placeholder="IP Address"
                                        formControlName="ip"
                                    />
                                    @if (form().controls.ip.invalid) {
                                        <mat-error>
                                            {{
                                                'MODULES.IP_REQUIRED'
                                                    | translate
                                            }}
                                        </mat-error>
                                    }
                                </mat-form-field>
                            </div>
                        }
                        @if (
                            form().controls.port &&
                            !(role === 'service' || role === 'websocket')
                        ) {
                            <div class="field">
                                <label
                                    for="port-number"
                                    [class.error]="
                                        form().controls.port.invalid &&
                                        form().controls.port.touched
                                    "
                                >
                                    {{ 'MODULES.PORT_NUMBER' | translate }}
                                    @if (role === 'ssh' || role === 'device') {
                                        <span> * </span>
                                    }
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
                                    @if (form().controls.port.invalid) {
                                        <mat-error>
                                            {{
                                                'MODULES.PORT_REQUIRED'
                                                    | translate
                                            }}
                                        </mat-error>
                                    }
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    <div class="-mx-2 mb-4 flex flex-wrap items-center">
                        @if (
                            form().controls.tls &&
                            !(role === 'service' || role === 'websocket')
                        ) {
                            <settings-toggle
                                class="max-w-1/2 m-2 min-w-[40%] flex-1"
                                [name]="'COMMON.TLS' | translate"
                                formControlName="tls"
                            ></settings-toggle>
                        }
                        @if (
                            form().controls.udp &&
                            !(role === 'service' || role === 'websocket')
                        ) {
                            <settings-toggle
                                class="max-w-1/2 m-2 min-w-[40%] flex-1"
                                [name]="'COMMON.UDP' | translate"
                                formControlName="udp"
                            ></settings-toggle>
                        }
                        @if (form().controls.makebreak && role !== 'logic') {
                            <settings-toggle
                                class="max-w-1/2 m-2 min-w-[40%] flex-1"
                                [name]="'MODULES.MAKEBREAK' | translate"
                                formControlName="makebreak"
                            ></settings-toggle>
                        }
                        @if (
                            form().controls.ignore_connected && role !== 'logic'
                        ) {
                            <settings-toggle
                                class="max-w-1/2 m-2 min-w-[40%] flex-1"
                                [name]="'MODULES.IGNORE_CONNECTED' | translate"
                                formControlName="ignore_connected"
                            ></settings-toggle>
                        }
                    </div>
                    @if (form().controls.notes) {
                        <div class="field">
                            <label for="notes">{{
                                'COMMON.NOTES' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <textarea
                                    matInput
                                    name="notes"
                                    [placeholder]="'COMMON.NOTES' | translate"
                                    formControlName="notes"
                                ></textarea>
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.custom_name) {
                        <div class="field">
                            <label for="custom-name">
                                {{ 'MODULES.CUSTOM_NAME' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="custom-name"
                                    [placeholder]="
                                        'MODULES.CUSTOM_NAME' | translate
                                    "
                                    formControlName="custom_name"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.edge && !form().controls.id.value) {
                        <div class="field">
                            <label for="driver">
                                {{ 'COMMON.EDGE' | translate }}
                            </label>
                            <item-search-field
                                [placeholder]="'COMMON.EDGE_SEARCH' | translate"
                                [query_fn]="edge_query_fn"
                                formControlName="edge"
                            ></item-search-field>
                        </div>
                    }
                }
            </form>
        }
    `,
    styles: [``],
    standalone: false,
})
export class ModuleFormComponent extends AsyncHandler implements OnDestroy {
    /** Group of form fields used for creating the system */
    public readonly form = input<UntypedFormGroup>(undefined);
    /** Whether system is readonly */
    public readonly readonly = input<boolean>(undefined);

    public readonly driver_query_fn = (_: string) =>
        queryDrivers({ q: _ } as any).pipe(map((resp) => resp.data));

    public readonly system_query_fn = (_: string) =>
        querySystems({ q: _ }).pipe(map((resp) => resp.data));

    public readonly edge_query_fn = (_: string) =>
        queryEdges({ q: _ }).pipe(map((resp) => resp.data));

    /** Role of the selected driver */
    public get role(): string {
        const form = this.form();
        const role =
            form.controls.driver?.value.role ||
            form.controls.role.value;
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
