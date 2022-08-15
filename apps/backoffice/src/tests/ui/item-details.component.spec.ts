import { Clipboard } from '@angular/cdk/clipboard';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockModule } from 'ng-mocks';

import { ActiveItemService } from '../../app/common/item.service';
import { IconComponent } from '../../app/ui/icon.component';
import { ItemDetailsComponent } from '../../app/ui/item-details.component';
import { BackofficeUsersService } from '../../app/users/users.service';

describe('ItemDetailsComponent', () => {
    let spectator: Spectator<ItemDetailsComponent>;
    const createComponent = createComponentFactory({
        component: ItemDetailsComponent,
        providers: [
            {
                provide: ActiveItemService,
                useValue: {
                    edit: jest.fn(),
                    delete: jest.fn(),
                    duplicate: jest.fn(),
                    create: jest.fn(),
                },
            },
            { provide: BackofficeUsersService, useValue: {} },
            { provide: Clipboard, useValue: { copy: jest.fn() } },
        ],
        declarations: [MockComponent(IconComponent)],
        imports: [MockModule(MatMenuModule)]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should display item name', () => {
        expect('[name]').toExist();
        expect('[name]').toContainText('Unnamed');
        spectator.setInput({ item: { display_name: 'Test' } as any });
        spectator.detectChanges();
        expect('[name]').not.toContainText('Unnamed');
        expect('[name]').toContainText('Test');
    });
});
