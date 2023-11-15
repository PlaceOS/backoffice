import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { TriggersComponent } from '../../app/triggers/triggers.component';
import { ActiveItemService } from '../../app/common/item.service';
import { PlaceDebugService } from '../../app/common/debug.service';
import { BehaviorSubject } from 'rxjs';

describe('TriggersComponent', () => {
    let spectator: Spectator<TriggersComponent>;
    const createComponent = createComponentFactory({
        component: TriggersComponent,
        providers: [
            MockProvider(ActiveItemService, {
                item: new BehaviorSubject(null),
            }),
            MockProvider(PlaceDebugService),
        ],
        declarations: [],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());
});
