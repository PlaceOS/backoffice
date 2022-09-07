import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { PlaceZone } from '@placeos/ts-client';
import { MockComponent, MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { IconComponent } from '../../app/ui/icon.component';
import { ZoneTriggersComponent } from '../../app/zones/zone-triggers.component';
import { ZonesStateService } from '../../app/zones/zones-state.service';

describe('ZoneTriggersComponent', () => {
    let spectator: SpectatorRouting<ZoneTriggersComponent>;
    const createComponent = createRoutingFactory({
        component: ZoneTriggersComponent,
        providers: [
            {
                provide: ZonesStateService,
                useValue: {
                    active_item: new PlaceZone(),
                    triggers: new BehaviorSubject([]),
                    selectTrigger: jest.fn(),
                    removeTrigger: jest.fn(),
                },
            },
        ],
        declarations: [MockComponent(IconComponent)],
        imports: [
            MockModule(MatFormFieldModule),
            MockModule(MatProgressSpinnerModule),
            FormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());
});
