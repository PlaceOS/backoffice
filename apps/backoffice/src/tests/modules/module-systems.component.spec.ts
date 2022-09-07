import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { MockComponent, MockProvider } from "ng-mocks";
import { ModuleStateService } from "../../app/modules/module-state.service";
import { ModuleSystemsComponent } from "../../app/modules/module-systems.component";

describe('ModuleSystemsComponent', () => {
    let spectator: Spectator<ModuleSystemsComponent>;
    const createComponent = createComponentFactory({
        component: ModuleSystemsComponent,
        providers: [
            MockProvider(ModuleStateService, {})
        ],
        declarations: []
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});