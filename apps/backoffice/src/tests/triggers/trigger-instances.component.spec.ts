import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { MockComponent, MockProvider } from "ng-mocks";
import { BehaviorSubject } from "rxjs";
import { TriggerInstancesComponent } from "../../app/triggers/trigger-instances.component";
import { TriggerStateService } from "../../app/triggers/trigger-state.service";

describe('TriggerInstancesComponent', () => {
    let spectator: Spectator<TriggerInstancesComponent>;
    const createComponent = createComponentFactory({
        component: TriggerInstancesComponent,
        providers: [
            MockProvider(TriggerStateService, { instances: new BehaviorSubject([]) })
        ],
        declarations: []
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});