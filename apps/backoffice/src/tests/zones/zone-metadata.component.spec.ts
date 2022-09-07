import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { PlaceZone } from "@placeos/ts-client";
import { MockComponent } from "ng-mocks";
import { ActiveItemService } from "../../app/common/item.service";
import { ZoneMetadataComponent } from "../../app/zones/zone-metadata.component";
import { MetadataDisplayComponent } from "../../app/ui/metadata-display.component";

describe('ZoneMetadataComponent', () => {
    let spectator: Spectator<ZoneMetadataComponent>;
    const createComponent = createComponentFactory({
        component: ZoneMetadataComponent,
        providers: [
            { provide: ActiveItemService, useValue: { active_item: new PlaceZone() } }
        ],
        declarations: [
            MockComponent(MetadataDisplayComponent)
        ]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});