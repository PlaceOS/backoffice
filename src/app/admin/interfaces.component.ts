import { Component, OnInit, signal } from '@angular/core';
import { listInterfaceRepositories } from '@placeos/ts-client';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { lastValueFrom } from 'rxjs';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';

@Component({
    selector: 'app-interfaces',
    template: `
        <div class="px-4">
            <div class="my-4 flex items-center justify-between space-x-2">
                <div class="text-2xl">PlaceOS Interfaces</div>
            </div>
            <mat-progress-bar
                mode="indeterminate"
                class="w-full"
                [class.opacity-0]="!loading()"
            />
            <simple-table
                class="block min-w-[36rem] text-sm"
                [data]="interfaces()"
                [columns]="[
                    { key: 'id', name: 'REPOS.SINGULAR' | translate },
                    {
                        key: 'name',
                        name: 'COMMON.GIT_COMMIT' | translate,
                        content: name_template,
                        size: '24rem',
                    },
                ]"
                [sortable]="true"
                empty_message="No interfaces"
            />
            <div class="h-12 w-full"></div>
            <ng-template #name_template let-row="row">
                <div class="p-4">
                    @if (row.name) {
                        <div class="font-mono">{{ row.name }}</div>
                    }
                    @if (!row.name) {
                        <span class="text-xs opacity-30">
                            {{ 'ADMIN.INTERFACES_COMMIT_EMPTY' | translate }}
                        </span>
                    }
                </div>
            </ng-template>
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
            }
        `,
    ],
    imports: [SimpleTableComponent, TranslatePipe, MatProgressBarModule],
})
export class AdminInterfacesComponent implements OnInit {
    /** List of interfaces */
    public readonly loading = signal(false);
    public readonly interfaces = signal<{ id: string; name: string }[]>([]);

    public ngOnInit() {
        this.loadInterfaces();
    }

    public async loadInterfaces() {
        this.loading.set(true);
        const mapping = await lastValueFrom(listInterfaceRepositories());
        const list = Object.keys(mapping).map((id) => ({
            id,
            name: mapping[id],
        }));
        list.sort((a, b) => `${a.id}`?.localeCompare(`${b.id}`));
        this.interfaces.set(list);
        this.loading.set(false);
    }
}
