import { fakeAsync } from '@angular/core/testing';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { HotkeysService } from '../../app/common/hotkeys.service';
import { SettingsService } from '../../app/common/settings.service';
import {
    CustomTooltipComponent,
    CustomTooltipData,
} from '../../app/ui/custom-tooltip.component';
import { IconComponent } from '../../app/ui/icon.component';
import { SidebarMenuComponent } from '../../app/ui/sidebar-menu.component';
import { BackofficeUsersService } from '../../app/users/users.service';

describe('SidebarMenuComponent', () => {
    let spectator: SpectatorRouting<SidebarMenuComponent>;
    const createComponent = createRoutingFactory({
        component: SidebarMenuComponent,
        providers: [
            { provide: CustomTooltipData, useValue: {} },
            { provide: SettingsService, useValue: { get: jest.fn() } },
            {
                provide: BackofficeUsersService,
                useValue: { current: jest.fn() },
            },
            { provide: HotkeysService, useValue: { listen: jest.fn() } },
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(CustomTooltipComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should list menu items', fakeAsync(() => {
        expect('a[menu]').not.toExist();
        spectator
            .inject(SettingsService)
            .get.mockImplementation(() => [{ id: 1, route: '' }] as any);
        spectator.component.ngOnInit();
        spectator.detectChanges();
        expect('a[menu]').toExist();
    }));

    it('should show user menu', () => expect('button[user]').toExist());
});
