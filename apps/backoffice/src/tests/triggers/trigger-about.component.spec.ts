import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ActiveItemService } from '../../app/common/item.service';
import { TriggerAboutComponent } from '../../app/triggers/trigger-about.component';
import { TriggerStateService } from '../../app/triggers/trigger-state.service';

describe('TriggerAboutComponent', () => {
    let spectator: Spectator<TriggerAboutComponent>;
    const createComponent = createComponentFactory({
        component: TriggerAboutComponent,
        providers: [
            MockProvider(TriggerStateService, { item: new BehaviorSubject(null) })
        ],
        declarations: [],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());
});
