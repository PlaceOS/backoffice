import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { RepositoriesStateService } from '../../app/repositories/repositories-state.service';
import { RepositoryAboutComponent } from '../../app/repositories/repository-about.component';
import { DateFromPipe } from '../../app/ui/pipes/date-from.pipe';
import { SafePipe } from '../../app/ui/pipes/safe.pipe';

describe('RepositoryAboutComponent', () => {
    let spectator: Spectator<RepositoryAboutComponent>;
    const createComponent = createComponentFactory({
        component: RepositoryAboutComponent,
        providers: [
            MockProvider(RepositoriesStateService, {
                active_item: { uri: '' } as any,
                commit: new BehaviorSubject({}),
            }),
        ],
        declarations: [DateFromPipe, SafePipe],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());
});
