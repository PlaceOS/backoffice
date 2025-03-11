import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';

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
            MockProvider(CustomTooltipData, {}),
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(BackofficeUsersService, {
                current: jest.fn(() => ({}) as any),
            }),
            MockProvider(HotkeysService, { listen: jest.fn() }),
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(CustomTooltipComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show user menu', () => expect('button[user]').toExist());
});
