import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { PlaceModule } from "@placeos/ts-client";
import { MockComponent, MockProvider } from "ng-mocks";
import { ModuleAboutComponent } from "../../app/modules/module-about.component";
import { ModuleStateService } from "../../app/modules/module-state.service";

describe('ModuleAboutComponent', () => {
    let spectator: Spectator<ModuleAboutComponent>;
    const createComponent = createComponentFactory({
        component: ModuleAboutComponent,
        providers: [
            MockProvider(ModuleStateService, { active_item: new PlaceModule() })
        ],
        declarations: []
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});