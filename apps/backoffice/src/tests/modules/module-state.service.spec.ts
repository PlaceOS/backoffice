import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ActiveItemService } from '../../app/common/item.service';
import { ModuleStateService } from '../../app/modules/module-state.service';

describe('ModuleStateService', () => {
    let spectator: SpectatorService<ModuleStateService>;
    const createService = createServiceFactory({
        service: ModuleStateService,
        providers: [
            MockProvider(ActiveItemService, {
                item: new BehaviorSubject(null),
                active_item$: new BehaviorSubject(null),
            }),
            MockProvider(MatDialog, {}),
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create component', () => {
        expect(spectator.service).toBeTruthy();
    });
});
