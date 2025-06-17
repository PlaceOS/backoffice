import { Component, OnInit } from '@angular/core';
import { authority } from '@placeos/ts-client';
import { nextValueFrom } from '../../common/general';
import { EmailStateService } from './email-state.service';

@Component({
    selector: 'email-templates',
    template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2">
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
                            @for (domain of domain_list | async; track domain) {
                                <mat-option [value]="domain">
                                    {{ domain.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <a
                        btn
                        matRipple
                        class="w-40"
                        [routerLink]="['/admin', 'mailing-list', 'edit']"
                    >
                        Add Template
                    </a>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="sticky left-0 w-full"
                    [class.opacity-0]="!(loading | async)"
                ></mat-progress-bar>
                <simple-table
                    class="mb-4 block min-w-[56rem] text-sm"
                    [data]="templates"
                    [columns]="[]"
                ></simple-table>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class EmailTemplatesComponent implements OnInit {
    public readonly loading = this._service.loading;
    public readonly domain = this._service.domain;
    public readonly domain_list = this._service.domain_list;
    public readonly templates = this._service.templates;

    public readonly setDomain = (d) => this._service.setDomain(d);

    constructor(private _service: EmailStateService) {}

    public async ngOnInit() {
        const domain = authority();
        const domain_list = await nextValueFrom(this.domain_list);
        if (!domain_list?.length) return;
        const match = domain_list.find((d) => d.id === domain.id);
        if (match) this._service.setDomain(match);
        this.templates.subscribe((_) => console.log(_));
    }
}
