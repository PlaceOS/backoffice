import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { createRoutingFactory, SpectatorRouting } from "@ngneat/spectator/jest";
import { PlaceZone } from "@placeos/ts-client";
import { MockComponent, MockModule } from "ng-mocks";
import { BehaviorSubject } from "rxjs";
import { IconComponent } from "../../app/ui/icon.component";
import { ZoneChildrenComponent } from "../../app/zones/zone-children.component";
import { ZonesStateService } from "../../app/zones/zones-state.service";

describe('ZoneChildrenComponent', () => {
    let spectator: SpectatorRouting<ZoneChildrenComponent>;
    const createComponent = createRoutingFactory({
        component: ZoneChildrenComponent,
        providers: [
            {
                provide: ZonesStateService,
                useValue: {
                    active_item: new PlaceZone(),
                    children: new BehaviorSubject([]),
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