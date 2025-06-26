import { Component, inject, signal } from '@angular/core';
import { PlaceSystem } from '@placeos/ts-client';
import { extensionsForItem } from '../common/api';
import { AsyncHandler } from '../common/async-handler.class';
import { PlaceDebugService } from '../common/debug.service';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { SystemStateService } from './system-state.service';

@Component({
    selector: 'new-systems-view',
    template: `
        <div
            class="absolute inset-0 flex items-center divide-y divide-base-200 bg-base-100 sm:divide-x sm:divide-y-0"
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
                                (click)="open_menu = true"
                            >
                                <app-icon>menu</app-icon>
                            </button>
                        </item-selection>
                        <div class="flex h-1/2 flex-1 flex-col">
                            @if (item()?.id) {
                                <item-details
                                    [can_edit]="true"
                                    [item]="item()"
                                    [type]="'SYSTEMS.SINGULAR' | translate"
                                ></item-details>
                                <item-tablist
                                    [base]="name"
                                    [tabs]="tab_list"
                                    [scrolled]="scroll > 0"
                                    class="z-10"
                                ></item-tablist>
                                <div
                                    #el
                                    class="relative z-0 h-1/2 w-full flex-1 overflow-auto p-4"
                                    (scroll)="scroll = el.scrollTop"
                                >
                                    <router-outlet></router-outlet>
                                </div>
                            }
                        </div>
                        <button
                            class="absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-9"
                            [matTooltip]="'SYSTEMS.NEW' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="newItem()"
                        >
                            <app-icon class="text-3xl">add</app-icon>
                        </button>
                        <button
                            class="absolute bottom-16 left-2 z-30 flex h-10 w-10 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-8"
                            [matTooltip]="'SYSTEMS.BULK' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="bulkAdd()"
                        >
                            <app-icon class="text-2xl">playlist_add</app-icon>
                        </button>
                    </div>
                </div>
                @if (debug_position === 'below') {
                    <app-debug-output below></app-debug-output>
                }
            </div>
            @if (debug_position === 'side') {
                <app-debug-output
                    side
                    class="h-full max-w-[30rem]"
                ></app-debug-output>
            }
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class SystemsComponent extends AsyncHandler {
    protected _service = inject(SystemStateService);
    private _item = inject(ActiveItemService);
    private _debug = inject(PlaceDebugService);

    public readonly name = 'systems';
    public open_menu = false;
    public scroll = 0;

    public tab_list = [];

    public readonly newItem = () => this._item.create();
    public readonly bulkAdd = () => this._item.bulkAdd();

    public readonly item = signal<PlaceSystem>(null);

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public get debug_position() {
        return this._debug.position;
    }

    public updateTabList(counts?: Record<string, number>) {
        this.tab_list = [
            {
                id: 'about',
                name: i18n('SYSTEMS.TAB_ABOUT'),
                icon: { content: 'info' },
            },
            {
                id: 'modules',
                name: i18n('SYSTEMS.TAB_MODULES'),
                count: counts?.devices ?? '?',
                icon: { content: 'tablet' },
            },
            {
                id: 'zones',
                name: i18n('SYSTEMS.TAB_ZONES'),
                count: counts?.zones ?? '?',
                icon: { content: 'layers' },
            },
            {
                id: 'triggers',
                name: i18n('SYSTEMS.TAB_TRIGGERS'),
                count: counts?.triggers ?? '?',
                icon: { content: 'timer' },
            },
            {
                id: 'metadata',
                name: i18n('SYSTEMS.TAB_METADATA'),
                count: counts?.metadata ?? '?',
                icon: { content: 'code_blocks' },
            },
            {
                id: 'history',
                name: i18n('SYSTEMS.TAB_SETTINGS_HISTORY'),
                icon: { content: 'schedule' },
            },
        ].concat(this.extensions);
    }

    public ngOnInit(): void {
        this.subscription(
            'item-change',
            this._item.active_item$.subscribe((i) => {
                this.item.set(i as any);
                this.updateTabList({});
            }),
        );
        this.subscription(
            'counts',
            this._service.counts.subscribe((counts) =>
                this.updateTabList(counts),
            ),
        );
    }
}
