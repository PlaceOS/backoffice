import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ActiveItemService } from '../../app/common/item.service';
import { IconComponent } from '../../app/ui/icon.component';
import { ItemDetailsComponent } from '../../app/ui/item-details.component';
import { ItemSelectionComponent } from '../../app/ui/item-selection.component';
import { ItemSidebarComponent } from '../../app/ui/item-sidebar.component';
import { ItemTablistComponent } from '../../app/ui/item-tablist.component';
import { SidebarMenuComponent } from '../../app/ui/sidebar-menu.component';
import { UsersComponent } from '../../app/users/users.component';

describe('UsersComponent', () => {
    let spectator: SpectatorRouting<UsersComponent>;
    const createComponent = createRoutingFactory({
        component: UsersComponent,
        providers: [
            MockProvider(ActiveItemService, {
                item: new BehaviorSubject(null) as any,
            }),
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
