import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { MockComponent, MockProvider } from "ng-mocks";
import { RepositoriesStateService } from "../../app/repositories/repositories-state.service";
import { RepositoryDriversComponent } from "../../app/repositories/repository-drivers.component";

describe('RepositoryDriversComponent', () => {
    let spectator: Spectator<RepositoryDriversComponent>;
    const createComponent = createComponentFactory({
        component: RepositoryDriversComponent,
        providers: [
            MockProvider(RepositoriesStateService, {})
        ],
        declarations: []
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});