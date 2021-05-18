import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DriverFormComponent } from './driver-form.component';

describe('DriverFormComponent', () => {
  let component: DriverFormComponent;
  let fixture: ComponentFixture<DriverFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
