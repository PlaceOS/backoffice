import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { MockComponent, MockProvider } from "ng-mocks";
import { BehaviorSubject } from "rxjs";
import { ActiveItemService } from "../../app/common/item.service";
import { ModuleStateService } from "../../app/modules/module-state.service";
import { ModulesComponent } from "../../app/modules/modules.component";

describe('ModulesComponent', () => {
    let spectator: Spectator<ModulesComponent>;
    const createComponent = createComponentFactory({
        component: ModulesComponent,
        providers: [
            MockProvider(ActiveItemService, { item: new BehaviorSubject({}) as any })
        ],
        declarations: []
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});