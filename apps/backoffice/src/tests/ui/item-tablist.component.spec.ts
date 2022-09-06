import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { HotkeysService } from '../../app/common/hotkeys.service';
import { IconComponent } from '../../app/ui/icon.component';
import { ItemTablistComponent } from '../../app/ui/item-tablist.component';

describe('ItemTablistComponent', () => {
    let spectator: SpectatorRouting<ItemTablistComponent>;
    const createComponent = createRoutingFactory({
        component: ItemTablistComponent,
        providers: [
            { provide: HotkeysService, useValue: { listen: jest.fn() } },
        ],
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

        it('should show tabs', () => {
            expect('[mat-tab-link]').not.toExist();
            spectator.setInput({ tabs: [{}] as any });
            spectator.detectChanges();
            expect('[mat-tab-link]').toExist();
        });
});
