import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { RepositoriesStateService } from '../../app/repositories/repositories-state.service';
import { RepositoryDriversComponent } from '../../app/repositories/repository-drivers.component';

describe('RepositoryDriversComponent', () => {
    let spectator: Spectator<RepositoryDriversComponent>;
    const createComponent = createComponentFactory({
        component: RepositoryDriversComponent,
        providers: [
            MockProvider(RepositoriesStateService, {
                driver_list: new BehaviorSubject([]),
            }),
        ],
        declarations: [],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());
});
