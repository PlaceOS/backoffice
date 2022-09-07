import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { PlaceZone } from '@placeos/ts-client';
import { MockComponent, MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ExecuteMethodFieldComponent } from '../../app/ui/custom-fields/system-exec/execute-method-field.component';
import { SettingsFormComponent } from '../../app/ui/forms/settings-form/settings-form.component';
import { ZoneAboutComponent } from '../../app/zones/zone-about.component';
import { ZonesStateService } from '../../app/zones/zones-state.service';

describe('ZoneAboutComponent', () => {
    let spectator: SpectatorRouting<ZoneAboutComponent>;
    const createComponent = createRoutingFactory({
        component: ZoneAboutComponent,
        providers: [
            {
                provide: ZonesStateService,
                useValue: {
                    active_item: new PlaceZone(),
                    systems: new BehaviorSubject([]),
                },
            },
        ],
        declarations: [
            MockComponent(ExecuteMethodFieldComponent),
            MockComponent(SettingsFormComponent),
        ],
        imports: [
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
            MockModule(MatChipsModule),
            MockModule(MatProgressSpinnerModule),
            FormsModule
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());
});
