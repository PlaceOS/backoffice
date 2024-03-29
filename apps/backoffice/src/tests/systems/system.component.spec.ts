import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { ActiveItemService } from '../../app/common/item.service';
import { SystemStateService } from '../../app/systems/system-state.service';
import { SystemsComponent } from '../../app/systems/systems.component';
import { IconComponent } from '../../app/ui/icon.component';
import { ItemDetailsComponent } from '../../app/ui/item-details.component';
import { ItemSelectionComponent } from '../../app/ui/item-selection.component';
import { ItemSidebarComponent } from '../../app/ui/item-sidebar.component';
import { ItemTablistComponent } from '../../app/ui/item-tablist.component';
import { SidebarMenuComponent } from '../../app/ui/sidebar-menu.component';

describe('SystemsComponent', () => {
    let spectator: SpectatorRouting<SystemsComponent>;
    const createComponent = createRoutingFactory({
        component: SystemsComponent,
        providers: [
            MockProvider(SystemStateService, {
                counts: new BehaviorSubject(0),
            } as any),
            MockProvider(ActiveItemService, {
                create: jest.fn(),
                bulkAdd: jest.fn(),
                active_item$: new BehaviorSubject(null),
            } as any),
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(SidebarMenuComponent),
            MockComponent(ItemSidebarComponent),
            MockComponent(ItemSelectionComponent),
            MockComponent(ItemDetailsComponent),
            MockComponent(ItemTablistComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());
});
