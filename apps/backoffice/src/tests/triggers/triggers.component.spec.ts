import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { PlaceDebugService } from '../../app/common/debug.service';
import { ActiveItemService } from '../../app/common/item.service';
import { TriggersComponent } from '../../app/triggers/triggers.component';

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
