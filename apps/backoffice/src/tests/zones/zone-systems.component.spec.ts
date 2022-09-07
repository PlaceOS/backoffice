import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { createRoutingFactory, SpectatorRouting } from "@ngneat/spectator/jest";
import { PlaceZone } from "@placeos/ts-client";
import { MockComponent, MockModule } from "ng-mocks";
import { BehaviorSubject } from "rxjs";
import { IconComponent } from "../../app/ui/icon.component";
import { ZoneSystemsComponent } from "../../app/zones/zone-systems.component";
import { ZonesStateService } from "../../app/zones/zones-state.service";

describe('ZoneSystemsComponent', () => {
    let spectator: SpectatorRouting<ZoneSystemsComponent>;
    const createComponent = createRoutingFactory({
        component: ZoneSystemsComponent,
        providers: [
            {
                provide: ZonesStateService,
                useValue: {
                    active_item: new PlaceZone(),
                    systems: new BehaviorSubject([]),
                },
            },],
        declarations: [
            MockComponent(IconComponent)
        ],
        imports: [MockModule(MatFormFieldModule), FormsModule]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});