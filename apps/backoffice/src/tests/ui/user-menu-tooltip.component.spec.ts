import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockModule } from 'ng-mocks';
import { SettingsService } from '../../app/common/settings.service';
import { SafePipe } from '../../app/ui/pipes/safe.pipe';
import { UserMenuTooltipComponent } from '../../app/ui/user-menu-tooltip.component';
import { BackofficeUsersService } from '../../app/users/users.service';

describe('UserMenuTooltipComponent', () => {
    let spectator: Spectator<UserMenuTooltipComponent>;
    const createComponent = createComponentFactory({
        component: UserMenuTooltipComponent,
        providers: [
            { provide: SettingsService, useValue: { post: jest.fn() } },
            {
                provide: BackofficeUsersService,
                useValue: { post: jest.fn(), dark_mode: false },
            },
        ],
        declarations: [SafePipe],
        imports: [MockModule(MatSlideToggleModule)]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

        it('should link to the profile', () => expect('a[profile]').toExist());
        it('should have link for reporting issues', () => expect('a[report]').toExist());
        it('should have button for logging out', () => expect('button[logout]').toExist());
        it('should have button to open upload history', () => expect('button[uploads]').toExist());
        it('should have toggle for dark mode', () => expect('[dark-mode] mat-slide-toggle').toExist());
});
