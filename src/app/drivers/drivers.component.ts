import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { PlaceDriver, queryModules } from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { extensionsForItem } from '../common/api';
import { PlaceDebugService } from '../common/debug.service';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { DebugOutputComponent } from '../ui/debug-output.component';
import { IconComponent } from '../ui/icon.component';
import { ItemDetailsSkeletonComponent } from '../ui/item-details-skeleton.component';
import { ItemDetailsComponent } from '../ui/item-details.component';
import { ItemSelectionComponent } from '../ui/item-selection.component';
import { ItemSidebarComponent } from '../ui/item-sidebar.component';
import { ItemTab, ItemTablistComponent } from '../ui/item-tablist.component';
import { SidebarMenuComponent } from '../ui/sidebar-menu.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { DriverStateService } from './driver-state.service';

@Component({
    selector: 'new-drivers-view',
    template: `
        <div
            class="divide-base-200 bg-base-100 absolute inset-0 flex items-center divide-y sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="flex h-px flex-1">
                    <item-sidebar
                        class="hidden sm:block"
                        [route]="name"
                        [title]="'DRIVERS.PLURAL' | translate"
                    ></item-sidebar>
                    <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                        <item-selection
                            class="z-20 sm:hidden"
                            [route]="name"
                            [title]="'DRIVERS.PLURAL' | translate"
                        >
                            <button
                                btn
                                icon
                                class="mr-2 sm:hidden"
                                (click)="open_menu.set(true)"
                            >
                                <icon>menu</icon>
                            </button>
                        </item-selection>
                        <div class="flex h-1/2 flex-1 flex-col">
                            @if (loading()) {
                                <item-details-skeleton></item-details-skeleton>
                            } @else if (item()?.id) {
                                <item-details
                                    [can_edit]="true"
                                    [item]="item()"
                                    [type]="'DRIVERS.SINGULAR' | translate"
                                ></item-details>
                                <item-tablist
                                    [base]="name"
                                    [tabs]="tab_list()"
                                    [scrolled]="scroll() > 0"
                                    class="z-10"
                                ></item-tablist>
                                <div
                                    #el
                                    class="relative z-0 h-1/2 w-full flex-1 overflow-auto"
                                    (scroll)="scroll.set(el.scrollTop)"
                                >
                                    <router-outlet></router-outlet>
                                </div>
                            }
                        </div>
                        @if (updates_available | async) {
                            <button
                                class="border-base-200 bg-secondary text-secondary-content absolute bottom-16 left-1 z-30 flex h-10 w-10 items-center justify-center rounded-lg border shadow-sm sm:-left-8"
                                [matTooltip]="'DRIVERS.UPDATE' | translate"
                                matTooltipPosition="right"
                                matRipple
                                (click)="showUpdateList()"
                            >
                                <icon class="text-3xl">update</icon>
                            </button>
                        }
                        <button
                            class="border-base-200 bg-secondary text-secondary-content absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border shadow-sm sm:-left-9"
                            [matTooltip]="'DRIVERS.NEW' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="newItem()"
                        >
                            <icon class="text-3xl">add</icon>
                        </button>
                    </div>
                </div>
                @if (debug_position() === 'below') {
                    <app-debug-output below></app-debug-output>
                }
            </div>
            @if (debug_position() === 'side') {
                <app-debug-output
                    side
                    class="h-full max-w-120"
                ></app-debug-output>
            }
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        DebugOutputComponent,
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MatTooltipModule,
        ItemDetailsComponent,
        ItemDetailsSkeletonComponent,
        ItemTablistComponent,
        ItemSelectionComponent,
        ItemSidebarComponent,
        SidebarMenuComponent,
        RouterModule,
    ],
})
export class DriversComponent {
    protected _service = inject(ActiveItemService);
    private _drivers = inject(DriverStateService);
    private _debug = inject(PlaceDebugService);

    public readonly name = 'drivers';
    public readonly item = toSignal(
        this._service.item.pipe(map((item) => item as PlaceDriver)),
        { initialValue: null as PlaceDriver | null },
    );
    public readonly loading = toSignal(this._service.loading, {
        initialValue: false,
    });
    public readonly scroll = signal(0);
    public readonly open_menu = signal(false);
    public readonly device_count = signal(0);
    public readonly docs = toSignal(this._drivers.docs, { initialValue: null });
    public readonly extensions = computed(() =>
        extensionsForItem(this.item(), this.name),
    );
    public readonly tab_list = computed(
        () =>
            ([
                {
                    id: 'about',
                    name: i18n('DRIVERS.TAB_ABOUT'),
                    icon: { content: 'info' },
                },
                ...(this.docs()
                    ? [
                          {
                              id: 'docs',
                              name: i18n('DRIVERS.TAB_DOCS'),
                              icon: { content: 'docs' },
                          },
                      ]
                    : []),
                {
                    id: 'modules',
                    name: i18n('DRIVERS.TAB_MODULES'),
                    count: this.device_count() ?? '?',
                    icon: { content: 'tablet' },
                },
                {
                    id: 'history',
                    name: i18n('DRIVERS.TAB_SETTINGS_HISTORY'),
                    icon: { content: 'schedule' },
                },
            ] as ItemTab[]).concat(this.extensions()),
    );
    public readonly updates_available = this._drivers.updates_available;
    public readonly debug_position = this._debug.position;

    public readonly showUpdateList = () => this._drivers.showUpdateList();
    public readonly newItem = () => this._service.create();

    constructor() {
        effect(() => {
            const item = this.item();
            this.device_count.set(undefined);
            this.loadValues(item);
        });
    }

    protected async loadValues(item: PlaceDriver) {
        if (!item) return;
        const query: Record<string, unknown> = {
            offset: 0,
            limit: 1,
            driver_id: item.id,
        };
        this.device_count.set(
            await lastValueFrom(
                queryModules(query).pipe(map(({ total }) => total)),
            ).catch(() => 0),
        );
    }
}
