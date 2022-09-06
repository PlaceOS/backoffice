import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { PlaceSystem } from '@placeos/ts-client';
import { MockComponent, MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { SystemAboutComponent } from '../../app/systems/system-about.component';
import { SystemStateService } from '../../app/systems/system-state.service';
import { SettingsFormComponent } from '../../app/ui/forms/settings-form/settings-form.component';

describe('SystemAboutComponent', () => {
    let spectator: Spectator<SystemAboutComponent>;
    const createComponent = createComponentFactory({
        component: SystemAboutComponent,
        providers: [
            {
                provide: SystemStateService,
                useValue: {
                    associated_settings: new BehaviorSubject({}),
                    active_item: new PlaceSystem(),
                    startSystem: jest.fn(),
                    stopSystem: jest.fn(),
                },
            },
        ],
        declarations: [MockComponent(SettingsFormComponent)],
        imports: [MockModule(MatProgressSpinnerModule)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should allow starting the system', () => {
        expect('button[start]').toExist();
        spectator.click('button[start]');
        expect(spectator.inject(SystemStateService).startSystem).toBeCalled();
    });

    it('should allow stop the system', () => {
        expect('button[stop]').toExist();
        spectator.click('button[stop]');
        expect(spectator.inject(SystemStateService).stopSystem).toBeCalled();
    });
});
