import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ApplicationService } from './services/app.service';

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            providers: [{ provide: ApplicationService, useValue: jasmine.createSpyObj('ApplicationService', ['log']) }],
            imports: [CommonModule, RouterModule.forRoot([])]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
