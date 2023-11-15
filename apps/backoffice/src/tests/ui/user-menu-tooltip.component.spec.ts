import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { SettingsService } from '../../app/common/settings.service';
import { IconComponent } from '../../app/ui/icon.component';
import { SafePipe } from '../../app/ui/pipes/safe.pipe';
import { UserMenuTooltipComponent } from '../../app/ui/user-menu-tooltip.component';
import { BackofficeUsersService } from '../../app/users/users.service';

describe('UserMenuTooltipComponent', () => {
    let spectator: SpectatorRouting<UserMenuTooltipComponent>;
    const createComponent = createRoutingFactory({
        component: UserMenuTooltipComponent,
        providers: [
            MockProvider(SettingsService, { get: jest.fn(), post: jest.fn() }),
            MockProvider(BackofficeUsersService, {
                post: jest.fn(),
                dark_mode: false,
            } as any),
        ],
        declarations: [SafePipe, MockComponent(IconComponent)],
        imports: [MockModule(MatSlideToggleModule), FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should link to the profile', () => expect('a[profile]').toExist());
    it('should have link for reporting issues', () =>
        expect('a[report]').toExist());
    it('should have button for logging out', () =>
        expect('button[logout]').toExist());
    it('should have button to open upload history', () =>
        expect('button[uploads]').toExist());
    it('should have toggle for dark mode', () =>
        expect('[dark-mode] mat-slide-toggle').toExist());
});
