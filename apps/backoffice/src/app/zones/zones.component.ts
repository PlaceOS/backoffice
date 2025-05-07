import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { listZoneTags } from '@placeos/ts-client';
import { shareReplay } from 'rxjs';
import { extensionsForItem } from '../common/api';
import { AsyncHandler } from '../common/async-handler.class';
import { PlaceDebugService } from '../common/debug.service';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { ZonesStateService } from './zones-state.service';

@Component({
    selector: 'new-zones-view',
    template: `
        <div
            class="absolute inset-0 flex items-center divide-y divide-base-200 bg-base-100 sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="flex h-px flex-1">
                    <item-sidebar
                        class="hidden sm:block"
                        [route]="name"
                        [title]="'ZONES.PLURAL' | translate"
                        [filter_options]="zone_tags | async"
                    ></item-sidebar>
                    <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                        <item-selection
                            class="z-20 sm:hidden"
                            [route]="name"
                            [title]="'ZONES.PLURAL' | translate"
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
                            <ng-container *ngIf="item?.id">
                                <item-details
                                    [can_edit]="true"
                                    [item]="item"
                                    [type]="'ZONES.SINGULAR' | translate"
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
                            </ng-container>
                        </div>
                        <button
                            class="absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-9"
                            [matTooltip]="'ZONES.NEW' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="newItem()"
                        >
                            <app-icon class="text-3xl">add</app-icon>
                        </button>
                        <button
                            class="absolute bottom-16 left-2 z-30 flex h-10 w-10 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-8"
                            [matTooltip]="'ZONES.BULK' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="bulkAdd()"
                        >
                            <app-icon class="text-2xl">playlist_add</app-icon>
                        </button>
                    </div>
                </div>
                <app-debug-output
                    below
                    *ngIf="debug_position === 'below'"
                ></app-debug-output>
            </div>
            <app-debug-output
                side
                *ngIf="debug_position === 'side'"
                class="h-full max-w-[30rem]"
            ></app-debug-output>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class ZonesComponent extends AsyncHandler {
    public readonly name = 'zones';
    public open_menu = false;

    public tab_list = [];

    public readonly newItem = () => this._item.create();
    public readonly bulkAdd = () => this._item.bulkAdd();
    public readonly zone_tags = listZoneTags().pipe(shareReplay(1));

    public get item() {
        return this._service.active_item;
    }

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public get debug_position() {
        return this._debug.position;
    }

    public updateTabList(details: Record<string, number>) {
        this.tab_list = [
            {
                id: 'about',
                name: i18n('ZONES.TAB_ABOUT'),
                icon: { content: 'info' },
            },
            {
                id: 'systems',
                name: i18n('ZONES.TAB_SYSTEMS'),
                count: details.systems ?? '?',
                icon: { content: 'meeting_room' },
            },
            {
                id: 'triggers',
                name: i18n('ZONES.TAB_TRIGGERS'),
                count: details.triggers ?? '?',
                icon: { content: 'timer' },
            },
            {
                id: 'metadata',
                name: i18n('ZONES.TAB_METADATA'),
                count: details.metadata ?? '?',
                icon: { content: 'code_blocks' },
            },
            {
                id: 'children',
                name: i18n('ZONES.TAB_CHILDREN'),
                count: details.children ?? '?',
                icon: { content: 'account_tree' },
            },
            {
                id: 'history',
                name: i18n('ZONES.TAB_SETTINGS_HISTORY'),
                icon: { content: 'schedule' },
            },
        ].concat(this.extensions);
    }

    constructor(
        protected _service: ZonesStateService,
        protected _item: ActiveItemService,
        protected _route: ActivatedRoute,
        protected _router: Router,
        private _debug: PlaceDebugService,
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item-change',
            this._item.active_item$.subscribe(() => this.updateTabList({})),
        );
        this.subscription(
            'item',
            this._service.counts.subscribe((details) =>
                this.updateTabList(details),
            ),
        );
    }
}
