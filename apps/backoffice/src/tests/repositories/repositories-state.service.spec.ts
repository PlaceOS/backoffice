import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ActiveItemService } from '../../app/common/item.service';
import { RepositoriesStateService } from '../../app/repositories/repositories-state.service';

describe('RepositoriesStateService', () => {
    let spectator: SpectatorService<RepositoriesStateService>;
    const createService = createServiceFactory({
        service: RepositoriesStateService,
        providers: [
            MockProvider(ActiveItemService, { active_item$: new BehaviorSubject(null) }),
            MockProvider(MatDialog)
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create component', () => {
        expect(spectator.service).toBeTruthy();
    });

});