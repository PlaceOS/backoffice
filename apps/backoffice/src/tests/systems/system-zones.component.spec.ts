import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { PlaceSystem } from "@placeos/ts-client";
import { MockComponent, MockModule } from "ng-mocks";
import { BehaviorSubject } from "rxjs";
import { SystemStateService } from "../../app/systems/system-state.service";
import { SystemZonesComponent } from "../../app/systems/system-zones.component";
import { ItemSearchFieldComponent } from "../../app/ui/custom-fields/item-search-field.component";
import { IconComponent } from "../../app/ui/icon.component";

describe('SystemZonesComponent', () => {
    let spectator: Spectator<SystemZonesComponent>;
    const createComponent = createComponentFactory({
        component: SystemZonesComponent,
        providers: [
            {
                provide: SystemStateService,
                useValue: {
                    active_item: new PlaceSystem(),
                    editTrigger: jest.fn(),
                    removeTrigger: jest.fn(),
                    selectTrigger: jest.fn(),
                    zones: new BehaviorSubject([]),
                    loading: new BehaviorSubject({}),
                },
            },],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(ItemSearchFieldComponent)
        ],
        imports: [
            MockModule(MatProgressSpinnerModule),]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());
    
    it.todo('should allow adding zones');
    it.todo('should allow removing zones');

});