import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrokerFormComponent } from './broker-form.component';

describe('BrokerFormComponent', () => {
  let component: BrokerFormComponent;
  let fixture: ComponentFixture<BrokerFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
