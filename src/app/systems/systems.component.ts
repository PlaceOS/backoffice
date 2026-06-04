import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { PlaceSystem } from '@placeos/ts-client';
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
import { SystemStateService } from './system-state.service';

@Component({
    selector: 'new-systems-view',
    template: `
        <div
            class="divide-base-200 bg-base-100 absolute inset-0 flex items-center divide-y sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="flex h-px flex-1">
                    <item-sidebar
                        class="hidden sm:block"
                        [title]="'SYSTEMS.PLURAL' | translate"
                    ></item-sidebar>
                    <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                        <item-selection
                            [title]="'SYSTEMS.PLURAL' | translate"
                            class="z-20 sm:hidden"
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
                                    [type]="'SYSTEMS.SINGULAR' | translate"
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
                        <button
                            class="border-base-200 bg-secondary text-secondary-content absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border shadow-sm sm:-left-9"
                            [matTooltip]="'SYSTEMS.NEW' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="newItem()"
                        >
                            <icon class="text-3xl">add</icon>
                        </button>
                        <button
                            class="border-base-200 bg-secondary text-secondary-content absolute bottom-16 left-2 z-30 flex h-10 w-10 items-center justify-center rounded-lg border shadow-sm sm:-left-8"
                            [matTooltip]="'SYSTEMS.BULK' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="bulkAdd()"
                        >
                            <icon class="text-2xl">playlist_add</icon>
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
        DebugOutputComponent,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        TranslatePipe,
        ItemTablistComponent,
        ItemDetailsComponent,
        ItemDetailsSkeletonComponent,
        ItemSelectionComponent,
        ItemSidebarComponent,
        SidebarMenuComponent,
        RouterModule,
    ],
})
export class SystemsComponent {
    protected _service = inject(SystemStateService);
    private _item = inject(ActiveItemService);
    private _debug = inject(PlaceDebugService);

    public readonly item = toSignal(
        this._item.active_item$.pipe(map((item) => item as PlaceSystem)),
        { initialValue: null as PlaceSystem | null },
    );
    public readonly loading = toSignal(this._item.loading, {
        initialValue: false,
    });
    public readonly open_menu = signal(false);
    public readonly name = 'systems';
    public readonly scroll = signal(0);
    public readonly counts = toSignal(this._service.counts, {
        initialValue: {} as Record<string, number>,
    });
    public readonly extensions = computed(() =>
        extensionsForItem(this.item(), this.name),
    );
    public readonly tab_list = computed(
        () =>
            ([
                {
                    id: 'about',
                    name: i18n('SYSTEMS.TAB_ABOUT'),
                    icon: { content: 'info' },
                },
                {
                    id: 'modules',
                    name: i18n('SYSTEMS.TAB_MODULES'),
                    count: this.counts()?.devices ?? '?',
                    icon: { content: 'tablet' },
                },
                {
                    id: 'zones',
                    name: i18n('SYSTEMS.TAB_ZONES'),
                    count: this.counts()?.zones ?? '?',
                    icon: { content: 'layers' },
                },
                {
                    id: 'triggers',
                    name: i18n('SYSTEMS.TAB_TRIGGERS'),
                    count: this.counts()?.triggers ?? '?',
                    icon: { content: 'timer' },
                },
                {
                    id: 'metadata',
                    name: i18n('SYSTEMS.TAB_METADATA'),
                    count: this.counts()?.metadata ?? '?',
                    icon: { content: 'code_blocks' },
                },
                {
                    id: 'history',
                    name: i18n('SYSTEMS.TAB_SETTINGS_HISTORY'),
                    icon: { content: 'schedule' },
                },
            ] as ItemTab[]).concat(this.extensions()),
    );
    public readonly debug_position = this._debug.position;
    public readonly newItem = () => this._item.create();
    public readonly bulkAdd = () => this._item.bulkAdd();
}
