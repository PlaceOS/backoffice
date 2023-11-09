import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
        <div class="w-full h-12">
            <div class="w-full overflow-hidden h-14">
                <nav mat-tab-nav-bar [class.shadow]="scrolled">
                    <a
                        class="tab"
                        mat-tab-link
                        *ngFor="let link of tabs"
                        [routerLink]="
                            '/' + base + '/' + item_id + '/' + link.id
                        "
                        [queryParams]="link.query || {}"
                        routerLinkActive
                        #rla="routerLinkActive"
                        [active]="rla.isActive"
                    >
                        <app-icon [icon]="link.icon"></app-icon>&nbsp;
                        <div class="name">{{ link.name }}&nbsp;</div>
                        <div
                            class="text-xs rounded-full bg-base-200  flex items-center justify-center h-5 min-w-[1.25rem] px-1.5"
                            *ngIf="link.count || link.count === 0"
                        >
                            {{ link.count || '0' }}
                        </div>
                    </a>
                </nav>
            </div>
        </div>
    `,
    styles: [``],
})
export class ItemTablistComponent extends AsyncHandler implements OnInit {
    @Input() public base: string = 'systems';
    @Input() public item_id: string = '-';
    @Input() public tabs: ItemTab[] = [];
    @Input() public scrolled = false;

    constructor(private _router: Router, private _hotkey: HotkeysService) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._router.events.subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this._updateID();
                }
            })
        );
        this.subscription(
            'right',
            this._hotkey.listen(['ArrowRight'], () => this._changeTab(1))
        );
        this.subscription(
            'left',
            this._hotkey.listen(['ArrowLeft'], () => this._changeTab(-1))
        );
        this._updateID();
    }

    private _changeTab(direction: 1 | -1) {
        this.timeout(
            'change_tab',
            () => {
                const index = this.tabs.findIndex(
                    (tab) => this._router.url?.indexOf(tab.id) >= 0
                );
                if (index < 0 || !this.tabs[index + direction]) return;
                this._router.navigate([
                    `/${this.base}`,
                    this.item_id,
                    this.tabs[index + direction].id,
                ]);
            },
            100
        );
    }

    private _updateID() {
        const parts = this._router.url?.replace(/^\//, '').split('/') || [
            '1',
            '',
        ];
        this.item_id = parts[1];
    }
}
