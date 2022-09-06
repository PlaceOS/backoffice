import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { SystemModulesComponent } from '../../app/systems/system-modules.component';
import { SystemStateService } from '../../app/systems/system-state.service';
import { ItemSearchFieldComponent } from '../../app/ui/custom-fields/item-search-field.component';
import { ExecuteMethodFieldComponent } from '../../app/ui/custom-fields/system-exec/execute-method-field.component';
import { IconComponent } from '../../app/ui/icon.component';

describe('SystemModulesComponent', () => {
    let spectator: Spectator<SystemModulesComponent>;
    const createComponent = createComponentFactory({
        component: SystemModulesComponent,
        providers: [
            {
                provide: SystemStateService,
                useValue: {
                    newModule: jest.fn(),
                    removeModule: jest.fn(),
                    editModule: jest.fn(),
                    joinModule: jest.fn(),
                    reloadModule: jest.fn(),
                    toggleModuleDebug: jest.fn(),
                    toggleModulePower: jest.fn(),
                    loading: new BehaviorSubject({}),
                    modules: new BehaviorSubject([]),
                    debugging: new BehaviorSubject({}),
                    bindings: new BehaviorSubject([]),
                },
            },
            { provide: MatDialog, useValue: { open: jest.fn() } },
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(ExecuteMethodFieldComponent),
            MockComponent(ItemSearchFieldComponent),
        ],
        imports: [
            MockModule(MatProgressSpinnerModule),
            MockModule(MatMenuModule),
            MockModule(MatCheckboxModule),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it.todo('should allow adding new modules');
    it.todo('should allow adding editing modules');
    it.todo('should allow viewing modules state');
    it.todo('should allow reloading modules');
    it.todo('should allow removing modules');
    it.todo('should allow loading modules');
});
