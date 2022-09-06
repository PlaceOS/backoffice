import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { PlaceSystem } from '@placeos/ts-client';
import { MockComponent, MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { SystemStateService } from '../../app/systems/system-state.service';
import { SystemTriggersComponent } from '../../app/systems/system-triggers.component';
import { IconComponent } from '../../app/ui/icon.component';

describe('SystemTriggersComponent', () => {
    let spectator: Spectator<SystemTriggersComponent>;
    const createComponent = createComponentFactory({
        component: SystemTriggersComponent,
        providers: [
            {
                provide: SystemStateService,
                useValue: {
                    active_item: new PlaceSystem(),
                    editTrigger: jest.fn(),
                    removeTrigger: jest.fn(),
                    selectTrigger: jest.fn(),
                    triggers: new BehaviorSubject([]),
                    loading: new BehaviorSubject({}),
                },
            },
        ],
        declarations: [
            MockComponent(IconComponent)
        ],
        imports: [
            MockModule(MatFormFieldModule),
            MockModule(MatProgressSpinnerModule),
            FormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it.todo('should allow listing system triggers');
    it.todo('should allow selecting triggers to add');
    it.todo('should allow editing triggers');
    it.todo('should allow removing triggers');
});
