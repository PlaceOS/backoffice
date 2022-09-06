import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { PlaceSystem } from "@placeos/ts-client";
import { MockComponent } from "ng-mocks";
import { ActiveItemService } from "../../app/common/item.service";
import { SystemMetadataComponent } from "../../app/systems/system-metadata.component";
import { MetadataDisplayComponent } from "../../app/ui/metadata-display.component";

describe('SystemMetadataComponent', () => {
    let spectator: Spectator<SystemMetadataComponent>;
    const createComponent = createComponentFactory({
        component: SystemMetadataComponent,
        providers: [
            { provide: ActiveItemService, useValue: { active_item: new PlaceSystem() } }
        ],
        declarations: [
            MockComponent(MetadataDisplayComponent)
        ]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});