import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { MockComponent, MockProvider } from "ng-mocks";
import { ActiveItemService } from "../../app/common/item.service";
import { RepositoriesStateService } from "../../app/repositories/repositories-state.service";
import { RepositoriesComponent } from "../../app/repositories/repositories.component";

describe('RepositoriesComponent', () => {
    let spectator: Spectator<RepositoriesComponent>;
    const createComponent = createComponentFactory({
        component: RepositoriesComponent,
        providers: [
            MockProvider(RepositoriesStateService, {}),
            MockProvider(ActiveItemService, {})
        ],
        declarations: []
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});