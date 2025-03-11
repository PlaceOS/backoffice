import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { PlaceModule } from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';
import { ModuleAboutComponent } from '../../app/modules/module-about.component';
import { ModuleStateService } from '../../app/modules/module-state.service';
import { DateFromPipe } from '../../app/ui/pipes/date-from.pipe';

describe('ModuleAboutComponent', () => {
    let spectator: Spectator<ModuleAboutComponent>;
    const createComponent = createComponentFactory({
        component: ModuleAboutComponent,
        providers: [
            MockProvider(ModuleStateService, {
                active_item: new PlaceModule(),
            }),
        ],
        declarations: [DateFromPipe],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());
});
