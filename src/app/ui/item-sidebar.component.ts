import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    inject,
    input,
    OnInit,
    signal,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import {
    PlaceDriverRole,
    PlaceModule,
    PlaceRepository,
    PlaceSystem,
    PlaceZone,
} from '@placeos/ts-client';
import { isBefore } from 'date-fns';
import { map } from 'rxjs/operators';
import { AsyncHandler } from '../common/async-handler.class';
import { nextValueFrom } from '../common/general';
import { ActiveItemService } from '../common/item.service';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';
import { VirtualScrollComponent } from './virtual-scroll.component';

@Component({
    selector: 'item-sidebar',
    template: `
        <!-- eslint-disable @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
        <div
            class="border-base-200 bg-base-100 flex h-full w-[24rem] max-w-[25vw] min-w-64 flex-col space-y-2 overflow-hidden rounded-sm shadow-sm sm:border-r"
            (click)="$event.stopPropagation()"
        >
            <div class="flex items-center space-x-2 px-1 pt-1">
                <div
                    class="border-base-300 relative flex flex-1 items-center rounded-lg border shadow-sm"
                >
                    <icon
                        class="pointer-events-none absolute top-1/2 left-1 -translate-y-1/2 text-2xl"
                    >
                        search
                    </icon>
                    <input
                        #search_input
                        class="w-full flex-1 rounded-lg border-none bg-transparent py-2.5 pr-4 pl-9"
                        [(ngModel)]="search"
                        (ngModelChange)="updateSearch($event)"
                        [placeholder]="
                            'COMMON.SEARCH_FOR' | translate: { name: title() }
                        "
                    />
                    @if (loading | async) {
                        <mat-spinner
                            diameter="24"
                            class="absolute top-1/2 right-2 mr-2 -translate-y-1/2"
                        ></mat-spinner>
                    }
                </div>
                @if (filter_options()?.length) {
                    <div class="relative flex overflow-hidden">
                        <button
                            icon
                            matRipple
                            [class.border]="selected_filters.length"
                            [class.border-info]="selected_filters.length"
                            [class.text-info]="selected_filters.length"
                        >
                            <icon class="text-2xl">filter_list</icon>
                        </button>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript absolute top-1/2 -right-2 -translate-y-1/2 opacity-0"
                        >
                            <mat-select
                                multiple
                                [(ngModel)]="selected_filters"
                                (ngModelChange)="updateSearch(search)"
                            >
                                @for (
                                    option of filter_options();
                                    track option
                                ) {
                                    <mat-option
                                        [value]="option"
                                        class="capitalize"
                                        >{{ option }}</mat-option
                                    >
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
            </div>
            <p class="w-full px-2 text-sm opacity-60">
                @let t = total | async;
                {{ 'COMMON.TOTAL_ITEMS' | translate: { count: t } : t }}
            </p>
            <div class="border-base-200 flex h-1/2 flex-1 flex-col border-t">
                @if ((items | async)?.length) {
                    <virtual-scroll
                        [item_size]="72"
                        [items]="items | async"
                        [item_template]="item_display"
                        (scrolled)="atBottom($event)"
                    >
                        <div
                            class="bg-base-200 p-2 text-center text-sm opacity-30"
                        >
                            {{ 'COMMON.END_OF_LIST' | translate }}
                        </div>
                    </virtual-scroll>
                    <ng-template #item_display let-item="item" let-idx="index">
                        <a
                            [routerLink]="
                                subroute()
                                    ? ['/', route(), item.id, subroute()]
                                    : ['/', route(), item.id]
                            "
                            routerLinkActive="active"
                            [matTooltip]="
                                item.update_available &&
                                item.commit !== item.update_info.commit
                                    ? ('COMMON.UPDATE_AVAILABLE' | translate)
                                    : ''
                            "
                            [class.bg-base-200]="idx % 2 === 1"
                            class="border-base-100 hover:border-info relative m-1 flex h-16 w-92 max-w-[calc(100%-0.5rem)] flex-col justify-center rounded-sm border px-2 py-1"
                            (click)="show.set(false)"
                        >
                            <p class="w-full truncate">
                                {{ item.name }}
                            </p>
                            <div class="flex w-full">
                                @if (item.extra) {
                                    <div
                                        extra
                                        class="mono border-base-300 mt-1 max-w-full truncate rounded-sm border p-1 text-[0.625rem] opacity-60"
                                    >
                                        {{ item.extra }}
                                    </div>
                                }
                            </div>
                            @if (
                                item.update_available &&
                                item.commit !== item.update_info.commit
                            ) {
                                <icon
                                    class="text-info absolute -top-1 -right-1 rotate-12 text-2xl"
                                >
                                    new_releases
                                </icon>
                            }
                            @if (item.zone_issues) {
                                <div
                                    class="bg-warning text-warning-content absolute -top-1 -right-1 flex h-8 w-8 rotate-12 items-center justify-center rounded-full text-2xl"
                                    [matTooltip]="
                                        (item.zone_issues === 'system'
                                            ? 'SYSTEMS.MISCONFIGURED'
                                            : 'ZONES.MISCONFIGURED'
                                        ) | translate
                                    "
                                >
                                    <icon> brightness_alert </icon>
                                </div>
                            }
                            @if (item.has_runtime_error) {
                                <div
                                    class="bg-error text-error-content absolute -top-1 -right-1 flex h-8 w-8 rotate-12 items-center justify-center rounded-full text-2xl"
                                    [matTooltip]="'MODULES.ERROR' | translate"
                                >
                                    <icon> error </icon>
                                </div>
                            }
                        </a>
                    </ng-template>
                } @else {
                    <div
                        class="flex flex-col items-center justify-center p-8 opacity-30"
                    >
                        <p>
                            {{
                                (search
                                    ? 'COMMON.SEARCH_EMPTY'
                                    : 'COMMON.LIST_EMPTY'
                                ) | translate: { name: title() }
                            }}
                        </p>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
            }
            scroll-item:nth-child(2n) > a {
                background-color: var(--base-200);
            }
            a.active {
                background-color: var(--secondary) !important;
                color: var(--secondary-content);
            }
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        MatTooltipModule,
        IconComponent,
        RouterModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatSelectModule,
        VirtualScrollComponent,
    ],
})
export class ItemSidebarComponent
    extends AsyncHandler
    implements OnInit, AfterViewInit
{
    private _router = inject(Router);
    private _service = inject(ActiveItemService);

    public readonly title = input('Systems');
    public readonly route = input('systems');
    public readonly filter_options = input<string[]>([]);
    public readonly show = signal(true);

    public last_total = 0;
    public last_check = 0;
    public search = '';
    public selected_filters: string[] = [];
    /** List of items for the active route */
    public readonly items = this._service.list.pipe(
        map((l) => this._processItems(l as ({ id?: string; name?: string; display_name?: string; custom_name?: string } & Record<string, unknown>)[])),
    );
    /** Whether list of items for the active route are loading */
    public readonly loading = this._service.loading_list;
    /** Total number of items in the last request */
    public total = this._service.count;

    private readonly _input =
        viewChild<ElementRef<HTMLInputElement>>('search_input');

    public readonly subroute = signal('');

    public ngOnInit(): void {
        this.subscription(
            'route_change',
            this._router.events.subscribe((e) => {
                if (e instanceof NavigationEnd) {
                    this.subroute.set(this._router.url.split('/')[3] || '');
                }
            }),
        );
    }

    public ngAfterViewInit() {
        this.focusInput();
        this.atBottom([0, 0]);
    }

    public focusInput() {
        this._input()?.nativeElement.focus();
    }

    public updateSearch(str: string) {
        let search_str = '';
        if (this.selected_filters.length) {
            search_str += `tags:(${this.selected_filters
                .map((_) => `+${_.trim()}`)
                .join(' AND ')
                .trim()})`;
        }
        if (str) {
            if (search_str.length > 0) {
                search_str += ` AND (+${str.trim()})`;
            } else search_str += str.trim();
        }
        this._service.setSearch(search_str);
    }

    public trackByFn(item: Record<string, unknown>, index: number) {
        return item.id || index;
    }

    /** Whether to update the list of items */
    public get is_stale() {
        const now = Date.now();
        const last_check = this.last_check;
        return (
            this.last_total !== this._service.list_items().length ||
            isBefore(now, last_check + 60 * 1000)
        );
    }
    public async atBottom([_start, end]: [number, number]) {
        this.timeout(
            'load_more',
            async () => {
                const loading = await nextValueFrom(this.loading);
                const items = await nextValueFrom(this.items);
                if (loading || !this.is_stale) return;
                if (end >= items.length) {
                    // Buffer 2 items early to avoid edge jumps
                    this.last_total = items.length;
                    this.last_check = Date.now();
                    const serviceTotal = await nextValueFrom(this.total); // Await for accuracy
                    if (this.last_total < serviceTotal) {
                        this._service.moreItems();
                    }
                }
            },
            150,
        ); // 150ms debounce for smooth feel
    }

    private _processItems(list: ({ id?: string; name?: string; display_name?: string; custom_name?: string } & Record<string, unknown>)[]) {
        for (const item of list) {
            if (item instanceof PlaceModule) {
                const name = item.system?.display_name || item.system?.name;
                const detail =
                    item.role === PlaceDriverRole.Service
                        ? item.uri
                        : item.role === PlaceDriverRole.Logic
                          ? name
                              ? `${name} | ${item.control_system_id} `
                              : item.control_system_id
                          : item.ip;
                (item as Record<string, unknown>).display_name =
                    item.custom_name || item.name || '<Unnamed>';
                (item as Record<string, unknown>).extra = detail;
            } else if (item instanceof PlaceRepository) {
                (item as Record<string, unknown>).display_name = item.name || '<Unnamed>';
                (item as Record<string, unknown>).extra = item.repo_type;
            } else if (item instanceof PlaceSystem) {
                (item as Record<string, unknown>).display_name =
                    item.display_name || item.name || '<Unnamed>';
                (item as Record<string, unknown>).zone_issues =
                    (item.email || item.map_id) && item.zones.length < 3
                        ? 'system'
                        : '';
            } else if (item instanceof PlaceZone) {
                (item as Record<string, unknown>).display_name =
                    item.display_name || item.name || '<Unnamed>';
                (item as Record<string, unknown>).zone_issues =
                    (item.tags.includes('level') ||
                        item.tags.includes('building') ||
                        item.tags.includes('region')) &&
                    !item.parent_id
                        ? 'zone'
                        : '';
            } else {
                (item as Record<string, unknown>).display_name =
                    item.display_name ||
                    item.custom_name ||
                    item.name ||
                    '<Unnamed>';
                (item as Record<string, unknown>).extra = item.id;
            }
        }
        return list;
    }
}
