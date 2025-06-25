import { Component, OnInit, inject, input, model } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AsyncHandler } from '../common/async-handler.class';
import { HotkeysService } from '../common/hotkeys.service';
import { ApplicationIcon } from '../common/types';

export interface ItemTab {
    id: string;
    name: string;
    icon: ApplicationIcon;
}

@Component({
    selector: 'item-tablist',
    template: `
        <div class="h-12 w-full">
            <div class="h-14 w-full overflow-hidden">
                <nav
                    mat-tab-nav-bar
                    [class.shadow]="scrolled()"
                    [tabPanel]="tabPanel"
                >
                    @for (link of tabs(); track link.id) {
                        <a
                            class="tab"
                            mat-tab-link
                            [routerLink]="
                                '/' + base() + '/' + item_id() + '/' + link.id
                            "
                            [queryParams]="link.query || {}"
                            routerLinkActive
                            #rla="routerLinkActive"
                            [active]="rla.isActive"
                        >
                            <app-icon
                                class="text-xl"
                                [icon]="link.icon"
                            ></app-icon
                            >&nbsp;
                            <div class="name">{{ link.name }}&nbsp;</div>
                            @if (link.count || link.count === 0) {
                                <div
                                    class="flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-base-200 px-1.5 text-xs"
                                >
                                    {{ link.count || '0' }}
                                </div>
                            }
                        </a>
                    }
                </nav>
            </div>
        </div>
        <mat-tab-nav-panel #tabPanel class="hidden" />
    `,
    styles: [``],
    standalone: false,
})
export class ItemTablistComponent extends AsyncHandler implements OnInit {
    private _router = inject(Router);
    private _hotkey = inject(HotkeysService);

    public readonly base = input<string>('systems');
    public readonly item_id = model<string>('-');
    public readonly tabs = input<ItemTab[]>([]);
    public readonly scrolled = input(false);

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._router.events.subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this._updateID();
                }
            }),
        );
        this.subscription(
            'right',
            this._hotkey.listen(['ArrowRight'], () => this._changeTab(1)),
        );
        this.subscription(
            'left',
            this._hotkey.listen(['ArrowLeft'], () => this._changeTab(-1)),
        );
        this._updateID();
    }

    private _changeTab(direction: 1 | -1) {
        this.timeout(
            'change_tab',
            () => {
                const index = this.tabs().findIndex(
                    (tab) => this._router.url?.indexOf(tab.id) >= 0,
                );
                if (index < 0 || !this.tabs()[index + direction]) return;
                this._router.navigate([
                    `/${this.base()}`,
                    this.item_id(),
                    this.tabs()[index + direction].id,
                ]);
            },
            100,
        );
    }

    private _updateID() {
        const parts = this._router.url?.replace(/^\//, '').split('/') || [
            '1',
            '',
        ];
        this.item_id.set(parts[1]);
    }
}
