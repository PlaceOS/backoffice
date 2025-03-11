import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockPipe, MockProvider } from 'ng-mocks';
import { ActiveItemService } from '../../app/common/item.service';
import { DateFromPipe } from '../../app/ui/pipes/date-from.pipe';
import { UserAboutComponent } from '../../app/users/user-about.component';

describe('UserAboutComponent', () => {
    let spectator: Spectator<UserAboutComponent>;
    const createComponent = createComponentFactory({
        component: UserAboutComponent,
        providers: [MockProvider(ActiveItemService)],
        declarations: [MockPipe(DateFromPipe)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());
});
