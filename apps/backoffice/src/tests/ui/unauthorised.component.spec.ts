import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { MockComponent } from "ng-mocks";
import { UnauthorisedComponent } from "../../app/ui/unauthorised.component";

describe('UnauthorisedComponent', () => {
    let spectator: Spectator<UnauthorisedComponent>;
    const createComponent = createComponentFactory({
        component: UnauthorisedComponent,
        providers: [],
        declarations: []
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

    it('should have a header', () => expect('h3').toExist());

});