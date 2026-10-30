import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { extensionsForItem } from '../common/api';
import { i18n } from '../common/locale.service';
import { IconComponent } from '../ui/icon.component';
import { ItemShellComponent } from '../ui/item-shell.component';
import { ItemTab } from '../ui/item-tablist.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { DriverStateService } from './driver-state.service';

@Component({
    selector: 'new-drivers-view',
    template: `
        <item-shell name="drivers" i18n_key="DRIVERS" [tabs]="tab_list()" debug>
            @if (updates_available()) {
                <button
                    class="border-base-200 bg-secondary text-secondary-content absolute bottom-16 left-1 z-30 flex h-10 w-10 items-center justify-center rounded-lg border shadow-sm lg:-left-8"
                    [matTooltip]="'DRIVERS.UPDATE' | translate"
                    matTooltipPosition="right"
                    matRipple
                    (click)="showUpdateList()"
                >
                    <icon class="text-3xl">update</icon>
                </button>
            }
        </item-shell>
    `,
    imports: [
        ItemShellComponent,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        TranslatePipe,
    ],
})
export class DriversComponent {
    private _drivers = inject(DriverStateService);

    public readonly name = 'drivers';
    public readonly item = this._drivers.item;
    public readonly device_count = this._drivers.modules_total;
    public readonly docs = this._drivers.docs;
    public readonly extensions = computed(() =>
        extensionsForItem(this.item(), this.name),
    );
    public readonly tab_list = computed(() =>
        (
            [
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
            ] as ItemTab[]
        ).concat(this.extensions()),
    );
    public readonly updates_available = this._drivers.updates_available;

    public readonly showUpdateList = () => this._drivers.showUpdateList();
}
