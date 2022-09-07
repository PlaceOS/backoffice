import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { MockComponent, MockProvider } from "ng-mocks";
import { BehaviorSubject } from "rxjs";
import { ActiveItemService } from "../../app/common/item.service";
import { UserHistoryComponent } from "../../app/users/user-history.component";

describe('UserHistoryComponent', () => {
    let spectator: Spectator<UserHistoryComponent>;
    const createComponent = createComponentFactory({
        component: UserHistoryComponent,
        providers: [
            MockProvider(ActiveItemService, { item: new BehaviorSubject(null) as any })
        ],
        declarations: []
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});