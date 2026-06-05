import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { authority } from '@placeos/ts-client';
import { SimpleTableComponent } from '../../ui/simple-table.component';
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
                            [ngModel]="domain()"
                            (ngModelChange)="setDomain($event)"
                            placeholder="Select Domain..."
                        >
                            @for (domain of domain_list(); track domain.id) {
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
                    [class.opacity-0]="loading() !== true"
                ></mat-progress-bar>
                <simple-table
                    class="mb-4 block min-w-4xl text-sm"
                    [data]="templates"
                    [columns]="[]"
                ></simple-table>
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        SimpleTableComponent,
        MatProgressBarModule,
        CommonModule,
        RouterModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
    ],
})
export class EmailTemplatesComponent implements OnInit {
    private _service = inject(EmailStateService);

    public readonly loading = this._service.loading;
    public readonly domain = this._service.domain;
    public readonly domain_list = this._service.domain_list;
    public readonly templates = this._service.templates;

    public readonly setDomain = (d) => this._service.setDomain(d);

    public async ngOnInit() {
        const domain = authority();
        const domain_list = this.domain_list();
        if (!domain_list?.length) return;
        const match = domain_list.find((d) => d.id === domain.id);
        if (match) this._service.setDomain(match);
        console.log(this.templates());
    }
}
