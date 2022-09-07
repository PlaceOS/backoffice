import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { MockComponent, MockProvider } from "ng-mocks";
import { ActiveItemService } from "../../app/common/item.service";
import { UserAboutComponent } from "../../app/users/user-about.component";

describe('UserAboutComponent', () => {
    let spectator: Spectator<UserAboutComponent>;
    const createComponent = createComponentFactory({
        component: UserAboutComponent,
        providers: [
            MockProvider(ActiveItemService)
        ],
        declarations: []
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});