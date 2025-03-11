import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockPipe, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { TriggerAboutComponent } from '../../app/triggers/trigger-about.component';
import { TriggerStateService } from '../../app/triggers/trigger-state.service';
import { DateFromPipe } from '../../app/ui/pipes/date-from.pipe';

describe('TriggerAboutComponent', () => {
    let spectator: Spectator<TriggerAboutComponent>;
    const createComponent = createComponentFactory({
        component: TriggerAboutComponent,
        providers: [
            MockProvider(TriggerStateService, {
                item: new BehaviorSubject(null),
            }),
        ],
        declarations: [MockPipe(DateFromPipe)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());
});
