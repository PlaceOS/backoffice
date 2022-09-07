import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ActiveItemService } from '../../app/common/item.service';
import { TriggerStateService } from '../../app/triggers/trigger-state.service';

describe('TriggerStateService', () => {
    let spectator: SpectatorService<TriggerStateService>;
    const createService = createServiceFactory({
        service: TriggerStateService,
        providers: [
            MockProvider(ActiveItemService, { item: new BehaviorSubject(null) }),
            MockProvider(MatDialog, {})
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create component', () => {
        expect(spectator.service).toBeTruthy();
    });

});