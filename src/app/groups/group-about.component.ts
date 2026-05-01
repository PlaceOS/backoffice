import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import {
    PlaceDomain,
    PlaceGroup,
    showDomain,
    showGroup,
} from '@placeos/ts-client';
import { marked } from 'marked';
import { lastValueFrom } from 'rxjs';
import { DateFromPipe } from '../ui/pipes/date-from.pipe';
import { SanitizePipe } from '../ui/pipes/sanitise.pipe';
import { TranslatePipe } from '../ui/translate.pipe';
import { GroupStateService } from './group-state.service';

@Component({
    selector: 'group-about',
    template: `
        <section class="mb-4 flex flex-col gap-4 p-4 md:flex-row">
            <div class="w-full">
                <div
                    class="border-base-200 grid gap-2 rounded-sm border p-4"
                    [style.gridTemplateColumns]="'8rem auto'"
                >
                    @if (item()?.authority_id) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'GROUPS.AUTHORITY_ID' | translate }}
                        </div>
                        <a
                            class="text-sm underline"
                            [routerLink]="[
                                '/domains',
                                item()?.authority_id,
                                'about',
                            ]"
                        >
                            {{ authority()?.name || item()?.authority_id }}
                        </a>
                    }
                    @if (item()?.parent_id) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'GROUPS.PARENT_ID' | translate }}
                        </div>
                        <a
                            class="text-sm underline"
                            [routerLink]="[
                                '/groups',
                                item()?.parent_id,
                                'about',
                            ]"
                        >
                            {{ parent()?.name || item()?.parent_id }}
                        </a>
                    }
                    <div class="flex items-center text-sm font-medium">
                        {{ 'GROUPS.SUBSYSTEMS' | translate }}
                    </div>
                    <div class="-mx-1 flex flex-1 flex-wrap">
                        @for (
                            subsystem of item()?.subsystems || [];
                            track subsystem
                        ) {
                            <div
                                class="mono bg-base-200 m-1 h-6 rounded-sm px-2 py-1 text-[0.625rem]"
                            >
                                {{ subsystem }}
                            </div>
                        }
                        @if (!item()?.subsystems?.length) {
                            <span class="opacity-30">{{
                                'GROUPS.SUBSYSTEMS_EMPTY' | translate
                            }}</span>
                        }
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'GROUPS.CHILDREN_COUNT' | translate }}
                    </div>
                    <div>{{ item()?.children_count || 0 }}</div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.CREATED_AT' | translate }}
                    </div>
                    <div class="flex items-center">
                        <span [matTooltip]="item()?.created_at">
                            {{ created_at() * 1000 | dateFrom }}
                        </span>
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.UPDATED_AT' | translate }}
                    </div>
                    <div class="flex items-center">
                        <span [matTooltip]="item()?.updated_at">
                            {{ updated_at() * 1000 | dateFrom }}
                        </span>
                    </div>
                </div>
            </div>
        </section>
        @if (item()?.description) {
            <div class="border-base-200 w-full rounded-sm border">
                <h3
                    class="bg-base-200 w-full rounded-sm p-4 text-lg font-medium"
                >
                    {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                </h3>
                <div
                    class="markdown w-full overflow-auto p-4 text-sm"
                    [innerHTML]="description() | sanitize"
                ></div>
            </div>
        }
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatTooltipModule,
        TranslatePipe,
        DateFromPipe,
        SanitizePipe,
        RouterModule,
    ],
})
export class GroupAboutComponent {
    private _service = inject(GroupStateService);

    public readonly item = toSignal(this._service.item, {
        initialValue: null as PlaceGroup | null,
    });
    public readonly parent = signal<PlaceGroup | null>(null);
    public readonly authority = signal<PlaceDomain | null>(null);
    public readonly created_at = computed(
        () => Date.parse(this.item()?.created_at || '') / 1000,
    );
    public readonly updated_at = computed(
        () => Date.parse(this.item()?.updated_at || '') / 1000,
    );
    public readonly description = computed(
        () =>
            marked(this.item()?.description || '', { async: false }) as string,
    );

    constructor() {
        effect(() => {
            const authority_id = this.item()?.authority_id;
            this.authority.set(null);
            if (authority_id) void this.loadAuthority(authority_id);
        });
        effect(() => {
            const parent_id = this.item()?.parent_id;
            this.parent.set(null);
            if (parent_id) void this.loadParent(parent_id);
        });
    }

    private async loadAuthority(authority_id: string) {
        const authority = await lastValueFrom(showDomain(authority_id)).catch(
            () => null,
        );
        if (this.item()?.authority_id === authority_id) {
            this.authority.set(authority);
        }
    }

    private async loadParent(parent_id: string) {
        const parent = await lastValueFrom(showGroup(parent_id)).catch(
            () => null,
        );
        if (this.item()?.parent_id === parent_id) this.parent.set(parent);
    }
}
