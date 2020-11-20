import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminBrokersComponent } from './brokers.component';

describe('BrokersComponent', () => {
  let component: AdminBrokersComponent;
  let fixture: ComponentFixture<AdminBrokersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBrokersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBrokersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
