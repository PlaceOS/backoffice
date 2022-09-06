import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { BehaviorSubject } from 'rxjs';
import { PlaceDebugService } from '../../app/common/debug.service';
import { ActiveItemService } from '../../app/common/item.service';
import { SystemStateService } from '../../app/systems/system-state.service';

describe('SystemStateService', () => {
    let spectator: SpectatorService<SystemStateService>;
    const createService = createServiceFactory({
        service: SystemStateService,
        providers: [
            {
                provide: ActiveItemService,
                useValue: {
                    active_item$: new BehaviorSubject(null),
                    item: new BehaviorSubject(null),
                    edit: jest.fn(async () => null),
                    replaceItem: jest.fn()
                },
            },
            { provide: PlaceDebugService, useValue: {} },
            { provide: MatDialog, useValue: { open: jest.fn() } },
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create component', () => {
        expect(spectator.service).toBeTruthy();
    });

    it.todo('should list counts for active system');
    it.todo('should list modules for active system');
    it.todo('should list debug_state for active system');
    it.todo('should list zones for active system');
    it.todo('should list triggers for active system');
    it.todo('should starting the active system');
    it.todo('should stopping active system');
    it.todo('should toggling module\'s debugging for active system');
    it.todo('should allow creating new modules for active system');
    it.todo('should allow editing of modules in active system');
    it.todo('should allow adding new triggers to active system');
    it.todo('should allow editing triggers in active system');
    it.todo('should allow removing triggers in active system');
    it.todo('should allow reordering modules in active system');
    it.todo('should allow reordering zones in active system');
    it.todo('should allow associating modules to active system');
    it.todo('should allow removing modules from the active system');
    it.todo('should allow reloading modules in the active system');
    it.todo('should allow adding zones to the active system');
    it.todo('should allow removing zones from the active system');
    it.todo('should allow toggling module power state in the active system');
});
