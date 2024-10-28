import { Component } from '@angular/core';
import { authority } from '@placeos/ts-client';
import { EmailStateService } from './email-state.service';
import { take } from 'rxjs/operators';

@Component({
    selector: 'email-templates',
    template: `
        <div class="flex flex-col h-full w-full">
            <div class="flex items-center justify-between space-x-2 my-4">
                <div class="text-2xl">Email Template</div>
                <div class="flex items-center space-x-2">
                    <mat-form-field
                        class="no-subscript w-56"
                        appearance="outline"
                    >
                        <mat-select
                            name="type"
                            [ngModel]="domain | async"
                            (ngModelChange)="setDomain($event)"
                            placeholder="Select Domain..."
                        >
                            <mat-option
                                *ngFor="let domain of domain_list | async"
                                [value]="domain"
                            >
                                {{ domain.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        class="w-40"
                        [disabled]="!(domain | async)"
                    >
                        Add Template
                    </button>
                </div>
            </div>
            <div class="flex-1 w-full h-1/2 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="sticky left-0 w-full"
                    [class.opacity-0]="!(loading | async)"
                ></mat-progress-bar>
                <simple-table
                    class="min-w-[56rem] block text-sm mb-4"
                    [data]="templates"
                    [columns]="[]"
                ></simple-table>
            </div>
        </div>
    `,
    styles: [``],
})
export class EmailTemplatesComponent {
    public readonly loading = this._service.loading;
    public readonly domain = this._service.domain;
    public readonly domain_list = this._service.domain_list;
    public readonly templates = this._service.templates;

    public readonly setDomain = (d) => this._service.setDomain(d);

    constructor(private _service: EmailStateService) {}

    public async ngOnInit() {
        const domain = authority();
        const domain_list = await this.domain_list.pipe(take(1)).toPromise();
        if (!domain_list?.length) return;
        const match = domain_list.find((d) => d.id === domain.id);
        if (match) this._service.setDomain(match);
        this.templates.subscribe((_) => console.log(_));
    }
}
