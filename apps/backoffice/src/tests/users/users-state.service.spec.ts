import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ActiveItemService } from '../../app/common/item.service';
import { UsersStateService } from '../../app/users/users-state.service';

describe('UsersStateService', () => {
    let spectator: SpectatorService<UsersStateService>;
    const createService = createServiceFactory({
        service: UsersStateService,
        providers: [
            MockProvider(ActiveItemService, {
                item: new BehaviorSubject(null) as any,
                active_item$: new BehaviorSubject(null) as any,
                replaceItem: jest.fn(),
            }),
            MockProvider(MatDialog, { open: jest.fn() }),
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create component', () => {
        expect(spectator.service).toBeTruthy();
    });
});
