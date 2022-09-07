import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { PlaceUser } from "@placeos/ts-client";
import { MockComponent, MockProvider } from "ng-mocks";
import { ActiveItemService } from "../../app/common/item.service";
import { MetadataDisplayComponent } from "../../app/ui/metadata-display.component";
import { UserMetadataComponent } from "../../app/users/user-metadata.component";

describe('UserMetadataComponent', () => {
    let spectator: Spectator<UserMetadataComponent>;
    const createComponent = createComponentFactory({
        component: UserMetadataComponent,
        providers: [
            MockProvider(ActiveItemService, { active_item: new PlaceUser() })
        ],
        declarations: [
            MockComponent(MetadataDisplayComponent)
        ]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});