import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { MockComponent } from "ng-mocks";
import { TriggersComponent } from "../../app/triggers/triggers.component";

describe('TriggersComponent', () => {
    let spectator: Spectator<TriggersComponent>;
    const createComponent = createComponentFactory({
        component: TriggersComponent,
        providers: [],
        declarations: []
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});