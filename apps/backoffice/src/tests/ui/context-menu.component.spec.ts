import { MatMenuModule } from '@angular/material/menu';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { ContextMenuComponent } from '../../app/ui/context-menu.component';

describe('ContextMenuComponent', () => {
    let spectator: SpectatorHost<ContextMenuComponent>;
    const createComponent = createHostFactory({
        component: ContextMenuComponent,
        providers: [],
        declarations: [],
        imports: [MatMenuModule],
    });

    beforeEach(
        () => (spectator = createComponent('<div context-menu=""></div>'))
    );

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should update position on contextmenu event', () => {
        const spy = jest.spyOn(spectator.component, 'onEvent');
        spectator.hostDebugElement.children[0].triggerEventHandler(
            'contextmenu',
            { preventDefault: jest.fn() }
        );
        expect(spy).toBeCalled();
    });
});
