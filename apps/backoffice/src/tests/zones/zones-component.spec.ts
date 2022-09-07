import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { PlaceZone } from '@placeos/ts-client';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { ActiveItemService } from '../../app/common/item.service';
import { IconComponent } from '../../app/ui/icon.component';
import { ItemDetailsComponent } from '../../app/ui/item-details.component';
import { ItemSelectionComponent } from '../../app/ui/item-selection.component';
import { ItemSidebarComponent } from '../../app/ui/item-sidebar.component';
import { ItemTablistComponent } from '../../app/ui/item-tablist.component';
import { SidebarMenuComponent } from '../../app/ui/sidebar-menu.component';
import { ZonesStateService } from '../../app/zones/zones-state.service';
import { ZonesComponent } from '../../app/zones/zones.component';

describe('ZonesComponent', () => {
    let spectator: SpectatorRouting<ZonesComponent>;
    const createComponent = createRoutingFactory({
        component: ZonesComponent,
        providers: [
            {
                provide: ZonesStateService,
                useValue: {
                    active_item: new PlaceZone(),
                    counts: new BehaviorSubject({}),
                },
            },
            {
                provide: ActiveItemService,
                useValue: { create: jest.fn(), bulkAdd: jest.fn() },
            },
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(SidebarMenuComponent),
            MockComponent(ItemSidebarComponent),
            MockComponent(ItemSelectionComponent),
            MockComponent(ItemDetailsComponent),
            MockComponent(ItemTablistComponent)
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());
});
