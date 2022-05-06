import { Component } from "@angular/core";
import { queryDrivers, queryModules, querySystems, queryZones } from "@placeos/ts-client";
import { MqttDashboardStateService } from "./dashboard-state.service";

@Component({
    selector: 'dashboard-filters',
    template: `
        <div class="flex items-center">
            <item-search-field org ngModel (ngModelChange)="form.patchValue({ org: $event.id })" [query_fn]="findOrg"></item-search-field>
            <item-search-field bld ngModel (ngModelChange)="form.patchValue({ bld: $event.id})" [query_fn]="findBld"></item-search-field>
            <item-search-field lvl ngModel (ngModelChange)="form.patchValue({ lvl: $event.id})" [query_fn]="findLvl"></item-search-field>
            <item-search-field area ngModel (ngModelChange)="form.patchValue({ area: $event.id})" [query_fn]="findArea"></item-search-field>
            <item-search-field sys ngModel (ngModelChange)="form.patchValue({ sys: $event.id})" [query_fn]="findSystem"></item-search-field>
            <item-search-field drv ngModel (ngModelChange)="form.patchValue({ drv: $event.id})" [query_fn]="findDriver"></item-search-field>
            <item-search-field mod ngModel (ngModelChange)="form.patchValue({ mod: $event.id})" [query_fn]="findModule"></item-search-field>
            <item-search-field idx></item-search-field>
            <item-search-field status></item-search-field>
        </div>
    `,
    styles: [``]
})
export class AlertDashboardFiltersComponent {
    public readonly form = this._state.filters;

    public readonly findOrg = (q) => queryZones({ q, tags: 'org' });
    public readonly findBld = (q) => queryZones({ q, tags: 'building' });
    public readonly findLvl = (q) => queryZones({ q, tags: 'level' });
    public readonly findArea = (q) => queryZones({ q, tags: 'level' });
    public readonly findSystem = (q) => querySystems({ q });
    public readonly findDriver = (q) => queryDrivers({  });
    public readonly findModule = (q) => queryModules({ q });

    constructor(private _state: MqttDashboardStateService) {}
}
