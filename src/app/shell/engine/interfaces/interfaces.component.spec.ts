import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInterfacesComponent } from './interfaces.component';

describe('InterfacesComponent', () => {
  let component: AdminInterfacesComponent;
  let fixture: ComponentFixture<AdminInterfacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInterfacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
