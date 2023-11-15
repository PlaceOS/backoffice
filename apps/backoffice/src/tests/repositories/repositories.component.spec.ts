import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { ActiveItemService } from '../../app/common/item.service';
import { RepositoriesStateService } from '../../app/repositories/repositories-state.service';
import { RepositoriesComponent } from '../../app/repositories/repositories.component';
import { of } from 'rxjs';

describe('RepositoriesComponent', () => {
    let spectator: Spectator<RepositoriesComponent>;
    const createComponent = createComponentFactory({
        component: RepositoriesComponent,
        providers: [
            MockProvider(RepositoriesStateService, { driver_list: of([]) }),
            MockProvider(ActiveItemService, {}),
        ],
        declarations: [],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());
});
